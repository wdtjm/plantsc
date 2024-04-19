<template>
    <div class="plant">
        <img class="plantImg" :src="plant.url"/>
        <div class="plantTitle">{{ plant.name }}</div>
        <div class="caption">
            <div class="caption-description">{{ plant.description }}</div>
        </div>
    </div>   
</template>

<script>
export default {
    props:{
	    plant:{          
	      type:Object,
	      required:true
	    }
	  }

}
</script>

<style>
.plantImg{
    padding-top: 10px;
    max-width: 100px;
    max-height: auto;
    transition: all 0.4s ease;
}
.plantTitle{
    font-weight: 500;
}
.plant{
    overflow: hidden;
    background-color: hsla(133, 34%, 64%, 0.2);
    border-radius: 20px;
    margin: 10px;

}
.plant:hover{
    scale: 1.05;
    background-color: hsla(133, 34%, 86%, 0.4);
    cursor: pointer;
}
.caption{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    top:0;
    background-color: hsla(147,25%,82%,50%);
    opacity: 0;
    transition:all 0.4s ease-out;
    display:flex;
}
.caption-description{
    padding: 10px;
    align-content: center;
    text-align: center;
}
.plant:hover > .caption{
    opacity: 1;
}
</style>

<!-- <style>
.plantImg{
    padding-top: 10px;
    max-width: 100px;
    max-height: auto;
    transition: all 0.4s ease;
}
.plantTitle{
    font-weight: 500;
}
.plant{
    overflow: hidden;
    background-color: hsla(133, 34%, 64%, 0.2);
    border-radius: 20px;
    margin: 10px;

}
.plant:hover{
    scale: 1.05;
    background-color: hsla(133, 34%, 86%, 0.4);
    cursor: pointer;
}
.caption{
    position: absolute;
    width: 100%;
    height: 100%;
    top:100%;
    background-color: hsla(147,25%,82%,50%);
    opacity: 0;
    transition:transform 0.4s ease-out;
    display:flex;
}
.caption-description{
    padding: 10px;
    align-content: center;
    text-align: center;
}
.plant:hover > .caption{
    transform: translateY(-100%);
    opacity: 1;
}
</style> -->