const router = require("express").Router();

const Projects = require("./projects-model.js");

router.get("/", (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Server error: unable to retrieve projects" });
    });
});

router.post("/", (req, res) => {
  const project = req.body;
  Projects.add(project)
    .then(createdProject => {
      res.status(200).json(createdProject);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
