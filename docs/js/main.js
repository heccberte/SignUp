const signInBtn = document.querySelector('.sign-in-btn__link')
const signUpBtn = document.querySelector('.sign-up-btn__link')
const wrapper = document.querySelector('.wrapper')

signUpBtn.addEventListener('click', () => {
	wrapper.classList.toggle('active')
})
signInBtn.addEventListener('click', () => {
	wrapper.classList.toggle('active')
})