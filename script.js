let body = document.createElement('body');
document.documentElement.appendChild(body);

let buttonJson = document.createElement('button');
let message = document.createTextNode("click me for read my list");
buttonJson.classList.add('buttonJson');
buttonJson.appendChild(message);
body.appendChild(buttonJson);


buttonJson.addEventListener("click", (e) =>{
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        body.innerHTML = ''; // Clear the existing list
        data.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = item;
          body.appendChild(listItem);
        });
      })
      .catch(error => console.log(error));
  });