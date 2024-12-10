<?php
/* ini_set("memory_limit", "5152M"); */
// 读取 txt 文件内容
$lines = file('../data/sources/Arabidopsis thaliana/PRJNA509920_celltype1.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$marker="AT2G04025";
// 获取属性名称行并按空格分割得到属性名称数组
$lines = str_replace("\"","",$lines);
$arr = array_shift($lines);
$attributeNames = explode("\t", $arr);

// 初始化一个空数组来存放每行的数据对象
$jsonArray = [];

/* $lines_ex = file('../data/sources/Arabidopsis thaliana/PRJNA509920_celltype1_ex.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

$cellArr = explode("\t",str_replace("\"","",array_shift($lines_ex)));
foreach($lines_ex as $line_ex){
    if(substr($line_ex,1,9)==$marker){
        echo "true";
    }
}
 */
// 遍历除了第一行以外的每一行数据
foreach ($lines as $line) {
    $values = explode("\t", $line);
    $jsonObject = [];

    // 对每一行的数据按照属性名称进行组合
    foreach ($attributeNames as $index => $attributeName) {
        if($index == "Cell"){
            $jsonObject[$attributeName] = str_replace("-",".",$values[$index]);
        }else{
            $jsonObject[$attributeName] = $values[$index];
        }
        
    }

    // 将当前行的数据对象添加到 jsonArray 中
    $jsonArray[] = $jsonObject;
}

// 将 jsonArray 转换为 JSON 字符串并输出
$jsonData = json_encode($jsonArray, JSON_PRETTY_PRINT);
echo $jsonData;
?>