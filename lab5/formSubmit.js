"use strict";

//Assignment 5 - Task #14
//Submited data will be printed on the console and page.
function formSubmit(thisForm){
   
    let resultStr = '';
    for(let i=0; i<thisForm.elements.length; i++){
        let val = thisForm.elements[i].value;
        if(thisForm.elements[i].type!='submit' && thisForm.elements[i].type!='reset'){
            if(thisForm.elements[i].type=='checkbox') val = thisForm.elements[i].checked;
            resultStr += '<p><span>'+thisForm.elements[i].name + ":</span> " + val +'</p>';
            console.log(thisForm.elements[i].name + ": " + thisForm.elements[i].value);
        }
                
    }
    document.getElementById("result").innerHTML = resultStr;
    //if the form is Product Form, then also show form data in the Pop-up window.
    if(thisForm.getAttribute("id")=="productForm"){
        let newWin = window.open("about:blank", "Form Data", "width=200,height=230");
        newWin.document.write(resultStr);
    }
}


