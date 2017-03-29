function Notebook() {
  this.notes = [];
};

Notebook.prototype.createNote = function(noteBody) {
  var note = new Note(noteBody);
  this.notes.push(note);
  return note;
};

Notebook.prototype.printNoteBodies = function() {
  return this.notes.map(function(note) {
    return note.body
  });
};
