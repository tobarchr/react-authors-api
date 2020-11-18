const AuthorController = require("../controllers/author.controller");

module.exports = app =>{
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.get("/api/authors/:_id", AuthorController.findOneAuthor);
    app.post("/api/authors/new", AuthorController.createAuthor);
    app.delete("/api/authors/delete/:_id", AuthorController.deleteAuthor);
    app.put("/api/authors/update/:_id", AuthorController.updateAuthor);
}