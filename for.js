// for-loop syntax
// for(initilization; condition; increment/decrement){loop body}



// 1
// for (let num =0 ; num <5 ; num++){
//     console.log(num);
// }

//2 even number
// for(let i =0; i<=20; i=i+2){
//     console.log(i);
// }

//3 odd number
// for(let i =1; i<=20; i=i+2){
//     console.log(i);
// }


//4 incremental for loop
// let sum=0;
// for(let i =11; i<=20; i++){
//     sum =sum+i;
//     console.log(i)
    
// }
// console.log('sum of the numbers is:', sum)

// 5 decrimal for loop
// for(let i =10; i<=10; i--){
//     console.log(i);
// }  //output infinity loop can be stop by pressing ctrl +c


// for(let i = 10; i >= 0; i--){
//     console.log(i);
// }
// output 10-0


// 6 n%2 ===1 & n%2 !==0 are the same.
// odd number
// for(let i =1; i<20; i++){
//     if(i%2 ===1){
//    console.log(i)
//     }
// }

// even number
// for(let i=0; i<30; i++){
//     if(i%2 ===1){
//         console.log(i)
//     }
// }

// give me the numbers between 1 to 30 divisible by 5
// for(let i =1; i<= 30; i++){
//     if(i%5 ===0){
//         console.log(i)
//     }
// }
// output:5,10,15,20,25,30

// for(let i =1; i<= 30; i++){
//     if(i%3 ===0 || i%5 ===0){
//         console.log(i)
//     }
// }

// give me the sum of the numbers of 1 t0 20 that are divisible by 3
// let total =0;
// for(let i =1; i<=20; i++){
//  if(i% 3 ===0){
//     console.log(i)
//     total =total+i;
//     console.log('total', total)
//  }
// }
// console.log('total of numbers:', total);


// break method
// for(let i =0; i<15; i++){
//     console.log(i);
//     if(i >=10){
//         break;
//     }
// }
// console.log('life after breakup.')

for(let i =1; i<10; i++){
    if(i%2 === 1){
        continue;
    }
    console.log(i)
}