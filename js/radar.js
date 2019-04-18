// 建立4個var 為了之後要傳入radar(代號,代號,代號,代號)
var str = 0;//力量
var int = 0;//智力
var lcu = 0;//幸運
var agi = 0;//敏捷

function addSkill(e) {
    // 1.get技能點數
    // 2.把技能點數轉為number
    var Points = parseInt(document.getElementById('points').innerText);
    // alert(typeof Points);

    // 3.判斷技能點數>=1時才能夠加技能(利用if-else)
    // console.log(e.target.innerText);
    if (Points >= 1) {
        document.getElementById('points').innerText = Points - 1;
        // 4.判斷哪個btn被點(利用e.target 與 if-else)
        if (e.target.innerText == '力量') {
            str += 5;
        } else if (e.target.innerText == '智力') {
            int += 5;
        } else if (e.target.innerText == '幸運') {
            lcu += 5;
        } else if (e.target.innerText == '敏捷') {
            agi += 5;
        }
        // 4個變數帶入radar( , , , )
        radar(str, int, lcu, agi);
    } else {
        alert("技能點數不足");
    }
}

function radar(str, int, lcu, agi) {
    //定義變數
    var chartRadarDOM;
    var chartRadarData;
    var chartRadarOptions;

    //載入雷達圖
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)'; //字的顏色
    chartRadarDOM = document.getElementById("chartRadar");
    chartRadarData;
    chartRadarOptions =
        {
            scale:
            {
                ticks:
                {
                    fontSize: 16,
                    beginAtZero: true,
                    maxTicksLimit: 10,
                    min: 0,
                    max: 100
                },
                pointLabels:
                {
                    fontSize: 25,
                    color: '#0044BB'
                },
                gridLines:
                {
                    color: '#009FCC'
                }
            }
        };

    console.log("---------Rader Data--------");
    var graphData = new Array();
    graphData.push(str);
    graphData.push(int);
    graphData.push(lcu);
    graphData.push(agi);


    console.log("--------Rader Create-------------");
    console.log(graphData);

    //CreateData
    chartRadarData = {
        labels: ['力量', '智力', '幸運', '敏捷'],
        datasets: [{
            label: "Skill Level",
            backgroundColor: "rgba(17, 34, 51,0.8)",
            borderColor: "rgba(63,63,74,.8)",
            pointBackgroundColor: "rgba(63,63,74,1)",
            pointBorderColor: "rgba(0,0,0,0)",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(0,0,0,0.3)",
            pointBorderWidth: 5,
            data: graphData
        }]
    };

    //Draw
    var chartRadar = new Chart(chartRadarDOM, {
        type: 'radar',
        data: chartRadarData,
        options: chartRadarOptions
    });
}

function init() {
    radar(str, int, lcu, agi); //第一次呼叫radar,為了在loading頁面時radar出現
    for (var i = 0; i <= 3; i++) {
        document.getElementsByClassName('but')[i].onclick = addSkill;
    }
}
window.onload = init;