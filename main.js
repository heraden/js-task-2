document.getElementById("bottom").addEventListener("click", function () { 
    event.preventDefault(); 
    let kilometer = document.getElementById("kilometer").value; 
   
  const end =   5 + kilometer * 0.25   
  return console.log(end) 
  
})
