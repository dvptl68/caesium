let buttons = document.getElementsByClassName('intro');

for (let i = 0; i < buttons.length; i++){
  buttons.item(i).style.transitionDuration = '0.4s';
}

let welcome = document.getElementById('welcome-div');
let info = document.getElementById('info-div');
let login = buttons.item(0);
let signup = buttons.item(1);
let infoBox = document.getElementsByClassName('info');
let passConf = document.getElementById('passConf');
let back = document.getElementById('back');
let submit = document.getElementById('submit');
function startProgram(event){
  login.style.cursor = 'default';
  signup.style.cursor = 'default';
  welcome.style.transitionDuration = '1s';
  welcome.style.opacity = '0';
  info.style.transitionDuration = '1s';
  info.style.display = 'inline-block';
  for (let i = 0; i < infoBox.length; i++){
    infoBox.item(i).style.display = 'block';
  }
  if (event.target.isSameNode(login)){
    infoBox.item(0).style.display = 'none';
    infoBox.item(1).style.display = 'none';
    infoBox.item(4).style.display = 'none';
  }
  back.style.display = 'inline-block';
  submit.style.display = 'inline-block';
  setTimeout(function(){
    welcome.style.display = 'none';
    info.style.opacity = '1';
  }, 1000);
}

login.addEventListener('click', startProgram);
signup.addEventListener('click', startProgram);
