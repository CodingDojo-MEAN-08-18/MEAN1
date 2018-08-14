var myStr
var index;

myStr = 'some string content';
console.log(myStr);

myStr = 234234;

var array = ['cat', 'dog'];


console.log('push result???', array.push('new content'));

if (array.push(123) > 10) {
  // do something
}

// console.log(array[0]);

for (let index = 0; index < array.length; index++) {
  // console.log('index ', array[index]);
}


// console.log('after', index);

// for (var thing in array) {
//   console.log('thing' + thing);
// }

//   0    , 1
// ['cat', 'dog']
// [0 , 'cat']  [1, 'dog']
// for (var [index, element] of array.entries()) {
//   // var index = index[0];
//   // var entry = index[1];
//   console.log('index', index, element);
// }


// age, hair, height
// var person = [23, 'brown', 6];


// console.log('person age', person[0]);

var person = {
  'age': 23,
  "hairColor": 'brown',
  height: 6,
  "eye-color": 'purple',
  key: 'my key',
  action: function () {
    console.log('hello');
  }
};

// console.log('person age is ', person['eye-color']);

// for (var key in person) {
//   console.log('key', person[key], key);
// }
// console.log('returned content', sayHello('Bob', true, 10));

function sayHello(name, ...rest) {
  console.log(person);
  console.log('hello ' + name);

  return name;
}


function counter(options) {
  var count = 0;

  function childScope() {
    console.log('child called');
    return ++count;
  }

  return childScope;
}

counter = counter();

console.log(counter());
console.log(counter());
console.log(counter());

// console.log(counter())
// => 1
// console.log(counter())
// => 2
// console.log(counter())
// => 3
// console.log(counter())
// => 4


function anotherFunc(func) {
  if (typeof func === 'function') {
    console.log('inside another', func());
  }
}

anotherFunc(counter);
