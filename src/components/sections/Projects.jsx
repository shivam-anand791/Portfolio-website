import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

        const projects = [
                {
                    title: "FocusBoard (Daily Smart Tracker)",
                    description: "A sleek, full-stack habit tracking application to help you build consistency and visualize your progress. Features secure JWT authentication, monthly and historical habit tracking, interactive analytics (Chart.js), trophy cabinet, dynamic themes, CSV export, smart reminders, and a modern glassmorphic UI. Node.js/Express backend with MongoDB, and a custom vanilla JS frontend.",
                    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Chart.js", "HTML5", "CSS3", "JavaScript"],
                    live: "https://goal-tracker-frontendapp.vercel.app",
                    githubFrontend: "https://github.com/shivam-anand791/goal_tracker_frontendapp",
                    githubBackend: "https://github.com/shivam-anand791/habit-tracker-api"
                },
                {
                    title: "Tic-Tac-Toe",
                    description: "Interactive multiplayer Tic-Tac-Toe game with custom player registration, real-time turn tracking, and dynamic win detection. Built with vanilla JavaScript, featuring glassmorphism UI design, responsive layout, and smooth animations.",
                    tech: ["HTML", "CSS", "JavaScript"],
                    live: "https://tic-tac-toe-game-mu-self.vercel.app",
                    github: "https://github.com/shivam-anand791/tic_tac_toe_game"
                },
                
                {
                    title: "Portfolio website",
                    description: "React portfolio website featuring dynamic loading screens, responsive navigation, and interactive animations. Built with component-based architecture using React hooks and Tailwind CSS for optimal performance and user experience.",
                    tech: ["React", "Tailwind CSS", "JavaScript", "HTML5","CSS3"],
                    link: "#"
                },
                {
                    title: "Upcoming Project 1",
                    description: "Description coming soon. A full-stack application leveraging modern web technologies.",
                    tech: ["Node.js", "Express", "MongoDB"],
                    link: "#"
                },
                {
                    title: "Upcoming Project 2",
                    description: "Description coming soon. An interactive data visualization dashboard.",
                    tech: ["React", "D3.js", "Tailwind CSS"],
                    link: "#"
                }
        ];

    return (
        <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
        >
          <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all flex flex-col h-full bg-white/5"
                        >
                            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {project.tech.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs font-medium hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 border-t border-white/10 pt-4 mt-auto">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        Live Demo
                                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        GitHub Repo
                                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                                    </a>
                                )}
                                {project.githubFrontend && (
                                    <a
                                        href={project.githubFrontend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        Frontend Repo
                                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                                    </a>
                                )}
                                {project.githubBackend && (
                                    <a
                                        href={project.githubBackend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        Backend Repo
                                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                                    </a>
                                )}
                                {project.link && !project.live && !project.github && !project.githubFrontend && !project.githubBackend && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        View Project
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
          </RevealOnScroll>
        </section>
    );
};