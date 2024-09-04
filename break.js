/*Break 

1 Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
// for(let i =1; i<= 200; i++){
//     if(i === 100){
//         console.log('find 100')
//         break
//     }
//     console.log(i)
// }
// console.log('loop stop')




/* 2
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
// let sum =0;
// let num =1;
// while(true){
//     sum =sum +num
//     console.log(num)
//     console.log('sum', sum)
    
//     if(sum >= 100){
//         console.log('the sum reached 100')
//         break;
        
//     }
//     num++;
    
// }
// console.log('stop', sum)




/* 3
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
for(let i =2; i<=100; i++){
    console.log(i)
    let square =Math.sqrt(i);
    if(Number.isInteger(square)){
        console.log('first square number is found', i)
        break
    }
}
console.log('loop is end')