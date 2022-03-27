import SearchBar from 'src/components/SearchBar'
import PropTypes from 'prop-types'
import ListedGifs from 'src/components/ListedGifs'

export default function Search({ params }) {
  const { keyword, raiting } = params
  return (
    <div>
      <SearchBar initialKeyword={keyword} initialRaiting={raiting} />
      <ListedGifs keyword={keyword} raiting={raiting} />
    </div>
  )
}

Search.propTypes = {
  params: PropTypes.object
}
