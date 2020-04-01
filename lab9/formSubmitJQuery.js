"use strict";

//Assignment 9 - Task #4
//If the form is LoginForm, then submitted data will be printed on the console.
//If the form is ProductForm, then submitted data will be printed on the page, below the form.
$(function(){
    $('form').submit(function(e){
        e.preventDefault();  
        const formId = $(this).attr("id");
        //I'll use this newElement to show the ProductForm data on the page.
        let newElement=null;
        if(formId==="productForm"){
            //If the form is Product Form, then I'll create a new DOM element (div);
            newElement = $("<div>", { "id": "newDiv", "class": "special" });
        }
        jQuery.each($( this ).serializeArray(), function(index, item) {
            console.log(item.name+ ": " + item.value);  
            if(formId==="productForm"){
                //If the form is Product Form, then I'll create a HTML paragraph (p tag) for each data input.
                let p = $("<p>",{"text":item.name+ ": " + item.value});
                //Then I'll add paragraph to the above div (newElement);
                newElement.append(p);
            }
        });
        //Finally, if newElement is not null, then I'll append it to the ProductForm's page's HTML.
        if(newElement!=null) $('#result').append(newElement);
    });
});

