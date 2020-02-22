class NotesAdapter {
    constructor() {
        this.baseurl = 'http://localhost:3000/api/v1/notes'
    }

    getNotes() {
        return fetch(this.baseurl).then(res => res.json())
    }

    createNote(value, id){
        const note = {
            body: value,
            user_id: id
        }
        console.log('req body obj: ', note["user_id"]);
        return fetch(this.baseurl, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ note })
        })
        .then(res => {
            
            console.log(res.status)
            return res
        })
        .then(res => res.json())
        .catch((message) => console.log(message))
    }
    
    updateNote(value, id) {
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

    deleteNote(id) {
        return fetch(this.baseurl + `/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
    }
}