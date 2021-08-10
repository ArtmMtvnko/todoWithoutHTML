const divInput = document.createElement('div')
const body = document.getElementsByTagName('body')
body[0].appendChild(divInput)

const loginInput = document.createElement('input') //input login
const passwordInput = document.createElement('input') //input password
const hidePasswordInput = document.createElement('input')
const hidePasswordInputText = document.createTextNode('Hide')
hidePasswordInput.setAttribute('type', 'checkbox')
hidePasswordInput.setAttribute('checked', '')
loginInput.setAttribute('placeholder', 'Enter your login')
passwordInput.setAttribute('placeholder', 'Enter your password')
passwordInput.setAttribute('type', 'password')

hidePasswordInput.onclick = () => {
    if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text')
    } else {
        passwordInput.setAttribute('type', 'password')
    }
}

const label = document.createElement('label')
label.appendChild(hidePasswordInputText)

const loginParagraph = document.createElement('p')
const passwordParagraph = document.createElement('p')

const textLogin = document.createTextNode('Login: ')
const textPassword = document.createTextNode('Password: ')

loginParagraph.appendChild(textLogin)
passwordParagraph.appendChild(textPassword)
loginParagraph.appendChild(loginInput)
passwordParagraph.appendChild(passwordInput)
passwordParagraph.appendChild(hidePasswordInput)
passwordParagraph.appendChild(hidePasswordInputText)
divInput.appendChild(loginParagraph)
divInput.appendChild(passwordParagraph)

divInput.style.textAlign = 'center'

const divButton = document.createElement('div')
const buttonLogin = document.createElement('button') //button login
const buttonRegistration = document.createElement('button') //button register
const textButtonLogin = document.createTextNode('Login')
const textButtonRegister = document.createTextNode('Register')
const paragraphButtonLogin = document.createElement('p')
const paragraphButtonRegistration = document.createElement('p')

body[0].appendChild(divButton)

divButton.appendChild(buttonLogin)
buttonLogin.appendChild(textButtonLogin)
paragraphButtonLogin.appendChild(buttonLogin)
divButton.appendChild(paragraphButtonLogin)
divButton.appendChild(buttonRegistration)
buttonRegistration.appendChild(textButtonRegister)
paragraphButtonRegistration.appendChild(buttonRegistration)
divButton.appendChild(paragraphButtonRegistration)

divButton.style.textAlign = 'center'

buttonRegistration.setAttribute('type', 'reset')
buttonRegistration.onclick = () => {
    const registration = loginInput.value
    const registrationPassword = passwordInput.value

    localStorage.setItem(registration, registrationPassword)
}

buttonLogin.onclick = () => {
    const login = loginInput.value
    const password = passwordInput.value 

    const userData = localStorage.getItem(login)

    if (password === userData) {
        alert(`Wellcome ${login}`)
    } else {
        alert('login or password is incorrect')
    }
}