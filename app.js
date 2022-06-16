console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
let randomNumber = function() {
    result=''
    num = Math.floor(Math.random() * 100) + 1;
    
    var userInput = document.getElementById("userInput").value;
    if( userInput == num ){
        result= 'CORRECT!'
    } else if( userInput<num){
        result= 'Too Low'
    } else if( userInput>num){
        result= 'Too High'
    }
    document.getElementById("demo").innerHTML = result;
}