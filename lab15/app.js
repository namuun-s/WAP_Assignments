"use strict";
/**
 * app.js
 * Author: Namuun S
 */
$(function(){

    $(document).ajaxStart(showLoader).ajaxStop(hideLoader);

    if($("#booksList").hasClass("active")){
        // Getting books list JSON
        $.ajax("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list", { "type": "GET" })
        .done(showBooksList)
        .fail(showFailureInfo);
    }
   

    // Form submit via Ajax
    $("#myForm").on("submit",function(evt){
        evt.preventDefault();
        const result = $('#result');    
        const dp = new Date($("#datePublished").val()); 
        let month =  dp.getMonth() + 1;
        if(month <10) month = "0"+month;
        let dayOfMonth = dp.getDate();
        if(dayOfMonth<10) dayOfMonth = "0"+dayOfMonth;
        const data = {
            isbn: $("#isbn").val(),
            title: $("#title").val(),
            overdueFee: $("#overdueFee").val(),
            publisher: $("#publisher").val(),
            datePublished: dp.getFullYear() + "-" + month + "-" + dayOfMonth,
        };
        console.log(data);

        $("#loader").show();
        $.ajax("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", 
        { 
            type: "POST",
            data: JSON.stringify(data),
            dataType:"json",
            contentType: "application/json; charset=utf-8",
        })
        .done(showSuccessInfo)
        .fail(showFailureInfo);
        
        jQuery.each(data, function(index, value){
            console.log(index);
            let p = $('<p>',{"text": index.toUpperCase() + ": " + value});
            result.append(p);
            result.addClass("shown");
        });       
        $(this).trigger("reset");
       
    });
});

function showBooksList(data){
    const itemListEl = $('tbody');
    
    jQuery.each(data, function(index, item){
        let itemInfoEl = $('<tr>',{"class":"itemInfo"});      
        let col = $('<td>',{"text":item.isbn});
        itemInfoEl.append(col);
        col = $('<td>',{"text":item.title});
        itemInfoEl.append(col);
        col = $('<td>',{"text":"$"+item.overdueFee});
        itemInfoEl.append(col);
        col = $('<td>',{"text":item.publisher});
        itemInfoEl.append(col);
        col = $('<td>',{"text":item.datePublished});
        itemInfoEl.append(col);   
        itemListEl.append(itemInfoEl);
    });
    
}

function showFailureInfo(data){
    console.log(data);
    const msg = $('#msg');
    let p = $("<p>",{"text":"Sorry! Error occured please try again.","class":"error"});
    msg.append(p);
}
function showSuccessInfo(data){
    console.log(data);
    const msg = $('#msg');
    let p = $("<p>",{"text":"Congratulations! Your new book successfully added.","class":"success"});
    msg.append(p);
}
function showLoader(){
    $("#loader").show();
}
function hideLoader(){
    $("#loader").hide();
}