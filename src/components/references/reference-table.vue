<template>
  <div v-if="this.tableData.length != 0" class="ref-table-layout">
    <div class="ref-table-species"> 
        {{ Species }}
    </div>
    <div class="ref-num">Totally {{ tableData.length }} papers</div>
    <div class="ref-num-download">
        <div class="ref-download-top-title">download:</div>
        <el-button class="ref-download-total" round style="color:rgb(9,110,76);"><div class="ref-download-text">Total markers</div></el-button>
        <el-button class="ref-download-high" round style="color:rgb(9,110,76);"><div class="ref-download-text">High confidence markers</div></el-button>
        <el-button class="ref-download-unique" round style="color:rgb(9,110,76);"><div class="ref-download-text">Unique markers</div></el-button>
    </div>
    
    <el-table
    stripe
    border
    :data="tableData"
    style="width: 100%"
    class="ref-table-el-table">

        <el-table-column
        width="150">
        <template slot="header" >
            <div class="ref-table-title">
                Dataset ID
            </div>
        </template>
        <template slot-scope="scope">
            <span style="margin-left: 10px" class="ref-table-datasetId" @click="goto(scope.row['link'])">{{ scope.row['Dataset ID'] }}</span>
        </template>
        </el-table-column>

        <el-table-column
        width="650">
        <template slot="header" >
            <div class="ref-table-title">
                Detailed infomation of datasets
            </div>
        </template>
        <template slot-scope="scope">
           <div class="ref-table-name">{{ scope.row['paper_name'] }}</div>
           <div class="ref-table-detail">
                <span>Authors:{{ scope.row['Authors'] }}</span>
                <span>Publication Date:{{ scope.row['Publication Date'] }}</span>
                <span>Journal:{{ scope.row['Journal'] }}</span>
                <span>Cell Report DOI:{{ scope.row['doi'] }}</span>
            </div>

            <div class="ref-table-detail">
                <span class="ref-underline">Protocol</span><span>:{{ scope.row['Protocol'] }} </span>
                <span class="ref-underline">Tissues:</span><span>{{ scope.row['tissue'] }} </span>
                <span class="ref-underline">No.Cells:</span><span>{{ scope.row['cell_num'] }}</span>
            </div>
        </template>
        </el-table-column>
        
        <el-table-column
        width="180">
        <template slot="header" >
            <div class="ref-table-title">
                Download martix
            </div>
        </template>
        <template slot-scope="scope">
            <el-button  style="word-wrap:break-word; word-break:normal; " class="ref-download-article" @click="goto(scope.row['link'])"><div class="ref-download-text" style="width: 100%;text-wrap: wrap;color:rgb(9,110,76)">{{ scope.row['Dataset ID'] }}.zip</div></el-button>
        </template>
        </el-table-column>

    </el-table>
  </div>
</template>
 
<script>


export default {
    props:{
        species:{
            type:Object,
            required:true
        }
    },
    data(){
        return{
            tableData:null,
            Species:this.species['name']
        }
    },
    mounted(){
        
        console.log('reference-table species',this.Species);
        let that = this
        this.$request.get('api/getReference.php')
        .then(resp =>{
            //console.log('reference tabel resp:',resp)
            that.tableData = resp.data.filter((val)=>{
                return this.Species == val['species']
            })
        })
        .catch(error =>{
            //console.log('reference table error',error);
        })
    },
    methods:{
        goto(link){
            window.open(link)
        }
    }
}
</script>

<style scoped>
.el-button:focus{
  color:var(--el-color-primary)!important;
  background-color:white ;
}

.ref-table-layout{
    margin: 20px; 
    padding: 30px;
    

    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ref-table-species{
    font-size: xx-large !important;
    opacity: 90%;

}
.ref-table-el-table{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.el-table /deep/ .el-table__body-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.el-table /deep/ .el-table__header-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ref-num-download{
    margin-top: 16px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    width: 93%;
    padding-right: 7%;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: space-between;
    border: 1px solid #80808052;
    margin-bottom:0;
    border-bottom: 0;
    font-weight: 700;
}
.ref-download-top-title{
    margin-left: 30px;
    color:rgb(9, 110, 76);
    font-size: large;
}
.ref-download-text{
    padding-bottom: 4px;
    border-bottom: 1px solid rgb(9,110,78);
}
.ref-download-title{
    font-size: larger !important;
    opacity: 85%;
}
.ref-num{
    font-size: large !important;
    opacity: 70%;
    margin-top: 20px;
    margin-bottom: 10px;
}
.ref-table-datasetId{
    cursor: pointer;
    font-size: large !important;
}
.ref-table-datasetId:hover{
    color: rgb(40, 182, 135);
}
.ref-table-name{
    font-size: larger !important;
    opacity: 90%;
}
.ref-table-detail{
    opacity: 70%;
}
.ref-table-title{
    font-size: large;
    color: #646464;
    font-weight: 400;
}
.ref-underline{
    text-decoration-line: underline;
}
</style>