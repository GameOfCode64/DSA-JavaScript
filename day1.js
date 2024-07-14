// ! Day 1 of learning DSA in Javascript

// * create an array with 5 students names, and after that create a function which takes 2 parameters (allStudents, & studentName ) iterate over all students and find that specific studentName

// Todo: The Array data Structure we use
const students = ["Bhavishya", "Ankit", "Anurag", "Aman", "Somil"];

// Todo: This the Algorithm to solve the Problem
function findName(students, studentName) {
  for (let i = 0; i < students.length; i++) {
    if (studentName.toLowerCase() === students[i].toLowerCase()) {
      return `Student Name Matched ${studentName}`;
    }
    return `Student not Found`;
  }
}

console.log(findName(students, "shon"));
