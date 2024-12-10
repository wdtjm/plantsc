<?php
/* ini_set("memory_limit", "5152M"); */
// 读取 txt 文件内容

include './connect.php';

$postData = file_get_contents('php://input');
// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);
$marker=$requestData['marker'];
$species=$requestData['species'];
$article=$requestData['article'];
$num=$requestData['num'];
$type=$requestData['type'];

if($type=='single'){
    $lines = file('../data/sources/'.$species.'/'.$article.'_celltype'.$num.'.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $cell_type = file('../data/sources/'.$species.'/'.$article.'_ct'.$num.'_cellanno.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $sql = "SELECT * FROM test WHERE marker = '$marker'";
}else{
    $lines = file('../data/sources/'.$species.'/kongzhuan'."/".$article.'_celltype'.$num.'.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $cell_type = file('../data/sources/'.$species.'/kongzhuan'."/".$article.'_ct'.$num.'_cellanno.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $sql = "SELECT * FROM CNP0002618_celltype1 WHERE marker = '$marker'";
}


// 获取属性名称行并按空格分割得到属性名称数组
$lines = str_replace("\"","",$lines);
$arr = array_shift($lines);
$attributeNames = explode("\t", $arr);

// 初始化一个空数组来存放每行的数据对象
$jsonArray = [];


$types=[];

foreach($cell_type as $singleCelltype){
   $type = explode("\t",$singleCelltype);
    $types[$type[0]]=$type[1];
    
}


$stmt = $pdo->prepare($sql);

$stmt->execute();


$row = $stmt->fetchALL(PDO::FETCH_ASSOC);


$arrayExp = array();

$a = explode(";",$row[0]['exp']); //1:id1,id2
foreach ($a as $akey) {
    if ($akey != "") {
        $b = explode(":", $akey);
        $c = explode(",", $b[1]);
        foreach ($c as $bkey) {
            $arrayExp[$bkey] = $b[0];
        } 
    }
}

// 遍历除了第一行以外的每一行数据
$i=1;
foreach ($lines as $line) {
    $values = explode("\t", $line);
    $jsonObject = [];

    // 对每一行的数据按照属性名称进行组合
    foreach ($attributeNames as $index => $attributeName) {
        if($index == "Cell"){
            $jsonObject[$attributeName] = $values[$index];
        }else{
            $jsonObject[$attributeName] = $values[$index];
        }
        
    }
    $jsonObject["Celltype"]= $types[$jsonObject["Cell"]];
    $exp=$arrayExp[$i];
    $jsonObject["exp"]= $exp==null?0:$exp;

    $i +=1;
    // 将当前行的数据对象添加到 jsonArray 中
    $jsonArray[] = $jsonObject;

}

// 将 jsonArray 转换为 JSON 字符串并输出
$jsonData = json_encode($jsonArray, JSON_PRETTY_PRINT);
echo $jsonData;//print
?>