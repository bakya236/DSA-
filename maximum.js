//to find the maximum value in an array

let a = [7,5,8,1,2,10];
let max = a[0];
for (i = 0; i < a.length; i++) {
    if (max < a[i]) {
        max = a[i];
    }
}
console.log(max); 

