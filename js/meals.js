const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    console.log(meals);
    // step -1: Container element
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML = '';
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
            <button onclick="loadMealDetail(${meals.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal"data-bs-target="#mealDetails">
              Details
            </button>
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
    loadMeals(searchText)
}

const loadMealDetails = (idMeal) => {
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  fetch(url)
  .then(response => response.json())
  .then(data => displayMealDetails(data.meals[0]))
  .catch(error => {
      console.log(error);
  })
}

// Async await
const loadMealDetail = async(idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  try{
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);
  }
  catch(error){
    console.log(error);
  }
}

const displayMealDetails = meal => {
  document.getElementById('exampleModalLabel').innerText = meal.strMeal
  document.getElementById('mealDetailsBody').innerHTML = `
  <img class="img-fluid" src = "${meal.strMealThumb}">
  `
}

loadMeals('rice')

//const res = await fetch(url);
//const data = await res.json();
//displayMealDetails(data.meals[0]);