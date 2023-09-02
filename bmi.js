
function output(){
            
   let w = Number (document.getElementById("count").value)
   let h = Number (document.getElementById("count2").value)
   let bmivalue = w/(h/100*h/100);
   let result = document.getElementById("result");
   if(bmivalue<18.5){
    result.innerHTML = " Your BMI is - "+ bmivalue.toFixed(2) +" (Underweight) "
   }
   else if(bmivalue<=18.5 || bmivalue<=24.99){
    result.innerHTML = " Your BMI is - "+ bmivalue.toFixed(2) +" (Normal)"
   }
   else if(bmivalue<=25 || bmivalue>=29.9){
    result.innerHTML = " Your BMI is - "+ bmivalue.toFixed(2) +" (Overweight)"
   }
   else{
    result.innerHTML = " Your BMI is - "+ bmivalue.toFixed(2) +" (Obese)"
   }
}


