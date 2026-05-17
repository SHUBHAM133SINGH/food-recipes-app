import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) {

  return (

    <motion.div
      whileHover={{ scale: 1.05 }}
      className='bg-slate-800 rounded-2xl overflow-hidden shadow-xl'
    >

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className='w-full h-[220px] object-cover'
      />

      <div className='p-5'>

        <h2 className='text-xl font-bold mb-3'>
          {recipe.strMeal}
        </h2>

        <Link
          to={`/recipe/${recipe.idMeal}`}
          className='bg-orange-500 px-4 py-2 rounded-lg inline-block'
        >
          View
        </Link>

      </div>

    </motion.div>
  )
}

export default RecipeCard