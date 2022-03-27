import React, { useCallback, useEffect, useRef } from 'react'
import Gif from 'src/components/Gif'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { useGif } from 'src/hooks/useGif'
import { useNearScreen } from 'src/hooks/useNearScreen'
import GifSkeleton from 'src/components/GifSkeleton'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet-async'

export default function ListedGifs({ keyword, raiting }) {
  const { gifs, loading, setPage, loadingNextGifs } = useGif({
    keyword,
    raiting
  })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  // some error if you pass in the callback hook a callback into a debounce
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  )

  useEffect(() => {
    if (isNearScreen) handleNextPage()
  }, [handleNextPage, isNearScreen])

  return (
    <section className='p-4'>
      <h1 className='text-red-400 text-4xl my-8 font-extrabold'>
        Results of{' '}
        <span className='text-red-200 font-extrabold'>
          {decodeURI(keyword)}
        </span>
      </h1>
      <div className='grid gap-2 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {gifs.map((gif) => (
          <Gif
            key={uuidv4()}
            id={gif.id}
            title={gif.title}
            gifUrl={gif.images.downsized_medium.url}
          />
        ))}
        {loading ||
          (loadingNextGifs && (
            <>
              <Helmet>
                <title>Cargando...</title>
              </Helmet>
              <GifSkeleton />
              <GifSkeleton />
              <GifSkeleton />
              <GifSkeleton />
              <GifSkeleton />
            </>
          ))}
      </div>
      <Helmet>
        <title>Results of {decodeURI(keyword)} | Ghiff</title>
        <meta
          name='description'
          content={`list of results about ${keyword} gif search`}
        />
      </Helmet>
      <div ref={externalRef}></div>
    </section>
  )
}

ListedGifs.propTypes = {
  keyword: PropTypes.string,
  raiting: PropTypes.string
}
