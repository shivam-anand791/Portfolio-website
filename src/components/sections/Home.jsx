import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../ThemeContext";

export const Home = () => {
    const { isDark } = useTheme();

    return (
        <section
            id="home"
            className={`min-h-screen flex items-center justify-center relative ${isDark ? "bg-black" : "bg-white"}`}
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                        Hi, I'm Shivam Anand
                    </h1>
                    <p className={`text-lg mb-8 max-w-lg mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        I’m a full-stack developer who loves crafting clean, scalable web
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#projects"
                            className={`py-3 px-5 rounded font-medium transition relative overflow-hidden flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ${isDark ? "bg-blue-600 text-white" : "bg-blue-500 text-white"}`}
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className={`border py-3 px-5 rounded font-medium transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] ${isDark ? "border-blue-400 text-blue-300 hover:bg-blue-900/10" : "border-blue-500/50 text-blue-500 hover:bg-blue-500/10"}`}
                        >
                            Contact ME
                        </a>

                        <a
                            href="/Shivam_Anand_software_engineer.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`border py-3 px-5 rounded font-medium transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] ${isDark ? "border-cyan-400 text-cyan-300 hover:bg-cyan-900/10" : "border-cyan-500 text-cyan-600 hover:bg-cyan-500/10"}`}
                        >
                            📄 Download Resume
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};