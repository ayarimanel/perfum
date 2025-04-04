import React, { useState } from 'react'
import { XIcon } from 'lucide-react'
const questions = [
  {
    id: 1,
    text: "Choose your perfect morning routine:",
    image: "https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    options: [
      {
        text: "A peaceful garden meditation with herbal tea",
        notes: {
          top: ["Green Tea", "Eucalyptus"],
          middle: ["Lavender", "Sage"],
          base: ["Sandalwood"]
        }
      },
      {
        text: "A luxurious bubble bath with fresh flowers",
        notes: {
          top: ["Bergamot"],
          middle: ["Rose", "Jasmine"],
          base: ["White Musk"]
        }
      },
      {
        text: "A cozy breakfast in bed with pastries",
        notes: {
          top: ["Orange"],
          middle: ["Vanilla", "Caramel"],
          base: ["Praline"]
        }
      }
    ]
  },
  {
    id: 2,
    text: "Pick your dream aesthetic:",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    options: [
      {
        text: "Cottagecore with fresh flowers and vintage lace",
        notes: {
          top: ["Lemon"],
          middle: ["Rose", "Lily"],
          base: ["Vetiver"]
        }
      },
      {
        text: "Modern minimalist with clean lines",
        notes: {
          top: ["Grapefruit"],
          middle: ["Ylang-Ylang"],
          base: ["Cedarwood"]
        }
      },
      {
        text: "Cozy hygge with soft textures",
        notes: {
          top: ["Cardamom"],
          middle: ["Vanilla", "Almond"],
          base: ["Amber"]
        }
      }
    ]
  },
  {
    id: 3,
    text: "Choose your perfect afternoon activity:",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    options: [
      {
        text: "Reading in a beautiful flower garden",
        notes: {
          top: ["Basil", "Mint"],
          middle: ["Jasmine", "Chamomile"],
          base: ["Patchouli"]
        }
      },
      {
        text: "Baking sweet treats in a sunny kitchen",
        notes: {
          top: ["Pink Pepper"],
          middle: ["Honey", "Caramel"],
          base: ["Coffee", "Coconut"]
        }
      },
      {
        text: "Creating art in a light-filled studio",
        notes: {
          top: ["Bergamot"],
          middle: ["Fig", "Raspberry"],
          base: ["Benzoin"]
        }
      }
    ]
  }
]
export const QuizModal = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState({
    top: [],
    middle: [],
    base: []
  })
  if (!isOpen) return null
  const handleAnswer = (questionIndex, optionIndex) => {
    const newAnswers = [...answers]
    newAnswers[questionIndex] = optionIndex
    setAnswers(newAnswers)
    if (questionIndex === questions.length - 1) {
      calculateResults(newAnswers)
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }
  const calculateResults = (finalAnswers) => {
    const selectedNotes = {
      top: new Set(),
      middle: new Set(),
      base: new Set()
    }
    finalAnswers.forEach((answerIndex, questionIndex) => {
      const answer = questions[questionIndex].options[answerIndex]
      answer.notes.top?.forEach(note => selectedNotes.top.add(note))
      answer.notes.middle?.forEach(note => selectedNotes.middle.add(note))
      answer.notes.base?.forEach(note => selectedNotes.base.add(note))
    })
    setResults({
      top: Array.from(selectedNotes.top),
      middle: Array.from(selectedNotes.middle),
      base: Array.from(selectedNotes.base)
    })
    setShowResults(true)
  }
  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setResults({ top: [], middle: [], base: [] })
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#706C61] hover:text-[#FF8966]"
        >
          <XIcon size={24} />
        </button>
        {!showResults ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#706C61] text-center mb-8">
              Personality-Scent Test
            </h2>
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <img
                src={questions[currentQuestion].image}
                alt="Question illustration"
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl text-[#706C61] mb-6">
                {questions[currentQuestion].text}
              </h3>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQuestion, index)}
                    className="w-full p-4 text-left rounded-lg border-2 border-[#E6ADEC] hover:border-[#C287E8] hover:bg-[#F8F4E3] transition-colors"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-center space-x-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentQuestion
                      ? "bg-[#FF8966]"
                      : index < currentQuestion
                      ? "bg-[#E6ADEC]"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-[#706C61]">
              Your Perfect Scent Profile
            </h2>
            <div className="space-y-4 text-left">
              <div>
                <h3 className="font-medium text-[#FF8966]">Top Notes:</h3>
                <p className="text-[#706C61]">{results.top.join(", ")}</p>
              </div>
              <div>
                <h3 className="font-medium text-[#C287E8]">Middle Notes:</h3>
                <p className="text-[#706C61]">{results.middle.join(", ")}</p>
              </div>
              <div>
                <h3 className="font-medium text-[#E6ADEC]">Base Notes:</h3>
                <p className="text-[#706C61]">{results.base.join(", ")}</p>
              </div>
            </div>
            <button
              onClick={resetQuiz}
              className="bg-[#FF8966] hover:bg-[#ff7a54] text-white py-2 px-6 rounded-full mt-6"
            >
              Take Quiz Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
