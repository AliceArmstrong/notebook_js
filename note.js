var Note = (function() {
  var incrementedId = 1;
  return function Note(noteBody = "[ 空白 ]", date = new Date()){
    this.body = noteBody;
    this.id = "note" + incrementedId++;
    this.createdAt = date;
  }
})();

Note.prototype.abbr = function(char = 30) {
  var noteBodyLength = this.body.length
  var truncatedNoteBody = this.body.substring(0, char);
  var optionalEllipsis = (function () {
    if (noteBodyLength > truncatedNoteBody.length) {
      return " . . ."
    } else {
      return ""
    }
  })();
  return truncatedNoteBody + optionalEllipsis;
};

Note.prototype.getFormattedDate = function () {
  return (this.createdAt.getHours() + ":" + (this.createdAt.getMinutes() < 10 ? "0" + this.createdAt.getMinutes() : this.createdAt.getMinutes()) + " ")
};
