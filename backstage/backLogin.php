<?php
ob_start();
session_start();
$errMsg = "";

try {
    require_once("php/connectPirate.php");
    $sql = "select * from manager where managerAcc = :managerAcc and managerPsw = :managerPsw";
    $manager = $pdo->prepare($sql);
    $manager->bindValue(":managerAcc", $_REQUEST["magId"]);
    $manager->bindValue(":managerPsw", $_REQUEST["magPsw"]);
    $manager->execute();
    if ($manager->rowCount() == 0) {
        $errMsg .= "<script> alert('帳號或密碼錯誤，請重新登入!!');location.href='backLogin.html'; </script>";
    } else {
        $managerRow = $manager -> fetch();
        $_SESSION["managerAcc"] = $managerRow["managerAcc"];
        header('backMember.php');

    }

} catch (PDOException $e) {
    $errMsg .=  "錯誤原因" . $e->getMessage() . "<br>";
    $errMsg .=  "錯誤行號" . $e->getLine() . "<br>";
    echo $errMsg;
}
?>


