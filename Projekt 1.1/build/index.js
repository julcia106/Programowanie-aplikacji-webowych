var ProjectApp = /** @class */ (function () {
    function ProjectApp() {
        this.StartApp();
    }
    ProjectApp.prototype.StartApp = function () {
        this.GetInputs();
        this.WatchInputs();
        this.CalculateInputs();
    };
    ProjectApp.prototype.GetInputs = function () {
        this.UserInput = document.querySelector("#userInput");
        this.dynamicInputs = document.querySelector(".dynamicInputs");
        this.showResult = document.querySelector(".showResult");
    };
    ProjectApp.prototype.WatchInputs = function () {
        var _this = this;
        this.UserInput.addEventListener("input", function () { return _this.GetDate(); }); //arrow function (arguments) => return
    };
    ProjectApp.prototype.GetDate = function () {
        var numberOfInputs = +this.UserInput.value; //+ parsuje na number
        this.CreateElement(numberOfInputs);
    };
    ProjectApp.prototype.CreateElement = function (numberOfInputs) {
        var _this = this;
        var _loop_1 = function (i) {
            var divElement = document.createElement("div"), inputElement = document.createElement("input"), buttonElement = document.createElement("button"), labelElement = document.createElement("label");
            divElement.id = "data" + i;
            inputElement.classList.add("input-data");
            labelElement.innerHTML = "Field:" + i;
            buttonElement.innerText = "Remove";
            this_1.dynamicInputs.appendChild(divElement);
            divElement.appendChild(inputElement);
            divElement.appendChild(buttonElement);
            inputElement.addEventListener("input", function () { return _this.ShowData(inputElement.value); });
            buttonElement.addEventListener("click", function () { return _this.RemoveElement(i); });
        };
        var this_1 = this;
        for (var i = 0; i < numberOfInputs; i++) {
            _loop_1(i);
        }
        if (numberOfInputs == 0) {
            var elements = document.querySelectorAll(".dynamicInputs > div");
            elements.forEach(function (element) {
                element.parentNode.removeChild(element);
            });
        }
    };
    ProjectApp.prototype.CalculateInputs = function () {
        var sumInput = document.createElement("input"), sumLabel = document.createElement("label"), avgInput = document.createElement("input"), avgLabel = document.createElement("label"), minInput = document.createElement("input"), minLabel = document.createElement("label"), maxInput = document.createElement("input"), maxLabel = document.createElement("label");
        sumLabel.innerHTML = "Sum:";
        avgLabel.innerHTML = "Avg:";
        minLabel.innerHTML = "Min:";
        maxLabel.innerHTML = "Max:";
        sumInput.id = "sum";
        avgInput.id = "avg";
        minInput.id = "min";
        maxInput.id = "max";
        this.showResult.appendChild(sumLabel);
        this.showResult.appendChild(sumInput);
        this.showResult.appendChild(avgLabel);
        this.showResult.appendChild(avgInput);
        this.showResult.appendChild(minLabel);
        this.showResult.appendChild(minInput);
        this.showResult.appendChild(maxLabel);
        this.showResult.appendChild(maxInput);
    };
    ProjectApp.prototype.RemoveElement = function (input) {
        var element = document.querySelector("#data" + input);
        element.parentNode.removeChild(element);
    };
    ProjectApp.prototype.ShowData = function (inputValues) {
        var inputList = document.querySelectorAll(".input-data");
        var numberList = [];
        inputList.forEach(function (element) {
            numberList.push(+element.value);
        });
        var min = Math.min.apply(Math, numberList);
        var max = Math.max.apply(Math, numberList);
        var avg = numberList.reduce(function (a, b) { return a + b; }, 0) / numberList.length;
        var sum = numberList.reduce(function (a, b) { return a + b; }, 0);
        var text = "Only numbers";
        this.sumData = document.querySelector("#sum");
        this.avgData = document.querySelector("#avg");
        this.minData = document.querySelector("#min");
        this.maxData = document.querySelector("#max");
        if (isNaN(inputValues)) {
            this.sumData.value = text;
            this.avgData.value = text;
            this.minData.value = text;
            this.maxData.value = text;
        }
        else {
            this.sumData.value = sum.toString();
            this.avgData.value = avg.toString();
            this.minData.value = min.toString();
            this.maxData.value = max.toString();
        }
    };
    return ProjectApp;
}());
var projectApp = new ProjectApp();
