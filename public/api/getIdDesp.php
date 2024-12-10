<?php

include './connect.php';
$postData = file_get_contents('php://input');

// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);

$celltype = $requestData['celltype']; 



try {
    $sql = "SELECT * FROM celltype_id_desp WHERE celltype = '$celltype'";
    $stmt = $pdo->prepare($sql);

    $stmt->execute();

    
    $row = $stmt->fetchALL(PDO::FETCH_ASSOC);
    
} catch(PDOException $e) {
    echo "no such celltype";
    return null;
}



echo json_encode($row);
?>