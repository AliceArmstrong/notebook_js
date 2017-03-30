function Note(noteBody = ""){
  this.body = noteBody;
};

Note.prototype.abbr = function(char) {
  return this.body.substring(0, char) + "...";
};
