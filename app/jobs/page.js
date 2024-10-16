import React from 'react'; // Import React
import Link from 'next/link';
import jobData from '../data/jobData.json';

export default function JobDetails() {
  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800 underline decoration-blue-300">Job Listings</h1> 
      
      
      <div className="hidden md:block overflow-x-auto"> 
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm"> 
          <thead>
            <tr className="bg-blue-700 text-white text-left">
              <th className="border-b border-gray-300 px-4 py-3">Job Title</th>
              <th className="border-b border-gray-300 px-4 py-3">Skills</th>
              <th className="border-b border-gray-300 px-4 py-3">Experience</th>
              <th className="border-b border-gray-300 px-4 py-3">Location</th>
              <th className="border-b border-gray-300 px-4 py-3">Questions</th>
              <th className="border-b border-gray-300 px-4 py-3">Min Score (%)</th>
              <th className="border-b border-gray-300 px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobData.map((job, index) => (
              <React.Fragment key={index}>
                <tr className="hover:bg-blue-50 transition-all duration-300 ease-in-out"> {/* Smooth hover effect */}
                  <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{job.jobTitle}</td>
                  <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{job.skills.join(', ')}</td>
                  <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{job.experience}</td>
                  <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{job.location}</td>
                  <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{job.questions.length}</td>
                  <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{job.minimumScore}</td>
                  <td className="border-b border-gray-200 px-4 py-3">
                    <Link href={`/questions/`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200 ease-in-out"> {/* Styled button */}
                      Start Interview
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td colSpan="7" className="border-b border-gray-200 px-4 py-3 bg-gray-50 text-gray-600 text-sm italic">
                    {job.description}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* mobile view */}
      <div className="md:hidden">
        {jobData.map((job, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4 transition-transform transform hover:scale-105"> {/* Card layout for mobile */}
            <h2 className="text-lg font-semibold text-gray-800">{job.jobTitle}</h2>
            <p className="text-gray-600"><span className="font-medium">Skills:</span> {job.skills.join(', ')}</p>
            <p className="text-gray-600"><span className="font-medium">Experience:</span> {job.experience}</p>
            <p className="text-gray-600"><span className="font-medium">Location:</span> {job.location}</p>
            <p className="text-gray-600"><span className="font-medium">Questions:</span> {job.questions.length}</p>
            <p className="text-gray-600"><span className="font-medium">Min Score:</span> {job.minimumScore}</p>
            <p className="text-gray-500 italic mt-2">{job.description}</p>
            <Link
              href={`/questions/`}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200 ease-in-out inline-block"
            >
              Start Interview
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

