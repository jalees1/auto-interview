'use client';

import { useState, useEffect } from 'react';
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
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-red-500">Job not found.</h2>
      </div>
    );
  }

  const questions = job.questions || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [timeRemaining, setTimeRemaining] = useState(120); // Initialize with 120 seconds

  const router = useRouter(); // Initialize the router for navigation

  // Use useEffect to set up the timer for each question
  useEffect(() => {
    // Reset the timer whenever the question changes
    setTimeRemaining(120);

    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          handleNext(); // Auto-move to next question when time runs out
          return 120; // Reset timer for next question
        }
        return prevTime - 1;
      });
    }, 1000);

    // Clear timer when component unmounts or question changes
    return () => clearInterval(timer);
  }, [currentQuestionIndex]);

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

  const handleSkip = () => {
    // Move to the next question without answering
    handleNext();
  };

  const handleAnswer = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  // Check if there are any questions to display
  if (questions.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-red-500">No questions available for this job.</h2>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">{job.jobTitle}</h2>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-gray-800">Question {currentQuestionIndex + 1} of {questions.length}</h3>
        <div className="bg-blue-600 text-white font-bold px-4 py-2 rounded-full mt-2 md:mt-0">
          {timeRemaining} seconds remaining
        </div>
      </div>

      <p className="mb-4 text-gray-700">{currentQuestion}</p>

      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg mb-6 text-gray-800"
        rows="5"
        value={answers[currentQuestionIndex]}
        onChange={handleAnswer}
        placeholder="Enter your answer here..."
      ></textarea>

      <div className="flex justify-between items-center flex-wrap">
        <button
          className={`px-6 py-2 rounded-lg text-white font-medium 
          ${currentQuestionIndex === 0 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>

        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium mx-2"
          onClick={handleSkip}
        >
          Skip
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
          onClick={handleNext}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}

