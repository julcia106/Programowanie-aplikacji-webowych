var Drumkit = /** @class */ (function () {
    function Drumkit() {
    }
    Drumkit.prototype.playSound = function (ev) {
        var audio = document.querySelector("audio[data-key=\"" + ev.keyCode + "\"]");
        var key = document.querySelector(".key[data-key=\"" + ev.keyCode + "\"]");
        if (!audio)
            return; //stop the function from running all together
        audio.currentTime = 0; //rewind to the start
        audio.play();
        key.classList.add('playing');
    };
    Drumkit.prototype.removeTransition = function (e) {
        if (e.propertyName !== 'transform')
            return; //skip it if it's not a transform
        console.log(e.propertyName);
        e.classList.remove('playing');
    };
    return Drumkit;
}());
var keys = document.querySelectorAll('.key');
keys.forEach(function (key) { return key.addEventListener('transitionend', removeTransition); });
window.addEventListener('keydown', playSound);
