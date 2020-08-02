var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('pages/index');
    //TODO supr les '/' si rien n'est marqué dedans(localhost///memoria)
    //TODO faire une gestion des version mobile
})

.get('/login', function(req, res) {
    res.render('pages/login');
    //TODO liaison vers page de selection entre film, series, jeux
    //TODO center the login page
})

.post('/auth',function(req, res) {
    res.send('test de login');
    //TODO ameliorer le login
    //TODO faire code de lecture de login et mot de passe (avec verif dans bdd)
    
    
    /*var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}*/


})

/*.get('/memorya', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Page de selection de memoire');
    //TODO liaison vers page de selection entre film, series, jeux
})*/

.get('/game', function(req, res) {
    //res.setHeader('Content-Type', 'text/plain');
    res.render('pages/game_list');
    //TODO page de selection de jeu 
})

.get('/game/:name', function(req, res) {
    res.render('pages/game' /*{compteur: req.params.nombre, noms: noms}*/);
    //TODO page de jeu précis (pour l'instant juste steam)
    //TODO encripter la clé steam dans la BDD et l'associer a un utiliseur (maxime goncalves)
})

.get('/film', function(req, res) {
    res.render('pages/film_list');
    //TODO suggest film while they're tipping  title
    //TODO page de selection de film
})

.get('/film/:name', function(req, res) {
    res.render('pages/film');
    //TODO page de film précis (uniquement via tmdb)
})

.get('/serie', function(req, res) {
    res.render('pages/serie_list');
    //TODO page de selection de film
})

.get('/serie/:name', function(req, res) {
    res.render('pages/serie');
    //TODO page de film précis (uniquement via tmdb)
})

.get('/search', function(req, res) {
    res.render('pages/research');
})

.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
    //TODO faire logo pour err 404 + page
});

app.listen(443);