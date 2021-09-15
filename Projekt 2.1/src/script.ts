
class Drumkit{
    
    constructor(){
        this.appStart();
    }
    appStart() : void {
        this.playSound(??);
        this.removeTransition(??);
    }

    public playSound(ev:KeyboardEvent): void {
        
        const audio = <HTMLAudioElement>document.querySelector(`audio[data-key="${ev.keyCode}"]`);
        const key = <HTMLAudioElement>document.querySelector(`.key[data-key="${ev.keyCode}"]`);
        if(!audio) return; //stop the function from running all together
        audio.currentTime = 0; //rewind to the start
        audio.play();
        key.classList.add('playing'); 
    }

    public removeTransition(e){
        if(e.propertyName!== 'transform') return; //skip it if it's not a transform
        console.log(e.propertyName);
        this.classList.remove('playing');
    }
}



const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);