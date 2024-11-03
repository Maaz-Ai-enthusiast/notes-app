// src/pages/home/Home.jsx

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      {/* Welcome Message */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to the Collaborative Notes App
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Easily create, edit, and share notes with your team in real-time.
      </p>

      {/* Getting Started Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started</h2>
        <p className="text-gray-600 mb-4">
          To start, <Link to="/login" className="text-blue-500">log in</Link> or{" "}
          <Link to="/signup" className="text-blue-500">create an account</Link>. Once you're logged in, you can begin adding and managing notes.
        </p>
        <Link to="/notes" className="text-white bg-blue-600 px-4 py-2 rounded">
          Go to Your Notes
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Create Notes</h3>
          <p className="text-gray-600 mb-4">
            Write down your ideas, to-do lists, or any other important information.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Edit & Organize</h3>
          <p className="text-gray-600 mb-4">
            Edit, categorize, and organize your notes to keep everything structured.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaborate</h3>
          <p className="text-gray-600 mb-4">
            Add comments to notes and share them with your team for seamless collaboration.
          </p>
        </div>
      </div>

      {/* Collaborate with Your Team Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Collaborate with Your Team</h2>
        <p className="text-gray-600 mb-4">
          Work together with your team on shared notes. Add comments, discuss ideas, and stay aligned.
        </p>
        <Link to="/profile" className="text-white bg-green-500 px-4 py-2 rounded">
          View Your Profile
        </Link>
      </div>
    </div>
  );
}

export default Home;
