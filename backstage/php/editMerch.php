<?php

$doType = $_GET["doType"];
$merchId = $_GET["merchId"];
$merchName = $_GET["merchName"];
$merchPart = $_GET["merchPart"];
$cusYN = $_GET["cusYN"];
$merchImg = $_GET["merchImg"];
$merchPrice = $_GET["merchPrice"];
$saleYN = $_GET["saleYN"];

try {
    if ($doType=='insert') {
        require_once("connectPirates.php");
        $sqlIns = "INSERT INTO customlist (modelName,modelPart,modelImg,forCust,price,modelStatus) VALUES (:merchName,:merchPart,:merchImg,:cusYN,:merchPrice,:saleYN);";
        $merchIns = $pdo->prepare($sqlIns);
        $merchIns->bindValue(":merchName", $merchName);
        $merchIns->bindValue(":merchPart", $merchPart);
        $merchIns->bindValue(":merchImg", $merchImg);
        $merchIns->bindValue(":cusYN", $cusYN);
        $merchIns->bindValue(":merchPrice", $merchPrice);
        $merchIns->bindValue(":saleYN", $saleYN);
		$merchIns->execute();
		
	}elseif ($doType=='delete') {
		require_once("connectPirates.php");
        $sqlDel = "DELETE FROM customlist WHERE modelName=:merchName";
        $merchDel = $pdo->prepare($sqlDel);
        $merchDel->bindValue(":merchName", $merchName);
		$merchDel->execute();
		
	}elseif ($doType=='update') {
		require_once("connectPirates.php");
        $sqlUpd = "UPDATE customlist SET modelName=:merchName, modelPart=:merchPart, modelImg=:merchImg, forCust=:cusYN, price=:merchPrice, modelStatus=:saleYN WHERE modelId=:merchId;";
        $merchUpd = $pdo->prepare($sqlUpd);
        $merchUpd->bindValue(":merchName", $merchName);
        $merchUpd->bindValue(":merchPart", $merchPart);
        $merchUpd->bindValue(":merchImg", $merchImg);
        $merchUpd->bindValue(":cusYN", $cusYN);
        $merchUpd->bindValue(":merchPrice", $merchPrice);
		$merchUpd->bindValue(":saleYN", $saleYN);
		$merchUpd->bindValue(":merchId", $merchId);
        $merchUpd->execute();
	}
	

} catch (PDOException $e) {
    echo $e->getMessage();
    echo "error";
}
?>