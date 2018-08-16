function orderSupplies(item) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function () { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function () { return 'start painting!' }
        },
        tarp: {
          product: 'A large tarp',
          directions: function () { return 'cover the floor!'; }
        }
      };

      if (item in warehouse) {
        resolve(warehouse[item]);
      } else {
        reject(new Error(`${item} is out of stock`));
      }

    }, deliveryTime);
  });

}

function receivedItem(item) {
  console.log(`Received ${item.product}. Time to ${item.directions()}`);
}

const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const tarp = orderSupplies('tarp');
const roller = orderSupplies('roller')

console.log(paint, brush);

Promise.all([tarp, paint, brush, roller])
  .then(function (items) {
    items.forEach(receivedItem);
  })
  .catch(handleError);


// tarp
//   .then(receivedItem)
//   .then(function () {
//     return paint;

//   })
//   .then(function (item) {
//     receivedItem(item);

//     return brush
//   })
//   .then(function (item) {
//     receivedItem(item);

//     return roller;
//   })
//   .catch(handleError)

  function handleError(error) {
    console.log(error.message);
  }

// orderSupplies('paint', function (item) {
//   receivedItem(item);
//   orderSupplies('brush', receivedItem);
// });



// let havePaint = false;

// orderSupplies('paint', function (item) {
//   receivedItem(item);

//   havePaint = true;
// });
// orderSupplies('brush', function (item) {
//   if (havePaint) {
//     receivedItem(item);
//   } else {
//     const timer = setInterval(function () {
//       console.log('..... checking for paint...');

//       if (havePaint) {
//         receivedItem(item);

//         clearInterval(timer);
//       }
//     }, 10);
//   }
// });

// orderSupplies('brush', handleBrush);


// function handleBrush(item) {
//   console.log('brush', item);
//   if (havePaint) {
//     return receivedItem(item);
//   }
//   console.log('... checking for apint...');
//   setTimeout(handleBrush, 10, item);
// }

const items = ['tarp', 'paint', 'brush'];

function order(items) {
  const received = [];

  for (var index = 0; index < items.length; index++) {
    orderSupplies(items[index], function (item) {
      received[index] = item;

      console.log('got ' + item.product, index);

      if (received.length === items.length) {
        // console.log(received);
        received.forEach(receivedItem);
      }

      console.log(received);
    });
  }

}

function order1(items) {
  const received = [];
  let counter = 0;

  for (var index = 0; index < items.length; index++) {
    (function (number) {
      orderSupplies(items[number], function (item) {
        received[number] = item;

        console.log('got ' + item.product);
        counter++;

        // if (counter === items.length) {
          if (received.filter(thing => thing).length === items.length) {
          // console.log(received);
          received.forEach(receivedItem);
        }
      });
     })(index)
  }

}


// order(items);



// const paint = new Promise(function (resolve, reject) {
//   // async code
//   orderSupplies('paint', resolve);

// });

// const brush = new Promise(function (resolve, reject) {
//   // async code
//   orderSupplies('brush', resolve);

// });

// paint
//   .then(function (item) {
//     receivedItem(item);
//   })
//   .then(function () {
//     return brush;
//   })
//   .then(receivedItem)
//   .catch(console.log);

