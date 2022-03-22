import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Home from './pages/Home'
import Search from './pages/Search'
import { Route } from 'wouter'
import SearchBar from 'src/components/SearchBar'

function App() {
  return (
    <div className='bg-gray-900 min-h-screen'>
      <Navbar />

      <MainContent>
        <SearchBar />

        <Route path='/' component={Home} />
        <Route path='/search/:keyword' component={Search} />
      </MainContent>
    </div>
  )
}

export default App
