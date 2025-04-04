import React from 'react'
import { ProductCard } from './ProductCard'
export const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Celestial Bloom',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      topNotes: 'Bergamot, Green Tea',
      middleNotes: 'Jasmine, Raspberry',
      baseNotes: 'Sandalwood, White Musk',
      vibe: 'Fresh, floral, and elegant—perfect for daytime wear.'
    },
    {
      id: 2,
      name: 'Golden Dusk',
      image: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      topNotes: 'Grapefruit, Ginger',
      middleNotes: 'Caramel, Blackcurrant',
      baseNotes: 'Coffee, Praline',
      vibe: 'Cozy, sweet, and addictive—perfect for fall and winter.'
    },
    {
      id: 3,
      name: 'Velvet Noir',
      image: 'https://images.unsplash.com/photo-1612968938355-d8f8c9bde599?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      topNotes: 'Pink Pepper, Cardamom',
      middleNotes: 'Vanilla, Almond',
      baseNotes: 'Tonka Bean, Amber',
      vibe: 'Sensual, warm, and luxurious—ideal for evening occasions.'
    },
    {
      id: 4,
      name: 'Ocean Whisper',
      image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      topNotes: 'Pine, Basil',
      middleNotes: 'Lavender, Fig',
      baseNotes: 'Cedarwood, Vetiver',
      vibe: 'Sensual, warm, and luxurious—ideal for evening occasions.'
    }
  ]
  return (
    <section className="w-full py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center text-[#706C61] uppercase tracking-wide mb-8">
          DISCOVER OUR MOST-LOVED SCENTS, CRAFTED TO PERFECTION
        </h2>
        <h3 className="text-xl font-medium text-[#706C61] border-b border-[#706C61] inline-block mb-8">
          Best Sellers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
