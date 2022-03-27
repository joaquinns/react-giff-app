import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getGifById } from 'src/services/gifs'
import Tags from 'src/components/Tags'
import RelatedGifs from 'src/components/RelatedGifs'
import { Helmet } from 'react-helmet-async'
import CopyButton from 'src/components/CopyButton'

export default function Gif({ params }) {
  const { gifID } = params
  const [gif, setGif] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifById(gifID)
      .then((singleGif) => {
        setGif(singleGif)
        setLoading(false)
      })
      .catch((err) => console.err(err))
  }, [gifID])

  return (
    <>
      {loading && (
        <>
          <Helmet>
            <title>Cargando...</title>
          </Helmet>
        </>
      )}
      <div className='p-4'>
        <Helmet>
          <title>{String(gif?.title)} || Ghiff App</title>
        </Helmet>
        <h1 className='text-gray-200 text-4xl my-8 font-extrabold text-center'>
          {gif?.title}
        </h1>

        <section className='flex flex-col items-center'>
          <div className='flex flex-col md:flex-row gap-2 md:items-end'>
            <img
              loading='lazy'
              src={gif?.images?.downsized_medium.url}
              className='h-80 w-full md:max-w-lg bg-red-400'
            />
            <CopyButton text={gif?.images?.downsized_medium.url} />
          </div>
          <Tags title={gif.title} />
          <RelatedGifs gifID={gifID} />
        </section>
      </div>
    </>
  )
}

Gif.propTypes = {
  params: PropTypes.object
}
