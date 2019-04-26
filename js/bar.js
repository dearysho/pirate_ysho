var body = document.getElementsByTagName('body');
function $id(id) {
    return document.getElementById(id);
}
function $class(className) {
    return document.getElementsByClassName(className);
}
//熱門討論的字數
function hotIssueText() {
    var innerWidth = window.innerWidth;
    let text;
    for (let i = 0; i < arrhotIssue.length; i++) {
        if (innerWidth <= 768) {
            text = arrhotIssue[i].substr(0,20);
            if(arrhotIssue[i].length > 20){
                text += `...`;
            }
        } else {
            text = arrhotIssue[i].substr(0,50);
            if(arrhotIssue[i].length > 50){
                text += `...`;
            }
        }
        $class('hotIssueBoxContText')[i].innerText = text;
    }
}
//最新討論
function news() {
    var newsBoxWrapCont = [];
    var newsCat, newsTime, newsBoxNameColor;
    for (let i = 0; i < $class('newsWrapListBtn').length; i++) {
        $class('newsWrapListBtn')[i].addEventListener("click",function (){
            for (let k = 0; k < $class('newsBox').length; k++) {
                $id('newsBoxWrap').removeChild($class('newsBox')[k]);
            };
            var news_xhr = new XMLHttpRequest();
            news_xhr.onload = function(){
                news = JSON.parse(news_xhr.responseText);
                console.log(news);
                if (newsBoxWrapCont!='') {
                    newsBoxWrapCont='';
                }
                for (let j = 0; j < news.length; j++) {
                    switch (news[j].artCat) {
                        case "1": newsCat = "尋寶"; 
                                  newsBoxNameColor = "newsBoxNameGps";break;
                        case "2": newsCat = "試煉";
                                  newsBoxNameColor = "newsBoxNameTraining"; break;
                        case "3": newsCat = "其他";
                                  newsBoxNameColor = "newsBoxNameOther" ; break;
                        case "4": newsCat = "官方";
                                  newsBoxNameColor = "newsBoxNameNavy" ; break;
                        default:break;
                    };
                    newsTime =  news[j].artTime.substr(0,10).replace(/-/g,"");
                    //newsTimeStr = 
                
                    newsBoxWrapCont += `<div class="newsBox artShow">
                        <input type="hidden" value="${news[j].artId}">
                        <input type="hidden"  value="${news[j].artText}">
                        <input type="hidden"  value="${news[j].memNic}">
                        <input type="hidden"  value="${news[j].memLv}">
                        <input type="hidden"  value="${news[j].memMoney}">
                        <input type="hidden"  value="${news[j].shipImgAll}">
                        <input type="hidden"  value="${news[j].artCat}">
                        <input type="hidden"  value="${news[j].artImg}">
                        <div class="newsBoxInfo">
                            <div class="newsBoxInfoCont">
                                <span class="newsBoxName ${newsBoxNameColor}">${newsCat}</span>
                                <div class="newsBoxTit artTit"><a href="javascript:;">${news[j].artTitle}</a></div>
                            </div>
                            <div class="newsInfo">
                                <span class="newsBoxView">${news[j].clickAmt}</span>
                                <span class="newsBoxCommend">${news[j].msgAmt}</span>
                            </div>
                            <div class="newsOwner">
                                <a href="javascript:;">${news[j].memNic}</a>
                                <span class="newsBoxTime">${newsTime}</span>
                            </div>
                        </div>
                        <div class="newsBoxArti">
                        </div>
                    </div>
                    `;
                };
                $id('newsBoxWrap').innerHTML=newsBoxWrapCont;
                artBox();
                // readArt();
            };
            news_xhr.open("get","bar_news.php?artCat="+i,true);
            // news_xhr.open("get","bar_news.php?artCat="+i);
            news_xhr.send(null);
        });
    }
}
//文章燈箱的內容放置
// $('.hotIssueBoxLink').click(function(){
//     index = $(this).indexOf();
//     str = arr[index];
//     $('#articleBoxWrap .textM').eq(index).text('123');
// });
function artBox(artId) {
    var artBox, artTit ,msgAmt,clickAmt, artId,artText ,memNic ,memLv ,memMoney ,shipImgAll ,artType ,artImg;
    var artBoxContText = [];
    // var artBoxContText, artBoxContTextMain, artBoxContTextMeg=[],artBoxContTextRespond;
    if (artId == undefined) {
        console.log("bar");
        for (let i = 0; i < $class('artShow').length; i++) {
            $class('artShow')[i].addEventListener('click',function(e) {
                if (artBoxContText!='') {
                    artBoxContText='';
                }
                artBox = e.currentTarget;
                let inputs = artBox.getElementsByTagName("input");
                artTit = artBox.getElementsByClassName("artTit")[0].innerText;
                msgAmt = artBox.getElementsByClassName("newsBoxCommend")[0].innerText;
                clickAmt = artBox.getElementsByClassName("newsBoxView")[0].innerText;
                artId = inputs[0].value;
                artText = inputs[1].value;
                memNic = inputs[2].value;
                memLv = inputs[3].value;
                memMoney = inputs[4].value;
                shipImgAll = inputs[5].value;
                // artType = inputs[6].value;
                artImg = inputs[7].value;
                switch (inputs[6].value) {
                    case "1": artType = "尋寶"; 
                                newsBoxNameColor = "#7ccbbd";break;
                    case "2": artType = "試煉";
                                newsBoxNameColor = "#ffe3ac"; break;
                    case "3": artType = "其他";
                                newsBoxNameColor = "#fbc9bc" ; break;
                    case "4": artType = "官方";
                                newsBoxNameColor = "#45a0c7" ; break;
                    default:break;
                };
                // console.log(inputs);
                artBoxContText +=`<div id="articleBox">
                <div id="articleBoxTit">
                    <span id="articleBoxType" style="background-color:${newsBoxNameColor}">${artType}</span>
                    <h3 class="textL">${artTit}</h3>
                    <a href="javascript:;" id="closeArt"></a>
                    <a href="javascript:;" id="artReport"></a>
                </div>
                <div id="articleBoxMemInfo">
                    <div id="articleBoxMemImg">
                        <img src="image/ship${shipImgAll}" alt="${memNic}">
                    </div>
                    <div id="articleBoxMemMeg">
                        <span id="articleBoxMemId">${memNic}</span>
                        <span id="articleBoxMemLv">${memLv}</span>
                        <span id="articleBoxMemMoney">${memMoney}</span>
                    </div>
                    <div id="articleBoxTitInfo">
                        <span id="articleBoxView">${clickAmt}</span>
                        <span id="articleBoxCommend">${msgAmt}</span>
                    </div>
                </div>
                <div id="articleBoxCont">
                    <div id="articleBoxImg">
                        <img src="image/bar/${artImg}" alt="${artType}" id="articleBoxContImg">
                    </div>
                    <p class="textM">${artText}</p>
                </div>
            </div>`;
                // body[0].classList.add("lightboxShow");
                // $id('articleBoxWrapMask').style.display = 'block';
            // console.log(artBoxContTextMain);
            // 
            // $id('articleBoxWrap').innerHTML=artBoxContTextMain;
            addMeg();
            });
        }
    } else {
        console.log("index");
        if (artBoxContText!='') {
            artBoxContText='';
        }
        var artBoxText_xhr = new XMLHttpRequest();
        artBoxText_xhr.onload = function () {
            var artBoxText = JSON.parse(artBoxText.responseText);
            console.log(artBoxText);
            switch (artBoxText.artCat) {
                case "1": artType = "尋寶"; 
                            newsBoxNameColor = "#7ccbbd";break;
                case "2": artType = "試煉";
                            newsBoxNameColor = "#ffe3ac"; break;
                case "3": artType = "其他";
                            newsBoxNameColor = "#fbc9bc" ; break;
                case "4": artType = "官方";
                            newsBoxNameColor = "#45a0c7" ; break;
                default:break;
            };
            // console.log(inputs);
            artBoxContText +=`<div id="articleBox">
            <div id="articleBoxTit">
                <span id="articleBoxType" style="background-color:${newsBoxNameColor}">${artType}</span>
                <h3 class="textL">${artBoxText.artTit}</h3>
                <a href="javascript:;" id="closeArt"></a>
                <a href="javascript:;" id="artReport"></a>
            </div>
            <div id="articleBoxMemInfo">
                <div id="articleBoxMemImg">
                    <img src="image/ship${artBoxText.shipImgAll}" alt="${artBoxText.memNic}">
                </div>
                <div id="articleBoxMemMeg">
                    <span id="articleBoxMemId">${artBoxText.memNic}</span>
                    <span id="articleBoxMemLv">${artBoxText.memLv}</span>
                    <span id="articleBoxMemMoney">${artBoxText.memMoney}</span>
                </div>
                <div id="articleBoxTitInfo">
                    <span id="articleBoxView">${artBoxText.clickAmt}</span>
                    <span id="articleBoxCommend">${artBoxText.msgAmt}</span>
                </div>
            </div>
            <div id="articleBoxCont">
                <div id="articleBoxImg">
                    <img src="image/bar/${artBoxText.artImg}" alt="${artType}" id="articleBoxContImg">
                </div>
                <p class="textM">${artBoxText.artText}</p>
            </div>
        </div>`;
        addMeg();
        }
        artBoxText_xhr.open("Get", "artBoxText.php?artId=" + artId);
        artBoxText_xhr.send( null );
    }
    function addMeg() {
        var artBox_xhr = new XMLHttpRequest();
        artBox_xhr.onload=function (){
            if (artBox_xhr.responseText != undefined) {
                var artBoxCont = JSON.parse(artBox_xhr.responseText);
                console.log(artBoxCont);
                for (let i = 0; i < artBoxCont.length; i++) {
                    // ${artBoxCont[i].}
                    // var msgTime = artBoxCont[i].msgTime.substr(0,10).replace(/-/g,"");
                    artBoxContText +=`<div class="artiRespondBox">
                    <div class="artiRespondBoxMem">
                            <img src="image/ship.png" alt="${artBoxCont[i].memNic}" class="artiRespondBoxMemImg">
                        <span class="textM">${artBoxCont[i].memNic}</span>
                    </div>
                    <div class="artiRespondBoxCont">
                        <p class="textM artiRespondBoxContText">${artBoxCont[i].msgText}</p>
                    </div>
                </div>`;  
                }
                console.log(artBoxContText);
            };
            artBoxContText += ` <div id="addArtRespondBox">
            <form action="addArtRespond.php" method="post" id="addArtRespond">
                <input type="hidden" value="${artId}">
                <textarea name="addArtRespondCont" id="addArtRespondCont" placeholder="加入回覆"></textarea>
                <a class="btnpri" href="javascript:;">
                    <span><label for="submitAddArtRespond"></label>發送留言</span>
                </a>
            </form>
            </div>`;
            console.log(artBoxContText);
            // artBoxContText += `${artBoxContTextRespond}`;
            $id('articleBoxWrap').innerHTML=artBoxContText;
            readArt();
            // $id('closeArt').addEventListener('click',function() {
            //     $id('articleBoxWrapMask').style.display = 'none';
            //     body[0].classList.remove("lightboxShow");
            // });
        }
        artBox_xhr.open("Get", "artBoxCont.php?artId=" + artId);
        artBox_xhr.send( null );
    }
    // $id('articleBoxWrap').innerHTML=artBoxContText;
}
//文章燈箱
function readArt() {
    for (let i = 0; i < $class('hotIssueBoxLink').length; i++) {
        $class('hotIssueBoxLink')[i].addEventListener('click',function() {
            body[0].classList.add("lightboxShow");
            $id('articleBoxWrapMask').style.display = 'block';
        });
    }
    for (let i = 0; i < $class('newsBoxTit').length; i++) {
        $class('newsBoxTit')[i].addEventListener('click',function() {
            body[0].classList.add("lightboxShow");
            $id('articleBoxWrapMask').style.display = 'block';
        });
    }
    $id('closeArt').addEventListener('click',function() {
        $id('articleBoxWrapMask').style.display = 'none';
        body[0].classList.remove("lightboxShow");
    });
}
//新增討論燈箱
function addArt() {
    //artBox.style.display = 'block';
    $class('artBtn')[0].addEventListener('click',function() {
        $id('addFormWrap').style.display = 'block';
        body[0].classList.add("lightboxShow");
    });
    $class('artBtn')[1].addEventListener('click',function() {
        $id('addFormWrap').style.display = 'none';
        body[0].classList.remove("lightboxShow");
    });
}
