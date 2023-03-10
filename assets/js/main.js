const registerBtn = document.querySelector('.js-navbar__register') 
const loginBtn = document.querySelector('.js-navbar__login') 
const modal = document.querySelector('.js-modal')
const modalOverlay = document.querySelector('.js-modal__overlay')
const registerForm = document.querySelector('.js-auth-register')
const loginForm = document.querySelector('.js-auth-login')
const switchBtns = document.querySelectorAll('.js-auth-form__switch-btn')
const backBtns = document.querySelectorAll('.js-auth-form__controls-back')
const filterBtns = document.querySelectorAll('.js-home-filter__btn')
const categoryItems = document.querySelectorAll('.js-category-item')

function showRegisterForm() {
    modal.classList.remove('close')
    registerForm.classList.remove('close')
}

function showLoginForm() {
    modal.classList.remove('close')
    loginForm.classList.remove('close')
}

function closeModal() {
    if (registerForm.classList.contains('close')) {
        loginForm.classList.add('close')
    }
    if (loginForm.classList.contains('close')) {
        registerForm.classList.add('close')
    }
    modal.classList.add('close')
}

registerBtn.addEventListener('click', showRegisterForm)
loginBtn.addEventListener('click', showLoginForm)
modalOverlay.addEventListener('click', closeModal)

for (const switchBtn of switchBtns) {
    switchBtn.addEventListener('click', () => {
        if (switchBtn.closest('.js-auth-register')) {
            registerForm.classList.add('close')
            loginForm.classList.remove('close')
        }
        if (switchBtn.closest('.js-auth-login')) {
            loginForm.classList.add('close')
            registerForm.classList.remove('close')
        }
    })
}

for (const backBtn of backBtns) {
    backBtn.addEventListener('click', closeModal)
}

for (const filterBtn of filterBtns) {
    filterBtn.addEventListener('click', () => {
        document.querySelector('.js-home-filter__btn.btn--primary').classList.remove('btn--primary')
        filterBtn.classList.add('btn--primary')
    })
}

for (const categoryItem of categoryItems) {
    categoryItem.addEventListener('click', () => {
        document.querySelector('.category-item--active').classList.remove('category-item--active')
        categoryItem.classList.add('category-item--active')
    })
}