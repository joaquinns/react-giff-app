import PropTypes from 'prop-types'
import ListedGifs from 'src/components/ListedGifs'

export default function Search({ params }) {
  const { keyword } = params
  return (
    <div>
      <ListedGifs keyword={keyword} />
    </div>
  )
}

Search.propTypes = {
  params: PropTypes.object
}
