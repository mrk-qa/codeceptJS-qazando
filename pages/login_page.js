const { I } = inject()

module.exports = {
  fields: {
    email: '~email',
    password: '~senha'
  },
  buttons: {
    buttonLogin: '~entrar'
  },

  doLogin(email, password) {
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.password, password)
    I.tap(this.buttons.buttonLogin)
  }
}
