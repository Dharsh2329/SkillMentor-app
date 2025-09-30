let streak = localStorage.getItem('streak') ? parseInt(localStorage.getItem('streak')) : 0;
let points = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0;
let level = localStorage.getItem('level') ? parseInt(localStorage.getItem('level')) : 1;
let weeklyData = localStorage.getItem('weeklyData') ? JSON.parse(localStorage.getItem('weeklyData')) : [0,0,0,0,0,0,0];

let dailyTasks = ["Read 1 chapter", "Solve 5 coding problems", "Watch tutorial video"];
let tasksCompleted = Array(dailyTasks.length).fill(false);
let challenges = ["Learn a new shortcut", "Teach a friend something", "Complete a mini project"];
let todayChallenge = challenges[Math.floor(Math.random() * challenges.length)];

const taskSound = document.getElementById('taskSound');
const levelUpSound = document.getElementById('levelUpSound');

function start() {
  const name = document.getElementById('name').value;
  if(name === "") { alert("Enter your name!"); return; }
  document.getElementById('welcome').innerText = `Welcome, ${name}!`;
  document.getElementById('login').style.display = "none";
  document.getElementById('dashboard').style.display = "block";
  document.getElementById('dailyChallenge').innerText = todayChallenge;
  renderTasks();
  updateDashboard();
  renderChart();
}

function renderTasks() {
  const list = document.getElementById('tasksList');
  list.innerHTML = "";
  dailyTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" id="task${index}" onchange="completeTask(${index})"> ${task}`;
    list.appendChild(li);
  });
}

function completeTask(index) {
  if(!tasksCompleted[index]) {
    tasksCompleted[index] = true;
    points += 10;
    taskSound.play(); // Play task completion sound
    localStorage.setItem('points', points);
    updateDashboard();
    checkAllTasks();
  }
}

function checkAllTasks() {
  if(tasksCompleted.every(v => v)) {
    streak += 1;
    points += 20; // bonus points for completing all tasks
    localStorage.setItem('streak', streak);
    localStorage.setItem('points', points);
    levelUpSound.play(); // Play level up sound
    alert("🎉 All tasks completed! Streak & bonus points awarded!");
    updateDashboard();
  }
}

function completeAllTasks() {
  dailyTasks.forEach((task, index) => {
    if(!tasksCompleted[index]) completeTask(index);
    document.getElementById(`task${index}`).checked = true;
  });
}

function updateDashboard() {
  document.getElementById('streak').innerText = streak;
  document.getElementById('points').innerText = points;
  level = Math.floor(points / 50) + 1;
  document.getElementById('level').innerText = level;
  document.getElementById('levelBar').style.width = ((points % 50) / 50 * 100) + "%";

  let badgeText = "";
  if(streak >= 7) badgeText = "🏅 7-Day Streak Badge!";
  else if(level === 2) badgeText = "🎉 Level 2 Achieved!";
  else if(level === 3) badgeText = "🔥 Level 3 Achieved!";
  document.getElementById('badge').innerText = badgeText;

  localStorage.setItem('level', level);
}

function renderChart() {
  const ctx = document.getElementById('weeklyChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      datasets: [{
        label: 'Tasks Completed',
        data: weeklyData,
        backgroundColor: 'rgba(255, 165, 0, 0.7)'
      }]
    },
    options: {
      scales: { y: { beginAtZero: true, max: 1 } }
    }
  });
}
