// Module 3: SQL — From Basics to Advanced
window.HQModules = window.HQModules || {};

window.HQModules.sql = {
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
  playgroundType: "sql",

  schedule: {
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

  flashcards: [
    { front: "Common Table Expression (CTE)", back: "A temporary named result set in SQL, written using the WITH clause. CTEs improve readability and simplify complex nested subqueries.", category: "SQL" },
    { front: "Window Function", back: "A SQL function that performs a calculation across a set of table rows that are related to the current row (e.g., ROW_NUMBER, RANK, LAG). It retains individual row identities.", category: "SQL" }
  ],

  quiz: [
    { question: "Which clause is used to filter records AFTER a GROUP BY aggregation has occurred?", options: ["WHERE", "HAVING", "LIMIT", "FILTER"], answer: 1, explanation: "The HAVING clause is evaluated after aggregations, allowing you to filter groups. The WHERE clause is evaluated before rows are grouped." },
    { question: "What is the difference between INNER JOIN and LEFT JOIN?", options: ["INNER JOIN returns only matching rows; LEFT JOIN returns all rows from the left table plus matching rows from the right", "LEFT JOIN only returns matching rows on the left side", "INNER JOIN returns all rows from both tables", "They perform identically but vary in execution speeds"], answer: 0, explanation: "An INNER JOIN requires matches in both tables to return rows. A LEFT JOIN returns all records from the left table and matching records from the right table, padding missing right-side attributes with NULLs." },
    { question: "What does the ROW_NUMBER() window function do?", options: ["Sums up column cell counts", "Returns a unique sequential integer starting at 1 for each row inside the partition", "Ranks rows but leaves gaps for identical ties", "Calculates table row sizes in memory"], answer: 1, explanation: "ROW_NUMBER() assigns a unique, consecutive integer starting at 1 to each row inside a partition, regardless of duplicates or ties. (Unlike RANK() which leaves gaps on ties)." },
    { question: "In SQL, what is a Common Table Expression (CTE)?", options: ["A permanent database table stored on disks", "A query optimization index", "A temporary named result set defined using the 'WITH' clause", "A custom user-defined function"], answer: 2, explanation: "CTEs are created using the 'WITH' clause and exist temporarily for the scope of a single query. They improve structure and readability." },
    { question: "What SQL keyword is used to eliminate duplicate values from a SELECT query?", options: ["UNIQUE", "DISTINCT", "REMOVE_DUPLICATES", "GROUP BY"], answer: 1, explanation: "The DISTINCT keyword is placed immediately after SELECT to filter out duplicate rows and return unique combinations of values." }
  ],

  // Sandbox DB & Execution Handler
  salesTableData: [
    { id: 1, product: "SaaS Starter Pack", category: "Software", revenue: 150, region: "North", repeat_customer: true },
    { id: 2, product: "Analytics Server Core", category: "Hardware", revenue: 1200, region: "West", repeat_customer: false },
    { id: 3, product: "Consulting Hour", category: "Services", revenue: 300, region: "East", repeat_customer: true },
    { id: 4, product: "SaaS Pro Plan", category: "Software", revenue: 600, region: "South", repeat_customer: true },
    { id: 5, product: "Database SSD 1TB", category: "Hardware", revenue: 250, region: "West", repeat_customer: true },
    { id: 6, product: "Weekly Maintenance", category: "Services", revenue: 80, region: "North", repeat_customer: false },
    { id: 7, product: "Security Audit", category: "Services", revenue: 1500, region: "East", repeat_customer: false },
    { id: 8, product: "SaaS Enterprise Tier", category: "Software", revenue: 2400, region: "South", repeat_customer: true },
  ],

  initSandbox: function() {
    document.getElementById("sql-run-btn").addEventListener("click", this.executeSQLQuery.bind(this));
    document.getElementById("sql-reset-btn").addEventListener("click", this.resetSQLPlayground.bind(this));
    this.resetSQLPlayground();
  },

  resetSQLPlayground: function() {
    document.getElementById("sql-query-input").value = `SELECT category, SUM(revenue) AS total_revenue\nFROM sales_table\nGROUP BY category\nORDER BY total_revenue DESC`;
    this.renderSQLTable(this.salesTableData);
  },

  executeSQLQuery: function() {
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
      let resultRows = [...this.salesTableData];
      
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
      
      this.renderSQLTable(resultRows);
      
    } catch (err) {
      resultsContainer.innerHTML = `<div class="sql-error-text">SQL Engine Run Error: ${err.message}. Please check spelling or query clauses.</div>`;
    }
  },

  renderSQLTable: function(rows) {
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
};
