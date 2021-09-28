//Code your solutions in this file
function fiveToOneHundred(){
    for(let i = 5; i<=100; i++){
        console.log(i)
    }
}
fiveToOneHundred()

//Code your solutions in this file
function fiveToOneHundred(){
    for(let i = 5; i <= 100; i++)
    console.log(i)
}
fiveToOneHundred()

function multiplesOfThree(){
    for(let i = 0; i <= 100; i+=3)
    console.log(i)
}
multiplesOfThree()

//function multiplesOfThreeOrFive(){
//    for(let i = 0; i <= 100; i += 3 || i += 5){
//      if
 //   }
 //  .. console.log(i)
//}
//multiplesOfThreeOrFive()

function untilNum(number){
    for(let i = 1; i <= number; i++)
    console.log(i)
}
untilNum(9);

function multiply(a,b){
    let product = a * b
    return product
}

console.log (multiply(2, 5))

function add(a,b){
    let sum = a + b;
        if (a === b ) {
            return a * 3;
        }
        else {
            return sum;
        }
    
}
console.log(add(5,5))


function isNegative(number){
    if (number > 0){
        return 'False';
    } else if (number < 0){
        return 'True';
    }
}
 console.log(isNegative(-4))
 
 function triangleArea(height, base){
    var area = height * base * .5;
    return area;
 } console.log(triangleArea(5,7))
    
 function betweenTwentyAndFourty(number){
     if(number >= 20 & number <= 100){
         return 'True';
     } else if(number <= 19 & number >= 101){
         return 'False';
     }
     
 }
 
 