<template>
  <div class = 'container'>
    <bcTop></bcTop>
    <div class="head">
      <tbar></tbar>
    </div>
    <div class="mainPage" id="mainp">
      <div class="underbar">
      </div>
      <div  class="Main">
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

        </ul>
        <div>
          test
        </div>
      </div>
    </div>
    <div class="footer">

    </div>
  </div>
</template>
<script>
  import tbar from './tbar.vue';
  import PlantCard from './plant-card.vue';
  import bcTop from './bc-top.vue';
  export default {

    components:{tbar,PlantCard,bcTop},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        plants:[
          {'name':'rice','url':'https://biobigdata.nju.edu.cn/scplantdb/static/home_species/tair_square.png','description':'this is a rice'},
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted(){
      for (let index = 0; index < 15; index++) {
        this.plants.push(this.plants[0]);
      }
    }
  }
</script>
<style>

  .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding:0;
    margin:0;
    scroll-snap-type: y mandatory;
  }
  
  .head{
    position:fixed;
    top:0;
    width:100%;
    height: 60px;
  }
  .mainPage{
    width:100%;
    height: calc(170vh);
    scroll-snap-align: start;
  }
  .footer{
    width:100%;
  }
  .Main{
    display:flex;
    text-align: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }
  .underbar{
    height: 60px;
    width: 100%;
    background-color: hsla(133, 34%, 64%, 0.2);
  }
  .Cards{

    display:flex;
    text-align: center;
    align-content: center;

    list-style-type:none;
    flex-direction: column;
  }
  .Cards li{
    width:150px;
    height: 150px;
    position: relative;
    text-align: center;
  }
  .row{
    display: flex;
  }
</style>