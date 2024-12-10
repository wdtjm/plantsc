<template>
    <div class="references-page">
      <div class="under-navbar"></div>
      <div class="title">References & Downloads</div>
      <div class="references-line"></div>
      <div class="ref-intro">Public datasets used by PlantscRNAdb</div>
      <div v-for="index in plants.length" :key="index" class="ref-tables-w">
        <reftable :species="plants[index-1]"></reftable>
      </div>
    </div>
  </template>
  
  <script>
  import reftable from '@/components/references/reference-table.vue'
  import { plants } from '@/js/plants';
  export default {
    components:{reftable},
    data(){
      return{
        plants:plants
      }
    },
  
  }
  </script>
  
  <style scoped>
  .references-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.463) !important;
  }
  .title{
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: xx-large;
    color: hsla(0,0%,0%,60%);
  }
  .references-line{
    width: 400px;
    height: 2px;
    background-color: hsla(0,0%,0%,20%);
  }
  .ref-intro{
    font-size: larger;
    margin: 20px;
    margin-bottom: 5px;
    color: hsla(0,0%,0%,60%);
  }
  .ref-tables-w{
   
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>