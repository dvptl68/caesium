let buttons = document.getElementsByClassName('intro');

for (let i = 0; i < buttons.length; i++){
  buttons.item(i).style.transitionDuration = '0.4s';
}

let welcome = document.getElementById('welcome-div');
let info = document.getElementById('info-div');
let login = buttons.item(0);
let signup = buttons.item(1);
let infoBox = document.getElementsByClassName('info');
let back = document.getElementById('back');
let submit = document.getElementById('submit');

const startProgram = event => {
  login.style.cursor = 'default';
  signup.style.cursor = 'default';
  back.style.cursor = 'pointer';
  submit.style.cursor = 'pointer';
  welcome.style.opacity = '0';
  info.style.display = 'inline-block';
  for (let i = 0; i < infoBox.length; i++){
    infoBox.item(i).style.display = 'block';
  }
  if (event.target.isSameNode(login)){
    infoBox.item(0).style.display = 'none';
    infoBox.item(1).style.display = 'none';
    infoBox.item(4).style.display = 'none';
    submit.innerHTML = 'Log In';
  }else{
    submit.innerHTML = 'Sign up';
  }
  back.style.display = 'inline-block';
  submit.style.display = 'inline-block';
  setTimeout(() => {
    welcome.style.display = 'none';
    info.style.opacity = '1';
  }, 1000);
};

login.addEventListener('click', startProgram);
signup.addEventListener('click', startProgram);

back.addEventListener('click', () => {
  login.style.cursor = 'pointer';
  signup.style.cursor = 'pointer';
  back.style.cursor = 'default';
  submit.style.cursor = 'default';
  info.style.opacity = '0';
  welcome.style.display = 'inline-block';
  setTimeout(() => {
    welcome.style.opacity = '1';
    info.style.display = 'none';
    for (let i = 0; i < infoBox.length; i++){
      infoBox.item(i).style.display = 'none';
    }
    back.style.display = 'none';
    submit.style.display = 'none';
  }, 1000);
});

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let passConf = document.getElementById('passConf');

const checkValid = event => {
  let emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let validEmail = emailFormat.test(String(email.value).toLowerCase());
};

submit.addEventListener('click', checkValid);