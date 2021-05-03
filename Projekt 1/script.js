function createRows() {
    var input = document.getElementById("userInput").value;
    for (var i = 0; i < parseInt(input); i++) {
        var input_1 = document.createElement('input');
        input_1.id = 'input' + i;
        input_1.type = "number";
        input_1.className = "inputToCount";
        document.querySelector('div').appendChild(input_1);
    }
}
function computeData() {
    var numbersInInputs = document.getElementsByClassName('inputToCount');
    var sum = 0;
    var test;
    var arr = [];
    for (var i = 0; i < numbersInInputs.length; i++) {
        test = document.getElementById('input' + i).value;
        arr.push(parseInt(test));
        sum += parseInt(test);
    }
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    var avg = sum / numbersInInputs.length;
    document.querySelector('#sum').value = sum.toString();
    document.querySelector('#avg').value = avg.toString();
    document.querySelector('#min').value = min.toString();
    document.querySelector('#max').value = max.toString();
}
function deleteRows() {
}