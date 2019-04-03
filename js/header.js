window.addEventListener('load',function(){

    var winWidth = window.innerWidth;
    window.addEventListener('resize',function(){
        winWidth = window.innerWidth;
    })
    if(winWidth<768){
        var headerMe= document.getElementById("headerMe");
        headerMe.addEventListener('click',function(){
            var headerMenu = document.querySelector('#headerMenu');
            var header = document.getElementsByTagName('header')[0];
            if(headerMe.classList.contains('hide')){
                console.log('hi');
                headerMe.classList.remove('hide');
                headerMenu.classList.remove('hide');
                header.classList.remove('hide');
            }else{
                headerMe.classList.add('hide');
                headerMenu.classList.add('hide');
                header.classList.add('hide');
            }
        })
    }

})