var grid_size = 9;
var scale = 10;

var buttonX = document.createElement('button');
var containerBx = document.getElementById('buttons');
containerBx.appendChild(buttonX);
buttonX.innerHTML = 'Click me';

buttonX.addEventListener('click', function() {
    alert('Button clicked');
}); 
