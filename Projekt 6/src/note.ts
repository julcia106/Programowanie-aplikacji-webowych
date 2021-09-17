import { Notes } from "./notes"
const notes = new Notes();

export class Note {
    
    createBox(data: any, localStorageName: string) {

        const title = data.title;
        const description = data.description;
        const noteColor = data.color;
        const dateNow = data.date;
        const weaterBox = document.querySelector(".city");
        const divElement = document.createElement("div");
        const deleteButton = document.createElement("button")

        deleteButton.addEventListener("click", function () {
            divElement.parentElement.removeChild(divElement)
            localStorage.removeItem(localStorageName);
        })
        const buttonElementPin = document.createElement("button")
        buttonElementPin.addEventListener("click", function () {
            divElement.classList.add("pinned")
            notes.changeOrder();
        })
        deleteButton.innerText = "X";
        //buttonElementPin.innerText = "✔";
        divElement.classList.add("note");
        divElement.style.backgroundColor = noteColor;
        this.createDate(divElement, dateNow)
        this.createTitle(divElement, title)
        this.createDescription(divElement, description)        
        weaterBox.appendChild(divElement)
        divElement.appendChild(deleteButton)
        //divElement.appendChild(buttonElementPin)
    }

    createTitle(elem: HTMLDivElement, title: string) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("note-title");
        spanElement.innerText = title;
        elem.appendChild(spanElement)
    }
    createDescription(elem: HTMLDivElement, weatherType: string) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("note-description");
        spanElement.innerHTML = weatherType
        elem.appendChild(spanElement)
    }
    createDate(elem: HTMLDivElement, weatherType: string) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("note-date");
        spanElement.innerHTML = weatherType
        elem.appendChild(spanElement)
    }

}