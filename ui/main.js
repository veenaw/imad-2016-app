//counter code
var button = document.getElementById('counter');
button.onclick = function(){
    //make a request to counter endpoint
    var request =new XMLHttpRequest();
    
    
    // capture the response and store in a variable.
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            //take some action
            if(request.status ==200)
            {
                var counter=request.responseText;
                var span = document.getElementById('count');
                span.innerHTML= counter.toString();
            }
        }
    }; 
    
};