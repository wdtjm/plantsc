<?php

include '../connect.php';
$postData = file_get_contents('php://input');

function getBlastSpecies($pdo){
    try {
        // 获取species
        $sql_species = "SELECT DISTINCT speciesname FROM blast";
        $stmt_species = $pdo->prepare($sql_species);
        $stmt_species->execute();
        $row_species = $stmt_species->fetchALL(PDO::FETCH_ASSOC);
        $result['species'] = $row_species;


        return $result;

    } catch(PDOException $e) {
        return null;
    }
}


echo json_encode(getBlastSpecies( $pdo));
?>