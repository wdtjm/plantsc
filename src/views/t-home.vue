<template>
  <div class = 'container'>
    <div class="head">
      <tbar></tbar>
    </div>
    <div class="mainPage">
      <div class="underbar">
      </div>
      <div  class="Main">
        <div>Main</div>
      </div>
    </div>
    <div class="footer">

    </div>
  </div>
</template>
<script>
  import tbar from './tbar.vue';
  export default {

    components:{tbar},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
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
  }
  
  .head{
    position:fixed;
    top:0;
    width:100%;
    height: 60px;
  }
  .mainPage{
    width:100%;
    height: calc(130vh);
  }
  .footer{
    width:100%;
  }
  .Main{
    justify-content: center;
    align-content: center;
  }
  .underbar{
    height: 60px;
    width: 100%;
    background-color: hsla(133, 34%, 64%, 0.2);
  }
</style>