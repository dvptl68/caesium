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
let showPass = document.getElementById('show-pass');
let warning = document.getElementById('warning-div');

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
    submit.value = 'Log In';
  }else{
    submit.innerHTML = 'Sign up';
    submit.value = 'Sign up';
  }
  showPass.style.display = 'inline-block';
  back.style.display = 'inline-block';
  submit.style.display = 'inline-block';
  setTimeout(() => {
    welcome.style.display = 'none';
    info.style.opacity = '1';
  }, 1000);
};

login.addEventListener('click', startProgram);
signup.addEventListener('click', startProgram);
showPass.addEventListener('click', event => {
  if (event.target.checked){
    infoBox.item(3).type = 'text';
    infoBox.item(4).type = 'text';
  }else{
    infoBox.item(3).type = 'password';
    infoBox.item(4).type = 'password';

  }
});

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
    warning.children[0].innerHTML = '';
    warning.children[1].innerHTML = '';
    for (let i = 0; i < infoBox.length; i++){
      infoBox.item(i).value = '';
      infoBox.item(i).style.display = 'none';
    }
    showPass.checked = false;
    infoBox.item(3).type = 'password';
    infoBox.item(4).type = 'password';
    showPass.style.display = 'none';
    back.style.display = 'none';
    submit.style.display = 'none';
  }, 1000);
});

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let passConf = document.getElementById('passConf');

submit.addEventListener('click', () => {
  let emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let validEmail = emailFormat.test(String(email.value).toLowerCase());
  warning.children[0].innerHTML = validEmail ? '' : 'Must enter valid email address';
  if (submit.value === 'Sign up'){
    let validPassword = pass.value === passConf.value;
    warning.children[1].innerHTML = validPassword ? '' : 'Passwords must match';
  }
});
