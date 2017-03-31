var Note = (function() {
  var incrementedId = 1;
  return function Note(noteBody = ""){
    this.body = noteBody;
    this.id = "note" + incrementedId++;
  }
})();

Note.prototype.abbr = function(char) {
  return this.body.substring(0, char) + "...";
};
