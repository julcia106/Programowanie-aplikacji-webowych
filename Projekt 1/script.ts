let createRows: Function;
let computeData: Function;
let deleteRows: Function;

createRows= () => {

    let input = (<HTMLInputElement>document.getElementById("userInput")).value;
    
    for (let i = 0; i < parseInt(input); i++) {
        let input = document.createElement('input');
    
        input.id = 'input' + i;
        input.type = "number";
        input.className = "inputToCount";
    
        document.querySelector('div').appendChild(input);
    }

}

computeData = () => {

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

deleteRows=() => {

}


