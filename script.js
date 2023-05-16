let body = document.createElement('body');
document.documentElement.appendChild(body);

let buttonJson = document.createElement('button');
let message = document.createTextNode("click me");
buttonJson.appendChild(message);
buttonJson.classList.add('buttonJson');
body.appendChild(buttonJson);
