function displayDayOfWeek() {
	const currentDate = new Date();
	const currentDay = currentDate.getDay();
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	if (currentDay === 1 || currentDay === 2) {
	  
	  return daysOfWeek[currentDay] + " 🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."  ;
	} else {
	  
	  return "Mark your Calender for the 25th of September for the annual ALL VALLEY KARATE TOURNAMENT";
	}
  }
const result = displayDayOfWeek(); 
const element = document.getElementById('dayOfWeek'); 
element.textContent = result; 



const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));
if (numVisits !== 0) {
	visitsDisplay.textContent= numVisits;
}
else {
	visitsDisplay.textContent = "This is your first visit, Congrats!!!!"
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);
todayDisplay.textContent = Date.now();




const images = document.querySelectorAll("place img");
function preload(img) {
	const src = img.getAttribute("place img");
	if (!src){
		return;
	}

	img.src =src;
}

const imgOptions = {
	threshold: 0,
	rootMargin: "0px 0px 500px 100px"

};
const imgObserver = new IntersectionObserver((enteries, imgObserver) => {
	enteries.forEach(entry => {
		if (!entry.isIntersecting) {
			return;

		} else{
			preloadImage(entry.target);
			imgObserver.unobserve(entry.target);
		}
	})
}, imgOptions);

images.forEach(image => {
	imgObserver.observe(image);
});




document.addEventListener("DOMContentLoaded", function() {
	var timestampField = document.getElementById("timestamp");
	var currentTimestamp = new Date().toISOString();
	timestampField.value = currentTimestamp;
  });








  const url = 'https://andrewolson24.github.io/wdd230/Chambers/scripts/data.json';
  getProphetData();

  async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
  displayProphets(data.prophets);
  }

  const displayProphets = (prophets) => {
  const cards = document.querySelector('div.cards'); // select the output container element

  prophets.forEach((prophet) => {
  // Create elements to add to the div.cards element
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let birthdate = document.createElement('p');
  let portrait = document.createElement('img');
  let birthplace = document.createElement('p');

  // Build the h2 content out to show the prophet's full name - finish the template string
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  birthdate.innerHTML = `<strong>Date of Birth</stong>: ${prophet.birthdate}`;
  birthplace.innerHTML = `<strong>place of Birth</stong>: ${prophet.birthplace}`;
  // Build the image portrait by setting all the relevant attribute
  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
  portrait.setAttribute('loading', 'lazy');
  portrait.setAttribute('width', '340');
  portrait.setAttribute('height', '440');

  // Append the section(card) with the created elements
  card.appendChild(h2);
  card.appendChild(birthdate);
  card.appendChild(birthplace);
  card.appendChild(portrait);

  cards.appendChild(card);
  }); // end of forEach loop
} // end of function expression




