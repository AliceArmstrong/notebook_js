var notebook = new Notebook();

function saveNote(){
  notebook.createNote(document.getElementById('content').value);
  document.getElementById('content').value = ""
  showNotes();
}

function showNotes(){
  var notesList = document.getElementById('list-of-notes');
  notesList.innerHTML = "";
  notebook.printNoteAbbr().forEach(function(element){
    notesList.appendChild(element);
  });
}

function toggleNoteView(noteId){
  var noteLi = document.getElementById(noteId);
  var thisNote = notebook.notes.filter(function(note){return note.id == noteId})[0];
  if (noteLi.getAttribute("abbr") === "true") {
    noteLi.innerHTML = thisNote.body;
    noteLi.setAttribute("abbr","false");
  }
  else {
    noteLi.innerHTML = thisNote.abbr(20);
    noteLi.setAttribute("abbr","true");
  }
}
