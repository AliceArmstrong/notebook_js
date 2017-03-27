// TODO has a body
var note = new Note();

testNoteExistence = function() {
  if (typeof(note.body) === "undefined")
    throw new Error("testNoteExistence: Bad note");
  else {
    console.log("testNoteExistence: Pass");
    }
};
// can return an abbreviation of the body
try { testNoteExistence();
}

catch (error) {
  console.log(error)
  }
