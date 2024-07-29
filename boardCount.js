function solution(board) {
    // Implement your solution here
   const rows =  board.length;
   const cols = board[0].length;
   let countTotal = 0;
   for(let r = 0; r < rows; r++)
   {
       let countA = 0;
       let countB = 0;
       for (let c = 0; c < cols; c++) {
           for (let i = 0; i <= r; i++) {
               let value = board[i][c];
               if (value === "A") {
                   countA++;
               }
               else if(value === "B"){
                   countB++;
               }
           }
           if (countA === countB){
               countTotal++;
           }
       }
   }
   return countTotal;
}
