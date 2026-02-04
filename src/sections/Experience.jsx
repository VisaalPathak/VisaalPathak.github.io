import { Briefcase } from "lucide-react";

export const Experience = () => {
    const experiences = [
        {
            role: "Senior Data Analyst",
            company: "eXtensoData Pvt. Ltd. | Pulchowk, Lalitpur",
            period: "Jul 2025 - Present",
            points: [
                "Designed and implemented a banking product recommendation system utilizing big data platform to process and analyze large-scale financial datasets.",
                "Optimized ETL/ELT pipelines, achieving a 30% improvement in data processing time and enhancing overall system performance."
            ]
        },
        {
            role: "Data Analyst",
            company: "eXtensoData Pvt. Ltd. | Pulchowk, Lalitpur",
            period: "Jul 2023 - Jul 2025",
            points: [
                "Worked closely with cross-functional teams to understand business requirements and help them use data for better decision-making, improving collaboration and alignment across departments.",
                "Analyzed large scale customer transaction datasets to uncover trends and deliver actionable insights, significantly enhancing business decision-making processes.",
                "Designed and implemented robust systems for churn prediction, customer segmentation, anomaly detection, and text-based information extraction, improving operational efficiency.",
                "Developed Python applications and PySpark data processing pipelines for efficient data extraction, transformation and loading (ETL) processes.",
                "Optimized data processing pipelines in Python and PySpark, reducing runtime by 30% and enhancing overall system efficiency."
            ]
        },
        {
            role: "Associate Data Analyst",
            company: "eXtensoData Pvt. Ltd. | Pulchowk, Lalitpur",
            period: "Apr 2022 - Jul 2023",
            points: [
                "Developed an intelligent dashboard system to visualize loan performance and prospect trends, enabling stakeholders to make timely and data-driven business decisions.",
                "Developed customer engagement reports across multiple BFI applications, delivering insights into user behavior and trends to support strategic decisions and enhance customer retention efforts.",
                "Conducted cohort analysis to study customer engagement and optimize marketing strategies.",
                "Automated reporting processes using Python and SQL, reducing manual workload by 30%."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 px-6 bg-dark/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-primary">02.</span> Experience
                </h2>

                <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            {/* Dot Indicator */}
                            <div className="absolute -left-[9px] top-0 bg-dark p-1">
                                <div className="p-2 bg-primary/20 rounded-full">
                                    <Briefcase size={16} className="text-primary" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                            <div className="text-secondary font-medium mb-4">{exp.company} <span className="text-gray-500 text-sm block md:inline md:ml-2">| {exp.period}</span></div>

                            <ul className="space-y-3">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="text-gray-400 leading-relaxed flex items-start gap-3">
                                        <span className="text-primary mt-2">▹</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
