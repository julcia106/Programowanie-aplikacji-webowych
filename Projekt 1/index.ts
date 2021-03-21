class StatsApp{
    data1Input: HTMLInputElement;
    data2Input: HTMLInputElement;
    data3Input: HTMLInputElement;
    data4Input: HTMLInputElement;

    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;

    constructor(){ // zasada- konstruktory trzymać możliwie czyste, dlatego istnieje metoda startApp()
        this.startApp();
    }

    startApp(){
        this.getInputs(); //pobiera wszystkie elementy z htmla i przypisuje do właściwości klasy
        this.watchInputValues();
    }

    getInputs(){
        this.data1Input = document.querySelector('#data1'); // te dane można wydzielić do tablicy
        this.data2Input = document.querySelector('#data2');
        this.data3Input = document.querySelector('#data3');
        this.data4Input = document.querySelector('#data4');

        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }

    watchInputValues(){
        this.data1Input.addEventListener('input', () => this.computeData()); // z tego można zrobić pętlę
        this.data2Input.addEventListener('input', () => this.computeData());
        this.data3Input.addEventListener('input', () => this.computeData());
        this.data4Input.addEventListener('input', () => this.computeData());
    }

    computeData(){
        const data1= +this.data1Input.value; // +zmienia na number
        const data2= +this.data2Input.value;
        const data3= +this.data3Input.value;
        const data4= +this.data4Input.value;

        const sum = data1 + data2 + data3 + data4;
        const avg = sum /4; //udoskonalić - do właściwości czy stałej
        const min = Math.min(data1, data2, data3, data4);
        const max = Math.min(data1, data2, data3, data4);

        this.showStats(sum, avg,min, max);
    }

    showStats(sum: number, avg: number, min: number, max: number){
        this.sumInput.value = sum.toString(); //sum+
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }
}

const statsApp = new StatsApp();