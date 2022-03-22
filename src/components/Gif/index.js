import PropTypes from 'prop-types'

export default function Gif({ title, gifUrl }) {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
      <h1 className='text-white text-left text-2xl px-2 py-4'>{title}</h1>
      <img
        src={gifUrl}
        alt='gif alt'
        className='h-full w-full rounded object-cover'
      />
    </div>
  )
}

Gif.propTypes = {
  title: PropTypes.string,
  gifUrl: PropTypes.string
}
