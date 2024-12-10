<template>
  <div class = 'container'>
    <!-- 背景图及图上的元素 -->
    <bcTop></bcTop>

    <div class="head">
      <!-- <tbar></tbar> -->
    </div>
    <div class="mainPage" id="mainp">
      <div  class="Main">
        <div class="card-and-bar">
          <div class="cardbar">
          Browse gene expression patterns over 39 plants
          </div>
          <!-- cards是植物卡片，cardscol是为竖屏优化的植物卡片布局 -->
          <cards v-if="!this.isCol"></cards>
          <cardscol v-else></cardscol>
        </div>
        <foot></foot>
      </div>
    </div>
  </div>
</template>
<script>
  import tbar from '../components/pub/tbar.vue';
  import PlantCard from '../components/home/plant-card.vue';
  import bcTop from '../components/home/bc-top.vue';
  import foot from '../components/home/foot.vue';
  import copyright from '../components/home/copyright.vue';
  import cards from '../components/home/cards.vue';
  import cardscol from '../components/home/cards-col.vue'

  import {test,message} from '@/js/test';
  import {sourcetree} from '@/js/sourcetree';
  import {treeToJson} from '@/js/treeToJson';
  import {listToTree} from '@/js/toTree';
  import { cellTree } from '@/js/cellTree';

  export default { 

    components:{tbar,PlantCard,bcTop,foot,copyright,cards,cardscol},
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
     
     
      //转为json
      // console.log('json to tree:')
      //console.log(listToTree(sourcetree));
      // console.log('tree:',treeToJson(listToTree(sourcetree)));
      //console.log(JSON.stringify(cellTree));
    }
    
  }
</script>
<style>

  .container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 95%;
    padding: 0;
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
    flex-wrap: nowrap;
  }
  .cardbar{
    /* font-family: "Lucida Console", Courier, monospace;
     */
    margin: 20px;
    margin-top: 40px;
    /* padding-left: 20px; */
    height: 40px;
    /* width: 100%; */
    width: 90%;
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