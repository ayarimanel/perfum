import React from 'react'
import { SearchIcon, ShoppingBagIcon, UserIcon } from 'lucide-react'
export const Header = () => {
  return (
    <header className="bg-[#FF8966] w-full py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-white">✨ Perfumty</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-white border-b-2 border-white font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:border-b-2 hover:border-white">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:border-b-2 hover:border-white">
                Manufacturing
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:border-b-2 hover:border-white">
                Packaging
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="text-white">
            <SearchIcon size={20} />
          </button>
          <button aria-label="Account" className="text-white">
            <UserIcon size={20} />
          </button>
          <button aria-label="Shopping bag" className="text-white">
            <ShoppingBagIcon size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
