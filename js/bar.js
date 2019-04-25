var body = document.getElementsByTagName('body');
//熱門討論的字數
function hotIssueText() {
    var innerWidth = window.innerWidth;
    var hotIssueText = document.getElementsByClassName('hotIssueBoxContText');
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
        hotIssueText[i].innerText = text;
    }
}
//最新討論
function news() {
    var newsBoxWrapCont = [];
    var newsCat, newsTime, newsBoxNameColor;
    var newsBtn = document.getElementsByClassName('newsWrapListBtn');
    var newsBoxWrap = document.getElementById('newsBoxWrap');
    var newsBox = document.getElementsByClassName('newsBox');
    for (let i = 0; i < newsBtn.length; i++) {
        newsBtn[i].addEventListener("click",function (){
            for (let k = 0; k < newsBox.length; k++) {
                newsBoxWrap.removeChild(newsBox[k]);
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
                    newsTime =  news[j].artTime.substr(0,10).split("-",3);

                
                    newsBoxWrapCont += `<div class="newsBox">
                        <div class="newsBoxInfo">
                            <div class="newsBoxInfoCont">
                                <span class="newsBoxName ${newsBoxNameColor}">${newsCat}</span>
                                <div class="newsBoxTit"><a href="javascript;">${news[j].artTitle}</a></div>
                            </div>
                            <div class="newsInfo">
                                <span class="newsBoxView">${news[j].clickAmt}</span>
                                <span class="newsBoxCommend">${news[j].msgAmt}</span>
                            </div>
                            <div class="newsOwner">
                                <a href="javascript:">${news[j].memNic}</a>
                                <span class="newsBoxTime">${newsTime}</span>
                            </div>
                        </div>
                        <div class="newsBoxArti">
                        </div>
                    </div>
                    `;
                };
         
                    newsBoxWrap.innerHTML=newsBoxWrapCont;

            };
            news_xhr.open("get","bar_news.php?artCat="+i,true);
            // news_xhr.open("get","bar_news.php?artCat="+i);
            news_xhr.send(null);
        });
    }
}
//文章燈箱的內容放置
function artBox() {
    
}
//燈箱
function addArt() {
    var artBtn = document.getElementsByClassName('artBtn');
    var artBox = document.getElementById('addFormWrap');
    //artBox.style.display = 'block';
    artBtn[0].addEventListener('click',function() {
        artBox.style.display = 'block';
        body[0].classList.add("lightboxShow");
    });
    artBtn[1].addEventListener('click',function() {
        artBox.style.display = 'none';
        body[0].classList.remove("lightboxShow");
    });
}
function readArt() {
    var hotIssue = document.getElementsByClassName('hotIssueBoxLink');
    var news = document.getElementsByClassName('newsBoxTit');
    var article = document.getElementById('articleBoxWrapMask');
    var articleClose = document.getElementById('closeArt');
    for (let i = 0; i < hotIssue.length; i++) {
        hotIssue[i].addEventListener('click',function() {
            article.style.display = 'block';
            // article.style.overflowY = 'scroll';
            body[0].classList.add("lightboxShow");
        });
    }
    for (let i = 0; i < news.length; i++) {
        news[i].addEventListener('click',function() {
            article.style.display = 'block';
            // article.style.overflowY = 'scroll';
            body[0].classList.add("lightboxShow");
        });
    }
    articleClose.addEventListener('click',function() {
        article.style.display = 'none';
        body[0].classList.remove("lightboxShow");
    });
}
