const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const projectsRouter = require("../project/projects-router.js");
const emailsRouter = require("../sendgrid/sendgrid-router.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/projects", projectsRouter);
server.use("/api/emails", emailsRouter);

server.get("/", (req, res) => {
  return res.json({ message: "Server is up" });
});

module.exports = server;
