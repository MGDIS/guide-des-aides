'use strict';

const publicsBeneficiaires = require('./resources/publics-beneficiaires.json');
const publicBeneficiaire = require('./resources/public-beneficiaire.json');

module.exports = {
  listePublicsBeneficiaires: (req, res) => res.json(publicsBeneficiaires),
  recupererPublicBeneficiaire: (req, res) => res.json(publicBeneficiaire),
  ajouterPublicBeneficiaire: (req, res) => res.json(req.body),
};