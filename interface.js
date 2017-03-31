var notebook = new Notebook();

function saveNote(){
  notebook.createNote(document.getElementById('content').textContent);
  document.getElementById('content').textContent = ""
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
    noteLi.style.maxHeight= "9001px";
  }
  else {
    noteLi.innerHTML = thisNote.abbr(20);
    noteLi.setAttribute("abbr","true");
    noteLi.style.maxHeight= "18.4px";
  }
}
