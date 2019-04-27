<!-- artrespond -->
<!-- 文章留言編號	msgId
討論文章編號	artId
留言人會員帳號	memAcc
留言內容	msgText
留言時間	msgTime -->
<!-- msgId=:msgId
artId=:artId
memAcc=:memAcc
msgText=:msgText
msgText=:msgTime -->
<!-- msgId=null, artId=:artId, memAcc=:memAcc, msgText=:msgText, msgText=null -->
<?php
$errMsg = "";
try {
	require_once("connectPirate.php");
	$sql = "insert into `artrespond`(`msgId`, `artId`, `memId`, `msgText`, `msgTime`) VALUES ([null],[:artId],[:memAcc],[:msgText],[null])";
	$products = $pdo->prepare( $sql );
	$products->bindValue(":artId", $_REQUEST["artId"]);
	$products->bindValue(":memId", $_REQUEST["memId"]);
	$products->bindValue(":msgText", $_REQUEST["addArtRespondCont"]);
	
	$products->execute();

} catch (PDOException $e) {
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
   
?> 