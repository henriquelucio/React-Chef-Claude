import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main(){

    const [ingredients, setIngredients] = React.useState([])
    const [recipeShow, setRecipeShow] = React.useState(false)

    function addIngredients(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecipeShow(){
        setRecipeShow(prevRecipeShow => !prevRecipeShow)
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
                toggleRecipeShow= {toggleRecipeShow}
            />}
            {recipeShow && 
            <ClaudeRecipe 
                toggle= {recipeShow}
            />}
        </main>
    )
}