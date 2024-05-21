#!/usr/bin/node
// Read from file

const filesys = require('fs');
filesys.readfile(process.argv[2], 'utf-8',
  function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
