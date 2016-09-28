console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

function moveRight(){
marginLeft+=10;
img.style.marginLeft= marginLeft+'px';
    
}

var img= document.getElementById('madi');

img.onclick = function(){
    var  inteval =setInterval(moveRight,100);
};