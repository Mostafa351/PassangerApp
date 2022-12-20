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
});


document.getElementById("save-btn").addEventListener('click',()=>{
  let innerText = document.getElementById("welcome-el").innerText;
  if(innerText === "Previous Entries:"){
    document.getElementById("welcome-el").textContent+= " " + document.getElementById("count-el").textContent;
  }else{
    // document.getElementById("welcome-el").innerText += " - "+ document.getElementById("count-el").innerText;

    // use textContent =>  removes all of the node's children and replaces them with a single text node with the given string value.
    document.getElementById("welcome-el").textContent += " - "+ document.getElementById("count-el").textContent;
  }
  //reset counter
  count = 0;
  document.getElementById("count-el").textContent=0;
});






