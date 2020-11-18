const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/author_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Connected to the Mongoose Server"))
    .catch(err =>console.log("Connection lost to the server", err))