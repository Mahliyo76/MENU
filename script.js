// let text= document.getElementById('text');
// let knopka = document.getElementById("knopka");
// let before = document.getElementById('before');


// function btn(){
//     text.style.color = 'red';
//     text.style.backgroundColor ='yellow'
// }
   
// function mno(){
//     text.style.color = 'black';
//     text.style.backgroundColor = "white";
// }



// incrementBtn.addEventListener('click', () => {
//     counter++;
//     counterValue.innerHTML = counter;
// });
 

// decrementBtn.addEventListener('click', () => {
//     counter--;
//     counterValue.innerHTML = counter;
// });
 
// resetBtn.addEventListener('click', reset);
 
// function reset() {
//     counter = 0;
//     counterValue.innerHTML = counter;
// }
let counter=0;
let counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset');
 
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
 

decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});
 
resetBtn.addEventListener('click', reset);
 
function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}
