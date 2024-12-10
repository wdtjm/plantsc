<?php
ini_set("memory_limit", "1024M");

include './connect.php';
$postData = file_get_contents('php://input');

// 解析 JSON 格式的数据
$requestData = json_decode($postData, true);

$filename = "456";
$sql = "SELECT Celltypes FROM Sheet1 Where Species = 'Oryza sativa'";
    
$stmt = $pdo->prepare($sql_count);
$stmt->execute();
$result = $stmt->fetchALL(PDO::FETCH_ASSOC);

ob_end_clean();
header('Content-type:application/vnd.ms-excel');
header('Content-Disposition:attachment;filename='.$filename.'.xls');
$THead = array('Celltypes');

echo '<table>';
echo '<tr>';
foreach ( $THead as $h )
{
    echo '<th>' . $h . '</th>';
}
echo '</tr>';

while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
{
    echo "<tr>".
        "<td> {$row['user_name']}</td> ".
        "</tr>";
}
echo '</table>';
?>
?>