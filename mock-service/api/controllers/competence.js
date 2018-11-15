'use strict';

const competences = require('./resources/competences.json');
const competence = require('./resources/competence.json');

module.exports = {
  listeCompetences: (req, res) => res.json(competences),
  recupererCompetence: (req, res) => res.json(competence),
  ajouterCompetence: (req, res) => res.json(req.body),
};
