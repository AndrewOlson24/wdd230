fetch("fruit.json")
.then(function (response) {
        return response.json();

})
.then(function (fruit) {
    for(var i=0; i<fruit.length; i++) {
        document.getElementById("fruit").innerHTML +=
        fruit[i].name + "=>" + fruit[i].id + "=>" + data[i].nutritions;
    }
})
.catch(function (err) {
    console.log(err);
});



///*********the time******** */
const date1 = document.querySelector("#date1");
const message = document.querySelector("#emessage");

try {
	const options = {
		month: "short",
		day: "numeric",
		year: "numeric"
	};
	date1.innerHTML = `<span class="highlight">${new Date().toLocaleDateString("en-US", options)}</span>`;
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
}

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fullydate = `${monthName} ${d.getDate()}, ${year}`;
document.querySelector("#date2").textContent = fullydate;

//*************answers**********************************/
function readJSON()
        {
            fetch('./fruit.json')
	            .then(res => res.json())
	            .then(data => {
                 data.forEach(fruit => {
                    if( fruit.name == "Banana" )
                    {
                        document.getElementById("fruitname").value = fruit.name;
                        document.getElementById("fruitname").style = "color:red;";
                        document.getElementById("fruitgenus").value = fruit.genus;
                        document.getElementById("fruitgenus").style = "color:red;";
                        document.getElementById("fruitprotein").value = fruit.nutritions.protein;
                        document.getElementById("fruitprotein").style = "color:red;";
                    }
                });
            });
        }

		/*********************************8askjlflas*********** */
		const fruitDataUrl = 'fruit.json'; // Replace with the actual URL of your JSON data

// Function to fetch the JSON data from the provided URL
async function getFruitData() {
    try {
        const response = await fetch(fruitDataUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}

// Function to populate the select elements with fruit options
function populateSelectElements(fruitData) {
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(select => {
        fruitData.forEach(fruit => {
            const option = document.createElement('option');
            option.value = fruit.name;
            option.textContent = fruit.name;
            select.appendChild(option);
        });
    });
}

// Function to calculate the total nutritional values based on selected fruits
function calculateTotalNutrition(selectedFruits, fruitData) {
    const totalNutrition = {
        carbohydrates: 0,
        protein: 0,
        fat: 0,
        sugar: 0,
        calories: 0
    };

    selectedFruits.forEach(fruitName => {
        const selectedFruit = fruitData.find(fruit => fruit.name === fruitName);
        if (selectedFruit) {
            totalNutrition.carbohydrates += selectedFruit.carbohydrates;
            totalNutrition.protein += selectedFruit.protein;
            totalNutrition.fat += selectedFruit.fat;
            totalNutrition.sugar += selectedFruit.sugar;
            totalNutrition.calories += selectedFruit.calories;
        }
    });

    return totalNutrition;
}

// Function to handle form submission
function submitOrder() {
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
    const specialInstructions = document.getElementById('specialInstructions').value;

    getFruitData().then(fruitData => {
        const selectedFruits = [fruit1, fruit2, fruit3];
        const totalNutrition = calculateTotalNutrition(selectedFruits, fruitData);

        // Display the output in the output area
        const outputArea = document.getElementById('outputArea');
        outputArea.innerHTML = `
            <h2>Order Details:</h2>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Fruit 1:</strong> ${fruit1}</p>
            <p><strong>Fruit 2:</strong> ${fruit2}</p>
            <p><strong>Fruit 3:</strong> ${fruit3}</p>
            <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
            <h2>Total Nutrition:</h2>
            <p><strong>Carbohydrates:</strong> ${totalNutrition.carbohydrates}g</p>
            <p><strong>Protein:</strong> ${totalNutrition.protein}g</p>
            <p><strong>Fat:</strong> ${totalNutrition.fat}g</p>
            <p><strong>Sugar:</strong> ${totalNutrition.sugar}g</p>
            <p><strong>Calories:</strong> ${totalNutrition.calories} kcal</p>
        `;
    });
}

// Load fruit options into the select elements on page load
getFruitData().then(fruitData => {
    populateSelectElements(fruitData);
});


/********************************************************* */

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=07407eccd051a7a7b4fc81e187f47771';



async function apiFetch(){
	try{
		const response =await fetch(apiURL);
		if(Response.ok) {
			const data = await response.json();
			displayResults(data);

		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

function displayResults(weatherData){
	currentTemp.textContent = weatherData.main.temp.toFixed(0);

	const imagesrc = 'https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png';
	const desc = weatherData.weather[0].description;
	weatherIcon.setAttribute('src', imagesrc);
	weatherIcon.setAttribute('alt', desc);
	captionDesc.innerHTML = desc;
}



apiFetch();
/*************** */
function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamButton").classList.toggle("open");
}

const x = document.getElementById('hamButton');
x.onclick = toggleMenu;