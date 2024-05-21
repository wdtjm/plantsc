<template>
  <div  class="Echarts">
      <div id="scatterechart" style="width: 100%;height:400px;"></div>
    </div>
</template>

<script>
import eventBus from '@/js/EventBus';
import { transfer } from '@/js/TreeToArray';
export default {
    
    name: 'Echarts',
    data(){
        return{
            scatterData:[],
            scatterEchart:null
        }
    },
    methods:{
        getScatterData(tissue){
            //console.log('pie $tree data',this.$treedata);
                // 处理成功情况
                let requestData = this.$treedata['data'];
                let tissueTree = transfer(requestData.find(data => data['lable']==tissue));
                //console.log('tissuetree:',tissueTree);
                let arr=[];
                
                tissueTree.forEach(data => {
                    if(data['total']!=0){
                        let e = [];
                        //console.log('data:',data);
                        e.push(data['heigh']);
                        e.push(data['unique']);
                        e.push(data['total']);
                        e.push(data['lable']);
                        e.push(data['tissue']);
                        arr.push(e);
                    }
                    
                });
                /* arr.sort((a,b)=>{
                    return b.value-a.value;
                }) */
                this.scatterData=arr;
                this.setScatterEchart();
                //console.log('scatterData:',this.scatterData);
                //this.myEcharts();
        },
        setScatterEchart(){
            let option = {
                xAxis: {},
                yAxis: {},
                tooltip: {
                    formatter: function (params) {
                        let tissue = params.value[4];
                        let celltype = params.value[3];
                        return `
                        <div class="hover-card">
                            <div><span class="type-in-card">Tissue  :</span> ${tissue}</div>
                            <div><span class="type-in-card">Celltype : </span>${celltype}</div>
                        </div>
                            `;
    }

                },
                itemStyle:{
                    color: (e)=>{
                        return this.domColor(e.dataIndex);
                    }
                }
                ,
                series: [
                    {
                    symbolSize: function (data) {
                        return Math.sqrt(data[2])*7;
                        },
                    data: this.scatterData,
                    type: 'scatter'
                    }
                ]
            };
            this.scatterEchart.setOption(option,true);
        },
        domColor(dataIndex){
                const newArry = [];
                for(let k = 0; k < 20; k++)
                {
                    const r = Math.floor(Math.random()*256);
                    const g = Math.floor(Math.random()*256);
                    const b = Math.floor(Math.random()*256);
                    newArry.push(`rgb(${r},${g},${b})`);
                }
                return newArry[dataIndex];
            },
    },
    
    mounted() {
        this.scatterEchart = this.$echarts.init(document.getElementById('scatterechart'));
        eventBus.$on('treeClick', (Msg) => {
                //console.log('scatter :',Msg);
                this.getScatterData(Msg);
            })
        this.getScatterData(this.$treedata['data'][0]['lable']);
        
        
  }}
</script>

<style>
.hover-card{
    display: flex;
    flex-direction: column;
    
    align-items:flex-start;
}

</style>