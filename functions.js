function greet(name){
return "Hello, " + name;
}

function add(a, b){
return a + b;
}

const multiply = (a, b) => {
return a * b;
};

console.log(greet("Arda"));
console.log(add(3, 5));
console.log(multiply(4, 6));

const isAdult = (age) => {
return age >= 18;
};

console.log(isAdult(20));
console.log(isAdult(15));