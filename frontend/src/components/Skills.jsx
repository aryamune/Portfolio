function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Python"
      ]
    },

    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "Django",
        "FastAPI"
      ]
    },

    {
      title: "Database",
      skills: [
        "PostgreSQL",
        "Supabase",
        "Prisma ORM",
        "MongoDB"
      ]
    },

    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Vercel",
        "Render",
        "Docker"
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      <p className="text-cyan-400 mb-3 tracking-[3px]">
        SKILLS
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-12">
        Technical Expertise
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;