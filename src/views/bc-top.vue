
<template>
  <div class="background-img" :class="{'bc-mobile':ismobile}">
    <div class="introduction">
        <div class="intro-layout">
            <div class="title">Introduction of PlantscRNAdb</div>
            <div class="line" />
            <div class="intro">PlantscRNAdb is a database for plant single-cell RNA analysis, which includes fifteen species</div>
            <ul>
                <li>Arabidopsis thaliana</li>
                <li>Oryza sativa</li>
                <li>Solanum Lycopersicum</li>
                <li>Other</li>
            </ul>
        </div>
        <div class="btn-box">
            <el-button class="btn">Learn More</el-button>
            <el-button class="btn">Release Info</el-button>
        </div>
    </div>
    <img class="arrowicon" src="../assets/down-arrow-black.png" @click="scroll">
    <div class="bottom">
        
        <!-- <div class="bottomline-c"/> -->
        <div class="intro-card-box">
            <div class="bottomline" />
            <div class="left-box">
                <div class="intro-card">
                    <div class="type">SPECIES</div>
                    <div class="time">Last 7 days</div>
                    <div class="num">25</div>
                </div>
                <div class="intro-card">
                    <div class="type">TISSUE</div>
                    <div class="time">Last 5 days</div>
                    <div class="num">400</div>
                </div>
            </div>
            <div class="right-box">
                <div class="intro-card">
                    <div class="type">CELL TYPE</div>
                    <div class="time">Last 7 days</div>
                    <div class="num">25</div>
                </div>
                <div class="intro-card">
                    <div class="type">MARKER</div>
                    <div class="time">Last 5 days</div>
                    <div class="num">400</div>
                </div>  
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import { isMobile } from 'react-device-detect';
export default {
    data(){
        return{
            ismobile:isMobile
        }
    },
    methods:{
        scroll(){
            document.querySelector('#mainp').scrollIntoView({
            behavior: "smooth", // 定义过渡动画 instant立刻跳过去 smooth平滑过渡过去
            block: "start", // 定义垂直滚动方向的对齐 start顶部（尽可能）  center中间（尽可能）  end（底部）
            inline: "center", // 定义水平滚动方向的对齐
            });
        }
    },
    mounted(){
        var ratio = 0,//浏览器当前缩放比
                screen = window.screen,//获取屏幕
                ua = navigator.userAgent.toLowerCase();//判断登陆端是pc还是手机

            if (window.devicePixelRatio !== undefined) {
                ratio = window.devicePixelRatio;
            }
            else if (~ua.indexOf('msie')) {
                if (screen.deviceXDPI && screen.logicalXDPI) {
                    ratio = screen.deviceXDPI / screen.logicalXDPI;
                }
            }
            else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
                ratio = window.outerWidth / window.innerWidth;
            }

            if (ratio) {
                ratio = Math.round(ratio * 100);
            }
            if (ratio!=100) {
                alert("您当前的窗口缩放比例为" + ratio + "%建议您的窗口比例调为100%，窗口比例不为100%可能导致页面排版错乱");//这里layer是layui框架自带弹窗，如果不是layui可以使用alert（）代替；
            }
    },
}
</script>

<style>
.background-img{
  background-image: url('../assets/background01.png');
  width:95%;
  height: 100vh;
  position:relative;
  left: 2.5%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
  scroll-snap-align: start;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bc-mobile{
    height: 25vh;
}
.arrowicon{
    position:absolute;
    bottom: 60px;
    width: 50px;
    animation: arrowMove 1.5s infinite;
    cursor: pointer;
}
@keyframes arrowMove {
  0% { /* 起始状态 */ 
        opacity: 0.4;
    }
  50% { opacity: 0.8;
        transform: translateY(30px);
}
  100% { opacity: 0.4; }
}
.introduction{

    display:flex;
    width: 70%;
    height: auto;
    flex-direction: column;
    justify-content: start;
    margin-top: 7%;
    align-items: center;
    padding: 30px;
    background-color: hsla(0,0%,100%,80%);
    /* background-color: hsla(0,0%,95%,50%);; */
}
.intro-layout{
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}
.background-img .title{
    font-size: 40px;
    margin: 10px;
}
.line{
  width: 100%;
  height: 2px;
  margin-top: 0.5em;
  margin-bottom: 0.7em;
  background:hsl(0,0%,50%);
  position: relative;
  text-align: center;
}
.background-img .intro{
    color:hsl(0,0%,30%);
}
ul li{
    text-align: start;
    /* font-size: ; */
}
ul{
    margin: 0;
    padding-top: 10px;
    padding-left: 20px;
    line-height: 25px;
    font-size: 18px;
    /* line-height: 30px; */
}
.btn-box{
    margin-top: 10px;
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
}
.btn-box .btn{
    /* border: 3px solid hsla(0,0%,95%,75%); */
    border: 3px solid hsla(0,0%,50%,75%);
    background-color:transparent;
    width: 180px;
    height: 40px;
    border-radius: 9px;
    color: black;
}
.btn-box .el-button:hover{
    background: hsla(0,0%,100%,75%);
    border-color: hsla(0,0%,95%,75%);
    color: black;
}
.btn-box .el-button:focus,.btn-box .el-button:active{
    background: hsla(0,0%,100%,75%);
    border-color: hsla(0,0%,95%,75%);
    color: black;
}

.bottom{
    margin-top: 3%;
    /* height: 130px; */
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;

}
.bottomline{
  position: absolute;
  width: 90%;
  height: 2px;
  top: 5%;
  background:hsl(0,0%,30%);
  
  text-align: center;
}
.bottomline-c{
    width: 2px;
    height: 150px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    background:hsl(0,0%,30%);
    position: absolute;
    text-align: center;
    left: 50%;
}
.intro-card-box{
    position: absolute;
    width: 90%;
    display: flex;
    /* background-color: hsla(0,0%,80%,50%); */
    /* background-color: hsla(0,0%,90%,60%); */
    background-color: hsla(0,0%,100%,80%);
    flex-direction: row;
    justify-content: center;
    bottom: 15%;
    /* color:white; */
    align-items: center;
}
.intro-card-box .left-box{
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-left: 30px;
}
.intro-card-box .right-box{
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-right: 30px;
}
.intro-card .type{
    margin-top: 15px;
    font-size: 23px;
    letter-spacing: 5px;
}
.intro-card .time{
    font-size: 13px;
    color:hsl(0,0%,40%);
    /* color: hsla(0,0%,90%,70%); */
    margin: 10px;
}
.intro-card .num{
    font-size: 40px;
    font-weight: lighter;
}


</style>