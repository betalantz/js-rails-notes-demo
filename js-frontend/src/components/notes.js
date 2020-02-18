class Notes {
    //where the meat of the program will live
    constructor() {
        this.notes = []
        this.adapter = new NotesAdapter()
        this.bindEventListeners()
        this.fetchAndLoadNotes()
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

    bindEventListeners(){

    }

    render() {
        const notesContainer = document.getElementById('notes-container')
        notesContainer.innerHTML = `${this.notes.map(note => `<li>${note.body}</li>`).join('')}`
    }
}