"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeToogle from "@/components/ThemeToogle";
import { useParams } from "next/navigation";

interface BlogPost {
	title: string;
	date: string;
	content: string;
}

const posts: Record<string, BlogPost> = {
	"hello-world": {
		title: "Hello World",
		date: "2024-03-20",
		content: `# Hello World!

Welcome to my blog! `,
	},
};

export default function BlogPost() {
	const { slug } = useParams();
	const post = posts[slug as string];

	if (!post) {
		return (
			<>
				<Header />
				<main className="min-h-screen p-8 md:p-24">
					<h1 className="text-4xl font-bold mb-8">Post not found</h1>
					<ThemeToogle />
				</main>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Header />
			<main className="min-h-screen p-8 md:p-24">
				<article className="prose dark:prose-invert max-w-none">
					<h1 className="text-4xl font-bold mb-4">{post.title}</h1>
					<p className="text-gray-600 dark:text-gray-400 mb-8">{post.date}</p>
					<div className="markdown-content">{post.content}</div>
				</article>
				<ThemeToogle />
			</main>
			<Footer />
		</>
	);
}
