/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Heritage Suit',
    tagline: 'Timeless precision.',
    description: 'A masterfully tailored charcoal wool suit, designed for the modern gentleman who values tradition.',
    longDescription: 'Crafted from Super 120s Italian wool, The Heritage Suit is the cornerstone of a refined wardrobe. Featuring a slim-fit silhouette, notched lapels, and hand-finished pick stitching, it offers a perfect balance of structure and comfort. The charcoal grey hue provides versatility for both boardroom and black-tie events.',
    price: 895,
    category: "Men's Suite",
    imageUrl: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['100% Italian Wool', 'Hand-Finished Details', 'Breathable Lining'],
    reviews: [
      { id: 'r1', userName: 'James W.', rating: 5, comment: 'The fit is absolutely perfect. The wool feels incredibly premium.', date: 'Jan 15, 2025' },
      { id: 'r2', userName: 'Michael S.', rating: 4, comment: 'Great suit, though the sleeves were a tad long for me. Easily tailored.', date: 'Feb 02, 2025' }
    ]
  },
  {
    id: 'p2',
    name: 'Emerald Silk Gown',
    tagline: 'Elegance in motion.',
    description: 'A flowing floor-length gown in deep emerald silk, designed to capture the light and every eye in the room.',
    longDescription: 'The Emerald Silk Gown is a celebration of fluid grace. Made from heavy-weight mulberry silk, it features a delicate cowl neck and an open back with adjustable ties. The bias-cut fabric drapes beautifully over the body, creating a silhouette that is both sophisticated and effortless.',
    price: 650,
    category: "Women's Dress",
    imageUrl: 'https://images.unsplash.com/photo-1539008835657-9e8e9680fe0a?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1539008835657-9e8e9680fe0a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['100% Mulberry Silk', 'Bias Cut', 'Hand-Rolled Hems'],
    reviews: [
      { id: 'r3', userName: 'Sophia L.', rating: 5, comment: 'Stunning color and the silk is so soft. Felt like a queen wearing it.', date: 'Dec 20, 2024' }
    ]
  },
  {
    id: 'p3',
    name: 'Linen Riviera Suit',
    tagline: 'Summer sophistication.',
    description: 'A lightweight beige linen suit, perfect for summer weddings and coastal evenings.',
    longDescription: 'Embrace the warmth with our Riviera Suit. Tailored from premium Belgian linen, this two-piece set is designed to keep you cool without sacrificing style. The unconstructed shoulder and half-lining provide a relaxed yet sharp look that transitions seamlessly from day to night.',
    price: 720,
    category: "Men's Suite",
    imageUrl: 'https://images.unsplash.com/photo-1594932224491-ef243e7a7c1c?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1594932224491-ef243e7a7c1c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1598532213005-52257b52d0c5?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Premium Belgian Linen', 'Unconstructed Shoulder', 'Natural Horn Buttons']
  },
  {
    id: 'p4',
    name: 'Midnight Velvet Mini',
    tagline: 'Bold and tactile.',
    description: 'A structured velvet cocktail dress in midnight blue, featuring a modern square neckline.',
    longDescription: 'The Midnight Velvet Mini is designed for impact. The rich, plush velvet has a subtle sheen that adds depth to the deep blue color. With a structured bodice and a slight A-line skirt, this dress offers a flattering fit that feels as good as it looks.',
    price: 480,
    category: "Women's Dress",
    imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Silk-Blend Velvet', 'Square Neckline', 'Concealed Back Zip']
  },
  {
    id: 'p5',
    name: 'The Camel Overcoat',
    tagline: 'The ultimate layer.',
    description: 'A classic double-breasted overcoat in premium camel cashmere blend.',
    longDescription: 'Invest in a piece that lasts a lifetime. Our Camel Overcoat is crafted from a luxurious blend of wool and cashmere, offering unparalleled warmth and softness. The classic double-breasted design and peak lapels create a powerful silhouette that elevates any outfit, from casual to formal.',
    price: 1200,
    category: "Men's Suite",
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Wool-Cashmere Blend', 'Double-Breasted', 'Satin Lining']
  },
  {
    id: 'p6',
    name: 'Champagne Satin Slip',
    tagline: 'Minimalist luxury.',
    description: 'A versatile champagne satin slip dress that transitions from day to night with ease.',
    longDescription: 'The Champagne Satin Slip is the epitome of minimalist luxury. Crafted from high-luster satin with a hint of stretch, it features delicate spaghetti straps and a subtle side slit. Layer it under a blazer for a professional look, or wear it alone for an elegant evening out.',
    price: 390,
    category: "Women's Dress",
    imageUrl: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['High-Luster Satin', 'Adjustable Straps', 'Side Slit Detail']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Art of Bespoke Tailoring",
        date: "April 12, 2025",
        excerpt: "Discover the meticulous process behind our hand-finished suits and the heritage of Italian wool.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
                "Bespoke tailoring is more than just making a suit; it is an intimate dialogue between the tailor and the wearer. Every stitch tells a story of precision, patience, and a deep respect for the craft that has been passed down through generations."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "Our process begins with the selection of the finest materials. We source our wool from the historic mills of Biella, Italy, where the water is pure and the expertise is unparalleled. This foundation allows us to create garments that not only fit perfectly but also feel like a second skin."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif" },
                "\"A well-tailored suit is a suit that makes you feel like the best version of yourself.\""
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "At Aura, we believe that true luxury lies in the details. From the hand-rolled lapels to the functional buttonholes, every element is considered. It is this commitment to excellence that defines our heritage and our future."
            )
        )
    },
    {
        id: 2,
        title: "The Silk Road: A Modern Journey",
        date: "March 28, 2025",
        excerpt: "Exploring the timeless elegance of mulberry silk and its role in contemporary evening wear.",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Silk has long been the fabric of royalty, a material that embodies both strength and delicacy. In our latest collection, we reimagine this ancient fiber for the modern woman, creating silhouettes that are as comfortable as they are captivating."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "\"Silk is a living fabric,\" says our lead designer, Elena Rossi. \"It breathes with you, it moves with you. It has a natural luster that no synthetic material can replicate. Our goal was to let the fabric speak for itself, using minimal seams and bias cuts to enhance its natural drape.\""
            ),
            React.createElement("div", { className: "my-12 p-8 bg-[#EBE7DE] font-serif text-[#2C2A26] italic text-center" },
                React.createElement("p", null, "The silk falls like water"),
                React.createElement("p", null, "Cool against the skin."),
                React.createElement("p", null, "A whisper of emerald"),
                React.createElement("p", null, "In the evening light."),
                React.createElement("p", null, "This is the grace"),
                React.createElement("p", null, "Of timeless design.")
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Whether it's a floor-length gown or a simple slip dress, silk brings a sense of occasion to every moment. It is a reminder that beauty and comfort are not mutually exclusive."
            )
        )
    },
    {
        id: 3,
        title: "Sustainable Luxury: The Linen Story",
        date: "March 15, 2025",
        excerpt: "Why linen remains the ultimate choice for conscious, high-end summer fashion.",
        image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "As we move towards a more sustainable future, linen has emerged as a hero of the fashion industry. Derived from the flax plant, it is one of the most eco-friendly fibers available, requiring minimal water and no pesticides to grow."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "But sustainability is only part of the story. Linen has a unique texture and character that only improves with age. It is breathable, durable, and possesses a natural elegance that is perfect for the relaxed sophistication of summer tailoring."
            ),
             React.createElement("div", { className: "my-12 p-8 bg-[#2C2A26] text-[#F5F2EB] font-serif italic text-center" },
                React.createElement("p", null, "Sun-bleached flax fields"),
                React.createElement("p", null, "Woven into light."),
                React.createElement("p", null, "The summer air breathes.")
            )
        )
    }
];

export const BRAND_NAME = 'Aura';
export const PRIMARY_COLOR = 'stone-900'; 
export const ACCENT_COLOR = 'stone-500';