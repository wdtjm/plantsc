<?php
include './connect.php';
$postData = file_get_contents('php://input');

// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);

 
$marker=$requestData['marker'];
$species=$requestData['species'];


function getdata($marker,$pdo){
    try {
        //$celltype_all=$celltype . '%';
        		
        $sql = "SELECT Source,`Enzymolysis genes`,`Single cell genes`,`Spatial genes` FROM Sheet1 WHERE `Marker genes` = '$marker'";
        $stmt = $pdo->prepare($sql);

        $stmt->execute();
    
        
        $row = $stmt->fetchALL(PDO::FETCH_ASSOC);
           return $row; 
       
    } catch(PDOException $e) {
        return null;
    }
}
function countNumSingle($sourceName,$species,$marker){
    $j = 0;
    
    while(is_file("../data/sources/" . $species."/" .$sourceName ."_celltype" . ($j+1).".txt" )){
        $j += 1;
    }
    return $j;
}

function countNumSpatial($sourceName,$species,$marker){
    $j = 0;
    
    while(is_file("../data/sources/" . $species."/" ."kongzhuan" . "/" .$sourceName ."_celltype" . ($j+1).".txt" )){
        $j += 1;
    }
    return $j;
}

$result = [];
$result['single']=[];
$result['spatial']=[];
$rows = getdata($marker,$pdo);
$i = 0;
for(;$i < count($rows);$i+=1){
    
    if($rows[$i]['Single cell genes']=="Yes")
    {
        $rows[$i]['num'] = countNumSingle($rows[$i]['Source'],$species,$marker);
        array_push($result['single'],$rows[$i]);
    }else{
        if($rows[$i]['Spatial genes']=="Yes")
        {
            $rows[$i]['num'] = countNumSpatial($rows[$i]['Source'],$species,$marker);
            array_push($result['spatial'],$rows[$i]);
        }
    }
}



echo json_encode($result);
?>