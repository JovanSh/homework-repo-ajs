console.log("Working");

/*
Using only async/await syntax fetch the students from this endpoing "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"

After you have the data display the following informations in the HTML

ONLY USE HIGHER ORDER FUNCTIONS
USE AYSNC/AWAIT
DO NOT MUTATE OR CHANGE OR SORT THE ORIGINAL DATA
Show the average age and average grade of all students combined
Show the number of students that are over 60 and the number of students that are under 30 years old
Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above
Find the student named Arthur Cadore and display all of his information
Find the oldest and youngest student and display their information on the screen
Show a list of the full names of students that have a last name longer than 8 characters
Show a list of the top 10 best students by average grade
Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)
*/

const fetchUsersAsync = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
    );
    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong in fetch users");
  }
};

fetchUsersAsync();

const app = async () => {
  try {
    // 1. Fetch users using await
    const users = await fetchUsersAsync();

    // 2. Use user data to render list
    renderUsers(users);
  } catch (error) {
    document.querySelector(".error").innerText = error;
  }
};

app();

const renderUsers = (users) => {
  const firstUsersListEl = document.querySelector(".user-list-one");
  const secondUsersListEl = document.querySelector(".user-list-two");
  const thirdUsersListEl = document.querySelector(".user-list-three");
  const forthUsersListEl = document.querySelector(".user-list-four");
  const fifthUsersListEl = document.querySelector(".user-list-five");
  const sixthUsersListEl = document.querySelector(".user-list-six");
  const seventhUsersListEl = document.querySelector(".user-list-seven");
  const eighthUsersListEl = document.querySelector(".user-list-eight");
  const ninethUsersListEl = document.querySelector(".user-list-nine");
  const tenthUsersListEl = document.querySelector(".user-list-ten");

  // 1.Show the average age and average grade of all students combined
  firstUsersListEl.innerHTML = `Average age of all students - `;
  firstUsersListEl.innerHTML +=
    users.reduce((acc, age) => {
      return acc + age.age;
    }, 0) / users.length;

  secondUsersListEl.innerHTML = `Average grades of all students - `;
  secondUsersListEl.innerHTML +=
    users.reduce((acc, grade) => {
      return acc + grade.averageGrade;
    }, 0) / users.length;

  // Ne znam kako da gi kombiniram :)

  // 2.Show the number of students that are over 60 and the number of students that are under 30 years old
  thirdUsersListEl.innerHTML = `Students that are over 60 years old - `;
  thirdUsersListEl.innerHTML += users.filter((user) => user.age < 30).length;
  forthUsersListEl.innerHTML = `Students that are under 30 years old - `;
  forthUsersListEl.innerHTML += users.filter((user) => user.age > 60).length;

  // 3.Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above
  fifthUsersListEl.innerHTML = `Students who are over 30 and have an average grade of 4 and above`;
  fifthUsersListEl.innerHTML += users
    .filter((user) => user.age > 30 && user.averageGrade >= 4)
    .map((user) => {
      return `<li>${user.firstName} ${user.lastName} ${user.city}</li>`;
    });

  // 4.Find the student named Arthur Cadore and display all of his information
  sixthUsersListEl.innerHTML = `Information about Arthur Cadore`;
  sixthUsersListEl.innerHTML += users
    .filter((user) => user.firstName === "Arthur")
    .map((user) => {
      return `<li>${user.id}</li>
      <li>${user.firstName}</li>
      <li>${user.lastName}</li>
      <li>${user.email}</li>
      <li> ${user.gender}</li>
      <li>${user.city}</li>
      <li>${user.averageGrade}</li>
      <li>${user.age}</li>`;
    });

  // 5. Find the oldest and youngest student and display their information on the screen
  // Probuvav nesto so reduce, ama ne mi iskoci nisto
  // 6. Show a list of the full names of students that have a last name longer than 8 characters
  seventhUsersListEl.innerHTML = `List of students whose last name is longer than 8 charcters`;
  seventhUsersListEl.innerHTML += users
    .filter((user) => user.lastName.length > 8)
    .map((user) => {
      return `<li> ${user.firstName} ${user.lastName}</li>`;
    })
    .join("");
  // 7. Show a list of the top 10 best students by average grade
  // Probav da napravam kopija so sort ama mi dava prazni objekti vo HTML, ne znam od tuka kako da prodolzam
  const bestStudents = users.map((user) => user);

  console.log(bestStudents);

  bestStudents.sort((a, b) => b.age - a.age);

  console.log(bestStudents);

  eighthUsersListEl.innerHTML = bestStudents.slice(0, 10);

  // 8. Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)
  ninethUsersListEl.innerHTML = `Some students have an average grade of 1 - `;
  ninethUsersListEl.innerHTML += users.some((user) => user.averageGrade > 1);
  tenthUsersListEl.innerHTML = `All students are adults - `;
  tenthUsersListEl.innerHTML += users.every((every) => every.age > 18);
};
