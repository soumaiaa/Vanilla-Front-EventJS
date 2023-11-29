let button= document.querySelector('#button');
let cases= document.querySelector('.case');
let body= document.querySelector('body');


button.addEventListener ('click', function(){
    cases.style.visibility = "visible"; 
    body.style.backgroundColor = "grey";
})
button.addEventListener ('focusout', function(){
    cases.style.visibility = "hidden"; 
    body.style.backgroundColor = "white";
})