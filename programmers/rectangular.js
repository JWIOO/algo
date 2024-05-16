
    function solution(dots) {
    var answer = 0;

    
    let maxWidth = Math.max(dots[0][0],dots[1][0],dots[2][0],dots[3][0] );
    let minWidth = Math.min(dots[0][0],dots[1][0],dots[2][0],dots[3][0] );
    let maxHeight = Math.max(dots[0][1],dots[1][1],dots[2][1],dots[3][1] );
    let minHeight = Math.min(dots[0][1],dots[1][1],dots[2][1],dots[3][1] );

    answer = (maxWidth - minWidth) * (maxHeight - minHeight);
    return answer;
}
