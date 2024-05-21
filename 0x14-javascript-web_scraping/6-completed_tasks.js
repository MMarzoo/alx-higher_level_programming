#!/usr/bin/node
// web scrapper

const request = require('request');

request.get(process.argv[2], { json: true }, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const taskCompleted = {};
  body.forEach(todo) => {
    if (todo.completed[todo.userId]) {
      taskCompleted[todo.userId] = 1;
    } else {
      taskCompleted[todo.userId] += 1;
    }
  }
});
