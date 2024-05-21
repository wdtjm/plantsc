<?php



try {
	$pdo = new PDO("mysql:host=172.17.0.4;port=3306;dbname=PlantscRNAdb", 'root', '123456');
    
} catch (PDOException $e) {
    echo "连接数据库失败: " . $e->getMessage();
}
?>
