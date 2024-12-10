<template>
    <div class="table-page">
          <div class="paging">
          <!--数据显示区域-->
          <div class="data">
              <!--表格存放数组中的数据，并对数据进行截取，以控制每一页显示的数据量-->
              <!--slice(start,end) 不包括end-->
              <el-table
                  :data="tableData.slice(0,pageSize)"
                  style="width: 100%"
                  :header-cell-style="{background:'hsla(241, 80%, 21%, 0.8)',color:'white'}"
                  @filter-change="filterChange" 
                  >
                  
                  <el-table-column 
                  :width="120"
                  column-key="Celltypes"
                  > 
                      <template slot="header" >
                          <div class="table-title" >
                              <div> Celltypes</div>
                              <el-select v-model="celltype" size="mini" style="width:82px;" @change="marker_select_change(celltype)">
                                    <el-option
                                    v-for="item in filterData['Celltypes']"
                                    :key="item.value"
                                    :label="item.text"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                          </div>
                      </template>
                  <template slot-scope="scope">
                      <span class="column-data">{{ scope.row['Celltypes'] }}</span>
                  </template>
                  </el-table-column>
                  
                  <el-table-column  prop="Species" 
                  :width="150"
                  
                  column-key="Species">
                      <template slot="header" >
                          <div class="table-title">
                              <div>Species</div>
                             
                          </div>
                      </template>
                      <template slot-scope="scope">
                          <div slot="reference" class="name-wrapper">
                              <el-tag size="medium">{{ scope.row['Species'] }}</el-tag>
                          </div>
                      </template>
                      </el-table-column>
  
                  <el-table-column label="High confidence genes" prop="High confidence genes" 
                  :filters="filterData['High confidence genes']"
                  :filter-multiple="false" 
                  :width="100"
                  column-key="High confidence genes"
                  >
                      <template slot="header" >
                          <div class="table-title">
                              <div>High confidence genes</div>
                          </div>
                      </template>
                      <template slot-scope="scope">
                      <span class="column-data">{{ scope.row['High confidence genes'] }}</span>
                      </template>
                  </el-table-column>
  
                  <el-table-column label="Unique genes"  prop="Unique genes"
                  :filters="filterData['Unique genes']"
                  :filter-multiple="false" 
                  :width="100"
                  column-key="Unique genes">
                      <template slot="header" >
                          <div class="table-title">
                              <div>Unique genes</div>
                              
                          </div>
                      </template>
                      <template slot-scope="scope">
                      <span class="column-data">{{ scope.row['Unique genes'] }}</span>
                      </template>
                  </el-table-column>
  
                  <el-table-column label="Marker genes" prop="Marker genes" 
                  :width="100"
                  column-key="Marker genes">
                      <template slot="header" >
                          <div class="table-title">
                              <div>Marker genes</div>
                          </div>
                      </template>
                      <template slot-scope="scope">

                      <span class="column-data" @click="goto('/markerdetail',scope.row['Marker genes'])">{{ scope.row['Marker genes'] }}</span>
                      </template>
                  </el-table-column>
  
                  <el-table-column label="Single cell genes"
                  :filters="filterData['Single cell genes']" 
                  :filter-multiple="false"
                  :width="100"
                  column-key="Single cell genes">
                      <template slot="header" >
                          <div class="table-title">
                              <div>Single cell genes</div>
                          </div>
                      </template>
                      <template slot-scope="scope">
                      <span class="column-data">
                          {{ scope.row['Single cell genes'] }}
                      </span>
                      </template>
                  </el-table-column>

                  <el-table-column label="Enzymolysis genes"
                  :filters="filterData['Enzymolysis genes']" 
                  :filter-multiple="false"
                  :width="100"
                  column-key="Enzymolysis genes">
                      <template slot="header" >
                          <div class="table-title">
                              <div>Enzymolysis genes</div>
                          </div>
                      </template>
                      <template slot-scope="scope">
                      <span class="column-data">{{ scope.row['Enzymolysis genes'] }}</span>
                      </template>
                  </el-table-column>

                  <el-table-column label="Spatial genes"
                  :filters="filterData['Spatial genes']" 
                  :filter-multiple="false"
                  :width="100"
                  column-key="Spatial genes">
                      <template slot="header" >
                          <div class="table-title">
                              <div>Spatial genes</div>
                          </div>
                      </template>
                      <template slot-scope="scope">
                      <span class="column-data">
                          {{ scope.row['Spatial genes'] }}
                      </span>
                      </template>
                  </el-table-column>
  
                  <el-table-column label="Avg_log2FC"
                  :filters="filterData['Avg_log2FC']" 
                  :width="120"
                  column-key="Avg_log2FC">
                      <template slot="header" >
                          <div class="table-title">
                              <div>Avg_log2FC</div>
                              
                          </div>
                      </template>
                      <template slot-scope="scope">
                      <span class="column-data">
                          {{ scope.row['Avg_log2FC']=="/"?scope.row['Avg_log2FC']:Number(scope.row['Avg_log2FC']).toFixed(3) }}
                      </span>
                      </template>
                  </el-table-column>
  
                  <el-table-column label="COSG score"
                  :width="80"
                  :filters="filterData['COSG score']" 
                  column-key="COSG score">
                      <template slot="header" >
                          <div class="table-title">
                              <div>COSG score</div>
                              
                          </div>
                      </template>
                      <template slot-scope="scope">
                      <span class="column-data">
                          {{ scope.row['COSG score']=="/"?scope.row['COSG score']:Number(scope.row['COSG score']).toFixed(3) }}
                      </span>
                      </template>
                  </el-table-column>
  
                  <el-table-column label="Pct 1"
                  :filters="filterData['Pct 1']" 
                  :width="80"
                  column-key="Pct 1">
                      <template slot="header" >
                          <div class="table-title">
                              <div>Pct 1</div>
                              
                          </div>
                      </template>
                      <template slot-scope="scope">
                      <span class="column-data">
                        {{ scope.row['Pct 1']=="/"?scope.row['Pct 1']:Number(scope.row['Pct 1']).toFixed(3) }}
                      </span>
                      </template>
                  </el-table-column>
  
                  <el-table-column label="Pct 2"
                  :width="80"
                  :filters="filterData['Pct 2']" 
                  column-key="Pct 2">
                      <template slot="header" >
                          <div class="table-title">
                              <div>Pct 2</div>
                             
                          </div>
                      </template>
                      <template slot-scope="scope">
                      <span class="column-data">
                        {{ scope.row['Pct 2']=="/"?scope.row['Pct 2']:Number(scope.row['Pct 2']).toFixed(3) }}
                      </span>
                      </template>
                  </el-table-column>
  
                  <el-table-column label="Proportion"
                  :width="120"
                  :filters="filterData['Proportion']" 
                  column-key="Proportion">
                      <template slot="header" >
                          <div class="table-title">
                              <div>Proportion</div>
                          </div>
                      </template>
                      <template slot-scope="scope">
                      <span class="column-data">
                          {{ scope.row['Proportion']=="/"?scope.row['Proportion']:Number(scope.row['Proportion']).toFixed(3) }}
                      </span>
                      </template>
                  </el-table-column>
  
                  <el-table-column label="Source"
                  :width="130"
                  :filters="filterData['Source']" 
                  column-key="Source">
                      <template slot="header" >
                          <div class="table-title">
                              <div>Source</div>
                          </div>
                      </template>
                      <template slot-scope="scope">
                      <span class="column-data">
                          {{ scope.row['Source'] }}
                      </span>
                      </template>
                  </el-table-column>
  
  
              </el-table>
          </div>
          <!--分页按钮-->
          <div class="marker-table-bottom">
          <el-pagination
                  background
                  class="paniga"
                  layout="prev, pager, next,jumper, ->, total"
                  :total="totalnum"
                  :page-sizes="[10]"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="pageSize"
                  style="text-align: center">
          </el-pagination>
          <download-excel class="marker-table-download" :fetch="getDownloadData" type="csv"
          name="table.xls"  :data='downloadData' >
                <el-button type='primary' :disabled="isDownloading">
                    <div style="display: flex; flex-direction: row; align-items: center;">
                        <div>Download</div>
                        <img v-show="isDownloading" class="downloading" src="@/assets/downloading.svg">
                    </div>
                </el-button>
            </download-excel>
          </div>
          <p>

      </p>
        </div>
      </div>
  </template>
  
  <script>
  import { transfer } from '@/js/TreeToArray'
  import { cellTree } from '@/js/cellTree'
import download from '@/pages/download.vue'
  export default {
  components: { download },
    data(){
      return{
        tableData:null,
        downloadData:[{"Marker genes":"124","Celltypes":"456"}],
        originData:null,
        currentPage: 1, //当前页 刷新后默认显示第一页
        pageSize: 10, //每一页显示的数据量 此处每页显示6条数据
        filterData:{},
        filteredData:null,
        species:'Arabidopsis thaliana',
        inputFilter:{
          "Avg_log2FC":'',
          "COSG score":'',
          "Pct 1":'',
          "Pct 2":'',
        },
        filters:{},
        totalnum:0,
        celltree:cellTree,
        searchMarker:null,
        celltype: '',
        json_fields:{
            marker:"Marker genes",
            celltype:"Celltypes"
        },
        isDownloading:false
      }
    },
    methods:{
       async getDownloadData(){
        this.isDownloading=true
          var res = await this.$request.post('api/getMarkerByPage.php',{
            "currentPage":1,
            "pageSize":this.totalnum,
            "Celltypes":this.filters['Celltypes']?((this.filters['Celltypes'][0]=="ALL")?"":this.filters['Celltypes'][0]):"",
            "High confidence genes":this.filters['High confidence genes']?this.filters['High confidence genes'][0]:"",
            "Unique genes":this.filters['Unique genes']?this.filters['Unique genes'][0]:"",
            "Enzymolysis genes":this.filters['Enzymolysis genes']?this.filters['Enzymolysis genes'][0]:"",
            "Single cell genes":this.filters['Single cell genes']?this.filters['Single cell genes'][0]:"",
            "Spatial genes":this.filters['Spatial genes']?this.filters['Spatial genes'][0]:"",
            "Marker genes":this.searchMarker||"",
            "species":this.species
          })
          this.isDownloading=false
          return res.data['data']
        },
        goto(index,name){
                this.$marker['name'] = name
                this.$marker['species']=this.species
                this.$router.push(index).catch(err => {});
        },
      marker_select_change(val){
        this.filters['Celltypes']=[val];
        this.filterChange(this.filters)
      },
      filterChange(filters){
          console.log('filters',filters)
          this.tableData=this.originData
          for(var key in filters){
            this.filters[key]=filters[key]
          }
          console.log('this.filters',this.filters)
          let that = this
          this.$request.post('api/getMarkerByPage.php',{
            "currentPage":this.currentPage,
            "pageSize":this.pageSize,
            "Celltypes":this.filters['Celltypes']?((this.filters['Celltypes'][0]=="ALL")?"":this.filters['Celltypes'][0]):"",
            "High confidence genes":this.filters['High confidence genes']?this.filters['High confidence genes'][0]:"",
            "Unique genes":this.filters['Unique genes']?this.filters['Unique genes'][0]:"",
            "Enzymolysis genes":this.filters['Enzymolysis genes']?this.filters['Enzymolysis genes'][0]:"",
            "Single cell genes":this.filters['Single cell genes']?this.filters['Single cell genes'][0]:"",
            "Spatial genes":this.filters['Spatial genes']?this.filters['Spatial genes'][0]:"",
            "Marker genes":this.searchMarker||"",
            "species":this.species
          }).then(response=>{
                console.log('response',response)
                that.tableData=response.data['data']
                that.totalnum=Number(response.data['num'])
            })
          /* for(var key in this.filters)
          {
              if(this.filters[key].length == 0)
              {
                  continue
              }
              this.tableData=this.tableData.filter((value)=>{
                  return this.filters[key].indexOf(value[key])!=-1;
              })
          }
          this.filteredData = this.tableData */
      },
      //点击按钮切换页面
      handleCurrentChange(currentPage) {
          this.currentPage = currentPage; //每次点击分页按钮，当前页发生变化
          // console.log(this.currentPage);
          this.filterChange(this.filters)
        },
      getCelltypes(){
        let that = this
        this.$request.post('api/getCelltypesBySpecies.php',{
            "species":this.species
        }).then(response=>{
            let celltypearr = [{"text":"ALL","value":"ALL"}]
            response.data.forEach(e=>{
                celltypearr=celltypearr.concat({"text":e['Celltypes'],"value":e['Celltypes']})
            })
            that.filterData['Celltypes'] = celltypearr
        })
      }
    },
    mounted(){
        this.$eventBus.$on('marker-species-change',val=>{
            this.species=val
            this.filterChange(this.filters)
        })
        this.$eventBus.$on('marker-search-change',val=>{
            this.searchMarker=val
            this.filterChange(this.filters)
        })
      //获取路由参数species和gene
      let species = this.$route.query.species
      if (species && species!=="null") {
        this.species = species
      }
        this.filterData['High confidence genes']=[{"text":"Yes","value":"Yes"},{"text":"No","value":"No"}];
        this.filterData['Unique genes']=[{"text":"Yes","value":"Yes"},{"text":"No","value":"No"}];
        this.filterData['Enzymolysis genes']=[{"text":"Yes","value":"Yes"},{"text":"No","value":"No"}];
        this.filterData['Single cell genes']=[{"text":"Yes","value":"Yes"},{"text":"No","value":"No"}];
        this.filterData['Spatial genes']=[{"text":"Yes","value":"Yes"},{"text":"No","value":"No"}];
        console.log('this.filterData:',this.filterData)
        this.getCelltypes()
        let that = this
        this.$request.post('api/getMarkerByPage.php',{
            "currentPage":1,
            "pageSize":10,
            "Celltypes":"",
            "High confidence genes":"",
            "Unique genes":"",
            "Enzymolysis genes":"",
            "Single cell genes":"",
            "Spatial genes":"",
            "Marker genes":"",
            "species":this.species
        }).then(response=>{
            console.log('response',response)
            that.tableData=response.data['data']
            that.totalnum=Number(response.data['num'])
        })
    },
    beforeDestroy(){
    this.$eventBus.$off('marker-search-change');
    this.$eventBus.$off('marker-species-change');
  }
  }
  </script>
  
  <style lang="less" scoped>
  .el-select-dropdown__item.selected{
    font-weight: 700 !important;
    color: #277990 !important;
  }
    .el-table /deep/ .cell {
      overflow: auto !important;
      display:flex;
      flex-direction: row;
      align-items: center;
    }
    .el-table /deep/ .el-icon-arrow-down:before {
      color:white;
    }
  .column-data{
      word-break:keep-all;
      overflow: visible !important;
  }
  .table-title{
      word-break: keep-all;
  }
  .table-page{
    display: flex;
    flex-direction: column;
    align-items: center;
      word-break: keep-all;
      background-color: white;
      width: 100%;
  }
  
  .paging {
      width: 95%;
      margin: 50px auto;
      margin-top: 20px;
    }
   
  .data {
    
    width: min(1430px,100%);
    /* width:min(1330px, calc(100% - 40px)); */
    /* width: 1330px; */
    /* height: 340px; */
    /* border: 2px solid #cccccc; */
      margin: 10px auto;
      text-align: center;
    }
    .marker-table-bottom{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .paniga{
        width: 70%;
    }
    .marker-table-download{
        width: 50px;
        margin-right: 50px;
    }
    .downloading{
        width: 25px;
        height: 25px;
        animation: turn 2.5s linear infinite;
    }

@keyframes turn {
    0% {
        transform: rotate(0deg);
    }

    20% {
        transform: rotate(72deg);
    }

    40% {
        transform: rotate(144deg);
    }

    60% {
        transform: rotate(216deg);
    }

    80% {
        transform: rotate(288deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

  </style>