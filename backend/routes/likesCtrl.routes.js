/*
// Imports
var models   = require('../models');
var jwtUtils = require('../utils/jwt.utils');
var asyncLib = require('async');

// Constants
const DISLIKED = 0;
const LIKED    = 1;

// Routes
module.exports = {
  likePost: function(req, res) {
    // Getting auth header
    var headerAuth  = req.headers['authorization'];
    var userId      = jwtUtils.getUserId(headerAuth);

    // Params
    var messageId = parseInt(req.params.messageId);

    if (messageId <= 0) {
      return res.status(400).json({ 'error': 'Paramètres invalides' });
    }

    asyncLib.waterfall([
      function(done) {
        models.Message.findOne({
          where: { id: messageId }
        })
        .then(function(messageFound) {
          done(null, messageFound);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': 'Impossible de vérifier le message' });
        });
      },
      function(messageFound, done) {
        if(messageFound) {
          models.User.findOne({
            where: { id: userId }
          })
          .then(function(userFound) {
            done(null, messageFound, userFound);
          })
          .catch(function(err) {
            return res.status(500).json({ 'error': "Impossible de vérifier l'utilisateur'" });
          });
        } else {
          res.status(404).json({ 'error': 'Message déjà liké"' });
        }
      },
      function(messageFound, userFound, done) {
        if(userFound) {
          models.Like.findOne({
            where: {
              userId: userId,
              messageId: messageId
            }
          })
          .then(function(userAlreadyLikedFound) {
            done(null, messageFound, userFound, userAlreadyLikedFound);
          })
          .catch(function(err) {
            return res.status(500).json({ 'error': "Impossible de vérifier si l'utilisateur a déjà aimé" });
          });
        } else {
          res.status(404).json({ 'error': "L'utilisateur n'existe pas" });
        }
      },
      function(messageFound, userFound, userAlreadyLikedFound, done) {
        if(!userAlreadyLikedFound) {
          messageFound.addUser(userFound, { isLike: LIKED })
          .then(function (alreadyLikeFound) {
            done(null, messageFound, userFound);
          })
          .catch(function(err) {
            return res.status(500).json({ 'error': "Impossible de définir la réaction de l'utilisateur" });
          });
        } else {
          if (userAlreadyLikedFound.isLike === DISLIKED) {
            userAlreadyLikedFound.update({
              isLike: LIKED,
            }).then(function() {
              done(null, messageFound, userFound);
            }).catch(function(err) {
              res.status(500).json({ 'error': 'Impossible de mettre à jour' });
            });
          } else {
            res.status(409).json({ 'error': 'Message déjà "liké"' });
          }
        }
      },
      function(messageFound, userFound, done) {
        messageFound.update({
          likes: messageFound.likes + 1,
        }).then(function() {
          done(messageFound);
        }).catch(function(err) {
          res.status(500).json({ 'error': 'Impossible de mettre à jour le compteur de "like"' });
        });
      },
    ], function(messageFound) {
      if (messageFound) {
        return res.status(201).json(messageFound);
      } else {
        return res.status(500).json({ 'error': 'Impossible de mettre à jour le message' });
      }
    });
  },
  dislikePost: function(req, res) {
   // Getting auth header
   var headerAuth  = req.headers['authorization'];
   var userId      = jwtUtils.getUserId(headerAuth);

   // Params
   var messageId = parseInt(req.params.messageId);

   if (messageId <= 0) {
     return res.status(400).json({ 'error': 'Paramètres invalides' });
   }

   asyncLib.waterfall([
    function(done) {
       models.Message.findOne({
         where: { id: messageId }
       })
       .then(function(messageFound) {
         done(null, messageFound);
       })
       .catch(function(err) {
         return res.status(500).json({ 'error': 'Impossible de vérifier le message' });
       });
     },
     function(messageFound, done) {
       if(messageFound) {
         models.User.findOne({
           where: { id: userId }
         })
         .then(function(userFound) {
           done(null, messageFound, userFound);
         })
         .catch(function(err) {
           return res.status(500).json({ 'error': "Impossible de vérifer l'utilisateur"});
         });
       } else {
         res.status(404).json({ 'error': 'Message déjà "liké"' });
       }
     },
     function(messageFound, userFound, done) {
       if(userFound) {
         models.Like.findOne({
           where: {
             userId: userId,
             messageId: messageId
           }
         })
         .then(function(userAlreadyLikedFound) {
            done(null, messageFound, userFound, userAlreadyLikedFound);
         })
         .catch(function(err) {
           return res.status(500).json({ 'error': "Impossible de vérifier si l'utilisateur a déjà aimé" });
         });
       } else {
         res.status(404).json({ 'error': "L'utilisateur n'existe pas" });
       }
     },
     function(messageFound, userFound, userAlreadyLikedFound, done) {
      if(!userAlreadyLikedFound) {
        messageFound.addUser(userFound, { isLike: DISLIKED })
        .then(function (alreadyLikeFound) {
          done(null, messageFound, userFound);
        })
        .catch(function(err) {
          return res.status(500).json({ 'error': "Impossible de définir la réaction de l'utilisateur" });
        });
      } else {
        if (userAlreadyLikedFound.isLike === LIKED) {
          userAlreadyLikedFound.update({
            isLike: DISLIKED,
          }).then(function() {
            done(null, messageFound, userFound);
          }).catch(function(err) {
            res.status(500).json({ 'error': 'Impossible de mettre à jour' });
          });
        } else {
          res.status(409).json({ 'error': 'Message déjà "disliké"' });
        }
      }
     },
     function(messageFound, userFound, done) {
       messageFound.update({
         likes: messageFound.likes - 1,
       }).then(function() {
         done(messageFound);
       }).catch(function(err) {
         res.status(500).json({ 'error': 'Impossible de mettre à jour le compteur de "like"' });
       });
     },
   ], function(messageFound) {
     if (messageFound) {
       return res.status(201).json(messageFound);
     } else {
       return res.status(500).json({ 'error': 'Impossible de mettre à jour le message' });
     }
   });
  }
}
*/