function solution(array) {
    let mode = -1;
    let repeatNum = [];
    let maxRepeatNum = 0;
    let i = 0;
    
    while (i < array.length) {
        let num = array[i];
        repeatNum[num] = (repeatNum[num] || 0) + 1; 
    
        if (repeatNum[num] > maxRepeatNum) {
            mode = num;
            maxRepeatNum = repeatNum[num];
        } else if (repeatNum[num] === maxRepeatNum) {
            mode = -1;
        }
    
        i++; 
    }
    
    return mode;
    }
g