let squares= document.querySelectorAll('.square');
let couleur = document.querySelector(".couleur");
squares.forEach(square=>{
square.addEventListener ('click', function(){

let squareBackground = square.style.backgroundColor;
square.style.backgroundColor = "red";

if(squareBackground === 'red') {
    square.style.backgroundColor = "green";
} else if (squareBackground === 'green'){
    square.style.backgroundColor ="black";
} else if (squareBackground === 'black'){
    square.style.backgroundColor ="#f70c7e";
} else {
    square.style.backgroundColor ="red";
}

})
})

