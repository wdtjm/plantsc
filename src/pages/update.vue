<template>
  <div style="background-color: white;display:flex;flex-direction: column;align-items: center;"  >
    <div class="under-navbar"></div>
    <!-- <div class="update-layout"> -->
    <el-button @click="updateall()">update all</el-button>
    <div>status:</div>
    <div style="width: 400px;height: 120px;border:1px solid black;overflow: auto;">
      <div v-for="(line,index) in msg" :key="index">{{ line }}</div>
    </div>
    <div class="update-text" v-if="num!=-1">updating all, complete {{ complete }}/{{ plants.length }} , success: {{ success }}</div>
    
    <div style="background-color: white;" class="update-main">
        <div class="update-button-div update-buttons">
        <el-button class="update-button" v-for="(plant,index) in plants" :key="index" @click="update(plant['name'])">{{ plant.name }}</el-button>
        </div>  
    </div>
</div>
<!-- </div> -->
</template>

<script>
import { plants } from '@/js/plants';
export default {
  watch:{
    num(){
      if(this.num>38){
        this.num=-1;
      }
      if(this.num!=-1){
        let that=this
        let e=plants[that.num];
        
        that.msg.push(''+e['name']+' is updating')
        that.$request.post('api/TreeDataGet/treedata.php',{
          "name":e['name']
        }).then(res=>{
          that.complete+=1;
          that.success+=1;
          that.msg.push(res.data);
          that.num+=1;
        })
        .catch(error=>{
          that.complete+=1;
          console.log('error',error)
          that.msg.push(error.response.data)
          that.num+=1;
        })
        
        
      }
    }
  },
  data(){
    return {
      plants:plants,
      update_all:false,
      complete:0,
      success:0,
      msg:[],
      num:-1
    }
  },
  methods:{
    update(name){
      let that = this
      this.msg.push(''+name+' is updating')
      this.$request.post('api/TreeDataGet/treedata.php',{
        "name":name
      }).then(res=>{
        that.msg.push(res.data);
      })
      .catch(error=>{
        that.msg.push(error.message)
      })

    },
    updateall(){
      this.complete=0
      if(this.num!=-1){
        this.num=0;
      }else{
        this.num=-1;
      }
      /* this.update_all=true
      let that=this
      
      plants.forEach(e=>{
        this.msg.push(''+e['name']+' is updating')
        this.$request.post('api/TreeDataGet/treedata.php',{
        "name":e['name']
      }).then(res=>{
        that.complete+=1;
        that.success+=1;
        that.msg.push(res.data);
      })
      .catch(error=>{
        that.complete+=1;
        console.log('error',error)
        that.msg.push(error.response.data)
        
      })
      }) */
    }
  }
  
}

</script>

<style>
.update-layout{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.update-aside{
  width: 30%;
}
.update-main{

  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.update-buttons{
  width: 90%;

}
.update-button-div{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;

  height: 600px;
}
.update-button{
  width: 160px;
  word-wrap:break-word; 
  word-break:normal;
  white-space: normal;
  height: auto;
  overflow: hidden;
  margin-left: 10px !important;
}
</style>