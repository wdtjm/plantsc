<template>
    <div class="rel-total">
        <div class="rel-title">Release 3.0</div>
        <div class="rel-mod-date">Last modified at 2023-08-15</div>
        <h4  class="rel-h4 el-icon-check">&nbsp;&nbsp;Data collection</h4>
        <ul>

                <li>
                    <p><span>Fifteen new single-cell or single-nucleus RNA data from recently published articles were
                            collected for Release 3.0. Notably, the latest version adds six new species of single-cell
                            or single-nucleus RNA data, including </span><em><span>Brassica rapa</span></em><span>
                            (PRJCA009630, PRJCA013085), </span><em><span>Manihot esculenta</span></em><span>
                            (PRJNA895163), </span><em><span>Medicago truncatula</span></em><span> (PRJCA012129,
                            PRJNA868047), </span><em><span>Nepeta tenuifolia</span></em><span> (PRJNA743551), and
                        </span><em><span>Gossypium hirsutum</span></em><span> (PRJNA600131). 29,269 new marker genes
                            were identified from these data.</span></p>
                </li>
                <li>
                    <p><span>Four spatial transcriptomics data were added to Release 3.0, from four species:
                        </span><em><span>Arabidopsis thaliana</span></em><span> (CNP0002618), </span><em><span>Oryza
                                sativa</span></em><span> (our unpublished ST data), </span><em><span>Glycine
                                max</span></em><span> (PRJCA009893), and </span><em><span>Phalaenopsis
                                Aphrodite</span></em><span> (PRJNA813957). </span><em><span>Glycine
                                max</span></em><span> and </span><em><span>Phalaenopsis Aphrodite</span></em><span> were
                            newly added species to Release 3.0. The rice data was from our unpublished article. These ST
                            data were re-analyzed to identify new marker genes for cell type annotation. In total,
                            11,809 marker genes were identified from these ST data.</span></p>
                </li>
                <li>
                    <p><span>In sum, a total of 112,657 marker genes from fifteen species were collected for Release 3.0
                            (detailed information can be found in the table below).</span></p>
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
                            <td style='text-align:left;'><span>22</span></td>
                            <td style='text-align:left;'><span>275</span></td>
                            <td style='text-align:left;'><span>23,154</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Oryza sativa</span></em></td>
                            <td style='text-align:left;'><span>8</span></td>
                            <td style='text-align:left;'><span>75</span></td>
                            <td style='text-align:left;'><span>12,178</span></td>
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
                            <td style='text-align:left;'><span>82</span></td>
                            <td style='text-align:left;'><span>13,196</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Fragaria vesca</span></em></td>
                            <td style='text-align:left;'><span>1</span></td>
                            <td style='text-align:left;'><span>9</span></td>
                            <td style='text-align:left;'><span>5,779</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Populus</span></em></td>
                            <td style='text-align:left;'><span>4</span></td>
                            <td style='text-align:left;'><span>33</span></td>
                            <td style='text-align:left;'><span>9,904</span></td>
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
                        <tr>
                            <td style='text-align:left;'><em><span>Brassica rapa</span></em></td>
                            <td style='text-align:left;'><span>2</span></td>
                            <td style='text-align:left;'><span>11</span></td>
                            <td style='text-align:left;'><span>11,004</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Manihot esculenta</span></em></td>
                            <td style='text-align:left;'><span>1</span></td>
                            <td style='text-align:left;'><span>15</span></td>
                            <td style='text-align:left;'><span>5,419</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Medicago truncatula</span></em></td>
                            <td style='text-align:left;'><span>1</span></td>
                            <td style='text-align:left;'><span>18</span></td>
                            <td style='text-align:left;'><span>2,643</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Nepeta tenuifolia</span></em></td>
                            <td style='text-align:left;'><span>1</span></td>
                            <td style='text-align:left;'><span>7</span></td>
                            <td style='text-align:left;'><span>5,342</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Gossypium hirsutum</span></em></td>
                            <td style='text-align:left;'><span>1</span></td>
                            <td style='text-align:left;'><span>3</span></td>
                            <td style='text-align:left;'><span>3,716</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Glycine max</span></em></td>
                            <td style='text-align:left;'><span>1</span></td>
                            <td style='text-align:left;'><span>3</span></td>
                            <td style='text-align:left;'><span>93</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Phalaenopsis aphrodite</span></em></td>
                            <td style='text-align:left;'><span>1</span></td>
                            <td style='text-align:left;'><span>8</span></td>
                            <td style='text-align:left;'><span>9,543</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>

            <h4  class="rel-h4 el-icon-check">&nbsp;&nbsp; New page</h4>
            <ul>
                
                <li>
                    <p><span>We developed a new webpage which function is to search for marker genes and display their
                            expression patterns in spatial locations. Click </span><a
                            href='http://ibi.zju.edu.cn/plantscrnadb/spatial.php'><span>here</span></a><span> to jump to
                            the page.</span></p>
                </li>

            </ul>
            <h4  class="rel-h4 el-icon-check">&nbsp;&nbsp;Genome version</h4>
            <ul>
                <li>
                    <p><em><span>Arabidopsis thaliana</span></em><span>, TAIR11 reference genome downloaded from TAIR
                            (</span><a href='https://www.arabidopsis.org/' target='_blank'
                            class='url'>https://www.arabidopsis.org/</a><span>);</span></p>
                </li>
                <li>
                    <p><em><span>Oryza sativa,</span></em><span> Nipponbare (IRGSP-1.0) and 93-11 (ASM465v1) reference
                            genomes from Ensemble Plant database;</span></p>
                </li>
                <li>
                    <p><em><span>Zea mays</span></em><span>, B73 V4 reference genome from MaizeDB database (</span><a
                            href='https://maizegdb.org/' target='_blank'
                            class='url'>https://maizegdb.org/</a><span>);</span></p>
                </li>
                <li>
                    <p><em><span>Solanum lycopersicum,</span></em><span> ITAG4 reference genome from Sol Genomics
                            Network (</span><a href='https://solgenomics.net/organism/solanum_lycopersicum/genome'
                            target='_blank'
                            class='url'>https://solgenomics.net/organism/solanum_lycopersicum/genome</a><span>);</span>
                    </p>
                </li>
                <li>
                    <p><em><span>Fragaria vesca,</span></em><span> Fragaria vesca v4.01 reference genome from Genome
                            Database for Rosaceae (</span><a
                            href='https://www.rosaceae.org/species/fragaria_vesca/genome_v4.0.a1' target='_blank'
                            class='url'>https://www.rosaceae.org/species/fragaria_vesca/genome_v4.0.a1</a><span>);</span>
                    </p>
                </li>
                <li>
                    <p><em><span>Populus,</span></em><span> P.trichocarpa_v4.1 reference genome from NCBI;</span></p>
                </li>
                <li>
                    <p><em><span>Nicotiana attenuata,</span></em><span> NIATTr2 reference genome from NCBI;</span></p>
                </li>
                <li>
                    <p><em><span>Lemna minuta,</span></em><span> Reference genome from CoGe (</span><a
                            href='https://genomevolution.org/' target='_blank'
                            class='url'>https://genomevolution.org/</a><span>);</span></p>
                </li>
                <li>
                    <p><em><span>Gossypium hirsutum,</span></em><span> TM‐1 reference genome from CottonGen Database
                            (</span><a href='http://www.cottongen.org' target='_blank'
                            class='url'>http://www.cottongen.org</a><span>);</span></p>
                </li>
                <li>
                    <p><em><span>Brassica rapa,</span></em><span> Chinese cabbage A03 v1 reference genome from CCEMD
                            (</span><a href='http://www.bioinformaticslab.cn/EMSmutation/home' target='_blank'
                            class='url'>www.bioinformaticslab.cn/EMSmutation/home</a><span>);</span></p>
                </li>
                <li>
                    <p><em><span>Medicago truncatula,</span></em><span> MtrunA17r5.0 with annotation r1.7 reference
                            genome from NCBI;</span></p>
                </li>
                <li>
                    <p><em><span>Manihot esculenta,</span></em><span> Manihot esculenta reference genome from
                            NCBI;</span></p>
                </li>
                <li>
                    <p><em><span>Phalaenopsis aphrodite,</span></em><span> Phalaenopsis aphrodite reference genome from
                            Phalaenopsis aphrodite Genome Resources(</span><a
                            href='https://orchidstra2.abrc.sinica.edu.tw/orchidstra2/pagenome/padownload.php'
                            target='_blank'
                            class='url'>https://orchidstra2.abrc.sinica.edu.tw/orchidstra2/pagenome/padownload.php</a><span>);</span>
                    </p>
                </li>
                <li>
                    <p><em><span>Glycine max,</span></em><span> Glycine_max_v2.1 reference genome from NCBI;</span></p>
                </li>
                <li>
                    <p><em><span>Nepeta tenuifolia,</span></em><span> Nepeta tenuifolia reference genome from
                            NCBI.</span></p>
                </li>
            </ul>
            <h4  class="rel-h4 el-icon-check">&nbsp;&nbsp;Not selected data</h4>

            <figure style="width: calc(100% - 20px);"><table>
                        <thead>
                            <tr>
                                <th style='text-align:left;'><strong><span>Accession</span></strong></th>
                                <th style='text-align:left;'><strong><span>Species</span></strong></th>
                                <th style='text-align:left;'><strong><span>Title</span></strong></th>
                                <th style='text-align:left;'><strong><span>Reasons</span></strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style='text-align:left;'><span>PRJCA012129</span></td>
                                <td style='text-align:left;'><em><span>Bombax ceiba</span></em></td>
                                <td style='text-align:left;'><span>Single-cell RNA landscape of the special fiber
                                        initiation process in Bombax ceiba</span></td>
                                <td style='text-align:left;'><span>No available high-quality B. ceiba reference genome
                                        for cellranger mkref.</span></td>
                            </tr>
                            <tr>
                                <td style='text-align:left;'><span>CRR602489</span></td>
                                <td style='text-align:left;'><em><span>Triticum aestivum</span></em></td>
                                <td style='text-align:left;'><span>Asymmetric gene expression and cell-type-specific
                                        regulatory networks in the root of bread wheat revealed by single- cell
                                        multiomics analysis</span></td>
                                <td style='text-align:left;'><span>No available high-quality T. aestivum reference
                                        genome for cellranger mkref.</span></td>
                            </tr>
                            <tr>
                                <td style='text-align:left;'><span>GSE208433</span></td>
                                <td style='text-align:left;'><em><span>Oryza sativa</span></em></td>
                                <td style='text-align:left;'><span>Single-nucleus sequencing deciphers developmental
                                        trajectories in rice pistils</span></td>
                                <td style='text-align:left;'><span>The number of genes and gene expression level are too
                                        low to meet the quality control standards.</span></td>
                            </tr>
                            <tr>
                                <td style='text-align:left;'><span>PRJNA847210</span></td>
                                <td style='text-align:left;'><em><span>Gossypium hirsutum</span></em></td>
                                <td style='text-align:left;'><span>Cell-specific clock-controlled gene expressionprogram
                                        regulates rhythmic fiber cell growth in cotton</span></td>
                                <td style='text-align:left;'><span>The number of genes and gene expression level are too
                                        low to meet the quality control standards.</span></td>
                            </tr>
                            <tr>
                                <td style='text-align:left;'><span>GSE212230</span></td>
                                <td style='text-align:left;'><em><span>Arabidopsis thaliana</span></em></td>
                                <td style='text-align:left;'><span>Brassinosteroid gene regulatory networks at cellular
                                        resolution in the Arabidopsis root</span></td>
                                <td style='text-align:left;'><span>The number of genes and gene expression level are too
                                        low to meet the quality control standards.</span></td>
                            </tr>
                        </tbody>
                    </table>
                </figure>

            <h4  class="rel-h4 el-icon-check">&nbsp;&nbsp;Spatial transcriptomics data analysis workflow</h4>
            <ul>
                
                <li>
                    <p><span>We downloaded the expression data, spatial coordinates, and annotation information from the
                            download link which was provided in the article. The expression data had been segmented at
                            the bin or single-cell level. We visualized the expression data in situ and annotated the
                            data with cell types. After annotation, we used the previously established workflow to
                            identify new marker genes for cell type annotation.</span></p>
                </li>
                <p style="display: flex;flex-direction: row;justify-content: flex-end;">
                    <span>(by Nianmin Shang, Yaqian Lu, Hongyu Chen, Qinjie Chu, Longjiang Fan)</span></p>
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
ul > p{
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