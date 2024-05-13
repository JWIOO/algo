
function solution(array) {

let mode = -1;
let repeatNum = [];
let maxRepeatNum = 0;

for (let i = 0; i < array.length; i++) {
    let num = array[i];

    repeatNum[num] = (repeatNum[num] || 0) + 1;

    if( repeatNum[num] > maxRepeatNum ){
        mode = num ;
        maxRepeatNum = repeatNum[num];

    } else if( repeatNum[num] === maxRepeatNum ) {
        mode = -1;
    }

}
return mode;
}
