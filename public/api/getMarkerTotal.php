<?php
include './connect.php';
$postData = file_get_contents('php://input');

// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);

 
$species=$requestData['species'];

try {


    $sql_count = "SELECT 
    COUNT(DISTINCT(Tissues)) AS Tissues, 
    COUNT(DISTINCT(Celltypes)) AS Celltypes, 
    COUNT(DISTINCT(`Marker genes`)) AS Total, 
    COUNT(CASE WHEN `Unique genes` = 'Yes' THEN 1 ELSE NULL END) AS `Unique`, 
    COUNT(CASE WHEN `High confidence genes` = 'Yes' THEN 1 ELSE NULL END) AS High 
    FROM Sheet1 WHERE Species = '$species'";
    $stmt = $pdo->prepare($sql_count);
    $stmt->execute();
    $count = $stmt->fetchALL(PDO::FETCH_ASSOC);
} catch(PDOException $e) {

};
/* $re = new stdClass();
$re->data = $row;
$re->num = $count[0]; */
    
echo json_encode($count[0]);
?>