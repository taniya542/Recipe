import React from "react";
import IngredientsList from "./Ingredientslist";
import Recipe from "./Recipe";
import { getRecipeFromChefClaude, getRecipeFromMistral } from "../ai";

export default function Form() {
    const [ingredients, setIngredients] = React.useState([
        "all the main spices",
        "pasta",
        "ground beef",
        "tomato paste",
    ]);
    const [recipe, setRecipe] = React.useState("");

    async function getRecipe() {
        try {
            const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
            setRecipe(recipeMarkdown);
        } catch (error) {
            console.error("Failed to fetch recipe:", error);
            setRecipe("Failed to fetch recipe. Please try again.");
        }
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredients) => {
            const updatedIngredients = [...prevIngredients, newIngredient];
            console.log("Updated Ingredients:", updatedIngredients); 
            return updatedIngredients;
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        addIngredient(formData);
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            )}

            {recipe && <Recipe recipe={recipe} />}
        </main>
    );
}