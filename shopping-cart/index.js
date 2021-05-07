//  case
document.querySelector("#case-increase").addEventListener("click",function(){
   handelProduct(true);

});
document.querySelector("#case-decrease").addEventListener("click", function(){
   handelProduct(false);
   
});


function handelProduct(isInCrease){
   const caseInput = document.querySelector("#case-count");
   const caseCount = parseInt(caseInput.value);
   let caseNewCount = caseCount;
   if(isInCrease == true){
      caseNewCount = caseCount + 1;
   }
   else if(isInCrease ==  false && caseCount > 0){
      caseNewCount = caseCount -1 ;
   }
   caseInput.value = caseNewCount;

   const caseTotal = caseNewCount * 59;
   document.querySelector("#caseTotal").innerText = "$" + caseTotal;
}

// case end

// phone

document.querySelector("#phone-increase").addEventListener("click",function(){
   handelProductPhone(true);
 });
 
 document.querySelector("#phone-decrease").addEventListener("click",function(){
   handelProductPhone(false);
  });
  

  function handelProductPhone(isInCrease){
   const phoneInput = document.querySelector("#phone-input");
    const phoneCount = parseInt(phoneInput.value);
   let phoneNewCount = phoneCount;
   if(isInCrease == true){
      phoneNewCount = phoneCount + 1;
   }
   else if(isInCrease == false && phoneCount > 0){
      phoneNewCount = phoneCount -1;
   }
    phoneInput.value = phoneNewCount;
 
    const phoneTotal = phoneNewCount * 1219;
    document.querySelector("#phone-total").innerText = "$" + phoneTotal;
  }
//   phone end 


// document.querySelector("#case-increase").addEventListener("click",function(){
//    const caseInput = document.querySelector("#case-count");
//    const caseCount = parseInt(caseInput.value);
//    const caseNewCount = caseCount + 1;
//    caseInput.value= caseNewCount;  
 
//    const caseTotal = caseNewCount * 59;
//    document.querySelector("#caseTotal").innerText ="$"+caseTotal;
 

// });
// document.querySelector("#case-decrease").addEventListener("click", function(){
//    const caseInput = document.querySelector("#case-count");
//    const caseCount = parseInt(caseInput.value);
//    const caseNewCount = caseCount - 1;
//    caseInput.value = caseNewCount;

//    const caseTotal = caseNewCount * 59;
//    document.querySelector("#caseTotal").innerText = "$" + caseTotal;

   
// });

// document.querySelector("#phone-increase").addEventListener("click",function(){
//   const phoneInput = document.querySelector("#phone-input");
//   const phoneCount = parseInt(phoneInput.value);
//   const phoneNewCount = phoneCount + 1;
//   phoneInput.value = phoneNewCount;

//   const phoneTotal = phoneNewCount * 1219;
//   document.querySelector("#phone-total").innerText = "$" + phoneTotal;
// })

// document.querySelector("#phone-decrease").addEventListener("click",function(){
//    const phoneInput = document.querySelector("#phone-input");
//    const phoneCount = parseInt(phoneInput.value);
//    const phoneNewCount = phoneCount -1;
//    phoneInput.value = phoneNewCount;

//    const phoneTotal = phoneNewCount * 1219;
//    document.querySelector("#phone-total").innerText = "$" + phoneTotal;
//  })
