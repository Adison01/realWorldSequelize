const express = require('express');
const app = express();
const {db} = require('./models/index')


// for POST requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use('/api', require('./routes/api'));



db.sync()
.then(()=>{
    app.listen(7788, ()=>{
        console.log("Server started on http://localhost:7788/")
    })
})
.catch(err=>{
    console.error(err)
})
