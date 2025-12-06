const showRecipe = (response) => {
    console.log("Response received");
    
     new Typewriter("#recipe", {
  strings: response.data.answer,
  autoStart: true,
   cursor: null,
    delay: 20
});
}

const generateRecipe = (event) =>{
    event.preventDefault();

    let userInstructionsElement = document.querySelector("#user-instructions");

    let apiKey = "tc9bc00550o41810d3a94ff0f0fe01cb";
let context = "You are a recipe-only AI assistant. You must ONLY generate recipes. If the user asks anything that is not related to food, ingredients, cooking, or recipes, you must refuse by replying in bold: <strong>THIS BOT IS ONLY USED FOR RECIPES!!</strong>. Write each instruction on a new line <br />, and use proper HTML headings for different sections of the recipe such as <h2>Ingredients</h2>, <h2>Instructions</h2>, and <h2>Notes</h2>. Use metric measurements for all ingredients. Ensure the recipe is easy to follow, clearly structured, and written in simple HTML.";
let prompt = `Generate a recipe based on ${userInstructionsElement.value} `;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Processiong");
axios.get(apiUrl).then(showRecipe);

}
let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);