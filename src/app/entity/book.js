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

    save(book) {
        return new Promise((resolve, reject) => {
            this._db.run(`INSERT INTO livros (titulo, preco, descricao) values (?,?,?)`,
                [book.title, book.price, book.description],
                (error, response) => {
                    if (error) return reject("Não foi possível cadastrar")
                    resolve()
                })

        })
    }
}

module.exports = Book