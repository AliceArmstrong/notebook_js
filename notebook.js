function Notebook() {
  this.notes = [];
};

Notebook.prototype.createNote = function(noteBody, date = new Date()) {
  var note = new Note(noteBody, date);
  this.notes.unshift(note);
  return note;
};

Notebook.prototype.printNoteAbbr = function() {
  return this.notes.map(function(note) {
    var listElement = document.createElement('li');
    listElement.id = note.id;
    listElement.setAttribute("onClick","toggleNoteView(this.id)")
    listElement.setAttribute("abbr","true")
    if (note.body == "[ 空白 ]") {
      listElement.className = "empty"
    }
    listElement.innerHTML = note.abbr();
    listElement.style.maxHeight= "18.4px";
    return listElement;
  });
};
