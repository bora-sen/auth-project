const crypto = require('crypto');

const users = [
    {
        id:crypto.randomBytes(8).toString('hex'),
        username : "Bora",
        password : "1234"
    },
    {
        id:crypto.randomBytes(8).toString('hex'),
        username : "Bahattin",
        password : "4321"
    }
]

function AuthUser(username,password){
    let sel_user = users.find(user => {
        if(user.username === username) return user
    })
    if(sel_user.password === password){
        return true
    }
    else if(sel_user.password !== password){
        return false
    }
}


function RegisterUser(username,password){
    let status = ""

    let filtered = users.filter(user => {return user.username === username});

    if(filtered.length > 1){
        console.log("User is already Registered !");
        status = "already-registered"
    }

    else if(filtered.length <= 1){
        users.push({
            id:crypto.randomBytes(8).toString('hex'),
            username,
            password
        });
        status = "success"
        console.log("User is registered!");
        console.table(users);
    }
    return status
}



module.exports = {users,AuthUser,RegisterUser}