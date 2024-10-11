const header=document.querySelector(".header");
const btn=document.querySelectorAll(".btn");



 btn.forEach((button)  =>{
  button.addEventListener("click", () =>{
      console.log("button was clicked");
     
    //   header.value+=button.innerText;
     
      if(button.innerText === "="){
             let result=eval(header.value);
             header.value=result;
      }else if(button.innerText  === "AC"){
               header.value=" ";
      }else{
        header.value += button.innerText;
      }
       
      
  });
  });

