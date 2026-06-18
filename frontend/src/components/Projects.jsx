function Projects() {
  const projects = [
    {
      id: 1,
      title: "AuraTasker",
      description:
        "A full-stack task management application that allows users to create, update, organize, and track daily tasks efficiently. Features authentication, CRUD operations, and responsive design.",
      github: "https://github.com/aryamune/AuraTasker",
      demo: "https://aura-tasker-frontend.vercel.app/dashboardss",
      technologies:
        "React, Node.js, Express.js, PostgreSQL, Prisma, JWT",
    },
    {
      id: 2,
      title: "The Engineers Kitchen",
      description:
        "A modern e-commerce web application featuring product catalog management, shopping cart functionality, secure authentication, role-based access control, and order management.",
      github: "http://github.com/aryamune/The-Engineers-Kitchen",
      demo: "https://the-engineers-kitchen.vercel.app/",
      technologies:
        "React, Node.js, Express.js, PostgreSQL, Prisma, JWT",
    },
    {
      id: 3,
      title: "StoryVault",
      description:
        "A full-stack blogging platform where users can create, edit, publish, and manage blog posts. Includes authentication, comments system, and responsive UI.",
      github: "https://github.com/aryamune/StoryVault",
      demo: "https://story-vault-nu.vercel.app/",
      technologies:
        "React, Node.js, Express.js, PostgreSQL, Prisma, JWT",
    },
     {
      id: 4,
      title: "ResQNow",
      description:
        "An emergency assistance web application that enables users to store emergency information, access location-based support, and interact with an AI-powered chatbot during critical situations. Designed to provide quick access to essential resources in emergencies.",
      github: "https://github.com/aryamune/ResQNow",
      demo: "https://resqnow-production.up.railway.app/",
      technologies:
        "React, Node.js, Express.js, PostgreSQL, Prisma, JWT",
    },


  ];
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      <p className="text-cyan-400 mb-3">
        PROJECTS
      </p>

      <h2 className="text-5xl font-bold mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-5 leading-7">
              {project.description}
            </p>

            <p className="text-cyan-400 mb-6">
              {project.technologies}
            </p>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="border border-white/20 hover:border-cyan-400 px-5 py-2 rounded-lg"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;