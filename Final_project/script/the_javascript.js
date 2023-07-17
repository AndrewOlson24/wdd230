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