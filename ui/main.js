console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

var Img= document.getElementById('img');
Img.onclick = function(){
    Img.style.marginLeft= '100px';
};