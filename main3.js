let parr= document.querySelector('#parr');
let text= document.querySelector('.text');
// document.addEventListener("keyup",
//     (KeyboardEvent)=> {

//        let A = KeyboardEvent.key;
//        let S =KeyboardEvent.key;
//        A+S 
//     })
window.addEventListener("keydown", 
function (event) {
  
   let key = event.key;
   

   if (key === "a" || key === "A" && key === "s" || key === "S" ) {
      
      parr.style.visibility = "visible";
  
   }else{

   // else if (key === "a" || key === "A" && key === "s" || key === "S" && key){
   //  parr.style.visibility = "visible";
    text.style.color="#f70c7e";
   }
})
window.addEventListener("keyup", 
function () {
   parr.style.visibility = "hidden"; 
   
})

// let name=event.key
 //   let A= event.key65;
//   let S= event.key83;
//     // event=A||S${code} == '65'&& ${code} == '83'
   // if(name==event.A){
   //  alert(name)
   //  // parr.style.visibility = "visible";   
    
   
//     let A = Event.key;
//     let S = Event.key;
    
//     A+S = parr.computedStyleMap.visibility = "visible";
//     // parr.textContent += ` ${e.code}`;
 