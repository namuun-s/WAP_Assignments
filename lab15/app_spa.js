"use strict";
/**
 * app.js
 * Author: Namuun S
 */
$(function(){

    $(document).ajaxStart(showLoader).ajaxStop(hideLoader);
    history.replaceState({}, "Home", "#home");

    $(".nav-link").each(function(){
        if($(this).hasClass("active")){
            loadContent($(this));
        }
    });

    $(".nav-link").on("click",function(event){
        event.preventDefault();
        showLoader();
        loadContent($(this));
        let currPage =$(this).attr("href");
        history.pushState({}, currPage, `#${currPage}`);
    });

    
});

function showBooksList(data){
    const itemListEl = $('tbody');
    console.log(itemListEl);
    
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
    const msg = $('#msg');
    let p = $("<p>",{"text":"Sorry! Error occured please try again.","class":"error"});
    msg.append(p);
}
function showSuccessInfo(data){
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
function loadContent(thisLink){
    if(thisLink.attr("id")=="booksList"){

        $("#content").load("parts/booksList.html");

        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
        .then(res => res.json())
        .then(res => showBooksList(res))
        .catch((error => console.log("Error: ", error)));
                
    }else if(thisLink.attr("id")=="addBook"){
        $("#content").load("parts/bookForm.html");
        // Form submit via Ajax
    $(document).on("submit","#myForm",function(evt){
        evt.preventDefault();
        //alert("hi");
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
        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", 
        { 
            type: "POST",
            data: JSON.stringify(data),
            dataType:"json",
            contentType: "application/json; charset=utf-8",
        })
        .then(res=>res.json())
        .then(showSuccessInfo)
        .catch(showFailureInfo);
        
        jQuery.each(data, function(index, value){
            console.log(index);
            let p = $('<p>',{"text": index.toUpperCase() + ": " + value});
            result.append(p);
            result.addClass("shown");
        });       
        $(this).trigger("reset");
       
    });

    }else if(thisLink.attr("id")=="home"){
        $("#content").load("parts/welcome.html");
    }
}