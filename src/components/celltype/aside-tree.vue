<template>
  <div class="tree-container">
    <el-input
      class="celltype-tree-input"
      placeholder="Search"
      v-model="filterText">
    </el-input>
      <el-tree
        :data="trees"
        :highlight-current="true"
        node-key="lc_id"
        :indent="0"
        default-expand-all
        :filter-node-method="filterNode"
        draggable
        style="width: 700px;"
        :allow-drop="allowDrop"
        @node-drag-end="handleDragEnd"
        class="tree"
        ref="tree"
      >
        <template v-slot:default="{ data }">
          <div :class="{'flex-tree-children':data.children,'flex-tree-no-children':!data.children,'cursor-ban':data.total==0}"
          @click.stop="handleNodeClick(data)"
          >
            <div class="icon-and-node">
              <span v-if="data.children" class="iconfont"> 
                <img v-if="data.total==0" class="iconfont" src="../../assets/plant-inactive.png"> 
                <img v-else class="iconfont" src="../../assets/plant.png"> 
              </span> 
              <span v-else class="iconfont" style="margin-right: 3px">
                <img v-if="data.total==0" class="iconfont" src="../../assets/cell-inactive.png">
                <img v-else class="iconfont" src="../../assets/cell.png">
              </span>  
              {{ data.lable }}
            </div>
            <!-- <div v-show="node.data.lc_id !== 'container'">
              <el-icon @click.stop="delNode(node)"><l-delete /></el-icon>
            </div> -->
          </div>
        </template>
      </el-tree>
    </div>
</template>

<script>
import VJstree from 'vue-jstree';
import { cellTree } from '@/js/cellTree';
import eventBus from '@/js/EventBus';
import filterNullNode from "@/js/filterNullNode";

export default {
  watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      } 
    },
    components:{VJstree},
    methods:{
      handleNodeClick(node){
        console.log('treenode',node);
        eventBus.$emit('marker',node);
        /* eventBus.$emit('intro',node); */
        eventBus.$emit('treeClick',node.tissue);
        /* console.log('node-lable',node.lable,'node-tissue',node.tissue); */
      }
      ,
      filterNode(value, data) {
        /* console.log('data:',data['lable']);
        console.log('value:',value); */
        if (!value) return true;
        if(data['lable']==null) return false;
        return data['lable'].indexOf(value) !== -1;
      }
    },
    mounted(){
      eventBus.$on('speciesChange',(species)=>{ 
        this.trees=this.$treedata['data'];
        console.log('celltree:',this.trees);
        for(let i=0;i<this.trees.length;i++){
          if(this.trees[i].total==0){
            this.trees.splice(i,1);
            i--;
          }else{
            this.trees[i]=filterNullNode(this.trees[i]);
          }
        }
      })
    },
    data(){
        return{
          filterText: '',
          trees: null
        }
    },
    beforeDestroy(){
      eventBus.$off('speciesChange');
    }
    
}
</script>

<style>
.cursor-ban{
  cursor:not-allowed;

}

.el-input.is-active .el-input__inner, .el-input__inner:focus{
  border-color: #31850a !important;
}
.icon-and-node{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.celltype-tree-input{
  margin: 10px;
  margin-top: 5px;
}

.iconfont{
  height: 15px;
  width: 15px;
}
.flex-tree-children{
  margin-left: -4px;
}
.flex-tree-no-children{
  margin-left: 6px;
}
   /* // 如果不生效试试这个 :deep(.el-tree .el-tree-node__expand-icon.expanded){样式}*/
    /* // 禁止旋转 */
    .el-tree .el-tree-node__expand-icon.expanded {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

  /*展开收起图标 */
    /* //有子节点 且未展开 */
    .el-tree .el-icon-caret-right:before {
        background: url('../../assets/open.png') no-repeat 0 3px;
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        font-size: 16px;
        background-size: 16px;
    }
    /* //有子节点 且已展开 */
    .el-tree .el-tree-node__expand-icon.expanded.el-icon-caret-right:before {
        background: url('../../assets/close.png') no-repeat 0 3px;
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        font-size: 16px;
        background-size: 16px;
    }

    /* //没有子节点 */
    .el-tree .el-tree-node__expand-icon.is-leaf::before {
        background: #fff;
        content: '';
        display: block;
        width: 0px;
        height: 0px;
        font-size: 16px;
        background-size: 16px;
    }
    
    /* //高亮字体颜色 */
    .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
        color: #31850a !important;
    }

/*设置展开收起图标 */
.el-tree .el-tree-node__expand-icon.expanded {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}

/* .el-tree .el-icon-caret-right:before {
  
  content: "\e723";
}
.el-tree .el-tree-node__expand-icon.expanded.el-icon-caret-right:before{
  content: "\e722";
  
} */


.vjstree{
  width: 600px;
}
 
/* 树形结构节点添加连线 css */
.tree .el-tree-node {
  position: relative;
   padding-left: 16px;
}
 
.tree .el-tree-node__children {
  padding-left: 16px;
}

.tree .el-tree-node__content{
  align-items: center;
}

.tree .el-tree-node :last-child:before {
  height: 38px;
}
 
.tree .el-tree > .el-tree-node:before {
  border-left: none;
}
.tree-container .el-tree > .el-tree-node:after {
  border-top: none;
}
 
.tree .el-tree-node__children .el-tree-node:before {
  content: "";
  left: -4px;
  position: absolute;
  right: auto;
  border-width: 2px;
}
 
.tree .el-tree-node:after {
  content: "";
  left: -4px;
  position: absolute;
  right: auto;
  border-width: 2px;
}
.tree .el-tree-node__expand-icon.is-leaf {
  display: none;
}
 
.tree .el-tree-node:before {
  border-left: 2px dashed #31850a;
  bottom: 0px;
  height: 100%;
  top: -26px;
  width: 1px;
}
 
.tree .el-tree-node:after {
  border-top: 2px dashed #31850a;
  height: 20px;
  top: 12px;
  width: 24px;
}
.tree .custom-tree-node {
  padding-left: 10px;
}
</style>