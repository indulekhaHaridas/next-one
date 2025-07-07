// app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-900">
      <Image
        src="https://i.pinimg.com/originals/b4/40/fe/b440fe8b087416820258b711b91ca18a.gif"
        alt="App Logo"
        width={100}
        height={100}
        className="mb-6 drop-shadow-lg"
      />
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-blue-900">
       Welcome to My Blog 📝
      </h1>
      <p className="text-lg sm:text-xl text-center max-w-xl mb-8 text-gray-700">
        Dive into stories, insights, and tutorials crafted with passion using Next.js and TypeScript. Whether you're here to learn, explore, or get inspired — there’s something for everyone. Let’s grow and share knowledge together!
      </p>

      <div className="flex gap-4 flex-col sm:flex-row">
        <Link
          href="/about"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-md text-center text-base font-medium"
        >
          🌟 About Page
        </Link>
        <Link
          href="/contact"
          className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-md text-center text-base font-medium"
        >
          📬 Contact Page
        </Link>
      </div>
    </main>
  );
}
