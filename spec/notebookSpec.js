// TODO create a note and see that it's created

// before each would be ideal here
var notebook = new Notebook();

new Wish("Notebook is defined", notebook).isDefined();
new Wish("Notebook has an array", notebook.notes).isType("Array")
new Wish("Notebook can create a note", notebook.createNote()).isType("Note")
new Wish("Notebook creates a note with some text", notebook.createNote("I am the eggman, I am the walrus").body).isEqualTo("I am the eggman, I am the walrus")
new Wish("Notebook can give us a list of notes", notebook.notes[0]).isType("Note");
new Wish("Notebook can write out a list of note abbreviations", notebook.printNoteAbbr()[0].innerHTML).isEqualTo("I am the eggman, I a...");
new Wish("Notebook's abbreviation html elements have ids", notebook.printNoteAbbr()[0].id).isEqualTo("note5");
//expect noteArr to contain note

// TODO can list the notes

// can display an individual note
