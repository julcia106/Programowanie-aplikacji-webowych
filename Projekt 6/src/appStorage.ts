import { Note } from './note'
const note = new Note();

interface IAppStorage {
    title: String;
    description: String;
    color: string
    date: string
}

export class AppStorage implements IAppStorage {
    title: String;
    description: String;
    color: string
    date: string

    constructor(title: string, description: string, color: string, date: string){
        this.saveData(title, description, color, date)
    }

    saveData(title: string, description: string, color: string, date: string) {
        let keys = Object.keys(localStorage).length - 1;
        let json = JSON.stringify({ title, description, color, date });
        localStorage.setItem('Note' + keys, json);
        const parseData = JSON.parse(json);
        note.createBox(parseData, 'Note' + keys)
    }
}