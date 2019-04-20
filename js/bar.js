// function hotIssueBoxContText() {
//     var text = get
// }
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
function doFirst() {
    addArt()
}
window.addEventListener('load',doFirst());
// function newsRotate(){
//     document.getElementsByClassName("newsBox")[0].addEventListener('mouseover',function(){
//         document.getElementsByClassName('newsBoxArti')[0].style.opacity='1';
//         document.getElementsByClassName('newsBoxArti')[0].style.borderRadius = '0px 0px 10px 10px';
//         document.getElementsByClassName('newsBoxArti')[0].style.transform = 'rotateX(0deg)';
//         document.getElementsByClassName('newsBoxArti')[0].style.transition= 'all .15s ease';
//         document.getElementsByClassName('newsBoxArti')[0].style.backgroundColor= '#FAD6A5';
//         document.getElementsByClassName('newsBoxInfo')[0].style.borderRadius = '10px 10px 0px 0px';
//         document.getElementsByClassName('newsBoxInfo')[0].style.backgroundColor = '#FAD6A5';
//     });
//     document.getElementsByClassName("newsBox")[0].addEventListener('mouseout',function(){
//         document.getElementsByClassName('newsBoxArti')[0].style.opacity=' 0';
//         document.getElementsByClassName('newsBoxInfo')[0].style.borderRadius = '10px';
//         document.getElementsByClassName('newsBoxInfo')[0].style.backgroundColor= '#f5ecdd';
//         document.getElementsByClassName('newsBoxArti')[0].style.borderRadius = '10px';
//         document.getElementsByClassName('newsBoxArti')[0].style.transform = 'rotateX(90deg)';
//         document.getElementsByClassName('newsBoxArti')[0].style.transition= 'all .5s ease';
//         document.getElementsByClassName('newsBoxArti')[0].style.backgroundColor= '#f5ecdd';
//     });
// }
//TweenMax
// TweenMax.from('.newsBox', 5, {
//     x: 400,
//     y: 1000,
//     yoyo: true,
//     //ease: Elastic.easeOut
//  });
//window.addEventListener('load',newsRotate());