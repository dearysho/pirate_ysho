<!-- php -->
<!-- 熱門話題 -->
<?php
  try{
    require_once("connectPirate.php");
    $sql = "select * from articlelist order by artTime DESC limit 6";
    $hotIssue = $pdo->prepare( $sql );
    $hotIssue->execute();
    
  }catch(PDOException $e){
      echo $e->getMessage();
    };
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>《大海賊帝國》在情報酒館探索海賊們的秘密吧！</title>
    <link rel="stylesheet" href="css/bar.css">
    <link rel="stylesheet" href="css/wavebtn.css"> 
</head>
<body>
<!-- 頁面標題 -->
<div id="bartitle">
    <h1 class="titlePri">情報酒館</h1>
    <a class="btnpri artBtn" href="javacript:;" >
            <span>洩漏情報</span>
    </a>
</div>
<!-- 熱門話題 -->
<div id="hotIssueWrap">
    <h2 class="titleSec">
    熱門情報
        <img src="image/h2frame.svg" alt="">
    </h2>
    <p class="textM">
        眾所皆知的熱門八卦你不能不知道
    </p>
    <!-- <img src="image/bar/fire_2.gif" alt="fire" id="fire"> -->

    <div id="hotIssue">
    <?php 
    while($hotIssueRow = $hotIssue ->fetch(PDO::FETCH_ASSOC)){
    ?>
        <div class="hotIssueBox">
            <a href="javacript:;" class="hotIssueBoxLink">
                <div class="hotIssueBoxInfo">
                    <img src="image/bar/DB/artImg_1.png" alt="洩露情報者">
                </div>
                <div class="hotIssueBoxCont">
                    <h4 class="textM"><?php echo $hotIssueRow["artTitle"];?></h4>
                    <p class="textS hotIssueBoxContText">
                        <?php echo $hotIssueRow["artText"];?>
                    </p>
                    <span class="hotIssueBoxView"><?php echo $hotIssueRow["clickAmt"]?></span>
                    <span class="hotIssueBoxCommend"><?php echo $hotIssueRow["msgAmt"]?></span>
                </div>
            </a>
        </div>
    <?php    
      $arr[]=$hotIssueRow["artTitle"];
    }
    $jsonStr = json_encode($arr);
    ?>        
        
        
    </div>
</div>
<script>
    var arr = <?php echo $jsonStr; ?>;
    console.log(arr);
    window.addEventListener("load", function(){
        //..............

        //................
    },false);
</script>

<!-- 熱門話題內容開始 -->
<!-- 最新情報 -->
<div id="newsWrap">
    <!-- 最新情報標題列 -->
        <h2 class="titleSec">
            最新情報
            <img src="image/h2frame.svg" alt="">
        </h2>
        <p class="textM">
            最新、最熱、道聽塗說、以訛傳訛的情報風聲，各式各樣的八卦在等著你
        </p>
    <!-- 最新情報內容-->
    <div id="newsWrapCont">
     <!-- 內容標題列 -->
        <div id="newsWrapContListTit">
            <div id="newsWrapFilter">
                <span id="newsWrapListType">篩選：</span>
                <a id="newsWrapListAll" class="newsWrapListBtn" href="#">ALL</a>
                <a id="newsWrapListGps" class="newsWrapListBtn" href="#">尋寶</a>
                <a id="newsWrapListTraining" class="newsWrapListBtn" href="#">試煉</a>
                <a id="newsWrapListOther" class="newsWrapListBtn" href="#">其他 </a>
                <a id="newsWrapListNavy" class="newsWrapListBtn" href="#">官方</a>
            </div>
            <div class="newsInfo">
                <span class="newsBoxView">人氣</span>
                <span class="newsBoxCommend">回覆</span>
            </div>
            <div class="newsOwner">洩密者
                <span class="newsBoxTime">走漏時間</span>
            </div>
        </div>
    <!-- 內容列 -->
        <div class="newsBox">
            <div class="newsBoxInfo">
                <div class="newsBoxInfoCont">
                    <span class="newsBoxName">尋寶</span>
                    <div class="newsBoxTit"><a href="javascript:;">2019新地圖</a></div>
                </div>
                <div class="newsInfo">
                    <span class="newsBoxView">1314</span>
                    <span class="newsBoxCommend">520</span>
                </div>
                <div class="newsOwner">
                    <a href="javascript:">景成船長</a>
                    <span class="newsBoxTime">190409</span>
                </div>
            </div>
            <div class="newsBoxArti">
                這次活動角竟然是酒吞，讚嘆營運 為了不讓縮圖停在怪怪的地方先上個預覽圖，請見諒ˊˋ 以下是全文，終於要和的....
            </div>
        </div>
        <!-- <div class="newsBox">
            <div class="newsBoxInfo">
                <div class="newsBoxInfoCont">
                    <span class="newsBoxName">尋寶</span>
                    <div class="newsBoxTit"><a href="javascript;">2019新地圖</a></div>
                </div>
                <div class="newsInfo">
                    <span class="newsBoxView">1314</span>
                    <span class="newsBoxCommend">520</span>
                </div>
                <div class="newsOwner">
                    <a href="javascript:">景成船長</a>
                    <span class="newsBoxTime">190409</span>
                </div>
            </div>
            <div class="newsBoxArti">
                這次活動角竟然是酒吞，讚嘆營運 為了不讓縮圖停在怪怪的地方先上個預覽圖，請見諒ˊˋ 以下是全文，終於要和的....
            </div>
        </div>-->
        <input type="button" value="點擊搜集更多情報" id="getMoreNews">
    </div>
</div>
<!-- 新增討論燈箱 -->
<div id="addFormWrap">
    <h1 class="titleSec">
        洩漏情報
        <img src="image/h2frame.svg" alt="">
     </h1>
     <p class="textM">
         與海賊交換最新的情報風聲
     </p>
    <a href="javascript:;" class="artBtn">保密防諜回到酒館刺探情報</a>
     <form action="login.php" method="post" id="addForm">
         <h2 class="textHiliR">最高機密</h2>
         <div id="addFormCont">
             <div id="articleTypeTit">
                 <span>情報分類</span>
                 <label for="articleTypeGps" class="articleTypeBtn"><input type="radio" name="articleType"  id="articleTypeGps">尋寶</label>
                 <label for="articleTypeEle" class="articleTypeBtn"><input type="radio" name="articleType"  id="articleTypeEle">試煉</label>
                 <label for="articleTypeOth" class="articleTypeBtn"><input type="radio" name="articleType"  id="articleTypeOth">其他</label>
        
             </div>
             <label for="articleTit">情報題目 :</label>
                 <input type="text" id="articleTit" placeholder="請點擊此處輸入情報內容">
             <div id="articleCont">
                 <span id="articleContTit">情報內容</span>
                 <textarea name="articleCont" id="articleCont" cols="30" rows="10" placeholder="請點擊此處輸入情報內容"></textarea>
             </div>
         </div>
         <!-- <input class="btnpri" type="submit" value="發出情報"> -->
         <a class="btnpri" href="javascript:">
                 <span><label for="submitArticle"></label>發出情報</span>
         </a>
         <input type="submit"  id="submitArticle">
     </form>
</div>
<!-- 討論內容燈箱 -->
<div id="articleBoxWrap">
    <div id="articleBox">
        <div id="articleBoxTit">
            <span id="articleBoxType">尋寶</span>
            <h3 class="textL">金斧頭GET</h3>
            <a href="javascript:;" id="closeArt"></a>
            <a href="javascript:;" id="artReport"></a>
        </div>
        <div id="articleBoxMemInfo">
            <div id="articleBoxTitInfo">
                <span id="articleBoxView">人氣</span>
                <span id="articleBoxCommend">回覆</span>
            </div>
            <div id="articleBoxMemImg">
                <img src="image/ship.png" alt="" id="">
            </div>
            <div id="articleBoxMemMeg">
                <span id="articleBoxMemId">景成大帥哥</span>
                <span id="articleBoxMemLv">7</span>
                <span id="articleBoxMemMoney">100G</span>
            </div>
        </div>
        <div id="articleBoxCont">
            <div id="articleBoxImg">
                <img src="image/bar/hotIssueImg_1.png" alt="文章圖片" id="articleBoxContImg">
            </div>
            <p class="textM">
                讚嘆營運，不知道大家在開啟景成的大秘寶章節後，尋寶遊戲的運氣如何，那天玩尋寶遊戲，竟然在中大湖得到傳說中董董女神的金斧頭
            </p>
        </div>
    </div>
    <div class="artiRespondBox">
        <div class="artiRespondBoxMem">
                <img src="image/ship.png" alt="留言者" class="artiRespondBoxMemImg">
            <span class="textM">景陳船長</span>
        </div>
        <div class="artiRespondBoxCont">
            <p class="textM artiRespondBoxContText">有 人稱中大黃金手不是叫假的</p>
            <span class="artiRespondBoxTime"></span>
        </div>
    </div>
</div>

<!-- script -->
<script  src="https://code.jquery.com/jquery-3.4.0.min.js"   integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg="   crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
<!-- <script src="js/bar.js?<?//php echo time();?>"></script> -->
<script src="js/bar.js>"></script>
<script src="js/wavebtn.js"></script>
</body>
