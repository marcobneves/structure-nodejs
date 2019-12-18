class Book {
    constructor(db) {
        this._db = db
    }
    list() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM LIVROS',
                (error, response) => {
                    if (error) return reject('Não foi possível lista os livros');
                    return resolve(response)
                }
            )
        })
    }
}

module.exports = Book