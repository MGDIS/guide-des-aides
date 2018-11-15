'use strict';

const engagements = require('./resources/engagements.json');
const engagement = require('./resources/engagement.json');

module.exports = {
  listeEngagements: (req, res) => res.json(engagements),
  recupererEngagement: (req, res) => res.json(engagement),
  ajouterEngagement: (req, res) => res.json(req.body),
};