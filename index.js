const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys.js');
require('./models/User')
require('./services/passport');

mongoose.connect(keys.mongoURI);
    // .then(() => console.log('Connected!'))
    // .catch(()=> console.log('Not Connected'));
    // can't connect mongoDB with my IP

const app = express();

app.use(
    cookieSession({
        maxAge:30*24*60*60*1000, // 30 days before it will automatically expire
        keys:[keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 5000
app.listen(PORT) 



// railway down
// railway up