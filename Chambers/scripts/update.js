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




