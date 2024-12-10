<?php
include './connect.php';
$postData = file_get_contents('php://input');

// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);

 
$species=$requestData['species'];


function getdata($species,$pdo){
    try {
        //$celltype_all=$celltype . '%';
        		
        $sql = "SELECT Celltypes as `name`, count(*) `value` FROM Sheet1 WHERE Species = '$species' GROUP BY Celltypes ORDER BY `value` desc";
        $stmt = $pdo->prepare($sql);

        $stmt->execute();
    
        
        $row = $stmt->fetchALL(PDO::FETCH_ASSOC);
           return $row; 
       
    } catch(PDOException $e) {
        return null;
    }
}

$rows = getdata($species,$pdo);

    
echo json_encode($rows);
?>