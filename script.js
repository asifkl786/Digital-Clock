// First of all we create variable
let h = document.getElementById('hrs');
let m = document.getElementById('min');
let s = document.getElementById('sec');

// Thease function call every second
setInterval(()=>{
    // Second find out current time and date 
    let currentTime = new Date();
    // Check time 
      console.log(currentTime.toLocaleDateString());

    // These value display in UI
      h.innerHTML = (currentTime.getHours()<10 ? "0":"") + currentTime.getHours();
      m.innerHTML = (currentTime.getMinutes()<10 ? "0":"") + currentTime.getMinutes();
      s.innerHTML = (currentTime.getSeconds()<10 ? "0":"") + currentTime.getSeconds();
},1000)

