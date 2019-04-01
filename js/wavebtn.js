var btnpri = document.getElementsByClassName("btnpri");

var waveWidth = 10;
var waveCount = 10;

for(var j = 0; j < btnpri.length; j++){
    console.log(123);
    var wavebox = document.createElement("div");

    for (var i = 0; i < waveCount; i++) {
        var wave = document.createElement("div");
        wave.className += " wave";
        wavebox.appendChild(wave);
        wave.style.left = i * waveWidth + "px";
        wave.style.animationDelay = (i / 80) + "s";
    }

    btnpri[j].appendChild(wavebox);

}

