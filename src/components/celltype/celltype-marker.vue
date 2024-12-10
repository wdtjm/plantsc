<template>
  <div class="celltype-marker-layout">
      <div class="celltype-intro">
        <div class="celltype">{{ this.intro.lable }}</div>
        <div class="num">
          <div class="single-num">
            <div class="num-type">#heigh confidence</div>
            <div class="circle" style="border-color: rgb(251, 154, 153);">{{ this.intro.heigh }}</div>
          </div>
          <div class="single-num">
            <div class="num-type">#unique</div>
            <div class="circle" style="border-color: rgb(166, 206, 227);" >{{ this.intro.unique }}</div>
          </div>
          <div class="single-num">
            <div class="num-type">#total</div>
            <div class="circle" style="border-color: rgb(178, 223, 138);">{{ this.intro.total }}</div>
          </div>
        </div>
        <div v-if="showSelf" class="celltype-intro-left">
          <div class="celltype-id-title">Celltype ID</div>
          <div class="celltype-id">{{ this.intro.Celltype_Id }}</div>
          <div class="celltype-description-title">Description</div>
          <div class="celltype-description">{{ this.intro.Description }}</div>
        </div>
        <div v-if="showChildren" class="celltype-intro-left">
          <span class="celltype subcelltype-title">subcelltype</span>
          <div class="celltype-intro-left">
              <div class="children-marker" v-for="celltype in children.slice(0,3)" :key="celltype">
              {{ celltype['text'] }}
              </div>
              <div v-if="children.length>3" class="chldren-marker">...</div>
          </div>
        </div>
      </div> 

      <div class="celltype-marker-width">
        <celltypetable ></celltypetable>
      </div>
  </div>
</template>

<script>
import eventBus from '@/js/EventBus';
import celltypetable from '@/components/celltype/celltype-marker-tabel.vue'

export default {
  components:{celltypetable},
  data(){
    return{
      intro:{},
      showChildren:false,
      showSelf:false,
      children:null
    }
  },
  mounted(){
    eventBus.$on('intro',(node,marker)=>{
      this.showChildren = false
      this.showSelf = false
      console.log('celltype-marker:intro:',node)
      console.log('celltype-marker:marker:',marker)
      this.intro = node
      let that = this
      /* this.intro['Celltype_Id']=marker['Celltype_Id']
      this.intro['Description']=marker['Description'] */
      this.$request.post('api/getIdDesp.php',{
        "celltype":this.intro.lable
      })
      .then((resp)=>{
        console.log('getIdDesp',resp.data)
        if(resp.data.length != 0){
          that.intro['Celltype_Id']=resp.data[0]['id']
          that.intro['Description']=resp.data[0]['description']
        }else{
          that.intro['Celltype_Id']='no data'
          that.intro['Description']='no data'
        }
        
        that.showSelf = true
      
      })
      console.log('this.intro',this.intro)
      if('children' in this.intro)
      {
        this.showChildren=true;
        console.log('show children')
      }else{
        console.log('not show children')
      }
      
    });
    this.$eventBus.$on('children-celltypes',(celltypes)=>{
      console.log('celltype-marker:children-types:',celltypes);
      this.children = celltypes;
    })
  },
  beforeDestroy(){
    eventBus.$off('intro');
    eventBus.$off('children-celltypes');
  }
}
</script>

<style scoped>
.celltype-marker-width{
  width: calc(100% - 300px);
}
.celltype-marker-layout{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.celltype-intro{
  margin-top: 30px;
  margin-left: 50px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.celltype{
  font-size: xx-large;
}
.num{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.circle{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* background-color: #f5f5f5; */
  border: 1px solid #ccc;
  font-family: Arial;
  font-size: 24px;
  color: #333;
}
.single-num{
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.num-type{
  font-size: larger;
  margin-top: 10px;
  margin-bottom: 10px;
  opacity: 70%;
  height: 40px;
}
.celltype-id-title{
  margin-top: 10px;
  font-size: large;
  font-weight: 600;
}
.celltype-id{
  margin-top: 10px;
  font-size: medium;
  
}
.celltype-description-title{
  margin-top: 10px;
  font-size: large;
  font-weight: 600;
}
.celltype-description{
  margin-top: 10px;
  text-align: left;
}
.celltype-intro-left{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.subcelltype-title{
  margin-top: 10px;
}
.children-marker{
  margin-top: 10px;
  text-align: left;
}
</style>