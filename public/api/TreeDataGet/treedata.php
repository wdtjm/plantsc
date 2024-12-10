<?php

include '../connect.php';
$postData = file_get_contents('php://input');

// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);

$name = $requestData['name'];


$treeData = file_get_contents('../../data/tree.json');
$plantsData = file_get_contents('../../data/plants.json');
// 解码JSON数据
$treeArray = json_decode($treeData,true); // 如果第二个参数为true，则将返回关联数组，否则返回对象
$plantsData = json_decode($plantsData,true);
function calculateNum($species,$celltype,$conn,$tissue){
    try {
        /* echo 'species:'. $species . 'celltype:' . $celltype; */
        
        // 使用预处理语句执行查询
        //SELECT  COUNT(DISTINCT 去重的字段) from 表名称 WHERE IsDeleted=0;
        $sql = "SELECT COUNT(DISTINCT `Marker genes`) AS count FROM Sheet1 WHERE Species = '$species' AND Celltypes = '$celltype' AND Tissues = '$tissue'";
        $stmt = $conn->prepare($sql);

        $stmt->execute();
    
        // 获取统计数量
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        /* echo json_encode($row); */
        return $row['count'];
    } catch(PDOException $e) {
        return 0;
    }
    
    
}

function calculateGeneNum($species,$celltype,$conn,$tissue,$genetype){
    try {
        /* echo 'species:'. $species . 'celltype:' . $celltype; */
        $celltype_all=$celltype . '%';
        // 使用预处理语句执行查询
        //SELECT  COUNT(DISTINCT 去重的字段) from 表名称 WHERE IsDeleted=0;
        $sql = "SELECT COUNT(DISTINCT `Marker genes`) AS count FROM Sheet1 WHERE Species = '$species' AND Celltypes LIKE '$celltype_all' AND Tissues = '$tissue' AND `" . $genetype . "` = 'Yes'";
        $stmt = $conn->prepare($sql);

        $stmt->execute();
    
        // 获取统计数量
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        /* echo json_encode($row); */
        return $row['count'];
    } catch(PDOException $e) {
        return 0;
    }
    
    
}

function tree_travel(&$tree,$name,$conn,$tissue){
    $tree['total']=calculateNum($name,$tree['lable'],$conn,$tissue);
    $tree['num']=$tree['total'];
    $tree['heigh']=calculateGeneNum($name,$tree['lable'],$conn,$tissue,"High confidence genes");
    $tree['unique']=calculateGeneNum($name,$tree['lable'],$conn,$tissue,"Unique genes");
    if (array_key_exists("children", $tree)){
        for ($i = 0; $i < count($tree['children']); $i++) {
            tree_travel($tree['children'][$i],$name,$conn,$tissue);
        }
    
    }
    
}

function tree_travel_reverse(&$tree){
    if(array_key_exists("children", $tree)){
        for ($i = 0; $i < count($tree['children']); $i++) {
            tree_travel_reverse($tree['children'][$i]);
        }
    }
    if(array_key_exists("children", $tree)){
        for ($i = 0; $i < count($tree['children']); $i++) {
            $tree['total']+=$tree['children'][$i]['total'];
            $tree['unique']+=$tree['children'][$i]['unique'];
            $tree['heigh']+=$tree['children'][$i]['heigh'];
        }
    }
}

function tree_travel_calculate_not_null_node(&$tree){
    if($tree==null)
    {
        return 0;
    }
    if($tree['total']==0){
        $tree['disabled']='true';
        return 0;
    }else{
        $num = 1;
        if(array_key_exists("children", $tree)){
            for ($i = 0; $i < count($tree['children']); $i++) {
                $num+=tree_travel_calculate_not_null_node($tree['children'][$i]);
            }
        }
        return $num;
    }
}

/* for($j = 0; $j < count($plantsData); $j++){
    $name=$plantsData[$j]['name'];
    for ($i = 0; $i < count($treeArray); $i++) {

    tree_travel($treeArray[$i],$name,$pdo,$treeArray[$i]['lable']);
    tree_travel_reverse($treeArray[$i]);
    $treeArray[$i]['nodeNum']=tree_travel_calculate_not_null_node($treeArray[$i]);
    }

    // 打印解码后的数据

    file_put_contents('../../data/tree/' . $name . '.json', json_encode($treeArray));
    echo 'complete ' . $j  . ' / ' . count($plantsData) . ' : ' . $name;
}
 */
for ($i = 0; $i < count($treeArray); $i++) {    
    tree_travel($treeArray[$i],$name,$pdo,$treeArray[$i]['lable']);
    tree_travel_reverse($treeArray[$i]);
    $treeArray[$i]['nodeNum']=tree_travel_calculate_not_null_node($treeArray[$i]);
    }

    // 打印解码后的数据

    file_put_contents('../../data/tree/' . $name . '.json', json_encode($treeArray));
    echo $name . ' success';
?>
