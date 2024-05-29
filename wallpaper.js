//일단, 파일이 어디있는지 찾아야 함

//사각형이
// 1-2
// | |
// 3-4
// 로 드래그가 만들어진다고 하면,
//1(좌측 상단)과 4(우측 하단) 좌표 구해서, 공식 돌리기

//파일이 있으면 #, 없으면 .

//배열 돌기
function solution(wallpaper) {
    let xCoord = []; 
    let yCoord = [];
  
    for (let y = 0; y < wallpaper.length; y++) {
      for (let x = 0; x < wallpaper[y].length; x++) {
        if (wallpaper[y][x] === "#") {
          xCoord.push(x); 
          yCoord.push(y); 
        }
      }
    }
  
    return [
      Math.min(...yCoord),
      Math.min(...xCoord),
      Math.max(...yCoord)+1,
      Math.max(...xCoord)+1,
    ];
  }
  