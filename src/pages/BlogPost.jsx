import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import matter from "gray-matter";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";

// CSS for syntax highlighting (optional, requires importing a theme in index.css or here)
import "highlight.js/styles/atom-one-dark.css";

export const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState("");
    const [meta, setMeta] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            try {
                // Dynamically import the markdown file based on slug
                // Note: Vite requires glob for dynamic imports usually, but we can try direct import if the path is known
                // Or better, re-use the glob approach to find the match
                const modules = import.meta.glob('../posts/*.md', { query: '?raw', eager: true });
                const matchedPath = `../posts/${slug}.md`;

                if (modules[matchedPath]) {
                    const { data, content } = matter(modules[matchedPath].default);
                    setMeta(data);
                    setContent(content);
                } else {
                    setContent("# 404 Not Found\nPost not found.");
                }

            } catch (err) {
                console.error(err);
                setContent("# Error\nCould not load post.");
            }
        };

        fetchPost();
    }, [slug]);

    if (!content) return <div className="text-center pt-24">Loading...</div>;

    return (
        <article className="min-h-screen pt-24 px-6 max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={18} /> Back to Blogs
            </Link>

            <header className="mb-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    {meta.title}
                </h1>
                <div className="flex gap-4 text-gray-400 text-sm">
                    <time dateTime={meta.date ? new Date(meta.date).toISOString() : new Date().toISOString()}>
                        {meta.date ? new Date(meta.date).toLocaleDateString() : "No Date"}
                    </time>
                    <div className="flex gap-2">
                        {meta.tags?.map(tag => (
                            <span key={tag} className="text-secondary">#{tag}</span>
                        ))}
                    </div>
                </div>
            </header>

            <div className="prose prose-invert max-w-none">
                <Markdown
                    rehypePlugins={[rehypeRaw, rehypeHighlight]}
                    remarkPlugins={[remarkGfm]}
                >
                    {content}
                </Markdown>
            </div>
        </article>
    );
};
