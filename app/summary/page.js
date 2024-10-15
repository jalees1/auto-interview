'use client'

import Link from 'next/link'
import jobData from '../data/jobData.json'

export default function SummaryPage() {
  // Assuming we want to summarize the first job in the jobData array
  const job = jobData[0]; // Change the index based on the selected job
  const questionsAttended = job.questions.length; // All questions are assumed to be answered
  const totalQuestions = job.questions.length;
  const totalScore = "No value"; // Placeholder for total score
  const status = "Test"; // Placeholder for status

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Interview Summary for {job.jobTitle}</h2>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border border-gray-300 p-2">Questions attended</th>
            <th className="border border-gray-300 p-2">Total Score</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">{questionsAttended} of {totalQuestions}</td>
            <td className="border border-gray-300 p-2">{totalScore}</td>
            <td className="border border-gray-300 p-2">{status}</td>
          </tr>
        </tbody>
      </table>
      <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
        Home
      </Link>
    </div>
  )
}
