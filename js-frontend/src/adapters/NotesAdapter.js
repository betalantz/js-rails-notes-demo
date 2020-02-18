class NotesAdapter {
    constructor() {
        this.baseurl = 'http://localhost:3000/api/v1/notes'
    }

    getNotes() {
        return fetch(this.baseurl).then(res => res.json())
    }

    createNote(value){
        const note = {
            body: value
        }
        return fetch(this.baseurl, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ note })
        })
        .then(res => res.json())
    }
    
    updateNote(value, id) {
        console.log('updating note');
        const note = {
            body: value
        }
        return fetch(this.baseurl + `/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ note })
        })
        .then(res => res.json())
        
    }
}