import { lazy, Suspense } from 'react'
import { useNearScreen } from 'src/hooks/useNearScreen'

const ListOfTrendingSearches = lazy(() => import('./TrendingSearches'))

export default function LazyList() {
  const { isNearScreen, elementRef } = useNearScreen()
  return (
    <Suspense fallback={null}>
      <div ref={elementRef}>
        {isNearScreen ? <ListOfTrendingSearches /> : null}
      </div>
    </Suspense>
  )
}
