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



