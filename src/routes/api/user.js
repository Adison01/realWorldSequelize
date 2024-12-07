const {Router} = require('express');

const route = Router();

route.get('/', (req, res)=>{
res.send({
    "user":{
        "email": "abc@gamil.com",
        "token": "abc123",
        "username": "jake",
        "bio": "I work at statefarm",
        "image": null
    }
})
})

module.exports = route;