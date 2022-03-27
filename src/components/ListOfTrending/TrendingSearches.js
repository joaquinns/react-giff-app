import { useState, useEffect } from 'react'
import { getSearchTerms } from 'src/services/gifs'
import Pin from 'src/components/Pin'

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getSearchTerms().then(setTrends)
  }, [])

  return (
    <div className='flex gap-2 w-full overflow-x-clip mb-20 mt-6 flex-wrap justify-center'>
      {trends.map((trend) => (
        <Pin key={trend} name={trend} />
      ))}
    </div>
  )
}
