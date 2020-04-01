"use strict";

//Assignment 9 - Task #4
//If the form is LoginForm, then submitted data will be printed on the console.
//If the form is ProductForm, then submitted data will be printed on the page, below the form.
$(function(){
    $('form').submit(function(e){
        e.preventDefault();  
        const formId = $(this).attr("id");
        let newElement;
        if(formId==="productForm"){
            newElement = $("<div>", { "id": "newDiv", "class": "special" });
        }
        jQuery.each($( this ).serializeArray(), function(index, item) {
            console.log(item.name+ ": " + item.value);  
            if(formId==="productForm"){
                let p = $("<p>",{"text":item.name+ ": " + item.value});
                newElement.append(p);
            }
        });
        $('#result').append(newElement);
    });
});

