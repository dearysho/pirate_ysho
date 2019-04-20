<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../css/backStage.css">
    <link rel="stylesheet" href="../css/backOfficialMerch.css">
    <link rel="stylesheet" href="../css/wavebtn.css">
    <script src="js/jquery-3.3.1.min.js"></script>
</head>

<body>
    <div class="backstage">
        <div class="menu">
            <div id="logo">
                <img src="../image/logo.svg" alt="">
            </div>
            <p>Hi~ 管理員 <span id="manager">景承</span>♥</p>
            <p>你好^___^</p>
            <ul class="menuUl">
                <li>
                    <a href="backAdministrator.html">管理員帳號管理</a>
                </li>
                <li>
                    <a href="backMember.html">會員帳號管理</a>
                </li>
                <li>
                    <a href="backOfficialMerch.html">官方商品管理</a>
                </li>
                <li>
                    <a href="backMerchRecord.html">造型記錄查詢</a>
                </li>
                <li>
                    <a href="backTreasure.html">寶物商品管理</a>
                </li>
                <li>
                    <a href="backTreasureRocard.html">寶物拍賣紀錄查詢</a>
                </li>
                <li>
                    <a href="backIQTest.html">測驗題目管理</a>
                </li>
                <li>
                    <a href="backBarArticle.html">討論區文章檢舉管理</a>
                </li>
                <li>
                    <a href="backBarCommend.html">討論區留言檢舉管理</a>
                </li>
                <a href="#" class="btnpri" id="logout">
                    <span>登出</span>
                </a>
            </ul>
        </div>
        <div class="contentWrap">
            <div class="content">
                <h3 class="titlePri">官方商品管理</h3>
                <div class="custToolBox">
                    <button id="addTrea" href="javascript:;">
                        <span>新增</span>
                        <span>+</span>
                    </button>
                </div>
                <div class="dataTable">
                    <table id="merchTable">

                        <form action="editTrea.php" method="GET">
                        <tr>
                            <th>寶物編號</th>
                            <th>寶物名稱</th>
                            <th>圖片</th>
                            <th>智力</th>
                            <th>力量</th>
                            <th>敏捷</th>
                            <th>幸運</th>
                            <th>上下架狀態</th>
                        </tr>
                        <?php
try {
        require_once("php/connectPirates.php");
        $sql = "select * from treasurelist;";
        $product=$pdo->query($sql);

        if ($product->rowCount() == 0) {
            echo "沒有商品!!!";
        } else {
            $prods = $product->fetchAll(PDO::FETCH_ASSOC);

            foreach ($prods as $i=>$prodRow) {
                ?>	
                <tbody>
                <tr>
                <td class="treaNo"><?php echo $prodRow["treaId"]; ?></td>
                <td class="treaName"><input type="text" name="treaName" value='<?php echo $prodRow["treaName"]; ?>' placeholder="請輸入造型名稱"></td>
                <td class="treaImg">
                    <img src="../<?php echo $prodRow["treaImg"]; ?>" class="imgPreview">
                    <input class="treaInputImg" type="file" value="../<?php echo $prodRow["treaImg"]; ?>">
                </td>
                <td class="treaInt"><input type="text" name="treaInt" value='<?php echo $prodRow["treaInt"]; ?>' placeholder="請輸入能力值"></td>
                <td class="treaStr"><input type="text" name="treaStr" value='<?php echo $prodRow["treaStr"]; ?>' placeholder="請輸入能力值"></td>
                <td class="treaAgi"><input type="text" name="treaAgi" value='<?php echo $prodRow["treaAgi"]; ?>' placeholder="請輸入能力值"></td>
                <td class="treaLuk"><input type="text" name="treaLuk" value='<?php echo $prodRow["treaLuk"]; ?>' placeholder="請輸入能力值"></td>
    
                <td class="saleYN">
                <select class="saleYN" name="saleYN">
                    <option value="1"
                        <?php
                            if ($prodRow["treaStatus"]==1) {
                                echo "selected";
                            }; ?> 
                    >上架中</option>
                    <option value="0"
                        <?php
                            if ($prodRow["treaStatus"]==0) {
                                echo "selected";
                            }; ?> 
                    >已下架</option>
                </select>
                </td>
                <td>
                <button class="updateList" style="display:none">修改</button>
                <button class="addToList removeIt">刪除</button>
                </td>
                <?php
                ?>
                </tr>
                </tbody>
                </form>
            <?php
            }
        }
    } catch (PDOException $e) {
        echo "error";
    }
?>


                    </table>
                </div>
                <div class="pagination">
                    <ul>
                        <li id="left"> <a href="#">
                                < </a> </li> <li> <a href="#">1</a></li>
                        <li> <a href="#">2</a></li>
                        <li> <a href="#">3</a></li>
                        <li> <a href="#">4</a></li>
                        <li> <a href="#">5</a></li>
                        <li class="right"> <a href="#"> > </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <script src="../js/wavebtn.js"></script>

    <script src="../backstage/js/backOfficialTrea.js"></script>
</body>

</html>