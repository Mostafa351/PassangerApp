//document.getElementById("count-el").innerText = 5

// initialise counter to 0
let count = 0;

// function increment(){
//   count += 1;
//   document.getElementById("count-el").innerText = count;
// }

document.getElementById("increment-btn").addEventListener('click',()=>{
    count += 1;
    document.getElementById("count-el").innerText = count;
})
