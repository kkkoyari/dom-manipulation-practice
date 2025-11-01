const container = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = 'red';

const heading = document.createElement('h3');
heading.textContent = "I'm a blue h3!";
heading.style.color = 'blue';

const div = document.createElement('div');
div.style.border = '2px solid'; 
div.style.borderColor = 'black';
div.style.backgroundColor = 'pink';

const divHeading = document.createElement('h1');
divHeading.textContent = "I'm in a div";

const divPara = document.createElement('p');
divPara.textContent = "ME TOO!";

div.appendChild(divPara);
div.insertBefore(divHeading, divPara);

container.appendChild(div);
container.insertBefore(heading, div);
container.insertBefore(para, heading);