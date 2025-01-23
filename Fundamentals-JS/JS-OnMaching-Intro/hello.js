console.log('Hello, Node.js!');
function sayHello(name, lName) {
    let result = "HELLO!";
    if (name, lName) {
        return `Hello, ${name} ${lName}!`;
    }
    return result;
}

const nameInput = process.argv[2];
const lNameInput = process.argv[3];
const result = sayHello(nameInput, lNameInput);
console.log(result);