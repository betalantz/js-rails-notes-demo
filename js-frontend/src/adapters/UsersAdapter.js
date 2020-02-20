class UsersAdapter {
    constructor(){
        this.baseurl = 'http://localhost:3000/api/v1/users'
    }

    loginUser(value){
        console.log('sending fetch', value);
        const user = {
            username: value
        }
        return fetch(`${this.baseurl}/login`, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ user })
        })
        .then(res => res.json())
        // .then(data => console.log(data))
    }
}