const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    const err = new Error('Page Not Found!')
    err.status = 404;
    next(err)
});

router.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    // ! create 'error.pug'
    res.render('about');
});

module.exports = router;