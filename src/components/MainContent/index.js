import PropTypes from 'prop-types'

export default function MainContent({ children }) {
  return (
    <main className='container mx-auto pb-14 lg:pt-12 lg:pb-0'>{children}</main>
  )
}

MainContent.propTypes = {
  children: PropTypes.any
}
