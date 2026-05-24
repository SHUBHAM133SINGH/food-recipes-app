// import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function RecipeDetails() {

//   const { id } = useParams()

//   const [recipe, setRecipe] = useState(null)

//   useEffect(() => {
//     getRecipe()
//   }, [])

//   const getRecipe = async () => {

//     const response = await axios.get(
//       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
//     )

//     setRecipe(response.data.meals[0])
//   }

//   if (!recipe) {
//     return <h1>Loading...</h1>
//   }

//   return (

//     <div className='p-10'>

//       <img
//         src={recipe.strMealThumb}
//         alt={recipe.strMeal}
//         className='w-full h-[400px] object-cover rounded-2xl'
//       />

//       <h1 className='text-5xl font-bold mt-8'>
//         {recipe.strMeal}
//       </h1>

//       <p className='mt-5 text-lg'>
//         {recipe.strInstructions}
//       </p>

//     </div>
//   )
// }

// export default RecipeDetails

// import { useParams, Link } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock, faUtensils, faGlobe, faTags, faArrowLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// function RecipeDetails() {
//   const { id } = useParams()
//   const [recipe, setRecipe] = useState(null)

//   useEffect(() => {
//     getRecipe()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id])

//   const getRecipe = async () => {
//     try {
//       const response = await axios.get(
//         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
//       )
//       setRecipe(response.data.meals[0])
//     } catch (error) {
//       console.error("Error fetching recipe details:", error)
//     }
//   }

//   if (!recipe) {
//     return (
//       <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-400 tracking-wide font-medium">Fetching secret ingredients...</p>
//         </div>
//       </div>
//     )
//   }

//   // Zomato/Swiggy Trick: Clean and format the raw text instructions into a clean array of steps
//   const instructionSteps = recipe.strInstructions
//     ? recipe.strInstructions
//         .split(/\r?\n|\.\s+/) // Splits by line breaks or periods
//         .map(step => step.trim())
//         .filter(step => step.length > 5) // Filters out empty lines or random letters
//     : []

//   return (
//     <div className="min-h-screen bg-gray-950 text-gray-100 antialiased pb-20">
      
//       {/* Top Floating Navigation */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//         <Link 
//           to="/" 
//           className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-orange-400 transition-colors bg-gray-900/60 border border-gray-800 backdrop-blur-md px-4 py-2 rounded-xl"
//         >
//           <FontAwesomeIcon icon={faArrowLeft} />
//           <span>Back to Recipes</span>
//         </Link>
//       </div>

//       {/* Main Container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
//           {/* LEFT COLUMN: Sticky Media Card */}
//           <div className="lg:col-span-5 lg:sticky lg:top-6">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 group">
//               <img
//                 src={recipe.strMealThumb}
//                 alt={recipe.strMeal}
//                 className="w-full h-[350px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               {/* Soft overlay vignette */}
//               <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
//             </div>

//             {/* Quick Informational Meta Badges */}
//             <div className="mt-6 grid grid-cols-2 gap-3">
//               {recipe.strCategory && (
//                 <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-3.5 flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
//                     <FontAwesomeIcon icon={faUtensils} />
//                   </div>
//                   <div>
//                     <span className="block text-xs text-gray-500 font-medium uppercase tracking-wider">Category</span>
//                     <span className="text-sm font-bold text-gray-200">{recipe.strCategory}</span>
//                   </div>
//                 </div>
//               )}
//               {recipe.strArea && (
//                 <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-3.5 flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
//                     <FontAwesomeIcon icon={faGlobe} />
//                   </div>
//                   <div>
//                     <span className="block text-xs text-gray-500 font-medium uppercase tracking-wider">Cuisine</span>
//                     <span className="text-sm font-bold text-gray-200">{recipe.strArea}</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* RIGHT COLUMN: Recipe Details Content */}
//           <div className="lg:col-span-7 bg-gray-900/40 border border-gray-800/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl">
            
//             {/* Food Title Header */}
//             <div className="border-b border-gray-800 pb-6">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
//                 {recipe.strMeal}
//               </h1>
              
//               {recipe.strTags && (
//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {recipe.strTags.split(',').map((tag, idx) => (
//                     <span key={idx} className="inline-flex items-center gap-1.5 bg-gray-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full border border-gray-700/50">
//                       <FontAwesomeIcon icon={faTags} className="text-gray-500 text-[10px]" />
//                       {tag.trim()}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Preparation / Cooking Time Mock Estimate */}
//             <div className="flex items-center gap-6 my-6 text-sm text-gray-400 font-medium bg-gray-900/50 p-4 rounded-2xl border border-gray-800/40">
//               <div className="flex items-center gap-2">
//                 <FontAwesomeIcon icon={faClock} className="text-orange-400" />
//                 <span>Prep: <strong className="text-gray-200">15 mins</strong></span>
//               </div>
//               <div className="h-4 w-px bg-gray-800"></div>
//               <div className="flex items-center gap-2">
//                 <FontAwesomeIcon icon={faUtensils} className="text-amber-400" />
//                 <span>Servings: <strong className="text-gray-200">2-3 People</strong></span>
//               </div>
//             </div>

//             {/* Structured Cooking Steps Section */}
//             <div>
//               <h2 className="text-xl font-bold tracking-wide text-white mb-6 uppercase flex items-center gap-2">
//                 <span className="w-1.5 h-5 bg-orange-500 rounded-full inline-block"></span>
//                 Cooking Instructions
//               </h2>

//               <div className="space-y-4">
//                 {instructionSteps.length > 0 ? (
//                   instructionSteps.map((step, index) => (
//                     <div 
//                       key={index} 
//                       className="group flex items-start gap-4 p-4 rounded-2xl bg-gray-900/30 hover:bg-gray-800/30 border border-transparent hover:border-gray-800 transition-all duration-200"
//                     >
//                       {/* Interactive Step Badge */}
//                       <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 font-bold text-sm flex items-center justify-center transition-colors group-hover:bg-orange-500 group-hover:text-white">
//                         {index + 1}
//                       </div>
                      
//                       {/* Step Paragraph Text */}
//                       <p className="text-gray-300 text-base leading-relaxed pt-0.5 font-medium">
//                         {step.endsWith('.') ? step : `${step}.`}
//                       </p>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-gray-400 italic">No detailed steps provided for this recipe.</p>
//                 )}
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default RecipeDetails


import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUtensils, faGlobe, faTags, faArrowLeft, faBasketShopping } from '@fortawesome/free-solid-svg-icons'

function RecipeDetails() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    getRecipe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const getRecipe = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      setRecipe(response.data.meals[0])
    } catch (error) {
      console.error("Error fetching recipe details:", error)
    }
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 tracking-wide font-medium">Fetching secret ingredients...</p>
        </div>
      </div>
    )
  }

  // Zomato/Swiggy Trick: Clean and format the raw text instructions into a clean array of steps
  const instructionSteps = recipe.strInstructions
    ? recipe.strInstructions
        .split(/\r?\n|\.\s+/) // Splits by line breaks or periods
        .map(step => step.trim())
        .filter(step => step.length > 5) // Filters out empty lines or random letters
    : []

  // Dynamic API parsing to combine ingredients and measurements
  const ingredientsList = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]

    if (ingredient && ingredient.trim() !== "") {
      ingredientsList.push({
        name: ingredient.trim(),
        measure: measure ? measure.trim() : "To taste"
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 antialiased pb-20">
      
      {/* Top Floating Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-orange-400 transition-colors bg-gray-900/60 border border-gray-800 backdrop-blur-md px-4 py-2 rounded-xl"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Recipes</span>
        </Link>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Sticky Media Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 group">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-[350px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Soft overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Quick Informational Meta Badges */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {recipe.strCategory && (
                <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                    <FontAwesomeIcon icon={faUtensils} />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium uppercase tracking-wider">Category</span>
                    <span className="text-sm font-bold text-gray-200">{recipe.strCategory}</span>
                  </div>
                </div>
              )}
              {recipe.strArea && (
                <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <FontAwesomeIcon icon={faGlobe} />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium uppercase tracking-wider">Cuisine</span>
                    <span className="text-sm font-bold text-gray-200">{recipe.strArea}</span>
                  </div>
                </div>
              )}
              {ingredientsList.length > 0 && (
                <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-3.5 flex items-center gap-3 col-span-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <FontAwesomeIcon icon={faBasketShopping} />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium uppercase tracking-wider">Ingredients Total</span>
                    <span className="text-sm font-bold text-gray-200">{ingredientsList.length} Items needed</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Recipe Details Content */}
          <div className="lg:col-span-7 bg-gray-900/40 border border-gray-800/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl">
            
            {/* Food Title Header */}
            <div className="border-b border-gray-800 pb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                {recipe.strMeal}
              </h1>
              
              {recipe.strTags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {recipe.strTags.split(',').map((tag, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 bg-gray-800 text-gray-400 text-xs font-semibold px-3 py-1 rounded-full border border-gray-700/50">
                      <FontAwesomeIcon icon={faTags} className="text-gray-500 text-[10px]" />
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Preparation / Cooking Time Mock Estimate */}
            <div className="flex items-center gap-6 my-6 text-sm text-gray-400 font-medium bg-gray-900/50 p-4 rounded-2xl border border-gray-800/40">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="text-orange-400" />
                <span>Prep: <strong className="text-gray-200">15 mins</strong></span>
              </div>
              <div className="h-4 w-px bg-gray-800"></div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faUtensils} className="text-amber-400" />
                <span>Servings: <strong className="text-gray-200">2-3 People</strong></span>
              </div>
            </div>

            {/* NEW: Ingredients UI Grid Section */}
            <div className="mb-8 pb-8 border-b border-gray-800/60">
              <h2 className="text-xl font-bold tracking-wide text-white mb-6 uppercase flex items-center gap-2">
                <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
                Required Ingredients
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ingredientsList.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-900/40 border border-gray-800/50 hover:border-gray-700/80 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Check-dot custom icon */}
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors"></span>
                      <span className="text-gray-300 font-medium text-sm capitalize truncate">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-gray-800 text-emerald-400 border border-gray-700/30 whitespace-nowrap">
                      {item.measure}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Structured Cooking Steps Section */}
            <div>
              <h2 className="text-xl font-bold tracking-wide text-white mb-6 uppercase flex items-center gap-2">
                <span className="w-1.5 h-5 bg-orange-500 rounded-full inline-block"></span>
                Cooking Instructions
              </h2>

              <div className="space-y-4">
                {instructionSteps.length > 0 ? (
                  instructionSteps.map((step, index) => (
                    <div 
                      key={index} 
                      className="group flex items-start gap-4 p-4 rounded-2xl bg-gray-900/30 hover:bg-gray-800/30 border border-transparent hover:border-gray-800 transition-all duration-200"
                    >
                      {/* Interactive Step Badge */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 font-bold text-sm flex items-center justify-center transition-colors group-hover:bg-orange-500 group-hover:text-white">
                        {index + 1}
                      </div>
                      
                      {/* Step Paragraph Text */}
                      <p className="text-gray-300 text-base leading-relaxed pt-0.5 font-medium">
                        {step.endsWith('.') ? step : `${step}.`}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 italic">No detailed steps provided for this recipe.</p>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default RecipeDetails