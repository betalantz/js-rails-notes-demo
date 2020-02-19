class Note {
    constructor(noteJSON) {
        this.id = noteJSON.id
        this.body = noteJSON.body
    }

    renderLi(){
        return `<li data-id=${this.id}>${this.body}<a class="delete-note-link"> Delete</a></li>`
    }
}