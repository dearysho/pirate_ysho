<?php
ob_start();
session_start();
$errMsg = "";

try {
    require_once("backstage/php/connectPirates.php");
    $sql = "select * from traderecord";
    $traderecord = $pdo->query($sql);


    $sql2 = "select * from articlelist";
    $articlelist = $pdo->query($sql2);
} catch (PDOException $e) {
    $errMsg .=  "錯誤原因" . $e->getMessage() . "<br>";
    $errMsg .=  "錯誤行號" . $e->getLine() . "<br>";
}

echo $errMsg;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>《大海賊帝國》去追尋吧！</title>
    <link rel="stylesheet" href="css/me.css">
</head>

<body>

    <!-- 選單 -->
    <header>
        <h1 id="headerLogo"><a href="index.html">
                <img src="image/logo.svg" alt="大海賊帝國">
            </a></h1>
        <nav id="headerMenu">
            <ul>
                <li><a href="game.html">海賊試煉場</a></li>
                <li><a href="market.html">海上市集</a></li>
                <li><a href="bar.html">情報酒館</a></li>
                <li><a href="me.html">俺の海賊船</a></li>
            </ul>
        </nav>
        <div>
            <ul id="headerMe">
                <li id="headerMeID">
                    <a href="javascript:;">我是大帥哥</a>
                </li>
                <li id="headerMeLv">lv.<span>7</span>
                    <div id="headerExpBar">
                        <div id="headerExpLine"></div>
                        <p id="headerExp"><span>1000</span>/<span>10000</span></p>
                    </div>
                </li>
                <li id="headerMeMoney">金幣<span>100</span>G</li>
                <li id="headerMeShip"><a href="javascript:;">
                        <img src="image/ship/shipTemp.png" alt="角色頭像">
                    </a></li>
                <li id="headerMeTalentS">力量<span>◆◆◆◆◇</span></li>
                <li id="headerMeTalentL">幸運<span>5</span></li>
                <li id="headerMeTalentA">敏捷<span>5</span></li>
                <li id="headerMeTalentI">智力<span>5</span></li>
            </ul>
        </div>
    </header>


    <div class="meTitle">
        <h1 class="titlePri">俺の海賊船</h1>
    </div>

    <div class="wrap">
        <div class="col-12 col-md-4 drawing">
            <img src="image/background/blueprint.png" alt="">
            <div class="meShip">
                <img src="image/ship/shipComplete.png" alt="">
                <!-- <img src="image/background/light1.png" alt=""> -->
            </div>
        </div>
        <!-- 個人資訊 -->
        <div class="col-12 col-md-4 boxNews">
            <div class="meNews">
                <ul class="col-12 col-md-5 field">
                    <li>
                        帳號: <span>abc123</span>
                    </li>
                    <li>
                        密碼: <a href="#"><span>更改密碼</span></a>
                    </li>
                    <li>
                        ID: <span>祕寶尋者號</span>
                    </li>
                    <li>
                        LV: <span>10</span>
                    </li>
                    <li>
                        金幣: <span>500</span> G
                    </li>
                </ul>
                <!-- 雷達圖 -->
                <div class="col-12 col-md-7 radar">
                    <h3>天賦值: <span id="points">30</span> 點</h3>
                    <div class="chartRadarDiv">
                        <canvas id="chartRadar" style="height:100px; width: 100px;"></canvas>
                    </div>
                    <button id="butS" class="but">力量</button>
                    <button id="butI" class="but">智力</button>
                    <button id="butL" class="but">幸運</button>
                    <button id="butA" class="but">敏捷</button>
                </div>
            </div>
            <!-- 寶物造型頁籤 -->
            <div class="col-12  bookMark">
                <div id="js-tabs">
                    <div id="tabs-nav">
                        <a href="#tab0" onclick="jsTabs(event,'tab0');return false"
                            class="tabs-menu tabs-menu-active">寶物</a>
                        <a href="#tab1" onclick="jsTabs(event,'tab1');return false" class="tabs-menu">造型</a>
                    </div>
                    <div class="tabs-container">
                        <div id="tab0" class="tabs-panel" style="display:block">
                            <div class="content">
                                <ul>
                                    <li>
                                        <img src="image/treasure/trea1.svg" alt="">
                                    </li>
                                    <li>
                                        <img src="image/treasure/trea2.svg" alt="">
                                    </li>
                                    <li>
                                        <img src="image/treasure/trea3.svg" alt="">
                                    </li>
                                    <li>
                                        <img src="image/treasure/trea4.svg" alt="">
                                    </li>
                                    <li>
                                        <img src="image/treasure/trea5.svg" alt="">
                                    </li>
                                    <li>
                                        <img src="image/treasure/trea6.svg" alt="">
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="tab1" class="tabs-panel">
                            我是內容222222
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 filewrap">
            <div id="js-tabs1" class="js-tabs1">
                <div id="tabs-nav1">
                    <a href="#tab2" onclick="jsTabs1(event,'tab2');return false"
                        class="tabs-menu1 tabs-menu-active1">交易紀錄</a>
                    <a href="#tab3" onclick="jsTabs1(event,'tab3');return false" class="tabs-menu1">發文紀錄</a>
                </div>
                <div class="tabs-container1">
                    <div id="tab2" class="tabs-panel1" style="display:block">
                    <?php
                        while ($memberRow = $traderecord->fetch()) {
                            ?>
                    <div class="tt">
                            <ul>
                                <li>寶物名稱:<?php echo $memberRow['treaId']?></li>
                                <li>上架時間:<?php echo $memberRow['saleTime']?></li>
                                <li>買家暱稱:<?php echo $memberRow['salerId']?></li>
                                <li>交易時間:<?php echo $memberRow['tradeTime']?></li>
                                <li>價格:<?php echo $memberRow['price']?></li>
                            </ul>
                        </div>
                    <?php
                        }
                    ?>
                    </div>
                    <div id="tab3" class="tabs-panel1">
                    <?php
                        while ($memberRow2 = $traderecord->fetch()) {
                            ?>
                    <div class="tt">
                            <ul>
                                <li>主題:<?php echo $memberRow2['artTitle']?></li>
                                <li>發文時間:<?php echo $memberRow2['artTime']?></li>
                                <li>討論人數:<?php echo $memberRow2['msgAmt']?></li>
                                <li>點擊次數:<?php echo $memberRow2['clickAmt']?></li>
                                <li> <a href="#"><button>前往文章</button></a> </li>
                            </ul>
                        </div>
                    <?php
                        }
                    ?>
                        <div class="tt">
                            <ul>
                                <li>主題:</li>
                                <li>發文時間:</li>
                                <li>討論人數:</li>
                                <li>點擊次數:</li>
                                <li> <a href="#"><button>前往文章</button></a> </li>
                            </ul>
                        </div>
                        <div class="tt">
                            <ul>
                                <li>主題:</li>
                                <li>發文時間:</li>
                                <li>討論人數:</li>
                                <li>點擊次數:</li>
                                <li> <a href="#"><button>前往文章</button></a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style="clear: both"></div>
            </div>
        </div>
    </div>


    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/Chart.bundle.min.js"></script>
    <script src="js/header.js"></script>
    <script src="js/radar.js"></script>
    <script src="js/me.js"></script>

</body>

</html>