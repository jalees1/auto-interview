'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import jobData from '../data/jobData.json';
import { useParams } from 'next/navigation'; // Use useParams to get route parameters

export default function QuestionPage() {
  const { jobIndex } = useParams(); // Use useParams to get jobIndex from URL
  const index = jobIndex ? parseInt(jobIndex) : 0; // Parse it as an integer

  // Get the job based on the index
  const job = jobData[index];

  // Check if the job exists
  if (!job) {
    return <div className="container mx-auto p-4"><h2>Job not found.</h2></div>;
  }

  const questions = job.questions || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const router = useRouter(); // Initialize the router for navigation

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Navigate to the summary page when done
      router.push('/summary');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswer = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  // Check if there are any questions to display
  if (questions.length === 0) {
    return <div className="container mx-auto p-4"><h2>No questions available for this job.</h2></div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">{job.jobTitle}</h2>
      <p className="mb-4">{job.description}</p>
      <h3 className="text-lg mb-2">Question {currentQuestionIndex + 1} of {questions.length}</h3>
      <p className="mb-4">{currentQuestion}</p>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows="4"
        value={answers[currentQuestionIndex]}
        onChange={handleAnswer}
        placeholder="Enter your answer here..."
      ></textarea>
      <div className="flex justify-between">
        <button 
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleNext}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}
