const express = require('express');
const app = express();
require('./models/DBconfig');
const userRoute = require('./routes/user.route');
const sauceRoute = require('./routes/sauce.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use("/api/",userRoute);
app.use("/api/sauces/",sauceRoute);

app.listen("3000",()=>console.log('server started'));