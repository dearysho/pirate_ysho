<?php

$buyCount = $_GET["buyCount"];
$memId = $_GET["memId"];
$tradeTime = $_GET["tradeTime"];
$wearing = $_GET["wearing"];

$wearHead = $_GET["wearHead"];
$wearBody = $_GET["wearBody"];
$wearSail = $_GET["wearSail"];

if($buyCount == 0){

    $ModelId = $_GET["ModelId"];
    $tradePrice = $_GET["tradePrice"];

    try {

        require_once("connectPirates.php");
        $sqlBuy = "INSERT INTO mycustom (memId,ModelId,tradeTime,wearing) VALUES ('$memId',$ModelId,'$tradeTime',$wearing);";
        $pdo->exec($sqlBuy);

        $sqlCost = "UPDATE member SET memMoney=memMoney-$tradePrice  WHERE memId='$memId'";
        $pdo->exec($sqlCost);

        if($wearing == 1) {
            $sqlWearDisable = "UPDATE mycustom SET wearing=0  WHERE memId='$memId'";
            $pdo->exec($sqlWearDisable);

            $sqlWearInable = "UPDATE mycustom SET wearing=1  WHERE (memId='$memId' and ModelId=$wearHead);
                UPDATE mycustom SET wearing=1 WHERE (memId='$memId' and  ModelId=$wearBody);
                UPDATE mycustom SET wearing=1  WHERE (memId='$memId' and  ModelId=$wearSail)";
            $pdo->exec($sqlWearInable);
        }
        
    } catch (PDOException $e) {
        echo $e->getMessage();
        echo "error";
    }

}elseif ($buyCount > 0) {
    $ModelId[0] = $_GET["ModelIdFirst"];
    $tradePriceFirst = $_GET["tradePriceFirst"];
    $ModelId[1] = $_GET["ModelIdSec"];
    $tradePriceSec = $_GET["tradePriceSec"];
    $ModelId[2] = $_GET["ModelIdThird"];
    $tradePriceThird = $_GET["tradePriceThird"];
    $tradePrice = $tradePriceFirst+$tradePriceSec+$ModelIdThird;
    
    try {

        require_once("connectPirates.php");

        for($i=0;$i<$buyCount;$i++){
            $ModelIds = $ModelId[$i];
            $sqlBuy = "INSERT INTO mycustom (memId,ModelId,tradeTime,wearing) VALUES ('$memId',$ModelIds,'$tradeTime',$wearing);";
            $pdo->exec($sqlBuy);
        }

        $sqlCost = "UPDATE member SET memMoney=memMoney-$tradePrice  WHERE memId='$memId'";
        $pdo->exec($sqlCost);

        if($wearing == 1) {
            $sqlWearDisable = "UPDATE mycustom SET wearing=0  WHERE memId='$memId'";
            $pdo->exec($sqlWearDisable);

            $sqlWearInable = "UPDATE mycustom SET wearing=1  WHERE (memId='$memId' and ModelId=$wearHead);
                UPDATE mycustom SET wearing=1 WHERE (memId='$memId' and  ModelId=$wearBody);
                UPDATE mycustom SET wearing=1  WHERE (memId='$memId' and  ModelId=$wearSail)";
            $pdo->exec($sqlWearInable);
        }
        
    } catch (PDOException $e) {
        echo $e->getMessage();
        echo "error";
    }

}
?>