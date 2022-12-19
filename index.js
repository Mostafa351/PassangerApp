//document.getElementById("count-el").innerText = 5

// initialise counter to 0
let count = 0;

// one way to listen to the click
// function increment(){
//   count += 1;
//   document.getElementById("count-el").innerText = count;
// }

// another way to listen to the click
document.getElementById("increment-btn").addEventListener('click',()=>{
  // increment the counter
    count += 1;
  // display the new count  
    document.getElementById("count-el").innerText = count;
})
