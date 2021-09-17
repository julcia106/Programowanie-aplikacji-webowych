import { Note } from './note'
import { Notes } from "./notes"
import { AppStorage } from './appStorage';

const note = new Note();
const notes = new Notes();

export class App {
    
    btnAdd: HTMLButtonElement;
    titleInput: HTMLInputElement;
    descriptionInput: HTMLInputElement;
    selectorInput: HTMLSelectElement;
    data: string;
    addedData: string;

    constructor() {
        this.getInput();
        this.getData();
    }

    getData() {
        let keys = Object.keys(localStorage).length - 1;
        if (keys > 0) {
            for (let i = 0; i < keys; i++) {
                const data = localStorage.getItem('Note' + i);
                const localStorageName = 'Note' + i;
                const parseData = JSON.parse(data);
                note.createBox(parseData, localStorageName)
                notes.changeOrder();
            }
        } else {
            return {};
        }
    }

    getInput() {
        this.btnAdd = document.querySelector(".btn-add")
        this.titleInput = document.querySelector("#titleInput");
        this.descriptionInput = document.querySelector("#descriptionInput");
        this.selectorInput = document.querySelector("#color");
        const now = new Date();
        this.addedData = `${now.getHours()}:${now.getMinutes()} ${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`
        this.btnAdd.addEventListener("click", () => this.showData());
    }

    showData() {
        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        const color = this.selectorInput.value;
        const date = this.addedData;
        const appStorage = new AppStorage(title,description,color,date)
        notes.changeOrder();
    }

}