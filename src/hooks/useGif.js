import { useState, useEffect } from 'react'
import { getSearch } from 'src/services/gifs'

const INITIAL_PAGE = 0

export const useGif = ({ keyword, raiting } = { keyword: null }) => {
  const [gifs, setGifs] = useState([])
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loading, setloading] = useState(false)
  const [loadingNextGifs, setLoadingNextGifs] = useState(false)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword')

  useEffect(() => {
    setloading(true)
    const controller = new AbortController()
    const signal = controller.signal
    getSearch({ keyword: keywordToUse, signal, raiting }).then((gif) => {
      setGifs(gif)
      localStorage.setItem('lastKeyword', keywordToUse)
      setloading(false)
    })

    return () => controller.abort()
  }, [keyword, keywordToUse, raiting])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextGifs(true)
    const controller = new AbortController()
    const signal = controller.signal
    getSearch({ keyword: keywordToUse, signal, page, raiting }).then(
      (nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs))
        setLoadingNextGifs(false)
      }
    )

    return () => controller.abort()
  }, [page, setGifs, keywordToUse, raiting])

  return { loading, gifs, setPage, loadingNextGifs }
}
