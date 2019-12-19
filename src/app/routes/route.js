const Book = require('../entity/book')
const db = require('../../config/database')
const { check, validationResult } = require('express-validator');

const Routes = (app) => {

    app.get('/', (req, resp) => {
        resp.send(`Route: ${req.url} Method: ${req.method}`)
    })

    app.get('/books', (req, resp) => {
        const book = new Book(db)

        book.list()
            .then(data => resp.marko(
                require('../views/books/list/list.marko'), {
                books: data
            }
            ))
            .catch(erro => console.log(erro))

    })

    app.get('/book/form/:id', (req, resp) => {
        let bookId = req.params.id
        const book = new Book(db)

        book.search(bookId)
            .then(data => {
                resp.marko(require('../views/books/form/form.marko'),
                    { book: data[0] })
            })
            .catch(erro => console.log(erro))

    })

    app.get('/book/form', (req, resp) => {
        resp.marko(require('../views/books/form/form.marko'), { book: { titulo: '', preco: '', descricao: '' } })
    })

    app.post('/book', [
        check("title").isLength({ min: 5 }).withMessage("Titulo deve ter mínino de 5 caracteres"),
        check("price").isCurrency().withMessage("Preço inválido")
    ], (req, resp) => {

        const erros = validationResult(req)
        console.log('error', erros)
        if (!erros.isEmpty()) {
            return resp.marko(require('../views/books/form/form.marko'), { book: { titulo: '', preco: '', descricao: '' } })
        }

        var book = new Book(db)
        book.save(req.body)
            .then(resp.redirect('/books'))
            .catch(erro => console.log(erro))
    })

    app.put('/book', (req, resp) => {
        var book = new Book(db)
        book.update(req.body)
            .then(resp.redirect('/books'))
            .catch(erro => console.log(erro))
    })

    app.delete('/book/:id', (req, resp) => {

        const bookId = req.params.id

        const book = new Book(db)
        book.remove(bookId)
            .then(() => resp.status(200).end())
            .catch(erro => { console.log(erro) })

    })

}

module.exports = Routes;

