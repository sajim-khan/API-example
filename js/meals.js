const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    console.log(meals);
    // step -1: Container element
    const mealsContainer = document.getElementById('meals-container')
    meals.forEach(meals => {
        console.log(meals);
        //step -2 : create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        // step-3 : set content of the child
        
        mealDiv.innerHTML = `    
        <div class="card h-100">
          <img src="${meals.strMealThumb
          }" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meals.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        `
        // Step -4 : appendChild
        mealsContainer.appendChild(mealDiv)
    })    
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value
    console.log(searchText);
}

loadMeals()

