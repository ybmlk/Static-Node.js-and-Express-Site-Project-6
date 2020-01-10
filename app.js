const express = require('express');

const app = express();

const mainRouters = require('./routes/index');

app.set('view engine', 'pug');
app.use('/static', express.static('./public'));

app.use(mainRouters);

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});