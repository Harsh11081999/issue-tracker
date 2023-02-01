// requiring list from db
const projectList = require('../models/createProjectSchema');


// rendering to create project form
module.exports.createProjectForm = function (req, res) {
    return res.render("create_project", {
        title: "Issue Tracker"
    });
}

// creating a new project
module.exports.create = function (req, res) {
    projectList.create(
        {
            projectName: req.body.projectName,
            author: req.body.author,
            description: req.body.description
        },
        function (err, project) {
            if (err) {
                console.log("error in creating a project", err);
                return;
            }
            console.log("Project Added Successfully in the list", project);
            return res.redirect('/');
        }
    )
}


// deleting an existing project
module.exports.destroy = function (req, res) {
    projectList.findById(req.params.id, function (err, project) {
        if (err) {
            console.log('Error in Creating a Post_controller'); return;
        }
        project.remove();

        return res.redirect('back');

    });
}

// rendering to update project page
module.exports.updateProjectForm = function(req, res){
    return res.render("update_project", {
        title: "Issue Tracker : Upadate Project"
    });
}

// updating the project details
module.exports.update = function (req, res) {
    projectList.findByIdAndUpdate(req.params.id, {$set:req.body}, function (err, project) {
        if (err) {
            console.log('Error in Creating a Post_controller'); return;
        }

        console.log(" in update function");
        return res.redirect('/');

    });
}



