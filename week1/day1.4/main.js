var myStr = 'some string content';


console.log(myStr);

myStr = 234234;

var array = ['cat', 'dog'];


console.log('push result???', array.push('new content'));

if (array.push(123) > 10) {
  // do something
}

// console.log(array[0]);

// for (var index = 0; index < array.length; index++) {
//   console.log('index ', array[index]);
// }


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

function sayHello(name, ...rest) {
  console.log(rest);
  console.log('hello ' + name);

  return name;
}


console.log('returned content', sayHello('Bob', true, 10));
