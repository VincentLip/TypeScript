import { recipes } from "./recipes.js";
const display = document.querySelector("#Recipe");
const filterName = document.querySelector("#filter-name");
const filterPrepTime = document.querySelector("#filter-preptime");
const filterCookTime = document.querySelector("#filter-cooktime");
const choiceIngredient = document.getElementsByName("choice");
const choiceBtn = document.querySelector("#valide-choice");
const recipesList = [];
const refreshRecipe = () => {
    display.innerHTML = "";
    for (const key in recipes) {
        recipesList.push(Object.assign({ id: key }, recipes[key]));
    }
    recipesList.forEach(recette => {
        let newDivTitle = document.createElement('div');
        let newDivDescription = document.createElement('div');
        newDivTitle.className = "bg-dark rounded p-3";
        newDivDescription.className = "bg-dark rounded p-3";
        newDivTitle.textContent += recette.name;
        for (const instruction of recette.instructions) {
            newDivDescription.textContent += instruction;
        }
        display.appendChild(newDivTitle);
        newDivTitle.appendChild(newDivDescription);
    });
};
filterName.addEventListener('input', () => {
    display.innerHTML = "";
    let filter = filterName.value.toLocaleLowerCase();
    let search = recipesList.filter(el => el.name.toLocaleLowerCase().includes(filter));
    search.forEach(recette => {
        let newDivTitle = document.createElement('div');
        let newDivDescription = document.createElement('div');
        newDivTitle.className = "bg-dark rounded p-3";
        newDivDescription.className = "bg-dark rounded p-3";
        newDivTitle.textContent += recette.name;
        for (const instruction of recette.instructions) {
            newDivDescription.textContent += instruction;
        }
        display.appendChild(newDivTitle);
        newDivTitle.appendChild(newDivDescription);
    });
});
filterPrepTime.addEventListener('input', () => {
    display.innerHTML = "";
    let filter = filterPrepTime.value.toLocaleLowerCase();
    let search = recipesList.filter(el => el.prepTime.toLocaleLowerCase().includes(filter));
    search.forEach(recette => {
        let newDivTitle = document.createElement('div');
        let newDivDescription = document.createElement('div');
        newDivTitle.className = "bg-dark rounded p-3";
        newDivDescription.className = "bg-dark rounded p-3";
        newDivTitle.textContent += `${recette.name} prep time :${recette.prepTime}`;
        for (const instruction of recette.instructions) {
            newDivDescription.textContent += instruction;
        }
        display.appendChild(newDivTitle);
        newDivTitle.appendChild(newDivDescription);
    });
});
filterCookTime.addEventListener('input', () => {
    display.innerHTML = "";
    let filter = filterCookTime.value.toLocaleLowerCase();
    console.log(filter);
    let search = recipesList.filter(el => el.cookTime.toLocaleLowerCase().includes(filter));
    console.log(search);
    search.forEach(recette => {
        let newDivTitle = document.createElement('div');
        let newDivDescription = document.createElement('div');
        newDivTitle.className = "bg-dark rounded p-3";
        newDivDescription.className = "bg-dark rounded p-3";
        newDivTitle.textContent += `${recette.name} cook time : ${recette.cookTime}`;
        for (const instruction of recette.instructions) {
            newDivDescription.textContent += instruction;
        }
        display.appendChild(newDivTitle);
        newDivTitle.appendChild(newDivDescription);
    });
});
choiceBtn.addEventListener('click', () => {
    display.innerHTML = "";
    let filter = choice();
    for (let i = 0; i < choice().length; i++) {
        recipesList.forEach(recette => {
            let newDivTitle = document.createElement('div');
            let newDivDescription = document.createElement('div');
            newDivTitle.className = "bg-dark rounded p-3";
            newDivDescription.className = "bg-dark rounded p-3";
            for (const ingredient of recette.ingredients) {
                if (ingredient.name == filter[i]) {
                    for (const instruction of recette.instructions) {
                        newDivDescription.textContent += instruction;
                    }
                    newDivTitle.textContent += recette.name;
                    console.log(recette.name);
                }
                else {
                }
            }
            display.appendChild(newDivTitle);
            newDivTitle.appendChild(newDivDescription);
        });
    }
});
const choice = () => {
    let ingredient = [];
    for (let choice of choiceIngredient) {
        if (choice.checked) {
            ingredient.push(choice.value);
        }
    }
    return ingredient;
};
refreshRecipe();
