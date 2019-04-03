window.addEventListener('load',function(){

    var headerMe= document.getElementById("headerMe");

    var winWidth = window.innerWidth;
    window.addEventListener('resize',function(){
        winWidth = window.innerWidth;
        if(winWidth<768){
            headerMe.addEventListener('click',toggleHeader);
        }else{
            headerMe.removeEventListener('click',toggleHeader);
        }
    })
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
    if(winWidth<768){
        var headerMe= document.getElementById("headerMe");
        headerMe.addEventListener('click',toggleHeader);
    }else{
        headerMe.removeEventListener('click',toggleHeader);
    }

})