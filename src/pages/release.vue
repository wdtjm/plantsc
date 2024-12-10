<template>
  <div class="release-page">
    <div class="under-navbar"></div>
    <div class="title">Release Information</div>
    <div class="release-line"></div>
    <div class="rel-info">Latest version: 3.0 (Last modified at 2023-08-15)</div>
    <release-3-0></release-3-0>
    <release-2-0></release-2-0>
    <release-1-2></release-1-2>
    <release-1-1></release-1-1>
    <release-1-0></release-1-0>
  </div>
</template>

<script>

import Release10 from '@/components/release/release1.0.vue'
import Release11 from '@/components/release/release1.1.vue'
import Release12 from '@/components/release/release1.2.vue'
import Release20 from '@/components/release/release2.0.vue'
import Release30 from '@/components/release/release3.0.vue'

export default {

  components:{Release10, Release11, Release12, Release20, Release30},
  data(){
    return{
    }
  },

}
</script>

<style scoped>
.release-page{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.463) !important;
  padding-bottom: 70px;
}
.title{
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: xx-large;
  color: hsla(0,0%,0%,60%);
}
.release-line{
  width: 400px;
  height: 2px;
  background-color: hsla(0,0%,0%,20%);
}
.rel-info{
  font-size: larger;
  margin: 20px;
  margin-bottom: 5px;
  color: hsla(0,0%,0%,60%);
}
.rel-total{
    margin-top: 70px !important;
    background-color: white;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 40px;
    padding-right: 20px;
    padding-bottom: 30px;
}
</style>