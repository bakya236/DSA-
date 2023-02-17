// JSON JavaScript Object Notation
//Given a array of student objects 


// 2. Find the students whose physics is more than 80
// 3. Count the number of students whose total average is more than 70. 
let array_student_obj = [{
    name: "Nanda",
    age: 19,
    salary: 10000,
    marks: {
        maths: 80,
        physics: 78,
        chemistry: 90
    }
},
{
    name: "Deepika",
    age: 18,
    salary: 10000,
    marks: {
        maths: 95,
        physics: 95,
        chemistry: 89
    }
},
{
    name: "Boopalan",
    age: 21,
    salary: 10000,
    marks: {
        maths: 76,
        physics: 81,
        chemistry: 76
    }
}, {
    name: "Karthi",
    age: 22,
    salary: 10000,
    marks: {
        maths: 67,
        physics: 51,
        chemistry: 39
    }
}];

// 0. Find a student whose name is Nanda.

// let name = "nanda";
// let found = false;
// for (i = 0; i < array_student_obj.length; i++) {
//     if (name == array_student_obj[i].name) {
//         found = true;
//         break;
//     }
// }
// if (found == true) {
//     console.log(name + " is found")
// }
// else {
//     console.log(name + " is not found")
// }

//1. Find the eldest student

// let eldest = array_student_obj[0].age;
// let eldest_student = "";
// for (i=0;i<array_student_obj.length;i++){
//     if(eldest < array_student_obj[i].age){
//         eldest = array_student_obj[i].age;
//         eldest_student = array_student_obj[i].name;
//     }
// }
// console.log(eldest_student+" is the eldest student");

// 2. Find the students whose physics is more than 80

