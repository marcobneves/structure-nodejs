const Routes = (app) => {

    app.get('/', function (req, resp) {
        resp.send(`Route: ${req.url} Method: ${req.method}`)
    })

    app.get('/livros', function (req, resp) {
        resp.marko(
            require('../views/books/list/list.marko'), {
            livros: [
                { id: 1, titulo: 'Trabalhando com css' },
                { id: 2, titulo: 'Trabalhando com Js' },
            ]
        }
        )
    })
}

module.exports = Routes;

