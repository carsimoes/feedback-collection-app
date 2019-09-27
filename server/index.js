const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT); 

//npm run dev //nodemon

// app.get('/', (req,res) => {
//     res.send({ bye: 'buddy'});
// });
//node index.js to run!!

//Redeploy
// git add, git commit, git push heroku master