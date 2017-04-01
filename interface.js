var notebook = new Notebook();

function setCookie(name, value) {
  var data = [name, '=', JSON.stringify(value), ';'].join('');
  document.cookie = data;
}

function getCookie(name) {
  var cookie = document.cookie.match(new RegExp(name + '=([^;]+)'));
  cookie && (cookie = JSON.parse(cookie[1]));
  return cookie;
}

function importCookieToNotes() {
  var notesArr = getCookie('notes');
  if (notesArr) {
    notesArr.reverse().forEach(function(obj){
    notebook.createNote(obj.body, new Date(Date.parse(obj.createdAt)));
  });}
}

function getNoteFromId(noteId){
  return notebook.notes.filter(function(note){return note.id == noteId})[0];
}

function saveNote(){
  var notebody = document.getElementById('content').textContent
  if (notebody == "") {
    notebook.createNote()
  } else {
    notebook.createNote(notebody);
  }
  document.getElementById('content').textContent = ""
  showNotes();
}

function showNotes(){
  var notesList = document.getElementById('list-of-notes');
  notesList.innerHTML = "";
  notebook.printNoteAbbr().forEach(function(element){
    notesList.appendChild(element);
    var thisNote = getNoteFromId(element.id)
    var listTimeElement = document.createElement('span');
    listTimeElement.className = 'time'
    listTimeElement.innerHTML = thisNote.getFormattedDate();
    element.insertBefore(listTimeElement, element.firstChild);
  });
  setCookie('notes', notebook.notes);
}

function toggleNoteView(noteId){
  var noteLi = document.getElementById(noteId);
  var thisNote = getNoteFromId(noteId)
  if (noteLi.getAttribute("abbr") === "true") {
    noteLi.childNodes[1].textContent = thisNote.body
    noteLi.style.maxHeight= "9001px";
    setTimeout(function(){
      noteLi.setAttribute("abbr","false");
    },500);
  }
  else {
    noteLi.style.maxHeight= "18.4px";
    setTimeout(function(){
      noteLi.childNodes[1].textContent = thisNote.abbr();
      noteLi.setAttribute("abbr","true");
    },1000);
  }
}

function showNotesFromCookie() {
  importCookieToNotes();
  showNotes();
};

document.addEventListener('DOMContentLoaded', showNotesFromCookie, false);
