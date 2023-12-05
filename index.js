const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = function() {
  return tutorials.map(function(item) {
    const sArray = item.split(" ");
    const updatedArray = sArray.map(function(element) {
      return element.charAt(0).toUpperCase() + element.slice(1);
    });
    debugger
    const updatedElement = updatedArray.join(" ");
    return updatedElement;
  });
};
debugger

console.log(titleCased());
debugger

/*
const s = "hello";
const s3 = s.slice(1);
const s2 = s.charAt(0).toUpperCase() + s.slice(1);

console.log(s);
console.log(s2);
console.log(s3);
*/

/*
const s = "Hi, my name is Cristian.";
const arr = s.split(" ");

console.log(arr);
*/