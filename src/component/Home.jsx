const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My React App 🚀
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Build fast, modern, and beautiful web applications using React and Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition">
            Get Started
          </button>

          <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
