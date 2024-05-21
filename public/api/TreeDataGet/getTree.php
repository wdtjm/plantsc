<?php

include '../connect.php';
$postData = file_get_contents('php://input');

// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);

$name = $requestData['name']; 
$treeData = file_get_contents('../../data/tree/' . $name . '.json');
$treeArray = json_decode($treeData,true);
echo json_encode($treeArray);
?>