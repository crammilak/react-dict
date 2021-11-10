import { useState } from 'react'
import Parent from './components/Parent'
import React from 'react'


const App = () => {

  const [Fruits, setFruits] = useState([
    {
      id: 1,
      fruit: 'Mango',
    },
    {
      id: 2,
      fruit: 'Mango',
    },
    {
      id: 3,
      fruit: 'Grapes',
    },
    {
      id: 4,
      fruit: 'Strawberry',
    },
    {
      id: 4,
      fruit: 'Orange',
    }
  ])

  const [Vegetables, setVegetables] = useState([
    {
      id: 1,
      vege: 'Brocolli',
    },
    {
      id: 2,
      vege: 'Lettuce',
    },
    {
      id: 3,
      vege: 'Carrot',
    },
    {
      id: 4,
      vege: 'Potato',
    },
    {
      id: 4,
      vege: 'Cabbage',
    }

  ])
  return (
    <div>
      <Parent />
    </div>
  )
}

export default App
