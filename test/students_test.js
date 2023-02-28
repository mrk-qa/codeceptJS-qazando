Feature('VALIDATION STUDENTS')

const { I, loginPage, homePage } = inject()

const data = require('../data.json')
const code = require('../utils/code')
const name = require('../utils/name')

Scenario('Add student with success', () => {

    const randomCode = code.getCode()
    const randomName = name.getName()

    loginPage.doLogin(data.email, data.password)
    homePage.registerStudent(randomCode, randomName)
    homePage.searchStudent(randomName, randomCode)
})
