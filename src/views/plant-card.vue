<template>
    <div class="plant">
        <img class="plantImg" :src="plant.url"/>
        <div class="plantTitle">{{ plant.name }}</div>
    </div>
</template>

<script>
export default {
    props:{
	    plant:{           //这个就是父组件中子标签自定义名字
	      type:Object,
	      required:true
	    }
	  }

}
</script>

<style>
.plantImg{
    max-width: 120px;
    max-height: 120px;
    transition: all 0.4s ease;
}
.plantTitle{
    font-weight: 500;
}
.plant{
    border:3px solid green;

}
.plant:hover{
    scale: 1.05;
    background-color: aliceblue;
}
</style>