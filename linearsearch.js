let a = [1, 2, 2, 3, 4, 5, 6];
let x = 2;
let found = 0;
for (i = 0; i < a.length; i++) {
    if (x == a[i]) {
        found += 1;
    }
}
if (found) {
    console.log(x + " is found " + found + " times");
}
else {
    console.log(x + " is not found ");
}