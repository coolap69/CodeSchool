// modify the while loop with a conditional that will only allow a number to be printed if it is even. 
//Your results should be the even numbers from 10 to 2 in descending order. 
//Think carefully about how your code might decide if a number is even…

var num = 10;

while (num > 0) {
    
    //added this line- use module//
    if (num % 2 == 0) {
        
        console.log(num);
    }
    num--;
}