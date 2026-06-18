const prisma = require("../config/prisma");

const getProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      image,
      github,
      demo,
      technologies,
      category,
    } = req.body;

    const project = await prisma.project.create({
      data: {
        title,
        description,
        image,
        github,
        demo,
        technologies,
        category,
      },
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProjects,
  createProject,
};