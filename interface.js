var notebook = new Notebook();

function saveNote(){
  notebook.createNote(document.getElementById('content').value);
  // console.log(notebook.notes);
  showNotes();
}

function showNotes(){
  var notesList = document.getElementById('list-of-notes');
  notesList.innerHTML = "";
  notebook.printNoteBodies().forEach(function(element){
    notesList.appendChild(element);
  });
}
