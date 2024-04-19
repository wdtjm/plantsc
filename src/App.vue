<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>


import home from './views/t-home.vue';

export default{
  components:{home},
  data() {
    return {
      requestData:"hellolll"
    }
  },
  mounted(){
    const axios = require('axios');
    const that = this;
    // 向给定ID的用户发起请求
    axios.get('http://localhost:8080/testParam?age=18')
      .then(function (response) {
        // 处理成功情况
        console.log(response);
        
        that.requestData = response.data;
      })
      .catch(function (error) {
        // 处理错误情况
        console.log(error);
      })
      .finally(function () {
        // 总是会执行
      });

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
