// TODO has a body

var note = new Note();

// can return an abbreviation of the body

  new Wish("Note Body Exists", note.body).isDefined();
  new Wish("Note Body is by default an empty string", note.body).isEmptyString();
  new Wish("Note Body can be given when creating a new note", new Note("i am the body").body).isEqualTo("i am the body");
