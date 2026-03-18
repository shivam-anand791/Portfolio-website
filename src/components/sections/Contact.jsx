import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg mb-8">
            Ready to build something amazing together?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="mailto:shivamanand1910@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="text-4xl mb-4">📧</span>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-white/60 break-all">shivamanand1910@gmail.com</p>
            </a>
            <a
              href=" https://www.linkedin.com/in/shivam-anand-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="text-4xl mb-4">🔗</span>
              <h3 className="text-xl font-bold">LinkedIn</h3>
              <p className="text-white/60">Connect with me</p>
            </a>
            <a
              href="https://github.com/shivam-anand791"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="text-4xl mb-4">👨‍💻</span>
              <h3 className="text-xl font-bold">GitHub</h3>
              <p className="text-white/60">View my code</p>
            </a>
            <a
              href="/Shivam_Anand_software_engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="text-4xl mb-4">📄</span>
              <h3 className="text-xl font-bold">Resume</h3>
              <p className="text-white/60">Download CV</p>
            </a>
          </div>
          <p className="mt-20 text-sm text-white/50">
            Always curious, always building — whether it's infrastructure on
            AWS, RESTful services, or CLI-based tools.
          </p>
          <p className="mt-4 text-sm text-white/50">
            Designed and Built by Shivam Anand™
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};