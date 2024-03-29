const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys.js'); //https://console.developers.google.com
require('./models/user');
require('./services/passport'); //order matters

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

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