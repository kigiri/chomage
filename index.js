const nightmare = require('./pole-emploi')
const { poleEmploi, free } = require('./config')
const sendSms = require('./api-free')(free)

nightmare.open('authentification')
  .type('#champTexteIdentifiant', poleEmploi.identifiant)
  .click('#boutonContinuer')
  .waitAndType('#champTexteCodePostal', poleEmploi.codePostal)
  .visualKeyboard(poleEmploi.password)
  .click('#boutonValider')
  .waitAndClick('.u-registration .resume-link')
  .waitAndClick('#formationNon')
  .submit()
  .waitAndClick('#blocTravail-close')
  .click('#blocStage-close')
  .click('#blocMaladie-close')
  .click('#blocRetraite-close')
  .click('#blocInvalidite-close')
  .click('#blocRecherche-close')
  .submit()
  .waitAndClick('button[type="submit"]')
  .then(() => sendSms('Activation pole emplois faite !'))
  .catch(err => sendSms(`Impossible de finaliser l'activation pole emplois: ${err.message}`))







