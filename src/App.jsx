import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { Experience } from "./sections/Experience"
import { Contact } from "./sections/Contact"
import { Blog } from "./pages/Blog"
import { BlogPost } from "./pages/BlogPost"

const Home = () => (
    <>
        <Hero />
        <About />
        <Experience />
        <Contact />
    </>
)

export default function App() {
    return (
        <div className="bg-dark text-white min-h-screen font-sans selection:bg-primary/30 selection:text-white">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                </Routes>
            </main>
        </div>
    )
}
