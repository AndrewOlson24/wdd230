fetch('../dojo/dojooo.json')
  .then(response => response.json())
  .then(data => {
    // Code to handle and use the retrieved JSON data
    const dojos = data.dojo; // Call a function to display the JSON data in the HTML
  
    displayDojos(dojos);
})
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Error:', error);
  });

  function displayDojos(dojos) {
    const jsonDataContainer = document.getElementById('jsonDataContainer');
    
    // Create an HTML string to display the dojo information
    const html = dojos.map(dojo => `<p>${dojo.name} - ${dojo.location}</p>`).join('');
    
    // Set the HTML content of the container
    jsonDataContainer.innerHTML = html;
  }
