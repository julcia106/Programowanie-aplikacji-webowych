var clapSound;
var boomSound;
var hihatSound;
var kickSound;
var openhatSound;
var rideSound;
var snareSound;
var tinkSound;
var tomSound;
var btnRecordChannel = document.querySelectorAll(".recordChannel button");
var btnPlayChannel = document.querySelectorAll(".playchannel button");
var btnTimer1 = document.querySelector(".timer1");
var btnTimer2 = document.querySelector(".timer2");
var btnTimer3 = document.querySelector(".timer3");
var channel1 = [];
var channel2 = [];
var channel3 = [];
var channel4 = [];
var recordTime1;
var recordTime2;
var recordTime3;
var recordTime4;
var recordingChannel;
var timer;
appStart();
function appStart() {
    var _loop_1 = function (i) {
        btnRecordChannel[i].addEventListener("click", function () {
            recordChannel1(i + 1);
            record;
            this.classList.add("active");
            setTimeout(function () {
                btnRecordChannel[i].classList.remove("active");
            }, timer);
        });
        btnRecordChannel[i].addEventListener("click", record);
    };
    for (var i = 0; i < btnRecordChannel.length; i++) {
        _loop_1(i);
    }
    getAudioTags();
    setTimer();
}
function setTimer() {
    timer = 3000;
    removeActive();
    btnTimer1.classList.add("active");
    btnTimer1.addEventListener("click", function () {
        timer = 3000;
        removeActive();
        this.classList.add("active");
    });
    btnTimer2.addEventListener("click", function () {
        timer = 6000;
        removeActive();
        this.classList.add("active");
    });
    btnTimer3.addEventListener("click", function () {
        timer = 10000;
        removeActive();
        this.classList.add("active");
    });
}
function removeActive() {
    var btnTimer = document.querySelectorAll(".timer button");
    btnTimer.forEach(function (element) {
        element.classList.remove("active");
    });
}
function onPlayChannel1(elem) {
    if (elem == 1) {
        channel1.forEach(function (sound) {
            setTimeout(function () { return playSound(sound.key); }, sound.time);
        });
    }
    else if (elem == 2) {
        channel2.forEach(function (sound) {
            setTimeout(function () { return playSound(sound.key); }, sound.time);
        });
    }
    else if (elem == 3) {
        channel3.forEach(function (sound) {
            setTimeout(function () { return playSound(sound.key); }, sound.time);
        });
    }
    else if (elem == 4) {
        channel4.forEach(function (sound) {
            setTimeout(function () { return playSound(sound.key); }, sound.time);
        });
    }
}
function record(ev) {
    if (recordingChannel == 1) {
        recordTime1 = ev.timeStamp;
        channel1.length = 0;
    }
    else if (recordingChannel == 2) {
        recordTime2 = ev.timeStamp;
        channel2.length = 0;
    }
    else if (recordingChannel == 3) {
        recordTime3 = ev.timeStamp;
        channel3.length = 0;
    }
    else if (recordingChannel == 4) {
        recordTime4 = ev.timeStamp;
        channel4.length = 0;
    }
}
function onKeyDown(ev, elem) {
    var key = ev.key;
    if (recordingChannel == 1) {
        var time = ev.timeStamp - recordTime1;
        channel1.push({ key: key, time: time });
    }
    else if (recordingChannel == 2) {
        var time = ev.timeStamp - recordTime2;
        channel2.push({ key: key, time: time });
    }
    else if (recordingChannel == 3) {
        var time = ev.timeStamp - recordTime3;
        channel3.push({ key: key, time: time });
    }
    else if (recordingChannel == 4) {
        var time = ev.timeStamp - recordTime4;
        channel4.push({ key: key, time: time });
    }
    playSound(key);
}
function recordChannel1(elem) {
    recordingChannel = elem;
    window.addEventListener("keypress", onKey);
    setTimeout(function () {
        window.removeEventListener("keypress", onKey);
    }, timer);
    var recordingChannel2 = "#playChannel" + elem;
    var btnPlayChannel = document.querySelector(recordingChannel2);
    btnPlayChannel.addEventListener("click", function () {
        onPlayChannel1(elem);
    });
    function onKey(ev) {
        onKeyDown(ev, elem);
    }
}
function getAudioTags() {
    clapSound = document.querySelector('[data-audio="clap"]');
    boomSound = document.querySelector('[data-audio="boom"]');
    hihatSound = document.querySelector('[data-audio="hihat"]');
    kickSound = document.querySelector('[data-audio="kick"]');
    openhatSound = document.querySelector('[data-audio="openhat"]');
    snareSound = document.querySelector('[data-audio="snare"]');
    rideSound = document.querySelector('[data-audio="ride"]');
    tinkSound = document.querySelector('[data-audio="tink"]');
    tomSound = document.querySelector('[data-audio="tom"]');
}
function playSound(key) {
    switch (key) {
        case "a":
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case "s":
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case "d":
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case "f":
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case "g":
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case "h":
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case "j":
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case "k":
            tomSound.currentTime = 0;
            tomSound.play();
            break;
    }
}
