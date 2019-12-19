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

    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.run(`DELETE FROM livros WHERE id=${id}`, (error, response) => {
                if (error) return reject('Erro ao remover')
                resolve()
            })

        })
    }

    update(book) {
        return new Promise((resolve, reject) => {
            this._db.run(`UPDATE livros 
            SET
            titulo = ?, 
            preco=?, 
            descricao=?
            WHERE id=?`, [
                book.title,
                book.price,
                book.description,
                parseInt(book.id)
            ], (error, response) => {
                if (error) return reject("Erro ao atualizar")
                resolve()
            })
        })
    }

    search(id) {
        return new Promise((resolve, reject) => {
            this._db.all(`SELECT * FROM livros  WHERE id=${id}`, (error, response) => {
                if (error) return reject("Erro ao pesquisar")
                resolve(response)
            })
        })
    }
}

module.exports = Book