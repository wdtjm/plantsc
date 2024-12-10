<template>
    <div class="rel-total">
        <div class="rel-title">Release 2.0</div>
        <div class="rel-mod-date">Last modified at 2022-05-24</div>
        
        <ul>
                <li><span>Four new species of single-cell RNA data were added in the latest version, including
                    </span><em><span>Lemna minuta</span></em><span> (SAMN19243672), </span><em><span>Nicotiana
                            attenuata</span></em><span> (PRJNA796301), </span><em><span>Populus alba</span></em><span>
                        (PRJNA703312, PRJCA005543) and </span><em><span>Fragaria vesca</span></em><span> (CRA004848).
                        Among them, poplar contains two single-cell data, and the remaining species contain one
                        single-cell data.</span></li>
                <li><span>Thirty-one new single-cell data of original four species were added in Release 2.0, including
                        twenty-one for </span><em><span>Arabidopsis thaliana</span></em><span>, three for
                    </span><em><span>Oryza sativa</span></em><span>, five for </span><em><span>Zea
                            mays</span></em><span>, and two for </span><em><span>Solanum
                            lycopersicum</span></em><span>.</span></li>
                <li><span>A total of 69,462 marker genes from eight species were collected in Release 2.0 (detailed
                        information in the following table).</span></li>
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
                            <td style='text-align:left;'><span>19</span></td>
                            <td style='text-align:left;'><span>248</span></td>
                            <td style='text-align:left;'><span>20,862</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Oryza sativa</span></em></td>
                            <td style='text-align:left;'><span>7</span></td>
                            <td style='text-align:left;'><span>71</span></td>
                            <td style='text-align:left;'><span>11,439</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Solanum lycopersicum</span></em></td>
                            <td style='text-align:left;'><span>7</span></td>
                            <td style='text-align:left;'><span>34</span></td>
                            <td style='text-align:left;'><span>4,426</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Zea mays</span></em></td>
                            <td style='text-align:left;'><span>11</span></td>
                            <td style='text-align:left;'><span>75</span></td>
                            <td style='text-align:left;'><span>11,599</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Fragaria vesca</span></em></td>
                            <td style='text-align:left;'><span>1</span></td>
                            <td style='text-align:left;'><span>9</span></td>
                            <td style='text-align:left;'><span>1,723</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Populus</span></em></td>
                            <td style='text-align:left;'><span>2</span></td>
                            <td style='text-align:left;'><span>25</span></td>
                            <td style='text-align:left;'><span>8,406</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Nicotiana attenuata</span></em></td>
                            <td style='text-align:left;'><span>1</span></td>
                            <td style='text-align:left;'><span>5</span></td>
                            <td style='text-align:left;'><span>1,723</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Lemna minuta</span></em></td>
                            <td style='text-align:left;'><span>1</span></td>
                            <td style='text-align:left;'><span>12</span></td>
                            <td style='text-align:left;'><span>4,238</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>

            <ul>
                <li><em><span>Arabidopsis thaliana</span></em><span> single-cell data were re-analyzed by using the Araport11
                    annotation files. Note that the version of genome was TAIR10 and the version of annotation files was
                    Araport11 (downloaded from </span><a href='https://plants.ensembl.org/index.html' target='_blank'
                    class='url'>https://plants.ensembl.org/index.html</a><span>)</span></li>
            </ul>
        

        

        
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