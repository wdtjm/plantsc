<?php

include './connect.php';
$postData = file_get_contents('php://input');

// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);

$array = $requestData['array']; 
$species=$requestData['species'];

$result_array = [];

function getmarker($species,$tissue,$celltype,$pdo){
    try {
        //$celltype_all=$celltype . '%';
        $sql = "SELECT * FROM Sheet1 WHERE Species = '$species' AND Celltypes LIKE '$celltype' AND Tissues = '$tissue'";
        $stmt = $pdo->prepare($sql);

        $stmt->execute();
    
        
        $row = $stmt->fetchALL(PDO::FETCH_ASSOC);
           return $row; 
       
    } catch(PDOException $e) {
        return null;
    }
}

for ($i = 0; $i < count($array); $i++) {
        $rows = getmarker($species,$array[$i]['tissue'],$array[$i]['lable'],$pdo);
        if($rows!=[])
        {
            $result_array=array_merge($rows,$result_array);
        }   
        
    }

echo json_encode($result_array);
?>