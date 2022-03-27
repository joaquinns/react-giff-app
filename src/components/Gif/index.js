import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'wouter'

function Gif({ title = '', gifUrl, id }) {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
      <Link to={`/gif/${id}`}>
        <a className='h-full w-full rounded'>
          <img
            loading='lazy'
            src={gifUrl}
            alt='gif alt'
            className='h-full w-full rounded object-cover border-4 border-transparent hover:border-4 hover:border-green-500 hover:bg-blend-darken'
          />
        </a>
      </Link>
    </div>
  )
}

Gif.propTypes = {
  title: PropTypes.string,
  gifUrl: PropTypes.string,
  id: PropTypes.string
}

export default React.memo(Gif)
