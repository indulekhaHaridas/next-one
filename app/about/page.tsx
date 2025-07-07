// pages/about.tsx
"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center bg-gradient-to-br from-yellow-50 to-orange-100">
      <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
        📝 <span className="text-orange-600">Blog App</span>
      </h1>
      <p className="max-w-xl text-lg mb-6">
        This is a beginner-friendly <span className="font-semibold text-orange-600">Blog App</span> built using <span className="font-semibold">Next.js, TypeScript, and Tailwind CSS</span>. It allows users to create, manage, and share blog posts with a clean and responsive interface.
      </p>

      <div className="bg-orange-50 p-4 rounded-md border border-orange-200 mb-6">
        <h2 className="text-xl font-semibold text-orange-700 mb-2">🔧 Features:</h2>
        <ul className="text-left list-none list-inside space-y-1">
          <li>✍️ Add and edit blog posts</li>
          <li>📖 View a list of all posts</li>
          <li>🗑️ Delete posts when no longer needed</li>
          <li>🎨 Styled with Tailwind for clean UI</li>
        </ul>
      </div>

      {/* 👉 Centered Button */}
      <button
        onClick={() => router.push("/add-blog")}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded shadow-md transition"
      >
        ➕ Add New Blog
      </button>

      <p className="mt-6 italic text-gray-600">
        “Every developer should write. Start simple, write often.” 💡
      </p>
    </main>
  );
}
