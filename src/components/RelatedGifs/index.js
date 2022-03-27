import { useState, useEffect } from 'react'
import Gif from 'src/components/Gif'
import { getRelatedGifs } from 'src/services/gifs'
import PropTypes from 'prop-types'

export default function RelatedGifs({ gifID }) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoading(true)
    getRelatedGifs(gifID)
      .then((gif) => {
        setGifs(gif)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [gifID])

  console.log(gifs)

  return (
    <div>
      <h1 className='text-gray-200 text-2xl my-8 font-extrabold text-center md:text-left'>
        Related Gifs
      </h1>
      <div className='grid w-full gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {gifs.map((gif) => (
          <>
            {loading && <h1>Loading</h1>}
            <Gif
              key={gif.id + String(Date.now())}
              gifUrl={gif.images?.original.url}
              id={gif.id}
            />
          </>
        ))}
      </div>
    </div>
  )
}

RelatedGifs.propTypes = {
  gifID: PropTypes.string
}
