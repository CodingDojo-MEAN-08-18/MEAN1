

function map(array, callback) {
  const results = [];
  // results = [];

  // console.log(callback.toString());

  for (let index = 0; index < array.length; index++) {

    // console.log(index, array[index], square);

    const res = callback(array[index], index, array);

    // console.log('res', res);

    results.push(res);
  }

  return results;
}



const numberArray = [99, 12, 45, 83];


const results1 = map(numberArray,  (element) => element * element);

// console.log('results 1', results1, numberArray);
const results2 = map(numberArray, (num1, num2) => num1 + num2);


// console.log('results 2', results2);


// console.log('before');

// function sayHello(name) {
//   setTimeout(function () {
//     console.log(`Hello ${name}`);
//   }, 1000);
// }


// sayHello('Bob');

// console.log('after');


function getThingsFromDB(_query, callback) {
  return setTimeout(function () {
    const data = ['thing 1', 'thing 2', 'thing 3'];

    // console.log(callback.toString());
    console.log('running db query')
    callback(data);
    // return data;
  }, 3000);


}


getThingsFromDB('select * from things;', handleThings);


function handleThings(things) {

  console.log('hello', things);

  const results = map(things, element => element.toUpperCase());

  console.log(results);
 }
