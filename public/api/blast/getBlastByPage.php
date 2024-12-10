<?php

include '../connect.php';
$postData = file_get_contents('php://input');

// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);
//var_dump($requestData);
$currentPage = $requestData['currentPage'];
$pageSize=$requestData['pageSize'];
// 如果species为空，则赋值为空字符串
if(!isset($requestData['species'])){
    $species='';
}else{
    $species=$requestData['species'];
}
// 如果gene为空，则赋值为空字符串
if(!isset($requestData['gene'])){
    $gene='';
}else{
$gene=$requestData['gene'];
}
$result_array = [];
$result=[];
//echo 'species:'. $species;
function getBlast($currentPage, $pageSize, $species, $gene, $pdo){
    try {
        $gene_all='%' . $gene . '%';
        $offset = ($currentPage - 1) * $pageSize;
        if($species==''){
            $sql = "SELECT * FROM blast WHERE speciesgene LIKE '$gene_all' LIMIT $offset,$pageSize";
         }else{
        $sql = "SELECT * FROM blast WHERE speciesname = '$species' AND speciesgene LIKE '$gene_all' LIMIT $offset,$pageSize";
        }
        //echo $sql;
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $row = $stmt->fetchALL(PDO::FETCH_ASSOC);
        $result['data']= $row;

        // 获取总数
        if($species==''){
            $sql_count = "SELECT COUNT(*) as total FROM blast WHERE speciesgene LIKE '$gene_all'";}
            else{
        $sql_count = "SELECT COUNT(*) as total FROM blast WHERE speciesname = '$species' AND speciesgene LIKE '$gene_all'";}
        $stmt_count = $pdo->prepare($sql_count);
        $stmt_count->execute();
        $row_count = $stmt_count->fetch(PDO::FETCH_ASSOC);
        $result['total'] = $row_count['total'];

        // 获取species
        $sql_species = "SELECT DISTINCT speciesname FROM blast";
        $stmt_species = $pdo->prepare($sql_species);
        $stmt_species->execute();
        $row_species = $stmt_species->fetchALL(PDO::FETCH_ASSOC);
        $result['species'] = $row_species;


        return $result;

    } catch(PDOException $e) {
        return null;
    }
}


echo json_encode(getBlast($currentPage, $pageSize, $species, $gene, $pdo));
?>