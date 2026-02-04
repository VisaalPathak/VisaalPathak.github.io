import { Mail, Send } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-primary font-medium tracking-wider mb-4">WHAT'S NEXT?</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <a href="mailto:visaalpathak@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary/20 transition-all rounded text-lg font-medium group">
                <Mail size={20} />
                Say Hello
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <footer className="mt-20 text-gray-500 text-sm">
                <p>Designed & Built by Visaal Pathak</p>
                <div className="mt-2 text-xs opacity-50">&copy; {new Date().getFullYear()} Visaal Pathak</div>
            </footer>
        </section>
    );
};
