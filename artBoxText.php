<?php
  try{
    require_once("connectPirate.php");
    $sql = "select * from select * from articlelist join member on(articlelist.memId = member.memId) where artId = :artId";
    
    $artBoxText = $pdo->prepare( $sql );
    $artBoxText->bindValue(":artId", $_REQUEST["artId"]);
    // $artBoxText->bindValue(":artId", 14);
    $artBoxText->execute();
    $artBoxTextRow = $artBoxText ->fetch(PDO::FETCH_ASSOC);
    echo json_encode($artBoxTextRow);
    // while($artBoxTextRow = $artBoxText ->fetch(PDO::FETCH_ASSOC)){
    //     echo json_encode($artBoxTextRow);
    // }
  } catch(PDOException $e){
      echo $e->getMessage();
    };
?>