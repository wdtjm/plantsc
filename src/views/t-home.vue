<template>
  <div class = 'container'>
    <bcTop></bcTop>
    <div class="head">
      <tbar></tbar>
    </div>
    <div class="mainPage" id="mainp">
      <div  class="Main">
        <div class="card-and-bar">
          <div class="cardbar">
          Browse gene expression patterns over 38 plants
          </div>
          <cards></cards>
        </div>
        <foot></foot>
      </div>
    </div>
  </div>
</template>
<script>
  import tbar from './tbar.vue';
  import PlantCard from './plant-card.vue';
  import bcTop from './bc-top.vue';
  import foot from './foot.vue';
  import copyright from './copyright.vue';
  import cards from './cards.vue';

  import {test,message} from '@/js/test';

  export default {

    components:{tbar,PlantCard,bcTop,foot,copyright,cards},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted(){
      test();
      console.log('message:',message);
    }
    
  }
</script>
<style>

  .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 1150px;
    padding:auto;
    margin:auto;
    scroll-snap-type: y mandatory;
    
  }
  
  .head{
    position:fixed;
    width:1050px;
    height: 60px;
    left: 0; top: 0; right: 0; bottom: 0;
    margin: auto;
    margin-top: 0;
  }
  .mainPage{
    
    width:100%;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
   
  }
  .footer{
    width:100%;
  }
  .Main{
    margin-top: 60px;
    width: 95%;
    display:flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: white;
    margin-bottom:30px;
  }
  .cardbar{
    font-family: "Lucida Console", Courier, monospace;
    
    margin: 20px;
    margin-top: 40px;
    /* padding-left: 20px; */
    height: 40px;
    /* width: 100%; */
    width: 975.21px;
    font-weight: 500;
    font-size: xx-large;
    text-align: left;
    display: flex;
    padding: 10px;
    align-items: center;
    /* background-color: hsla(133, 34%, 64%, 0.4); */
    background-color: hsla(123,47.6%,91.8%,100%);
  }
  .card-and-bar{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1.5px solid rgb(229,229,229);
    border-radius: 10px;
  }
 
</style>