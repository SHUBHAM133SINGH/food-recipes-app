import { FaUtensils } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='flex justify-between items-center px-8 py-5 bg-slate-900 shadow-lg'>
      <div className='flex items-center gap-3'>
        <FaUtensils className='text-3xl text-orange-400' />
        <h1 className='text-2xl font-bold'>Recipe AI</h1>
      </div>
    </nav>
  )
}

export default Navbar
