const generateRecipe = (event) =>{
    event.preventDefault();

    new Typewriter("#recipe", {
  strings: "The Recipe will appear here",
  autoStart: true,
});
}
let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);