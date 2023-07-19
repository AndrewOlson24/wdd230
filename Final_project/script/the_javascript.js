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