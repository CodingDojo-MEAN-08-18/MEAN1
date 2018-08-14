

function Person(name, items) {


  // const person = {
  //   name
  // };

  if (!(this instanceof Person)) {
    console.log('not instance? ', name);
    return new Person(name, items);
  }

  this.name = name;

  this.items = items;

  // this.take = take;



  // return this;
  // return person;
}

Person.prototype.take = function take(item, target) {
  if (!target || !Array.isArray(target.items)) {
    throw new Error('target items is not an array');
  }
  // ['gold', 'phone', 'crackers']
  for (let index = 0; index < target.items.length; index++) {
    if (target.items[index] === item) {
      // target.items.pop(index)
      // slice(index, index +1) => [gold']
      // splice(index, 1) => [gold'] == ['phone', 'crackers']
      this.items.push(item);
      target.items.splice(index, 1);

      return true;
    }
  }


  return false;
};

Person.prototype.toString = function () {
  return this.name;
};



const person1 = Person('Bob', ['money', 'keys', 'lint']);
const person2 = new Person('Sally', ['gold', 'phone', 'crackers']);

console.log(person1);
console.log(person2);


person1.take('gold', person2);


// take('gold', person2);

// // console.log(1 === '1');
console.log(person1.toString());
console.log(person2.toString());


const backpack = {
  items: ['compass', 'map', 'trailmix'],
};


console.log(backpack);

person2.take('trailmix', backpack);

console.log(person2);
console.log(backpack);
