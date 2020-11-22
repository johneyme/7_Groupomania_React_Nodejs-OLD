// Imports
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils.js');
const models = require('../models');
const asyncLib = require('async');

// Constants
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;

// Routes
module.exports = {
    register: function (req, res) {
        //Params
        const phone = req.body.phone;
        const username = req.body.username;
        const password = req.body.password;

        if (phone == null || username == null || password == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }
        if(phone.length != 10 ){
            return res.status(400).json({ 'error': 'Veuillez rentrer un numéro de téléphone (ex:0612345678)' });
        }
        if (!PASSWORD_REGEX.test(password)) {
            return res.status(400).json({ 'error': 'Mot de passe non-valide (Une taille de 4 à 8 caractèrs et doit inclure un chiffre minimum - Caractères spéciaux non-valides -' });
        }
        

        // TODO verify 
        models.User.findOne({
            attributes: ['phone'],
            where: { phone: phone }
        })
            .then(function (userFound) {
                if (!userFound) {
                    bcrypt.hash(password, 5, function (err, bcryptedPassword) {
                        const newUser = models.User.create({
                            phone: phone,
                            username: username,
                            password: bcryptedPassword,
                            isAdmin: 0
                        })
                            .then(function (newUser) {
                                return res.status(201).json({
                                    'userID': newUser.id
                                })
                            })
                            .catch(function (err) {
                                return res.status(500).json({ 'error': "Impossible d'ajouter un utilisateur" });
                            })
                    })

                } else {
                    return res.status(409).json({ 'error': 'Utilisateur déjà existant !' });
                }
            })
            .catch(function (err) {
                return res.status(500).json({ 'error': 'unable to verify user' });
            });


    },
    login: function (req, res) {

        // Params
        const phone = req.body.phone;
        const password = req.body.password;

        if ( phone == null || password == null) {
            return res.status(400).json({ 'error': 'Elément(s) manquant(s)'});
        }

        // TODO Verify

        models.User.findOne({
            where: { phone: phone}
        })
        .then(function(userFound){
            if (userFound) {
                bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt) {
                    if(resBycrypt){
                        return res.status(200).json({
                            'userId': userFound.id,
                            'token': jwtUtils.generateTokenForUser(userFound)
                        });
                    } else {
                        return res.status(403).json({"error": "Mot de passe invalide"});
                    }
                })

            } else {
                return res.status(404).json({'error': "L'utilisateur n'existe pas !"});
            }

        })
        .catch(function(err) {
            return res.status(500).json({ 'error': 'unable to verify user'});
        }); 
    },
}