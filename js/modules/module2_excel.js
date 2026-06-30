// Module 2: Excel for Analysts
window.HQModules = window.HQModules || {};

window.HQModules.excel = {
  id: 2,
  name: "Excel for Analysts",
  weeks: "Week 1–2",
  category: "fundamentals",
  why: "Excel is still the most-used tool at 80%+ of companies. Before learning any coding languages, a data analyst must be fluent here. Managers open Excel, not Python scripts. Mastering Excel means you can contribute to a team from Day 1 of a job — no setup, no libraries, just open and go.",
  keySkills: ["Formulas", "Pivot Tables", "Dashboards", "XLOOKUP"],
  topics: [
    "Excel Interface, Shortcuts, and Data entry",
    "Logical Formulas: IF, COUNTIF, SUMIF, AVERAGEIF",
    "Lookup Formulas: VLOOKUP, XLOOKUP, INDEX-MATCH",
    "Nested Formulas and error handling (IFERROR)",
    "Pivot Tables: Creating summaries and groups from scratch",
    "Pivot Charts: Visualizing dynamic pivot table summaries",
    "Slicers & Filters: Designing user-facing interactive controls",
    "Conditional Formatting: Highlighting data trends visually",
    "Dashboard Design: Assembling professional report views",
    "Data Validation: Restricting cells to specific lists or types"
  ],
  project: "Build an interactive Sales Performance Dashboard in Excel complete with Pivot Tables, timelines, slicers, and dynamic KPI cards.",
  playgroundType: "none",

  schedule: {
    week: 2,
    title: "Excel Fundamentals & SQL Basics",
    topics: [
      { id: "w2-mon", day: "Mon", topic: "Excel: Interface, Shortcuts, and Data entry", module: 2 },
      { id: "w2-tue", day: "Tue", topic: "Excel: VLOOKUP, XLOOKUP, INDEX-MATCH", module: 2 },
      { id: "w2-wed", day: "Wed", topic: "Excel: Pivot Tables — build from scratch", module: 2 },
      { id: "w2-thu", day: "Thu", topic: "Excel: Charts, Conditional Formatting", module: 2 },
      { id: "w2-fri", day: "Fri", topic: "Excel: Dashboard Project — end-to-end", module: 2 }
    ]
  },

  flashcards: [
    { front: "XLOOKUP", back: "A modern Excel function used to search a range or an array, and return an item corresponding to the first match. Unlike VLOOKUP, it supports leftwards search and defaults to exact match.", category: "Excel" },
    { front: "Pivot Table", back: "An interactive Excel/data tool that allows you to summarize, group, count, sum, average, or organize large tables of transactional data quickly without formulas.", category: "Excel" }
  ]
};
