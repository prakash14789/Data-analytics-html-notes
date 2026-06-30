// ==========================================================================
// Application Core Data Structures
// ==========================================================================

const modulesData = [
  {
    id: 1,
    name: "Statistics & Probability",
    weeks: "Week 1",
    category: "fundamentals",
    why: "Numbers without statistics are just noise. Statistics teaches analysts HOW to trust their findings. Without it, you might see a 5% sales increase and call it a trend — when it's just random variation. We teach this first so every later analysis is built on solid ground.",
    keySkills: ["Mean & SD", "Hypothesis Testing", "A/B Testing", "Type I & II Errors"],
    topics: [
      "Mean, Median, and Mode (Central Tendency)",
      "Variance & Standard Deviation (Spread)",
      "Probability Basics & Bayes Theorem",
      "Normal Distribution & Bell Curve properties",
      "Correlation vs. Covariance (Relationships)",
      "Hypothesis Testing: Null and Alternative Hypotheses",
      "p-value & Statistical Significance",
      "Confidence Intervals calculation",
      "A/B Testing design and sample size calculation",
      "Type I & Type II Errors (Alpha and Beta risk)"
    ],
    project: "Run a real A/B test on sample marketing data — decide which campaign won and explain why using statistical significance. Calculate summary statistics on a sales dataset using Python.",
    playgroundType: "stats"
  },
  {
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
    playgroundType: "none"
  },
  {
    id: 3,
    name: "SQL — From Basics to Advanced",
    weeks: "Week 2–3",
    category: "database",
    why: "Every company stores its data in a database. SQL is the ONLY way to get it out. No SQL = no data. It's listed as a requirement in 95% of data analyst job postings. We teach SQL end-to-end — from a simple SELECT to complex Window Functions — because real-world queries are rarely simple.",
    keySkills: ["SELECT queries", "CTEs", "Window Functions", "Performance Indexing"],
    topics: [
      "SELECT, FROM, WHERE filtering syntax",
      "ORDER BY, LIMIT, and DISTINCT commands",
      "GROUP BY & HAVING grouping operations",
      "Aggregate Functions (SUM, COUNT, AVG, MIN, MAX)",
      "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, and SELF JOIN",
      "Subqueries (nested SELECT statements)",
      "Common Table Expressions (CTEs using WITH clause)",
      "Window Functions: RANK, ROW_NUMBER, LAG, LEAD, and PARTITION BY",
      "Performance & Indexing basics for large tables",
      "Writing clean, readable SQL queries with proper indentation"
    ],
    project: "Analyze an e-commerce transactional database: write queries to calculate top products by revenue, monthly retention trends, and build a customer cohort retention query using Window Functions.",
    playgroundType: "sql"
  },
  {
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
    playgroundType: "none"
  },
  {
    id: 5,
    name: "Data Cleaning",
    weeks: "Week 4",
    category: "programming",
    why: "In the real world, 60–80% of an analyst's time is spent cleaning data before any analysis or visualization begins. Real-world data is messy: it has null values, duplicate entries, inconsistent labels, and rogue outliers. If you can't clean it, you can't trust your analysis. Simple as that.",
    keySkills: ["Missing Values", "Outliers", "Data Transformation", "Feature Prep"],
    topics: [
      "Identifying Missing Data patterns: MCAR, MAR, MNAR",
      "Imputation strategies (mean, median, mode, forward-fill, backward-fill)",
      "Outlier Detection: IQR method (Interquartile Range)",
      "Outlier Detection: Z-score method (Standard deviations)",
      "Duplicate Identification & Removal algorithms",
      "String Cleaning: stripping spaces, case normalization, regex replacements",
      "Date Parsing & Formatting conversions",
      "Data Transformation: normalization, standard scaling, log transforms",
      "Handling Inconsistent Category Labels (mapping/replacing values)",
      "Feature Engineering basics: extracting year/month from dates, bucketizing values"
    ],
    project: "Given a highly 'dirty' HR and Sales dataset, apply a full programmatic cleaning pipeline in Python/Pandas and write a notebook documenting every cleaning decision.",
    playgroundType: "cleaning"
  },
  {
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
    playgroundType: "none"
  },
  {
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
    playgroundType: "none"
  },
  {
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
    playgroundType: "none"
  },
  {
    id: 9,
    name: "Business Analytics",
    weeks: "Week 7",
    category: "advanced",
    why: "Tools are only half the job. The other half is understanding what the business is asking. What does a 20% churn rate mean for revenue? Is a 3% conversion rate good or bad? This module teaches analysts to speak the language of business — KPIs, funnels, retention, and cohort analysis — and present findings that lead to action.",
    keySkills: ["KPI definition", "RFM Segmentation", "Churn Analysis", "Funnel Metrics"],
    topics: [
      "What is a KPI? How to define good metrics (SMART methodology)",
      "Revenue Metrics: ARR, MRR, ARPU (Average Revenue Per User)",
      "Customer Lifetime Value (CLV) calculation formulas",
      "Churn Analysis: customer churn rate and revenue churn rate",
      "Retention Curves & Cohort Analysis (Weekly/Monthly retention)",
      "Funnel Analysis (Awareness -> Interest -> Consideration -> Purchase)",
      "RFM Segmentation (Recency, Frequency, Monetary value)",
      "Net Promoter Score (NPS) calculation and analysis",
      "Stakeholder Communication: writing emails, briefing presentations",
      "Presenting complex data findings to non-technical business audiences"
    ],
    project: "Analyze a SaaS company's user logs and billing data: calculate churn rate, customer lifetime value, segment customers by RFM, and write a 5-slide business presentation summary.",
    playgroundType: "none"
  },
  {
    id: 10,
    name: "Basic Machine Learning",
    weeks: "Week 8",
    category: "advanced",
    why: "A growing number of data analyst roles now expect basic ML knowledge — not to build production deep learning systems, but to understand, evaluate, and communicate model outputs. This module gives students a practical foundation in supervised learning so they can collaborate with data scientists.",
    keySkills: ["Supervised ML", "Regression Models", "Classification", "Model Evaluation"],
    topics: [
      "What is Machine Learning? Supervised vs. Unsupervised learning",
      "Train/Test Split & cross-validation principles",
      "Linear Regression: fitting lines to predict numbers",
      "Logistic Regression: predicting yes/no binary classifications",
      "Decision Trees & Random Forest models",
      "Model Evaluation Metrics: Accuracy, Precision, Recall, F1-Score",
      "Regression Evaluation: RMSE, MAE, R-Squared",
      "ROC-AUC Curve analysis for classifiers",
      "Overfitting vs. Underfitting (bias-variance tradeoff)",
      "Feature Selection and scaling impacts on model performance"
    ],
    project: "Build a telecom customer churn prediction model (comparing Logistic Regression and Random Forest) using Scikit-Learn. Write a 1-page business brief summarizing model performance and recommendations.",
    playgroundType: "none"
  }
];

const roadmapSchedule = [
  {
    week: 1,
    title: "Statistics & Probability",
    topics: [
      { id: "w1-mon", day: "Mon", topic: "Statistics: Mean, Median, Mode, Variance, SD", module: 1 },
      { id: "w1-tue", day: "Tue", topic: "Statistics: Probability, Normal Distribution", module: 1 },
      { id: "w1-wed", day: "Wed", topic: "Statistics: Correlation, Covariance", module: 1 },
      { id: "w1-thu", day: "Thu", topic: "Statistics: Hypothesis Testing, p-value", module: 1 },
      { id: "w1-fri", day: "Fri", topic: "Statistics: Confidence Intervals, A/B Testing + Mini Quiz", module: 1 }
    ]
  },
  {
    week: 2,
    title: "Excel Fundamentals & SQL Basics",
    topics: [
      { id: "w2-mon", day: "Mon", topic: "Excel: Interface, Formulas — IF, COUNTIF, SUMIF", module: 2 },
      { id: "w2-tue", day: "Tue", topic: "Excel: VLOOKUP, XLOOKUP, INDEX-MATCH", module: 2 },
      { id: "w2-wed", day: "Wed", topic: "Excel: Pivot Tables — build from scratch", module: 2 },
      { id: "w2-thu", day: "Thu", topic: "Excel: Charts, Conditional Formatting", module: 2 },
      { id: "w2-fri", day: "Fri", topic: "Excel: Dashboard Project — end-to-end", module: 2 }
    ]
  },
  {
    week: 3,
    title: "Advanced SQL & Database Management",
    topics: [
      { id: "w3-mon", day: "Mon", topic: "SQL: SELECT, WHERE, ORDER BY, LIMIT", module: 3 },
      { id: "w3-tue", day: "Tue", topic: "SQL: GROUP BY, HAVING, Aggregations", module: 3 },
      { id: "w3-wed", day: "Wed", topic: "SQL: JOINS — INNER, LEFT, RIGHT, FULL", module: 3 },
      { id: "w3-thu", day: "Thu", topic: "SQL: Subqueries and CTEs", module: 3 },
      { id: "w3-fri", day: "Fri", topic: "SQL: Window Functions + Practice Set", module: 3 }
    ]
  },
  {
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
  {
    week: 5,
    title: "Data Cleaning Pipeline & Exploratory Analysis",
    topics: [
      { id: "w5-mon", day: "Mon", topic: "Data Cleaning: Outlier Detection (IQR, Z-score)", module: 5 },
      { id: "w5-tue", day: "Tue", topic: "Data Cleaning: Duplicates, Transformation, Feature Eng.", module: 5 },
      { id: "w5-wed", day: "Wed", topic: "EDA: Univariate & Bivariate Analysis", module: 6 },
      { id: "w5-thu", day: "Thu", topic: "EDA: Multivariate, Correlation Heatmaps", module: 6 },
      { id: "w5-fri", day: "Fri", topic: "EDA: Story-Driven EDA Project", module: 6 }
    ]
  },
  {
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
  {
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
  {
    week: 8,
    title: "Machine Learning & Capstone Presentation",
    topics: [
      { id: "w8-mon", day: "Mon", topic: "ML: Linear Regression — theory + sklearn", module: 10 },
      { id: "w8-tue", day: "Tue", topic: "ML: Logistic Regression + classification", module: 10 },
      { id: "w8-wed", day: "Wed", topic: "ML: Decision Trees & Random Forest", module: 10 },
      { id: "w8-thu", day: "Thu", topic: "ML: Model Evaluation — Accuracy, RMSE, ROC-AUC", module: 10 },
      { id: "w8-fri", day: "Fri", topic: "CAPSTONE: End-to-end project presentation", module: 10 }
    ]
  }
];

const flashcardsData = [
  { front: "A/B Testing", back: "A statistical method of comparing two versions of a webpage or product against each other to determine which one performs better. It relies on hypothesis testing.", category: "Statistics" },
  { front: "p-value", back: "The probability of obtaining test results at least as extreme as the observed results, assuming that the null hypothesis is true. A p-value < 0.05 is the typical threshold for statistical significance.", category: "Statistics" },
  { front: "Type I Error (Alpha)", back: "A false positive error: rejecting a true null hypothesis (e.g., claiming a modification has an effect when it actually does not).", category: "Statistics" },
  { front: "XLOOKUP", back: "A modern Excel function used to search a range or an array, and return an item corresponding to the first match. Unlike VLOOKUP, it supports leftwards search and defaults to exact match.", category: "Excel" },
  { front: "Pivot Table", back: "An interactive Excel/data tool that allows you to summarize, group, count, sum, average, or organize large tables of transactional data quickly without formulas.", category: "Excel" },
  { front: "Common Table Expression (CTE)", back: "A temporary named result set in SQL, written using the WITH clause. CTEs improve readability and simplify complex nested subqueries.", category: "SQL" },
  { front: "Window Function", back: "A SQL function that performs a calculation across a set of table rows that are related to the current row (e.g., ROW_NUMBER, RANK, LAG). It retains individual row identities.", category: "SQL" },
  { front: "DataFrame", back: "A 2-dimensional labeled data structure in Python's Pandas library, with columns of potentially different types (similar to a spreadsheet or SQL table).", category: "Python" },
  { front: "Missing Values: MCAR", back: "Missing Completely At Random. The probability of data being missing is completely independent of any observed or unobserved values (e.g., a coin flip determines missingness).", category: "Data Cleaning" },
  { front: "IQR Method", back: "Interquartile Range. A method to detect outliers where values falling below Q1 - 1.5*IQR or above Q3 + 1.5*IQR are flagged. (IQR = Q3 - Q1).", category: "Data Cleaning" },
  { front: "Correlation Matrix", back: "A table showing correlation coefficients (usually Pearson's r) between multiple variables, ranging from -1.0 to +1.0, indicating the direction and strength of relationships.", category: "EDA" },
  { front: "Streamlit", back: "An open-source Python library used to build and deploy custom, interactive web applications for data science and analytics workflows in minutes using pure Python.", category: "Visualization" },
  { front: "Calculated Column vs. Measure (DAX)", back: "Calculated columns are evaluated row-by-row during data refresh and stored in memory. Measures are calculated on-the-fly, dynamically adapting to active dashboard filters.", category: "Power BI" },
  { front: "Customer Lifetime Value (CLV)", back: "The total revenue or profit a business can expect to earn from a single customer throughout the entire duration of their business relationship.", category: "Business Analytics" },
  { front: "Overfitting", back: "An ML issue where a model learns details, noise, and random fluctuations in the training dataset to the extent that it negatively impacts its generalization to new testing data.", category: "Machine Learning" }
];

const quizzesData = {
  stats: [
    { question: "If a statistical test returns a p-value of 0.012, how should you interpret the result? (Alpha = 0.05)", options: ["The null hypothesis is likely true", "Reject the null hypothesis; results are statistically significant", "Do not reject the null hypothesis", "A Type I error is guaranteed"], answer: 1, explanation: "Since the p-value (0.012) is less than the standard significance level Alpha (0.05), we reject the null hypothesis, finding the results statistically significant." },
    { question: "What is a Type II error?", options: ["Failing to reject a false null hypothesis", "Rejecting a true null hypothesis", "Incorrectly calculating the mean", "A calculation issue with standard deviation"], answer: 0, explanation: "A Type II error (Beta) occurs when we fail to reject a false null hypothesis. In plain terms, it is a 'false negative' where an effect exists but we fail to detect it." },
    { question: "In a normal distribution, approximately what percentage of data falls within one standard deviation of the mean?", options: ["50%", "95%", "68%", "99.7%"], answer: 2, explanation: "According to the empirical rule (68-95-99.7 rule) for a normal distribution, approximately 68% of the values fall within ±1 standard deviation of the mean." },
    { question: "Which test is best suited to determine if the average conversion rates of two isolated landing pages are significantly different?", options: ["Chi-Squared Goodness of Fit", "Two-sample Z-test or t-test", "Pearson Correlation", "Linear Regression"], answer: 1, explanation: "To compare the averages of two independent groups (conversion rates of Group A vs. Group B), we use a two-sample hypothesis test, such as a t-test or Z-test." },
    { question: "What is the primary benefit of increasing sample sizes in A/B tests?", options: ["It decreases the p-value automatically", "It reduces statistical power", "It reduces the margin of error and increases statistical power", "It guarantees positive test results"], answer: 2, explanation: "Larger sample sizes reduce variance and standard errors, which narrows the margin of error and increases statistical power (the probability of detecting a real effect)." }
  ],
  sql: [
    { question: "Which clause is used to filter records AFTER a GROUP BY aggregation has occurred?", options: ["WHERE", "HAVING", "LIMIT", "FILTER"], answer: 1, explanation: "The HAVING clause is evaluated after aggregations, allowing you to filter groups. The WHERE clause is evaluated before rows are grouped." },
    { question: "What is the difference between INNER JOIN and LEFT JOIN?", options: ["INNER JOIN returns only matching rows; LEFT JOIN returns all rows from the left table plus matching rows from the right", "LEFT JOIN only returns matching rows on the left side", "INNER JOIN returns all rows from both tables", "They perform identically but vary in execution speeds"], answer: 0, explanation: "An INNER JOIN requires matches in both tables to return rows. A LEFT JOIN returns all records from the left table and matching records from the right table, padding missing right-side attributes with NULLs." },
    { question: "What does the ROW_NUMBER() window function do?", options: ["Sums up column cell counts", "Returns a unique sequential integer starting at 1 for each row inside the partition", "Ranks rows but leaves gaps for identical ties", "Calculates table row sizes in memory"], answer: 1, explanation: "ROW_NUMBER() assigns a unique, consecutive integer starting at 1 to each row inside a partition, regardless of duplicates or ties. (Unlike RANK() which leaves gaps on ties)." },
    { question: "In SQL, what is a Common Table Expression (CTE)?", options: ["A permanent database table stored on disks", "A query optimization index", "A temporary named result set defined using the 'WITH' clause", "A custom user-defined function"], answer: 2, explanation: "CTEs are created using the 'WITH' clause and exist temporarily for the scope of a single query. They improve structure and readability." },
    { question: "What SQL keyword is used to eliminate duplicate values from a SELECT query?", options: ["UNIQUE", "DISTINCT", "REMOVE_DUPLICATES", "GROUP BY"], answer: 1, explanation: "The DISTINCT keyword is placed immediately after SELECT to filter out duplicate rows and return unique combinations of values." }
  ],
  python: [
    { question: "Which library is primary used to handle tabular DataFrames in Python?", options: ["NumPy", "Matplotlib", "Seaborn", "Pandas"], answer: 3, explanation: "Pandas is the core library designed for structured, tabular data manipulation in Python, introducing DataFrames and Series." },
    { question: "How do you filter rows in a Pandas DataFrame (df) where the 'Age' column is greater than 30?", options: ["df.filter(Age > 30)", "df[df['Age'] > 30]", "df.query(Age > 30)", "df.where('Age' > 30)"], answer: 1, explanation: "In Pandas, boolean indexing is structured as df[df['Age'] > 30]. This returns a subset DataFrame where the condition evaluates to True." },
    { question: "What is the distinction between a Series and a DataFrame in Pandas?", options: ["A Series is 1D; a DataFrame is 2D", "DataFrame is a SQL connection; Series is local", "Series handles strings; DataFrame handles integers", "There is no difference; they are aliases"], answer: 0, explanation: "A Series represents a single column of data (1-Dimensional with index). A DataFrame represents a tabular grid (2-Dimensional) composed of multiple columns/Series." },
    { question: "Which Matplotlib/Seaborn function is best to display relationships between two continuous variables?", options: ["plt.hist()", "sns.boxplot()", "sns.scatterplot()", "sns.heatmap()"], answer: 2, explanation: "Scatter plots (sns.scatterplot) are designed to visualize coordinate plots of two continuous variables to discover relationships or clusters." },
    { question: "What does the df.groupby() function do in Pandas?", options: ["Groups files on your hard drive", "Combines rows based on key categories to perform aggregations (like mean, sum, count)", "Sorts the rows in alphabetical order", "Removes missing values from groups"], answer: 1, explanation: "df.groupby() splits data into groups based on key categories, allowing you to run aggregate functions (like sum or average) on each segment, similar to SQL GROUP BY." }
  ],
  business: [
    { question: "How is Customer Lifetime Value (CLV) calculated?", options: ["Monthly Active Users * Churn", "Average Purchase Value * Purchase Frequency * Customer Lifespan", "Total Profit / Marketing cost", "ARR + MRR + CAC"], answer: 1, explanation: "CLV is calculated by multiplying the average value of a purchase by the number of times a customer buys per year, multiplied by the average lifespan of a customer relationship." },
    { question: "What is Customer Churn Rate?", options: ["The percentage of customers gained per month", "The speed of server database updates", "The percentage of existing customers who stop doing business with a company in a given time frame", "The cost of acquiring a new customer"], answer: 2, explanation: "Churn rate is the rate at which customers cancel subscriptions or stop purchasing in a given period. Formula: (Customers lost / Customers at start of period) * 100." },
    { question: "What does RFM stand for in customer segmentation?", options: ["Revenue, Frequency, Marketing", "Recency, Frequency, Monetary value", "Retention, Funnels, Management", "Read, Filter, Merge"], answer: 1, explanation: "RFM stands for Recency (how recently did they buy?), Frequency (how often do they buy?), and Monetary value (how much do they spend?). It is a standard segmentation method." },
    { question: "What represents a Net Promoter Score (NPS) Promoter category?", options: ["Customers rating 7 or 8", "Customers rating 9 or 10", "Customers rating 0 to 6", "Customers purchasing daily"], answer: 1, explanation: "NPS categorizes ratings: Promoters are 9-10 (highly satisfied), Passives are 7-8, and Detractors are 0-6. NPS = % Promoters - % Detractors." },
    { question: "What is the primary objective of Funnel Analysis?", options: ["Sorting data tables quickly", "Measuring user dropout rates across sequential stages of a customer journey (e.g., Signup -> Add to Cart -> Purchase)", "Creating visual circle charts", "Calculating compound interest rates"], answer: 1, explanation: "Funnel analysis tracks the customer journey across consecutive steps, highlighting critical dropout points where customers abandon the funnel, pointing to optimization areas." }
  ],
  ml: [
    { question: "What is the main difference between Supervised and Unsupervised Learning?", options: ["Supervised uses labeled data (has targets); Unsupervised uses unlabeled data to find hidden groupings", "Supervised requires continuous human monitoring during training", "Unsupervised is faster and handles Excel spreadsheets better", "Supervised is for regression only; Unsupervised is for classification"], answer: 0, explanation: "Supervised learning models train on inputs mapped to known output labels. Unsupervised learning models discover patterns, structures, or clusters in unlabeled data (e.g., K-Means clustering)." },
    { question: "Which metric is best suited to evaluate a regression model predicting house prices?", options: ["Accuracy", "F1-Score", "Root Mean Squared Error (RMSE)", "ROC-AUC"], answer: 2, explanation: "RMSE calculates the square root of average squared deviations between predictions and actual prices, which is a continuous regression metric. Accuracy, F1-Score, and ROC-AUC evaluate classification models." },
    { question: "What does an Overfitted machine learning model do?", options: ["Generalizes extremely well to brand new datasets", "Fails to learn anything during training", "Memorizes the training data noise and performs poorly on unseen test data", "Undergoes too many iterations of cross-validation"], answer: 2, explanation: "Overfitting occurs when a model models training data too closely, learning its noise and random anomalies. While training accuracy is very high, it performs poorly on new test data because it failed to generalize." },
    { question: "Which model is an ensemble classifier made of many randomized decision trees?", options: ["Linear Regression", "Logistic Regression", "Random Forest", "K-Means"], answer: 2, explanation: "A Random Forest is an ensemble classifier consisting of many decision trees trained with bagging (bootstrap aggregating), averaging outputs to improve accuracy and control overfitting." },
    { question: "What is the purpose of a Train/Test split in machine learning workflows?", options: ["To speed up script compile times", "To validate model performance on unseen data, simulating real-world deployment", "To partition database user columns", "To format data into Excel files"], answer: 1, explanation: "By separating data (usually 80/20 or 70/30), we train the model on one portion and test on the other. This lets us check how well the model generalizes to new data, detecting overfitting." }
  ]
};

const quotesData = [
  { text: "Data is a precious thing and will last longer than the systems themselves.", author: "Tim Berners-Lee" },
  { text: "Without data, you're just another person with an opinion.", author: "W. Edwards Deming" },
  { text: "Torture the data, and it will confess to anything.", author: "Ronald Coase" },
  { text: "Information is the oil of the 21st century, and analytics is the combustion engine.", author: "Peter Sondergaard" },
  { text: "The goal is to turn data into information, and information into insight.", author: "Carly Fiorina" },
  { text: "Errors using inadequate data are much less than those using no data at all.", author: "Charles Babbage" },
  { text: "Data are just summaries of thousands of stories - tell a few of those stories to help make the data meaningful.", author: "Chip Heath" }
];

// ==========================================================================
// Interactive Daily Study Lessons
// ==========================================================================

const dailyLessonsContent = {
  "w1-mon": `### Central Tendency & Spread

To analyze any dataset, you first need to understand where the data centers and how spread out it is.

**1. Central Tendency:**
- **Mean (Average):** Sum of all values divided by count. Sensitive to outliers.
  Formula: \`Mean = \\sum(x_i) / N\`
- **Median (Middle Value):** The middle number in a sorted list. Robust against outliers.
- **Mode (Most Frequent):** The most common value in the dataset.

**2. Spread / Dispersion:**
- **Variance (\\sigma^2):** Average squared difference from the mean.
  Formula: \`Variance = \\sum(x_i - \\mu)^2 / N\`
- **Standard Deviation (\\sigma):** Square root of variance. Puts spread back into the original unit of measurement.

**Python Example:**
\`\`\`python
import numpy as np

data = [45, 56, 78, 92, 105, 56, 88]
mean_val = np.mean(data)
median_val = np.median(data)
std_dev = np.std(data)

print(f"Mean: {mean_val:.2f}, Median: {median_val}, Std Dev: {std_dev:.2f}")
\`\`\``,

  "w1-tue": `### Probability & Normal Distribution

Probability is the language of uncertainty, and the Normal Distribution is the most important pattern in statistics.

**1. Probability Basics:**
- **Probability:** Range from 0 (impossible) to 1 (certain).
- **Conditional Probability:** The likelihood of event A occurring, given B has occurred. \`P(A|B) = P(A \\cap B) / P(B)\`.

**2. Normal Distribution (Bell Curve):**
- Symmetric distribution where Mean = Median = Mode.
- Defined by mean (\\mu) and standard deviation (\\sigma).
- **Empirical Rule (68-95-99.7 Rule):**
  - **68%** of data falls within \\pm 1 standard deviation (\\sigma).
  - **95%** of data falls within \\pm 2 standard deviations (2\\sigma).
  - **99.7%** of data falls within \\pm 3 standard deviations (3\\sigma).

**Python Example:**
\`\`\`python
import scipy.stats as stats

# Check probability of z-score less than 1.96
p_val = stats.norm.cdf(1.96)
print(f"P(Z < 1.96) = {p_val:.4f}") # Approximately 0.975 (leaving 2.5% in tail)
\`\`\``,

  "w1-wed": `### Correlation & Covariance

When analyzing multiple variables, we look at how they move together.

**1. Covariance:**
- Indicates the direction of the linear relationship between two variables.
- Positive = move together; Negative = move opposite; Zero = no relationship.
- Hard to interpret because it depends on the scale of measurement.

**2. Correlation (Pearson's r):**
- Standardized covariance, ranging strictly from **-1.0 to +1.0**.
- **+1.0**: Perfect positive correlation.
- **-1.0**: Perfect negative correlation.
- **0.0**: No linear relationship.
- **Formula:** \`r = Cov(X,Y) / (\\sigma_X * \\sigma_Y)\`

> [!WARNING]
> **Correlation does not equal causation!** A high correlation between ice cream sales and sunburns is caused by hot weather, not because eating ice cream causes sunburns.

**Python Example:**
\`\`\`python
import pandas as pd

# Load sales and temperature data
df = pd.DataFrame({
    'Temp': [22, 25, 28, 32, 35],
    'IceCreamSales': [150, 200, 280, 390, 450]
})
correlation = df['Temp'].corr(df['IceCreamSales'])
print(f"Correlation: {correlation:.4f}")
\`\`\``,

  "w1-thu": `### Hypothesis Testing & p-value

Hypothesis testing is how data analysts prove whether an observed change is real or just noise.

**1. Null & Alternative Hypotheses:**
- **Null Hypothesis (H0):** Status quo. No real difference or effect (e.g., "The new design does not increase conversion").
- **Alternative Hypothesis (Ha):** What you want to prove (e.g., "The new design increases conversion").

**2. Significance Level (\\alpha):**
- The threshold for rejecting the Null Hypothesis. Typically set to **0.05 (5%)**.

**3. p-value:**
- The probability of seeing your sample results if H0 is true.
- **Decision Rule:**
  - If **p-value < \\alpha (0.05)**: Reject H0. The result is statistically significant.
  - If **p-value \\ge \\alpha (0.05)**: Fail to reject H0. No significant effect.

**Python Example:**
\`\`\`python
from scipy import stats

# Heights of a sample compared to population mean (170cm)
heights = [172, 175, 169, 178, 171, 176, 173]
t_stat, p_val = stats.ttest_1samp(heights, 170)

print(f"p-value: {p_val:.4f} (Significant if < 0.05)")
\`\`\``,

  "w1-fri": `### Confidence Intervals & A/B Testing

Putting hypothesis testing into practice through business experiments.

**1. Confidence Intervals (CI):**
- A range of values that likely contains the true population parameter.
- A **95% Confidence Interval** means if we repeat the experiment, 95% of computed intervals will contain the true parameter.

**2. A/B Testing Design:**
- **Control Group (A):** Users who see the current version.
- **Treatment Group (B):** Users who see the new version.
- Assign users randomly to avoid bias.

**3. Decision Risks (Errors):**
- **Type I Error (Alpha):** False Positive. Claiming B is better when B is not.
- **Type II Error (Beta):** False Negative. Failing to detect B is better when it is.
- **Statistical Power (1 - Beta):** Probability of detecting a real effect. Usually aimed at **80%**.

**Python Example:**
\`\`\`python
from statsmodels.stats.proportion import proportions_ztest

# 1000 visitors in each group. A converted 50, B converted 75.
count = [50, 75]
nobs = [1000, 1000]
z_stat, p_val = proportions_ztest(count, nobs)

print(f"Z-statistic: {z_stat:.4f}, p-value: {p_val:.4f}")
\`\`\``
};

function getLessonContent(dayId, dayTopic) {
  if (dailyLessonsContent[dayId]) {
    return dailyLessonsContent[dayId];
  }
  // Fallback for Weeks 2-8
  return `### ${dayTopic}

This lesson covers the core concept of **${dayTopic}**. 

**Key Objectives:**
- Understand the definition and core principles of this topic.
- Implement practice exercises in your local workspace.
- Log your summary notes, key formulas, and code scripts in the **Study Notepad** tab.

**Next Steps:**
- Complete the day's study checklist.
- Mark this day as completed in your roadmap calendar.
- Review related terminology in the **Active Recall** flashcards.`;
}

function renderMarkdownToHTMLString(markdownText) {
  if (!markdownText) return "";
  return markdownText
    // Clean safe tags
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Fenced Code Blocks (```code```)
    .replace(/```([\s\S]*?)```/gim, '<pre class="code-block-wrapper"><code>$1</code></pre>')
    // Inline Code (`code`)
    .replace(/`([^`]+)`/gim, '<code class="inline-code">$1</code>')
    // Bold
    .replace(/\*\*([^\*]+)\*\*/gim, '<strong>$1</strong>')
    // Alerts (GitHub Style)
    .replace(/^&gt;\s*\[\!WARNING\](.*$)/gim, '<div class="alert-box alert-warning"><strong>⚠️ Warning:</strong>$1</div>')
    .replace(/^&gt;\s*\[\!IMPORTANT\](.*$)/gim, '<div class="alert-box alert-important"><strong>💡 Important:</strong>$1</div>')
    .replace(/^&gt;\s*\[\!NOTE\](.*$)/gim, '<div class="alert-box alert-note"><strong>ℹ️ Note:</strong>$1</div>')
    // Bullets
    .replace(/^\- (.*$)/gim, '<ul><li>$1</li></ul>')
    .replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>')
    // Double lines -> separate lists cleanup
    .replace(/<\/ul>\s*<ul>/gim, '')
    // Paragraph spaces
    .replace(/\n\n/g, '<br><br>');
}


// ==========================================================================
// Application State Management
// ==========================================================================

let state = {
  completedDays: [],
  moduleNotes: {},
  quizScores: {},
  streakCount: 3,
  lastOpenedModule: 1
};

// Initialize Application State
function initState() {
  const savedState = localStorage.getItem("analyst_roadmap_state");
  if (savedState) {
    try {
      state = JSON.parse(savedState);
      if (!state.completedDays) state.completedDays = [];
      if (!state.moduleNotes) state.moduleNotes = {};
      if (!state.quizScores) state.quizScores = {};
      if (!state.streakCount) state.streakCount = 3;
      if (!state.lastOpenedModule) state.lastOpenedModule = 1;
    } catch (e) {
      console.error("Error parsing saved state from localStorage:", e);
    }
  } else {
    // Save default state
    saveState();
  }
}

function saveState() {
  localStorage.setItem("analyst_roadmap_state", JSON.stringify(state));
}

// ==========================================================================
// DOM Elements and Routing
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initState();
  
  // App initialization
  renderRoadmapTimeline();
  renderModulesGrid();
  renderHeatmapMatrix();
  initNotepad();
  updateProgressTracker();
  loadStreak();
  loadFlashcard(0);
  initQuizTopics();
  loadRandomQuote();
  initTheme();
  
  // Tab Switch Routing
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tabId = link.getAttribute("data-tab");
      switchTab(tabId);
    });
  });
  
  // Search Action
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    handleSearch(e.target.value.toLowerCase());
  });
  
  // Theme Toggle Button
  document.getElementById("theme-toggle-btn").addEventListener("click", toggleTheme);
  
  // Drawer close mechanisms
  document.getElementById("drawer-close-btn").addEventListener("click", closeDrawer);
  document.getElementById("module-drawer-overlay").addEventListener("click", closeDrawer);
  
  // A/B Test Sandbox Calculations
  document.getElementById("ab-calc-btn").addEventListener("click", handleABSandboxRun);
  
  // SQL Sandbox execution
  document.getElementById("sql-run-btn").addEventListener("click", executeSQLQuery);
  document.getElementById("sql-reset-btn").addEventListener("click", resetSQLPlayground);
  
  // Cleaning Sandbox Controls
  document.getElementById("clean-dups-btn").addEventListener("click", cleanDuplicates);
  document.getElementById("clean-nulls-btn").addEventListener("click", cleanNullAges);
  document.getElementById("clean-outliers-btn").addEventListener("click", cleanOutlierSalaries);
  document.getElementById("clean-reset-btn").addEventListener("click", resetCleaningPlayground);
  
  // Flashcard controls
  document.getElementById("flashcard-box").addEventListener("click", flipFlashcard);
  document.getElementById("prev-flashcard-btn").addEventListener("click", () => navigateFlashcard(-1));
  document.getElementById("next-flashcard-btn").addEventListener("click", () => navigateFlashcard(1));
  
  // Quiz controls
  document.getElementById("quiz-restart-btn").addEventListener("click", resetQuizStarter);
  document.getElementById("quiz-next-btn").addEventListener("click", handleNextQuizQuestion);
  
  // Quote control
  document.getElementById("new-quote-btn").addEventListener("click", loadRandomQuote);
  
  // Calendar Filtering
  const filterBtns = document.querySelectorAll(".btn-filter");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterRoadmapCalendar(btn.getAttribute("data-filter"));
    });
  });
});

// Switch view tabs
function switchTab(tabId) {
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
}

// Global Search functionality
function handleSearch(query) {
  if (!query) {
    // Reset filters
    renderRoadmapTimeline();
    renderModulesGrid();
    return;
  }
  
  // Switch to Search appropriate tabs, e.g., roadmap or modules
  // First, search inside Modules
  const filteredModules = modulesData.filter(m => 
    m.name.toLowerCase().includes(query) || 
    m.why.toLowerCase().includes(query) || 
    m.topics.some(t => t.toLowerCase().includes(query)) ||
    m.keySkills.some(s => s.toLowerCase().includes(query))
  );
  
  const modulesGrid = document.getElementById("modules-grid");
  modulesGrid.innerHTML = "";
  if (filteredModules.length > 0) {
    filteredModules.forEach(m => modulesGrid.appendChild(createModuleCardHTML(m)));
  } else {
    modulesGrid.innerHTML = `<div class="no-results">No modules match "${query}"</div>`;
  }
  
  // Second, search inside Roadmap Days
  const timelineContainer = document.getElementById("timeline-container");
  timelineContainer.innerHTML = "";
  let matchesFound = false;
  
  roadmapSchedule.forEach(weekData => {
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
        list.appendChild(createDayRowHTML(day));
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
}

// ==========================================================================
// Dark/Light Theme Control
// ==========================================================================

function initTheme() {
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
}

function toggleTheme() {
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
}

// ==========================================================================
// Streak Counter & Quotes
// ==========================================================================

function loadStreak() {
  document.getElementById("streak-days").innerText = state.streakCount;
}

function loadRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotesData.length);
  const quote = quotesData[randomIndex];
  document.getElementById("quote-display").innerText = `"${quote.text}"`;
  document.getElementById("quote-author").innerText = `— ${quote.author}`;
}

// ==========================================================================
// Dashboard Progress & Heatmap Matrix
// ==========================================================================

function updateProgressTracker() {
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
  updateActiveModuleStats();
}

function updateActiveModuleStats() {
  if (state.completedDays.length === 0) {
    document.getElementById("stats-active-module").innerText = "None Started";
    document.getElementById("stats-active-week").innerText = "Select a day in calendar";
    document.getElementById("resume-text").innerText = "Pick up where you left off. Start Module 1: Statistics & Probability today!";
    return;
  }
  
  // Find the last completed day to infer where they are
  // Map Day ID to week-day sequence
  let lastDayId = state.completedDays[state.completedDays.length - 1];
  
  // Search for this day in schedule
  let foundWeek = null;
  let foundDayTopic = null;
  let moduleId = 1;
  
  for (let w of roadmapSchedule) {
    let match = w.topics.find(t => t.id === lastDayId);
    if (match) {
      foundWeek = w.week;
      foundDayTopic = match;
      moduleId = match.module;
      break;
    }
  }
  
  if (foundDayTopic) {
    const modObj = modulesData.find(m => m.id === moduleId);
    document.getElementById("stats-active-module").innerText = modObj ? modObj.name : "Learning";
    document.getElementById("stats-active-week").innerText = `Week ${foundWeek} — Last action: ${foundDayTopic.day}`;
    
    // Find next day in calendar
    let flatDays = [];
    roadmapSchedule.forEach(w => flatDays.push(...w.topics));
    let lastIdx = flatDays.findIndex(d => d.id === lastDayId);
    if (lastIdx !== -1 && lastIdx < flatDays.length - 1) {
      let nextDay = flatDays[lastIdx + 1];
      document.getElementById("resume-text").innerText = `Next up: ${nextDay.topic} (${nextDay.day})`;
    } else {
      document.getElementById("resume-text").innerText = "Congratulations! You have completed the full 2-month training roadmap!";
    }
  }
}

function renderHeatmapMatrix() {
  const matrix = document.getElementById("heatmap-matrix");
  matrix.innerHTML = "";
  
  // Render 40 cells
  roadmapSchedule.forEach((weekData) => {
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
        switchTab("roadmap");
        // Scroll to the specific week card
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
}

function refreshHeatmap() {
  const cells = document.querySelectorAll(".heatmap-cell");
  cells.forEach(cell => {
    const id = cell.getAttribute("data-day-id");
    if (state.completedDays.includes(id)) {
      cell.classList.add("completed");
    } else {
      cell.classList.remove("completed");
    }
  });
}

// ==========================================================================
// Roadmap Schedule View
// ==========================================================================

function renderRoadmapTimeline() {
  const container = document.getElementById("timeline-container");
  container.innerHTML = "";
  
  roadmapSchedule.forEach((weekData) => {
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
      list.appendChild(createDayRowHTML(day));
    });
    
    body.appendChild(list);
    weekCard.innerHTML = headerHTML;
    weekCard.appendChild(body);
    
    // Toggle expand/collapse
    weekCard.querySelector(".timeline-week-header").addEventListener("click", (e) => {
      // Don't toggle collapse if they clicked on the checkbox wrapper
      if (e.target.closest(".custom-checkbox-wrapper") || e.target.closest(".day-link-module-btn")) return;
      weekCard.classList.toggle("collapsed");
    });
    
    container.appendChild(weekCard);
  });
}

function createDayRowHTML(day) {
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
        ${renderMarkdownToHTMLString(getLessonContent(day.id, day.topic))}
      </div>
    </div>
  `;
  
  // Checkbox change listener
  const checkbox = row.querySelector(".custom-checkbox-input");
  checkbox.addEventListener("change", (e) => {
    handleDayToggle(day.id, e.target.checked, row);
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
    openModuleDetails(day.module);
  });
  
  return row;
}

function handleDayToggle(dayId, isChecked, rowElement) {
  if (isChecked) {
    if (!state.completedDays.includes(dayId)) {
      state.completedDays.push(dayId);
      // Sort array to keep timeline progress linear
      state.completedDays.sort();
      rowElement.classList.add("completed");
      
      // Increment streak counts
      state.streakCount += 1;
      loadStreak();
    }
  } else {
    state.completedDays = state.completedDays.filter(id => id !== dayId);
    rowElement.classList.remove("completed");
    
    if (state.streakCount > 3) {
      state.streakCount -= 1;
      loadStreak();
    }
  }
  
  saveState();
  updateProgressTracker();
  refreshHeatmap();
  
  // Update week fraction text
  const weekCard = rowElement.closest(".timeline-week-card");
  const weekId = parseInt(weekCard.id.replace("week-card-", ""));
  const weekData = roadmapSchedule.find(w => w.week === weekId);
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
}

function filterRoadmapCalendar(filter) {
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
}

// ==========================================================================
// 10 Core Modules Hub
// ==========================================================================

function renderModulesGrid() {
  const grid = document.getElementById("modules-grid");
  grid.innerHTML = "";
  
  modulesData.forEach((mod) => {
    grid.appendChild(createModuleCardHTML(mod));
  });
  
  // Setup category filter select
  document.getElementById("module-category-select").addEventListener("change", (e) => {
    filterModulesCategory(e.target.value);
  });
}

function createModuleCardHTML(mod) {
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
    openModuleDetails(mod.id);
  });
  
  return card;
}

function filterModulesCategory(cat) {
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
}

// ==========================================================================
// Slide-Out Drawer and Sandboxes
// ==========================================================================

function openModuleDetails(moduleId) {
  const mod = modulesData.find(m => m.id === moduleId);
  if (!mod) return;
  
  state.lastOpenedModule = moduleId;
  saveState();
  
  document.getElementById("drawer-module-number").innerText = `Module ${mod.id}`;
  document.getElementById("drawer-module-title").innerText = mod.name;
  document.getElementById("drawer-module-weeks").innerText = mod.weeks;
  document.getElementById("drawer-module-why").innerText = mod.why;
  document.getElementById("drawer-module-project").innerText = mod.project;
  
  // Populate Topics Checklist
  const topicsList = document.getElementById("drawer-topics-list");
  topicsList.innerHTML = "";
  
  // Find all roadmap days for this module
  const moduleDays = [];
  roadmapSchedule.forEach(week => {
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
          ${renderMarkdownToHTMLString(getLessonContent(day.id, day.topic))}
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
  
  if (mod.playgroundType === "stats") {
    sandboxStats.style.display = "block";
    resetABPlayground();
  } else if (mod.playgroundType === "sql") {
    sandboxSQL.style.display = "block";
    resetSQLPlayground();
  } else if (mod.playgroundType === "cleaning") {
    sandboxCleaning.style.display = "block";
    resetCleaningPlayground();
  } else {
    sandboxGeneric.style.display = "block";
  }
  
  // Open Drawer UI
  document.getElementById("module-drawer-overlay").classList.add("active");
  document.getElementById("module-drawer").classList.add("open");
}

function closeDrawer() {
  document.getElementById("module-drawer-overlay").classList.remove("active");
  document.getElementById("module-drawer").classList.remove("open");
}

// Sandbox 1: A/B Testing Significance Calculator
function resetABPlayground() {
  document.getElementById("ab-visitors-a").value = 1000;
  document.getElementById("ab-conv-a").value = 50;
  document.getElementById("ab-visitors-b").value = 1000;
  document.getElementById("ab-conv-b").value = 75;
  document.getElementById("ab-results-box").style.display = "none";
}

function handleABSandboxRun() {
  const visitorsA = parseInt(document.getElementById("ab-visitors-a").value) || 0;
  const convA = parseInt(document.getElementById("ab-conv-a").value) || 0;
  const visitorsB = parseInt(document.getElementById("ab-visitors-b").value) || 0;
  const convB = parseInt(document.getElementById("ab-conv-b").value) || 0;
  
  if (visitorsA <= 0 || visitorsB <= 0 || convA < 0 || convB < 0 || convA > visitorsA || convB > visitorsB) {
    alert("Please enter logical values. Conversions cannot exceed visitors.");
    return;
  }
  
  const rateA = convA / visitorsA;
  const rateB = convB / visitorsB;
  
  // Z-Test for Two Independent Proportions
  const pPooled = (convA + convB) / (visitorsA + visitorsB);
  const seDifference = Math.sqrt(pPooled * (1 - pPooled) * ((1 / visitorsA) + (1 / visitorsB)));
  const zScore = seDifference !== 0 ? (rateB - rateA) / seDifference : 0;
  
  // Compute approximate p-value from standard normal distribution (Z)
  // CDF approximation
  const pValue = 2 * (1 - normalCDF(Math.abs(zScore)));
  
  // Update Results UI
  document.getElementById("ab-rate-a").innerText = `${(rateA * 100).toFixed(2)}%`;
  document.getElementById("ab-rate-b").innerText = `${(rateB * 100).toFixed(2)}%`;
  document.getElementById("ab-p-val").innerText = pValue.toFixed(4);
  
  const conclusionBox = document.getElementById("ab-conclusion-text");
  if (pValue < 0.05) {
    conclusionBox.className = "ab-conclusion";
    conclusionBox.innerHTML = `<strong>Result: Statistically Significant! (p = ${pValue.toFixed(4)})</strong><br>Reject the Null Hypothesis. There is a real differences between Campaign A and B.`;
  } else {
    conclusionBox.className = "ab-conclusion insignificant";
    conclusionBox.innerHTML = `<strong>Result: Not Statistically Significant (p = ${pValue.toFixed(4)})</strong><br>Fail to reject the Null Hypothesis. The observed conversion difference is likely due to random variance.`;
  }
  
  document.getElementById("ab-results-box").style.display = "block";
}

// Normal Distribution Cumulative Distribution Function approximation
function normalCDF(z) {
  const b1 =  0.319381530;
  const b2 = -0.356563782;
  const b3 =  1.781477937;
  const b4 = -1.821255978;
  const b5 =  1.330274429;
  const p  =  0.2316419;
  const c  =  0.39894228;

  if (z >= 0.0) {
    const t = 1.0 / (1.0 + p * z);
    return (1.0 - c * Math.exp(-z * z / 2.0) * t *
      (t * (t * (t * (t * b5 + b4) + b3) + b2) + b1));
  } else {
    const t = 1.0 / (1.0 - p * z);
    return (c * Math.exp(-z * z / 2.0) * t *
      (t * (t * (t * (t * b5 + b4) + b3) + b2) + b1));
  }
}

// Sandbox 2: SQL Query Playground
const salesTableData = [
  { id: 1, product: "SaaS Starter Pack", category: "Software", revenue: 150, region: "North", repeat_customer: true },
  { id: 2, product: "Analytics Server Core", category: "Hardware", revenue: 1200, region: "West", repeat_customer: false },
  { id: 3, product: "Consulting Hour", category: "Services", revenue: 300, region: "East", repeat_customer: true },
  { id: 4, product: "SaaS Pro Plan", category: "Software", revenue: 600, region: "South", repeat_customer: true },
  { id: 5, product: "Database SSD 1TB", category: "Hardware", revenue: 250, region: "West", repeat_customer: true },
  { id: 6, product: "Weekly Maintenance", category: "Services", revenue: 80, region: "North", repeat_customer: false },
  { id: 7, product: "Security Audit", category: "Services", revenue: 1500, region: "East", repeat_customer: false },
  { id: 8, product: "SaaS Enterprise Tier", category: "Software", revenue: 2400, region: "South", repeat_customer: true },
];

function resetSQLPlayground() {
  document.getElementById("sql-query-input").value = `SELECT category, SUM(revenue) AS total_revenue\nFROM sales_table\nGROUP BY category\nORDER BY total_revenue DESC`;
  renderSQLTable(salesTableData);
}

function executeSQLQuery() {
  const queryText = document.getElementById("sql-query-input").value.trim().replace(/\s+/g, ' ');
  const resultsContainer = document.getElementById("sql-results-table-container");
  resultsContainer.innerHTML = "";
  
  // Basic validation check
  if (!queryText.toLowerCase().startsWith("select")) {
    resultsContainer.innerHTML = `<div class="sql-error-text">Syntax Error: ONLY queries starting with SELECT are supported in this playground.</div>`;
    return;
  }
  if (!queryText.toLowerCase().includes("from sales_table")) {
    resultsContainer.innerHTML = `<div class="sql-error-text">Query Error: Table not found. Please query FROM sales_table.</div>`;
    return;
  }

  try {
    let resultRows = [...salesTableData];
    
    // 1. Evaluate WHERE conditions (Simplified parser)
    const whereMatch = queryText.match(/where\s+(.*?)(?:\s+group|\s+order|\s*$)/i);
    if (whereMatch) {
      const condition = whereMatch[1].trim();
      if (condition.includes("revenue >")) {
        const val = parseFloat(condition.split(">")[1].trim());
        resultRows = resultRows.filter(r => r.revenue > val);
      } else if (condition.includes("revenue <")) {
        const val = parseFloat(condition.split("<")[1].trim());
        resultRows = resultRows.filter(r => r.revenue < val);
      } else if (condition.includes("repeat_customer = true") || condition.includes("repeat_customer = 1")) {
        resultRows = resultRows.filter(r => r.repeat_customer === true);
      } else if (condition.includes("repeat_customer = false") || condition.includes("repeat_customer = 0")) {
        resultRows = resultRows.filter(r => r.repeat_customer === false);
      } else if (condition.includes("region =")) {
        const val = condition.split("=")[1].replace(/['"]/g, '').trim();
        resultRows = resultRows.filter(r => r.region.toLowerCase() === val.toLowerCase());
      } else if (condition.includes("category =")) {
        const val = condition.split("=")[1].replace(/['"]/g, '').trim();
        resultRows = resultRows.filter(r => r.category.toLowerCase() === val.toLowerCase());
      }
    }
    
    // 2. Evaluate GROUP BY and aggregate functions
    const groupByMatch = queryText.match(/group\s+by\s+(.*?)(?:\s+order|\s*$)/i);
    const selectMatch = queryText.match(/select\s+(.*?)\s+from/i);
    const selectFields = selectMatch ? selectMatch[1].split(',') : ["*"];
    
    let isAggregated = false;
    let aggregateType = null; // SUM, COUNT, AVG
    let aggregateField = null;
    let aliasName = "aggregate_val";
    
    selectFields.forEach(f => {
      const field = f.trim();
      const match = field.match(/(sum|count|avg)\((\w+)\)(?:\s+as\s+(\w+))?/i);
      if (match) {
        isAggregated = true;
        aggregateType = match[1].toUpperCase();
        aggregateField = match[2];
        aliasName = match[3] || `${aggregateType.toLowerCase()}_${aggregateField}`;
      }
    });

    if (groupByMatch && isAggregated) {
      const groupKey = groupByMatch[1].trim();
      const groupedData = {};
      
      resultRows.forEach(row => {
        const keyVal = row[groupKey];
        if (!groupedData[keyVal]) {
          groupedData[keyVal] = [];
        }
        groupedData[keyVal].push(row);
      });
      
      resultRows = Object.keys(groupedData).map(key => {
        const groupRows = groupedData[key];
        const res = {};
        res[groupKey] = key;
        
        let sum = groupRows.reduce((a, b) => a + (b[aggregateField] || 0), 0);
        
        if (aggregateType === "SUM") {
          res[aliasName] = sum;
        } else if (aggregateType === "COUNT") {
          res[aliasName] = groupRows.length;
        } else if (aggregateType === "AVG") {
          res[aliasName] = groupRows.length > 0 ? parseFloat((sum / groupRows.length).toFixed(2)) : 0;
        }
        return res;
      });
    } else {
      // Handle standard Select fields projection
      if (selectFields[0].trim() !== "*") {
        resultRows = resultRows.map(row => {
          let projection = {};
          selectFields.forEach(f => {
            const cleanField = f.trim();
            if (row.hasOwnProperty(cleanField)) {
              projection[cleanField] = row[cleanField];
            }
          });
          return projection;
        });
      }
    }
    
    // 3. Evaluate ORDER BY Sorting
    const orderByMatch = queryText.match(/order\s+by\s+(\w+)(?:\s+(desc|asc))?/i);
    if (orderByMatch) {
      const sortKey = orderByMatch[1].trim();
      const direction = orderByMatch[2] ? orderByMatch[2].toLowerCase() : "asc";
      
      resultRows.sort((a, b) => {
        let valA = a[sortKey];
        let valB = b[sortKey];
        
        if (typeof valA === "string") {
          return direction === "desc" ? valB.localeCompare(valA) : valA.localeCompare(valB);
        } else {
          return direction === "desc" ? valB - valA : valA - valB;
        }
      });
    }
    
    renderSQLTable(resultRows);
    
  } catch (err) {
    resultsContainer.innerHTML = `<div class="sql-error-text">SQL Engine Run Error: ${err.message}. Please check spelling or query clauses.</div>`;
  }
}

function renderSQLTable(rows) {
  const container = document.getElementById("sql-results-table-container");
  container.innerHTML = "";
  
  if (rows.length === 0) {
    container.innerHTML = `<div class="sql-success-empty">Query ran successfully, but returned 0 rows.</div>`;
    return;
  }
  
  const table = document.createElement("table");
  table.className = "sandbox-table";
  
  // Headers
  const headers = Object.keys(rows[0]);
  const trHead = document.createElement("tr");
  headers.forEach(h => {
    const th = document.createElement("th");
    th.innerText = h;
    trHead.appendChild(th);
  });
  table.appendChild(trHead);
  
  // Data Rows
  rows.forEach(r => {
    const tr = document.createElement("tr");
    headers.forEach(h => {
      const td = document.createElement("td");
      if (typeof r[h] === "boolean") {
        td.innerText = r[h] ? "TRUE" : "FALSE";
      } else {
        td.innerText = r[h] !== null ? r[h] : "NULL";
      }
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
  
  container.appendChild(table);
}

// Sandbox 3: Data Cleaning Sandbox
const originalCleaningData = [
  { id: 101, name: "Aarav Mehta", age: 24, salary: 55000, status: "Active" },
  { id: 102, name: "Isha Sharma", age: null, salary: 62000, status: "Pending" },
  { id: 103, name: "Rahul Gupta", age: 29, salary: 48000, status: "Active" },
  { id: 103, name: "Rahul Gupta", age: 29, salary: 48000, status: "Active" }, // Duplicate
  { id: 104, name: "Priyan Patel", age: 35, salary: 250000, status: "Active" }, // Outlier Salary
  { id: 105, name: "Sneha Reddy", age: 28, salary: 72000, status: "Active" },
  { id: 106, name: "Kabir Singh", age: 31, salary: 81000, status: "Active" },
  { id: 106, name: "Kabir Singh", age: 31, salary: 81000, status: "Active" }, // Duplicate
];

let cleaningStateData = [];

function resetCleaningPlayground() {
  cleaningStateData = JSON.parse(JSON.stringify(originalCleaningData));
  renderCleaningTable();
}

function renderCleaningTable() {
  const table = document.getElementById("cleaning-table");
  table.innerHTML = "";
  
  // Create Headers
  table.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>Salary</th>
      <th>Status</th>
    </tr>
  `;
  
  // Scan metadata for markers
  let dupIds = [];
  let tempIds = [];
  cleaningStateData.forEach(row => {
    let rowHash = `${row.id}-${row.name}`;
    if (tempIds.includes(rowHash)) {
      dupIds.push(rowHash);
    } else {
      tempIds.push(rowHash);
    }
  });
  
  let missingAges = 0;
  let outlierSalaries = 0;
  let duplicateRows = dupIds.length;
  
  cleaningStateData.forEach((row) => {
    const tr = document.createElement("tr");
    let rowHash = `${row.id}-${row.name}`;
    
    if (dupIds.includes(rowHash)) {
      tr.className = "row-duplicate";
    }
    
    // ID cell
    const tdId = document.createElement("td");
    tdId.innerText = row.id;
    tr.appendChild(tdId);
    
    // Name cell
    const tdName = document.createElement("td");
    tdName.innerText = row.name;
    tr.appendChild(tdName);
    
    // Age cell
    const tdAge = document.createElement("td");
    if (row.age === null) {
      tdAge.innerText = "NaN";
      tdAge.className = "cell-null";
      missingAges++;
    } else {
      tdAge.innerText = row.age;
    }
    tr.appendChild(tdAge);
    
    // Salary cell
    const tdSalary = document.createElement("td");
    tdSalary.innerText = `$${row.salary.toLocaleString()}`;
    if (row.salary > 120000) {
      tdSalary.className = "cell-outlier";
      outlierSalaries++;
    }
    tr.appendChild(tdSalary);
    
    // Status cell
    const tdStatus = document.createElement("td");
    tdStatus.innerText = row.status;
    tr.appendChild(tdStatus);
    
    table.appendChild(tr);
  });
  
  // Update stats tags
  document.getElementById("clean-row-count").innerText = cleaningStateData.length;
  document.getElementById("clean-dup-count").innerText = duplicateRows;
  document.getElementById("clean-null-count").innerText = missingAges;
  document.getElementById("clean-outlier-count").innerText = outlierSalaries;
}

function cleanDuplicates() {
  const uniques = [];
  const uniqueHashes = [];
  
  cleaningStateData.forEach(row => {
    const hash = `${row.id}-${row.name}-${row.age}-${row.salary}-${row.status}`;
    if (!uniqueHashes.includes(hash)) {
      uniqueHashes.push(hash);
      uniques.push(row);
    }
  });
  
  cleaningStateData = uniques;
  renderCleaningTable();
}

function cleanNullAges() {
  // Compute Mean Age
  let sum = 0;
  let count = 0;
  cleaningStateData.forEach(row => {
    if (row.age !== null) {
      sum += row.age;
      count++;
    }
  });
  const meanAge = Math.round(sum / count);
  
  cleaningStateData.forEach(row => {
    if (row.age === null) {
      row.age = meanAge;
    }
  });
  renderCleaningTable();
}

function cleanOutlierSalaries() {
  // Let's filter out rows where salary exceeds 120000
  cleaningStateData = cleaningStateData.filter(row => row.salary <= 120000);
  renderCleaningTable();
}

// ==========================================================================
// Recall Center (Flashcards & Quizzes)
// ==========================================================================

let currentFlashcardIndex = 0;

function loadFlashcard(index) {
  if (index < 0 || index >= flashcardsData.length) return;
  currentFlashcardIndex = index;
  
  const card = flashcardsData[index];
  
  // Unflip the card visual first
  document.getElementById("flashcard-box").classList.remove("flipped");
  
  setTimeout(() => {
    document.getElementById("flashcard-cat").innerText = card.category;
    document.getElementById("flashcard-front-text").innerText = card.front;
    document.getElementById("flashcard-back-text").innerText = card.back;
    document.getElementById("flashcard-counter").innerText = `Card ${index + 1} of ${flashcardsData.length}`;
  }, 150);
}

function flipFlashcard() {
  document.getElementById("flashcard-box").classList.toggle("flipped");
}

function navigateFlashcard(direction) {
  let nextIdx = currentFlashcardIndex + direction;
  if (nextIdx < 0) {
    nextIdx = flashcardsData.length - 1; // Loop back to end
  } else if (nextIdx >= flashcardsData.length) {
    nextIdx = 0; // Loop forward to start
  }
  loadFlashcard(nextIdx);
}

// Concept Assessment Quizzes
let activeQuizTopic = null;
let currentQuestionIndex = 0;
let activeQuizQuestions = [];
let quizScore = 0;

function initQuizTopics() {
  const topics = document.querySelectorAll(".btn-topic");
  topics.forEach(btn => {
    btn.addEventListener("click", () => {
      const topicId = btn.getAttribute("data-quiz");
      startQuiz(topicId);
    });
  });
}

function startQuiz(topicId) {
  if (!quizzesData[topicId]) return;
  
  activeQuizTopic = topicId;
  activeQuizQuestions = quizzesData[topicId];
  currentQuestionIndex = 0;
  quizScore = 0;
  
  // Set UI Header
  const titleMap = {
    stats: "Statistics Quiz",
    sql: "SQL Quiz",
    python: "Python Quiz",
    business: "Business Metrics",
    ml: "Machine Learning"
  };
  document.getElementById("quiz-badge").innerText = titleMap[topicId] || "Quiz";
  
  // Swap Panels
  document.getElementById("quiz-starter").style.display = "none";
  document.getElementById("quiz-finished").style.display = "none";
  document.getElementById("quiz-active").style.display = "block";
  
  loadQuizQuestion(0);
}

function loadQuizQuestion(idx) {
  currentQuestionIndex = idx;
  const q = activeQuizQuestions[idx];
  
  // Update indicators
  document.getElementById("quiz-question-number").innerText = `Question ${idx + 1} of ${activeQuizQuestions.length}`;
  document.getElementById("quiz-progress-fill").style.width = `${((idx + 1) / activeQuizQuestions.length) * 100}%`;
  
  // Set texts
  document.getElementById("quiz-question-text").innerText = q.question;
  document.getElementById("quiz-explanation-text").innerText = q.explanation;
  
  // Clear explanation panel
  document.getElementById("quiz-explanation").style.display = "none";
  
  // Populate options
  const container = document.getElementById("quiz-options-container");
  container.innerHTML = "";
  
  q.options.forEach((opt, oIdx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.innerText = opt;
    
    btn.addEventListener("click", () => handleQuizOptionSelect(btn, oIdx));
    container.appendChild(btn);
  });
  
  // Disable next button until selected
  document.getElementById("quiz-next-btn").setAttribute("disabled", "true");
}

function handleQuizOptionSelect(selectedBtn, optionIndex) {
  const q = activeQuizQuestions[currentQuestionIndex];
  const allBtns = document.querySelectorAll(".quiz-option");
  
  // Disable click on all options to lock answer
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
    // Highlight the correct one
    allBtns[q.answer].classList.add("correct");
  }
  
  // Reveal explanation
  document.getElementById("quiz-explanation").style.display = "block";
  
  // Enable next action
  const nextBtn = document.getElementById("quiz-next-btn");
  nextBtn.removeAttribute("disabled");
  
  if (currentQuestionIndex === activeQuizQuestions.length - 1) {
    nextBtn.innerText = "Finish Quiz";
  } else {
    nextBtn.innerText = "Next Question";
  }
}

function handleNextQuizQuestion() {
  if (currentQuestionIndex < activeQuizQuestions.length - 1) {
    loadQuizQuestion(currentQuestionIndex + 1);
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
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
  
  // Save Score in State
  state.quizScores[activeQuizTopic] = quizScore;
  saveState();
  
  // Refresh stats on dashboard
  updateDashboardQuizStats();
  
  document.getElementById("quiz-finished").style.display = "block";
}

function updateDashboardQuizStats() {
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
}

function resetQuizStarter() {
  document.getElementById("quiz-finished").style.display = "none";
  document.getElementById("quiz-starter").style.display = "block";
  document.getElementById("quiz-badge").innerText = "Select Topic";
}

// ==========================================================================
// Notepad and Notes Autosave & Markdown Render
// ==========================================================================

function initNotepad() {
  const select = document.getElementById("notebook-module-select");
  select.innerHTML = "";
  
  // Load module choices
  modulesData.forEach(m => {
    const opt = document.createElement("option");
    opt.value = m.id;
    opt.innerText = `Module ${m.id}: ${m.name.slice(0, 30)}${m.name.length > 30 ? '...' : ''}`;
    select.appendChild(opt);
  });
  
  // Preset select to last opened module
  select.value = state.lastOpenedModule;
  
  // Add listeners
  select.addEventListener("change", (e) => {
    loadModuleNotes(parseInt(e.target.value));
  });
  
  const textarea = document.getElementById("notebook-textarea");
  textarea.addEventListener("input", handleNotesTyping);
  
  // Load initial notes
  loadModuleNotes(state.lastOpenedModule);
  
  // Sync count on dashboard
  updateNotesCountDashboard();
}

function loadModuleNotes(modId) {
  state.lastOpenedModule = modId;
  saveState();
  
  const notesText = state.moduleNotes[modId] || "";
  document.getElementById("notebook-textarea").value = notesText;
  
  renderMarkdownNotes(notesText);
}

let saveTimer = null;
function handleNotesTyping(e) {
  const modId = parseInt(document.getElementById("notebook-module-select").value);
  const textVal = e.target.value;
  
  // Show saving state
  const status = document.getElementById("notebook-save-status");
  status.innerText = "Saving...";
  status.className = "save-status saving";
  
  // Debounce saves
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    state.moduleNotes[modId] = textVal;
    saveState();
    
    status.innerText = "Saved";
    status.className = "save-status";
    
    updateNotesCountDashboard();
  }, 600);
  
  renderMarkdownNotes(textVal);
}

function updateNotesCountDashboard() {
  const notesCount = Object.keys(state.moduleNotes).filter(k => state.moduleNotes[k].trim().length > 0).length;
  document.getElementById("stats-notes-count").innerText = `${notesCount} / 10`;
}

// Lightweight Regex Markdown Renderer
function renderMarkdownNotes(markdownText) {
  const preview = document.getElementById("notebook-preview-content");
  
  if (!markdownText.trim()) {
    preview.innerHTML = `<p class="preview-placeholder">Notes preview will render here...</p>`;
    return;
  }
  
  let html = markdownText
    // Clean safe tags
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Fenced Code Blocks (```code```)
    .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
    // Inline Code (`code`)
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    // Bold
    .replace(/\*\*([^\*]+)\*\*/gim, '<strong>$1</strong>')
    // Bullets
    .replace(/^\- (.*$)/gim, '<ul><li>$1</li></ul>')
    .replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>')
    // Double lines -> separate lists cleanup
    .replace(/<\/ul>\s*<ul>/gim, '')
    // Paragraph spaces
    .replace(/\n\n/g, '<br><br>');
    
  preview.innerHTML = html;
}
