const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Gotta have a name"],
        minlength: [3, "Author name must be at least 3 characters long"]
    }
},{timestamps:true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;