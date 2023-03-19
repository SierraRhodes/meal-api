import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import mealService from './Meal-service.js'

window.addEventListener("load", runapp);
//let newOrder;

function runapp() {
    const button = document.getElementById("button");
    const input = document.getElementById("mealInput")
    button.addEventListener("click", () => {
        const order = mealService.foodCall(input.value);
        order.then(
            function (response) {
              const result = JSON.parse(response);
                display(result);
            },
            function (error) {
              console.log(`There was an error processing your request: ${error}`);
            }
          );
    })
}

function display(result)
{
    const imgOne = document.getElementById("imageOne");
    const imgTwo = document.getElementById("imageTwo");
    const imgThree = document.getElementById("imageThree");
    const nameOne = document.getElementById("nameOne");
    const nameTwo = document.getElementById("nameTwo");
    const nameThree = document.getElementById("nameThree");
    const idOne = result.meals[0].idMeal;
    const idTwo = result.meals[1].idMeal;
    const idThree = result.meals[2].idMeal;

    nameOne.innerText = result.meals[0].strMeal;
    nameTwo.innerText = result.meals[1].strMeal;
    nameThree.innerText = result.meals[2].strMeal;

    imgOne.src = result.meals[0].strMealThumb;
    imgTwo.src = result.meals[1].strMealThumb;
    imgThree.src = result.meals[2].strMealThumb;

    imgOne.addEventListener("click", () => {
      detail(idOne)
    });
    imgTwo.addEventListener("click", () => {
      detail(idTwo)
    });
    imgThree.addEventListener("click", () => {
      detail(idThree)
    });
}

function detail(id)
{
  const recipeCall = mealService.detailedCall(id);
  recipeCall.then(
    function (response) {
      const newResult = JSON.parse(response);
      displayDetail(newResult)
    },
    function (error) {
      console.log(`There was an error processing your request: ${error}`);
    }
  );
}

function displayDetail(data)
{
  const list = document.getElementById("ingredientsList");

  const mealKeys = Object.keys(data.meals[0]);
  let x = 0

  for(let i = 0; i < mealKeys.length; i++)
  {
    if(mealKeys[i].includes("strIngredient") && data.meals[0][mealKeys[i]] != "" && data.meals[0][mealKeys[i]] != null)
    {
      x+=1;
        let li = document.createElement("li");
        console.log(`Ingredient ${x}: ${data.meals[0][mealKeys[i]]}`)
        li.innerText = `Ingredient ${x}: ${data.meals[0][mealKeys[i]]}`;
        list.appendChild(li);
    }
  }
  //let li = document.createElement("li");
  //li.innerText = event.target.innerText;
  //list.appendChild(li);
}


/*

Order.prototype.finish = function () {
  let string;
  let totalprice = 0.0;
  string = `You ordered ${this.pizzaNumber} pizzas.`;
  //for all the pizzas
  for (let i = 1; i <= this.pizzaNumber; i++) {
    let pizza = this.pizza[i];
    string += `\n Pizza ${i} \n \n`;

    const pizzaKeys = Object.keys(pizza);
    //for each key in pizza
    pizzaKeys.forEach(function (key) {
      string += `\n ${key}: \n`;
      console.log(pizza[key]);
      if (key === "size") {
        string += `\n ${pizza[key]}`;
      } else if (key === "cost") {
        string += `$${pizza.Price()}`;
        totalprice += pizza.Price();
      } else {
        //for each item in that key of that pizza
        for (let i = 0; i < pizza[key].length; i++) {
          string += `\n ${pizza[key][i]}`;
        }
      }
    });
    string += `\n Your total is ${totalprice} dollars.\n Thank you for dining with us today.`;
    return string;

*/