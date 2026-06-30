// Module 5: Data Cleaning
window.HQModules = window.HQModules || {};

window.HQModules.cleaning = {
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
  playgroundType: "cleaning",

  schedule: {
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

  flashcards: [
    { front: "Missing Values: MCAR", back: "Missing Completely At Random. The probability of data being missing is completely independent of any observed or unobserved values (e.g., a coin flip determines missingness).", category: "Data Cleaning" },
    { front: "IQR Method", back: "Interquartile Range. A method to detect outliers where values falling below Q1 - 1.5*IQR or above Q3 + 1.5*IQR are flagged. (IQR = Q3 - Q1).", category: "Data Cleaning" }
  ],

  // Sandbox Cleaning Dataset and Handlers
  originalCleaningData: [
    { id: 101, name: "Aarav Mehta", age: 24, salary: 55000, status: "Active" },
    { id: 102, name: "Isha Sharma", age: null, salary: 62000, status: "Pending" },
    { id: 103, name: "Rahul Gupta", age: 29, salary: 48000, status: "Active" },
    { id: 103, name: "Rahul Gupta", age: 29, salary: 48000, status: "Active" }, // Duplicate
    { id: 104, name: "Priyan Patel", age: 35, salary: 250000, status: "Active" }, // Outlier Salary
    { id: 105, name: "Sneha Reddy", age: 28, salary: 72000, status: "Active" },
    { id: 106, name: "Kabir Singh", age: 31, salary: 81000, status: "Active" },
    { id: 106, name: "Kabir Singh", age: 31, salary: 81000, status: "Active" }, // Duplicate
  ],

  cleaningStateData: [],

  initSandbox: function() {
    document.getElementById("clean-dups-btn").addEventListener("click", this.cleanDuplicates.bind(this));
    document.getElementById("clean-nulls-btn").addEventListener("click", this.cleanNullAges.bind(this));
    document.getElementById("clean-outliers-btn").addEventListener("click", this.cleanOutlierSalaries.bind(this));
    document.getElementById("clean-reset-btn").addEventListener("click", this.resetCleaningPlayground.bind(this));
    this.resetCleaningPlayground();
  },

  resetCleaningPlayground: function() {
    this.cleaningStateData = JSON.parse(JSON.stringify(this.originalCleaningData));
    this.renderCleaningTable();
  },

  renderCleaningTable: function() {
    const table = document.getElementById("cleaning-table");
    if (!table) return;
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
    this.cleaningStateData.forEach(row => {
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
    
    this.cleaningStateData.forEach((row) => {
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
    document.getElementById("clean-row-count").innerText = this.cleaningStateData.length;
    document.getElementById("clean-dup-count").innerText = duplicateRows;
    document.getElementById("clean-null-count").innerText = missingAges;
    document.getElementById("clean-outlier-count").innerText = outlierSalaries;
  },

  cleanDuplicates: function() {
    const uniques = [];
    const uniqueHashes = [];
    
    this.cleaningStateData.forEach(row => {
      const hash = `${row.id}-${row.name}-${row.age}-${row.salary}-${row.status}`;
      if (!uniqueHashes.includes(hash)) {
        uniqueHashes.push(hash);
        uniques.push(row);
      }
    });
    
    this.cleaningStateData = uniques;
    this.renderCleaningTable();
  },

  cleanNullAges: function() {
    // Compute Mean Age
    let sum = 0;
    let count = 0;
    this.cleaningStateData.forEach(row => {
      if (row.age !== null) {
        sum += row.age;
        count++;
      }
    });
    const meanAge = count > 0 ? Math.round(sum / count) : 30;
    
    this.cleaningStateData.forEach(row => {
      if (row.age === null) {
        row.age = meanAge;
      }
    });
    this.renderCleaningTable();
  },

  cleanOutlierSalaries: function() {
    this.cleaningStateData = this.cleaningStateData.filter(row => row.salary <= 120000);
    this.renderCleaningTable();
  }
};
