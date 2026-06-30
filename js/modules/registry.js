// Registry to compile the individual module scripts into global data structures
(function() {
  window.modulesData = [];
  window.roadmapSchedule = [];
  window.flashcardsData = [];
  window.quizzesData = {};
  window.dailyLessonsContent = {};
  window.sandboxInitializers = {};

  // Preserve the exact sequence of modules
  const moduleKeys = ["stats", "excel", "sql", "python", "cleaning", "eda", "streamlit", "powerbi", "business", "ml"];

  moduleKeys.forEach(key => {
    const m = window.HQModules[key];
    if (!m) return;

    // 1. modulesData
    window.modulesData.push({
      id: m.id,
      name: m.name,
      weeks: m.weeks,
      category: m.category,
      why: m.why,
      keySkills: m.keySkills,
      topics: m.topics,
      project: m.project,
      playgroundType: m.playgroundType
    });

    // 2. roadmapSchedule
    if (m.schedule) {
      window.roadmapSchedule.push(m.schedule);
    }

    // 3. flashcardsData
    if (m.flashcards) {
      window.flashcardsData.push(...m.flashcards);
    }

    // 4. quizzesData
    if (m.quiz) {
      window.quizzesData[m.playgroundType === "none" ? key : m.playgroundType] = m.quiz;
    }

    // 5. dailyLessonsContent
    if (m.lessons) {
      Object.assign(window.dailyLessonsContent, m.lessons);
    }

    // 6. sandboxInitializers
    if (typeof m.initSandbox === "function") {
      window.sandboxInitializers[m.playgroundType] = m.initSandbox.bind(m);
    }
  });
})();
