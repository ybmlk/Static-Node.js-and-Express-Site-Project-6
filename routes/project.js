const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

// '/projects' will redirect to the first project
router.get('/', (req, res) => {
    res.redirect('/project/1')
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    // Throws error if the passed 'id' doesn't match any of the projects' id (i.e. ['1', '2', '3', '4', '5'])
    isProjectID(id, next);    

    const currentProject = projects[parseInt(id) - 1]
    const { project_name } = currentProject;
    const { description } = currentProject;
    const { technologies } = currentProject;
    const { live_link } = currentProject;
    const { github_link } = currentProject;
    const { image_urls } = currentProject;

    res.render('project', { project_name, description, technologies, live_link, github_link, image_urls });
});


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