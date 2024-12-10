<?php
ini_set("memory_limit", "1024M");

include './connect.php';
$postData = file_get_contents('php://input');

// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);

 
$species=$requestData['species'];


function getmarker($species,$pdo){
    try {
        //$celltype_all=$celltype . '%';
        $sql = "SELECT * FROM Sheet1 WHERE Species = '$species' LIMIT 0,20";
        $stmt = $pdo->prepare($sql);

        $stmt->execute();
    
        
        $row = $stmt->fetchALL(PDO::FETCH_ASSOC);
           return $row; 
       
    } catch(PDOException $e) {
        return null;
    }
}

$rows = getmarker($species,$pdo);

    
echo json_encode($rows);
?>