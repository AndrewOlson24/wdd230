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








  fetch('data.json').then(response => response.json())
                .then(data => {
                    // Process the JSON data
                    displayData(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });

                // Function to display the data in the HTML
                function displayData(data) {
                const dataContainer = document.getElementById('dataContainer');

                // Iterate over the array and extract the desired information
                data.forEach(item => {
                    const title = item.title;
                    const numofchildren = item.numofchildren;
                    const imageUrl = item.image_url;

                    // Create HTML elements to display the extracted information
                    const itemDiv = document.createElement('div');
                    const titleElement = document.createElement('h3');
                    const dateElement = document.createElement('p');
                    const imageElement = document.createElement('img');

                    titleElement.textContent = title;
                    dateElement.textContent = `Date Established: ${dateEstablished}`;
                    imageElement.src = imageUrl;

                    itemDiv.appendChild(titleElement);
                    itemDiv.appendChild(dateElement);
                    itemDiv.appendChild(imageElement);

                    dataContainer.appendChild(itemDiv);
                });
                }




