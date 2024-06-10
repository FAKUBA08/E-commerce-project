const liItems = document.querySelectorAll('.menus ul li');

liItems.forEach(li => {
  li.addEventListener('click', function() {

    liItems.forEach(item => {
      item.classList.remove('clicked');
    });
    this.classList.add('clicked');
  });
});

const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
togglePassword.addEventListener('click', function() {
    console.log('togglePassword');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = '👁️‍🗨️'; 
        togglePassword.style.border = '1px solid blue';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = '👁️';
        togglePassword.style.border = '';
    }
}); 
const spinner = document.querySelector('.boxRoll');

function showSpinner() {
    spinner.removeAttribute('hidden',false);
}

function hideSpinner() {
    spinner.setAttribute('hidden',true);
}
let signUp=document.querySelector('.signUp')
signUp.addEventListener('click',function(){
    window.location.href='../SIGNUP PAGE/index.html'
    
})
let forgotton=document.querySelector('.forgotton')
forgotton.addEventListener('click',function(){
    // alert('kjn')
    window.location.href="../PASSEORD PAGE/index.html"
    
})