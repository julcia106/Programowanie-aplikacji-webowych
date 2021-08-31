function playSound(ev) {
    var audio = document.querySelector("audio[data-key=\"" + ev.keyCode + "\"]");
    var key = document.querySelector(".key[data-key=\"" + ev.keyCode + "\"]");
    if (!audio)
        return; //stop the function from running all together
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return; //skip it if it's not a transform
    console.log(e.propertyName);
    this.classList.remove('playing');
}
var keys = document.querySelectorAll('.key');
keys.forEach(function (key) { return key.addEventListener('transitionend', removeTransition); });
window.addEventListener('keydown', playSound);

//kanał- tablica gdzie przechowam sobie co kliknęłam i kiedy

class RecordData {     key: string;     //t... autorstwa Kozioł Dominik

    class RecordData {
        key: string;
        //timeFromWebsiteInit: Is timestamp, which contains value how many miliseconds pass from website init
        timeFromWebsiteInit: number;
        //timeFromPreviousSong: Is time, which passed since previous sound (pattern: timeFromWebsiteInit[i] - timeFromWebsiteInit[i - 1] + timeFromPreviousSong[i - 1])
        timeFromPreviousSong: number;
    }

setTimeout(() => this.playSound(element.key), element.timeFromPreviousSong)

public playChanel(chanelNumber: number): void {
    if (this.chanelNumber) {
        this.chanelDictionary[chanelNumber].forEach(element => {
            setTimeout(() => this.playSound(element.key), element.timeFromPreviousSong)
        });
    }
}
