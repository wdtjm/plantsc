<?php
include './connect.php';

$sql = "SELECT * FROM reference";
$stmt = $pdo->prepare($sql);

$stmt->execute();


$row = $stmt->fetchALL(PDO::FETCH_ASSOC);
echo json_encode($row);
?>