<template>
    <div class="main">
    <mainPieVue class="halfwidth"></mainPieVue>
    <celltypeScatterVue class="halfwidth"></celltypeScatterVue>
    </div>
  </template>
  
  <script>
import celltypeScatterVue from './celltype-scatter.vue';
import mainPieVue from './main-pie.vue';

    

  export default {
    components:{mainPieVue,celltypeScatterVue},
    data(){
        return{
          
        }
    },
    methods:{
     
        },  
    }
  
  </script>
  
  <style scoped>
  .main{
    display: flex;
    flex-direction: row;
  }

  .halfwidth{
    width: 50%;
  }
  </style>
  
  