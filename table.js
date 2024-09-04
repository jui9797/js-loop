// Generate a multiplication table for number 9  using for loop

// let multi =9;
// let table ='';
// let multi2 =1;
// for(let i =1; i<=10; i++){
//     multi2 =multi *i;
//     table +=multi +'x' + i+ '=' + multi2 + '\n' ;
    
// }
// console.log(table)

// Generate a multiplication table for number 5  using while loop.

let multi =5;
let table ='';
let multi2 =1;
let i =1;
while(i<= 10){
    multi2 =multi *i;
    table +=multi +'x' + i+ '=' + multi2 + '\n' ;

    i++;
}
console.log(table);