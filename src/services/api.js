import axios from 'axios'

export const fetchRecipes = async (query) => {

  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  )

  return response.data.meals || []
}