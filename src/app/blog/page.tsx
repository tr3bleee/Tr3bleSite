"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeToogle from "@/components/ThemeToogle";
import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const posts: BlogPost[] = [
  {
    title: "Hello World",
    date: "2024-03-20",
    description: "Welcome to my blog! This is my first post.",
    slug: "hello-world"
  },
  {
    title: "Getting Started with TypeScript",
    date: "2024-03-21",
    description: "A beginner's guide to TypeScript and its powerful features.",
    slug: "typescript-guide"
  },
  {
    title: "Web Development Best Practices",
    date: "2024-03-22",
    description: "Essential tips and tricks for modern web development.",
    slug: "web-dev-best-practices"
  }
];

export default function Blog() {
  return (
    <>
      <Header />
      <main className="min-h-screen p-8 md:p-24 animate-fade-in">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Blog</h1>
        <Link href="/auth">
          <button className="text-xl font-semibold hover:text-purple-600 border-4 rounded-3xl p-3 px-6 transition-colors duration-500">
            Auth
          </button>
        </Link>
        </div>
        <div className="grid gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-colors">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold mb-2 hover:text-purple-600 transition-colors">{post.title}</h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-800 dark:text-gray-200">{post.description}</p>
            </article>
          ))}
        </div>
      </main>
      <ThemeToogle />
      <Footer />
    </>
  );
}