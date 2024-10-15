import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-20">
      {/* Main Content */}
      <div className="bg-white p-10 rounded-lg shadow-md text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Auto Interview Platform</h1>
        <p className="text-lg text-gray-600 mb-8">Practice, Prepare, and Ace Your Interviews with Confidence!</p>

        {/* Button to Navigate to Job Listings */}
        <Link href="/jobs" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition">
          Looking for jobs? Click here to explore!
        </Link>
      </div>
    </div>
  );
}
