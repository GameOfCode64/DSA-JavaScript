// ! DSA in JavaScript day 9

// Todo: Topic Array

function CamelCase(string) {
  const name =
    string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase();
  return name;
}

console.log(CamelCase("bhavishya tripathi"));

console.clear();

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
