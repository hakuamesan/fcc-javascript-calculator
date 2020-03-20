let expr="";
let decimals = false;
let num1=0, num2=0;
let op, op2;
let hasOp = false;
let result = 0;
let value = 0;
let maybeNeg = false;

function calc(num1, oper, num2)
{
  let result = 0;

  
  if ( maybeNeg == true) {
    oper = op2;
    num2 = -num2;
  }
  
  if ( oper == "+")
          result = Number(num1) + Number(num2); 
        else if ( oper == "-")
          result = Number(num1) - Number(num2); 
        else if ( oper == "*")
          result = Number(num1) * Number(num2); 
        else if (oper == "/")
          result = Number(num1) / Number(num2); 

  return result;
}


document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      let display =   document.querySelector("#display").value;
//display = 100;
console.log("display=" + display);
      let k = event.target.value;

      console.log("Clicked", k);
      
      if ( k == 'A' || k == 'C') {
        display = 0;
        expr = 0;
        num1 = 0;
        num2 = 0;
        result = 0;
        value = 0;
        decimals = false;
        maybeNeg = false;
        op2="";
        op="";
  
      } else if (k == 1 || k == 2 || k == 3 ||
                k == 4 || k == 5 || k == 6 ||
                k == 7 || k == 8 || k == 9) {
        
        if ( result != 0) {
            display = 0;
          num2 = result;
          num1 = 0;
          result = 0;
        }
        
        
        if ( display == 0) {
            display = k;
          } else {
            display += k;
          }
          
          
          num1 += k;

      } else if ( k == 0) {
        if ( num1 == 0) {
          //break;
        } else {
          
          display += k;
          num1 += k;

        }
      } else if ( k == "."){
        if (!decimals){
          decimals = true;
          display += ".";
        } 
        
        num1 += k;
        console.log("num1="+num1);
      } else if ( k == "+"){
       
        if ( op2 != "" && op == "-"){
          maybeNeg = false;
          op2 = "";
          
        }
        num1 = Number(num1);
        
         
        
        if ( num2 != 0 && num1 != "")
          num2 = calc(num2, op, num1);
        else if ( num2 == 0)
          num2 = num1;
        
         op = k;
          display += k;
          decimals = false;
          hasOp = true;
        
        num1 = "";
     
      } else if ( k == "-"){
       
          num1 = Number(num1);
        
         
        
        if ( num2 != 0 && num1 != "" && op2==""){
        num2 = calc(num2, op, num1);
      }
        else if ( value == 0 && num1 != 0)
        {
          num2 = num1;
          //maybeNeg = true;
          op2 = op;
          num1 = -num1;
        } else if (num1 =="" && op!="") {
          op2 = op;
          maybeNeg = true;
        }
          
        op = k;
        
          display += k;
          decimals = false;
          hasOp = true;
        
        num1 = "";
      
      } else if ( k == "*"){
     
        
        if ( op2 != "" && op == "-"){
          maybeNeg = false;
          op2 = "";
          
        }
        
        num1 = Number(num1);
        
         
        
        if ( num2 != 0 && num1 != "")
          num2 = calc(num2, op, num1);
        else if ( num2 == 0)
          num2 = num1;
        
         op = k;
          display += k;
          decimals = false;
          hasOp = true;
        
        num1 = "";
    
      } else if ( k == "/"){
      
        
        if ( op2 != "" && op == "-"){
          maybeNeg = false;
          op2 = "";
          
        }
        num1 = Number(num1);
        
     
        
        if ( num2 != 0 && num1 != "")
          num2 = calc(num2, op, num1);
        else if ( num2 == 0)
          num2 = num1;
        
             op = k;
          display += k;
          decimals = false;
          hasOp = true;
        
        num1 = "";
   
      } else if ( k == "="){
       
        
         let expr = num2 + op + num1;
        num1 = Number(num1);
        
        num2 = calc(num2, op, num1);
        num1 = "";
        value = num2;
        op2="";
        
        display = num2;
      }
      
  
      document.querySelector("#display").value = display;
      
      
    }
  });

