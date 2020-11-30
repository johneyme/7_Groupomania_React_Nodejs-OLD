// Imports
var express      = require('express');
var usersCtrl    = require('./routes/usersCtrl.routes');
var messagesCtrl = require('./routes/messagesCtrl.routes');


// Router
exports.router = (function() {
  var apiRouter = express.Router();

  // Users routes
  apiRouter.route('/users/register/').post(usersCtrl.register);
  apiRouter.route('/users/login/').post(usersCtrl.login);
  apiRouter.route('/users/me/').get(usersCtrl.getUserProfile);
  //apiRouter.route('/users/me/').put(usersCtrl.updateUserProfile);
  apiRouter.route('/users/delete').post(usersCtrl.deleteProfile);

  // Messages routes
  apiRouter.route('/messages/new/').post(messagesCtrl.createMessage);
  apiRouter.route('/messages/').get(messagesCtrl.listMessages);

 
  return apiRouter;
})();