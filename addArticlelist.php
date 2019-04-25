<!-- articleImg -->
<?php
$errMsg = "";
try {
	require_once("connectPirate.php");
	$sql = "insert into `articlelist`(`artId`, `memId`, `artTitle`, `artTime`, `artText`, `msgAmt`, `clickAmt`, `artStatus`, `artImg`, `artCat`) values ([null],[:memId],[:artTitle],[null],[:artText],[null],[null],[null],[:artImg],[:artCat])";
	$products = $pdo->prepare( $sql );
	$products->bindValue(":memId", $_REQUEST[":memId"]);
	$products->bindValue(":artTitle", $_REQUEST["articleTit"]);
	$products->bindValue(":artText", $_REQUEST["articleCont"]);
	$products->bindValue(":artImg", $_REQUEST["上傳的圖片"]);
	$products->bindValue("artCat", $_REQUEST["articleType"]);

	$products->execute();

} catch (PDOException $e) {
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
   
?> 
