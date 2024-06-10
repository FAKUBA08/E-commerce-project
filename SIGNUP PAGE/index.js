const liItems = document.querySelectorAll('.menus ul li');

liItems.forEach(li => {
  li.addEventListener('click', function() {

    liItems.forEach(item => {
      item.classList.remove('clicked');
    });
    this.classList.add('clicked');
  });
});
const liItem = document.querySelectorAll('.menus-signinPage ul li');

liItem.forEach(li => {
  li.addEventListener('click', function() {

    liItem.forEach(item => {
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
let signUp=document.querySelector('.signUp')
signUp.addEventListener('click',function(){
    window.location.href='index.html'
    
})
let logIn=document.querySelector('.logIn')
logIn.addEventListener('click',function(){
    window.location.href='../SIGN-IN PAGE/index.html'
    
})



