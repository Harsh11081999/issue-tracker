const express = require("express");
const router = express.Router();

const issueController = require("../controller/issueController");

router.get("/project_detail/:id", issueController.projectdetailpage);
router.post("/create", issueController.create);
router.get("/create_issue/:id", issueController.issuepage);

module.exports = router;