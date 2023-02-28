const { I } = inject()

module.exports = {
  button: {
    save: '~salvar',
  },
  messages: {
    loginFail: '~lognFail'
  },
  fields: {
    code: '~codigo',
    aluno: '~aluno',
    search: '~search'
  },

  registerStudent(code, aluno) {
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.aluno, aluno)
    I.tap(this.button.save)
  },

  searchStudent(search, aluno) {
    I.fillField(this.fields.search, search)
    I.seeElement(this.fields.aluno, aluno)
  },
  
  checkLoginSucess() {
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  },
  checkLoginFail() {
    I.waitForVisible(this.messages.loginFail, 5)
  }
}
