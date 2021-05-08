// 3rd method
function handelProduct(product , Crease){
   const Input = document.getElementById( product +"-count");
   const Count = parseInt(Input.value);
   let NewCount = Count;
   if(Crease == true){
      NewCount = Count + 1;
   }
   else if(Crease ==  false && Count > 0){
      NewCount = Count -1 ;
   }
   Input.value = NewCount;

   let total = 0;
   if(product == 'phone'){
      total = NewCount * 1219;
   }
   else if(product == 'case'){
      total = NewCount * 59;
   }
   document.getElementById(product +'-total').innerText = "$" + total;
   calculate();
}

function calculate(){
  const phoneCount = getInputValue("phone");
  const caseCount = getInputValue("case")

  const totalPrice = phoneCount * 1219 + caseCount * 59;
  document.querySelector("#total-price").innerHTML = "$" + totalPrice;

  const tax = Math.round(totalPrice * 0.1);
  document.getElementById("tax-total").innerText = "$" + tax;

  const grandTotal = totalPrice + tax;
  document.getElementById("grand-total").innerText = "$" + grandTotal;

}
function getInputValue(product){
   const Input = document.getElementById(product + "-count");
   const Count = parseInt(Input.value);
   return Count;
}
// 2nd method
// case
// function handelProductCase(isInCrease){
//    const caseInput = document.querySelector("#case-count");
//    const caseCount = parseInt(caseInput.value);
//    let caseNewCount = caseCount;
//    if(isInCrease == true){
//       caseNewCount = caseCount + 1;
//    }
//    else if(isInCrease ==  false && caseCount > 0){
//       caseNewCount = caseCount -1 ;
//    }
//    caseInput.value = caseNewCount;

//    const caseTotal = caseNewCount * 59;
//    document.querySelector("#caseTotal").innerText = "$" + caseTotal;
//    calculate();
// }

// // case end

// // phone
//   function handelProductPhone(isInCrease){
//    const phoneInput = document.querySelector("#phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//    let phoneNewCount = phoneCount;
//    if(isInCrease == true){
//       phoneNewCount = phoneCount + 1;
//    }
//    else if(isInCrease == false && phoneCount > 0){
//       phoneNewCount = phoneCount -1;
//    }
//     phoneInput.value = phoneNewCount;
 
//     const phoneTotal = phoneNewCount * 1219;
//     document.querySelector("#phone-total").innerText = "$" + phoneTotal;
//     calculate();
//   }
//   phone end 

// total 
// function calculate(){
//    const phoneInput = document.querySelector("#phone-count");
//    const phoneCount = parseInt(phoneInput.value);

//    const caseInput = document.querySelector("#case-count");
//    const caseCount = parseInt(caseInput.value);

//    const totalPrice = phoneCount * 1219 + caseCount * 59;

//   document.querySelector("#total-price").innerHTML = "$" + totalPrice;
// }


// 1st method
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

