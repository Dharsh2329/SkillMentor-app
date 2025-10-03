// ---------------- Splash Screen ----------------
window.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContainer");

  const splashTimeout = setTimeout(() => {
    splash.style.display = "none";
    main.style.display = "block";
  }, 3000);

  splash.addEventListener("click", () => {
    clearTimeout(splashTimeout);
    splash.style.display = "none";
    main.style.display = "block";
  });
});

// ---------------- Login / Goal / Tasks ----------------
let userName = "";
let selectedGoal = "";

const tasks = {
  placement: {
    tutorials: [
      {name: "Coding Practice (LeetCode)", link: "https://leetcode.com/"},
      {name: "Aptitude Practice", link: "https://www.indiabix.com/"},
      {name: "Communication Skills", link: "https://www.ted.com/topics/communication"}
    ],
    quizzes: [
      {name: "Coding Quiz (GeeksforGeeks)", link: "https://practice.geeksforgeeks.org/"},
      {name: "Aptitude Test", link: "https://aptitude-test.com/"},
      {name: "Communication Test (British English Score)", link: "https://www.englishscore.com/"}
    ]
  },
  skill: {
    tutorials: [
      {name: "Learn Web Development", link: "https://www.freecodecamp.org/"},
      {name: "Learn Python", link: "https://www.learnpython.org/"},
      {name: "Learn Data Structures", link: "https://www.geeksforgeeks.org/data-structures/"},
      {name: "Learn Java", link: "https://www.tpointtech.com/java-tutorial"},
      {name: "Learn Machine Learning", link: "https://www.coursera.org/learn/machine-learning"},
      {name: "Learn SQL & Databases", link: "https://www.w3schools.com/sql/"}
    ],
    quizzes: [
      {name: "Python Quiz", link: "https://www.w3schools.com/quiztest/quiztest.asp?qtest=PYTHON"},
      {name: "Java Quiz", link: "https://www.geeksforgeeks.org/java/java-quiz/"},
      {name: "SQL Quiz", link: "https://www.sanfoundry.com/sql-questions-answers/"}
    ]
  },
  learn: {
    tutorials: [
      {name: "Learn AI Basics", link: "https://www.coursera.org/"},
      {name: "Learn Cloud Computing", link: "https://azure.microsoft.com/en-in/training/"},
      {name: "Learn Git & GitHub", link: "https://www.atlassian.com/git/tutorials"},
      {name: "Learn Blockchain Basics", link: "https://www.ibm.com/topics/what-is-blockchain"},
      {name: "Learn Cybersecurity", link: "https://www.cybrary.it/"},
      {name: "Learn DevOps Fundamentals", link: "https://www.edx.org/learn/devops"}
    ],
    quizzes: [
      {name: "AI Quiz", link: "https://www.sanfoundry.com/artificial-intelligence-questions-answers/"},
      {name: "Cloud Computing Quiz", link: "https://www.sanfoundry.com/1000-cloud-computing-questions-answers/"},
      {name: "Cybersecurity Quiz", link: "https://www.sanfoundry.com/cyber-security-questions-answers/"}
    ]
  }
};

// ---------------- LOGIN FUNCTION ----------------
function login() {
  const usernameInput = document.getElementById('username');
  userName = usernameInput.value.trim();

  if(userName === "") {
    alert("Please enter your name.");
    return;
  }

  document.getElementById('loginCard').style.display = "none";
  document.getElementById('goalCard').style.display = "block";
  document.getElementById('welcomeUser').innerText = `Welcome, ${userName}! 🌟`;
}

// ---------------- SELECT GOAL ----------------
function selectGoal(goal) {
  selectedGoal = goal;
  document.getElementById('goalCard').style.display = "none";
  document.getElementById('taskCard').style.display = "block";
  showTasks();
}

// ---------------- SHOW TASKS ----------------
function showTasks() {
  const listDiv = document.getElementById('taskList');
  listDiv.innerHTML = "";

  // Tutorials
  const tutorialHeader = document.createElement('h3');
  tutorialHeader.innerText = "📘 Tutorials";
  listDiv.appendChild(tutorialHeader);

  tasks[selectedGoal].tutorials.forEach(task => {
    const div = document.createElement('div');
    div.className = "taskItem";
    div.innerHTML = `<strong>${task.name}</strong> <a href="${task.link}" target="_blank">Start</a>`;
    listDiv.appendChild(div);
  });

  listDiv.appendChild(document.createElement('hr'));

  // Quizzes
  const quizHeader = document.createElement('h3');
  quizHeader.innerText = "📝 Quizzes / Tests";
  listDiv.appendChild(quizHeader);

  tasks[selectedGoal].quizzes.forEach(task => {
    const div = document.createElement('div');
    div.className = "taskItem";
    div.innerHTML = `<strong>${task.name}</strong> <a href="${task.link}" target="_blank">Take Quiz</a>`;
    listDiv.appendChild(div);
  });

  // Back button
  const backBtn = document.createElement('button');
  backBtn.innerText = "⬅️ Back to Goal Selection";
  backBtn.style.marginTop = "20px";
  backBtn.onclick = () => {
    document.getElementById('taskCard').style.display = "none";
    document.getElementById('goalCard').style.display = "block";
  };
  listDiv.appendChild(backBtn);
}
