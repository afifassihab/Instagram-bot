// const waktu = [120000, 130000, 140000, 150000, 160000, 170000, 180000, 190000, 200000]
let intervals = [5000, 1000, 2000, 3000, 4000, 5000, 6000];

var followButtons = document.getElementsByTagName("button");

function clickFollow() {
    for (let i = 0; i < followButtons.length; i++) {
        if (followButtons[i].textContent === "Follow") {
            followButtons[i].click();
            break;
        }
    }
}

var initialLoop = 1;
var totalLoop = 2;

function loopFollow() {
    setTimeout(function () {
        clickFollow();
        initialLoop++;
        if (initialLoop <= totalLoop) {
            loopFollow();
        }
    }, intervals[Math.floor(Math.random() * intervals.length)]);
}
loopFollow();
