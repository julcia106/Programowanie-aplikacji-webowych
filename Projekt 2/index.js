var kickSound;
var channel1 = [];
appStart();
function appStart() {
    window.addEventListener('keypress', onKeyDown);
    var btnPlayChannel1 = document.querySelector('#playChannel');
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    getAudioTags();
}
function onPlayChannel1() {
}
function getAudioTags() {
    kickSound = document.querySelector('[data-sound= "kick"]');
}
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push({ key: key, time: time });
    playSound(key);
    console.log(channel1);
}
function playSound(key) {
}
