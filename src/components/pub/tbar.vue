<template>
    <div class="tbar" :class="{'shadow':isVisable,'barhide':isHide}"  @mouseenter="mousein" @mouseleave="mouseout">
        <div class="left-title" @click="goto('/')">
            PlantscRNAdb
        </div>
        <div>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <g fill="none" stroke="rgb(44,162,95)">
                <path stroke-width="4" d="m5 40 l215 0" />
            </g>
            </svg> -->
        <el-menu
        ref="menu"
        :router="true"
        :default-active="this.$route.matched[0].path"
        @mouseenter="handleMousein"
        class = "right-menu"
        mode="horizontal"
        
        background-color=rgb(0,0,0,0)
        text-color="#000"
        active-text-color="rgb(44,162,95) !important" >
        <el-menu-item class="item" index="/home">Home</el-menu-item>
        <el-menu-item class="item" index="/celltype">Celltype</el-menu-item>
        <el-menu-item class="item" index="/marker">Marker</el-menu-item>
        <el-menu-item class="item" index="/search">Search</el-menu-item>
        <el-menu-item class="item" index="/spatial">Spatial</el-menu-item>
        <el-menu-item class="item" index="/references">References</el-menu-item>
        <el-menu-item class="item" index="/download">Download</el-menu-item>
        <el-submenu boundariesPadding="0">
            <template  slot="title"><span class="sub-item">Help</span></template>
            <el-menu-item class="item" index="/release">Release</el-menu-item>
            <el-menu-item class="item" index="/Overview">Overview</el-menu-item>
        </el-submenu>
        <div id="indicator"></div>
        </el-menu>
        
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisable:false,
            activeIndex:'/',
            scrollTop:0,
            isHide:0,
            lastscrollTop:0
        }
    },
    methods: {
        goto(index){
            if(index=='/marker'){
                this.$router.push({name:'marker',params: {species:'Arabidopsis thaliana'}})
                this.$refs.menu.activedIndex = index;
            }else{
                this.$router.push(index).catch(err => {});
                this.$refs.menu.activedIndex = index;
            }
           
        },
        mousein(){
            this.isVisable=true;
        },
        mouseout(){
            if(this.scrollTop==0)
            this.isVisable=false;
        },
                //监听窗口滚动
        windowScrollListener() {
        //获取操作元素最顶端到页面顶端的垂直距离
        this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (this.scrollTop >= 1) {
            this.isVisable = true; //大于1时显示元素
        }
        if (this.scrollTop < 1) {
            this.isVisable = false; //小于1时隐藏元素
        }
        /* var mainp=document.querySelector('#mainp')
        if( (this.scrollTop>this.lastscrollTop)&&( this.scrollTop<mainp.offsetTop)){
            mainp.scrollIntoView({
                behavior: "smooth", // 定义过渡动画 instant立刻跳过去 smooth平滑过渡过去
                block: "start", // 定义垂直滚动方向的对齐 start顶部（尽可能）  center中间（尽可能）  end（底部）
                inline: "center", // 定义水平滚动方向的对齐
            });
        }
        this.lastscrollTop=this.scrollTop; */
    }
        
    },
    created(){
                //添加滚动监听事件
        //在窗口滚动时调用监听窗口滚动方法
        window.addEventListener('scroll', this.windowScrollListener);
    },
    destroyed() {
    //离开页面时删除该监听
        window.removeEventListener('scroll', this.windowScrollListener)
    }
}
</script>

<style>
.item{
    /* height: auto !important;
    
    line-height:55px !important;
    padding: 0 10px !important; */
    font-size: 18px !important;
    font-weight: 500 !important;
    color: hsl(0,0%,25%) !important;
    padding:0 15px !important;
}
.sub-item{
    /* height: auto !important;
    
    line-height:55px !important;
    padding: 0 10px !important; */
    font-size: 18px !important;
    font-weight: 500 !important;
    color: hsl(0,0%,25%) !important;
    padding:0 15px !important;
}
.tbar{
    padding-left: 4%;
    padding-right: 4%;
    position:fixed;
    width:92%;
    height: 65px;
    left: 0; top: 0; right: 0; bottom: 0;
    margin: auto;
    margin-top: 0;
    transition: all 1s ease;
    /* margin-left: 2.5%;
    margin-right: 2.5%; */
    display:flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;

}
.barhide{
    transform: translateY(-100%);
}
.right-menu{
    width:100%;
    height: 90%;
    border-bottom: 0 !important;
    font-size: larger !important;
    padding-top: 0px;
}
.left-title{
    margin-left: 20px;
    font-size: x-large;
    font-weight: 500;
    cursor: pointer;
}
.left-title:hover{
    color: rgb(44,162,95);
}
.shadow{
    background-color: hsla(0, 0%, 71%, 0.6);
}

/* .el-menu-item.t0:hover ~ #indicator{
    opacity: 1;
}

.el-menu-item.t1:hover ~ #indicator{
    opacity: 1;
    left:25%
}

.el-submenu.t2:hover ~ #indicator{
    opacity: 1;
    left:45%
}

.el-menu-item.t3:hover ~ #indicator{
    opacity: 1;
    left:65%
}

.el-menu-item.t4:hover ~ #indicator{
    opacity: 1;
    left:85%
} */

/* #indicator{
    position: absolute;
    left: 5%;
    bottom: 0;
    width: 30px;
    height: 3px;
    background-color: green;
    border-radius: 5px;
    transition: 0.2s ease left;
    opacity: 0;
} */
</style>