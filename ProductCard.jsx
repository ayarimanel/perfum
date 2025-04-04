import React from 'react'
export const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 object-contain"
        />
      </div>
      <h3 className="text-lg font-medium text-[#706C61] mb-2">
        {product.name}
      </h3>
      <div className="text-sm text-[#706C61] mb-1">
        <span className="font-medium">Top Notes:</span> {product.topNotes}
      </div>
      <div className="text-sm text-[#706C61] mb-1">
        <span className="font-medium">Middle Notes:</span> {product.middleNotes}
      </div>
      <div className="text-sm text-[#706C61] mb-3">
        <span className="font-medium">Base Notes:</span> {product.baseNotes}
      </div>
      <div className="text-sm text-[#706C61] italic mb-4">
        Vibe: {product.vibe}
      </div>
      <button className="bg-[#FF8966] hover:bg-[#ff7a54] text-white text-sm py-1 px-4 rounded-full self-start">
        SHOP NOW
      </button>
    </div>
  )
}
