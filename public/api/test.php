<?php


include './connect.php';
function getmarker($species,$tissue,$celltype,$pdo){
    try {
        $celltype_all=$celltype . '%';
        $sql = "SELECT * FROM Sheet1 WHERE Species = '$species' AND Celltypes LIKE '$celltype_all' AND Tissues = '$tissue'";
        $stmt = $pdo->prepare($sql);

        $stmt->execute();
    
        
        $row = $stmt->fetchALL(PDO::FETCH_ASSOC);
           return $row; 
       
    } catch(PDOException $e) {
        return null;
    }
}
$result = [];
$rows=getmarker('Oryza sativa','Calli','Dividing cell',$pdo);
if($rows!=[]){
    $result[]=$rows;
}
echo json_encode($result);
?>