class NotesAdapter {
    constructor() {
        this.baseurl = 'http://localhost:3000/api/v1/notes'
    }

    getNotes() {
        return fetch(this.baseurl).then(res => res.json())
    }
}