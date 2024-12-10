<?php

include './connect.php';
$postData = file_get_contents('php://input');

// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);

$name = $requestData['name']; 
$species = $requestData['species']; 



try {
    $sql = "SELECT * FROM `$species` WHERE gene_id = '$name'";
    $stmt = $pdo->prepare($sql);

    $stmt->execute();

    
    $row = $stmt->fetchALL(PDO::FETCH_ASSOC);
    echo json_encode($row[0]);
} catch(PDOException $e) {
    
    return null;
}

?>