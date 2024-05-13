const add = (function () {
    let counter = 0;
    return function () {
      counter += 1; 
      document.getElementById('b2').textContent = "Count! " + counter;
      return counter
    }
  })();
  

  const box3=document.getElementById('b2');
box3.addEventListener('click',()=>{
    console.log("clicked by event to event lstener");
})