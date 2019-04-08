const express = require('express')
const bodyParser = require('body-parser')
const mongoose =  require('mongoose')
const config = require('./config/config')
const _User_Router = require('./routes/user.routes')
const _DEFAULT_ROUTES = require('./config/DefaultRoutes')

const app = express();
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

app.use(_DEFAULT_ROUTES.BASE_URL,_User_Router)


mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true })
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`)
})

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})