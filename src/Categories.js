import React from 'react'

const Categories = ({ cate, filter }) => {
  return (
    <div className='btn-container'>
      {cate.map((cat, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filter(cat)}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
