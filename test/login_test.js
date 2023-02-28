Feature('LOGIN')

const { I, loginPage, homePage } = inject()

const data = require('../data.json')

Scenario('Login with success', () => {
    loginPage.doLogin(data.email, data.password)
    homePage.checkLoginSucess()
})

Scenario('Display message error in login with INVALID EMAIL', () => {
    loginPage.doLogin('xyz@xyz.com', data.password)
    homePage.checkLoginFail()
})

Scenario('Display message error in login with INVALID PASSWORD', () => {
    loginPage.doLogin(data.email, '1234')
    homePage.checkLoginFail()
})