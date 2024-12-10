<template>
  <div class="blast">
    <div class="under-navbar"></div>
    <h1>Blast</h1>
    <div class="table-page">
      <div class="paging">
        <!--数据显示区域-->
        <div class="data">
          <!--表格存放数组中的数据，并对数据进行截取，以控制每一页显示的数据量-->
          <!--slice(start,end) 不包括end-->
          <el-table
              :data="tableData.slice(0,pageSize)"
              style="width: 70%"
              :header-cell-style="{background:'hsla(241, 80%, 21%, 0.8)',color:'white'}"
              @filter-change="getData"
          >

            <el-table-column

                column-key="speciesname"
            >
              <template slot="header" >
                <div class="table-title" >
                  <div> species</div>
                  <el-select v-model="searchParams.species" size="mini" style="width:82px;" @change="getData">
                    <el-option
                        v-for="item in speciesList"
                        :key="item.speciesname"
                        :label="item.speciesname"
                        :value="item.speciesname">
                    </el-option>
                  </el-select>
                </div>
              </template>
              <template slot-scope="scope">
                <span class="column-data">{{ scope.row['speciesname'] }}</span>
              </template>
            </el-table-column>

            <el-table-column  prop="gene"
                              column-key="gene">
              <template slot="header" >
                <div class="table-title">
                  <div>gene</div>
                  <el-input v-model="searchParams.gene" placeholder="input gene name" size="mini" style="width:82px;" @focusout.native="getData" @keyup.enter.native="getData"></el-input>
                </div>
              </template>
              <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row['speciesgene'] }}</el-tag>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="ATid" prop="ATid"

                             column-key="ATid"
            >
              <template slot="header" >
                <div class="table-title">
                  <div>ATid</div>
                </div>
              </template>
              <template slot-scope="scope">
                <span class="column-data">{{ scope.row['ATid'] }}</span>
              </template>
            </el-table-column>

            <el-table-column label="Osid"  prop="Osid"

                             column-key="Osid">
              <template slot="header" >
                <div class="table-title">
                  <div>Osid</div>

                </div>
              </template>
              <template slot-scope="scope">
                <span class="column-data">{{ scope.row['Osid'] }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!--分页按钮-->
        <div class="marker-table-bottom">
          <el-pagination
              background
              class="paniga"
              layout="jumper,->,prev, pager, next,sizes, total"
              :total="total"
              :page-sizes="pageSizes"
              @current-change="changePage"
              :current-page="currentPage"
              :page-size="pageSize"
              @size-change="changeSize"
              style="text-align: center">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/js/request";
import router from "@/router";
export default {
  name: "blast",
  data() {
    return {
      currentPage: 1,
      total: 0,
      pageSize: 10,
      pageSizes: [10, 20, 30, 40, 50],
      searchParams: {
        species: "",
        gene: "",
      },
      tableData: [],
      speciesList: [],
    }
  },
  mounted() {
    //获取路由参数species和gene
    let species = this.$route.query.species
    let gene = this.$route.query.gene
    if (species && species!=="null") {
      this.searchParams.species = species
    }
    if (gene && gene!=="null") {
      this.searchParams.gene = gene
    }
    this.getData()
  },
  methods: {
    getData() {
      console.log("param: ",this.searchParams,this.currentPage,this.pageSize);
      request.post('api/blast/getBlastByPage.php', {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        species: this.searchParams.species,
        gene: this.searchParams.gene,
      }).then(res => {
        console.log("blast tableData:", res)
        this.tableData = res.data.data
        this.total = parseInt(res.data.total)
        this.speciesList = res.data.species
      })
      .catch(err => {
        console.log(err)
      })
    },
    changePage(currentPage) {
      this.currentPage = currentPage
      this.getData()
    },
    changeSize(pageSize) {
      this.pageSize = pageSize
      this.getData()
    }
  }

}
</script>

<style scoped>
.blast {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>