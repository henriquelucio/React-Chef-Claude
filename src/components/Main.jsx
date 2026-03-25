import React from "react"

export default function Main(){

    const [ingredients, setIngredients] = React.useState([])

    let ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredients(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
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
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                <div className="get-recipe-container">
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button>Get a recipe</button>
            </section>

        </main>
    )
}