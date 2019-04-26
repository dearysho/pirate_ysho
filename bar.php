<!-- php -->
<!-- 熱門話題 -->
<?php
  try{
    require_once("connectPirate.php");
    $sqlHotIssue = "select * from articlelist join member on(articlelist.memId = member.memId) order by clickAmt desc limit 6";
    $hotIssue = $pdo->prepare( $sqlHotIssue );
    $hotIssue->execute();

    $sqlNews = "select * from articlelist join member on(articlelist.memId = member.memId) order by artTime";
    $news = $pdo->prepare( $sqlNews );
    $news->execute();
    
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
    <script
  src="https://code.jquery.com/jquery-3.4.0.min.js"
  integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg="
  crossorigin="anonymous"></script> 
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
            <a href="javacript:;" class="hotIssueBoxLink artShow">
                <input type="hidden"  value="<?php echo $hotIssueRow["artId"];?>">
                <input type="hidden"  value="<?php echo $hotIssueRow["artText"];?>">
                <input type="hidden"  value="<?php echo $hotIssueRow["memNic"];?>">
                <input type="hidden"  value="<?php echo $hotIssueRow["memLv"];?>">
                <input type="hidden"  value="<?php echo $hotIssueRow["memMoney"];?>">
                <input type="hidden"  value="<?php echo $hotIssueRow["shipImgAll"];?>">
                <input type="hidden"  value="<?php echo $hotIssueRow["artCat"];?>">
                <input type="hidden"  value="<?php echo $hotIssueRow["artImg"];?>">
                <div class="hotIssueBoxInfo">
                    <img src="image/bar/DB/<?php echo $hotIssueRow["artImg"];?>" alt="情報圖片">
                </div>
                <div class="hotIssueBoxCont">
                    <h4 class="textM artTit"><?php echo $hotIssueRow["artTitle"];?></h4>
                    <p class="textS hotIssueBoxContText"></p>
                    <span class="hotIssueBoxView newsBoxCommend"><?php echo $hotIssueRow["clickAmt"]?></span>
                    <span class="hotIssueBoxCommend newsBoxView"><?php echo $hotIssueRow["msgAmt"]?></span>
                </div>
            </a>
        </div>
    <?php    
      $arr[]=$hotIssueRow["artText"];
    }
    $jsonStr = json_encode($arr);
    ?>        
    </div>
</div>
<script>
    var arrhotIssue = <?php echo $jsonStr; ?>;
    console.log(arrhotIssue);
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
                <span id="newsWrapListAll" class="newsWrapListBtn" >ALL</span>
                <span id="newsWrapListGps" class="newsWrapListBtn" >尋寶</span>
                <span id="newsWrapListTraining" class="newsWrapListBtn" >試煉</span>
                <span id="newsWrapListOther" class="newsWrapListBtn" >其他 </span>
                <span id="newsWrapListNavy" class="newsWrapListBtn" >官方</span>
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
        <div id="newsBoxWrap">
        <?php
         while ($newsRow = $news ->fetch(PDO::FETCH_ASSOC)){
            $newsCat;
            $newsBoxNameColor;
            switch ($newsRow["artCat"]) {
                case "1": $newsCat = "尋寶"; 
                          $newsBoxNameColor = "newsBoxNameGps";break;
                case "2": $newsCat = "試煉";
                          $newsBoxNameColor = "newsBoxNameTraining"; break;
                case "3": $newsCat = "其他";
                          $newsBoxNameColor = "newsBoxNameOther" ; break;
                case "4": $newsCat = "官方";
                          $newsBoxNameColor = "newsBoxNameNavy" ; break;
                default:break;
            };
            // $artTime = $newsRow["artTime"];
            // $artTime = substr( $artTime , 0, 10);
            $artTime = substr( $newsRow["artTime"] , 0, 10);
            $artTimeStr = str_replace("-","","$artTime");
        ?>
            <div class="newsBox artShow">
                <input type="hidden"  value="<?php echo $newsRow["artId"];?>">
                <input type="hidden"  value="<?php echo $newsRow["artText"];?>">
                <input type="hidden"  value="<?php echo $newsRow["memNic"];?>">
                <input type="hidden"  value="<?php echo $newsRow["memLv"];?>">
                <input type="hidden"  value="<?php echo $newsRow["memMoney"];?>">
                <input type="hidden"  value="<?php echo $newsRow["shipImgAll"];?>">
                <input type="hidden"  value="<?php echo $newsRow["artCat"];?>">
                <input type="hidden"  value="<?php echo $newsRow["artImg"];?>">
                <div class="newsBoxInfo">
                    <div class="newsBoxInfoCont">
                        <span class="newsBoxName <?php echo $newsBoxNameColor;?>"><?php echo $newsCat;?></span>
                        <div class="newsBoxTit artTit"><a href="javascript:;"><?php echo $newsRow["artTitle"];?></a></div>
                    </div>
                    <div class="newsInfo">
                        <span class="newsBoxView"><?php echo $newsRow["clickAmt"];?></span>
                        <span class="newsBoxCommend"><?php echo $newsRow["msgAmt"];?></span>
                    </div>
                    <div class="newsOwner">
                        <a href="javascript:;"><?php echo $newsRow["memNic"];?></a>
                        <span class="newsBoxTime"><?php echo $artTimeStr ?></span>
                    </div>
                </div>
                <div class="newsBoxArti"><?php echo $newsRow["artText"];?></div>
            </div>
            <?php }?>
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
            </div> -->
        </div>
        <!-- <input type="button" value="點擊搜集更多情報" id="getMoreNews"> -->
    </div>
</div>
<!-- 新增討論燈箱 -->
<div id="addFormWrap">
    <!-- <h1 class="titleSec">
        洩漏情報
        <img src="image/h2frame.svg" alt="">
     </h1>
     <p class="textM">
         與海賊交換最新的情報風聲
     </p> -->
    <!-- <a href="javascript:;" class="artBtn">保密防諜回到酒館刺探情報</a> -->
    <form action="addArticlelist.php" method="post" id="addForm" enctype="multipart/form-data">
        <a href="javascript:;" class="artBtn"></a>
         <h2 class="textHiliR">最高機密</h2>
         <div id="addFormCont">
             <div id="articleTypeTit">
                 <span>情報分類</span>
                 <input type="radio" name="articleType"  id="articleTypeGps" value="1">
                 <label for="articleTypeGps" class="articleTypeBtn">尋寶</label>
                 <input type="radio" name="articleType"  id="articleTypeEle" value="2">
                 <label for="articleTypeEle" class="articleTypeBtn">試煉</label>
                 <input type="radio" name="articleType"  id="articleTypeOth" value="3">    
                 <label for="articleTypeOth" class="articleTypeBtn">其他</label>
             </div>
             <label for="articleTit">情報題目 :</label>
                 <input type="text" id="articleTit" name="id="articleTit"" placeholder="請點擊此處輸入情報內容">
             <div id="articleCont">
                 <span id="articleContTit">情報內容</span>
                 <input type="file" id="articleImg" name="articleImg">
                 <input type="hidden" name="MAX_FILE_SIZE" value="2048">
                 <!-- <label for="articleImg"></label> -->
                 <textarea name="articleCont" id="articleCont" cols="30" rows="10" placeholder="請點擊此處輸入情報內容"></textarea>
             </div>
         </div>
         <a class="btnpri" href="javascript:">
                 <span><label for="submitArticle"></label>發出情報</span>
         </a>
         <input type="submit"  id="submitArticle">
     </form>
</div>
<!-- 討論內容燈箱 -->
<div id="articleBoxWrapMask" >
    <div id="articleBoxWrap">
        <!-- <div id="articleBox">
            <div id="articleBoxTit">
                <span id="articleBoxType">尋寶</span>
                <h3 class="textL">金斧頭GET</h3>
                <a href="javascript:;" id="closeArt"></a>
                <a href="javascript:;" id="artReport"></a>
            </div>
            <div id="articleBoxMemInfo">
                <div id="articleBoxMemImg">
                    <img src="image/ship.png" alt="" id="">
                </div>
                <div id="articleBoxMemMeg">
                    <span id="articleBoxMemId">景成大帥哥</span>
                    <span id="articleBoxMemLv">7</span>
                    <span id="articleBoxMemMoney">100G</span>
                </div>
                <div id="articleBoxTitInfo">
                    <span id="articleBoxView">人氣</span>
                    <span id="articleBoxCommend">回覆</span>
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
        <div id="addArtRespondBox">
            <form action="addArtRespond.php" method="post" id="addArtRespond">
                <input type="hidden" value="">
                <textarea name="addArtRespondCont" id="addArtRespondCont" placeholder="加入回覆"></textarea>
                <a class="btnpri" href="javascript:">
                    <span><label for="submitAddArtRespond"></label>發送留言</span>
                </a>
            </form>
        </div> -->
    </div>
</div>
<input type="submit"  id="submitAddArtRespond">
<!-- 討論檢舉燈箱 -->


<!-- script -->
<script  src="https://code.jquery.com/jquery-3.4.0.min.js"   integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg="   crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
<script src="js/bar.js?<?php echo time();?>"></script>
<script>
    function doFirst() {
        hotIssueText();
        addArt();
        //get queryString
        if (location.search.match("from=index")) {
            // var location = location.search;
            console.log(location.search);
            console.log(location.search.indexOf("artId"));
            console.log(location.search.substring(location.search.indexOf("artId"),location.search.length));
            var artId = location.search.substring(location.search.indexOf("artId"),location.search.length);
            artId = artId.substring((artId.indexOf("=")+1),artId.length);
            console.log(artId);
            artBox(artId);
        }else{
            artBox();
        }
        news();
        readArt();
        // alert(location.search);
        
    }
    window.addEventListener('load',doFirst());
</script>
<!-- <script src="js/bar.js>"></script> -->
<script src="js/wavebtn.js"></script>
</body>
