let kickSound: HTMLAudioElement

const channel1: any[] = [];
appStart();

function appStart(): void {
    window.addEventListener('keypress', onKeyDown);
    const btnPlayChannel1 = document.querySelector('#playChannel');
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    getAudioTags();
}

function onPlayChannel1(): void{

}

function getAudioTags() {
    kickSound = document.querySelector('[data-sound= "kick"]');
}

function onKeyDown(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;
    channel1.push({key, time})
    playSound(key);
    console.log(channel1);
}

function playSound(key: string){
    
}
