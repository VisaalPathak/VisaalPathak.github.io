import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 animate-pulse"></div>

            <div className="text-center px-6 max-w-4xl mx-auto z-10">
                <h2 className="text-primary font-medium tracking-wider mb-4 animate-fade-in-up">HELLO, I AM</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Bishal Pathak
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                    <span className="text-gray-200">Senior Data Analyst</span> && <span className="text-gray-200">Data Engineering Enthusiast</span>.
                    I bridge technical and business needs through <span className="text-secondary">data-driven insights</span>.
                </p>

                <div className="flex justify-center items-center space-x-6 mb-12">
                    <SocialLink href="https://github.com/visaalpathak" icon={<Github size={24} />} />
                    <SocialLink href="https://linkedin.com/in/bishalpathak" icon={<Linkedin size={24} />} />
                    <SocialLink href="mailto:visaalpathak@gmail.com" icon={<Mail size={24} />} />
                </div>

                <a href="#about" className="inline-block animate-bounce text-gray-400 hover:text-white transition-colors">
                    <ArrowDown size={32} />
                </a>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:-translate-y-1"
    >
        {icon}
    </a>
);
