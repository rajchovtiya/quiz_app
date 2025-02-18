    let seknd = document.querySelector(`.timss`)
let bodys = document.querySelector(`.ss`)
let timsbox = document.querySelector(`.swkeds`)
let narxpage = document.querySelector(".nestpage")
const startBtn = document.querySelector('.nestpage');
const timerDisplay = document.querySelector('.timss');
const opsmain=document.querySelector(".opsmain")
const qusens2 = document.querySelector(".qusenboxs")

// for (currCode in quiz) {
// console.log(currCode)
// }
let countdown;
let timeRemaining = 30;

function startTimer() {
    if (countdown) {
        clearInterval(countdown);
    }

    timeRemaining = 30;
    timerDisplay.textContent = timeRemaining

    countdown = setInterval(function () {
        timeRemaining--;
        timerDisplay.textContent = timeRemaining;

        if (timeRemaining <= 31 && timeRemaining >= 15) {
            bodys.classList.add("ss")
            bodys.classList.remove("grrns")
            bodys.classList.remove("timscms")
            timsbox.classList.remove("grimcolors")
            timsbox.classList.remove("boxtimscolor")
            opsmain.style.opacity=1;
            qusens2.style.opacity=1

        }
        else if (timeRemaining <= 15 && timeRemaining >= 10) {
            bodys.classList.add("grrns")
            timsbox.classList.add("grimcolors")
            timsbox.classList.remove("boxtimscolor")
            opsmain.style.opacity=1;
            qusens2.style.opacity=1
        }
        else if (timeRemaining < 10 && timeRemaining > 0) {
            timerDisplay.textContent = `0${timeRemaining}`;
            bodys.classList.remove("grrns")
            bodys.classList.add("timscms")
            timsbox.classList.remove("grimcolors")
            timsbox.classList.add("boxtimscolor")
            opsmain.style.opacity=1;
            qusens2.style.opacity=1
        }
        else {
            clearInterval(countdown);
            timerDisplay.textContent = `00`
            opsmain.style.opacity=0.1;
            qusens2.style.opacity=0.1
        }
    }, 1000);
}
startTimer()
startBtn.addEventListener('click', startTimer);


const mySong = document.getElementById("mySong");
const lins = document.querySelector('.stops')
let songvwlyu = true
function songs() {
    if (songvwlyu == true) {
        mySong.play();
        songvwlyu = false
        lins.classList.remove("stops")

    } else {
        mySong.pause();
        songvwlyu = true
        lins.classList.add("stops")

    }
}


let itms = localStorage.getItem("opsns")
let siroson = bjsk = JSON.parse(itms)

let currentQuestion = 0;
let secors = 1;
let scrs = 0;

function qusentexts() {
    const qusens = document.querySelector(".qusenboxs p")
    const opsnss = document.querySelectorAll(".spansansr")
    const opsmain = document.querySelector(".opsmain")
    qusens.innerText = siroson[currentQuestion].question;

    opsmain.innerHTML = '';
    siroson[currentQuestion].options.forEach(option => {
        const opsns = document.createElement('div');
        opsns.classList.add("qusnbox")
        opsns.innerText = option;
        opsns.onclick = () => checkAnswer(option, opsns)
        opsmain.appendChild(opsns);
    });
}

function checkAnswer(selopsns, opsns) {
    const correctAnswer = siroson[currentQuestion].answer;
    console.log(correctAnswer)
    const butonslists = document.querySelectorAll(".qusnbox")
    butonslists.forEach((seknd) => {
        console.log(seknd)
    });
    if (selopsns == correctAnswer) {
        scrs++;
        localStorage.setItem("scros", scrs)
        opsns.classList.add("truess")

    } else {
        opsns.classList.add("falsess");
        butonslists.forEach((trfl) => {
            if (trfl.innerText == correctAnswer) {
                trfl.classList.add("truess")
            }
        })
        opsns.style.opacity=0.1;

    }


}
const nestpage = document.querySelector(".nestpage").addEventListener("click", () => {
    if (currentQuestion < siroson.length - 1) {
        currentQuestion++;
        qusentexts()
        skors()
        sckosbutons()
        secors++;
    }
})
function skors() {
    const qusnss = document.querySelector(".qusnss");
    if (secors < 10) {
        qusnss.innerText = '0' + secors
    } else {
        qusnss.innerText = secors

    }
}
function sckosbutons() {
    const btn = document.querySelector(".bitons")
    if (secors == 25) {
        btn.style.display = "block";

    }
}
qusentexts()
    
