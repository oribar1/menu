import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const cats = ['all', ...new Set(items.map((item) => item.category))]
  const [menuItems, setMenuItems] = useState(items)
  const [cat, setCat] = useState(cats)
  const filter = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newit = items.filter((item) => item.category === category)
    setMenuItems(newit)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
        </div>
        <Categories cate={cat} filter={filter}></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  )
}

export default App
