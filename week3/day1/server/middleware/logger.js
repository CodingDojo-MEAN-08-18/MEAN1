const color = require('colors');

/**
* Create middleware that reports information about the incoming http request
* Certain elements will be objects(body, etc), display the key value pairs
* Items to report iff they have value, use colors (an external module):
*                 method
*                 hostname
*                 ip
*                 body
*                 params
*                 protocol
*                 route
*                 path
*                 query
*/


module.exports = function (request, response, next) {
  const keys = ['method', 'hostname', 'ip', 'body', 'params', 'path', 'protocol', 'route', 'query'];

  keys.forEach(key => {
    const data = request[key];

    if (data) {
      if (typeof data === 'object') {
        // operate on objects
        if (Object.keys(data).length) {
          console.log(color.dim(`The request ${key} object has these properties:`));
          // console.log(Object.entries(data));

          // [k, v] [ 'name', 'Bob' ]
          for (const [k, v] of Object.entries(data)) {
            console.log(color.cyan(`\t${k} => ${v}`));
          }
        }
      } else {
        console.log(color.red(`The request ${key} is ${data}`));
      }
    }
  });


  next();
};
