const liItems = document.querySelectorAll('.menus ul li');

liItems.forEach(li => {
  li.addEventListener('click', function() {

    liItems.forEach(item => {
      item.classList.remove('clicked');
    });
    this.classList.add('clicked');
  });
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
let signup=document.querySelector('.signup')
signup.addEventListener('click',function(){
    window.location.href='../SIGNUP PAGE/index.html'
    
})
let login=document.querySelector('.login')
login.addEventListener('click',function(){
    window.location.href='../SIGN-IN PAGE/index.html'
    
})