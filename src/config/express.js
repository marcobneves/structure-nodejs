require('marko/node-require').install();
require('marko/express')

const express = require('express')
const app = express()
const methodOverride = require('method-override')
app.use('/static', express.static('src/public'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

const routes = require('../app/routes/route')
routes(app)

module.exports = app