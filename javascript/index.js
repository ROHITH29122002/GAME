if (localStorage.getItem('name')){
    document.getElementById('nameform-container').classList.add('nameform-container');
    nameplacer();
}
else{
    document.getElementById('name-container').classList.add('name-container');
    document.querySelector('#name-form').onsubmit = function (){
        var name = document.querySelector('#name-input').value;
        localStorage.setItem('name', name);
        location.reload();
    }
}

function nameplacer(){
    document.getElementById('name-holder').innerHTML=`WELCOME  ${localStorage.getItem('name')}`;
}
