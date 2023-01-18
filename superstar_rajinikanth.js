// 1
// 2
// Superstar
// 4
// Rajnikanth
// Superstar
// 7
// 8
// Superstar
// Rajnikanth
// 11
// Superstar
// 13
// 14
// Superstar Rajnikanth


const n = 15;

for (let i = 1; i <= n; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("superstar rajinikanth");
    }

    else if (i % 3 === 0) {
        console.log("superstar");
    }

    else if (i % 5 === 0) {
        console.log("rajinikanth");
    }

    else {
        console.log(i);
        
    }

}