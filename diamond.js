// Number diamond for n=4
//    1
//   2 2
//  3 3 3
// 4 4 4 4
//  3 3 3
//   2 2
//    1

let n = 5;
    let string = "";
    // Pyramid
    for (let i = 1; i <= n; i++) {
      for (let k = 1; k <= i; k++) {
        string += i;
      }
      string += "\n";
    }
    // Reverse Pyramid
    for (let i = n-1; i >=  1; i--) {
      for (let k = 1; k <= n - i; k++) {
        string += i;
      }
      string += "\n";
    }
    console.log(string);