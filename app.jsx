import React from 'react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { QuizCTA } from './components/QuizCTA'
import { ProductShowcase } from './components/ProductShowcase'
export function App() {
  return (
    <div className="min-h-screen w-full bg-[#F8F4E3]">
      <Header />
      <main>
        <HeroSection />
        <QuizCTA />
        <ProductShowcase />
      </main>
    </div>
  )
}
