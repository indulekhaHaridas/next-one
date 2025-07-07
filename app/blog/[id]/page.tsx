"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBlog() {
  const router = useRouter();
  const { id } = useParams();
  const blogId = Number(id);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    const post = posts.find((p: any) => p.id === blogId);
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [blogId]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    const updated = posts.map((p: any) =>
      p.id === blogId ? { ...p, title, content } : p
    );
    localStorage.setItem("blogPosts", JSON.stringify(updated));
    router.push("/blog");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">✏️ Edit Blog Post</h1>
        <form onSubmit={handleUpdate} className="space-y-5">
          <input
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            type="text"
            value={title}
            placeholder="Enter blog title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="w-full border border-gray-300 p-3 rounded-md h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            value={content}
            placeholder="Edit blog content..."
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-3 px-6 rounded-md shadow-md"
          >
            💾 Save Changes
          </button>
        </form>
      </div>
    </main>
  );
}
