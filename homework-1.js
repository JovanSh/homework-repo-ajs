console.log("I am alive");

/*
Homework 1
There is a JSON file with students. Make a call to the file and get the following data from it:

All students with an average grade higher than 3
All female student names with an average grade of 5
All male student full names who live in Skopje and are over 18 years old
The average grades of all female students over the age of 24
All male students with a name starting with B and average grade over 2
*/

const STUDENT_URL =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

function fetchStudents() {
  fetch(STUDENT_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      // 1. All students with an average grade higher than 3
      const averageGradedStudents = data.filter(
        (student) => student.averageGrade > 3
      );

      console.log(averageGradedStudents);
      // 2. All female student names with an average grade of 5
      const greatFemaletudents = data.filter(
        (student) => student.gender === "Female" && student.averageGrade === 5
      );

      console.log(greatFemaletudents);
      // 3. All male student full names who live in Skopje and are over 18 years old
      const adultMaleStudentsWhoLiveInSkopje = data
        .filter(
          (student) =>
            student.gender === "Male" &&
            student.city === "Skopje" &&
            student.age > 18
        )
        .forEach((student) => {
          console.log(`${student.firstName} ${student.lastName}`);
        });

      console.log(adultMaleStudentsWhoLiveInSkopje);
      // 4. The average grades of all female students over the age of 24
      const oldFemaleStudentsAverageGrades = data
        .filter((student) => student.gender === "Female" && student.age > 24)
        .forEach((student) => {
          console.log(`${student.averageGrade}`);
        });

      console.log(oldFemaleStudentsAverageGrades);
      // 5. All male students with a name starting with B and average grade over 2
      const maleStudentsFirstLetterB = data.filter(
        (student) =>
          student.gender === "Male" &&
          student.averageGrade > 2 &&
          student.firstName.startsWith("B")
      );

      console.log(maleStudentsFirstLetterB);
    });
}

fetchStudents();
