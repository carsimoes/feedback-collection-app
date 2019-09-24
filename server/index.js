const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT); 

//npm run dev

// app.get('/', (req,res) => {
//     res.send({ bye: 'buddy'});
// });
//node index.js to run!!

//Redeploy
// git add, git commit, git push heroku master