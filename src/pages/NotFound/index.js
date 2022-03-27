import PropTypes from 'prop-types'
import SearchBar from 'src/components/SearchBar'

export default function NotFound({ params }) {
  return (
    <div className='p-4'>
      <SearchBar />
      <h1 className='my-16 font-bold text-white text-4xl text-center'>
        404, Sorry the page <span className='text-red-400'>{params.rest}</span>{' '}
        does not exist!
      </h1>
    </div>
  )
}

NotFound.propTypes = {
  params: PropTypes.string
}
