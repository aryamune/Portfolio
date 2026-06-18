import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import yashPhoto from "../assets/bg.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side Photo */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative flex justify-center items-center">

            {/* Glow */}
            <div className="absolute w-80 h-80 rounded-full bg-cyan-500/30 blur-[100px] animate-pulse"></div>

            {/* Circular Image */}
            <div
              className="
                relative
                w-72
                h-72
                md:w-80
                md:h-80
                rounded-full
                overflow-hidden
                border-4
                border-cyan-400
                shadow-[0_0_40px_rgba(34,211,238,0.8)]
              "
            >
              <img
                src={yashPhoto}
                alt="Arya Mune"
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>

          </div>
        </motion.div>

        {/* Right Side Content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 tracking-[4px] mb-4">
            FULL STACK DEVELOPER
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Arya Mune
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-9">
            Passionate Full Stack Developer skilled in Python,
            React.js, Node.js, Express.js, PostgreSQL, Prisma ORM
            and modern web technologies. I build scalable web
            applications with clean UI and efficient backend
            architecture.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="
                bg-cyan-500
                hover:bg-cyan-600
                transition
                px-8
                py-4
                rounded-xl
                font-semibold
              "
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="
                border
                border-white/20
                hover:border-cyan-400
                transition
                px-8
                py-4
                rounded-xl
                font-semibold
              "
            >
              Download Resume
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-8 mt-10 text-4xl">

            <a
              href="https://github.com/aryamune"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/arya-mune-048130303"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:aryamune135@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-10 mt-14">

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">
                3+
              </h3>
              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">
                10+
              </h3>
              <p className="text-gray-400 mt-2">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">
                100%
              </h3>
              <p className="text-gray-400 mt-2">
                Responsive
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;