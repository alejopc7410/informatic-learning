'use strict';

/*------------------------ Utility functions ------------------------*/
function select (selector, parent = document) {
    return parent.querySelector(selector);
}

function selectAll (selector, parent = document) {
    return parent.querySelectorAll(selector);
}

function selectById (selector, parent = document) {
    return parent.getElementById(selector);
}

function onEvent (selector, event, callback) {
    return selector.addEventListener(event, callback)
}
/*--------------------------------------------------------------------*/

/*--------------------------- HTML Elements --------------------------*/
const statement = select('.statement')
const result = select('.result')
const codeStructure = select('.code-structure')
/*--------------------------------------------------------------------*/

let challenge = [
    "Objetive: Get a beige circle that have the class 'circle' with a blue dotted border and with the phrase 'I am a cool circle' inside of it",
    "Objetive: Get a square with an id 'my-square', with the top and left border blue and the right and bottom border white and dashed. Also the background most be goldenrod",
    "Objetive: Organize the JS code to obtain the given name printed",
    "Objetive: Organize the JS code to obtain the result of a sum"
];

let codePrompt = [
    [`#circle {
    background: beige;
    border: 1px solid;
    content: 'I'm a great square';
    }`],
    [`.my-square {
    border-left: 1px solid yellow;
    border-right: 1px groove;
    border-top: 1px solid blue;
    border-bottom: 1px groove;
    background: golden boy;
    }`],
    [`function printName(name) {
    if (name) {
      console.log('Hello, ' + name);
    } else {
      console.log('Name is not provided');
    }
  }
    
  let personName = "Alice";
  printName(personName);`],
    [`function calculateSum(a, b) {
    return a + b;
  }
    
  let result = calculateSum(5, 10);
  console.log("The result is: " + result);`],
  ];
  
let random = Math.floor(Math.random() * 3) 
let htmlCode = codePrompt[random].join('\n');
  
  // Luego, puedes insertar 'htmlCode' en un elemento HTML (por ejemplo, un div) usando innerHTML.
codeStructure.innerHTML = htmlCode;
  

let solution = [
    `.circle {
    background: beigge;
    border: 1px dotted blue;
    contnet: 'I am a cool circle'
}`,
    `.my-squre {
    border-left: 1px solid blue;
    border-right: 1px dashed white;
    border-top: 1px solid blue;
    border-bottom: 1px dashed white;
    backgound: goldenrod;
}`,
    `function printName(name) {
    if (name) {
        console.log('Hello, ' + name);
    } else {
        console.log('Name is not provided');
    }
}
      
      
let personName = "Alice";
printName(personName);`,
    `function calculateSum(a, b) {
    return a + b;
}
      
let result = calculateSum(5, 10);
console.log("The result is: " + result);`
]
console.log(codePrompt[3])
console.log(solution[2])