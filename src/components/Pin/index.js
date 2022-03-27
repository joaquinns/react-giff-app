import PropTypes from 'prop-types'
import { Link } from 'wouter'

export default function Pin({ name }) {
  return (
    <Link to={`/search/${name}`}>
      <a className='text-white text-md text-center font-bold px-5 py-2 bg-red-500 rounded w-max hover:bg-red-800 transition-colors duration-200'>
        {name}
      </a>
    </Link>
  )
}

Pin.propTypes = {
  name: PropTypes.string
}
