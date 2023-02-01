const List_of_Project = require('../models/createProjectSchema')

module.exports.home =async function (req, res) {
    try {
        let project = await List_of_Project.find({});
           
        return res.render('home', {
            title: " Issue Tracker | Home ",
            all_projects: project
        });


    } catch (err) {
        console.log('Error', err);
        return;
    };
};





