let a = [4, 3, 17, 10, 11, 12];
let even = 0;
for (i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        even += a[i];
    }
}
console.log(even);