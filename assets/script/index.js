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
const statement = select('.statement p')
const result = select('.result')
const codeStructure = select('.code-structure')
const contentGame = select('.content-game')
const title = select('.title')
const startBtn = select('.start')
const initialDialog = select('.dialog-window')
const executeBtn = select('.execute')
const start = select('.check')
/*--------------------------------------------------------------------*/

let challenge = [
    "Objetive: Get a beige circle that have the class 'circle' with a blue dotted border and with the phrase 'I am a cool circle' inside of it",
    "Objetive: Get a square with an id 'my-square', with the top and left border yellow and the right and bottom border white and dashed. Also the background most be goldenrod",
    "Objetive: Organize the JS code to get the given name printed",
    "Objetive: Organize the JS code to get the result of a sum"
];

let codePrompt = [
    [`cirqle [
    bakgroumd: beige;
    border: 1px solid;
    content: 'I'm a great square';
}`],
    [`.my-square {
    boder-left: 1px soli yelow;
    border-right: 1px groove;
    border-top: 1px solid blue;
    boder-bottom = 1px transparent;
    background: golden boy;
]`],
    [`funckion printName {name} (
    if (name) [
      console.log('Hello, ' + name);
    } else [
      console.print('Name is not provided');
    }
)
    
var personName = "Alice";
print name(personName);`],
    [`function c$lculate Rest (a, b) {
    return "a" + "b";
}
    
var result = calculateSum(5, 10);
console.table("The result is: " + result);`],
];

let solution = [
    [`.circle {
    background: beige;
    border: 1px dotted blue;
    content: 'I am a great square';
}`],
    [`#my-square {
    border-left: 1px solid yellow;
    border-right: 1px dashed white;
    border-top: 1px solid yellow;
    border-bottom: 1px dashed white;
    background: goldenrod;
}`],
    [`function printName (name) {
    if (name) {
      console.log('Hello, ' + name);
    } else {
      console.log('Name is not provided');
    }
}
    
let personName = "Alice";
printName(personName);`],
    [`function calculateSum (a, b) {
    return "a" + "b";
}
    
let result = calculateSum(5, 10);
console.log("The result is: " + result);`],
];

onEvent(startBtn, 'click', () => {
    title.style.display = 'grid';
    contentGame.style.display = 'block';
    initialDialog.style.display = 'none';
})

let random = Math.floor(Math.random() * 3)

onEvent(start, 'click', () => {
    statement.textContent = challenge[random] 
    codeStructure.textContent = codePrompt[random].join('\n');
})

function answerValidation () {
    let answer = codeStructure.value
    let process = solution[random][0]

    if (answer === process) {
        
        switch (true) {
            case random === 0:
                result.classList.add('random-1')
                result.style.background = 'beige'
                result.style.border = '2.5px dotted blue'
                result.textContent = 'I am a cool circle'
                break;
            case random === 1:
                result.classList.add('random-2')
                result.style.borderLeft = '1px solid yellow';
                result.style.borderRight = '1px dashed white';
                result.style.borderTop = '1px solid yellow';
                result.style.borderBottom = '1px dashed white';
                result.style.background = 'goldenrod';
                break;
            case random === 2:
                result.classList.add('random-3')
                result.textContent = 'Alice'
                break;
            case random === 3:
                result.classList.add('random-4')
        }
            
    } else {
        result.textContent = 'Try again'
    }

    console.log(answer)
    console.log(process)
}

onEvent(executeBtn, 'click', answerValidation)

