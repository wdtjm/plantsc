<template>
  <div id="app">
    <tbar></tbar>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>


import home from './pages/home.vue';
import tbar from './components/pub/tbar.vue'
import bottom from './components/pub/bottom.vue'


export default{
  components:{home,tbar,bottom},
  data() {
    return {
      requestData:"hellolll"
    }
  },
  mounted(){
    
  },
  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding:0;
  background-color:hsla(123,47.6%,91.8%,70%)
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
