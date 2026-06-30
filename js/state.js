// Application State Management
window.state = {
  completedDays: [],
  moduleNotes: {},
  quizScores: {},
  streakCount: 3,
  lastOpenedModule: 1
};

window.initState = function() {
  const savedState = localStorage.getItem("analyst_roadmap_state");
  if (savedState) {
    try {
      window.state = JSON.parse(savedState);
      if (!window.state.completedDays) window.state.completedDays = [];
      if (!window.state.moduleNotes) window.state.moduleNotes = {};
      if (!window.state.quizScores) window.state.quizScores = {};
      if (!window.state.streakCount) window.state.streakCount = 3;
      if (!window.state.lastOpenedModule) window.state.lastOpenedModule = 1;
    } catch (e) {
      console.error("Error parsing saved state from localStorage:", e);
    }
  } else {
    // Save default state
    window.saveState();
  }
};

window.saveState = function() {
  localStorage.setItem("analyst_roadmap_state", JSON.stringify(window.state));
};
