const datefield = document.querySelector("time");
const datefieldUK = document.querySelector("aside");
const datemessage = document.querySelector("p");


const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefield.textContent = fulldate;

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});

//********************************************************************* */




function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamButton").classList.toggle("open");
}

const x = document.getElementById('hamButton');
x.onclick = toggleMenu;


//****************************************************************************** */





// Select the HTML element to manipulate
const date1 = document.querySelector("#date1");
const message = document.querySelector("#emessage");

// Try to complete the method with options
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

// Long hand method ... building day and month names from built-in date methods.

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
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fullydate = `${monthName} ${d.getDate()}, ${year}`;
document.querySelector("#date2").textContent = fullydate;