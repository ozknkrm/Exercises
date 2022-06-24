1//
let title = document.getElementById('Hello');

let myFrase = 'Hello World';

function printResults(element){
    title.innerHTML = element
}

function showMyCalculation(num1,num2) {
    num1 = 3
    num2 = 5
    return num1+num2
}

function sayHi() {
    let = person = prompt('PLEASE ENTER YOUR NAME', 'Kerim Ozkan');
    if(person != null) {
        document.getElementById('demo').innerHTML = 'Hello ' + person + '! How are you today?';
    }


}


printResults(showMyCalculation())