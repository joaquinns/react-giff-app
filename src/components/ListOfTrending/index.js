import { lazy, Suspense } from 'react'
import { useNearScreen } from 'src/hooks/useNearScreen'

const ListOfTrending = lazy(() => import('./TrendingSearches'))

export default function LazyList() {
  const { isNearScreen, elementRef } = useNearScreen()
  return (
    <Suspense fallback={null}>
      <div ref={elementRef}>{isNearScreen ? <ListOfTrending /> : null}</div>
    </Suspense>
  )
}
