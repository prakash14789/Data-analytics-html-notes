// Module 6: Exploratory Data Analysis (EDA)
window.HQModules = window.HQModules || {};

window.HQModules.eda = {
  id: 6,
  name: "Exploratory Data Analysis (EDA)",
  weeks: "Week 5",
  category: "programming",
  why: "EDA is how analysts discover the story inside data before building dashboards or writing models. It's the detective phase — looking for hidden patterns, unusual anomalies, trends, and relationships. Without EDA, you might build a dashboard on wrong assumptions. We teach EDA as a structured process.",
  keySkills: ["Univariate Analysis", "Bivariate Analysis", "Correlation Maps", "Storytelling"],
  topics: [
    "Univariate Analysis: inspecting single-variable summaries and histograms",
    "Bivariate Analysis: inspecting scatter plots and cross-tabulations",
    "Multivariate Analysis: pairplots, multi-axis charts, and heatmaps",
    "Distribution Analysis: skewness, kurtosis, and data spread",
    "Correlation Matrix: checking Pearson and Spearman coefficients",
    "Outlier Visualization: using box plots and violin plots",
    "Time Series EDA: plotting seasonality, trend, and noise elements",
    "Pattern Detection: identifying clusters or segments in data visually",
    "Formulating Hypotheses based on exploratory findings",
    "Building a Story-Driven EDA Narrative for business managers"
  ],
  project: "Perform a comprehensive Exploratory Data Analysis on a retail store dataset and present a 5-insight data story illustrated with clean, informative visualization layouts.",
  playgroundType: "none",

  flashcards: [
    { front: "Correlation Matrix", back: "A table showing correlation coefficients (usually Pearson's r) between multiple variables, ranging from -1.0 to +1.0, indicating the direction and strength of relationships.", category: "EDA" }
  ]
};
