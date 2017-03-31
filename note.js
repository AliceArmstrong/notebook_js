function Note(noteBody = ""){
  this.body = noteBody;
  this.createdAt = new Date();
};

Note.prototype.abbr = function(char) {
  return this.body.substring(0, char) + "...";
};
