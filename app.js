let fruits = ['Mango', 'Papaya', 'Richard Simmons']; // Fruits array
let favFruit; // Global Scope
let leastFavFruit; // Global Scope

name = 'Peter';
var name;
console.log(name);
// should log as Peter

setName();
function setName() {
    let name = 'covalance';
    console.log(name);
    // should appear 'covalance'
}

console.log('Before someAverage is called.');
let myAvg = findAvg(2, 4);
console.log('After someAverage was called', myAvg);
function findAvg(num1, num2) {
    console.log('Inside of someAverage');
    let answer = (num1 + num2) / 2;
    return answer; // return 3
}




function printFruit(index) {
    console.log(`Print my first fruit: ${fruits[index]}`);
    let favFruit = fruits[0];
    let leastFavFruit = fruits[2];

    function printMyFavFruit() {
        console.log(`Print my fav fruit: ${favFruit}`);
    }
    printMyFavFruit(); // Mango
}

console.log(`Print my least fav fruit: ${leastFavFruit}`); // undefined
printFruit(0); // Mango

myBrotha();
function myBrotha() {
    console.log('Hello', name);
}

let alertMessage = function(duh) {
    alert(duh);
}
alertMessage('duh'); // alert: duh