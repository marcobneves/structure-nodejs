const Book = require('../entity/book')
const db = require('../../config/database')

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

    app.get('/book/form', (req, resp) => {
        resp.marko(require('../views/books/form/form.marko'))
    })

    app.post('/book', (req, resp) => {
        console.log('body', req.body)
        var book = new Book(db)
        book.save(req.body)
            .then(resp.redirect('/books'))
            .catch(erro => console.log(erro))
    })
}

module.exports = Routes;

