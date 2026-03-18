import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const { isDark } = useTheme();
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "projects", "about", "contact"];
            let currentSection = "";

            for (const id of sections) {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentSection = id;
                        break;
                    }
                }
            }

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <nav className={`fixed top-0 w-full z-40 backdrop-blur-lg border-b shadow-lg transition-colors duration-300 ${
            isDark
                ? "bg-[rgba(10,10,10,0.8)] border-white/10"
                : "bg-white/80 border-gray-300"
        }`}>
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="flex items-center gap-2">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-1.5 rounded-md flex items-center justify-center">
                           <span className="font-mono text-sm text-white font-bold">&gt;_</span>
                        </div>
                        <span className={`font-mono text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                            Shivam_Anand<span className="text-blue-500">.Portfolio</span>
                        </span>
                    </a>

                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-2">
                        {[
                            "home",
                            "projects",
                            "about",
                            "contact",
                        ].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                    activeSection === section
                                        ? isDark
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-blue-600"
                                        : isDark
                                        ? "text-gray-400 hover:text-white"
                                        : "text-gray-500 hover:text-gray-900"
                                }`}
                            >
                                {section.charAt(0).toUpperCase() +
                                    section.slice(1)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};