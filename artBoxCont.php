<?php
  try{
    require_once("connectPirate.php");
    $sqlArtBox = "select * from member where memId in (select memId from artrespond where artId=:artId)";
    $artBox = $pdo->prepare( $sqlArtBox );
    // $artBox->bindValue(":artId", $_REQUEST["artId"]);
    $artBox->bindValue(":artId", 14);
    $artBox->execute();
    $artBoxRow = $artBox ->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($artBoxRow);
    // while($artBoxRow = $artBox ->fetch(PDO::FETCH_ASSOC)){
    //     echo json_encode($artBoxRow);
    // }
  } catch(PDOException $e){
      echo $e->getMessage();
    };
?>