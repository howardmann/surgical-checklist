/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var todosRouter = express.Router();

  todosRouter.get('/', function(req, res) {
    res.send({
      'todos': [
        {id: 1, title: "get milk", isComplete: false},
        {id: 2, title: "study harder", isComplete: false},
        {id: 3, title: "get better", isComplete: false},
        {id: 4, title: "believe", isComplete: false}
      ]
    });
  });

  todosRouter.post('/', function(req, res) {
    console.log(req.body);
    res.status(201).end();
  });

  todosRouter.get('/:id', function(req, res) {
    res.send({
      'todos': {
        id: req.params.id
      }
    });
  });

  todosRouter.put('/:id', function(req, res) {
    res.send({
      'todos': {
        id: req.params.id
      }
    });
  });

  todosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/todos', require('body-parser').json());
  app.use('/api/todos', todosRouter);
};
