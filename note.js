function Note(noteBody = ""){
  this.body = noteBody;
  this.createdAt = new Date();
};

Note.prototype.abbr = function(char) {
  return this.getFormattedDate() + this.body.substring(0, char) + "...";
};

Note.prototype.getFormattedDate = function () {
  return (this.createdAt.getHours() + ":" + this.createdAt.getMinutes() + " ")
};
