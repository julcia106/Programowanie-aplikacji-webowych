class ProjectApp {

    public UserInput: HTMLInputElement;
    public dynamicInputs: HTMLDivElement;
    public showResult: HTMLDivElement;

    public sumData: HTMLInputElement;
    public avgData: HTMLInputElement;
    public minData: HTMLInputElement;
    public maxData: HTMLInputElement;

    constructor() {
        this.StartApp();
    }

    public StartApp(): void {
        this.GetInputs();
        this.WatchInputs();
        this.CalculateInputs();
    }

    public GetInputs(): void {
        this.UserInput = document.querySelector("#userInput");
        this.dynamicInputs = document.querySelector(".dynamicInputs");
        this.showResult = document.querySelector(".showResult")
    }

    public WatchInputs():void {
        this.UserInput.addEventListener("input", () => this.GetDate()) //arrow function (arguments) => return
    }

    public GetDate(): void {
        const numberOfInputs = +this.UserInput.value; //+ parsuje na number
        this.CreateElement(numberOfInputs);
    }

    public CreateElement(numberOfInputs:number): void {

        for (let i = 0; i < numberOfInputs; i++) {

            const divElement = document.createElement("div"),
                inputElement = document.createElement("input"),
                buttonElement = document.createElement("button"),
                labelElement = document.createElement("label");

            divElement.id = "data" + i;
            inputElement.classList.add("input-data");
            labelElement.innerHTML = "Field:" + i;
            buttonElement.innerText = "Remove";
            this.dynamicInputs.appendChild(divElement)
            divElement.appendChild(inputElement);
            divElement.appendChild(buttonElement);
            inputElement.addEventListener("input", () => this.ShowData(inputElement.value));
            buttonElement.addEventListener("click", () => this.RemoveElement(i))

        }
        
        if (numberOfInputs == 0) {
            let elements = document.querySelectorAll(".dynamicInputs > div");
            elements.forEach(element => {
                element.parentNode.removeChild(element);
            });
        }
    }

    public CalculateInputs():void {

        const sumInput = document.createElement("input"),
            sumLabel = document.createElement("label"),

            avgInput = document.createElement("input"),
            avgLabel = document.createElement("label"),

            minInput = document.createElement("input"),
            minLabel = document.createElement("label"),

            maxInput = document.createElement("input"),
            maxLabel = document.createElement("label");

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
    }


    public RemoveElement(input: number): void {
        const element = document.querySelector("#data" + input);
        element.parentNode.removeChild(element);
    }

    public ShowData(inputValues:any): void {

        let inputList: NodeListOf<HTMLInputElement> = document.querySelectorAll(".input-data");
        let numberList: Array<number> = [];
        inputList.forEach(element => {
            numberList.push(+element.value)
        });
        const min = Math.min(...numberList);
        const max = Math.max(...numberList);
        const avg = numberList.reduce((a, b) => a + b, 0) / numberList.length;
        const sum = numberList.reduce((a, b) => a + b, 0);
        const text = "Only numbers";

        this.sumData = document.querySelector("#sum");
        this.avgData = document.querySelector("#avg");
        this.minData = document.querySelector("#min");
        this.maxData = document.querySelector("#max");


        if (isNaN(inputValues)) {
            this.sumData.value = text;
            this.avgData.value = text;
            this.minData.value = text;
            this.maxData.value = text;
        } else {
            this.sumData.value = sum.toString();
            this.avgData.value = avg.toString();
            this.minData.value = min.toString();
            this.maxData.value = max.toString();
        }

    }
}

let projectApp = new ProjectApp();