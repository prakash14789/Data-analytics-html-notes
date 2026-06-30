// UI Rendering and Event Routing Component
// Exposes UI utility and rendering functions globally

// Switch view tabs
window.switchTab = function(tabId) {
  const panes = document.querySelectorAll(".tab-pane");
  const navLinks = document.querySelectorAll(".nav-link");
  
  panes.forEach(pane => pane.classList.remove("active"));
  navLinks.forEach(link => link.classList.remove("active"));
  
  const targetPane = document.getElementById(tabId);
  const targetLink = document.querySelector(`.nav-link[data-tab="${tabId}"]`);
  
  if (targetPane) targetPane.classList.add("active");
  if (targetLink) targetLink.classList.add("active");
  
  // Scroll to top of main content
  document.querySelector(".main-content").scrollTop = 0;
};

// Global Search functionality
window.handleSearch = function(query) {
  if (!query) {
    // Reset filters
    window.renderRoadmapTimeline();
    window.renderModulesGrid();
    return;
  }
  
  // Search inside Modules
  const filteredModules = window.modulesData.filter(m => 
    m.name.toLowerCase().includes(query) || 
    m.why.toLowerCase().includes(query) || 
    m.topics.some(t => t.toLowerCase().includes(query)) ||
    m.keySkills.some(s => s.toLowerCase().includes(query))
  );
  
  const modulesGrid = document.getElementById("modules-grid");
  modulesGrid.innerHTML = "";
  if (filteredModules.length > 0) {
    filteredModules.forEach(m => modulesGrid.appendChild(window.createModuleCardHTML(m)));
  } else {
    modulesGrid.innerHTML = `<div class="no-results">No modules match "${query}"</div>`;
  }
  
  // Search inside Roadmap Days
  const timelineContainer = document.getElementById("timeline-container");
  timelineContainer.innerHTML = "";
  let matchesFound = false;
  
  window.roadmapSchedule.forEach(weekData => {
    const matchedTopics = weekData.topics.filter(d => d.topic.toLowerCase().includes(query));
    if (matchedTopics.length > 0) {
      matchesFound = true;
      const weekCard = document.createElement("div");
      weekCard.className = "timeline-week-card";
      
      const headerHTML = `
        <div class="timeline-week-header">
          <div class="week-title-area">
            <span class="week-badge-num">W${weekData.week}</span>
            <div class="week-details-info">
              <h3>Week ${weekData.week} Match</h3>
              <p>Found ${matchedTopics.length} lesson(s) matching search</p>
            </div>
          </div>
          <svg class="expand-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      `;
      
      const body = document.createElement("div");
      body.className = "timeline-week-body";
      const list = document.createElement("div");
      list.className = "timeline-days-list";
      
      matchedTopics.forEach(day => {
        list.appendChild(window.createDayRowHTML(day));
      });
      
      body.appendChild(list);
      weekCard.innerHTML = headerHTML;
      weekCard.appendChild(body);
      
      // Make it toggleable
      weekCard.querySelector(".timeline-week-header").addEventListener("click", () => {
        weekCard.classList.toggle("collapsed");
      });
      
      timelineContainer.appendChild(weekCard);
    }
  });
  
  if (!matchesFound) {
    timelineContainer.innerHTML = `<div class="no-results">No schedule items match "${query}"</div>`;
  }
};

// Dark/Light Theme Control
window.initTheme = function() {
  const savedTheme = localStorage.getItem("analyst_theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    document.querySelector(".sun-icon").style.display = "none";
    document.querySelector(".moon-icon").style.display = "block";
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    document.querySelector(".sun-icon").style.display = "block";
    document.querySelector(".moon-icon").style.display = "none";
  }
};

window.toggleTheme = function() {
  const isLight = document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme", !isLight);
  
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");
  
  if (isLight) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    localStorage.setItem("analyst_theme", "light");
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    localStorage.setItem("analyst_theme", "dark");
  }
};

// Streak Counter & Quotes
window.loadStreak = function() {
  document.getElementById("streak-days").innerText = state.streakCount;
};

window.loadRandomQuote = function() {
  const randomIndex = Math.floor(Math.random() * window.quotesData.length);
  const quote = window.quotesData[randomIndex];
  document.getElementById("quote-display").innerText = `"${quote.text}"`;
  document.getElementById("quote-author").innerText = `— ${quote.author}`;
};

// Dashboard Progress & Heatmap Matrix
window.updateProgressTracker = function() {
  const totalDays = 40; // 8 weeks * 5 days
  const completedCount = state.completedDays.length;
  const percent = totalDays > 0 ? Math.round((completedCount / totalDays) * 100) : 0;
  
  // Update sidebar text
  document.getElementById("completed-days-count").innerText = completedCount;
  document.querySelector(".progress-percentage-label").innerText = `${percent}%`;
  
  // Update SVG Ring
  const circle = document.querySelector(".progress-ring__circle");
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI; // ~251.2
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  
  // Update Dashboard Cards
  document.getElementById("stats-completion-percent").innerText = `${percent}%`;
  document.getElementById("stats-progress-bar").style.width = `${percent}%`;
  
  // Update Active Module Tracker in Dashboard
  window.updateActiveModuleStats();
};

window.updateActiveModuleStats = function() {
  if (state.completedDays.length === 0) {
    document.getElementById("stats-active-module").innerText = "None Started";
    document.getElementById("stats-active-week").innerText = "Select a day in calendar";
    document.getElementById("resume-text").innerText = "Pick up where you left off. Start Module 1: Statistics & Probability today!";
    return;
  }
  
  // Find the last completed day to infer where they are
  let lastDayId = state.completedDays[state.completedDays.length - 1];
  
  // Search for this day in schedule
  let foundWeek = null;
  let foundDayTopic = null;
  let moduleId = 1;
  
  for (let w of window.roadmapSchedule) {
    let match = w.topics.find(t => t.id === lastDayId);
    if (match) {
      foundWeek = w.week;
      foundDayTopic = match;
      moduleId = match.module;
      break;
    }
  }
  
  if (foundDayTopic) {
    const modObj = window.modulesData.find(m => m.id === moduleId);
    document.getElementById("stats-active-module").innerText = modObj ? modObj.name : "Learning";
    document.getElementById("stats-active-week").innerText = `Week ${foundWeek} — Last action: ${foundDayTopic.day}`;
    
    // Find next day in calendar
    let flatDays = [];
    window.roadmapSchedule.forEach(w => flatDays.push(...w.topics));
    let lastIdx = flatDays.findIndex(d => d.id === lastDayId);
    if (lastIdx !== -1 && lastIdx < flatDays.length - 1) {
      let nextDay = flatDays[lastIdx + 1];
      document.getElementById("resume-text").innerText = `Next up: ${nextDay.topic} (${nextDay.day})`;
    } else {
      document.getElementById("resume-text").innerText = "Congratulations! You have completed the full 2-month training roadmap!";
    }
  }
};

window.renderHeatmapMatrix = function() {
  const matrix = document.getElementById("heatmap-matrix");
  if (!matrix) return;
  matrix.innerHTML = "";
  
  window.roadmapSchedule.forEach((weekData) => {
    weekData.topics.forEach((day) => {
      const cell = document.createElement("div");
      cell.className = "heatmap-cell";
      cell.setAttribute("data-day-id", day.id);
      
      const isCompleted = state.completedDays.includes(day.id);
      if (isCompleted) {
        cell.classList.add("completed");
      }
      
      cell.setAttribute("data-tooltip", `Week ${weekData.week} ${day.day}: ${day.topic.split(":")[1] || day.topic}`);
      
      cell.addEventListener("click", () => {
        window.switchTab("roadmap");
        setTimeout(() => {
          const card = document.getElementById(`week-card-${weekData.week}`);
          if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.classList.remove("collapsed");
          }
        }, 100);
      });
      
      matrix.appendChild(cell);
    });
  });
};

window.refreshHeatmap = function() {
  const cells = document.querySelectorAll(".heatmap-cell");
  cells.forEach(cell => {
    const id = cell.getAttribute("data-day-id");
    if (state.completedDays.includes(id)) {
      cell.classList.add("completed");
    } else {
      cell.classList.remove("completed");
    }
  });
};

// Roadmap Schedule View
window.renderRoadmapTimeline = function() {
  const container = document.getElementById("timeline-container");
  if (!container) return;
  container.innerHTML = "";
  
  window.roadmapSchedule.forEach((weekData) => {
    const weekCard = document.createElement("div");
    weekCard.className = "timeline-week-card";
    weekCard.id = `week-card-${weekData.week}`;
    
    // Calculate week completion fraction
    const totalWeekDays = weekData.topics.length;
    const completedWeekDays = weekData.topics.filter(d => state.completedDays.includes(d.id)).length;
    const isWeekFullyCompleted = totalWeekDays === completedWeekDays;
    
    const headerHTML = `
      <div class="timeline-week-header">
        <div class="week-title-area">
          <span class="week-badge-num" style="${isWeekFullyCompleted ? 'background: rgba(16,185,129,0.15); color: #10b981; border-color: rgba(16,185,129,0.2)' : ''}">Week ${weekData.week}</span>
          <div class="week-details-info">
            <h3>${weekData.title}</h3>
            <p>5 Day Intensive learning topics</p>
          </div>
        </div>
        <div class="week-progress-meta">
          <span class="week-fraction">${completedWeekDays} / ${totalWeekDays} Done</span>
          <svg class="expand-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </div>
    `;
    
    const body = document.createElement("div");
    body.className = "timeline-week-body";
    const list = document.createElement("div");
    list.className = "timeline-days-list";
    
    weekData.topics.forEach((day) => {
      list.appendChild(window.createDayRowHTML(day));
    });
    
    body.appendChild(list);
    weekCard.innerHTML = headerHTML;
    weekCard.appendChild(body);
    
    // Toggle expand/collapse
    weekCard.querySelector(".timeline-week-header").addEventListener("click", (e) => {
      if (e.target.closest(".custom-checkbox-wrapper") || e.target.closest(".day-link-module-btn") || e.target.closest(".day-study-btn")) return;
      weekCard.classList.toggle("collapsed");
    });
    
    container.appendChild(weekCard);
  });
};

window.createDayRowHTML = function(day) {
  const row = document.createElement("div");
  row.className = "timeline-day-row";
  const isCompleted = state.completedDays.includes(day.id);
  if (isCompleted) {
    row.classList.add("completed");
  }
  
  row.innerHTML = `
    <div class="day-row-main">
      <div class="custom-checkbox-wrapper">
        <input type="checkbox" class="custom-checkbox-input" data-day-id="${day.id}" ${isCompleted ? "checked" : ""}>
        <span class="custom-checkmark"></span>
      </div>
      <div class="day-badge">${day.day}</div>
      <div class="day-topic-content">${day.topic}</div>
      <div class="day-row-actions">
        <button class="day-study-btn" data-day-id="${day.id}">Study Lesson</button>
        <button class="day-link-module-btn" data-mod-id="${day.module}">View Module ${day.module}</button>
      </div>
    </div>
    <div class="day-lesson-panel" id="lesson-panel-${day.id}" style="display: none;">
      <div class="day-lesson-content">
        ${window.renderMarkdownToHTMLString(window.getLessonContent(day.id, day.topic))}
      </div>
    </div>
  `;
  
  // Checkbox change listener
  const checkbox = row.querySelector(".custom-checkbox-input");
  checkbox.addEventListener("change", (e) => {
    window.handleDayToggle(day.id, e.target.checked, row);
  });
  
  // Study button toggle listener
  const studyBtn = row.querySelector(".day-study-btn");
  const lessonPanel = row.querySelector(".day-lesson-panel");
  studyBtn.addEventListener("click", () => {
    const isVisible = lessonPanel.style.display === "block";
    lessonPanel.style.display = isVisible ? "none" : "block";
    studyBtn.classList.toggle("active", !isVisible);
  });

  // Link button click listener
  row.querySelector(".day-link-module-btn").addEventListener("click", () => {
    window.openModuleDetails(day.module);
  });
  
  return row;
};

window.handleDayToggle = function(dayId, isChecked, rowElement) {
  if (isChecked) {
    if (!state.completedDays.includes(dayId)) {
      state.completedDays.push(dayId);
      state.completedDays.sort();
      rowElement.classList.add("completed");
      
      state.streakCount += 1;
      window.loadStreak();
    }
  } else {
    state.completedDays = state.completedDays.filter(id => id !== dayId);
    rowElement.classList.remove("completed");
    
    if (state.streakCount > 3) {
      state.streakCount -= 1;
      window.loadStreak();
    }
  }
  
  window.saveState();
  window.updateProgressTracker();
  window.refreshHeatmap();
  
  // Update week fraction text
  const weekCard = rowElement.closest(".timeline-week-card");
  const weekId = parseInt(weekCard.id.replace("week-card-", ""));
  const weekData = window.roadmapSchedule.find(w => w.week === weekId);
  if (weekData) {
    const total = weekData.topics.length;
    const completed = weekData.topics.filter(d => state.completedDays.includes(d.id)).length;
    weekCard.querySelector(".week-fraction").innerText = `${completed} / ${total} Done`;
    
    const isWeekFullyCompleted = total === completed;
    const weekBadge = weekCard.querySelector(".week-badge-num");
    if (isWeekFullyCompleted) {
      weekBadge.style.background = "rgba(16,185,129,0.15)";
      weekBadge.style.color = "#10b981";
      weekBadge.style.borderColor = "rgba(16,185,129,0.2)";
    } else {
      weekBadge.style.background = "var(--accent-light)";
      weekBadge.style.color = "var(--accent-primary)";
      weekBadge.style.borderColor = "rgba(99, 102, 241, 0.2)";
    }
  }
};

window.filterRoadmapCalendar = function(filter) {
  const cards = document.querySelectorAll(".timeline-week-card");
  cards.forEach(card => {
    const weekNum = parseInt(card.id.replace("week-card-", ""));
    if (filter === "all") {
      card.style.display = "block";
    } else if (filter === "w1-w4" && weekNum <= 4) {
      card.style.display = "block";
    } else if (filter === "w5-w8" && weekNum >= 5) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

// 10 Core Modules Hub
window.renderModulesGrid = function() {
  const grid = document.getElementById("modules-grid");
  if (!grid) return;
  grid.innerHTML = "";
  
  window.modulesData.forEach((mod) => {
    grid.appendChild(window.createModuleCardHTML(mod));
  });
};

window.createModuleCardHTML = function(mod) {
  const card = document.createElement("div");
  card.className = "module-card";
  card.setAttribute("data-category", mod.category);
  
  const skillPillsHTML = mod.keySkills.map(skill => `<span class="skill-pill">${skill}</span>`).join("");
  
  card.innerHTML = `
    <div class="module-card-header">
      <span class="module-number">Module ${mod.id}</span>
      <span class="module-week-tag">${mod.weeks}</span>
    </div>
    <h3>${mod.name}</h3>
    <p>${mod.why}</p>
    <div class="module-skills-pill-group">
      ${skillPillsHTML}
    </div>
  `;
  
  card.addEventListener("click", () => {
    window.openModuleDetails(mod.id);
  });
  
  return card;
};

window.filterModulesCategory = function(cat) {
  const cards = document.querySelectorAll(".module-card");
  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (cat === "all") {
      card.style.display = "flex";
    } else if (cat === "fundamentals" && (cardCat === "fundamentals")) {
      card.style.display = "flex";
    } else if (cat === "database" && cardCat === "database") {
      card.style.display = "flex";
    } else if (cat === "programming" && cardCat === "programming") {
      card.style.display = "flex";
    } else if (cat === "visualization" && cardCat === "visualization") {
      card.style.display = "flex";
    } else if (cat === "advanced" && cardCat === "advanced") {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
};

// Drawer Logic
window.openModuleDetails = function(moduleId) {
  const mod = window.modulesData.find(m => m.id === moduleId);
  if (!mod) return;
  
  state.lastOpenedModule = moduleId;
  window.saveState();
  
  document.getElementById("drawer-module-number").innerText = `Module ${mod.id}`;
  document.getElementById("drawer-module-title").innerText = mod.name;
  document.getElementById("drawer-module-weeks").innerText = mod.weeks;
  document.getElementById("drawer-module-why").innerText = mod.why;
  document.getElementById("drawer-module-project").innerText = mod.project;
  
  // Populate Topics Checklist using roadmapDays loop
  const topicsList = document.getElementById("drawer-topics-list");
  topicsList.innerHTML = "";
  
  const moduleDays = [];
  window.roadmapSchedule.forEach(week => {
    week.topics.forEach(day => {
      if (day.module === moduleId) {
        moduleDays.push(day);
      }
    });
  });

  moduleDays.forEach((day) => {
    const li = document.createElement("li");
    li.className = "drawer-lesson-item";
    li.innerHTML = `
      <div class="drawer-lesson-header">
        <span class="drawer-lesson-day">${day.day}:</span>
        <span class="drawer-lesson-title">${day.topic.split(":")[1] || day.topic}</span>
        <svg class="drawer-lesson-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
      <div class="drawer-lesson-body" style="display: none;">
        <div class="day-lesson-content">
          ${window.renderMarkdownToHTMLString(window.getLessonContent(day.id, day.topic))}
        </div>
      </div>
    `;
    
    // Toggle accordion click
    const header = li.querySelector(".drawer-lesson-header");
    const body = li.querySelector(".drawer-lesson-body");
    
    header.addEventListener("click", () => {
      const isVisible = body.style.display === "block";
      body.style.display = isVisible ? "none" : "block";
      li.classList.toggle("active", !isVisible);
    });
    
    topicsList.appendChild(li);
  });
  
  // Setup Interactive Sandbox Playground display
  const sandboxStats = document.getElementById("sandbox-stats");
  const sandboxSQL = document.getElementById("sandbox-sql");
  const sandboxCleaning = document.getElementById("sandbox-cleaning");
  const sandboxGeneric = document.getElementById("sandbox-generic");
  
  sandboxStats.style.display = "none";
  sandboxSQL.style.display = "none";
  sandboxCleaning.style.display = "none";
  sandboxGeneric.style.display = "none";
  
  // Invoke sandbox initializers from HQModules
  if (mod.playgroundType === "stats" && window.sandboxInitializers["stats"]) {
    sandboxStats.style.display = "block";
    window.sandboxInitializers["stats"]();
  } else if (mod.playgroundType === "sql" && window.sandboxInitializers["sql"]) {
    sandboxSQL.style.display = "block";
    window.sandboxInitializers["sql"]();
  } else if (mod.playgroundType === "cleaning" && window.sandboxInitializers["cleaning"]) {
    sandboxCleaning.style.display = "block";
    window.sandboxInitializers["cleaning"]();
  } else {
    sandboxGeneric.style.display = "block";
  }
  
  // Open Drawer UI
  document.getElementById("module-drawer-overlay").classList.add("active");
  document.getElementById("module-drawer").classList.add("open");
};

window.closeDrawer = function() {
  document.getElementById("module-drawer-overlay").classList.remove("active");
  document.getElementById("module-drawer").classList.remove("open");
};

// Recall Center (Flashcards & Quizzes)
let currentFlashcardIndex = 0;

window.loadFlashcard = function(index) {
  if (index < 0 || index >= window.flashcardsData.length) return;
  currentFlashcardIndex = index;
  
  const card = window.flashcardsData[index];
  
  // Unflip card
  document.getElementById("flashcard-box").classList.remove("flipped");
  
  setTimeout(() => {
    document.getElementById("flashcard-cat").innerText = card.category;
    document.getElementById("flashcard-front-text").innerText = card.front;
    document.getElementById("flashcard-back-text").innerText = card.back;
    document.getElementById("flashcard-counter").innerText = `Card ${index + 1} of ${window.flashcardsData.length}`;
  }, 150);
};

window.flipFlashcard = function() {
  document.getElementById("flashcard-box").classList.toggle("flipped");
};

window.navigateFlashcard = function(direction) {
  let nextIdx = currentFlashcardIndex + direction;
  if (nextIdx < 0) {
    nextIdx = window.flashcardsData.length - 1;
  } else if (nextIdx >= window.flashcardsData.length) {
    nextIdx = 0;
  }
  window.loadFlashcard(nextIdx);
};

// Quizzes
let activeQuizTopic = null;
let currentQuestionIndex = 0;
let activeQuizQuestions = [];
let quizScore = 0;

window.startQuiz = function(topicId) {
  if (!window.quizzesData[topicId]) return;
  
  activeQuizTopic = topicId;
  activeQuizQuestions = window.quizzesData[topicId];
  currentQuestionIndex = 0;
  quizScore = 0;
  
  const titleMap = {
    stats: "Statistics Quiz",
    sql: "SQL Quiz",
    python: "Python Quiz",
    business: "Business Metrics",
    ml: "Machine Learning"
  };
  document.getElementById("quiz-badge").innerText = titleMap[topicId] || "Quiz";
  
  document.getElementById("quiz-starter").style.display = "none";
  document.getElementById("quiz-finished").style.display = "none";
  document.getElementById("quiz-active").style.display = "block";
  
  window.loadQuizQuestion(0);
};

window.loadQuizQuestion = function(idx) {
  currentQuestionIndex = idx;
  const q = activeQuizQuestions[idx];
  
  document.getElementById("quiz-question-number").innerText = `Question ${idx + 1} of ${activeQuizQuestions.length}`;
  document.getElementById("quiz-progress-fill").style.width = `${((idx + 1) / activeQuizQuestions.length) * 100}%`;
  
  document.getElementById("quiz-question-text").innerText = q.question;
  document.getElementById("quiz-explanation-text").innerText = q.explanation;
  document.getElementById("quiz-explanation").style.display = "none";
  
  const container = document.getElementById("quiz-options-container");
  container.innerHTML = "";
  
  q.options.forEach((opt, oIdx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.innerText = opt;
    btn.addEventListener("click", () => window.handleQuizOptionSelect(btn, oIdx));
    container.appendChild(btn);
  });
  
  document.getElementById("quiz-next-btn").setAttribute("disabled", "true");
};

window.handleQuizOptionSelect = function(selectedBtn, optionIndex) {
  const q = activeQuizQuestions[currentQuestionIndex];
  const allBtns = document.querySelectorAll(".quiz-option");
  
  allBtns.forEach(btn => {
    btn.setAttribute("disabled", "true");
    btn.style.cursor = "default";
  });
  
  const isCorrect = optionIndex === q.answer;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    quizScore++;
  } else {
    selectedBtn.classList.add("incorrect");
    allBtns[q.answer].classList.add("correct");
  }
  
  document.getElementById("quiz-explanation").style.display = "block";
  
  const nextBtn = document.getElementById("quiz-next-btn");
  nextBtn.removeAttribute("disabled");
  
  if (currentQuestionIndex === activeQuizQuestions.length - 1) {
    nextBtn.innerText = "Finish Quiz";
  } else {
    nextBtn.innerText = "Next Question";
  }
};

window.handleNextQuizQuestion = function() {
  if (currentQuestionIndex < activeQuizQuestions.length - 1) {
    window.loadQuizQuestion(currentQuestionIndex + 1);
  } else {
    window.finishQuiz();
  }
};

window.finishQuiz = function() {
  document.getElementById("quiz-active").style.display = "none";
  
  const finalScoreLabel = document.getElementById("quiz-final-score");
  const resultTitle = document.getElementById("quiz-result-title");
  const resultDesc = document.getElementById("quiz-result-desc");
  
  const totalQ = activeQuizQuestions.length;
  finalScoreLabel.innerText = `${quizScore}/${totalQ}`;
  
  const pct = (quizScore / totalQ) * 100;
  if (pct === 100) {
    resultTitle.innerText = "Perfect Masterclass! 🎉";
    resultDesc.innerText = "You have fully grasped all core concepts of this training module.";
  } else if (pct >= 80) {
    resultTitle.innerText = "Excellent Job! 🚀";
    resultDesc.innerText = "You show high proficiency in this topic. Keep up the consistency.";
  } else if (pct >= 60) {
    resultTitle.innerText = "Good Effort 👍";
    resultDesc.innerText = "A solid pass. Re-read the module materials or review your notes to plug gaps.";
  } else {
    resultTitle.innerText = "Needs Review 📚";
    resultDesc.innerText = "We recommend going over this week's topics checklist and trying again.";
  }
  
  state.quizScores[activeQuizTopic] = quizScore;
  window.saveState();
  window.updateDashboardQuizStats();
  
  document.getElementById("quiz-finished").style.display = "block";
};

window.updateDashboardQuizStats = function() {
  const quizScoresObj = state.quizScores;
  const topics = Object.keys(quizScoresObj);
  
  if (topics.length === 0) {
    document.getElementById("stats-quiz-avg").innerText = "N/A";
    document.getElementById("stats-quizzes-taken").innerText = "0 quizzes taken";
    return;
  }
  
  let sum = 0;
  topics.forEach(t => {
    sum += quizScoresObj[t];
  });
  
  const avgPct = Math.round((sum / (topics.length * 5)) * 100);
  document.getElementById("stats-quiz-avg").innerText = `${avgPct}%`;
  document.getElementById("stats-quizzes-taken").innerText = `${topics.length} quiz(zes) taken`;
};

window.resetQuizStarter = function() {
  document.getElementById("quiz-finished").style.display = "none";
  document.getElementById("quiz-starter").style.display = "block";
  document.getElementById("quiz-badge").innerText = "Select Topic";
};

// Notepad
window.initNotepad = function() {
  const select = document.getElementById("notebook-module-select");
  if (!select) return;
  select.innerHTML = "";
  
  window.modulesData.forEach(m => {
    const opt = document.createElement("option");
    opt.value = m.id;
    opt.innerText = `Module ${m.id}: ${m.name.slice(0, 30)}${m.name.length > 30 ? '...' : ''}`;
    select.appendChild(opt);
  });
  
  select.value = state.lastOpenedModule;
  
  select.addEventListener("change", (e) => {
    window.loadModuleNotes(parseInt(e.target.value));
  });
  
  const textarea = document.getElementById("notebook-textarea");
  textarea.addEventListener("input", window.handleNotesTyping);
  
  window.loadModuleNotes(state.lastOpenedModule);
  window.updateNotesCountDashboard();
};

window.loadModuleNotes = function(modId) {
  state.lastOpenedModule = modId;
  window.saveState();
  
  const notesText = state.moduleNotes[modId] || "";
  document.getElementById("notebook-textarea").value = notesText;
  
  window.renderMarkdownNotes(notesText);
};

let saveTimer = null;
window.handleNotesTyping = function(e) {
  const modId = parseInt(document.getElementById("notebook-module-select").value);
  const textVal = e.target.value;
  
  const status = document.getElementById("notebook-save-status");
  status.innerText = "Saving...";
  status.className = "save-status saving";
  
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    state.moduleNotes[modId] = textVal;
    window.saveState();
    
    status.innerText = "Saved";
    status.className = "save-status";
    
    window.updateNotesCountDashboard();
  }, 600);
  
  window.renderMarkdownNotes(textVal);
};

window.updateNotesCountDashboard = function() {
  const notesCount = Object.keys(state.moduleNotes).filter(k => state.moduleNotes[k].trim().length > 0).length;
  document.getElementById("stats-notes-count").innerText = `${notesCount} / 10`;
};

window.renderMarkdownNotes = function(markdownText) {
  const preview = document.getElementById("notebook-preview-content");
  if (!preview) return;
  
  if (!markdownText.trim()) {
    preview.innerHTML = `<p class="preview-placeholder">Notes preview will render here...</p>`;
    return;
  }
  
  preview.innerHTML = window.renderMarkdownToHTMLString(markdownText);
};
