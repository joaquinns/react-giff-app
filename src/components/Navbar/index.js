import { Link } from 'wouter'
import { AiOutlineHome } from 'react-icons/ai'

export default function Navbar() {
  return (
    <header className='fixed bottom-0 left-0 right-0 bg-gray-800 h-16 z-10'>
      <nav className='container mx-auto z-10 flex items-center justify-between text-white h-full px-4 sm:px-0'>
        <h1 className='font-bold text-2xl text-white'>Gihppy App</h1>

        <Link to='/'>
          <a>
            <AiOutlineHome size={28} className='text-green-600' />
          </a>
        </Link>
      </nav>
    </header>
  )
}
