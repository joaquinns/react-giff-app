import { Link } from 'wouter'
import { AiOutlineHome } from 'react-icons/ai'

export default function Navbar() {
  return (
    <header className='fixed bottom-0 left-0 right-0 lg:top-0 lg:bottom-none bg-gray-800 h-16 z-10'>
      <nav className='container mx-auto z-10 flex items-center justify-between text-white h-full px-4 sm:px-0'>
        <Link to='/'>
          <a>
            <div className='font-extrabold text-3xl text-zinc-200'>
              <span className='text-green-500'>G</span>
              <span className='text-cyan-400'>h</span>
              <span className='text-indigo-600'>i</span>
              <span className='text-red-500'>f</span>
              <span className='text-yellow-500'>f</span> APP
            </div>
          </a>
        </Link>

        <Link to='/'>
          <a className='font-bold text-white lg:flex lg:items-center lg:gap-2 lg:hover:underline '>
            <AiOutlineHome size={28} className='text-green-600 lg:hidden' />
            <span className='hidden lg:block'>Home</span>
          </a>
        </Link>
      </nav>
    </header>
  )
}
