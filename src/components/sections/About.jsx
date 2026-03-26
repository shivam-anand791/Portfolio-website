import { RevealOnScroll } from "../RevealOnScroll";
import { 
    SiPython, SiCplusplus, SiJavascript, 
    SiMysql, SiMongodb, SiReact, 
    SiNodedotjs, SiHtml5, SiCss, 
    SiTailwindcss, SiBootstrap, SiJquery,
    SiGit, SiGithub, SiJupyter,
    SiCodeblocks
} from "react-icons/si";
import { FaJava, FaCode, FaChartBar, FaChartPie } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export const About = () => {
    
    const languages = [
        { name: "Python", icon: <SiPython className="text-xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-xl" /> },
        { name: "Java", icon: <FaJava className="text-xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-xl" /> }
    ];

    const databases= [
        { name: "MySQL", icon: <SiMysql className="text-xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-xl" /> }
    ];

    const webDevelopment= [
        { name: "React", icon: <SiReact className="text-xl" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-xl" /> },
        { name: "HTML", icon: <SiHtml5 className="text-xl" /> },
        { name: "CSS", icon: <SiCss className="text-xl" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-xl" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-xl" /> },
        { name: "Jquery", icon: <SiJquery className="text-xl" /> }
    ];

    const toolsPlatforms= [
        { name: "Git", icon: <SiGit className="text-xl" /> },
        { name: "GitHub", icon: <SiGithub className="text-xl" /> },
        { name: "VS Code", icon: <VscVscode className="text-xl" /> },
        { name: "Tableau", icon: <FaChartBar className="text-xl" /> },
        { name: "PowerBI", icon: <FaChartPie className="text-xl" /> },
        { name: "Jupyter", icon: <SiJupyter className="text-xl" /> }
    ];

    const coreFundamental=[
        { name: "DSA", icon: <FaCode className="text-xl" /> },
        { name: "OOP", icon: <SiCodeblocks className="text-xl" /> }
    ]

    return(
        <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About ME
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Hi, I’m Shivam Anand, a Computer Science Engineering student passionate about 
                    building impactful web applications and exploring the potential of machine learning. 
                    From developing full-stack solutions with React, Node.js, and MongoDB to creating 
                    AI-driven projects with Python, OpenCV, and TensorFlow, I enjoy solving real-world 
                    problems with code.
                </p>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
                    Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5 bg-white/5">
                        <h3 className="text-xl font-bold mb-4">
                            Languages
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {languages.map((tech,key) => (
                                <span key={key}
                                className="flex items-center gap-2 bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-full text-sm font-medium hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all">
                                    {tech.icon} {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5 bg-white/5">
                        <h3 className="text-xl font-bold mb-4">
                            Web Development
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {webDevelopment.map((tech,key) => (
                                <span key={key}
                                className="flex items-center gap-2 bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-full text-sm font-medium hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all">
                                    {tech.icon} {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5 bg-white/5">
                        <h3 className="text-xl font-bold mb-4">
                            Tools & Platforms 
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {toolsPlatforms.map((tech,key) => (
                                <span key={key}
                                className="flex items-center gap-2 bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-full text-sm font-medium hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all">
                                    {tech.icon} {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5 bg-white/5">
                        <h3 className="text-xl font-bold mb-4">
                            Databases 
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {databases.map((tech,key) => (
                                <span key={key}
                                className="flex items-center gap-2 bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-full text-sm font-medium hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all">
                                    {tech.icon} {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5 bg-white/5 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">
                            Core Fundamentals 
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {coreFundamental.map((tech,key) => (
                                <span key={key}
                                className="flex items-center gap-2 bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-full text-sm font-medium hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all">
                                    {tech.icon} {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                </div>

                <div className="space-y-8 mt-12">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                             💼 Work Experience
                        </h3>
                        <div className="space-y-6">
                            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
                                <h4 className="text-xl font-bold text-white mb-1">
                                    Web Development Intern
                                </h4>
                                <div className="text-blue-400 font-medium mb-3">
                                    HIIT • May – July 2024
                                </div>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm leading-relaxed">
                                    <li>
                                        Developed and deployed 10+ responsive websites using HTML, CSS, jQuery, Bootstrap, and MySQL in a team of 4 interns.
                                    </li>
                                    <li>
                                        Optimized SQL queries, reducing page load time by 20% and improving application performance.
                                    </li>
                                    <li>
                                        Assisted in understanding and integrating client requirements into the final product, ensuring all deliverables met expectations and deadlines.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                            🏫 Education
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
                                <h4 className="text-xl font-bold text-white mb-1">
                                    Bachelor of Engineering in CSE
                                </h4>
                                <div className="text-blue-400 font-medium mb-2">
                                    Chandigarh University • 2021 – 2025
                                </div>
                                <p className="text-gray-300 text-sm">
                                    CGPA: 7.31
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
                                    <h4 className="text-lg font-bold text-white mb-1">
                                        Intermediate
                                    </h4>
                                    <div className="text-blue-400 font-medium mb-2">
                                        Trident Public School • 2020 – 2021
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                        Percentage: 76.6%
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
                                    <h4 className="text-lg font-bold text-white mb-1">
                                        Matriculation
                                    </h4>
                                    <div className="text-blue-400 font-medium mb-2">
                                        North Point Children’s School • 2018 – 2019
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                        Percentage: 75.2%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             </RevealOnScroll>
        </section>
    )
}
