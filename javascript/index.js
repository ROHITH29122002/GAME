if (localStorage.getItem('name')){
    document.getElementById('nameform-container').style.display="none";
    nameplacer();
}
else{
    document.getElementById('name-container').style.display="none";
    document.querySelector('#name-submit').disabled=true;
    document.getElementById('name-input').onkeyup = function(){
        if(document.querySelector('#name-input').value.length>0){
            document.querySelector('#name-submit').disabled=false;
        }
        else{
            document.querySelector('#name-submit').disabled=true;
        }
    }
    document.querySelector('#name-form').onsubmit = function (){
        var name = document.querySelector('#name-input').value;
        localStorage.setItem('name', name);
        location.reload();
    }
}

function nameplacer(){
    document.getElementById('name-holder').innerHTML=`WELCOME  ${localStorage.getItem('name')}`;
}
