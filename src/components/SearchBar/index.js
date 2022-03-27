import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'
import { useForm } from 'src/hooks/useForm'
import { useLocation } from 'wouter'

const RAITINGS = ['g', 'pg', 'pg-13', 'r']

export default function SearchBar({
  initialKeyword = '',
  initialRaiting = 'g'
}) {
  // const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
  // const [raiting, setRaiting] = useState(initialRaiting)
  const [, pushLocation] = useLocation()

  const { keyword, raiting, resetKeyword, updateKeyword, updateRaiting } =
    useForm({ initialKeyword, initialRaiting })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!keyword || keyword === '') {
      return console.error('empty string')
    }
    // setKeyword('')
    resetKeyword()
    pushLocation(`/search/${keyword}/${raiting}`)
  }

  const handleChange = (e) => {
    // setKeyword(e.target.value)
    updateKeyword(e.target.value)
  }

  const handleChangeRaiting = (e) => {
    // setRaiting(e.target.value)
    updateRaiting(e.target.value)
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
      <div className='ml-2 flex justify-center'>
        <select
          className='form-select block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          aria-label='Default select example'
          value={raiting}
          onChange={handleChangeRaiting}
        >
          <option disabled className='text-center'>
            Raiting Types
          </option>
          {RAITINGS.map((raiting, index) => (
            <option key={index}>{raiting}</option>
          ))}
        </select>
      </div>
    </form>
  )
}

SearchBar.propTypes = {
  initialKeyword: PropTypes.string,
  initialRaiting: PropTypes.string
}
