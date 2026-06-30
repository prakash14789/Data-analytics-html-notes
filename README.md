# Data Analyst Study Roadmap Interactive Platform

This repository contains a premium, interactive, client-side HTML study web application designed specifically around the **Data Analyst Complete 2-Month Training Roadmap**. 

It is designed to give students and instructors a stunning, unified dashboard to track progress, digest module syllabus content, use active recall tools, and test their skills with custom interactive simulations.

---

## 🛠️ Project Structure

The project is built entirely using standard web files:
- **`index.html`**: Handles the layout grid, sidebar navigation, hero dashboard, progress trackers, active recall forms, and data cleaning/SQL grids.
- **`styles.css`**: Defines theme variables (responsive dark/light toggles), custom glassmorphic panels, dynamic slide-in transitions, and 3D card flipping.
- **`app.js`**: Drives the application state. It manages browser storage sync, constructs timeline accordions, manages flashcards and quiz scores, and compiles data within interactive sandbox playgrounds.
- **`Data_Analyst_2Month_Roadmap.pdf`**: The original reference syllabus.

---

## 🚀 Key Interactive Features

1. **Overall Progress & Streak Counter**:
   - Marking any daily target as completed immediately updates your progress metrics and logs learning activity inside a Github-style roadmap learning matrix.
   - Saves your progression in your local browser `localStorage`.
2. **10 Modules detail drawers**:
   - Explains the business rationale (*Why This Module?*), the list of specific topics, and projects for all 10 modules from the training roadmap.
3. **Active Recall & Quizzes**:
   - Test terminology using a 3D-flipping flashcard stack.
   - Run 5-question rapid quizzes across five domains (Stats, SQL, Python, Business Metrics, Machine Learning) with immediate answer validation and explanations.
4. **Notebook Workspace**:
   - Pick any module and take notes in the markdown editor. Includes a live rendering preview pane.
5. **Interactive Sandboxes**:
   - **Hypothesis Significance Calculator (Module 1)**: Enter A/B test visitor and conversion data to execute a live Z-test for proportions, outputting conversion rates, standard errors, and p-values.
   - **Miniature SQL Query Terminal (Module 3)**: Execute basic SQL commands (`SELECT`, `WHERE`, `GROUP BY`, `ORDER BY`, aggregates) against an in-memory database table (`sales_table`) with immediate output grids.
   - **Data Cleaning Dashboard (Module 5)**: Interactively clear duplicate records, impute null values with mean estimates, or filter out outliers in an employee record sheet.

---

## 💻 How to Open

Since this application is self-contained:
1. Double-click the **`index.html`** file in your file explorer to open it directly in any modern browser (Chrome, Edge, Firefox, Safari).
2. Alternatively, run a local development server in the directory:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js / NPX
   npx serve .
   ```
   Then open `http://localhost:8000` (or the port specified) in your browser.
