

function createRows() {

    let input = (<HTMLInputElement>document.getElementById("userInput")).value;
    
    for (let i = 0; i < parseInt(input); i++) {
        let input = document.createElement('input');
    
        input.id = 'input' + i;
        input.type = "number";
        input.className = "inputToCount";
    
        document.querySelector('div').appendChild(input);
    }

}

function computeData(){

    let numbersInInputs = document.getElementsByClassName('inputToCount');
    let sum: number = 0;
    let test: string;
    let arr: number[] = [];
    
    for(let i =0; i < numbersInInputs.length; i++){
        
        test= (<HTMLInputElement>document.getElementById('input' + i)).value;
        arr.push(parseInt(test));
        sum += parseInt(test);
    }
    
    
    const min= Math.min(...arr);
    const max= Math.max(...arr);
    const avg: number = sum/numbersInInputs.length;

    (<HTMLInputElement>document.querySelector('#sum')).value = sum.toString();
    (<HTMLInputElement>document.querySelector('#avg')).value = avg.toString();
    (<HTMLInputElement>document.querySelector('#min')).value = min.toString();
    (<HTMLInputElement>document.querySelector('#max')).value = max.toString();
}

function deleteRows(){

}



// 2. var element = document.createElement('input') - i potem ustawiasz odpowiednio dla zmiennej element typ, 
// id, name itd. itp. a na koniec dodajesz do kontenera 
// poprzez document.getElementById('id_kontenera').appendChild(element).

