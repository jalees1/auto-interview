import React from 'react'; // Import React
import Link from 'next/link';
import jobData from '../data/jobData.json';

export default function JobDetails() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700 underline decoration-blue-300">Job Listings</h1> {/* Enhanced heading styling */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border border-gray-300 p-3">Job Title</th>
            <th className="border border-gray-300 p-3">Skills</th>
            <th className="border border-gray-300 p-3">Experience</th>
            <th className="border border-gray-300 p-3">Location</th>
            <th className="border border-gray-300 p-3">Questions Count</th>
            <th className="border border-gray-300 p-3">Minimum Score (%)</th>
            <th className="border border-gray-300 p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job, index) => (
            <React.Fragment key={index}>
              <tr className="hover:bg-gray-100 transition">
                <td className="border border-gray-300 p-3 font-semibold">{job.jobTitle}</td>
                <td className="border border-gray-300 p-3">{job.skills.join(', ')}</td>
                <td className="border border-gray-300 p-3">{job.experience}</td>
                <td className="border border-gray-300 p-3">{job.location}</td>
                <td className="border border-gray-300 p-3">{job.questions.length}</td>
                <td className="border border-gray-300 p-3">{job.minimumScore}</td>
                <td className="border border-gray-300 p-3">
                  <Link href={'/questions'} className="text-blue-600 hover:underline">
                    Interview &gt;&gt;
                  </Link>
                </td>
              </tr>
              <tr>
                <td colSpan="7" className="border border-gray-300 p-3 bg-gray-50 text-gray-700">
                  {job.description}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
