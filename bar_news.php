<?php
  try{
    require_once("connectPirate.php");
    $sqlNews = "select * from articlelist where cat=:cat order by artTime";
    // $member->bindValue(":cat", $_REQUEST["cat"]);
    $news ->bindValue(":cat", "1");
    $news = $pdo->prepare( $sqlNews );
    $news->execute();
    $newsRow = $news ->fetchAll(PDO::FETCH_ASSOC);
    // while($newsRow = $news ->fetch(PDO::FETCH_ASSOC)){
    //     echo json_encode($newsRow);
    // }
  } catch(PDOException $e){
      echo $e->getMessage();
    };
?>