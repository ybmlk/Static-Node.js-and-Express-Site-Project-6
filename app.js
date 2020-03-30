'use strict';

const express = require('express');
const app = express();

// Requires routes needed
const mainRoutes = require('./routes/index');
const projectRoutes = require('./routes/project')
const errorRoutes = require('./routes/error');

app.set('view engine', 'pug');
// Serves the static files at '/static'
app.use('/static', express.static('./public'));

// Calls the required routes 
app.use(mainRoutes);
app.use('/project', projectRoutes);
app.use(errorRoutes);

// Handles errors and sends friendly message by renderring 'error.pug'
app.use((err, req, res, next) => {
    res.status(err.status);
    console.log(err.message, err.status)
    res.render('error', { error: err });
});

// Sets up server
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});