export const About = () => {
    const skills = [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "PySpark", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "Data Visualization", level: 85 },
        { name: "ETL Pipelines", level: 85 },
    ];

    const tags = [
        "Python", "PySpark", "SQL", "Machine Learning", "Deep Learning", "Docker", "Git", "Apache Airflow", "MySQL", "PostgreSQL", "Power BI", "Pentaho", "Pandas", "Scikit-learn"
    ];

    return (
        <section id="about" className="py-20 px-6 bg-dark/50">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                        <span className="text-primary">01.</span> About Me
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6 text-justify">
                        I am a <span className="text-white font-medium">Detail-oriented Data Analyst</span> with a strong foundation in data-driven problem solving and a passion for turning raw data into meaningful insights.
                        Skilled in leveraging <span className="text-secondary">Python</span>, <span className="text-secondary">PySpark</span>, and <span className="text-secondary">SQL</span> to build scalable data solutions, automate reporting, and support strategic initiatives.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-8 text-justify">
                        Known for bridging technical and business needs through clear communication and collaborative execution.
                        With over 3 years of experience as a Data professional, I bring a balanced mix of analytical thinking, product understanding, and engineering efficiency to fintech and BFI domains.
                    </p>

                    <a href="/resume.html" target="_blank" className="inline-block px-8 py-3 border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all">
                        View CV
                    </a>
                </div>

                {/* Skills Visuals */}
                <div>
                    <h3 className="text-xl font-bold mb-6 text-white">Technical Proficiency</h3>
                    <div className="space-y-6">
                        {skills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-300 font-medium">{skill.name}</span>
                                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white/5 text-gray-400 text-sm rounded-full border border-white/5 hover:border-primary/30 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
