console.log('Hello, Node.js!');
function sayHello(name, lName) {
    let result = "HELLO!";
    if (name && lName) {
        return `Hello, ${name} ${lName}!`;
    }
    return result;
}

function sayHello2(name, lName) {
    let result = "HELLO!";
    if (name, lName) { // comma operator evaluates left ot right, returns value of last operand
        return `Hello, ${name} ${lName}!`;
    }
    return result;
}

const nameInput = process.argv[2];
const lNameInput = process.argv[3];
// process array holds key values for info on what nodejs is running
// the argv key has an array of the arguments being ran in the node command
// the first and second is the path to the node program and the .js file
// 0 - node, 1 - hello.js, the third and after is every argument entered after that
const result = sayHello(nameInput, lNameInput);
console.log(result);