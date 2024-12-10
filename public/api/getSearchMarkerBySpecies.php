<?php
include './connect.php';
$postData = file_get_contents('php://input');

// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);

 
$species=$requestData['species'];
$marker=$requestData['marker'];

try {


    $sql_count = "SELECT exists (SELECT * from Sheet1 
    where Species = '$species' AND `Marker genes` = '$marker') as result;";
    $stmt = $pdo->prepare($sql_count);
    $stmt->execute();
    $re = $stmt->fetchALL(PDO::FETCH_ASSOC);
} catch(PDOException $e) {

};
/* $re = new stdClass();
$re->data = $row;
$re->num = $count[0]; */
    
echo json_encode($re);
?>