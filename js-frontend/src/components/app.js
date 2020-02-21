class App {
    constructor() {
        this.notes = new Notes()
        this.clearStorage()
    }

    clearStorage() {
        localStorage.clear()
    }
}