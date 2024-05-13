
function solution(keyinput, board) {
let x = 0;
let y = 0;
//i로 키인풋 배열의 길이를 측정.
for (let i = 0; i < keyinput.length; i++) {
//각각 index별 입력값 확인
let direction = keyinput[i];

if (direction === "up" && y < Math.floor(board[1]/2)) {
        y += 1;
    }
    if (direction === "down" && -y < Math.floor(board[1]/2)) {
        y -= 1;
    }
    if (direction === "right" && x < Math.floor(board[0]/2)) {
        x += 1;
    }
    if (direction === "left" && -x < Math.floor(board[0]/2)) {
        x -= 1;
    }
}
return [x, y];

}