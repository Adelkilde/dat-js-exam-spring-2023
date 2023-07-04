"use strict";

window.addEventListener("load", initApp);
let students = [];

async function initApp() {
  console.log("JS is running");
  await getStudents();
  console.log(students);
  showStudents();
}

async function getStudents() {
  const response = await fetch("students.json");
  const data = await response.json();
  students = data;
}

function showStudents() {
  document.querySelector("#students-list").innerHTML = "";

  sortBySemester();
  for (const student of students) {
    const html = /*html*/ `
    <li>${student.name} - ${student.mail}, semester: ${student.semester} <btn>👍</btn></li>`;
    document.querySelector("#students-list").insertAdjacentHTML("beforeend", html);
    document.querySelector("#students-list li:last-child btn");
  }
}

function sortBySemester() {
  students.sort((a, b) => a.semester - b.semester);
}
