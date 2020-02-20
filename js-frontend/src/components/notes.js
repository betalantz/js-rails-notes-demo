class Notes {
    //where most of the logic lives; could be renamed PageManger
    constructor() {
        this.notes = []
        this.adapter = new NotesAdapter()
        this.userAdapter = new UsersAdapter()

        this.initBindingsAndEventListeners()
        this.fetchAndLoadNotes()
    }
    
    initBindingsAndEventListeners(){
        this.loginForm = document.getElementById('login-form')
        this.newUserInput = document.querySelector('#new-user')
        this.loginForm.addEventListener('submit', this.loginUser.bind(this))

        this.notesContainer = document.getElementById('notes-container')
        this.body = document.querySelector('body')
        this.newNoteBody = document.getElementById('new-note-body')
        this.noteForm = document.getElementById('new-note-form')
        this.noteForm.addEventListener('submit', this.createNote.bind(this))
        this.notesContainer.addEventListener('dblclick', this.handleNoteClick.bind(this))
        this.body.addEventListener('blur', this.updateNote.bind(this), true)
    }

    createNote(e) {
        e.preventDefault()
        const curr_user = localStorage.getItem('currentUser')
        const value = this.newNoteBody.value;
        this.adapter.createNote(value, curr_user).then(note => {
           this.notes.push(new Note(note))
           this.newNoteBody.value = ''
           this.render()
        })
    }

    handleNoteClick(e) {
        if (e.target.classList.contains('delete-note-link')){
            console.log('will delete', e.target.parentNode);
            this.deleteNote(e)
        } else {
            this.toggleNote(e)
        }
    }
    
    toggleNote(e) {
        const li = e.target
        li.contentEditable = "true"
        li.focus()
        li.classList.add('editable')
    }
    
    updateNote(e){
        const li = e.target
        li.contentEditable = "false"
        li.classList.remove('editable')
        const newValue = li.innerHTML
        const id = li.dataset.id
        if (id) {
            this.adapter.updateNote(newValue, id)
        }
    }
    
    deleteNote(e) {
        const li = e.target.parentNode
        const id = li.dataset.id
        this.adapter.deleteNote(id)
        li.remove()
    }

    fetchAndLoadNotes() {
        this.adapter
        .getNotes()
        .then(notes => {
            notes.sort((a, b) => a.id - b.id).forEach(note => {
                this.notes.push(new Note(note))
            });
        })
        .then(() => {
            this.render()
        })
    }
    
    render() {
        const curr_user = localStorage.getItem('currentUser')
        if (curr_user) {
            this.notesContainer.innerHTML = `${this.notes.filter(note => note.user_id == curr_user).map(note => note.renderLi()).join('')}`
        } else {
            this.notesContainer.innerHTML = 'Please login!'
        }
    }

    // loginUser() would be better on the Users class, but needs access to render() here
    // could use inheritance to make render() a property of Users too

    loginUser(e){
        e.preventDefault()
        console.log('e.target: ', e.target.childNodes[3].value);
        const btn = e.target.childNodes[3]
        const btnText = e.target.childNodes[3].value
        if (btnText == 'Login') {
            const value = this.newUserInput.value
            this.userAdapter.loginUser(value)
                .then(user => {
                    localStorage.setItem('currentUser', parseInt(user.id))
                    console.log(`currentUser ${user.username} set with id: ${localStorage.getItem('currentUser')}`);
                })
                .then(() => this.render())
            this.newUserInput.value = ""
            btn.setAttribute('value', 'Logout')
        } else {
            localStorage.clear()
            location.reload()
            btn.setAttribute('value', 'Login')
        }
        
    }
}
