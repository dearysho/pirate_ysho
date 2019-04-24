function hotIssueText() {
    var innerWidth = window.innerWidth;
    if (innerWidth <= 768 ) {
        arrhotIssue.
    } else {
        
    }
}
//熱門手機14*2
//熱門桌機50
var body = document.getElementsByTagName('body');
function addArt() {
    var artBtn = document.getElementsByClassName('artBtn');
    var artBox = document.getElementById('addFormWrap');
    //artBox.style.display = 'block';
    artBtn[0].addEventListener('click',function() {
        artBox.style.display = 'block';
    });
    artBtn[1].addEventListener('click',function() {
        artBox.style.display = 'none';
    });
}
function readArt() {
    var hotIssue = document.getElementsByClassName('hotIssueBoxLink');
    var news = document.getElementsByClassName('newsBoxTit');
    var article = document.getElementById('articleBoxWrap');
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
