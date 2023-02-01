const express = require('express');
const router = express.Router();

const projectController = require("../controller/projectController");

router.get("/create_project" ,  projectController.createProjectForm );
router.post("/create", projectController.create);

router.get('/destroy/:id',  projectController.destroy );

router.get("/update_project" ,  projectController.updateProjectForm );
router.post('/update/:id',  projectController.update );


// router.post('/projectdet/:id',  projectController.update );

module.exports= router;
