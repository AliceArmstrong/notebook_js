var note = new Note();

  new Wish("Note Body Exists", note.body).isDefined();
  new Wish("Note Body is by default an empty string", note.body).isEmptyString();
  new Wish("Note Body can be given when creating a new note", new Note("i am the body").body).isEqualTo("i am the body");
  var time = new Date();
  freezeTime(time);
  var longnote = new Note("This is a long note");
  new Wish("Note displays abbreviated version", longnote.abbr(5)).isEqualTo(time.getHours() + ":" + time.getMinutes() + " This ...");
  new Wish("Note has a Date createdAt property", new Note("Testing the dateTime").createdAt).isType("Date");
  new Wish("Note can return the correct dateTime it was created at", new Note("Testing the dateTime").createdAt).isEqualTo(time);
  unfreezeTime();
