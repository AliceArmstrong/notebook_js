var Note = (function() {
  var incrementedId = 1;
  return function Note(noteBody = ""){
    this.body = noteBody;
    this.id = "note" + incrementedId++;
    this.createdAt = new Date();
  }
})();

Note.prototype.abbr = function(char) {
  return this.getFormattedDate() + this.body.substring(0, char) + "...";
};

Note.prototype.getFormattedDate = function () {
  return (this.createdAt.getHours() + ":" + this.createdAt.getMinutes() + " ")
};
