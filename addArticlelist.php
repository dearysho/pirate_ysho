<!-- articleImg -->
<?php
$errMsg = "";
// switch($_FILES['articleImg']['error']){
// 	case 0:
// 			$dir = "image/bar/DB/";
// 			if( file_exists($dir) === false){
// 				mkdir( $dir ); //make directory
// 			}
// 			$from = $_FILES['articleImg']['tmp_name'];
// 			$to = $dir . $_FILES['articleImg']['name'];
// 			copy($from, $to);
// 			echo "上傳成功<br>";
// 			break;	
// 	case 1:
// 			echo "上傳檔案太大, 不得超過", ini_get("upload_max_filesize") ,"<br>";
// 			break;
// 	case 2:
// 			echo "上傳檔案太大, 不得超過", $_POST["MAX_FILE_SIZE"], "位元組<br>";
// 			break;
// 	case 3:
// 			echo "上傳檔案不完整<br>";
// 			break;
// 	case 4:
// 			echo "没選送檔案<br>";
// 			break;
// 	default:
// 			echo "請聯絡網站維護人員<br>";
// 			echo "error code : ", $_FILES['articleImg']['error'],"<br>";
// 		}





// echo "memName: " , $_POST['memName'], "<br>";

// echo "['error']: " , $_FILES['upFile']['error'] , "<br>";
// echo "['name']: " , $_FILES['upFile']['name'] , "<br>";
// echo "['tmp_name']: " , $_FILES['upFile']['tmp_name'] , "<br>";
// echo "['type']: " , $_FILES['upFile']['type'] , "<br>";
// echo "['size']: " , $_FILES['upFile']['size'] , "<br>";



try {
	require_once("connectPirate.php");
	$sql = "insert into `articlelist`(`artId`, `memId`, `artTitle`, `artTime`, `artText`, `msgAmt`, `clickAmt`, `artStatus`, `artImg`, `artCat`) values ([null],[:memId],[:artTitle],[null],[:artText],[null],[null],[null],[:artImg],[:artCat])";
	$products = $pdo->prepare( $sql );
	$products->bindValue(":memId", $_REQUEST["thisMemId"]);
	$products->bindValue(":artTitle", $_REQUEST["articleTit"]);
	$products->bindValue(":artText", $_REQUEST["articleCont"]);
	$products->bindValue(":artImg", $_FILES['articleImg']['name']);
	$products->bindValue("artCat", $_REQUEST["articleType"]);

	$products->execute();

} catch (PDOException $e) {
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
   
?> 
