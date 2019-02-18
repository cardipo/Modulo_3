// function factorial(numero){
// if (numero ==1){
// return 1;
// }
// else {
//     return numero factorial(numero-1);
// }
// }
// var total =factorial(5);
// console.log(total);
// // 5*4*3*2*1
// // 0!=1

// function range(a,b){
// var nextvalue=a+1;

// if (nextvalue==b)
// {
//     return "";
// }
// else {return a+" ," +range(nextvalue,b);


// }
// }

// var result=range(2,9);

// console.log(result);

let n = 3;

let arr = Array(n);

arr[0] ="4 6 -1".split(' ').map(arrTemp => parseInt(arrTemp, 10));
arr[1] ="7 2 4".split(' ').map(arrTemp => parseInt(arrTemp, 10));
arr[2] ="10 4 3".split(' ').map(arrTemp => parseInt(arrTemp, 10));

const result = diagonalDifference(arr);
console.log(result);
var total=0;
var diagonal1=0;
var diagonal2=0;
for(let fila=0;fila<=Array.length;fila++){
    const todafila=arr[fila];
    for(let columna=0;columna< todalafila.lenght;columna++){

        var valor=todafila[columna];
    }
}
function diagonalDifference(arr) {
total=diagonal1-diagonal2;
return total;
}
