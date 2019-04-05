window.addEventListener('load',function(){
    //取得header角色資訊
    var headerMe= document.getElementById("headerMe");
    //取得視窗寬度，與resize寬度
    var winWidth = window.innerWidth;
    window.addEventListener('resize',function(){
        winWidth = window.innerWidth;
        //螢幕寬度小於768啟動toggleHeader，大於就remove
        if(winWidth<768){
            headerMe.addEventListener('click',toggleHeader);
        }else{
            headerMe.removeEventListener('click',toggleHeader);
        }
    })
    //關閉與開啟header
    function toggleHeader(){
        var headerMenu = document.querySelector('#headerMenu');
            var header = document.getElementsByTagName('header')[0];
            if(headerMe.classList.contains('hide')){
                headerMe.classList.remove('hide');
                headerMenu.classList.remove('hide');
                header.classList.remove('hide');
            }else{
                headerMe.classList.add('hide');
                headerMenu.classList.add('hide');
                header.classList.add('hide');
            }
    }
    //網頁剛開啟時螢幕寬度小於768啟動toggleHeader，大於就remove
    if(winWidth<768){
        var headerMe= document.getElementById("headerMe");
        headerMe.addEventListener('click',toggleHeader);
    }else{
        headerMe.removeEventListener('click',toggleHeader);
    }

})