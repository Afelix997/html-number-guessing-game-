console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
num = Math.floor(Math.random() * 100) + 1;
let randomNumber = function() {
    result=''
    console.log(num)
    
    var userInput = document.getElementById("userInput").value;
    if( userInput == num ){
        result= `The guess of ${userInput} is CORRECT!`
    } else if( userInput<num){
        result= `The guess of ${userInput} is Too Low`
    } else if( userInput>num){
        result= `The guess of ${userInput} is Too High`
    }
    document.getElementById("demo").innerHTML = result;
}