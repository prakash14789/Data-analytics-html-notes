// Module 4: Python for Data Analysis
window.HQModules = window.HQModules || {};

window.HQModules.python = {
  id: 4,
  name: "Python for Data Analysis",
  weeks: "Week 3–4",
  category: "programming",
  why: "Python automates everything Excel can't scale. Pandas can process millions of rows in seconds. Matplotlib and Seaborn produce publication-quality charts. We teach Python not as a programming course for developers, but strictly as a data utility tool — every concept is taught through a data problem, not an abstract syntax exercise.",
  keySkills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  topics: [
    "Python Basics: Variables, Data Types, Lists, Dicts",
    "Control Flow: Loops, If-Else blocks, & custom Functions",
    "Pandas library: DataFrames, Series, and Indexing",
    "Pandas operations: read_csv, filtering, sorting, groupby",
    "Pandas Advanced: merge, concat, and pivot tables",
    "NumPy library: numerical arrays and vector calculations",
    "Matplotlib: creating line, bar, scatter plots",
    "Seaborn: statistical charts, distributions, and heatmaps",
    "Reading & Writing files (CSV, JSON, Excel files)",
    "Lambda functions & apply() transformations on rows"
  ],
  project: "Load a retail store dataset, clean it with Pandas, merge it with product descriptions, and produce 5 actionable business insights illustrated with Seaborn visualizations.",
  playgroundType: "none",

  schedule: {
    week: 4,
    title: "Python Programming & Data Cleaning",
    topics: [
      { id: "w4-mon", day: "Mon", topic: "Python: Variables, Loops, Functions, Data Types", module: 4 },
      { id: "w4-tue", day: "Tue", topic: "Python: Pandas — DataFrames, filtering, groupby", module: 4 },
      { id: "w4-wed", day: "Wed", topic: "Python: NumPy + Matplotlib basics", module: 4 },
      { id: "w4-thu", day: "Thu", topic: "Python: Seaborn + EDA intro", module: 4 },
      { id: "w4-fri", day: "Fri", topic: "Data Cleaning: Missing Values — MCAR, MAR, MNAR", module: 5 }
    ]
  },

  flashcards: [
    { front: "DataFrame", back: "A 2-dimensional labeled data structure in Python's Pandas library, with columns of potentially different types (similar to a spreadsheet or SQL table).", category: "Python" }
  ],

  quiz: [
    { question: "Which library is primary used to handle tabular DataFrames in Python?", options: ["NumPy", "Matplotlib", "Seaborn", "Pandas"], answer: 3, explanation: "Pandas is the core library designed for structured, tabular data manipulation in Python, introducing DataFrames and Series." },
    { question: "How do you filter rows in a Pandas DataFrame (df) where the 'Age' column is greater than 30?", options: ["df.filter(Age > 30)", "df[df['Age'] > 30]", "df.query(Age > 30)", "df.where('Age' > 30)"], answer: 1, explanation: "In Pandas, boolean indexing is structured as df[df['Age'] > 30]. This returns a subset DataFrame where the condition evaluates to True." },
    { question: "What is the distinction between a Series and a DataFrame in Pandas?", options: ["A Series is 1D; a DataFrame is 2D", "DataFrame is a SQL connection; Series is local", "Series handles strings; DataFrame handles integers", "There is no difference; they are aliases"], answer: 0, explanation: "A Series represents a single column of data (1-Dimensional with index). A DataFrame represents a tabular grid (2-Dimensional) composed of multiple columns/Series." },
    { question: "Which Matplotlib/Seaborn function is best to display relationships between two continuous variables?", options: ["plt.hist()", "sns.boxplot()", "sns.scatterplot()", "sns.heatmap()"], answer: 2, explanation: "Scatter plots (sns.scatterplot) are designed to visualize coordinate plots of two continuous variables to discover relationships or clusters." },
    { question: "What does the df.groupby() function do in Pandas?", options: ["Groups files on your hard drive", "Combines rows based on key categories to perform aggregations (like mean, sum, count)", "Sorts the rows in alphabetical order", "Removes missing values from groups"], answer: 1, explanation: "df.groupby() splits data into groups based on key categories, allowing you to run aggregate functions (like sum or average) on each segment, similar to SQL GROUP BY." }
  ]
};
