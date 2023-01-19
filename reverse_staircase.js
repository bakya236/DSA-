

// const n = 4
// for (let i = 1; i <= n; i++) {
//     let output = "  ";
//     for (let j = n; j >= 1; j--) {
//         output += " ";
//     }
//     for (let k = i; k >= 1; k--) {
//         output += k + " ";
//     }

//     console.log(output);
// }

let n = 4;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = n; j > i; j--) {
        string += "  ";
    }
    for (let k = i; k >= 1; k--) {
        string += k + "  ";
    }
    string += "\n";
}
console.log(string);












