<?php
ini_set("memory_limit", "1024M");

include './connect.php';
$postData = file_get_contents('php://input');

// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);

 
$species=$requestData['species'];
$currentPage=$requestData['currentPage'];
$pageSize=$requestData['pageSize'];
$Celltypes=$requestData['Celltypes'];
$Unique=$requestData['Unique genes'];
$High=$requestData['High confidence genes'];
$Enzymolysis=$requestData['Enzymolysis genes'];
$Single=$requestData['Single cell genes'];
$Spatial=$requestData['Spatial genes'];
$Marker=$requestData['Marker genes'];


$begin = ($currentPage-1)*$pageSize;
$offset = $currentPage * $pageSize;

try {
    //$celltype_all=$celltype . '%';
    $sql = "FROM Sheet1 WHERE Species = '$species'";
    if($Celltypes!='') $sql = $sql . " AND Celltypes = '$Celltypes'";
    if($High!='') $sql = $sql . " AND `High confidence genes` = '$High'";
    if($Enzymolysis!='') $sql = $sql . " AND `Enzymolysis genes` = '$Enzymolysis'";
    if($Single!='') $sql = $sql . " AND `Single cell genes` = '$Single'";
    if($Spatial!='') $sql = $sql . " AND `Spatial genes` = '$Spatial'";
    if($Marker!='') $sql = $sql . " AND `Marker genes` = '$Marker'";
    if($Unique!='') $sql = $sql . " AND `Unique genes` = '$Unique'";

    $sql_count = "SELECT COUNT(*) AS count " . $sql;
    $stmt = $pdo->prepare($sql_count);
    $stmt->execute();
    $count = $stmt->fetchALL(PDO::FETCH_ASSOC);

    $sql = "SELECT * " . $sql;
    $sql = $sql . " ORDER BY `High confidence genes` DESC LIMIT {$begin},{$offset}";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();   
    $row = $stmt->fetchALL(PDO::FETCH_ASSOC);

    
} catch(PDOException $e) {

};
$re = new stdClass();
$re->data = $row;
$re->num = $count[0]['count'];
    
echo json_encode($re);
?>