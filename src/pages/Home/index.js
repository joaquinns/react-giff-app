import Gif from 'src/components/Gif'
import GifSkeleton from 'src/components/GifSkeleton'
import LazyList from 'src/components/ListOfTrending'
import { Helmet } from 'react-helmet-async'
import { useGif } from 'src/hooks/useGif'
import SearchBar from 'src/components/SearchBar'

export default function Home() {
  const { loading, gifs } = useGif()

  return (
    <section className='p-4'>
      <SearchBar />
      <h1 className='text-green-400 text-4xl my-8 font-extrabold'>
        Last search
      </h1>
      <div className='grid gap-2 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {loading && (
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
        )}
        {gifs.map((gif) => (
          <Gif
            key={gif.id}
            id={gif.id}
            title={gif.title}
            gifUrl={gif.images.downsized_medium.url}
          />
        ))}
      </div>
      <Helmet>
        <title>Ghiff App</title>
        <meta name='description' content='A web app to search for gif images' />
      </Helmet>
      <LazyList />
    </section>
  )
}
