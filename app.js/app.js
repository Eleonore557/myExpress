const express = require('express')
const port = 3000
const app = express()

app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').renderFile);

app.get('/', function(req, res) {
      res.sendFile(__dirname + '/index.html')
})

app.get('/profile/:name', function(req, res) {
      let data = {age: 28, job: 'Pirate doctor'}
      res.render('profile', {person: req.params.name, data: data})
})

app.get('/user', function (req, res) {
      res.send('Hello World!');
    });

app.post('/user', function (req, res) {
      res.send('Got a POST request');
    });
    
app.put('/user', function (req, res) {
      res.send('Got a PUT request at /user');
    });


app.delete('/user', function (req, res) {
      res.send('Got a DELETE request at /user');
    });
   
app.all('/secret', function (req, res, next) {
      console.log('Accessing the secret section ...');
      next(); 
    });

app.listen(port, () => {
      console.log('Server startes on port 3000...')
})