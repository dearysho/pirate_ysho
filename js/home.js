$(document).ready(function () {

    console.log($('#homeDIY').offset().top);
    
    // 取得目前卷軸位置至文件最上方的距離
    var curPos = $(window).scrollTop();
    var homeDIYTop = $('#homeDIY').offset().top;


    var DIYNexts = document.querySelectorAll('#DIYPanel .DIYNext');
    DIYNexts.forEach(element => {
        element.addEventListener('click',function(e){
            e.currentTarget.parentNode.classList.add('justHide');
            e.currentTarget.parentNode.nextElementSibling.classList.remove('justHide');
        })
    });
    var DIYPrevs = document.querySelectorAll('#DIYPanel .DIYPrev');
    
    DIYPrevs.forEach(element => {
        element.addEventListener('click',function(e){
            e.currentTarget.parentNode.classList.add('justHide');
            e.currentTarget.parentNode.previousElementSibling.classList.remove('justHide');
        })
    });

});