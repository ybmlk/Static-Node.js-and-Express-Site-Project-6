const express = require('express');
const router = express.Router();

// 'data.json'  contains all the projects' data
const { projects } = require('../data/data.json');

// '/project' will redirect to the first project (i.e '/project/1')
router.get('/', (req, res) => {
    res.redirect('/project/1')
});

// Renders individual project's page based on the 'id' passed
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    // Throws error if the passed 'id' doesn't match any of the projects' id (i.e. ['1', '2', '3', '4', '5'])
    isProjectID(id, next);

    // Declares all properties of the current project (current project = the project whose id is passed)
    const currentProject = projects[parseInt(id) - 1]
    const { project_name } = currentProject;
    const { description } = currentProject;
    const { technologies } = currentProject;
    const { live_link } = currentProject;
    const { github_link } = currentProject;
    const { image_urls } = currentProject;

    // All properties of the current project are available to 'project.pug'
    res.render('project', { project_name, description, technologies, live_link, github_link, image_urls });
});


// Throws error if the passed 'id' doesn't match any of the projects' id (i.e. ['1', '2', '3', '4', '5'])
function isProjectID(id, next) {
    let projectNum = [];
    for (let i = 1; i < projects.length; i++) {
        projectNum[i] = `${i}`
    }

    if (!projectNum.includes(id)) {
        const err = new Error('Page Not Found!')
        err.status = 404;
        return next(err)
    }
}


module.exports = router;