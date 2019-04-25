<?php
 ob_start();
 session_start();
 $errMsg = "";

 try {
    require_once("php/connectPirates.php");
    $sql = "update member set accStatus = :accStatus where memId = :memId";
    $member = $pdo->prepare($sql);
    $member -> bindValue(':accStatus', $_REQUEST['accStatus']);
    $member -> bindValue(':memId',  $_REQUEST['memId']);
    $member ->execute();
    echo "<script>alert('成功修改會員狀態 ~');location.href='backMember.php';</script>";
} catch (PDOException $e) {
    $errMsg .=  "錯誤原因" . $e->getMessage() . "<br>";
    $errMsg .=  "錯誤行號" . $e->getLine() . "<br>";
    echo $errMsg;
}
 ?>
