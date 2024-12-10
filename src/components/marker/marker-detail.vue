<template>
  <div style="background-color: white;display: flex;flex-direction: column;align-items: center;">
    <div class="under-navbar"></div>
    <div class="marker-detail-layout">
      <div class="marker-detail-firstlayer">
        <div class="marker-detail-info">
          <div class="marker-detail-layer">
            <div class="marker-name">{{ this.$marker['name'] }}</div>
            <div class="marker-detail-single"><span class="marker-detail-title"> Species :</span> {{ this.$marker['species'] }}</div>
            <div class="marker-detail-single" v-if="this.geneInfo['ready']"><span class="marker-detail-title"> Alsies :</span> {{ this.geneInfo['alsies'] }}</div>
            <div class="marker-detail-single marker-detail-infor" v-if="this.geneInfo['ready']"><span class="marker-detail-title"> Gene information :</span> {{ this.geneInfo['gene_info'] }}</div>
          </div>
          
        </div>
        <div class="Echarts">
          <div id="markerPie" style="height: 350px;width: 350px;"></div>
        </div>
      </div>

      <div class="marker-detail-second-total" v-if="sources['single'].length!=0||sources['spatial'].length!=0">
        
        <div class="marker-of-echarts min-detail">Expression result of {{ this.$marker['name'] }} in different datasets</div>

        <div class="marker-detail-secondlayer">
          <div class="marker-detail-button min-detail">
            <div v-if="sources['single'].length!=0" class="single-button">
              <div class="single-button-title">Single cell genes :</div>
              <div class="marker-detail-buttons">
                <div v-for="(value, index) in sources['single']"  :key="index">
                  <!-- {{ value['Source'] }} -->
                  <!-- {{ value['num'] }} -->
                  <div v-for="index2 in value['num']" :key="index2">
                    <!-- <el-button v-if="index == 0 && index2 == 1" v-focus :autofocus="true">{{ value['Source'] }}_celltype{{
                      index2 }}</el-button>
                    <el-button v-else>{{ value['Source'] }}_celltype{{ index2 }}</el-button> -->
                    <el-button class="marker-detail-s-button"
                    v-if="index == 0 && index2 == 1" v-focus :autofocus="true"
                    @click="changeSource(index,index2,'single')">
                    {{ value['Source'] }}_{{index2 }}</el-button>
                    <el-button class="marker-detail-s-button" 
                    v-else
                    @click="changeSource(index,index2,'single')">
                    {{ value['Source'] }}_{{ index2 }}</el-button>
                  </div>
                </div>
              </div>
              
            </div>
           
            <div v-if="sources['spatial'].length!=0" class="spatial-button">
              <div class="single-button-title">spatial genes :</div>
              <div>
                <div v-for="(value, index) in sources['spatial']" :key="index">
                  <!-- {{ value['Source'] }} -->
                  <!-- {{ value['num'] }} -->
                  <div v-for="index2 in value['num']" :key="index2">
                    <!-- <el-button v-if="index == 0 && index2 == 1" v-focus :autofocus="true">{{ value['Source'] }}_celltype{{
                      index2 }}</el-button>
                    <el-button v-else>{{ value['Source'] }}_celltype{{ index2 }}</el-button> -->
                    <el-button class="marker-detail-s-button"
                    v-if="sources['single'].length == 0 && index == 0 && index2 == 1" v-focus :autofocus="true"
                    @click="changeSource(index,index2,'spatial')">
                    {{ value['Source'] }}_{{index2 }}</el-button>
                    <el-button class="marker-detail-s-button" 
                    v-else
                    @click="changeSource(index,index2,'spatial')">
                    {{ value['Source'] }}_{{ index2 }}</el-button>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
          <div class="chart-layer">
            <div class="Echarts Scatter" v-loading="isScatterLoading">
              <div id="sourceScatter" style="height: 400px;width: 700px;"></div>
            </div>

            <div class="Echarts expScatter" v-loading="isExpScatterLoading">
              <div id="expScatter" style="height: 400px;width: 700px;"></div>
            </div>
          </div>

        </div>

      </div>
    </div>
      
  </div>

</template>

<script>
export default {
  data() {
    return {
      pieData: null,
      pieChart: null,
      sourceScatter: null,
      sourceData: null,
      sourceScatterData: null,
      sources: {
        "single":[],
        "spatial":[]
      },
      expScatterChart:null,
      isScatterLoading:0,
      isExpScatterLoading:0,
      geneInfo:{
        "gene_info":null,
        "alsies":null,
        "ready":false
      },
      type:"single"
    }
  },
  mounted() {

    let that = this
    this.pieChart = this.$echarts.init(document.getElementById('markerPie'));

    
    if (!this.$marker['name'] || !this.$marker['species']) {
      this.$router.push('/marker').catch(err => { });
      return;
    }
    else {

      this.$request.post('api/getMarkerPieData.php', {
        "species": this.$marker['species']
      }).then(response => {
        that.pieData = response.data
        if (that.pieData.length > 15) {
          that.pieData = that.pieData.slice(0, 15)
        }
        that.myEcharts();

      })
    }
    this.$request.post('api/getSourcesByMarker.php', {
      "species": this.$marker['species'],
      "marker": this.$marker['name']
    }).then(response => {
      that.sources = response.data
      if(that.sources['single'].length!=0 || that.sources['spatial'].length!=0){
        setTimeout(() => {
        that.sourceScatter = that.$echarts.init(document.getElementById('sourceScatter'));
        that.expScatterChart=that.$echarts.init(document.getElementById('expScatter'))
        that.isExpScatterLoading+=1
        that.isScatterLoading+=1
            }, 50);
        
      }
      if(that.sources['single'].length!=0)
      {
        setTimeout(() => {
          that.$request.post('api/getSourceData.php',{
            "marker":that.$marker['name'],
            "species":that.$marker['species'],
            "article":that.sources['single'][0]['Source'],
            "type":"single",
            "num":"1"
          })
            .then(response => {
              that.sourceScatterData = response.data
              
              that.isExpScatterLoading-=1
              that.isScatterLoading-=1
              that.scatterCharts()
              that.expScatterCharts()
            })
        }, 100)
      }else{
        if(that.sources['spatial'].length!=0){
          that.type="spatial"
          setTimeout(() => {
            that.$request.post('api/getSourceData.php',{
                "marker":that.$marker['name'],
                "species":that.$marker['species'],
                "article":that.sources['spatial'][0]['Source'],
                "type":"spatial",
                "num":"1"
              })
              .then(response => {
                that.sourceScatterData = response.data
                that.isExpScatterLoading-=1
                that.isScatterLoading-=1
                that.scatterCharts()
                that.expScatterCharts()
              })
          }, 100)
        }
      }
      
    })
    this.$request.post('api/getGeneInfoById.php',{
      "name":this.$marker['name'],
      "species":this.$marker['species']
    }).then(response=>{
      that.geneInfo['gene_info']=response.data['gene_information']
      that.geneInfo['alsies']=response.data['alsies']
      that.geneInfo['ready']=true
    })
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  }
  ,
  methods: {
    changeSource(index,index2,newType){
      this.type=newType;
      this.isExpScatterLoading+=1
      this.isScatterLoading+=1
      const that = this
      that.$request.post('api/getSourceData.php',{
          "marker":that.$marker['name'],
          "species":that.$marker['species'],
          "article":that.sources[that.type][index]['Source'],
          "num":index2,
          "type":that.type
        })
          .then(response => {
            that.sourceScatterData = response.data
            that.isExpScatterLoading-=1
            that.isScatterLoading-=1
            that.scatterCharts()
            that.expScatterCharts()
          })
    }
    ,
    scatterCharts() {
      var scatterColor={
        "Lateral root cap": "#8ECFC9",
        "Atrichoblast": "#72AACF",
        "Columella root cap cell": "#6DADD1",
        "Root meristem": "#B6D7E8",
        "Phloem": "#FBE3D5",
        "Dividing cell": "#F6AC93",
        "Root vascular system": "#DC6C57",
        "Xylem": "#B72230",
        "Root endodermis": "#6D011F",
        "Trichoblast": "#2878B5",
        "Root cortex": "#E7BCC6",
        "Pericycle cell": "#FDCF9E",
        "Companion cell": "#B6766C",
        "Phloem pole pericycle cell": "#FFBE7A",
        "Root stele": "#099396",
        "Columella": "#B2DF8A",
        "Root procambium": "#BEB8DC",
        "Xylem pole pericycle cell": "#82B0D2",
        "Initials": "#EBD7A5",
        "Protophloem": "#EE9B00",
        "Unknown": "#CC6602",
        "Endodermal with casparian strip": "#8eb69c",
        "Proximal meristem": "#eed5b7",
        "Root epidermis": "#a8dadb",
        "Protoxylem": "#FA7F6F",
        "Metaphloem & companion cell": "#219ebc",
        "Quiescent center": "#feb705",
        "Metaxylem": "#96C37D",
        "Guard cell":"#eed5b7",
        "Palisade mesophyll cell":"#FA7F6F",
        "Spongy mesophyll cell":"#8eb69c"
      }
      var seriesData = {}
      for(let key in scatterColor){
        seriesData[key]=[]
      }
      //console.log('seriesData:',seriesData);
      var xlable=this.type=="single"?"UMAP_1":"tSNE_1"
      var ylable=this.type=="single"?"UMAP_2":"tSNE_2"
      //console.log('sourceData(before typed):',this.sourceScatterData)
      
      this.sourceScatterData.map((val,index)=>{
        if(seriesData[val['Celltype']]){
        (seriesData[val['Celltype']]||seriesData["Unknown"]).push([parseFloat(val[xlable]).toFixed(2),parseFloat(val[ylable]).toFixed(2),val['Cell']])
      }})
      //console.log('sourceData:',seriesData)

      /** @type EChartsOption */
      var option = {

        tooltip: {
          position: 'top'
        },

        xAxis: {
          show:true,
          axisLine:{
            onZero:false,
            symbol:['none','arrow']
          },
          name:this.type=="single"?"UMAP_1":"x",
          nameLocation:"middle",
          nameGap:20,
          position:"bottom",
          axisTick:{
          show:false // 不显示坐标轴刻度线
          },
          splitLine:{
              show:false // 不显示网格线
          },
          scale:true
        },
        yAxis: {
          show:true,
          axisLine:{
            onZero:false,
            symbol:['none','arrow']
          },
          name:this.type=="single"?"UMAP_2":"y",
          show:true,
          scale:true,
          splitLine:{show: false},//去除网格线
          axisTick:{
          show:false // 不显示坐标轴刻度线
          },
        },
        legend:{
          show:true,
          type:"scroll",
          orient: 'vertical',
          left:'right',
          width:200,
          x:'right',      //可设定图例在左、右、居中
          y:'center',
          triggerEvent: true, // 主要是这个
          tooltip: { // 主要是这个
            show: true,
            trigger: 'item',
          },
          /* formatter: function (name) {
            // if (!name) return "";
            //console.log('name:',name,'lenth',name.length)
            if (name.length > 8) {
              name = name.slice(0,8)  + "...";   //截断拼接省略号
            }
            //console.log('name:',name,'lenth',name.length)
            return name;
         }, */
          /* padding:[0,-150,0,0], */
          align:'left',
		      top:'middle',
        },
        grid:{
          left:50,
          right:200
        },
        series: (function() {
            var series = [];
            for (var key in scatterColor) {
              if(seriesData[key].length!=0){
                var item = {
                name: key,
                symbolSize: 2,
                type:'scatter',
                HoverAnimation:false,

                silent:true,
                itemStyle: {
                  color: scatterColor[key]
                },
                data: seriesData[key]
              };
              series.push(item);
              }
              
            }
            //console.log('Sereis:',series)
            return series;
          })(),
       
        
       /*  series: {

          type: 'scatter',
          data: this.sourceScatterData.map((val, index) => {
            return [val['UMAP_1'], val['UMAP_2'],val['Cell_type']]
          }),
          symbolSize: 5,
          itemStyle: {
            color: function (param) {
              return  scatterColor[param.data[2]]
            }
          }, */
        /* ,
        visualMap:{
          type:'piecewise',
          top:'middle',
          min: 0,
          max: scatterColor.length,
          left:10,
          splitNumber:scatterColor.length,
          dimension:2,
          pieces:pieces
        } */
      };

      // 使用刚指定的配置项和数据显示图表。
      this.sourceScatter.setOption(option, true);
    },
    expScatterCharts(){
      var scatterColor={
        "Lateral root cap": "#8ECFC9",
        "Atrichoblast": "#72AACF",
        "Columella root cap cell": "#6DADD1",
        "Root meristem": "#B6D7E8",
        "Phloem": "#FBE3D5",
        "Dividing cell": "#F6AC93",
        "Root vascular system": "#DC6C57",
        "Xylem": "#B72230",
        "Root endodermis": "#6D011F",
        "Trichoblast": "#2878B5",
        "Root cortex": "#E7BCC6",
        "Pericycle cell": "#FDCF9E",
        "Companion cell": "#B6766C",
        "Phloem pole pericycle cell": "#FFBE7A",
        "Root stele": "#099396",
        "Columella": "#B2DF8A",
        "Root procambium": "#BEB8DC",
        "Xylem pole pericycle cell": "#82B0D2",
        "Initials": "#EBD7A5",
        "Protophloem": "#EE9B00",
        "Unknown": "#CC6602",
        "Endodermal with casparian strip": "#8eb69c",
        "Proximal meristem": "#eed5b7",
        "Root epidermis": "#a8dadb",
        "Protoxylem": "#FA7F6F",
        "Metaphloem & companion cell": "#219ebc",
        "Quiescent center": "#feb705",
        "Metaxylem": "#96C37D",
        "Guard cell":"#eed5b7",
        "Palisade mesophyll cell":"#FA7F6F",
        "Spongy mesophyll cell":"#8eb69c"
      }
      var seriesData = {}
      for(let key in scatterColor){
        seriesData[key]=[]
      }
      //console.log('seriesData:',seriesData);
      let maxExp=0
      var xlable=this.type=="single"?"UMAP_1":"tSNE_1"
      var ylable=this.type=="single"?"UMAP_2":"tSNE_2"
      this.sourceScatterData.map((val,index)=>{
        if(maxExp<val['exp'])maxExp=val['exp']
        if(seriesData[val['Celltype']]){
          (seriesData[val['Celltype']]||seriesData["Unknown"]).push([parseFloat(val[xlable]).toFixed(2),parseFloat(val[ylable]).toFixed(2),val['Cell']])
      }})
      


      
      var option = {

        tooltip: {
          position: 'top'
        },
        /* legend:{
          show:true,
          type:"scroll",
          orient: 'vertical',
          left:'right',
          width:30,
          
		      top:'middle',
        }, */
        grid: {
          left:50,
          right:200
        },
        xAxis: {
          show:true,
          axisLine:{
            onZero:false,
            symbol:['none','arrow']
          },
          name:this.type=="single"?"UMAP_1":"x",
          nameLocation:"middle",
          nameGap:20,
          position:"bottom",
          axisTick:{
          show:false // 不显示坐标轴刻度线
          },
          splitLine:{
              show:false // 不显示网格线
          },
          scale:true
        },
        yAxis: {
          show:true,
          axisLine:{
            onZero:false,
            symbol:['none','arrow']
          },
          name:this.type=="single"?"UMAP_2":"y",
          show:true,
          scale:true,
          splitLine:{show: false},//去除网格线
          axisTick:{
          show:false // 不显示坐标轴刻度线
          },},
        
        series: (function() {
            var series = [];
            
            for (var key in scatterColor) {
              if(seriesData[key].length!=0){
                series=series.concat(seriesData[key])
              }
            }
            series.sort((a,b)=>{
              return a[3]-b[3]
            })
            var item = {
              name: key,
              symbolSize: 2,
              type:'scatter',
              HoverAnimation:false,

              silent:true,
              itemStyle: {
                color: scatterColor[key]
              },
              data: series
            };
            
            //console.log('expSereis:',series)
            return item;
            
          })(),
          visualMap: {
            top: 'center',
            right: 'left',
            orient:'vertical',
            min: 0,
            max:maxExp,
            text: ['HIGH', 'LOW'],
            padding:-160,
            inRange: {
                color: ['#D7DA8B', '#E15457']
            }
        },
      };

      // 使用刚指定的配置项和数据显示图表。
      this.expScatterChart.setOption(option, true);
    },
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例

      // 指定图表的配置项和数据
      var option = {
        title: {

          left: 'center'
        },
        tooltip: {
          // trigger: 'item'
        },
        

        series: [
          {
            //name: 'Access From',
            type: 'pie',
            name: 'Radius Mode',
            radius: '50%',
            data: this.pieData,
            roseType: 'radius',
            /*             label:{
                          show:true,
                          position:'inside'}, */
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      this.pieChart.setOption(option, true);
    },
  },
  beforeDestroy(){
    this.scatterChart.dispose();
    this.pieChart.dispose();
    this.expScatterChart.dispose();
  }


}
</script>

<style>
.scatterLayout {
  display: flex;
  flex-direction: row;
}
.marker-detail-layout{
  margin-left: -10%;
  display: flex;
  flex-direction: column;
  
}
.marker-detail-firstlayer{
  display: flex;
  flex-direction: row;
}
.marker-detail-info{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top:20px;
  margin-left: 10%;
}
.marker-detail-layer{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  background-color: hsla(123,47.6%,91.8%,70%);
}
.marker-name{
  font-size: large;
  font-weight: 600;
}
.marker-detail-title{

}
.marker-detail-single{
  margin-top: 10px;
}
.marker-detail-infor{
  max-width: 400px;
}
.marker-detail-second-total{
  display: flex;
  flex-direction: column;

}
.marker-of-echarts{
  display: flex;
  margin-left: 10%;
  font-size: x-large;
}
.marker-detail-secondlayer{
  display: flex;
  flex-direction: row;
  width: 100%;
}

.marker-detail-total {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.marker-detail-button{
  margin-left:10%;

  width: 185px;
  height: 600px;
  
  overflow-x: visible;
  margin-bottom: 10px;
}

.single-button{

  max-height: 290px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.spatial-button{

  max-height: 290px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.single-button-title{
  margin-top:20px;
}

.marker-detail-buttons{
  overflow-y: auto;
  max-height: 250px;
  margin-top: 10px;
}
.marker-detail-s-button{
  margin-top: 10px !important;
}
.chart-layer{
  display: flex;
  flex-direction: column;
  margin-left:3%;
}
 /* 媒体查询：在大屏幕上进行布局调整 */
@media screen and (max-width: 1120px) {
    .min-detail{
      margin-left:5% !important;
    }
}
</style>