const reverseInt = (value) => {
  let number = value.toString().split("").reverse().join("");
  parseInt(number);
  console.log(number);
};

console.log(reverseInt(1234));
