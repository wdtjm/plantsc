<template>
    <ul class="Cards">
              <div class="row">
                <li v-for="index in 4" :key="index">
                <PlantCard v-bind:plant="plants[index-1]"></PlantCard></li>
                </div>
              <div class="row">
                <li v-for="index in 4" :key="index">
                <PlantCard v-bind:plant="plants[4+index-1]"></PlantCard>
              </li>
              </div>
              <div class="row">
                <li v-for="index in 4" :key="index">
                <PlantCard v-bind:plant="plants[8+index-1]"></PlantCard>
                </li>
              </div>
              <div class="row">
                <li v-for="index in 4" :key="index">
                <PlantCard v-bind:plant="plants[12+index-1]"></PlantCard>
                </li>
              </div>
              <div class="row">
                <li v-for="index in 4" :key="index">
                <PlantCard v-bind:plant="plants[16+index-1]"></PlantCard>
                </li>
              </div>
              <div class="row">
                <li v-for="index in 4" :key="index">
                <PlantCard v-bind:plant="plants[20+index-1]"></PlantCard>
                </li>
              </div>
              <div class="row">
                <li v-for="index in 4" :key="index">
                <PlantCard v-bind:plant="plants[24+index-1]"></PlantCard>
                </li>
              </div>
              <div class="row">
                <li v-for="index in 4" :key="index">
                <PlantCard v-bind:plant="plants[28+index-1]"></PlantCard>
                </li>
              </div>
              <div class="row">
                <li v-for="index in 4" :key="index">
                <PlantCard v-bind:plant="plants[32+index-1]"></PlantCard>
                </li>
              </div>
              <div class="row">
                <li v-for="index in 4" :key="index">
                <PlantCard v-bind:plant="plants[36+index-1]"></PlantCard>
                </li>
              </div>
              <div class="row">
                <li v-for="index in 4" :key="index">
                <PlantCard v-bind:plant="plants[40+index-1]"></PlantCard>
                </li>
              </div>
            </ul>
  </template>
  
  <script>
   import PlantCard from './plant-card.vue';
   import {plants} from '../../js/plants'
  export default {
      components:{PlantCard},
      data(){
          return{
          plants:plants
        }
      },
      
      mounted(){
  
      }
  };
  
  
  </script>
  
  <style>
   .Cards{
      display:flex;
      text-align: center;
      align-content: center;
      padding: 0;
      list-style-type:none;
      flex-direction: column;
  
    }
    .Cards li{
      position: relative;
      text-align: center;
    }
    .row{
      display: flex;
    }
  </style>