
function solution(quiz) {
    var answer = [];
    
    var answer = quiz.map(function(equation) {
 
         let array = equation.split(" ");
         if (array[1]==="+"){
             parseInt(array[0]) + parseInt(array[2]);
                 if( parseInt(array[0]) + parseInt(array[2]) === parseInt(array[4]) ){
 
                     return "O";
 
                 }
                 else{
                     return "X";
                 }
         }
 
         else {
             if( parseInt(array[0]) - parseInt(array[2]) === parseInt(array[4]) ){
                 return "O";
             }
             else{
                 return "X";
                 }
         }
     });
 return answer; }
 