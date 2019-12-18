class Book {
    constructor(db) {
        this._db = db
    }
    list(callback) {
        this._db.all(
            'SELECT * FROM LIVROS',
            (error, response) => {
                callback(error, response)
            }
        )
    }
}

module.exports = Book