import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => setIsOpen(false);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-dark/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                    Visaal<span className="text-white">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {isHome && navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-primary transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    {!isHome && (
                        <Link to="/" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">
                            Home
                        </Link>
                    )}
                    <Link to="/blog" className="px-4 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-all text-sm font-medium">
                        Blog
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col space-y-4 shadow-2xl">
                    {isHome && navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-primary block text-lg font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    {!isHome && (
                        <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary block text-lg font-medium">
                            Home
                        </Link>
                    )}
                    <Link to="/blog" onClick={() => setIsOpen(false)} className="text-primary hover:text-blue-400 block text-lg font-medium">
                        Blog
                    </Link>
                </div>
            )}
        </nav>
    );
};
