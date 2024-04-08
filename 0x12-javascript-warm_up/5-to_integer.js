#!/usr/bin/node
// prints two arguments passed to it, in the following format: “ is ”

if (isNaN(process.argv[2])) {
  console.log('NO a number');
} else {
  console.log('My number: ' + parseInt(process.argv[2]));
}
