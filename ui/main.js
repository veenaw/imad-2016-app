console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

var marginLeft=0;

function moveRight(){
marginLeft+=1;
img.style.marginLeft= marginLeft+'px';
    
}

var img= document.getElementById('madi');

img.onclick = function(){
    var  inteval =setInterval(moveRight,50);
};