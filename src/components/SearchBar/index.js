import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useLocation } from 'wouter'

export default function SearchBar() {
  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!keyword || keyword === '') {
      return console.error('empty string')
    }
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
    console.log(keyword)
  }

  return (
    <form
      className='flex items-center justify-center mx-4 pt-10'
      onSubmit={handleSubmit}
    >
      <input
        className='rounded-l py-3 px-4 w-full border-none outline-none font-semibold text-indigo-900'
        type='text'
        name='search'
        value={keyword}
        onChange={handleChange}
        placeholder='Search a gif!'
      />
      <button className='rounded-r bg-indigo-600 py-3 px-4 border-none text-white font-bold hover:bg-indigo-800 transition-all hover:scale-110'>
        <FaSearch fill='white' size={24} />
      </button>
    </form>
  )
}
