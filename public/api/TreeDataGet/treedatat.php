<?php

include '../connect.php';

$jsonData = file_get_contents('../../data/tree.json');

// 解码JSON数据
$phpArray = json_decode($jsonData,true); // 如果第二个参数为true，则将返回关联数组，否则返回对象


function tree_travel(&$tree,$name){
    $tree['num']=rand(1,100);
    if (array_key_exists("children", $tree)){
        for ($i = 0; $i < count($tree['children']); $i++) {
            tree_travel($tree['children'][$i],$name);
        }
    
    }
    
}
for ($i = 0; $i < count($phpArray); $i++) {
    tree_travel($phpArray[$i],$name);
}


// 打印解码后的数据
echo json_encode($phpArray);

?>
