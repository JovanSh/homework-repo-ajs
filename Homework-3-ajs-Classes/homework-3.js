console.log("Fly me to the moon");

/*
Task 1
Create 3 classes: Academy, Student and Subject.

Their structure should look like this:

Academy
name - string
students - array of Students
subjects - array of Subjects
start - Date when it starts
end - Date when it ends
numberOfClasses - number of subjects multipled by 10, not settable*
printStudents - method that prints all students in console
printSubjects - method that prints all subjects in console

Subject
title - string
numberOfClasses - default 10, not settable*
isElective - boolean
academy - Academy object
students - array of Students
overrideClasses - method that accepts a number and rewrites the numberOfClasses property with that number. The number can't be smaller than 3.

Student
firstName - string
lastName - string
age - number
completedSubjects - emptyArray as default, not settable*
academy - null as default, not settable*
currentSubject - null as default, not settable*
startAcademy - method that accepts Academy object that it sets to the Academy property of the student
startSubject - method that accepts Subject object and adds it to the currentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

Task 2
Make the functions startAcademy and startSubject dynamic.
startAcademy - When the student calls startAcademy, the student should also be added to the Academy property students ( The academy that he is starting )
startSubject - When the student calls startSubject the student should also be added to the Subject property students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to completedSubjects and then add the new Subject

Tips
Not settable means that when calling the constructor function this property should not be added to the argument list.
Read carefully through the text before attempting any of the tasks required, take it slow and go one step at a time ( console.log like crazy through the trial and error )
At many places through the tasks you will need to use the this keyword to assign properties ex this.academy = Academy to assign an academy to the subject when creating a new one
*/

class Academy {
  constructor(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = `${this.subjects.length * 10}`;
  }

  printStudents() {
    console.log(this.students);
  }

  printSubjects() {
    console.log(this.subjects);
  }
}

const seavus = new Academy(
  "SEAVUS",
  ["Jeff", "Will", "Mike", "Mary", "Quincy"],
  ["BasciHTML", "BasicJS", "AdvJS"],
  "Academy starts on 17.10.2023",
  "Academy ends on 17.20.2024"
);

console.log(seavus);
seavus.printStudents();
seavus.printSubjects();

class Subject {
  numberOfClasses = 10;

  constructor(title, isElective, students) {
    this.title = title;
    this.isElective = isElective;
    this.academy = Academy;
    this.students = students;
  }

  overideClasses(newNumber) {
    if (newNumber < 3) {
      console.log("Number of Classes has to be higher than 3");
    } else {
      this.numberOfClasses = newNumber;
    }
  }
}

const basicHTML = new Subject("BasicHTML", true, [
  "Jeff",
  "Will",
  "Mike",
  "Mary",
  "Quincy",
]);

console.log(basicHTML);
basicHTML.overideClasses(20);

class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
  }

  startAcademy(seavus) {
    this.academy = seavus;
    seavus.students.push(this.firstName);
  }

  startSubject(basicHTML) {
    if ((this.academy = seavus)) {
      /* Ovoj del nemozam da go sklopam bas, 
        dokolku ima drug subject vo currentSubject da otide vo completedSubjects,
        probav so ovaa logika ama mi vika konzola deka ne go naoga subjects?,
        kako i da e mislam drugoto e OK :)
      */
      //     && seavus.subjects.includes(basicHTML))) {
      //   if (this.currentSubject) {
      //     this.completedSubjects.push(this.currentSubject);
      //    }
      this.currentSubject = basicHTML;
      basicHTML.students.push(this.firstName);
    } else {
      console.log("Error");
    }
  }
}

const jovan = new Student("Jovan", "Sapcevski", 21);

console.log(jovan);
jovan.startAcademy(seavus);
jovan.startSubject(basicHTML);
