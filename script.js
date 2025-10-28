var click = 0;
function clicker() { 
  click += 1;
  let a = (document.getElementById("counter").innerHTML = click);
}