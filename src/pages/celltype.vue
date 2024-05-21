<template>
  <div style="background-color: white;">
    <div class="under-navbar">
    </div>
    <div class="celltype-container">
      <div>
        <el-container>
          <el-header class="celltype-header">
            <el-select v-model="species" @change="speciesChange(species)" filterable placeholder="请选择">
                <el-option
                v-for="item in plants"
                :key="item.name"
                :label="item.name"
                :value="item.name">
                </el-option>
            </el-select>
          </el-header>

          <el-container>
            <el-aside v-loading="isLoading" style="overflow: hidden; ;width: 350px !important;" >
              <div class="celltype-aside" style="padding: 0;">
                <asideTree></asideTree>
              </div>
            </el-aside>
            <el-main v-loading="isLoading" class="celltype-main">
              <mainPieVue class="halfwidth"></mainPieVue>
              <celltypeScatterVue class="halfwidth"></celltypeScatterVue>
            </el-main>
          </el-container>
          <celltypeMakker v-loading="isMarkerLoading" v-if="ifMarker"></celltypeMakker>
          <div class="pagewhite"></div>
        </el-container>
      </div>
    </div>
  </div>

</template>

<script>
import celltypeheader from '@/components/celltype/celltypeheader.vue';
import {plants} from '@/js/plants';
import { transfer } from '@/js/TreeToArray';
import asideTree from '@/components/celltype/aside-tree.vue';
import celltypeMainVue from '@/components/celltype/celltype-main.vue';
import eventBus from '@/js/EventBus';
import celltypeScatterVue from '../components/celltype/celltype-scatter.vue';
import mainPieVue from '../components/celltype/main-pie.vue';
import celltypeMakker from '../components/celltype/celltype-marker.vue';

export default {
  components:{celltypeheader,asideTree,celltypeMainVue,mainPieVue,celltypeScatterVue,celltypeMakker},
  data(){
    return{
      species:'Oryza Sativa',
      plants:plants,
      isLoading:'true',
      marker:{},
      ifMarker:false,
      isMarkerLoading:false
    }
  },
  methods:{
    speciesChange(val){
      this.getTreeData(val);
    },
    pushMsg(msg,value){
            	// 通过事件总线发送消息
                eventBus.$emit(msg,value);
            },
    getTreeData(speciesName){
      let that = this;
      this.$request.post('/api/TreeDataGet/getTree.php',{
        "name":speciesName
      })
      .then(function (response) {
          // 处理成功情况
          let requestData = response.data;
          //console.log('treedatat response:',response.data);
          that.$treedata['data'] = requestData;
          that.pushMsg('speciesChange',that.species);
          that.pushMsg('treeClick',that.$treedata['data'][0].lable)
          that.isLoading=false
          //console.log('that.$treedata:',that.$treedata);
      })
      .catch(function (error) {
          // 处理错误情况
          console.log(error);
      })
      .finally(function () {
          // 总是会执行
      });

},
  },
  mounted(){
    eventBus.$on('marker',(node)=>{
      this.ifMarker=true;
      this.isMarkerLoading=true;
      const that  = this;
      /* console.log('celltype:',node); */
      if(node.total==0){
        this.marker={}
      }else{
        let array = transfer(node);
        console.log('get marker array',array);
        this.$request.post('/api/getMarker.php',{
          array:array,
          species:this.species
        })
        .then((response)=>{
          console.log('getmarker response',response);
          this.$eventBus.$emit('intro',node,response['data'][0]);
          this.$eventBus.$emit('marker-table',response['data'])
          that.isMarkerLoading=false
        })
      }
    })
    
    this.isLoading='true'
    if(this.$route.params.species){
      this.species=this.$route.params.species;
    }
    
    this.getTreeData('Oryza sativa');
  },
  beforeDestroy(){
    eventBus.$off('marker');
  }
}
</script>

<style>
.celltype-header{
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  
}
.celltype-main{
  border: 2px solid hsla(0,0%,50%,50%);
  border-radius: 5px;
  margin-left: 30px;
  display: flex !important;
  flex-direction: row !important;
}
.celltype-aside{
  overflow-y:scroll;
  overflow-x:scroll !important;
  height: 500px;
 /*  width:350px !important; */
  padding: 10px;
  margin-top: 10px;
  border: 2px solid hsla(0,0%,50%,50%);
  border-radius: 5px;
}
.celltype-container{
  width: 95%;
  margin-left: 2.5%;
  background-color: white;
}
.under-navbar{
  height: 65px;
  width: 100%;
  background-color: hsla(123,47.6%,91.8%,100%);
}
/**select 样式 */
.el-select .el-input__inner:focus{
  border-color: #6db94a !important;
}

.el-select .el-input.is-focus .el-input__inner{
  border-color:#6db94a !important;
}

.el-select-dropdown__item.selected{
  font-weight: 700 !important;
  color:#6db94a !important;
}

.halfwidth{
    width: 50%;
  }
  .pagewhite{
    height: 150px;
  }
</style>