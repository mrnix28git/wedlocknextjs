"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const questions = [
  {
    id: 1,
    text: "For whom you are looking for?",
    options: ["Child", "Myself", "Sibling", "Friend", "Relative"],
  },
  {
    id: 2,
    text: "Have you tried looking for your life partner online before?",
    options: ["I'm new to it", "Sometimes", "Prefer not to say"],
  },
  {
    id: 3,
    text: "How long you have been looking for?",
    options: ["Just started", "It's been a while", "My friends or family were looking for me before"],
  },
  {
    id: 4,
    text: "What are your wedding goals?",
    options: ["Serious to get married soon", "Should understand each other first", "Not sure, just browsing"],
  },
  {
    id: 5,
    text: "I an age",
    options: ["18","20","22","24"],
  },
  {
    id: 6,
    text: "I am looking for a partner of age",
    options: ["18-24","25-36","37+"],
  },
  {
    id: 7,
    text: "I am a",
    options: ["Man","Women","Non-binary"],
  },
  {
    id: 8,
    text: "I am looking for a partner of age",
    options: ["Man","Women","Non-binary"],
  },
];

const MultiStepForm: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  //   const router = useRouter();

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption) {
      const updatedAnswers = [...answers, selectedOption];
      setAnswers(updatedAnswers);
      setSelectedOption("");

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        console.log("Form completed", updatedAnswers);
      }
    }
  };
  const handleSkip = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#007EAF] text-white  pt-[83.5px]">
      <div className="w-full max-w-md p-8 space-y-6 ">
        <div className="text-center">
          <Image
            src="/Logo.svg"
            width={400}
            height={500}
            alt="Wedlock Logo"
            className="w-72 h-24 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold">
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2 mb-4">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
          <p className="my-4 text-5xl font-semibold">{questions[currentQuestion].text}</p>
          <p className="text-[#FFFFFF90]">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {questions[currentQuestion].options.map((option, index) => (
            <div
              className="flex items-center justify-between rounded-xl h-10 px-5 text-white bg-[#FFFFFF80]  "
              key={index}
            >
              <label
                htmlFor={`option-${index}`}
                className="ml-3 block  font-medium "
              >
                {option}
              </label>
              <input
                id={`option-${index}`}
                name="option"
                type="checkbox"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
            </div>
          ))}
          <div className="flex justify-between mt-6  relative left-96">
            <button
              type="button"
              className=""
              onClick={handleSkip}
            >
              Skip the questions
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-[#007EAF] bg-white rounded-md"
            >
              Continue --{">"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
