<template>
    <div class="Echarts">
      <div id="main" style="width: 100%;height:400px;"></div>
    </div>
</template>
  
  <script>
import { transfer } from '@/js/TreeToArray';
import eventBus from '@/js/EventBus';

  export default {
    
    name: 'Echarts',
    data(){
        return{
            pieData:[],
            pieChart:null
        }
    },
    methods:{

        getPieData(speciesName){
            //console.log('pie $tree data',this.$treedata);
                // 处理成功情况
                let requestData = this.$treedata['data'];
                
                
                let arr=[];
                
                requestData.forEach(data => {
                    let e = {};
                    //console.log('data:',data);
                    e.value=data['nodeNum'];
                    e.name=data['lable'];
          
                    arr.push(e);
                });
                /* arr.sort((a,b)=>{
                    return b.value-a.value;
                }) */
                this.pieData=arr;
                //console.log('pieData:',this.pieData);
                this.myEcharts();
        },
        myEcharts(){
            // 基于准备好的dom，初始化echarts实例
  
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: 'Quantitative distribution of cell types in tissues',
                    left: 'center'
                },
                tooltip: {
                   // trigger: 'item'
                },
                
                
                series: [
                    {
                    //name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: this.pieData,
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
            this.pieChart.setOption(option,true);
            },
            
    },
    mounted() {
        this.pieChart = this.$echarts.init(document.getElementById('main'));
        eventBus.$on('speciesChange', (Msg) => {
                this.getPieData(Msg);
            })
    },
    beforeDestroy(){
        this.pieChart.dispose()
    }
  }
  </script>
  
  <style>
  
  </style>
  
  