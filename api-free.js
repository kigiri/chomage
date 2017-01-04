const request = require('request')

const freeStatusMessages = {
  200: "Le SMS a été envoyé sur votre mobile.",
  400: "Un des paramètres obligatoires est manquant.",
  402: "Trop de SMS ont été envoyés en trop peu de temps.",
  403: "Le service n'est pas activé sur l'espace abonné, ou login / clé incorrect.",
  500: "Erreur côté serveur. Veuillez réessayer ultérieurement.",
}

module.exports = conf => {
  const baseUrl = 'https://smsapi.free-mobile.fr/sendmsg?user='
    + conf.user +'&pass='+ conf.pass +'&msg='

  return msg => new Promise((s,f) => request.get({
    rejectUnauthorized: false,
    url: baseUrl + encodeURIComponent(msg),
  }, (err, res) => err ? r(err) : s({
    status: res.statusCode,
    msg: freeStatusMessages[res.statusCode] || 'Erreur iconnue.',
  })))
}