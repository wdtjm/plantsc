drop table if exists marker_gene_info;
CREATE TABLE `marker_gene_info` (
  `gene_id` VARCHAR(100) NOT NULL,
  `gene_information` text(300),
  `alsies` text(300)
)ENGINE = INNODB DEFAULT CHARSET = utf8 ;
LOAD DATA INFILE '/var/lib/mysql-files/marker_gene_info/Arabidopsi_thaliana.txt' INTO TABLE marker_gene_info FIELDS TERMINATED BY '\t' LINES TERMINATED BY '\n';