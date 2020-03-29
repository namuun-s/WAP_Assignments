/*jshint esversion: 6 */
window.addEventListener('load', () => {
    "use strict";
    //'Bigger Decorations!" Button OnClick Event Handler
    document.getElementById("btn").addEventListener("click",  function(){
        //alert("Hello, world!");     
        setInterval(increaseFontSize, 500);        
    });

    //CheckBox OnChange Event Handler
    document.getElementById("myCheck").addEventListener("change", () => {
        //alert("Hello, world!");  
        if(document.getElementById("myCheck").checked){
            document.getElementById("text").classList.add("styled");
            document.getElementById("wrapper").classList.add("bg");
        }
        else{
            document.getElementById("text").classList.remove("styled");
            document.getElementById("wrapper").classList.remove("bg");
        }
    });

    //'Igpay-Atinlay' Button OnClick Event Handler
    document.getElementById("convert").addEventListener("click",  function(){
        const textEl = document.getElementById("text");
        let textStr = textEl.value;
        let strArr = textStr.split(" ");
        textStr = "";
        for(let i=0;i<strArr.length;i++){
            textStr += convertStr(strArr[i]);
        }
        textEl.value = textStr;      
    });

    //The 'Malkovitch' Button OnClick Event Handler
    document.getElementById("btnReplace").addEventListener("click",  function(){
        const textEl = document.getElementById("text");
        let textStr = textEl.value;   
        let strArr = textStr.split(" ");
        textStr = "";
        for(let i=0;i<strArr.length;i++){
            console.log(strArr[i].length);
            console.log(strArr[i]);
            if(strArr[i].length >= 5){
                textStr += "Malkovich ";
            }else{
                textStr += strArr[i] + " ";
            }
        }
        textEl.value = textStr;       
    });
});

function increaseFontSize(){
    "use strict";
    /* I've encountered the problem when read element's font-size from the CSS.*/
    /* Then I've found out that I need to use window's 'getComputedStyle' to read element's computed style. */
    const element = document.getElementById('text');
    let style = window.getComputedStyle(element);
    let increasedSize = parseInt(style.fontSize) + 2;
    element.style.fontSize = increasedSize + "px";
}

//This function checks whether the character is vowel or not.
function isVowel(ch){
    "use strict";
    return ['a', 'e', 'i', 'o', 'u'].indexOf(ch.toLowerCase()) !== -1;
}
//This function checks word(string) and converts it depending on the first letter of the word.
function convertStr(str){
    "use strict";
    if(isVowel(str.charAt(0))){ //first letter is a vowel
        str += "-ay ";        
        console.log('Vowel');
        console.log(str);
    }
    else if(isNaN(str.charAt(0))){ //If the first letter is not a vowel and also not a number, then it means this letter is a consonant.
        let tmp = str.charAt(0);
        str = str.substring(1);
        str = str + tmp + "-ay ";
    }
    return str;
}