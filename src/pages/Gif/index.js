import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getGifById } from 'src/services/gifs'
import Tags from 'src/components/Tags'
import RelatedGifs from 'src/components/RelatedGifs'
import { Helmet } from 'react-helmet-async'

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
      .catch((err) => console.log(err))
  }, [gifID])

  console.log(gif)

  return (
    <>
      {loading && (
        <>
          <Helmet>
            <title>Cargando...</title>
          </Helmet>
          <h1>Loading</h1>
        </>
      )}
      <div className='p-4'>
        <h1 className='text-gray-200 text-4xl my-8 font-extrabold text-center'>
          {gif?.title}
        </h1>

        <section className='flex flex-col items-center'>
          <div className='flex flex-col md:flex-row gap-2 md:items-end'>
            <img
              src={gif?.images?.downsized_medium.url}
              className='h-80 w-auto md:max-w-lg bg-red-400'
            />
            <button className=' bg-slate-800 text-white font-bold px-5 py-2 rounded hover:opacity-70 transition-opacity duration-200'>
              Copy
            </button>
          </div>
          <Tags title={gif.title} />

          <RelatedGifs gifID={gifID} />
        </section>
      </div>

      <Helmet>
        <title>{String(gif?.title)} || Ghiff App</title>
      </Helmet>
    </>
  )
}

Gif.propTypes = {
  params: PropTypes.object
}
