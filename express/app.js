/* 
  The express app is a global called app
  It can respond on all routes under /api
*/
const app = global.expressApp;

// const express = require('express');
 
// Connect to mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/piggypig',
 { useNewUrlParser: true }
 );
 const db = mongoose.connection;
db.on('error', e => {
  console.error(e);
});
db.once('open', () => {
  console.info('db connected!');
});

// Salt for passwords
// global.passwordSalt = 'sfelkjfe}daf]#¤&%!lsf#€)KD§';
 




// BodyParser is needed in order to read req.body
// on PUT and POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.json());
 
const test = require('./routes/user')
app.get('/usersl', function(req, res){
  res.send('hello');
});



const userRoutes = require('./routes/user');
app.get('/users', userRoutes.users);

app.get('/user/:_id', userRoutes.user);



    