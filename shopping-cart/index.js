

document.querySelector("#case-increase").addEventListener("click",function(){
   const caseInput = document.querySelector("#case-count");
   const caseCount = parseInt(caseInput.value);
   const caseNewCount = caseCount + 1;
   caseInput.value= caseNewCount;  
 
   const caseTotal = caseNewCount * 59;
   document.querySelector("#caseTotal").innerText ="$"+caseTotal;
 

});
document.querySelector("#case-decrease").addEventListener("click", function(){
   const caseInput = document.querySelector("#case-count");
   const caseCount = parseInt(caseInput.value);
   const caseNewCount = caseCount - 1;
   caseInput.value = caseNewCount;

   const caseTotal = caseNewCount * 59;
   document.querySelector("#caseTotal").innerText = "$" + caseTotal;

   
});