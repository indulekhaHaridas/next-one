"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogList() {
    type BlogPost = {
  id: number;
  title: string;
  content: string;
};

  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([])


  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    setPosts(stored);
  }, []);

  const deletePost = (id: number) => {
    const updated = posts.filter((p) => p.id !== id);
    localStorage.setItem("blogPosts", JSON.stringify(updated));
    setPosts(updated);
  };

  return (
    <main className="min-h-screen px-6 py-10 bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">📚 My Blog Posts</h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600">No posts available. Go ahead and create one!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-semibold text-purple-800 mb-2">{post.title}</h2>
                  <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
                </div>

                <div className="mt-4 flex justify-end gap-4">
                  <button
                    onClick={() => router.push(`/blog/${post.id}`)}
                    className="text-blue-600 hover:text-blue-800 transition font-medium"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="text-red-500 hover:text-red-700 transition font-medium"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
