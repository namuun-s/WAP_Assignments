"use strict";
/**
 * app.js
 * Author: Namuun S
 */
$(function(){

    // Getting Accounts list from accounts.json file using Fetch API.
    fetch("data/accounts.json")
        .then(res => res.json())
        .then(res => {
            const accountListEl = $('#accountsList');            

            jQuery.each(res, function(index, item){
                let accountInfoEl = $('<div>',{"class":"accountInfo"});
                let p = $('<span>',{"text":item.accountNo, "class":"info-col col-accountNo"});
                accountInfoEl.append(p);
                p = $('<span>',{"text":item.customerName, "class":"info-col col-name"});
                accountInfoEl.append(p);
                p = $('<span>',{"text":item.accountType, "class":"info-col col-accountType"});
                accountInfoEl.append(p);
                accountListEl.append(accountInfoEl);
            });
            
        })
        .catch((error => console.log("Error: ", error)));

    // Form submit handler
    $("#myForm").on("submit",function(evt){
        evt.preventDefault();
        const accountListEl = $('#accountsList');
        const accountInfoEl = $('<div>',{"class":"accountInfo"});
        let list = accountListEl.find(".col-accountNo");
        let accNumbers = [];
        let isValid = true;
        if(list!==undefined){
            jQuery.each(list,function(i,val){
                accNumbers.push($(val).html());
            })
        }
        console.log(accNumbers);
        jQuery.each($(this).serializeArray(), function(index, item){
            if(item.name==="accountNo"){
                if(accNumbers.indexOf(item.value)>=0){                       
                    alert("Account Number must be unique!");
                    isValid = false;
                }
            }
            if(isValid){
                let p = $('<span>',{"text":item.value, "class":"info-col col-"+item.name});
                accountInfoEl.append(p);
            }
            
        });
        if(isValid){
            accountListEl.append(accountInfoEl);

            // Sending data to Java Servlet
            const data = {
                accountNo: $("#accountNo").val(),
                customerName: $("#customerName").val(),
                accountType: $("#accountType").val()
            };
            $("#loader").show();
            fetch("http://localhost:8081/FinalExam/new-account", 
            { 
                method: 'POST',  
                mode: "no-cors",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: $(this).serialize()
            })
            //.then(res => res.json())
            .then(res=>{
                console.log(res);
                showSuccessInfo();
            })
            .catch(error => showFailureInfo())
            .then(hideLoader);
            
            $(this).trigger("reset");
        }
        else{
            $("#accountNo").focus();
        }
    });
    
});

function showFailureInfo(data){
    const msg = $('#msg');
    let p = $("<p>",{"text":"Sorry! Error occured please try again.","class":"error"});
    msg.html(p);
}
function showSuccessInfo(data){
    const msg = $('#msg');
    let p = $("<p>",{"text":"Congratulations! Your new book successfully added.","class":"success"});
    msg.html(p);
}
function showLoader(){
    $("#loader").show();
}
function hideLoader(){
    $("#loader").hide();
}