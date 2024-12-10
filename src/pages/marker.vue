<template>
    <div style="background-color: white;" class="marker-layout">
    <div class="under-navbar"></div>
    <div class="marker-top maxwidth-total">
      <div class="marker-two-button maxwidth-button">
        <el-select
        style="width: 150px;"
        v-model="species" @change="speciesChange(species)" filterable placeholder="请选择">
            <el-option
            v-for="item in plants"
            :key="item.name"
            :label="item.name"
            :value="item.name">
            </el-option>
        </el-select>
        <el-input
        style="width: 150px;margin-top: 10px;"
        placeholder="Search marker..."
        prefix-icon="el-icon-search"
        @change="markerSearchChange"
        v-model="markerSearch">
        </el-input>
      </div>

      <div class="num">
          <div class="single-num">
            <div class="num-type">Tissues</div>
            <div class="circle" style="border-color: rgb(251, 154, 153);">{{ this.total['Tissues'] }}</div>
          </div>
          <div class="single-num">
            <div class="num-type">Celltypes</div>
            <div class="circle" style="border-color: rgb(166, 206, 227);" >{{ this.total['Celltypes'] }}</div>
          </div>
          <div class="single-num">
            <div class="num-type">Total marker</div>
            <div class="circle" style="border-color: rgb(178, 223, 138);">{{ this.total['Total'] }}</div>
          </div>
          <div class="single-num">
            <div class="num-type">Unique marker</div>
            <div class="circle" style="border-color: rgb(166, 206, 227);" >{{ this.total['Unique'] }}</div>
          </div>
          <div class="single-num" style="width: 210px;">
            <div class="num-type">High confidence marker</div>
            <div class="circle" style="border-color: rgb(178, 223, 138);">{{ this.total['High'] }}</div>
          </div>
        </div>
  </div>
    <div class="marker-table">
      <markerTable ></markerTable>
    </div>
    </div>
  </template>
  
  <script>
  import {plants} from '@/js/plants';
  import markerTable from '@/components/marker/marker-table.vue';

  export default {
    data(){
        return{
          species:'Arabidopsis thaliana',
          plants:plants,
          markerSearch:null,
          total:{
            "Tissues":0,
            "Celltypes":0,
            "Total":0,
            "Unique":0,
            "High":0
          }
        }
    },
    components:{markerTable},
    methods:{
      getTotal(){
        let that = this
        this.$request.post('api/getMarkerTotal.php',{
          "species":this.species
        }).then(Response=>{
          console.log('total-response:',Response.data)
          that.total=Response.data
        })
      },
      markerSearchChange(){
        
        this.$eventBus.$emit('marker-search-change',this.markerSearch)
      },
      speciesChange(val){
      this.getTotal()
      this.$eventBus.$emit('marker-species-change',val);
    }
    },
    mounted () {
      //获取路由参数species和gene
      let species = this.$route.query.species
      if (species && species!=="null") {
        this.species = species
        this.$eventBus.$emit('changeActiveIndex',"/marker")
      }


      this.getTotal()
      this.$eventBus.$emit('marker-species-change',this.species);
    }
  }
  </script>
  
  <style>
  @media screen and (min-width: 1700px) {
  .maxwidth-total {
    justify-content: center;
  }
  .maxwidth-button{
    margin-left: -22% !important;
  }
}
  .marker-layout{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .marker-table{
    width: 96%;
    margin-top: 8px;
  }
  .marker-top{
    width: 100%;
    padding-left: 4%;
    display: flex;
    flex-direction: row;
  }
  .marker-two-button{
    margin-top: 10px;
    margin-left: 2.5%;
    padding-left: 20px;
    height: 40px;
    display: flex;
    flex-direction: column;
  }
  .loading{
    width: 100%;
    height: 800px;
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
  width: 80px;
  height: 40px;
  border-radius: 10%;
  /* background-color: #f5f5f5; */
  border: 1px solid #ccc;
  font-family: Arial;
  font-size: 24px;
  color: #333;
}
.single-num{
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.num-type{
  font-size: larger;
  margin-top: 10px;
  margin-bottom: -10px;
  opacity: 70%;
  height: 40px;
}
  </style>