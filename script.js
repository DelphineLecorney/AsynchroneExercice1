// Create a body element and append it to the html
let body = document.createElement('body');
document.documentElement.appendChild(body);

// Create a button element, a text node, a class and append button
let buttonJson = document.createElement('button');
let message = document.createTextNode("click me for read my list");
buttonJson.classList.add('buttonJson');
buttonJson.appendChild(message);
body.appendChild(buttonJson);

// Add an event listener to the button
buttonJson.addEventListener("click", (e) => {
  // Perform a request to fetch the 'data.json' file
  fetch('data.json')
  // Convert the response to JSON
    .then(response => response.json()) 
    .then(data => {
      // Clear the existing list  
      body.innerHTML = ''; 
      data.forEach(item => {
        const listItem = document.createElement('li');
        // Set the text content of the list item
        listItem.textContent = item;
        body.appendChild(listItem);
      });
    })
    .catch(error => console.log(error));
});
