"use strict";

const names = [
  "Andrius",
  "Andrej",
  "Audrius",
  "Sasha",
  "Pasha",
  "Vasia",
  "Antanas",
  "Ugnius",
  "Mindaugas",
  "Tautvydas"
];
let list = document.querySelector("ul");
let input = document.querySelector("input");
let output = [];


let searchName = () => {
  list.innerHTML = "";
  output = [];
  names.filter(name => {
    let name2 = name.toLowerCase();
    if (input.value && name2.includes(input.value.toLowerCase()) && output.length < 3) {
      output.push(name);
    }
  });
  outputFront();
};

let outputFront = () => {
  output.forEach(name => {
    var node = document.createElement("LI"); // Create a <li> node
    var textnode = document.createTextNode(name); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    list.appendChild(node);
  });
  let listItems = document.querySelectorAll('li');
  listItems.forEach(item => {
      item.addEventListener('click', () => {
          input.value = item.textContent;
          list.innerHTML = "";
        output = [];
      })
  })
};




