import React from "react";
import PropTypes from "prop-types"; // For prop validation


export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
            </ul>
            {props.ingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            )}
        </section>
    );
}

// Prop validation
IngredientsList.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    getRecipe: PropTypes.func.isRequired,
};