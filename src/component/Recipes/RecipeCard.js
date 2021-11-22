const RecipeCard = (props) =>{
    return(
        <div>
            <h2>{props.recipe.title}</h2>
            <p>{props.recipe.prepTime}</p>
            <div>image</div>

        </div>
    )
}

export default RecipeCard