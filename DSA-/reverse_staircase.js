// Reverse number staircase
// 1
// 2 1
// 3 2 1
// 4 3 2 1
// For n = 4

// const n = 5;
// let o = " ";
// for (let i = 1; i < n; i++) {
//     o += i + " " ;
//     console.log(o);
// }

//  staircase 

const n = 4;
for (let i = 1; i <= n; i++) {
    let output = " ";
    for (j = 1; j <= i; j++) {
        output += j + " ";
    }
    console.log(output);
}





