const express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan')
const player_list = require('./data.json');
const standings = require('./standings.json')
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('dev'))
app.set('view engine', 'ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/getAllPlayers', (req, res) => {
    res.render('all_players', { name: player_list })
})

app.get('/standings', (req, res) => {
    res.render('index', { name: standings })
})
app.get('/new', (req, res) => {
    res.render('new')
})
app.post('/new', (req, res) => {
    console.log(req.body)
});
const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});