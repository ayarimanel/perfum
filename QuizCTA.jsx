import React, { useState } from 'react'
import { QuizModal } from './quiz/QuizModal'
export const QuizCTA = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  return (
    <section className="w-full py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-[#706C61] uppercase tracking-wide mb-2">
          FIND YOUR SIGNATURE SCENT - TAKE OUR PERSONALITY QUIZ!
        </h2>
        <p className="text-[#706C61] mb-8">
          DISCOVER YOUR PERFECT FRAGRANCE
          <br />
          BASED ON YOUR PERSONALITY AND PREFERENCES
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="bg-[#FF8966] hover:bg-[#ff7a54] text-white py-2 px-6 rounded-full">
            START CUSTOMIZING!
          </button>
          <button
            onClick={() => setIsQuizOpen(true)}
            className="bg-[#E6ADEC] hover:bg-[#d99ade] text-white py-2 px-6 rounded-full"
          >
            TAKE PERSONALITY QUIZ!
          </button>
        </div>
      </div>
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  )
}
