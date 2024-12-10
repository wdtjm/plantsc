<template>
    <div class="rel-total">
        <div class="rel-title">Release 1.1</div>
        <div class="rel-mod-date">Last modified at 2021-03-01</div>
        
        <ul>
            <li><span>Four datasets (10.1101/2020.11.25.397919 10.1016/j.molp.2021.01.001
                    10.1016/j.devcel.2020.12.015 10.1093/plcell/koaa055) were added in this version. Detailed list
                    of reference papers could be found </span><a
                    href='http://ibi.zju.edu.cn/plantscrnadb/ref.php'><span>here</span></a><span>.</span></li>
            <li><span>A total of 26,326 marker genes from four species were collected in Release 1.1 (detailed
                    information could be found in the following table).</span></li>
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
                            <td style='text-align:left;'><span>11</span></td>
                            <td style='text-align:left;'><span>152</span></td>
                            <td style='text-align:left;'><span>14,922</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Oryza sativa</span></em></td>
                            <td style='text-align:left;'><span>5</span></td>
                            <td style='text-align:left;'><span>43</span></td>
                            <td style='text-align:left;'><span>5,428</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Solanum lycopersicum</span></em><span> *</span></td>
                            <td style='text-align:left;'><span>6</span></td>
                            <td style='text-align:left;'><span>30</span></td>
                            <td style='text-align:left;'><span>75</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Zea mays</span></em></td>
                            <td style='text-align:left;'><span>9</span></td>
                            <td style='text-align:left;'><span>56</span></td>
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