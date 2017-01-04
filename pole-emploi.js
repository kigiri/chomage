const Nightmare = require('nightmare')
const {each, reduce} = require('lodash')
let nm = new Nightmare({
  show: true,
//  openDevTools: { mode: 'detach' },
})

const p = new Proxy(nm, {
  get: (src, key) => actions[key]
    || function () {
      return (nm = nm[key].apply(nm, arguments), p)
    }
})

const ids = 'ABCDEFGHIJ'
const actions = each({
  visualKeyboard: password => reduce(password, (a, n) =>
    a.click(`.touche${ids[Number(n)]}`), nm),
  submit: () => nm.click('button[type="submit"]'),
  open: url => nm
    .goto(`https://candidat.pole-emploi.fr/candidat/espacepersonnel/${url}`),
  waitAndClick: q => nm.wait(1500).wait(q).click(q),
  waitAndType: (q, text) => nm.wait(1500).wait(q).type(q, text),
}, (fn, key, acc) => acc[key] = (...args) => (nm = fn(...args), p))

module.exports = p