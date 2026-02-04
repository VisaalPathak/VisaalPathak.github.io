import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";

export const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Eagerly load all markdown files
                const modules = import.meta.glob('../posts/*.md', { query: '?raw', eager: true });
                console.log("Found modules:", modules);

                if (Object.keys(modules).length === 0) {
                    console.warn("No blog posts found in src/posts/*.md");
                    return;
                }

                const loadedPosts = Object.keys(modules).map((key) => {
                    try {
                        const fileContent = modules[key].default; // This is the raw string content
                        const { data } = matter(fileContent);
                        const slug = key.replace('../posts/', '').replace('.md', '');

                        // Parse date safely
                        let parsedDate;
                        if (data.date) {
                            parsedDate = new Date(data.date);
                            if (isNaN(parsedDate.getTime())) {
                                console.warn(`Invalid date in ${key}:`, data.date);
                                parsedDate = new Date(); // Fallback to now
                            }
                        } else {
                            parsedDate = new Date();
                        }

                        return {
                            slug,
                            ...data,
                            parsedDate
                        };
                    } catch (e) {
                        console.error(`Error parsing post ${key}:`, e);
                        return null;
                    }
                }).filter(post => post !== null); // Filter out failed parses

                // Sort by date desc
                loadedPosts.sort((a, b) => b.parsedDate - a.parsedDate);

                console.log("Processed Posts:", loadedPosts);
                setPosts(loadedPosts);
            } catch (err) {
                console.error("Critical error fetching posts:", err);
                setError(err.message);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section className="min-h-screen pt-24 px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-12 text-center">
                <span className="text-primary">/</span> Blog
            </h1>

            {error && (
                <div className="p-4 bg-red-500/20 text-red-200 rounded-lg text-center mb-8">
                    Error loading posts: {error}
                </div>
            )}

            {posts.length === 0 && !error && (
                <div className="text-center text-gray-500">
                    <p>No posts found. Add markdown files to <code>src/posts/</code>.</p>
                </div>
            )}

            <div className="grid gap-8">
                {posts.map((post) => (
                    <div key={post.slug} className="bg-white/5 border border-white/5 rounded-xl p-6 hover:border-primary/50 transition-all group">
                        <div className="flex justify-between items-start mb-4 text-sm text-gray-400">
                            {/* Display raw date string or formatted date */}
                            <span>{post.date ? String(post.date) : "No Date"}</span>
                            <div className="flex gap-2">
                                {post.categories?.map(cat => (
                                    <span key={cat} className="text-secondary">{cat}</span>
                                ))}
                            </div>
                        </div>

                        <Link to={`/blog/${post.slug}`}>
                            <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                {post.title}
                            </h2>
                        </Link>

                        <Link to={`/blog/${post.slug}`} className="text-primary font-medium hover:underline">
                            Read more →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};
