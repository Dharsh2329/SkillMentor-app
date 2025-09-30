let userName = "";
let selectedGoal = "";

// Predefined tasks
const tasks = {
  placement: [
    {name: "Coding Practice", link: "https://www.hackerrank.com/"},
    {name: "Aptitude Practice", link: "https://www.indiabix.com/"},
    {name: "Communication Skills", link: "https://www.ted.com/topics/communication"}
  ],
  skill: [
    {name: "Learn Web Development", link: "https://www.freecodecamp.org/"},
    {name: "Learn Python", link: "https://www.learnpython.org/"},
    {name: "Learn Data Structures", link: "https://www.geeksforgeeks.org/data-structures/"}
  ],
  learn: [
    {name: "Learn AI Basics", link: "https://www.coursera.org/"},
    {name: "Learn Cloud Computing", link: "https://azure.microsoft.com/en-in/training/"},
    {name: "Learn Git & GitHub", link: "https://www.atlassian.com/git/tutorials"}
  ]
};

function login() {
  userName = document.getElementById('username').value.trim();
  if(userName === "") { alert("Please enter your name."); return; }
  document.getElementById('loginCard').style.display = "none";
  document.getElementById('goalCard').style.display = "block";
}

function selectGoal(goal) {
  selectedGoal = goal;
  document.getElementById('goalCard').style.display = "none";
  document.getElementById('taskCard').style.display = "block";
  document.getElementById('welcomeUser').innerText = `Welcome, ${userName}! Your focus: ${goal.toUpperCase()}`;
  showTasks();
}

function showTasks() {
  const listDiv = document.getElementById('taskList');
  listDiv.innerHTML = "";
  tasks[selectedGoal].forEach(task => {
    const div = document.createElement('div');
    div.className = "taskItem";
    div.innerHTML = `<strong>${task.name}</strong> <a href="${task.link}" target="_blank">Tutorial</a>`;
    listDiv.appendChild(div);
  });
}
