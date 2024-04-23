<template>
    <div class="plant-outer">
        <div class="plant" :class="{'hover-scale':plant.children==null}">
            <img class="plantImg" :src="'/plants/'+plant.url"/>
            <div class="caption">
                <div class="caption-description">
                    <div class="plantTitle" :class="{'latin':plant.isLatin}">{{ plant.name }}</div>
                    <div class="plantMaker">{{ 'XX' + ' Maker' }}</div>
                </div>
            </div>
            <div v-if="plant.children!=null" class="children-info caption-description">
                <div v-for="e in plant.children" :key="e" class="plantTitle">
                    {{ e }}
                </div>
            </div>
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
.plant .children-info{
    opacity: 0;
    width: 90%;
    height: 90%;
    position: absolute;
    top: 0;
    left: 110%;
    background-color: hsla(147,25%,82%,90%);
    transition: all 0.3s ease;
    z-index: -1;
    
    border-radius: 20px;

    display:flex;
    flex-direction: column;
    justify-content: center;
}
.hover-scale:hover{
    scale:1.05;
}
.plant .children-info:hover{
    opacity: 1;
    z-index: 10;
}
.latin{
    font-style: italic;
}
.plant-outer{
    margin: 15px;
   
}
.plantImg{
    width: 100px;
    height: 100px;
    transition: all 0.4s ease;
    
}
.plantTitle{
    font-weight: 500;
    font-size: medium;
    margin-bottom:10%;
}
.plantMaker{
    font-size: small;
    color:green;
}
.plant{
    /* background-color: hsla(133, 34%, 64%, 0.2); */
    padding:10px;
    background:transparent;
    border-radius: 20px;
    position:relative;
    /* background-color: hsla(175,47.6%,90%,70%) */;
    border: 10px solid hsla(133, 34%, 86%, 0.9);;
    box-shadow: 
    0px 3px 7px 0px rgba(0,0,0,0.3);
    
}
.plant:hover{
    background-color: hsla(133, 34%, 86%, 0.4);
    cursor: pointer;
}
.plant:hover .plantImg{
    scale:1.05;
}
.caption{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: hsla(147,25%,82%,90%);
    opacity: 0;
    transition:all 0.4s ease-out;
    display:flex;
    flex-direction: column;
    justify-content: center;
}
.caption-description{
    padding: 10px;
    align-content: center;
    text-align: center;
    justify-content: center;
}
.plant:hover > .caption{
    opacity: 1;
}
.plant:hover > .children-info{
    opacity: 1;
    z-index: 10;
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