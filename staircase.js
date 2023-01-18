//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5


const n = 5
for (let i = 0; a <= 5; i++) {
    let o = " ";
    for (let j = 1; j <= i; j++) {
        o += j + " ";
    }
    console.log(o);
}

// other simple way to print above output

// const n = 5;
// let o = " ";
// for (let i = 1; i <= n; i++) {
//     o = o + i + " ";
//     console.log(o);
// }