const lib1 = require('./lib1')

if(typeof window !== 'undefined'){
    console.log('running in browser');
}
else
console.log('running in node');

console.log(lib1);
lib1.sayHello('John');

setTimeout(() => {
   console.log(lib1);         
},3000)
