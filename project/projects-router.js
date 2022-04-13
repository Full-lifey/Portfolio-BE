const router = require('express').Router();

const Projects = require('./projects-model.js');

router.get('/', (req, res) => {
  console.log(Projects.find());
  Projects.find()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: `Server error: ${err}` });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Projects.findById(id)
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: `Server error: ${err}` });
    });
});

router.post('/', (req, res) => {
  const project = req.body;
  Projects.add(project)
    .then((createdProject) => {
      res.status(200).json(createdProject);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  Projects.update(id, req.body)
    .then((updatedProject) => {
      res.status(200).json(updatedProject);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Projects.remove(id)
    .then((deleted) => {
      res.status(204).json({ message: 'Successfully deleted project' });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: 'Server error: The project was not deleted' });
    });
});
module.exports = router;
