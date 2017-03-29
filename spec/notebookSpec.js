// TODO create a note and see that it's created

// before each would be ideal here
var notebook = new Notebook();
var exampleNote = new Note();

new Wish("Notebook is defined", notebook).isDefined();
new Wish("Notebook has an array", notebook.notes).isType(Array())
new Wish("Notebook can create a note", notebook.createNote()).isType(exampleNote)
new Wish("Notebook creates a note with some text", notebook.createNote("i am the walrus").body).isEqualTo("i am the walrus")
new Wish("Notebook can give us a list of notes", notebook.notes[0]).isType(exampleNote);
new Wish("Notebook can write out a list of note bodies", notebook.printNoteBodies()[0].innerHTML).isEqualTo("i am the walrus");
//expect noteArr to contain note

// TODO can list the notes

// can display an individual note
