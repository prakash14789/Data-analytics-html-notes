// Main Application Entry Point
// Connects data registries, states, UI, and binds all interactive event listeners

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize State
  window.initState();
  
  // 2. Initialize UI Components
  window.initTheme();
  window.renderRoadmapTimeline();
  window.renderModulesGrid();
  window.renderHeatmapMatrix();
  window.initNotepad();
  window.updateProgressTracker();
  window.loadStreak();
  window.loadFlashcard(0);
  window.loadRandomQuote();
  window.resetQuizStarter();
  
  // 3. Tab Navigation Event Listeners
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tabId = link.getAttribute("data-tab");
      window.switchTab(tabId);
    });
  });
  
  // 4. Search Filter Event Listener
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      window.handleSearch(e.target.value.toLowerCase());
    });
  }
  
  // 5. Theme Toggle Button
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", window.toggleTheme);
  }
  
  // 6. Detail Drawer Close Mechanisms
  const closeBtn = document.getElementById("drawer-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", window.closeDrawer);
  }
  const overlay = document.getElementById("module-drawer-overlay");
  if (overlay) {
    overlay.addEventListener("click", window.closeDrawer);
  }
  
  // 7. Flashcards Arena Controllers
  const flashcardBox = document.getElementById("flashcard-box");
  if (flashcardBox) {
    flashcardBox.addEventListener("click", window.flipFlashcard);
  }
  const prevCard = document.getElementById("prev-flashcard-btn");
  if (prevCard) {
    prevCard.addEventListener("click", () => window.navigateFlashcard(-1));
  }
  const nextCard = document.getElementById("next-flashcard-btn");
  if (nextCard) {
    nextCard.addEventListener("click", () => window.navigateFlashcard(1));
  }
  
  // 8. Quizzes Panel Event Bindings
  const restartQuiz = document.getElementById("quiz-restart-btn");
  if (restartQuiz) {
    restartQuiz.addEventListener("click", window.resetQuizStarter);
  }
  const nextQuestion = document.getElementById("quiz-next-btn");
  if (nextQuestion) {
    nextQuestion.addEventListener("click", window.handleNextQuizQuestion);
  }
  
  // Topic Selector Buttons for Quiz Initializer
  const topicBtns = document.querySelectorAll(".btn-topic");
  topicBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const topicId = btn.getAttribute("data-quiz");
      window.startQuiz(topicId);
    });
  });
  
  // 9. Motivational Quotes Generator
  const newQuoteBtn = document.getElementById("new-quote-btn");
  if (newQuoteBtn) {
    newQuoteBtn.addEventListener("click", window.loadRandomQuote);
  }
  
  // 10. Roadmap Calendar Filtering Tabs
  const filterBtns = document.querySelectorAll(".btn-filter");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      window.filterRoadmapCalendar(btn.getAttribute("data-filter"));
    });
  });

  // 11. Module Hub Category Select Filtering
  const categorySelect = document.getElementById("module-category-select");
  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      window.filterModulesCategory(e.target.value);
    });
  }
});
