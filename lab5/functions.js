"use strict";

function max(a,b){
    let max;
    if(a>=b) max = a;
    else max = b;
    return max;
};
function maxOfThree(a, b, c){
    let max;
    if(a>=b){
        if(a>=c) max = a;
        else if(c>=b) max = c;
        else max = b;
    }
    else{
        if(b>=c) max = b;
        else max = c;
    }
    return max;
}
function isVowel(ch){
    if(ch === 'a') return true;
    else return false;
}
function sum(a){
    let sum = 0;
    for(let i=0;i<a.length;i++){       
        sum += parseInt(a[i]);
    }
    return sum;
}
function multiply(a){
    let result = 1;    
    let x = 0;
    while(x<a.length){
        result *= a[x];
        x++;
    }
    return result;
}
function reverse(str){
    let x = str.length-1;
    let reversed = '';
    while(x>=0){
        reversed += str.charAt(x);
        x--;
    }
    return reversed;
}
function findLongestWord(a){
    let result = a[0].length;
    for(let i=1;i<a.length;i++){       
        if(a[i].trim().length>result) result = a[i].length;
    }
    return result;
}
function filterLongWords(a,index){
    console.log("Long Words: ");
    const c = a.filter(function(elem, i, array){
        return elem.length > index;});
        console.log(c);
    return c;
}
function computeSumOfSquares(a){
    const f = a.reduce(function(prevVal, elem, i, array){
        return parseInt(prevVal) + parseInt(elem*elem);},0); 
    return f;
}
function printOddNumbersOnly(a){
    const c = a.filter(function(elem, i, array){
        return elem % 2 !== 0;});
        console.log(c);
    return c;
}
function computeSumOfSquaresOfEvensOnly(a){
    const c = a.filter(function(elem, i, array){
        return parseInt(elem) % 2 == 0;})
        .reduce(function(prevVal, elem2, j, array){
        return parseInt(prevVal) + parseInt(elem2)*parseInt(elem2);},0)
    return c;
}
function sum2(a){
    const f = a.reduce(function(prevVal, elem, i, array){
        return parseInt(prevVal) + parseInt(elem);}); 
    return f;
}
function multiply2(a){
    const f = a.reduce(function(prevVal, elem, i, array){
        return parseInt(prevVal) * parseInt(elem);}); 
    return f;
}
function findSecondBiggest(a){
    let max = a[0];
    let second = 0;    
    for (var i = 0, n = a.length; i < n; ++i) {
        var nr = +a[i]; // convert to number first    
        if (nr > max) {
            second = max; // save previous biggest value
            max = nr;
        } else if (nr < max && nr > second) {
            second = nr; // new second biggest value
        }
    }
    return second;
}
function printFibo(n,a,b){
    let arr = [a, b];    
    if(n==1) return arr = [a];
    
    for (let i = 2; i < n; i++){
        arr.push(arr[i - 2] +  arr[i -1]);        
    }
    console.log("Fibonacci sequence: ");
    console.log(arr);
    return arr.join(',');
}

function showClock(){
    let id = "clock";
    let date = new Date;
    let year = date.getFullYear();
    let month = date.getMonth();
    let months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
    let d = date.getDate();
    let day = date.getDay();
    let days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    let h = date.getHours();
    if(h<10)
    {
            h = "0"+h;
    }
    let m = date.getMinutes();
    if(m<10)
    {
            m = "0"+m;
    }
    let s = date.getSeconds();
    if(s<10)
    {
            s = "0"+s;
    }
    let result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
    document.getElementById(id).innerHTML = result;
    setTimeout('showClock();','1000');
    return true;
}
window.onload = showClock();

//Using the above functions (1 - 13)
function findMax(){
    let maxVal = max(document.getElementById("max1").value, document.getElementById("max2").value);
    document.getElementById("resultMax").innerHTML = maxVal;
}

function findMax2(){
    let maxVal = maxOfThree(document.getElementById("max2_1").value, document.getElementById("max2_2").value, document.getElementById("max2_3").value);
    document.getElementById("resultMax2").innerHTML = maxVal;
}

function checkVowel(){
    let result = isVowel(document.getElementById("letter").value);
    document.getElementById("resultVowel").innerHTML = result;
}

function calcMultiply(){
    let tmp = document.getElementById("numbers").value;
    let result = multiply(tmp.split(','));
    document.getElementById("resultCalc").innerHTML = result;
}
function calcSum(){
    let tmp = document.getElementById("numbers").value;
    let result = sum(tmp.split(','));
    document.getElementById("resultCalc").innerHTML = result;
}
function reverseStr(){
    let result = reverse(document.getElementById("string").value);
    document.getElementById("resultReverse").innerHTML = result;
}
function findLongest(){
    let tmp = document.getElementById("strings").value;
    let result = findLongestWord(tmp.split(','));
    document.getElementById("resultFindLongest").innerHTML = result;
}
function findLongest2(){
    let tmp = document.getElementById("strings2").value;
    let result = filterLongWords(tmp.split(','), document.getElementById("index").value);
    document.getElementById("resultFindWords").innerHTML = result;
}
function calcSumOfSquares(){
    let tmp = document.getElementById("numbers2").value;
    let result = computeSumOfSquares(tmp.split(','));
    document.getElementById("resultSumOfSquares").innerHTML = result;
}
function printOdd(){
    let tmp = document.getElementById("numbers3").value;
    let result = printOddNumbersOnly(tmp.split(','));
    document.getElementById("resultPrintOdd").innerHTML = result;
}
function calcSumOfSquaresOfEvens(){
    let tmp = document.getElementById("numbers4").value;
    let result = computeSumOfSquaresOfEvensOnly(tmp.split(','));
    document.getElementById("result10").innerHTML = result;
}
function calcMultiply2(){
    let tmp = document.getElementById("numbers5").value;
    let result = multiply2(tmp.split(','));
    document.getElementById("resultCalc2").innerHTML = result;
}
function calcSum2(){
    let tmp = document.getElementById("numbers5").value;
    let result = sum2(tmp.split(','));
    document.getElementById("resultCalc2").innerHTML = result;
}
function findSecond(){
    let tmp = document.getElementById("numbers6").value;
    let result = findSecondBiggest(tmp.split(','));
    document.getElementById("result12").innerHTML = result;
}
function commputeFib(){
    let result = printFibo(parseInt(document.getElementById("n").value), parseInt(document.getElementById("a").value), parseInt(document.getElementById("b").value));
    document.getElementById("result13").innerHTML = result;
}
function toggleCode(el,id){
    
    const codeWrap = document.getElementById(id);
    if(codeWrap.classList.contains("shown")){
        codeWrap.classList.remove("shown");
        el.classList.remove("active");
    }
    else {
        codeWrap.classList.add("shown");
        el.classList.add("active");
    }
}