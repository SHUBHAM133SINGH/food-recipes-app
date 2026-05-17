import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function RecipeDetails() {

  const { id } = useParams()

  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    getRecipe()
  }, [])

  const getRecipe = async () => {

    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )

    setRecipe(response.data.meals[0])
  }

  if (!recipe) {
    return <h1>Loading...</h1>
  }

  return (

    <div className='p-10'>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className='w-full h-[400px] object-cover rounded-2xl'
      />

      <h1 className='text-5xl font-bold mt-8'>
        {recipe.strMeal}
      </h1>

      <p className='mt-5 text-lg'>
        {recipe.strInstructions}
      </p>

    </div>
  )
}

export default RecipeDetails