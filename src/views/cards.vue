<template>
  <ul class="Cards">
            <div class="row">
              <li v-for="index in 6" :key="index">
              <PlantCard v-bind:plant="plants[index-1]"></PlantCard></li>
              </div>
            <div class="row">
              <li v-for="index in 6" :key="index">
              <PlantCard v-bind:plant="plants[6+index-1]"></PlantCard>
            </li>
            </div>
            <div class="row">
              <li v-for="index in 6" :key="index">
              <PlantCard v-bind:plant="plants[12+index-1]"></PlantCard>
              </li>
            </div>
            <div class="row">
              <li v-for="index in 6" :key="index">
              <PlantCard v-bind:plant="plants[18+index-1]"></PlantCard>
              </li>
            </div>
            <div class="row">
              <li v-for="index in 6" :key="index">
              <PlantCard v-bind:plant="plants[24+index-1]"></PlantCard>
              </li>
            </div>
            <div class="row">
              <li v-for="index in 6" :key="index">
              <PlantCard v-bind:plant="plants[30+index-1]"></PlantCard>
              </li>
            </div>
            <div class="row">
              <li v-for="index in 6" :key="index">
              <PlantCard v-bind:plant="plants[36+index-1]"></PlantCard>
              </li>
            </div>
          </ul>
</template>

<script>
 import PlantCard from './plant-card.vue';
 import {plants} from '../js/plants'
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