import { useEffect, useState } from 'react'
import { getTagsGifs } from 'src/services/gifs'
import PropTypes from 'prop-types'
import { Link } from 'wouter'

export default function Tags({ title }) {
  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()
    const signal = controller.signal
    getTagsGifs(title, signal).then((tag) => {
      setTags(tag)
      setLoading(false)
    })

    return () => controller.abort()
  }, [title])

  return (
    <div className='flex gap-2 flex-wrap justify-center my-4'>
      {loading ? (
        <>
          <div className='py-4 px-12  bg-slate-600 animate-pulse rounded-full'></div>
          <div className='py-4 px-12  bg-slate-600 animate-pulse rounded-full'></div>
          <div className='py-4 px-12  bg-slate-600 animate-pulse rounded-full'></div>
          <div className='py-4 px-12  bg-slate-600 animate-pulse rounded-full'></div>
          <div className='py-4 px-12  bg-slate-600 animate-pulse rounded-full'></div>
        </>
      ) : (
        tags.map((tag, index) => (
          <Link key={index} to={`/search/${tag?.name}`}>
            <a className='py-2 px-4 font-bold text-md text-white bg-emerald-700 hover:underline rounded-full'>
              #{tag?.name}
            </a>
          </Link>
        ))
      )}
    </div>
  )
}

Tags.propTypes = {
  title: PropTypes.string
}
