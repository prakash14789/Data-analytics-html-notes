// Module 7: Data Visualization + Streamlit
window.HQModules = window.HQModules || {};

window.HQModules.streamlit = {
  id: 7,
  name: "Data Visualization + Streamlit",
  weeks: "Week 5–6",
  category: "visualization",
  why: "An insight that can't be communicated clearly is worthless. We teach static visualizations (Matplotlib, Seaborn) for reports, but we also include Streamlit — a Python library that lets you turn any script into a live, interactive data app in minutes. This skill sets students apart in interviews.",
  keySkills: ["Charts Selection", "Storytelling Principles", "Streamlit Apps", "Deployments"],
  topics: [
    "Bar Charts & Grouped Bar Charts (Comparisons)",
    "Line Charts & Area Charts (Trends over time)",
    "Scatter Plots & Bubble Charts (Relationships)",
    "Histograms & Density Plots (Distributions)",
    "Box Plots & Violin Plots (Spread & Outliers)",
    "Heatmaps (Correlation & Matrix data)",
    "Storytelling with Data principles: decluttering, visual hierarchy",
    "Choosing the right chart for the right audience",
    "Streamlit: layout options (columns, sidebar, expanders, tabs)",
    "Streamlit Widgets: filters, sliders, dropdown inputs, KPI cards"
  ],
  project: "Build a multi-page interactive Streamlit dashboard app utilizing filters, interactive KPI cards, and charts connected to a sales database, then deploy it.",
  playgroundType: "none",

  schedule: {
    week: 6,
    title: "Data Visualization & App Development",
    topics: [
      { id: "w6-mon", day: "Mon", topic: "Visualization: Bar, Histogram, Scatter, Box Plots", module: 7 },
      { id: "w6-tue", day: "Tue", topic: "Visualization: Heatmaps + Storytelling with Data", module: 7 },
      { id: "w6-wed", day: "Wed", topic: "Streamlit: Building your first data app", module: 7 },
      { id: "w6-thu", day: "Thu", topic: "Streamlit: Charts, filters, KPI cards in app", module: 7 },
      { id: "w6-fri", day: "Fri", topic: "Streamlit: Deploy a mini analytics dashboard", module: 7 }
    ]
  },

  flashcards: [
    { front: "Streamlit", back: "An open-source Python library used to build and deploy custom, interactive web applications for data science and analytics workflows in minutes using pure Python.", category: "Visualization" }
  ]
};
