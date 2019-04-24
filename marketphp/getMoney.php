<?php
	$memId = $_GET["memId"];
	require_once("connectPirates.php");

	try {

        $getMoneySql = "select memMoney from member where memId=:memId";
        $getMoney=$pdo->prepare($getMoneySql);
        $getMoney->bindValue(":memId", $memId);
        $getMoney->execute();
		$getMoneyRow = $getMoney->fetch(PDO::FETCH_ASSOC);
		
		echo $getMoneyRow["memMoney"];
        
    } catch (PDOException $e) {
        echo $e->getMessage();
        echo "error";
    }
?>