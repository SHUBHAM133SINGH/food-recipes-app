// import { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
// import SearchBar from '../components/SearchBar'
// import RecipeCard from '../components/RecipeCard'
// import Loader from '../components/Loader'
// import { fetchRecipes } from '../services/api'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSmile } from '@fortawesome/free-solid-svg-icons';

// function Home() {
//   const [recipes, setRecipes] = useState([])
//   const [search, setSearch] = useState('pizza')
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     handleSearch()
//   }, [])

//   const handleSearch = async () => {
//     try {
//       setLoading(true)
//       const data = await fetchRecipes(search)
//       setRecipes(data)
//       setLoading(false)
//     } catch (error) {
//       console.log(error)
//       setLoading(false)
//     }
//   }

//   return (
//     <div>
//       <Navbar />

//       <div className='text-center mt-10'>
//         <h1 className='text-6xl font-bold'>
//           Discover Amazing Recipes by Shubham Singh.......
//         </h1>
        

//         <p className='mt-5 text-gray-300'>
//           Search millions of delicious recipes instantly.
//         </p>
//       </div>
//       <div><FontAwesomeIcon icon={byPrefixAndName.fas['face-smile']} /></div>

//       <SearchBar
//         search={search}
//         setSearch={setSearch}
//         handleSearch={handleSearch}
//       />

//       {
//         loading
//           ? <Loader />
//           : (
//             <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-10'>
//               {
//                 recipes.map((recipe) => (
//                   <RecipeCard
//                     key={recipe.id}
//                     recipe={recipe}
//                   />
//                 ))
//               }
//             </div>
//           )
//       }
//     </div>
//   )
// }

// export default Home


import { useEffect, useState, useCallback } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/RecipeCard'
import Loader from '../components/Loader'
import { fetchRecipes } from '../services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faUtensils, faFire } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('Pizza')
  const [loading, setLoading] = useState(false)

  const handleSearch = useCallback(async () => {
    try {
      setLoading(true)
      const data = await fetchRecipes(search)
      setRecipes(data || [])
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }, [search])

  useEffect(() => {
    handleSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-black text-white selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section Container */}
      <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
        
        {/* Subtle Decorative Background Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Small Badges for Visual Flair */}
        <div className="inline-flex items-center gap-2 bg-gray-800/80 border border-gray-700/50 backdrop-blur px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-orange-400 mb-6 shadow-sm">
          <FontAwesomeIcon icon={faFire} className="animate-pulse" />
          <span>PROUDLY CRAFTED COOKBOOK</span>
        </div>

        {/* Main Heading with Integrated Smiley */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Discover Amazing Recipes by{' '}
          <span className="block sm:inline bg-linear-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-sm whitespace-nowrap">
            Shubham Singh
            {/* The Smiley: Aligned inline, scales with text, shifts on hover */}
            <FontAwesomeIcon 
              icon={faSmile} 
              className="inline-block ml-3 text-yellow-400 animate-bounce duration-1000 hover:scale-125 transition-transform cursor-pointer align-middle" 
              style={{ animationDuration: '3s' }}
            />
          </span>
        </h1>

        {/* Catchy Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Search millions of delicious recipes instantly. Bring the art of fine dining straight into your home kitchen.
        </p>

        {/* Search Bar Section Wrapper */}
        <div className="mt-10 max-w-2xl mx-auto backdrop-blur-md bg-gray-800/30 p-4 rounded-2xl border border-gray-700/30 shadow-xl">
          <SearchBar
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
        </div>
      </div>

      {/* Recipe Section Section Header */}
      <div className="max-w-7xl mx-auto px-6 mt-4">
        <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-8">
          <FontAwesomeIcon icon={faUtensils} className="text-orange-400 text-xl" />
          <h2 className="text-xl font-bold tracking-wide uppercase text-gray-300">Latest Discoveries</h2>
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-20">
            {recipes && recipes.map((recipe) => (
              <div 
                key={recipe.id || recipe.recipeId}
                className="transform hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
