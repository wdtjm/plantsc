<template>
  <div class="foot">
    <div class="foot-bar">
      <span class="contact">Contact Us</span>
    </div>
    <div class="foot-detail">
      <div class="foot-detail-line">
        <span class="subtitle">Email: </span><span>22216123@zju.edu.cn</span>
      </div>
      <div class="foot-detail-line">
        <span class="subtitle">Address: </span><span>100 Chongwen Road, Suzhou Industrial Park, Suzhou, China, 215123</span>
      </div>
      <div class="foot-detail-line">
        <span>Copyrigh</span><span class="foot-copyright"> ©</span><span style="text-align: left;"> 2020-2021 Institute of Crop Sciences / Institute of Bioinformatics, Zhejiang University. All rights reserved.</span>
      </div >
      <div class="foot-detail-line">
        <span>Last modified at 2023-08-15.</span>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.foot{
    margin-top: 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.4); */
    margin-bottom: 30px;
}
.foot-bar{
  width: 100%;
  height: 30px;
  background-color: hsla(123,47.6%,91.8%,70%);
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  font-weight: 600;
  font-size: larger;
}
.contact{
  padding-left: 15px;
}
.foot-detail{
  margin-top: 10px;
  margin-left: 50px;
  margin-bottom: 10px;
  width: 100%;
  font-size: medium;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.foot-copyright{
  color:green;
  margin-left: 5px;
  margin-right: 5px;
}
.foot-detail .subtitle{
  font-weight: 600;
}
.foot-detail-line{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 7px;
}
</style>