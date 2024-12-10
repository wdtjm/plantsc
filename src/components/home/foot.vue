<template>
  <div class="foot">
    <div class="foot-bar">
      <span class="contact">Contact Us</span>
      <span class="cite-us">Cite Us</span>
    </div>
    <div class="split-column">
      <div class="contact-detail">
        <div class="foot-detail-line">
          <span class="subtitle">Email: </span><span>&nbsp;22216123@zju.edu.cn</span>
        </div>
        <div class="foot-detail-line">
          <span class="subtitle">Address: </span><span>&nbsp;Zijingang Campus (Map): 866 Yuhangtang Road, Hangzhou 310058</span>
        </div>
        <div class="foot-detail-line">
          <span>Copyright</span><span class="foot-copyright"> ©</span><span style="text-align: left;"> 2020-2021 Institute of Crop Sciences / Institute of Bioinformatics, Zhejiang University. All rights reserved.</span>
        </div >
        <div class="foot-detail-line">
          <span>Last modified at 2023-08-15.</span>
        </div>
      </div>



      <div class="cite-us-detail">
        <div class="cite-us-info">
          <div class="cite-paragraph">Hongyu Chen, Xinxin Yin, Longbiao Guo, Jie Yao, Yuwen Ding, Xiaoxu Xu, Lu Liu, Qian-Hao, Zhu, Qinjie Chu*, Longjiang Fan*.</div>
          <div>PlantscRNAdb: A Database for Plant Single-cell RNA Analysis. Molecular Plant (2021), 14(6): 855-857
            <span><a href="https://www.cell.com/molecular-plant/fulltext/S1674-2052(21)00163-5">[full text]</a></span>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  font-size: larger;
}
.contact{
  text-align: left;
  padding-left: 15px;
  width: 50%;
}
.cite-us{
  padding-left: 10px;
}
.split-column{
  width: 100%;
  display: flex;
  flex-direction: row;
}

.contact-detail{
  margin-top: 10px;
  padding-left: 15px;
  margin-bottom: 10px;
  width: 50%;
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
.contact-detail .subtitle{
  font-weight: 600;
}
.foot-detail-line{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 5px;
}
.cite-us-detail{
  width: 50%;
}
.cite-us-info{
  margin-top: 17px;
  padding-left: 30px;
  text-align: left;
}
.cite-paragraph{
  margin-bottom:5px;
}
a{
  color: #333333;
  //text-decoration: none;
  text-decoration-line: underline;
}
</style>