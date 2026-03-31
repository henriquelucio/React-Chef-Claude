import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../../ai"

export default function Main(){

    const [ingredients, setIngredients] = React.useState([])
    const [recipeInfo, setRecipeInfo] = React.useState("")

    function addIngredients(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe(){
        const recipe = await getRecipeFromMistral(ingredients)
        setRecipeInfo(recipe)
    }

    return (
        <main>
            <form action={addIngredients} className="add-ingredient-form">
                <input 
                    aria-label="Add ingredient" 
                    type="text" 
                    placeholder="e.g. oregano"
                    name="ingredient"  />
                <button>+ Add Ingredient</button>
            </form>
            {ingredients.length > 0 && 
            <IngredientsList 
                ingredients= {ingredients}
                getRecipe= {getRecipe}
            />}
            {recipeInfo && 
            <ClaudeRecipe 
                toggle= {recipeInfo}
            />}
        </main>
    )
}