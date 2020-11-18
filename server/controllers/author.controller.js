const Author = require("../models/author.model");

module.exports.findAllAuthors = (req,res) =>{
    Author.find()
        .then(allAuthors => res.json({authors: allAuthors}))
        .catch(err => res.json({message: "Something went wrong!",error: err}))
}

module.exports.findOneAuthor = (req,res) =>{
    Author.findOne({_id: req.params._id})
        .then(oneAuthor => res.json({author: oneAuthor}))
        .catch(err => res.json({message: "Something went wrong!",error: err}))
}

module.exports.createAuthor = (req,res) =>{
    Author.create(req.body)
        .then(newAuthor => res.json({author: newAuthor}))
        .catch(err => res.json({message: "Something went wrong!",error: err}))
}

module.exports.deleteAuthor = (req,res) =>{
    Author.remove({_id: req.params._id})
        .then(res.json({message: "Author has been removed"}))
        .catch(err => res.json({message: "Something went wrong!",error: err}))
}

module.exports.updateAuthor = (req,res) =>{
    Author.update({_id: req.params._id},
        {$set: {
            name: req.body.name
        }},{runValidators: true})
        .then(allAuthors => res.json({authors: allAuthors}))
        .catch(err => res.json({message: "Something went wrong!",error: err}))
}