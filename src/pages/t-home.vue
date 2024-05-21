<template>
  <div class = 'container'>
    <bcTop></bcTop>
    
    <div class="mainPage" id="mainp">
      <div  class="Main">
        <div class="card-and-bar">
          <div class="cardbar">
          Browse gene expression patterns over 38 plants
          </div>
          
          <cards v-if="!this.isCol"></cards>
          <cardscol v-else></cardscol>
        </div>
        <foot></foot>
      </div>
    </div>
  </div>
</template>
<script>
  
  import PlantCard from '../components/home/plant-card.vue';
  import bcTop from '../components/home/bc-top.vue';
  import foot from '../components/home/foot.vue';
  import copyright from '../components/home/copyright.vue';
  import cards from '../components/home/cards.vue';
  import cardscol from '../components/home/cards-col.vue'

  import {test,message} from '@/js/test';

  export default {

    components:{PlantCard,bcTop,foot,copyright,cards,cardscol},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        isCol:false
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted(){
      if(window.innerWidth<innerHeight)
        {
            this.isCol=true;
        }
      test();
      console.log('message:',message);
      var plantimgs = document.getElementsByClassName("plantImg");
/*       alert(typeof plantimgs); */
      console.log(plantimgs);
      for(var i=0;i<plantimgs.length;i++)
      {
        plantimgs[i].style.width = window.innerWidth*0.075+"px";
        plantimgs[i].style.height = window.innerWidth*0.075+"px";
      }
      /* plantimgs.forEach((e)=>{
        e.style.width = window.innerWidth*0.075+"px";
        e.style.height = window.innerWidth*0.075+"px";
      }) */
        /* plantimg.style.width = window.innerWidth*0.075+"px";
        plantimg.style.height = window.innerWidth*0.075+"px";
        alert(window.innerWidth); */
      /* alert(window.innerWidth*0.15); */
    }
    
  }
</script>
<style>

  .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 95%;
    padding:auto;
    margin:auto;
    scroll-snap-type: y mandatory;
    
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
    flex-wrap: nowrap;
  }
  .cardbar{
    font-family: "Lucida Console", Courier, monospace;
    
    margin: 20px;
    margin-top: 40px;
    /* padding-left: 20px; */
    height: 40px;
    /* width: 100%; */
    width: 80%;
    font-weight: 500;
    font-size: xx-large;
    text-align: left;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
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