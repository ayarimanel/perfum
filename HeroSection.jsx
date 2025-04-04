import React from 'react'
export const HeroSection = () => {
  return (
    <section className="w-full py-12 px-6 md:px-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative mb-8">HeroSection.jsx

            <h2 className="text-4xl md:text-6xl font-bold text-[#706C61] mb-2 relative">
              Perfume
              <span className="absolute -top-4 -right-4 text-[#E6ADEC] text-lg">✨</span>
            </h2>
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-medium text-[#C287E8] italic">
                Customize your own
              </h3>
              <div className="hidden md:block absolute -right-16 top-1/2 transform -translate-y-1/2">
                <div className="relative">
                  <svg width="80" height="30" viewBox="0 0 80 30" className="fill-[#FF8966]">
                    <path d="M0 15 L65 15 L65 8 L80 15 L65 22 L65 15" />
                  </svg>
                  <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2 text-sm text-[#FF8966]">
                    →
                  </div>
                </div>
              </div>
            </div>
            <div className="h-1 w-24 bg-[#E6ADEC] mt-4 rounded-full"></div>
          </div>
          <p className="text-[#706C61] mb-6 max-w-lg leading-relaxed">
            Design a fragrance that is uniquely yours! Choose from a variety of
            top, middle, and base notes to create a scent that matches your
            style. Customize the intensity, bottle size, and even add a personal
            touch with engraving. Whether you want something subtle for daytime
            or bold for evenings, find the perfect perfume that's made just for
            you!
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-[#E6ADEC] rounded-tl-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Perfume bottle with flowers"
              className="w-full max-w-md rounded-lg shadow-lg relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md z-20">
              <span className="text-sm text-[#706C61]">Flower complexities</span>
            </div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-2 border-r-2 border-[#E6ADEC] rounded-br-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
