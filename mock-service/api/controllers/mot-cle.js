'use strict';

const motsCles = require('./resources/mots-cles.json');
const motCle = require('./resources/mot-cle.json');

module.exports = {
  listeMotsCles: (req, res) => res.json(motsCles),
  recupererMotCle: (req, res) => res.json(motCle),
  ajouterMotCle: (req, res) => res.json(req.body),
};