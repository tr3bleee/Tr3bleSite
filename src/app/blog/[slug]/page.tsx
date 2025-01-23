"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeToogle from "@/components/ThemeToogle";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
	"typescript-guide": {
		title: "Getting Started with TypeScript",
		date: "2024-03-21",
		content: `# Getting Started with TypeScript

TypeScript is a powerful superset of JavaScript that adds static typing to the language. Let's explore its key features and how it can improve your development experience.

## Why TypeScript?

- Static typing
- Better IDE support
- Enhanced code maintainability
- Improved team collaboration

## Basic Types

\`\`\`typescript
// Basic types
let name: string = "John";
let age: number = 30;
let isStudent: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
\`\`\`

Start using TypeScript in your next project to write more reliable and maintainable code!`,
	},
	"web-dev-best-practices": {
		title: "Web Development Best Practices",
		date: "2024-03-22",
		content: `# Web Development Best Practices

Let's explore some essential practices that every web developer should follow for building better applications.

## 1. Performance Optimization

- Minimize HTTP requests
- Optimize images
- Use lazy loading
- Implement caching strategies

## 2. Security

- Always use HTTPS
- Implement proper authentication
- Sanitize user inputs
- Keep dependencies updated

## 3. Accessibility

- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Test with screen readers

Following these practices will help you create more robust and user-friendly web applications.`,
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
					<div className="markdown-content">
						<ReactMarkdown
							components={{
								code({ className, children, ...props }) {
									const match = /language-(\w+)/.exec(className || "");
									return match ? (
										<SyntaxHighlighter
											style={oneDark}
											language={match[1]}
											PreTag="div"
										>
											{String(children).replace(/\n$/, "")}
										</SyntaxHighlighter>
									) : (
										<code className={className} {...props}>
											{children}
										</code>
									);
								},
							}}
						>
							{post.content}
						</ReactMarkdown>
					</div>
				</article>
				<ThemeToogle />
			</main>
			<Footer />
		</>
	);
}
