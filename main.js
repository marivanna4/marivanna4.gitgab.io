const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

let login =localStorage.getItem('gloDelivery');

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName =  document.querySelector('.user-name');
const buttonOut =  document.querySelector('.button-out');


function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
}
  
function autorized() {

function logOut(){
  login = null;
  localStorage.removeItem('gloDelivery');
  buttonAuth.style.display = "";
  userName.style.display = '';
  buttonOut.style.display = '';
  buttonOut.removeEventListener('click', logOut);

  checkAuth();
}

  console.log('Авторизован');
  userName.textContent = login;
  buttonAuth.style.display = "none";
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';
  buttonOut.addEventListener('click', logOut)
}
function notAutorized() {
  console.log('не авторизован');

  function logIn(event) {
    event.preventDefault();
    login = loginInput.value;
    if(login.length < 1){
      alert ('Ввeдите логин');
    }
    localStorage.setItem('gloDelivery', login);


    toggleModalAuth();
    buttonAuth.removeEventListener('click',toggleModalAuth);
  closeAuth.removeEventListener('click',toggleModalAuth);
  logInForm.removeEventListener('submit', logIn);
  logInForm.reset();
    checkAuth(); 
  }
  buttonAuth.addEventListener('click',toggleModalAuth);
  closeAuth.addEventListener('click',toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
}
function checkAuth() {
if (login) {
  autorized()
}else {
  notAutorized()
  
}
}
checkAuth();