// TODO create a note and see that it's created

//before each:
var notebook = new Notebook();

// expect notebook.create(body)
new Wish("Notebook is defined", notebook).isDefined();
// new Wish("Notebook contains an array", notebook.notes).isDefined();
new Wish("Notebook contains an array", notebook.notes).isType(Array())
//expect noteArr to contain note

// TODO can list the notes

// can display an individual note
