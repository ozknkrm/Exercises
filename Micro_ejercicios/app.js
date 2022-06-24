1//
let title = document.getElementById('Hello');

let myFrase = 'Hello World';

function printMyFrase(element){
    title.innerHTML = element
}

printMyFrase(myFrase)

function showMyCalculation(num1,num2) {
    num1 = 3
    num2 = 5
    return num1+num2
}
printMyFrase(showMyCalculation()) 
