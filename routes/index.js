'use strict';

const express = require('express');
const router = express.Router();

// 'data.json'  contains all the projects' data
const { projects } = require('../data/data.json');

// Renders Homepage
router.get('/', (req, res) => {
    res.render('index', { projects });
});

// Renders About page
router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;