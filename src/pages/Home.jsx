import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/RecipeCard'
import Loader from '../components/Loader'
import { fetchRecipes } from '../services/api'

function Home() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('pizza')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    handleSearch()
  }, [])

  const handleSearch = async () => {
    try {
      setLoading(true)
      const data = await fetchRecipes(search)
      setRecipes(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div>
      <Navbar />

      <div className='text-center mt-10'>
        <h1 className='text-6xl font-bold'>
          Discover Amazing Recipes
        </h1>

        <p className='mt-5 text-gray-300'>
          Search millions of delicious recipes instantly.
        </p>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {
        loading
          ? <Loader />
          : (
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-10'>
              {
                recipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                  />
                ))
              }
            </div>
          )
      }
    </div>
  )
}

export default Home
