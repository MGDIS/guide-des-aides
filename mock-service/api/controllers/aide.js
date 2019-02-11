'use strict';
const crypto = require("crypto");
const aides = require('./resources/aides.json');
const aide = require('./resources/aide.json');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
  listeAides: (req, res) => res.json(aides),
  recupererAide: (req, res) => res.json(aide),
  ajouterAide: (req, res) => {
    const body = req.body;
    body.reference = crypto.randomBytes(8).toString("hex");
    const referenceAdministrative = '' + getRandomInt(99999999);
    body.referenceAdministrative = referenceAdministrative.padStart(8, '0');
    res.statusCode = 201;
    res.json(body);
  },
};
