$(document).ready(function () {

    console.log($('#homeDIY').offset().top);

    //收起header (header真的好大)
    $(window).on('scroll',function(){
        if(window.pageYOffset > 900){
            $('header').removeClass('homeHeadHide')
        }else{
            $('header').addClass('homeHeadHide')
        }
    })
    
    // 取得目前卷軸位置至文件最上方的距離
    var curPos = $(window).scrollTop();
    var homeDIYTop = $('#homeDIY').offset().top;
    var winWidth = window.innerWidth;
    window.addEventListener('resize',function(){
        winWidth = window.innerWidth;
        showTreaBtn();    
    })


    //客製的下一步紐
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



    function showTreaBtn(){
        if(winWidth<768){
            $('.homeTreaBtn').addClass('justHide');
        }else{
            $('.homeTreaBtn').removeClass('justHide');
        }
    }
    showTreaBtn();    
    // 海上市集的下一個紐，總之.....還有很多bug...
    var hProdIndex =0;
    var hProdsL = document.getElementsByClassName('homeWrapProd').length;
    $('#homeProdNext').on('click',function(){
        $('.homeProdInfoCard').children().removeClass('homeProdAct');
        $('.homeProdImg').removeClass('homeProdAct');
        
        $('.homeProdInfoCard').eq(hProdIndex+1).children().addClass('homeProdAct');
        $('.homeProdImg').eq(hProdIndex+1).addClass('homeProdAct');
        hProdIndex++;
        if(hProdIndex > (hProdsL-2)) hProdIndex=-1;
    })
    $('#homeProdPrev').on('click',function(){
        $('.homeProdInfoCard').children().removeClass('homeProdAct');
        $('.homeProdImg').removeClass('homeProdAct');
        
        $('.homeProdInfoCard').eq(hProdIndex).children().addClass('homeProdAct');
        $('.homeProdImg').eq(hProdIndex).addClass('homeProdAct');
        hProdIndex--;
        if(hProdIndex < 0) hProdIndex = hProdsL - 1;
    })


});