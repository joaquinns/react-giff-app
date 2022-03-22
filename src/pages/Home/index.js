import { useState, useEffect } from 'react'
import { getGifs } from 'src/services/gifs'
import Gif from 'src/components/Gif'
import GifSkeleton from 'src/components/GifSkeleton'

export default function Home() {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    setLoading(true)
    getGifs(signal).then((gif) => {
      setGifs(gif)
      setLoading(false)
    })

    return () => controller.abort()
  }, [])

  return (
    <section className='p-4'>
      <h1 className='text-green-400 text-5xl my-8'>Trending</h1>
      <div className='grid gap-10 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {loading && (
          <>
            <GifSkeleton />
            <GifSkeleton />
            <GifSkeleton />
            <GifSkeleton />
            <GifSkeleton />
          </>
        )}
        {gifs.map((gif) => (
          <Gif
            key={gif.id}
            title={gif.title}
            gifUrl={gif.images.downsized_medium.url}
          />
        ))}
      </div>
    </section>
  )
}
