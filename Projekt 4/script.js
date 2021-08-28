const noteListDiv = document.querySelector(".note-list");
let noteID = 1;
function Note(id, title, content){
  this.id = id;
  this.title = title;
  this.content = content;
}

// Add eventListeners 
function eventListeners(){
    document.addEventListener("DOMContentLoaded", displayNotes);
    document.getElementById("add-note-btn").addEventListener("click", addNewNote); 
    
    noteListDiv.addEventListener("click", deleteNote);
    
   document.getElementById("delete-all-btn").addEventListener("click", deleteAllNotes);
   
  }
  eventListeners();


  // get item from storage 
  function getDataFromStorage(){
    return localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];
  }


// add new note to the list
function addNewNote(){
  const noteTitle = document.getElementById("note-title");
  const noteContent = document.getElementById("note-content");
  
  if(validateInput(noteTitle, noteContent)){
    let notes = getDataFromStorage();
    
    let noteItem = new Note(noteID, noteTitle.value, noteContent.value);
    noteID++;
    notes.push(noteItem);
    createNote(noteItem);
    
    // saving in the local storage 
    localStorage.setItem("notes", JSON.stringify(notes));
    noteTitle.value = "";
    noteContent.value = "";
  }
  
}

// input validation
function validateInput(title, content){
    if(title.value !== "" && content.value !== ""){
      return true;
    }else {
      if(title.value === "") title.classList.add("warning");
      if(content.value === "") content.classList.add("warning");
    }
    setTimeout(() => {
      title.classList.remove("warning");
      content.classList.remove("warning");
      
    }, 1600);
  }
  

// create a new note div
function createNote(noteItem){
    const div = document.createElement("div");
    div.classList.add("note-item");
    div.setAttribute("data-id", noteItem.id);
    div.innerHTML = `
          <h3>${noteItem.title}</h3>
          <p>${noteItem.content}</p>
          <button type = "button" class = "btn delete-note-btn">
          <span><i class = "fas fa-trash"></i></span>
          Delete
          </buttton>
    `;
    noteListDiv.appendChild(div);
  }

// display all notes from local storage
function displayNotes(){
    let notes = getDataFromStorage();
    if(notes.length > 0) {
      noteID = notes[notes.length - 1].id;
      noteID++;
    }else {
      noteID = 1;
    }
    notes.forEach(item => {
      createNote(item);
    });
  }

// delete note
function deleteNote(e){
    if (e.target.classList.contains("delete-note-btn")) {
      
      e.target.parentElement.remove();
      let divID = e.target.parentElement.dataset.id;
      let notes = getDataFromStorage();
      let newNotesList = notes.filter(item => {
        return item.id !== parseInt(divID);
      });
      localStorage.setItem("notes", JSON.stringify(newNotesList));
    }
  }

// delete all notes 
function deleteAllNotes(){
    localStorage.removeItem("notes");
    let noteList = document.querySelectorAll(".note-item");
    if(noteList.length > 0){
      noteList.forEach(item => {
        noteListDiv.removeChild(item);
      });
    }
    noteID = 1 //resetting noteID to 1
  }

  const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', 
    default: '#ffdfff',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input: true,
        }
    }
});

pickr.on('change', (color, source, instance) => {
  const rgbaColor = color.toRGBA().toString();
  document.querySelector('.note-item').style.background = rgbaColor;
});

$(document).ready(function() {
  $('.note-item').append(
      $('<div>').prop({
          id: 'innerdiv',
      })
  );
});