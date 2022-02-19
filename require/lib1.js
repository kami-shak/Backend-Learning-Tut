function sayHello(name) {
    console.log('Hello', name);
}
//sayHello('John');
console.log(module.exports);
module.exports = { sayHello };
console.log(module.exports);