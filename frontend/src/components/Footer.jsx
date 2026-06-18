import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-xl font-bold">
            ARYA'S <span className="text-cyan-400">PORTFOLIO</span>
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Full Stack Developer | AI Enthusiast | Lifelong Learner
          </p>
        </div>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/aryamune"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/arya-mune-048130303/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:aryamune135@gmail.com"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-400 text-sm">
          © 2026 Arya Mune. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;