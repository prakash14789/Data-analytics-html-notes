// Module 10: Basic Machine Learning
window.HQModules = window.HQModules || {};

window.HQModules.ml = {
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
  playgroundType: "none",

  schedule: {
    week: 8,
    title: "Machine Learning & Capstone Presentation",
    topics: [
      { id: "w8-mon", day: "Mon", topic: "ML: Linear Regression — theory + sklearn", module: 10 },
      { id: "w8-tue", day: "Tue", topic: "ML: Logistic Regression + classification", module: 10 },
      { id: "w8-wed", day: "Wed", topic: "ML: Decision Trees & Random Forest", module: 10 },
      { id: "w8-thu", day: "Thu", topic: "ML: Model Evaluation — Accuracy, RMSE, ROC-AUC", module: 10 },
      { id: "w8-fri", day: "Fri", topic: "CAPSTONE: End-to-end project presentation", module: 10 }
    ]
  },

  flashcards: [
    { front: "Overfitting", back: "An ML issue where a model learns details, noise, and random fluctuations in the training dataset to the extent that it negatively impacts its generalization to new testing data.", category: "Machine Learning" }
  ],

  quiz: [
    { question: "What is the main difference between Supervised and Unsupervised Learning?", options: ["Supervised uses labeled data (has targets); Unsupervised uses unlabeled data to find hidden groupings", "Supervised requires continuous human monitoring during training", "Unsupervised is faster and handles Excel spreadsheets better", "Supervised is for regression only; Unsupervised is for classification"], answer: 0, explanation: "Supervised learning models train on inputs mapped to known output labels. Unsupervised learning models discover patterns, structures, or clusters in unlabeled data (e.g., K-Means clustering)." },
    { question: "Which metric is best suited to evaluate a regression model predicting house prices?", options: ["Accuracy", "F1-Score", "Root Mean Squared Error (RMSE)", "ROC-AUC"], answer: 2, explanation: "RMSE calculates the square root of average squared deviations between predictions and actual prices, which is a continuous regression metric. Accuracy, F1-Score, and ROC-AUC evaluate classification models." },
    { question: "What does an Overfitted machine learning model do?", options: ["Generalizes extremely well to brand new datasets", "Fails to learn anything during training", "Memorizes the training data noise and performs poorly on unseen test data", "Undergoes too many iterations of cross-validation"], answer: 2, explanation: "Overfitting occurs when a model models training data too closely, learning its noise and random anomalies. While training accuracy is very high, it performs poorly on new test data because it failed to generalize." },
    { question: "Which model is an ensemble classifier made of many randomized decision trees?", options: ["Linear Regression", "Logistic Regression", "Random Forest", "K-Means"], answer: 2, explanation: "A Random Forest is an ensemble classifier consisting of many decision trees trained with bagging (bootstrap aggregating), averaging outputs to improve accuracy and control overfitting." },
    { question: "What is the purpose of a Train/Test split in machine learning workflows?", options: ["To speed up script compile times", "To validate model performance on unseen data, simulating real-world deployment", "To partition database user columns", "To format data into Excel files"], answer: 1, explanation: "By separating data (usually 80/20 or 70/30), we train the model on one portion and test on the other. This lets us check how well the model generalizes to new data, detecting overfitting." }
  ]
};
