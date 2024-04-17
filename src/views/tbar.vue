<template>
    <div class="tbar" :class="{'shadow':isVisable,'barhide':isHide}"  @mouseenter="mousein" @mouseleave="mouseout">
        <div class="left-title">
            PlantDB
        </div>
        <div>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <g fill="none" stroke="rgb(44,162,95)">
                <path stroke-width="4" d="m5 40 l215 0" />
            </g>
            </svg> -->
        <el-menu
        :default-active="activeIndex2"
        @mouseenter="handleMousein"
        class = "right-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color=rgb(0,0,0,0)
        text-color="#000"
        active-text-color="rgb(44,162,95)" >
        <el-menu-item  class="t0" index="0">PlantDb</el-menu-item>
        <el-menu-item class="t1" index="1">Home</el-menu-item>
        <el-submenu class="t2" index="2">
            <template slot="title">Tools</template>
            <el-menu-item index="2-1">Tool1</el-menu-item>
            <el-menu-item index="2-2">Tool2</el-menu-item>
            <el-menu-item index="2-3">Tool3</el-menu-item>
        </el-submenu>
        <el-menu-item class="t3" index="3" >brouser</el-menu-item>
        <el-menu-item class="t4" index="4">Help</el-menu-item>
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
            scrollTop:0,
            isHide:0,
            lastscrollTop:0
        }
    },
    methods: {
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
        if(this.scrollTop>this.lastscrollTop)
        {
            this.isHide = true;
        }else{
            this.isHide = false;
        }
        this.lastscrollTop = this.scrollTop;
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
.tbar{
    transition: all 1s ease;

    width:100%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;

}
.barhide{
    transform: translateY(-100%);
}
.right-menu{
    width:100%;
    height: 100%;
    border-bottom: 0 !important;
}
.left-title{
    margin-left: 20px;
}
.shadow{
    background-color: hsla(0, 0%, 71%, 0.6);
}

.el-menu-item.t0:hover ~ #indicator{
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
}

#indicator{
    position: absolute;
    left: 5%;
    bottom: 0;
    width: 30px;
    height: 3px;
    background-color: green;
    border-radius: 5px;
    transition: 0.2s ease left;
    opacity: 0;
}
</style>