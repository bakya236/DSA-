// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5

for (let i = 1; i <= 5; i++) {
    console.log(i, i, i, i, i, i)
}

// other way by using nested loop

const n = 5;
for (let i = 1; i <= n; i++) {
    let output = "";
    for (j = 1; j <= n; j++) {
        output += i + " ";
    }
    console.log(output);
}




