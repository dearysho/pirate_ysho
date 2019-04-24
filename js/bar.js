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
function News() {
    var newsBtn = document.getElementsByClassName('newsWrapListBtn');
    for (let i = 0; i < newsBtn.length; i++) {
        newsBtn[i].addEventListener("click",function (){
            var news_xhr =new XMLHttpRequest();
            news_xhr.onload = function(){
                alert(xhr.responseText);
            }
            news_xhr.open("get","bar_news.php?cat="+i,flase);
            news_xhr.send(null);
        });
    }
    
    

    
}
//文章燈箱的內容放置
// function artBox() {
    
// }
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
