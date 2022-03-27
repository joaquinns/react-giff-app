import Navbar from 'src/components/Navbar'
import MainContent from 'src/components/MainContent'
import Home from 'src/pages/Home'
import Search from 'src/pages/Search'
import NotFound from 'src/pages/NotFound'
import { Route, Switch } from 'wouter'
import { HelmetProvider } from 'react-helmet-async'
import Gif from 'src/pages/Gif'
import ScrollTopButton from 'src/components/ScrollTopButton'

function App() {
  return (
    <HelmetProvider>
      <div className='bg-gray-900 min-h-screen'>
        <ScrollTopButton />
        <Navbar />

        <MainContent>
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/search/:keyword/:raiting?' component={Search} />
            <Route path='/gif/:gifID' component={Gif} />
            <Route path='/:rest*' component={NotFound} />
          </Switch>
        </MainContent>
      </div>
    </HelmetProvider>
  )
}

export default App
