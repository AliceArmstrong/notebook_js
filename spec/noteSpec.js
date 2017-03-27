// TODO has a body

var note = new Note();

// can return an abbreviation of the body

try {
  new Wish("Note Body Exists", note.body).isDefined();
  new Wish("Note Body is an empty string", note.body).isEmptyString();
}
catch(error) {var foo = error; console.log(error)}
