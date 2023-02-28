const { I } = inject()

const data = require('../data.json')

Given('I fill email', () => {
  I.fillField('~email', data.email)
})

Given('I fill password', () => {
  I.fillField('~senha', data.password)
})

When('I tap on Entrar', () => {
  I.tap('~entrar')
})

Then('I see the Salvar button', () => {
  I.waitForElement('~salvar', 5)
  I.seeElement('~salvar')
})
