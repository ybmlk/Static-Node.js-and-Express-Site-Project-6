const express = require('express');

const app = express();

const mainRoutes = require('./routes/index');
const projectRoutes = require('./routes/project')
const errorRoutes = require('./routes/error');

app.set('view engine', 'pug');
app.use('/static', express.static('./public'));

app.use(mainRoutes);
app.use('/project', projectRoutes);
app.use(errorRoutes);

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});