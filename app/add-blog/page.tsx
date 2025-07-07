"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBlog() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    const existing = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    localStorage.setItem("blogPosts", JSON.stringify([...existing, newPost]));
    router.push("/blog");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-pink-100 px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-green-600">📝 Add New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="w-full border border-gray-300 p-3 rounded-md h-40 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            placeholder="Write your blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold py-3 px-6 rounded-md shadow-md"
          >
            🚀 Publish Blog
          </button>
        </form>
      </div>
    </main>
  );
}
