//  Consecutive Number Diamond
//    1
//   1 2
//  1 2 3
// 1 2 3 4
//  1 2 3
//   1 2
//    1

// Reverse Pyramid
const n = 5;
let string = " ";

for (let i = 1; i <= n - 1; i++) {
    for (let k = 1; k <= n - i; k++) {
        string += k + " ";
    }
    string += " \n ";
}

for (let i = 1; i <= n - 1; i++) {
    for (let k = 1; k <= n - i; k++) {
        string += k + " ";
    }
    string += " \n ";
}
console.log(string);

