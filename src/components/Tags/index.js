import { useEffect, useState } from 'react'
import { getTagsGifs } from 'src/services/gifs'
import PropTypes from 'prop-types'
import { Link } from 'wouter'

export default function Tags({ title }) {
  const [tags, setTags] = useState([])

  useEffect(() => {
    getTagsGifs(title).then(setTags)
  }, [title])

  return (
    <div className='flex gap-2 flex-wrap justify-center my-4'>
      {tags.map((tag, index) => (
        <Link key={index} to={`/search/${tag?.name}`}>
          <a className='py-2 px-4 font-bold text-md text-white bg-emerald-700 hover:underline rounded-full'>
            #{tag?.name}
          </a>
        </Link>
      ))}
    </div>
  )
}

Tags.propTypes = {
  title: PropTypes.string
}
