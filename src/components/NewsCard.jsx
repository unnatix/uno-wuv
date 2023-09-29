import React from 'react'

function NewsCard({title, description}) {
  return (
    <div className='shadow-md rounded-md px-7 py-6 text-gray-800 border' >
      <h3 className='font-semibold text-lg mb-3' >{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default NewsCard
