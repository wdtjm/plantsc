<template>
    <div class="rel-total">
        <div class="rel-title">Release 1.2</div>
        <div class="rel-mod-date">Last modified at 2021-04-07</div>
        
        <ul>
            <li><span>A total of 26,326 marker genes from four species were collected in Release 1.2 (detailed
                    information could be found in the following table).</span></li>
            <li><span>Attention: Same cell type at different developmental stages were classified as different cell
                    types in previous version of PlantscRNAdb. For example &#39;Chalazal Endosperm at Globular and
                    Early Heart Stages&#39; and &#39;Chalazal Endosperm at Preglobular Stage&#39; were listed as
                    different cell type. But in this version of PlantscRNAdb, such cell types were considered as one
                    cell type, therefore the number of cell types was less than that of previous versions.</span>
            </li>
        </ul>
        <figure style="width: calc(100% - 20px);">
            <table>
                    <thead>
                        <tr>
                            <th style='text-align:left;'><strong><span>Species</span></strong></th>
                            <th style='text-align:left;'><strong><span>Tissues</span></strong></th>
                            <th style='text-align:left;'><strong><span>Cell types</span></strong></th>
                            <th style='text-align:left;'><strong><span>Marker genes</span></strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style='text-align:left;'><em><span>Arabidopsis thaliana</span></em></td>
                            <td style='text-align:left;'><span>10</span></td>
                            <td style='text-align:left;'><span>79</span></td>
                            <td style='text-align:left;'><span>14,922</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Oryza sativa</span></em></td>
                            <td style='text-align:left;'><span>5</span></td>
                            <td style='text-align:left;'><span>35</span></td>
                            <td style='text-align:left;'><span>5,428</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Solanum lycopersicum</span></em><span> *</span></td>
                            <td style='text-align:left;'><span>5</span></td>
                            <td style='text-align:left;'><span>25</span></td>
                            <td style='text-align:left;'><span>75</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Zea mays</span></em></td>
                            <td style='text-align:left;'><span>9</span></td>
                            <td style='text-align:left;'><span>42</span></td>
                            <td style='text-align:left;'><span>5,901</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>

        <p class="rel-para-left"><span>*</span><span> scRNA-seq data from </span><em><span>Solanum lycopersicum</span></em><span> were not
                    avaliable for public, therefore the number of marker genes from tomato was much less than the other
                    three species. We will update this data as soon as the public scRNA-seq data from
                </span><em><span>Solanum lycopersicum</span></em><span> is avaliable.</span></p>

        

        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped src="../../css/typora.css"></style>

<style scoped>

.rel-total{
    margin-top: 20px;
    background-color: white;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 40px;
    padding-right: 20px;
}
.rel-title{
    font-family:"Source Sans Pro", sans-serif;
    font-weight: 400;
    font-size: x-large;
    display: flex;
    margin-top:20px;
}
.rel-mod-date{
    margin-top: 15px;
    color:#00000094;
}
ul{
    margin-top: 0;
    padding-top: 4px;
    padding-left: 22px;
}
ul > li{
    margin-top: 10px;
    font-size: 16px;
}
.rel-h4{
    margin-top: 10px;
    margin-bottom: 0;
}
.rel-h4 ::before{
    content: "\f00c";
}
.rel-p{
    margin: 0;
    margin-left: 10px;
    margin-top: 10px;
    padding: 0;
}
.rel-para-left{
    text-align: left;
    
}
.rel-ref{
    margin-left: 10px;
}
</style>