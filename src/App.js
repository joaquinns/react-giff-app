import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Home from './pages/Home'
import Search from './pages/Search'
import { Route } from 'wouter'
import { HelmetProvider } from 'react-helmet-async'
import Gif from './pages/Gif'

function App() {
  return (
    <HelmetProvider>
      <div className='bg-gray-900 min-h-screen'>
        <Navbar />

        <MainContent>
          <Route path='/' component={Home} />
          <Route path='/search/:keyword/:raiting?' component={Search} />
          <Route path='/gif/:gifID' component={Gif} />
        </MainContent>
      </div>
    </HelmetProvider>
  )
}

export default App
