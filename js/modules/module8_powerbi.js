// Module 8: Power BI & Tableau Dashboards
window.HQModules = window.HQModules || {};

window.HQModules.powerbi = {
  id: 8,
  name: "Power BI & Tableau Dashboards",
  weeks: "Week 6–7",
  category: "visualization",
  why: "Power BI is the #1 BI tool in corporate environments worldwide for business dashboards. It takes data analysis to management-level presentation. We teach Power BI end-to-end — from importing data to building KPI dashboards with DAX measures. Tableau is introduced for global market awareness.",
  keySkills: ["Power Query", "Data Modeling", "DAX Formulas", "Time Intelligence"],
  topics: [
    "Power Query: importing, transforming, merging, and loading data",
    "Data Modeling: establishing relationships, star schema configuration",
    "DAX: calculated columns vs. measures concepts",
    "DAX functions: SUM, COUNT, CALCULATE, FILTER, DIVIDE",
    "Time Intelligence in DAX: YTD, MTD, SamePeriodLastYear",
    "Slicers, Drill-through filters, Tooltips, and Bookmarks",
    "KPI Cards, Gauge Charts, and Conditional formatting in reports",
    "Report Publishing and Workspace sharing in Power BI Service",
    "Tableau: basic connection, sheet building, and filtering layout",
    "Dashboard design best practices: color choices, typography, grid alignment"
  ],
  project: "Build a Sales Analytics Power BI report with 3 dedicated pages: Executive Overview, Product Performance, and Customer Analysis, utilizing star schema relationships.",
  playgroundType: "none",

  schedule: {
    week: 7,
    title: "Business Intelligence & Analytics",
    topics: [
      { id: "w7-mon", day: "Mon", topic: "Power BI: Power Query & Data Modeling", module: 8 },
      { id: "w7-tue", day: "Tue", topic: "Power BI: DAX — calculated columns vs measures", module: 8 },
      { id: "w7-wed", day: "Wed", topic: "Power BI: KPIs, Slicers, Drill-through", module: 8 },
      { id: "w7-thu", day: "Thu", topic: "Business Analytics: KPIs, Revenue, Retention metrics", module: 9 },
      { id: "w7-fri", day: "Fri", topic: "Business Analytics: Funnel Analysis + Stakeholder Comm.", module: 9 }
    ]
  },

  flashcards: [
    { front: "Calculated Column vs. Measure (DAX)", back: "Calculated columns are evaluated row-by-row during data refresh and stored in memory. Measures are calculated on-the-fly, dynamically adapting to active dashboard filters.", category: "Power BI" }
  ]
};
