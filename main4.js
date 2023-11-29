let divs= document.querySelectorAll('.case');
// let divs= document.querySelectorAll('#case');
// cases.forEach(case=>{
divs.forEach(div=>{
   div.addEventListener ('mouseover',
     function(){
     div.style.filter="blur(0)";
     div.style.border = "2px solid red";

    })
    div.addEventListener('mousedown',
    function(){
     div.style.height="200px";
     div.style.width="400px"; 

    } )
    div.addEventListener('mouseup',
    function(){
      div.style.width="200px";
    })

})


