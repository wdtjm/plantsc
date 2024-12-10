<template>
    <div class="rel-total">
        <div class="rel-title">Release 1.0</div>
        <div class="rel-mod-date">Last modified at 2021-01-04</div>
        <h4  class="rel-h4 el-icon-check">&nbsp;&nbsp;Data collection</h4>
        <ul >
            <li>
                Including datasets from four species: Arabidopsis thaliana, Oryza sativa, Solanum lycopersicum and Zea mays.
            </li>
            <li>
                23 plant single cell RNA-seq dataset/papers were used. Detailed list could be found here.
            </li>
            <li>
                Eight datasets (GSE114615, GSE121619, GSE122687, GSE123013, GSE123818, GSE141730, PRJNA323955, PRJNA577177) in Arabidopsis thaliana, two datasets (GSM4363200, GSM4363201) in Oryza sativa, and one dataset (PRJNA637882) in Zea mays were also used to display the gene expressin of each cell which was show in the result page of searching marker genes (example) and in the page of JBrowse (example).
            </li>
            <li>
                Collected a total of 24,573 marker genes from four species (detailed information could be found in the following table).
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
                            <td style='text-align:left;'><span>11</span></td>
                            <td style='text-align:left;'><span>152</span></td>
                            <td style='text-align:left;'><span>14,506</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Oryza sativa</span></em></td>
                            <td style='text-align:left;'><span>5</span></td>
                            <td style='text-align:left;'><span>51</span></td>
                            <td style='text-align:left;'><span>5,441</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Solanum lycopersicum</span></em><span> *</span></td>
                            <td style='text-align:left;'><span>5</span></td>
                            <td style='text-align:left;'><span>29</span></td>
                            <td style='text-align:left;'><span>74</span></td>
                        </tr>
                        <tr>
                            <td style='text-align:left;'><em><span>Zea mays</span></em></td>
                            <td style='text-align:left;'><span>7</span></td>
                            <td style='text-align:left;'><span>41</span></td>
                            <td style='text-align:left;'><span>4,552</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>

        <p class="rel-para-left"><span>*</span><span> scRNA-seq data from </span><em><span>Solanum lycopersicum</span></em><span> were not
                avaliable for public, therefore the number of marker genes from tomato was much less than the other
                three species. We will update this data as soon as the public scRNA-seq data from
            </span><em><span>Solanum lycopersicum</span></em><span> is avaliable.</span></p>

        <h4  class="rel-h4 el-icon-check">&nbsp;&nbsp;Genome version</h4>
        <p class="rel-p"><span>Genome version for JBrowse are:</span></p>
        <ul>
            <li><em><span>Arabidopsis thaliana</span></em><span>, TAIR10 reference genome downloaded from TAIR
                    (</span><a href='https://www.arabidopsis.org/' target='_blank'
                    class='url'>https://www.arabidopsis.org/</a><span>);</span></li>
            <li><em><span>Zea mays</span></em><span>, B73 V4 reference genome from MaizeDB database (</span><a
                    href='https://maizegdb.org/' target='_blank'
                    class='url'>https://maizegdb.org/</a><span>);</span></li>
            <li><em><span>Oryza sativa,</span></em><span> Nipponbare (IRGSP-1.0) and 93-11 (ASM465v1) reference
                    genomes from Ensemble Plant database.</span></li>
        </ul>

        <h4  class="rel-h4 el-icon-check">&nbsp;&nbsp;Bioinformatics workflow</h4>
        <p class="rel-p"><span>In brief, Fastq-dump, CellRanger and Seurat were used to deal with the raw scRNA-seq data:</span></p>
        <ul>
                <li><span>Fastq-dump (v2.9.6) was used to convert the SRA data into the corresponding fastq files, and
                        followed by changing the obtained fastq file names to
                        XX</span><strong><span>S1_L001_I1_001.fastq.gz, XX</span></strong><span>S1_L001_R1_001.fastq.gz,
                        XX__S1_L001_R2_001.fastq.gz (XX means accession number).</span></li>
                <li><span>After obtaining fastq sequencing data, raw reads were demultiplexed and mapped to the
                        reference genome by 10X Genomics CellRanger (v4.0.0) pipeline using default parameters.</span>
                </li>
                <li><span>All downstream single-cell analyses were performed using Seurat (v3.0.0).</span></li>
                <blockquote>
                    <p class="rel-para-left"><span class="rel-para-left">In brief, the gene-cell matrices were load into the Seurat package, which was implemented
                            in R (v. 4.0.2). To remove low quality cells, we filtered the cells with unique gene counts
                            fewer than 200. The genes expressed in at least three single cells were kept. Seurat
                            SCTransform function was used to scale and normalize raw data. For principle component (PC)
                            analysis, the scaled data were reduced to 50 approximate PCs (set npcs = 50). Then Clusters
                            were identified using the Seurat function ‘FindClusters’ with ‘resolution =1.0’ . In the
                            case of multiple samples, Seurat was also then used to combine multiple datasets into a
                            single dataset using Canonical Correlation Analysis by IntegrateData function. To align cell
                            population clusters from the unsupervised scRNA-seq to known cell types, we assessed 1)
                            expression of known cell type-specific marker genes identified from PlantscRNAdb, 2)
                            Spearman’s and Pearson’s correlation analysis of expression profiles of cell populations
                            isolated from reporter gene lines, and 3) Index of Cell Identity (ICI) scores. Finally,
                            Seurat FindAllMarkers function was used to identify markers that were up-regulated in each
                            cluster versus all other cells (average FC ≥ 1 plus maximum adjusted P-value ≤ 0.05) , where
                            only the control group data was considered. at the same time, the marker gene must be only
                            expressed in less than 25% of the cells in the corresponding cluster.</span></p>
                </blockquote>
            </ul>
        <h4  class="rel-h4 el-icon-check">&nbsp;&nbsp;Reference</h4>
        <p class="rel-para-left rel-ref">A total of 23 datasets (10.1016/j.molp.2020.06.010 10.1101/2020.09.08.288498
                    10.1101/2020.10.02.324327 10.1101/2020.06.29.178863 10.1126/science.aay4970
                    10.1016/j.devcel.2019.02.022 10.1105/tpc.18.00785 10.1007/s00497-018-00355-4 10.1104/pp.18.01482
                    10.1016/j.celrep.2019.04.054 10.1016/j.celrep.2019.06.041 10.1016/j.molp.2019.04.004
                    10.1016/j.cell.2016.04.046 10.1186/s13059-015-0580-x 10.1101/2020.08.25.267476
                    10.1186/s13059-020-02094-0 10.1101/2020.09.20.305029 10.1101/2020.08.25.267427
                    10.1126/science.aav6428 10.1101/2020.01.30.926329 10.1101/2020.11.14.382812
                    10.1016/j.molp.2020.12.014 10.1093/plcell/koaa060) were used. Detailed list couls be found <a
                    href='http://ibi.zju.edu.cn/plantscrnadb/ref.php'><span>here</span></a><span>.</span>
        </p>

        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped src="../../css/typora.css"></style>

<style scoped>

.rel-total{
    margin-top: 70px;
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