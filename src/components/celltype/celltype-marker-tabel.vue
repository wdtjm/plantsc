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
                :header-cell-style="{background:'hsla(241, 80%, 21%, 0.8)',color:'white'}"
                @filter-change="filterChange"
                >
                
                <el-table-column sortable 
                :filters="filterData['Celltypes']" 
                column-key="Celltypes"
                > 
                    <template slot="header" >
                        <div class="table-title">
                            <div>Celltypes</div>
                        </div>
                    </template>
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row['Celltypes'] }}</span>
                </template>
                </el-table-column>
                
                <el-table-column  prop="Species" sortable
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
                column-key="High confidence genes"
                sortable>
                    <template slot="header" >
                        <div class="table-title">
                            <div>High confidence genes</div>
                        </div>
                    </template>
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row['High confidence genes'] }}</span>
                    </template>
                </el-table-column>

                <el-table-column label="Unique genes" sortable prop="Unique genes"
                :filters="filterData['Unique genes']" 
                column-key="Unique genes">
                    <template slot="header" >
                        <div class="table-title">
                            <div>Unique genes</div>
                            
                        </div>
                    </template>
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row['Unique genes'] }}</span>
                    </template>
                </el-table-column>

                <el-table-column label="Marker genes" prop="Marker genes" sortable
                :filters="filterData['Marker genes']" 
                column-key="Marker genes">
                    <template slot="header" >
                        <div class="table-title">
                            <div>Marker genes</div>
                        </div>
                    </template>
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row['Marker genes'] }}</span>
                    </template>
                </el-table-column>

                <el-table-column label="Enzymolysis genes"
                :filters="filterData['Enzymolysis genes']" 
                column-key="Enzymolysis genes">
                    <template slot="header" >
                        <div class="table-title">
                            <div>Enzymolysis genes</div>
                        </div>
                    </template>
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row['Enzymolysis genes'] }}</span>
                    </template>
                </el-table-column>

                <el-table-column label="Single cell genes"
                :filters="filterData['Single cell genes']" 
                column-key="Single cell genes">
                    <template slot="header" >
                        <div class="table-title">
                            <div>Single cell genes</div>
                        </div>
                    </template>
                    <template slot-scope="scope">
                    <span style="margin-left: 10px">
                        {{ scope.row['Single cell genes'] }}
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
      filterData:{}
    }
  },
  methods:{
    filterChange(filters){
        console.log('filters',filters)
        this.tableData=this.originData
        for(var key in filters)
        {
            if(filters[key].length == 0)
            {
                continue
            }
            this.tableData=this.tableData.filter((value)=>{
                return filters[key].indexOf(value[key])!=-1;
            })
        }
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
    this.$eventBus.$on('marker-table',(data)=>{
      //console.log('this.tableData',data)
      this.tableData=data;
      this.originData=data;
      this.filterData['Celltypes']=this.getFilterData('Celltypes');
      this.filterData['Species']=this.getFilterData('Species');
      this.filterData['High confidence genes']=this.getFilterData('High confidence genes');
      this.filterData['Unique genes']=this.getFilterData('Unique genes');
      this.filterData['Marker genes']=this.getFilterData('Marker genes');
      this.filterData['Enzymolysis genes']=this.getFilterData('Enzymolysis genes');
      this.filterData['Single cell genes']=this.getFilterData('Single cell genes');
      console.log('this.filterData:',this.filterData)



      
    })
  }
}
</script>

<style>
.table-page{
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