const db = require('../../config/database')

const Routes = (app) => {

    app.get('/', function (req, resp) {
        resp.send(`Route: ${req.url} Method: ${req.method}`)
    })

    app.get('/livros', function (req, resp) {
        db.all('SELECT * FROM LIVROS', function (erro, response) {
            resp.marko(
                require('../views/books/list/list.marko'), {
                livros: response
            }
            )
        })
    })
}

module.exports = Routes;

