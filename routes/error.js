'use strict';

const express = require('express');
const router = express.Router();

// Throws error when undefined route is requested
router.use((req, res, next) => {
    const err = new Error('Page Not Found!')
    err.status = 404;
    next(err)
});


module.exports = router;