import React from 'react'
import ZodiacCard from '../ZodiacCard/ZodiacCard.js'
import backgroundImg from '../../background.png'
import './Main.css'

export default function Main({ items }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {items.map((item) => (
        <ZodiacCard key={item.name} {...item} />
      ))}
    </main>
  )
}
