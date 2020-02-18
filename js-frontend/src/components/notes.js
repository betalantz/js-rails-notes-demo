class Notes {
    //where the meat of the program will live
    constructor() {
        this.notes = []
        this.adapter = new NotesAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadNotes()
    }
    
    initBindingsAndEventListeners(){
        this.notesContainer = document.getElementById('notes-container')
        this.newNoteBody = document.getElementById('new-note-body')
        this.noteForm = document.getElementById('new-note-form')
        this.noteForm.addEventListener('submit', this.createNote.bind(this))
    }

    createNote(e) {
        e.preventDefault()
        console.log(this.newNoteBody.value);
    }


    fetchAndLoadNotes() {
        this.adapter
        .getNotes()
        .then(notes => {
            notes.forEach(note => {
                this.notes.push(new Note(note))
            });
        })
        .then(() => {
            this.render()
        })
    }
    
    render() {
        this.notesContainer.innerHTML = `${this.notes.map(note => note.renderLi()).join('')}`
    }
}