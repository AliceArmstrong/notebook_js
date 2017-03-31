function Notebook() {
  this.notes = [];
};

Notebook.prototype.createNote = function(noteBody) {
  var note = new Note(noteBody);
  this.notes.unshift(note);
  return note;
};

Notebook.prototype.printNoteAbbr = function() {
  return this.notes.map(function(note) {
    var listElement = document.createElement('li');
    listElement.id = note.id;
    listElement.setAttribute("onClick","toggleNoteView(this.id)")
    listElement.setAttribute("abbr","true")
    listElement.innerHTML = note.abbr(20);
    listElement.style.maxHeight= "18.4px";
    return listElement;
  });
};
