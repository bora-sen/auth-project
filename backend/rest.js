const {app,port} = require('./express_server');
const {AuthUser, RegisterUser} = require('./user.js');


app.post('/login',(req,res) => {

    let username = req.body.username;
    let password = req.body.password;

    if(AuthUser(username,password)){
        res.send("user is logged!!");
    }
    else{
        res.send("user is not logged!!");
    }
})

app.post('/signup',(req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    let registerReq = RegisterUser(username,password);

    if(registerReq === 'success'){
        res.send("Success")
    }
    else if(registerReq === 'already-registered'){
        res.send("User is already registered!")
    }
})


app.listen(port,(req,res) => {
    console.log("REST server is running on port : ",port);
})