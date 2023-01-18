// printing superstar for 100 times

for (let i = 0; i < 100; i++) {
  console.log("superstar");
}

// printing as 1superstar 2superstar .... for 100 times

for (let i = 1; i <= 100; i++) {
  console.log(i + "superstar");
}

// printing as 1superstar 2rajini .... for 100 times

for (let i = 1; i <= 100; i++) {

    if (i % 2 == 1) {
        console.log(i + "superstar");
    }

    else {
        console.log(`${i}rajini`)
    }
}

