import React from "react"

export default function Main(){


    const [ingredients, setIngredients] = React.useState([])
    let ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredients(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form onSubmit={addIngredients} className="add-ingredient-form">
                <input 
                    aria-label="Add ingredient" 
                    type="text" 
                    placeholder="e.g. oregano"
                    name="ingredient"  />
                <button>+ Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}