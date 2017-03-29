function Notebook() {
  this.notes = [];
};

Notebook.prototype.createNote = function(noteBody) {
  var note = new Note(noteBody);
  this.notes.unshift(note);
  return note;
};

Notebook.prototype.printNoteBodies = function() {
  return this.notes.map(function(note) {
    var listElement = document.createElement('li');
    listElement.innerHTML = note.body;
    return listElement;
  });
};
