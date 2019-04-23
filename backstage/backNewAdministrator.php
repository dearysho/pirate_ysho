<?php
    ob_start();
    session_start();
    if (isset($_SESSION['managerAcc']) == false) {
        header('location:backLogin.html');
    }
    
    $errMsg = "";
    try {
        require_once("connectPirates.php");
    } catch (PDOException $e) {
        $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
        $errMsg .= "行號 : ".$e -> getLine()."<br>";
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../css/backStage.css">
    <link rel="stylesheet" href="../css/wavebtn.css">
    <style>
       #myForm table{
            margin: auto;
            margin-bottom: 30px;
        }
        #myForm table tr td {
            /* padding: 5px 10px; */
            padding: 0 20px;
        }
        .cart{
            width: 130px;
            height: 45px;
            color: #fff;
            background-color: #8f716d;
            border: 2px solid transparent;
            border-radius: 10px;
            padding: 0px;
            font-family: Adobe Heiti Std R;
            text-align: center;
            text-decoration: none;
            font-size: 22px;
            cursor: pointer;
        }
        
    </style>
</head>
<body>
    <div class="backstage">
            <?php
            require_once("backMenu.php");
            ?>
            <div class="contentWrap">
                <div class="content">
                    <h3 class="titlePri">管理員帳號新增</h3>
                    <?php
                    if ($errMsg != "") {
                        exit("<div><center>$errMsg</center></div>");
                    }
                    ?>
                    <form id="myForm">
                    <table>
                        <tr>
                            <td>帳號</td>
                            <td><input type="text" name="managerAcc" size="15"></td>
                        </tr>
                        <tr>
                            <td>密碼</td>
                            <td><input type="password" id="managerPsw" name="managerPsw" size="15"></td>
                        </tr>
                        <tr>
                            <td>確認密碼</td>
                            <td><input type="password" id="checkPsw" size="15"></td>
                        </tr>
                    </table>
                    <input type="button" class="cart" id="submit" value="新增帳號">
                    <input type="button" class="cart" id="cancel" value="取消新增">
                </form>
            </div>
        </div>
    </div>
    <script src="../js/wavebtn.js"></script>
   
</body>
</html>