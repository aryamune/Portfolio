function Certifications() {
  const certifications = [
    {
      title: "Generative AI Fundamentals",
      issuer: "IBM SkillsBuild",
    },
    {
      title: "Google Cloud Skills Boost",
      issuer: "Google Cloud",
    },
    {
      title: "Python Programming",
      issuer: "Cisco Networking Academy",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Self Learning & Projects",
    },
  ];

  return (
    <section
      id="certifications"
      className="max-w-7xl mx-auto px-8 py-28"
    >
      <p className="text-cyan-400 mb-3 tracking-[3px]">
        CERTIFICATIONS
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-12">
        Certifications & Learning
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <h3 className="text-2xl font-bold mb-2">
              {cert.title}
            </h3>

            <p className="text-cyan-400">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;