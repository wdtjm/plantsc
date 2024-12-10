<template>
  <div class="table-page">
        <div class="paging">
        <!--数据显示区域-->
        <div class="data">
            <!--表格存放数组中的数据，并对数据进行截取，以控制每一页显示的数据量-->
            <!--slice(start,end) 不包括end-->
            <el-table
                :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                style="width: 100%"
                :cell-style="cellstype"
                :header-cell-style="{background:'hsla(241, 80%, 21%, 0.8)',color:'white'}"
                @filter-change="filterChange" 
                >
                
                <el-table-column 
                :width="180"
                :filters="filterData['Celltypes']" 
                column-key="Celltypes"
                > 
                    <template slot="header" >
                        <div class="table-title" >
                            <div>Celltypes</div>
                        </div>
                    </template>
                <template slot-scope="scope">
                    <span class="column-data">{{ scope.row['Celltypes'] }}</span>
                </template>
                </el-table-column>
                
                <el-table-column  prop="Species" 
                :width="150"
                :filters="filterData['Species']" 
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
                :width="120"
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
                :filters="filterData['Marker genes']" 
                :width="120"
                column-key="Marker genes">
                    <template slot="header" >
                        <div class="table-title">
                            <div>Marker genes</div>
                        </div>
                    </template>
                    <template slot-scope="scope">
                    <span class="column-data">{{ scope.row['Marker genes'] }}</span>
                    </template>
                </el-table-column>

                <el-table-column label="Single cell genes"
                :filters="filterData['Single cell genes']" 
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
                :width="120"
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
                            <div>>= <span><input v-model="inputFilter['Avg_log2FC']" @change="inputFilterChange" style="width:35px"></span></div>
                        </div>
                    </template>
                    <template slot-scope="scope">
                    <span class="column-data">
                        {{ scope.row['Avg_log2FC']=="/"?scope.row['Avg_log2FC']:Number(scope.row['Avg_log2FC']).toFixed(3) }}
                    </span>
                    </template>
                </el-table-column>

                <el-table-column label="COSG score"
                :width="120"
                :filters="filterData['COSG score']" 
                column-key="COSG score">
                    <template slot="header" >
                        <div class="table-title">
                            <div>COSG score</div>
                            <div>>= <span><input v-model="inputFilter['COSG score']" @change="inputFilterChange" style="width:35px"></span></div>
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
                :width="100"
                column-key="Pct 1">
                    <template slot="header" >
                        <div class="table-title">
                            <div>Pct 1</div>
                            <div>>= <span><input v-model="inputFilter['Pct 1']" @change="inputFilterChange" style="width:35px"></span></div>
                        </div>
                    </template>
                    <template slot-scope="scope">
                    <span class="column-data">
                        {{ scope.row['Pct 1']=="/"?scope.row['Pct 1']:Number(scope.row['Pct 1']).toFixed(3) }}
                    </span>
                    </template>
                </el-table-column>

                <el-table-column label="Pct 2"
                :width="100"
                :filters="filterData['Pct 2']" 
                column-key="Pct 2">
                    <template slot="header" >
                        <div class="table-title">
                            <div>Pct 2</div>
                            <div>&lt;= <span><input v-model="inputFilter['Pct 2']" @change="inputFilterChange" style="width:35px"></span></div>
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
        <el-pagination
                background
                layout="prev, pager, next,jumper, ->, total"
                :total="tableData.length"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="pageSize"
                style="text-align: center">
        </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      tableData:null,
      originData:null,
      currentPage: '1', //当前页 刷新后默认显示第一页
      pageSize: '20', //每一页显示的数据量 此处每页显示6条数据
      filterData:{},
      filteredData:null,
      inputFilter:{
        "Avg_log2FC":'',
        "COSG score":'',
        "Pct 1":'',
        "Pct 2":'',
      },
      filters:{}
    }
  },
  methods:{
    inputFilterChange(){
        this.tableData = this.filteredData
        //console.log('inputFilterChange:',this.inputFilter)
        if(this.inputFilter['Avg_log2FC'] != ''){
            this.tableData = this.tableData.filter((val)=>{
                if(val['Avg_log2FC'] == '/'){
                    return false;
                }else{
                    return parseFloat(val['Avg_log2FC']) >= parseFloat(this.inputFilter['Avg_log2FC'])
                }
            })
        }

        if(this.inputFilter['COSG score'] != ''){
            this.tableData = this.tableData.filter((val)=>{
                if(val['COSG score'] == '/'){
                    return false;
                }else{
                    return parseFloat(val['COSG score']) >= parseFloat(this.inputFilter['COSG score'])
                }
            })
        }

        if(this.inputFilter['Pct 1'] != ''){
            this.tableData = this.tableData.filter((val)=>{
                if(val['Pct 1'] == '/'){
                    return false;
                }else{
                    return parseFloat(val['Pct 1']) >= parseFloat(this.inputFilter['Pct 1'])
                }
            })
        }

        if(this.inputFilter['Pct 2'] != ''){
            this.tableData = this.tableData.filter((val)=>{
                if(val['Pct 2'] == '/'){
                    return false;
                }else{
                    return parseFloat(val['Pct 2']) <= parseFloat(this.inputFilter['Pct 2'])
                }
            })
        }
    },
    getMaxLength (arr) {
          return arr.reduce((acc, item) => {
          if (item) {
            const calcLen = this.getTextWidth(item)
            if (acc < calcLen) {
              acc = calcLen
            }
          }
            return acc
          }, 0)
        },
      /**
       * 使用span标签包裹内容，然后计算span的宽度 width： px
       * @param valArr
       */
      getTextWidth (str) {
        let width = 0
        const html = document.createElement('span')
        html.innerText = str
        html.className = 'getTextWidth'
        document.querySelector('body').appendChild(html)
        width = document.querySelector('.getTextWidth').offsetWidth
        document.querySelector('.getTextWidth').remove()
        return width
      },
      /**
       * el-table-column 自适应列宽
       * @param prop_label: 表名
       * @param table_data: 表格数据
       */
      flexColumnWidth (label) {
        // console.log('label', label)
        // console.log('prop', prop)
        // 1.获取该列的所有数据
        //console.log('this.tabledata',this.tableData)
        const arr = this.tableData.map(x => x[label])
        arr.push(label) // 把每列的表头也加进去算
        // console.log(arr)
        // 2.计算每列内容最大的宽度 + 表格的内间距（依据实际情况而定）
        let len = this.getMaxLength(arr)
        //console.log('len:',len)
        if(len>240)
        {
            len = 160;
        }
        return len + 20 + 'px'
      },
    columnWidth(lable){
        console.log('columnwidth:',lable)
        return '300px'
    },
    cellstype({row, column, rowIndex, columnIndex}){
        return {"overflow":"visible"}
    },
    filterChange(filters){
        console.log('filters',filters)
        this.tableData=this.originData
        for(var key in filters){
            this.filters[key]=filters[key]
          }
        for(var key in this.filters)
        {
            if(this.filters[key].length == 0)
            {
                continue
            }
            this.tableData=this.tableData.filter((value)=>{
                return this.filters[key].indexOf(value[key])!=-1;
            })
        }
        this.filteredData = this.tableData
    },
    filter(value, row, column)
    {
        if(value===row[column['columnKey']])
        {
            return true;
        }
        else{
            return false
        }
    },
    //点击按钮切换页面
    handleCurrentChange(currentPage) {
        this.currentPage = currentPage; //每次点击分页按钮，当前页发生变化
        // console.log(this.currentPage);
      },
    getFilterData(name){
      return Array.from(new Set(this.tableData.map((obj,index)=>{
          return obj[name]}))).map((obj,index)=>{
          return Object.assign({},{'text':obj,'value':obj}) });
    }
  },
  mounted(){
    this.$eventBus.$on('celltype-marker-table',(data)=>{
      //console.log('this.tableData',data)
      this.tableData=data;
      this.originData=data;
      this.filteredData = data;
      this.filterData['Celltypes']=this.getFilterData('Celltypes');
      this.filterData['Species']=this.getFilterData('Species');
      this.filterData['High confidence genes']=this.getFilterData('High confidence genes');
      this.filterData['Unique genes']=this.getFilterData('Unique genes');
      this.filterData['Marker genes']=this.getFilterData('Marker genes');
      this.filterData['Enzymolysis genes']=this.getFilterData('Enzymolysis genes');
      this.filterData['Single cell genes']=this.getFilterData('Single cell genes');
      this.filterData['Spatial genes']=this.getFilterData('Spatial genes');
      console.log('this.filterData:',this.filterData)
      this.$eventBus.$emit('children-celltypes',this.filterData['Celltypes'])


      
    })
  },
  beforeDestroy(){
    eventBus.$off('celltype-marker-table');
  }
}
</script>

<style lang="less" scoped>
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
    word-break: keep-all;
    background-color: white;
    width: 100%;
}

.paging {
    width: 95%;
    margin: 50px auto;
  }
 
.data {
    width: 98%;
    /* height: 340px; */
    /* border: 2px solid #cccccc; */
    margin: 10px auto;
    text-align: center;
  }
</style>