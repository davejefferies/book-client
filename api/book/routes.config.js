const Controller = require('./controllers/book.controller'),
      config = require('../common/config/env.config');
      
exports.routesConfig = function (app) {
  app.get('/book/:id', [
    Controller.getById
  ]);
  app.get('/search/:keyword', [
    Controller.search
  ]);
};