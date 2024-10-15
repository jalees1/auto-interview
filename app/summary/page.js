// "use client"
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button } from "@/components/ui/button";

// import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"; // Importing chevron icons

// export default function InterviewSummary({
//   jobTitle,
//   questionsAttended,
//   totalQuestions,
//   totalScore,
//   maxScore,
//   passingScore,
//   questions
// }) {
//   const router = useRouter();
//   const [showQuestions, setShowQuestions] = useState(false);

//   const isQualified = totalScore >= passingScore;

//   return (
//     <div className="container mx-auto p-6 max-w-3xl bg-gray-50 rounded-lg shadow-lg space-y-8 mt-20">
//       {/* Header Section */}
//       <div className="text-center">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-2">
//           Thank you <span className="text-blue-600">for completing the interview</span>
//         </h1>
//         <h2 className="text-xl font-semibold text-blue-600 mb-6">Interview Summary</h2>
//       </div>

//       {/* Score Table */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <table className="w-full table-auto text-center text-lg text-gray-700 border-collapse">
//           <thead>
//             <tr className="bg-blue-600 text-white">
//               <th className="p-4">Questions Attended</th>
//               <th className="p-4">Total Score</th>
//               <th className="p-4">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="font-medium">
//               <td className="border p-4">{questionsAttended} of {totalQuestions}</td>
//               <td className="border p-4">{totalScore}</td>
//               <td className="border p-4">
//                 {isQualified ? 'Qualified' : 'Better Luck Next Time'}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* View Questions Button */}
//       <div 
//         className="flex justify-between items-center bg-blue-600 text-white py-3 px-5 rounded-lg cursor-pointer" 
//         onClick={() => setShowQuestions(!showQuestions)}
//       >
//         <span className="font-semibold text-lg">View Questions and Answers</span>
//         <span className="text-2xl">{showQuestions ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
//       </div>

//       {/* Questions Section */}
//       {showQuestions && (
//         <div className="bg-white p-6 mt-4 rounded-lg shadow-md">
//           <table className="w-full table-auto text-center text-lg text-gray-700">
//             <thead>
//               <tr className="bg-blue-600 text-white">
//                 <th className="p-4">Question</th>
//                 <th className="p-4">Answer</th>
//                 <th className="p-4">Score</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.isArray(questions) && questions.length > 0 ? (
//                 questions.map((question) => (
//                   <tr key={question.id} className="font-medium">
//                     <td className="border p-4">{question.question}</td>
//                     <td className="border p-4">{question.skipped ? "Skipped" : question.userAnswer}</td>
//                     <td className="border p-4">
//                       {question.skipped ? "0" : question.userAnswer === question.correctAnswer ? `+${question.marks}` : `-${question.marks}`}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={3} className="p-4 text-gray-600">No questions available.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Home Button */}
//       <div className="flex justify-center">
//         <Button 
//           className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded-md font-semibold"
//           onClick={() => router.push('/')}
//         >
//           Home
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"; // Importing chevron icons

export default function InterviewSummary({
  jobTitle,
  questionsAttended,
  totalQuestions,
  totalScore,
  maxScore,
  passingScore,
  questions
}) {
  const router = useRouter();
  const [showQuestions, setShowQuestions] = useState(false);
  
  const isQualified = totalScore >= passingScore;

  return (
    <div className="container mx-auto p-6 max-w-3xl bg-gray-50 rounded-lg shadow-lg space-y-8 mt-20">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          Thank you <span className="text-blue-600">for completing the interview</span>
        </h1>
        <h2 className="text-xl font-semibold text-blue-600 mb-6">Interview Summary</h2>
      </div>

      {/* Score Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full table-auto text-center text-lg text-gray-700 border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4">Questions Attended</th>
              <th className="p-4">Total Score</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-medium">
              <td className="border p-4">{questionsAttended} of {totalQuestions}</td>
              <td className="border p-4">{totalScore}</td>
              <td className="border p-4">
                {isQualified ? 'Qualified' : 'Better Luck Next Time'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* View Questions Button */}
      <div 
        className="flex justify-between items-center bg-blue-600 text-white py-3 px-5 rounded-lg cursor-pointer" 
        onClick={() => setShowQuestions(!showQuestions)}
      >
        <span className="font-semibold text-lg">View Questions and Answers</span>
        <span className="text-2xl">{showQuestions ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
      </div>

      {/* Questions Section */}
      {showQuestions && (
        <div className="bg-white p-6 mt-4 rounded-lg shadow-md">
          <table className="w-full table-auto text-center text-lg text-gray-700">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-2 sm:p-4">Question</th>
                <th className="p-2 sm:p-4">Answer</th>
                <th className="p-2 sm:p-4">Score</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(questions) && questions.length > 0 ? (
                questions.map((question) => (
                  <tr key={question.id} className="font-medium">
                    <td className="border p-2 sm:p-4">{question.question}</td>
                    <td className="border p-2 sm:p-4">{question.skipped ? "Skipped" : question.userAnswer}</td>
                    <td className="border p-2 sm:p-4">
                      {question.skipped ? "0" : question.userAnswer === question.correctAnswer ? `+${question.marks}` : `-${question.marks}`}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="p-4 text-gray-600">No questions available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Home Button */}
      <div className="flex justify-center">
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded-md font-semibold"
          onClick={() => router.push('/')}
        >
          Home
        </Button>
      </div>
    </div>
  );
}
