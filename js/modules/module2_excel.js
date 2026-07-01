// ======================================================
// Module 2: Excel for Data Analytics
// Week 2
// Part 1
// ======================================================

window.HQModules = window.HQModules || {};

window.HQModules.excel = {
  id: 2,

  name: "Excel for Data Analytics",

  weeks: "Week 2",

  category: "tools",

  why:
    "Excel is one of the most widely used tools in data analytics. Before analysts work with SQL, Python, or Power BI, they usually clean, organize, summarize, and validate data in Excel. Companies still rely heavily on Excel for reporting, budgeting, dashboards, financial analysis, KPI tracking, and quick business decisions. Learning Excel teaches logical thinking, formula writing, data manipulation, automation, and report creation—the same skills used later in SQL and Python.",

  keySkills: [
    "Excel Formulas",
    "Logical Functions",
    "IF Function",
    "COUNTIF",
    "SUMIF",
    "Formula Auditing",
    "Cell References",
    "Data Cleaning",
    "Business Calculations",
    "Spreadsheet Best Practices"
  ],

  topics: [
    "Introduction to Excel Formulas",
    "Formula Syntax & Structure",
    "Cell References",
    "Relative vs Absolute References",
    "IF Function",
    "Comparison Operators",
    "Nested IF",
    "COUNTIF",
    "COUNTIF with Conditions",
    "COUNTIF Wildcards",
    "SUMIF",
    "SUMIF with Numeric Conditions",
    "Business Formula Examples",
    "Formula Best Practices"
  ],

  project:
    "Build a Sales Performance Workbook using IF, COUNTIF, and SUMIF. Create an automated sales report that calculates commissions, classifies employees, summarizes sales by department, counts completed orders, and generates business insights automatically using Excel formulas.",

  playgroundType: "excel",

  schedule: {

    week: 2,

    title: "Excel Fundamentals",

    topics: [

      {
        id: "w2-mon",
        day: "Mon",
        topic: "Excel Formulas, IF, COUNTIF & SUMIF",
        module: 2
      },

      {
        id: "w2-tue",
        day: "Tue",
        topic: "VLOOKUP & Report Building",
        module: 2
      },

      {
        id: "w2-wed",
        day: "Wed",
        topic: "Pivot Tables, Pareto Charts & Macros",
        module: 2
      },

      {
        id: "w2-thu",
        day: "Thu",
        topic: "Charts, Conditional Formatting & Dashboards",
        module: 2
      },

      {
        id: "w2-fri",
        day: "Fri",
        topic: "Advanced Excel & Capstone Project",
        module: 2
      }

    ]

  },

  flashcards: [

    {
      front: "Excel Formula",
      back:
        "A formula is an instruction beginning with '=' that tells Excel to perform a calculation automatically.",
      category: "Excel"
    },

    {
      front: "IF Function",
      back:
        "Checks a condition. If TRUE it returns one value; if FALSE it returns another. Syntax: =IF(condition,value_if_true,value_if_false)",
      category: "Excel"
    },

    {
      front: "COUNTIF",
      back:
        "Counts the number of cells meeting a specified condition. Syntax: =COUNTIF(range,criteria)",
      category: "Excel"
    },

    {
      front: "SUMIF",
      back:
        "Adds values only when a specified condition is satisfied. Syntax: =SUMIF(range,criteria,sum_range)",
      category: "Excel"
    },

    {
      front: "Relative Reference",
      back:
        "Changes automatically when copied. Example: A1 becomes A2 after dragging down.",
      category: "Excel"
    },

    {
      front: "Absolute Reference",
      back:
        "Uses $ signs to lock a cell reference. Example: $A$1 never changes when copied.",
      category: "Excel"
    },

    {
      front: "Nested IF",
      back:
        "An IF statement inside another IF statement, allowing multiple conditions.",
      category: "Excel"
    },

    {
      front: "Wildcards",
      back:
        "* matches any number of characters. ? matches one character. Used inside COUNTIF and SUMIF.",
      category: "Excel"
    }

  ],

  lessons: {

"w2-mon": `# Monday — Excel Formulas, IF, COUNTIF & SUMIF

Every spreadsheet you build depends on formulas. A formula is the brain of Excel. Instead of calculating values manually every time your data changes, formulas automatically update the results. This is why businesses rely on Excel for reporting, budgeting, forecasting, dashboards, payroll, finance, HR, inventory, and data analysis.

---

# Learning Objectives

By the end of today's lesson you will be able to:

• Understand how Excel formulas work

• Write formulas correctly

• Build logical decisions using IF

• Count records using COUNTIF

• Sum values using SUMIF

• Understand business use cases

• Avoid common formula mistakes

• Build reusable spreadsheets

---

# Part 1 — Introduction to Excel Formulas

## What is an Excel Formula?

An Excel Formula is a calculation or instruction that Excel performs automatically.

Instead of doing calculations yourself every time, Excel performs them instantly whenever data changes.

A formula ALWAYS starts with an equals sign (=).

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Formula Example</th><th>Description</th></tr></thead><tbody><tr><td>=A1+A2</td><td>Adds two cells</td></tr><tr><td>=SUM(B2:B20)</td><td>Sums a range</td></tr><tr><td>=AVERAGE(C2:C10)</td><td>Calculates average</td></tr><tr><td>=MAX(D2:D20)</td><td>Finds maximum value</td></tr><tr><td>=MIN(D2:D20)</td><td>Finds minimum value</td></tr><tr><td>=IF(B2&gt;=80,&quot;PASS&quot;,&quot;FAIL&quot;)</td><td>Logical condition</td></tr></tbody></table></div>

---

## Why Formulas Matter

Imagine a company receives 50,000 sales transactions every month.

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Without Formulas</th><th>With Excel Formulas</th></tr></thead><tbody><tr><td>Calculate totals manually</td><td>✓ Everything updates automatically</td></tr><tr><td>Calculate commissions manually</td><td>✓ Reports become dynamic</td></tr><tr><td>Calculate taxes manually</td><td>✓ Human errors decrease</td></tr><tr><td>Count orders manually</td><td>✓ Reports become reusable</td></tr><tr><td>Create summaries manually</td><td>✓ Analysis becomes faster</td></tr></tbody></table></div>

---

## Benefits of Using Formulas

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Benefit</th><th>Description</th></tr></thead><tbody><tr><td>Automation</td><td>One formula replaces thousands of manual calculations</td></tr><tr><td>Accuracy</td><td>Excel performs calculations consistently</td></tr><tr><td>Dynamic Updates</td><td>Results update automatically when source data changes</td></tr><tr><td>Time Saving</td><td>Hours of manual work become seconds</td></tr><tr><td>Professional Reporting</td><td>Dashboards and KPI reports update automatically</td></tr></tbody></table></div>

---

# Formula Structure

Every formula has three parts.

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Part</th><th>Example</th><th>Purpose</th></tr></thead><tbody><tr><td>Equal Sign (=)</td><td>=</td><td>Tells Excel this is a formula</td></tr><tr><td>Values or Cell References</td><td>A1, B5, 100, &quot;Sales&quot;</td><td>What to calculate</td></tr><tr><td>Function (optional)</td><td>SUM, IF, COUNTIF, AVERAGE</td><td>How to calculate</td></tr></tbody></table></div>

---

**Example Breakdown**

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Part</th><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>Function</td><td>SUM</td><td>Add up values</td></tr><tr><td>Range</td><td>B2:B20</td><td>Cells to add</td></tr><tr><td>Result</td><td>Total Sales</td><td>Output</td></tr></tbody></table></div>

Formula: \`=SUM(B2:B20)\`

---

**Real Business Example**

Imagine Column B contains daily revenue.

Instead of adding 1200+1500+1800+...

Use \`=SUM(B2:B366)\`

Whenever a new day is added the total updates automatically.

---

# Cell References

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Type</th><th>Example</th><th>Description</th></tr></thead><tbody><tr><td>Bad Practice</td><td>=100+250+500</td><td>Hardcoded — never updates</td></tr><tr><td>Good Practice</td><td>=A2+B2+C2</td><td>Dynamic — updates with data</td></tr></tbody></table></div>

Because changing cell values automatically updates every calculation.

---

# Relative vs Absolute Cell References

One of the biggest mistakes beginners make is not understanding how Excel changes formulas when they are copied.

## 1. Relative Reference

A relative reference changes automatically when copied.

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Cell</th><th>Formula</th><th>After Copy Down</th></tr></thead><tbody><tr><td>C2</td><td>=A2+B2</td><td>—</td></tr><tr><td>C3</td><td>=A3+B3</td><td>Auto-adjusted</td></tr><tr><td>C4</td><td>=A4+B4</td><td>Auto-adjusted</td></tr></tbody></table></div>

Use relative references when every row performs the same calculation.

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Use Case</th></tr></thead><tbody><tr><td>Total Price</td></tr><tr><td>Salary Calculation</td></tr><tr><td>Marks Total</td></tr><tr><td>Profit</td></tr><tr><td>Revenue</td></tr></tbody></table></div>

---

## Example

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Total</th></tr></thead><tbody><tr><td>Laptop</td><td>50000</td><td>2</td><td>=B2*C2</td></tr><tr><td>Mouse</td><td>800</td><td>5</td><td>=B3*C3</td></tr><tr><td>Keyboard</td><td>1500</td><td>3</td><td>=B4*C4</td></tr></tbody></table></div>

Notice that after dragging the formula downward Excel automatically changes the row numbers. No manual editing is required.

---

## 2. Absolute Reference

Sometimes you DON'T want Excel to change a reference. Use $ to lock it.

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Formula</th><th>Behavior</th></tr></thead><tbody><tr><td>=B2*$F$1</td><td>Only B changes when copied; F1 stays fixed</td></tr><tr><td>=B3*$F$1</td><td>B3 auto-adjusted, F1 still locked</td></tr><tr><td>=B4*$F$1</td><td>B4 auto-adjusted, F1 still locked</td></tr></tbody></table></div>

---

## Types of References

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Reference</th><th>Meaning</th></tr></thead><tbody><tr><td>A1</td><td>Relative — both row and column change</td></tr><tr><td>$A$1</td><td>Absolute — nothing changes</td></tr><tr><td>A$1</td><td>Row Locked — only column changes</td></tr><tr><td>$A1</td><td>Column Locked — only row changes</td></tr></tbody></table></div>

---

## Real Business Example — Monthly Sales with Commission

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Product</th><th>Sales</th><th>Commission Rate (G1=5%)</th><th>Formula</th></tr></thead><tbody><tr><td>Laptop</td><td>80000</td><td>5%</td><td>=B2*$G$1</td></tr><tr><td>Mouse</td><td>12000</td><td>5%</td><td>=B3*$G$1</td></tr><tr><td>Keyboard</td><td>15000</td><td>5%</td><td>=B4*$G$1</td></tr></tbody></table></div>

Every product uses exactly the same commission percentage via the locked reference $G$1.

---

## Interview Question

**Q. Why should we use Absolute References?**

Absolute references keep specific cells fixed while copying formulas.

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Typical Use Cases</th></tr></thead><tbody><tr><td>Tax Rate</td></tr><tr><td>GST</td></tr><tr><td>Exchange Rate</td></tr><tr><td>Commission Percentage</td></tr><tr><td>Fixed Constants</td></tr></tbody></table></div>

---

# Part 2 — IF Function

The IF Function allows Excel to make decisions. Instead of only calculating numbers, Excel can think logically.

## IF Syntax

\`=IF(condition, value_if_true, value_if_false)\`

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Part</th><th>Example</th><th>Description</th></tr></thead><tbody><tr><td>Condition</td><td>B2&gt;=80</td><td>The question Excel asks</td></tr><tr><td>Value if TRUE</td><td>&quot;PASS&quot;</td><td>Shown when condition is true</td></tr><tr><td>Value if FALSE</td><td>&quot;FAIL&quot;</td><td>Shown when condition is false</td></tr></tbody></table></div>

---

## Basic Example — Student Marks

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Student</th><th>Marks</th><th>Formula</th><th>Result</th></tr></thead><tbody><tr><td>John</td><td>85</td><td>=IF(B2&gt;=80,&quot;PASS&quot;,&quot;FAIL&quot;)</td><td>PASS</td></tr><tr><td>Sarah</td><td>72</td><td>=IF(B3&gt;=80,&quot;PASS&quot;,&quot;FAIL&quot;)</td><td>FAIL</td></tr><tr><td>Mike</td><td>90</td><td>=IF(B4&gt;=80,&quot;PASS&quot;,&quot;FAIL&quot;)</td><td>PASS</td></tr></tbody></table></div>

---

## Reading the Formula Like English

\`=IF(B2>=80,"PASS","FAIL")\`

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Step</th><th>Meaning</th></tr></thead><tbody><tr><td>IF</td><td>Start the condition check</td></tr><tr><td>B2&gt;=80</td><td>Are marks greater than or equal to 80?</td></tr><tr><td>&quot;PASS&quot;</td><td>If YES, show PASS</td></tr><tr><td>&quot;FAIL&quot;</td><td>If NO, show FAIL</td></tr></tbody></table></div>

---

# Comparison Operators

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Operator</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td>=</td><td>Equal To</td><td>=C2=&quot;Sales&quot;</td></tr><tr><td>&gt;</td><td>Greater Than</td><td>=B2&gt;50</td></tr><tr><td>&lt;</td><td>Less Than</td><td>=A2&lt;100</td></tr><tr><td>&gt;=</td><td>Greater Than or Equal To</td><td>=B2&gt;=80</td></tr><tr><td>&lt;=</td><td>Less Than or Equal To</td><td>=B2&lt;=100</td></tr><tr><td>&lt;&gt;</td><td>Not Equal To</td><td>=D2&lt;&gt;0</td></tr></tbody></table></div>

---

## IF with Numbers — Commission Example

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Sales</th><th>Condition</th><th>Commission</th><th>Formula</th></tr></thead><tbody><tr><td>80000</td><td>&gt;50000</td><td>10%</td><td>=IF(B2&gt;50000,0.10,0.05)</td></tr><tr><td>25000</td><td>&lt;=50000</td><td>5%</td><td>=IF(B2&gt;50000,0.10,0.05)</td></tr></tbody></table></div>

---

## Business Uses of IF

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Business Scenario</th><th>IF Logic</th></tr></thead><tbody><tr><td>Employee Bonus</td><td>Sales &gt; target → Bonus</td></tr><tr><td>Loan Approval</td><td>Credit score &gt; 700 → Approved</td></tr><tr><td>Sales Incentives</td><td>Revenue &gt; quota → Incentive</td></tr><tr><td>Stock Availability</td><td>Stock &gt; 0 → In Stock</td></tr><tr><td>Attendance</td><td>Days &gt; 25 → Present</td></tr><tr><td>Customer Classification</td><td>Purchases &gt; 10000 → Premium</td></tr><tr><td>Credit Risk</td><td>Default &gt; 1 → High Risk</td></tr></tbody></table></div>

---

## IF with Text

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Department</th><th>Formula</th><th>Result</th></tr></thead><tbody><tr><td>Sales</td><td>=IF(A2=&quot;Sales&quot;,&quot;Commission Eligible&quot;,&quot;No Commission&quot;)</td><td>Commission Eligible</td></tr><tr><td>Marketing</td><td>=IF(A3=&quot;Sales&quot;,&quot;Commission Eligible&quot;,&quot;No Commission&quot;)</td><td>No Commission</td></tr><tr><td>IT</td><td>=IF(A4=&quot;Sales&quot;,&quot;Commission Eligible&quot;,&quot;No Commission&quot;)</td><td>No Commission</td></tr></tbody></table></div>

**Note:** Text values ALWAYS go inside quotation marks.

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Correct</th><th>Wrong</th></tr></thead><tbody><tr><td>&quot;Sales&quot;</td><td>Sales</td></tr><tr><td>&quot;New York&quot;</td><td>New York</td></tr></tbody></table></div>

---

## Common IF Mistakes

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Mistake</th><th>Wrong</th><th>Correct</th></tr></thead><tbody><tr><td>Forgetting =</td><td>IF(B2&gt;=80,&quot;PASS&quot;,&quot;FAIL&quot;)</td><td>=IF(B2&gt;=80,&quot;PASS&quot;,&quot;FAIL&quot;)</td></tr><tr><td>Missing Quotes</td><td>=IF(A2=Sales,&quot;Yes&quot;,&quot;No&quot;)</td><td>=IF(A2=&quot;Sales&quot;,&quot;Yes&quot;,&quot;No&quot;)</td></tr><tr><td>Missing Commas</td><td>=IF(B2&gt;=80 &quot;PASS&quot; &quot;FAIL&quot;)</td><td>=IF(B2&gt;=80,&quot;PASS&quot;,&quot;FAIL&quot;)</td></tr></tbody></table></div>

---

## Hands-on Exercise 1 — Pass or Fail

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Name</th><th>Marks</th><th>Formula</th><th>Expected Result</th></tr></thead><tbody><tr><td>John</td><td>90</td><td>=IF(B2&gt;=80,&quot;PASS&quot;,&quot;FAIL&quot;)</td><td>PASS</td></tr><tr><td>Sarah</td><td>75</td><td>=IF(B3&gt;=80,&quot;PASS&quot;,&quot;FAIL&quot;)</td><td>FAIL</td></tr><tr><td>Mike</td><td>85</td><td>=IF(B4&gt;=80,&quot;PASS&quot;,&quot;FAIL&quot;)</td><td>PASS</td></tr></tbody></table></div>

---

## Hands-on Exercise 2 — Sales Commission

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Rule</th><th>Sales</th><th>Commission</th></tr></thead><tbody><tr><td>Sales &gt;50000</td><td>80000</td><td>10%</td></tr><tr><td>Otherwise</td><td>25000</td><td>5%</td></tr></tbody></table></div>

Formula: \`=IF(B2>50000,0.10,0.05)\` — Format result as Percentage.

---

## Interview Tip

"The IF function performs conditional logic. It evaluates a condition and returns one value when the condition is TRUE and another value when the condition is FALSE. It is widely used for grading systems, commissions, business rules, employee categorization, inventory management and financial analysis."

---

# Part 3 — Nested IF Function

The basic IF function allows only TWO possible outcomes. For multiple outcomes, use Nested IF — placing one IF inside another.

## Why Nested IF?

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Marks</th><th>Grade Required</th></tr></thead><tbody><tr><td>≥90</td><td>Grade A</td></tr><tr><td>≥80</td><td>Grade B</td></tr><tr><td>≥70</td><td>Grade C</td></tr><tr><td>Below 70</td><td>Grade F</td></tr></tbody></table></div>

A normal IF cannot handle four results. Nested IF solves this.

---

## Nested IF Syntax

\`\`\`
=IF(condition1, result1,
  IF(condition2, result2,
    IF(condition3, result3,
      result4)))
\`\`\`

Excel checks conditions from LEFT to RIGHT. The moment one condition becomes TRUE, Excel stops checking.

---

## Example — Grade Calculator

Formula: \`=IF(B2>=90,"A", IF(B2>=80,"B", IF(B2>=70,"C", "F")))\`

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Marks</th><th>Grade</th></tr></thead><tbody><tr><td>95</td><td>A</td></tr><tr><td>84</td><td>B</td></tr><tr><td>75</td><td>C</td></tr><tr><td>52</td><td>F</td></tr></tbody></table></div>

---

## Reading Nested IF — Step by Step (Marks = 84)

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Step</th><th>Condition</th><th>Result</th></tr></thead><tbody><tr><td>1</td><td>Is 84 ≥90?</td><td>No → go to next</td></tr><tr><td>2</td><td>Is 84 ≥80?</td><td>Yes → return Grade B</td></tr><tr><td>3</td><td>(ignored)</td><td>Excel stops</td></tr></tbody></table></div>

---

## Example 2 — Employee Bonus Rules

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Sales Range</th><th>Bonus %</th></tr></thead><tbody><tr><td>Above ₹100000</td><td>5%</td></tr><tr><td>Above ₹50000</td><td>3%</td></tr><tr><td>Above ₹25000</td><td>1%</td></tr><tr><td>Below ₹25000</td><td>0%</td></tr></tbody></table></div>

Formula: \`=IF(B2>100000,0.05, IF(B2>50000,0.03, IF(B2>25000,0.01, 0)))\`

---

## Business Use Cases for Nested IF

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Scenario</th><th>Levels</th></tr></thead><tbody><tr><td>Employee Performance</td><td>Poor / Average / Good / Excellent</td></tr><tr><td>Credit Score</td><td>Low / Medium / High / Excellent</td></tr><tr><td>Tax Slab</td><td>5% / 10% / 20% / 30%</td></tr><tr><td>Salary Grade</td><td>Grade A / B / C / D</td></tr><tr><td>Scholarship</td><td>Full / Partial / None</td></tr><tr><td>Order Priority</td><td>Low / Medium / High / Urgent</td></tr></tbody></table></div>

---

## Best Practice

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Condition Count</th><th>Recommendation</th></tr></thead><tbody><tr><td>≤5 conditions</td><td>Use Nested IF</td></tr><tr><td>&gt;5 conditions</td><td>Use IFS(), XLOOKUP(), or Lookup Tables</td></tr></tbody></table></div>

---

# Part 4 — COUNTIF Function

COUNTIF counts cells that satisfy a condition. Instead of adding values, COUNTIF counts records.

## Syntax

\`=COUNTIF(range, criteria)\`

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Argument</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>range</td><td>Cells to check</td><td>A2:A6</td></tr><tr><td>criteria</td><td>Condition to match</td><td>&quot;Sales&quot; or &quot;&gt;80&quot;</td></tr></tbody></table></div>

---

## Example Data — Marks

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Marks</th></tr></thead><tbody><tr><td>90</td></tr><tr><td>75</td></tr><tr><td>81</td></tr><tr><td>65</td></tr><tr><td>88</td></tr></tbody></table></div>

Formula: \`=COUNTIF(A2:A6,">80")\` → **Result: 3**

---

## COUNTIF with Text — Department List

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Row</th><th>Department</th><th>Counted?</th></tr></thead><tbody><tr><td>A2</td><td>Sales</td><td>✓</td></tr><tr><td>A3</td><td>HR</td><td>—</td></tr><tr><td>A4</td><td>Sales</td><td>✓</td></tr><tr><td>A5</td><td>IT</td><td>—</td></tr><tr><td>A6</td><td>Sales</td><td>✓</td></tr></tbody></table></div>

Formula: \`=COUNTIF(A2:A6,"Sales")\` → **Result: 3**

---

## Business Applications

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Question</th><th>COUNTIF Formula</th></tr></thead><tbody><tr><td>How many employees passed?</td><td>=COUNTIF(B:B,&quot;&gt;=60&quot;)</td></tr><tr><td>How many orders completed?</td><td>=COUNTIF(A:A,&quot;Completed&quot;)</td></tr><tr><td>How many Premium customers?</td><td>=COUNTIF(C:C,&quot;Premium&quot;)</td></tr><tr><td>How many invoices unpaid?</td><td>=COUNTIF(D:D,&quot;Unpaid&quot;)</td></tr><tr><td>How many products Out of Stock?</td><td>=COUNTIF(E:E,&quot;Out of Stock&quot;)</td></tr><tr><td>How many students failed?</td><td>=COUNTIF(B:B,&quot;&lt;60&quot;)</td></tr></tbody></table></div>

---

## COUNTIF Comparison Operators

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Operator</th><th>Formula</th><th>Meaning</th></tr></thead><tbody><tr><td>&gt;</td><td>=COUNTIF(B:B,&quot;&gt;5000&quot;)</td><td>Greater than 5000</td></tr><tr><td>&lt;</td><td>=COUNTIF(B:B,&quot;&lt;100&quot;)</td><td>Less than 100</td></tr><tr><td>=</td><td>=COUNTIF(A:A,&quot;Sales&quot;)</td><td>Equal to Sales</td></tr><tr><td>&lt;&gt;</td><td>=COUNTIF(A:A,&quot;&lt;&gt;Sales&quot;)</td><td>Not equal to Sales</td></tr><tr><td>&gt;=</td><td>=COUNTIF(B:B,&quot;&gt;=80&quot;)</td><td>Greater than or equal to 80</td></tr><tr><td>&lt;=</td><td>=COUNTIF(B:B,&quot;&lt;=100&quot;)</td><td>Less than or equal to 100</td></tr></tbody></table></div>

---

# COUNTIF Wildcards

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Wildcard</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td>*</td><td>Matches any number of characters</td><td>&quot;New*&quot;</td></tr><tr><td>?</td><td>Matches exactly one character</td><td>&quot;Jo?n&quot;</td></tr></tbody></table></div>

---

## Wildcard Examples

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Pattern</th><th>Formula</th><th>Matches</th></tr></thead><tbody><tr><td>Starts With</td><td>=COUNTIF(A:A,&quot;New*&quot;)</td><td>New York, New Delhi, New Jersey</td></tr><tr><td>Ends With</td><td>=COUNTIF(A:A,&quot;*City&quot;)</td><td>Kansas City, Mexico City</td></tr><tr><td>Contains</td><td>=COUNTIF(A:A,&quot;*York*&quot;)</td><td>York, New York, North Yorkshire</td></tr></tbody></table></div>

---

## Wildcard Exercise — Customer Names

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Row</th><th>Name</th><th>Matched by &quot;John*&quot;?</th></tr></thead><tbody><tr><td>A2</td><td>John</td><td>✓</td></tr><tr><td>A3</td><td>Johnny</td><td>✓</td></tr><tr><td>A4</td><td>Johnson</td><td>—</td></tr><tr><td>A5</td><td>Alice</td><td>—</td></tr></tbody></table></div>

Formula: \`=COUNTIF(A:A,"John*")\` → **Result: 2**

---

## COUNTIF Exercise — Survey Results

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Row</th><th>Response</th><th>Counted?</th></tr></thead><tbody><tr><td>A2</td><td>Yes</td><td>✓</td></tr><tr><td>A3</td><td>No</td><td>—</td></tr><tr><td>A4</td><td>Yes</td><td>✓</td></tr><tr><td>A5</td><td>Maybe</td><td>—</td></tr><tr><td>A6</td><td>Yes</td><td>✓</td></tr><tr><td>A7</td><td>No</td><td>—</td></tr></tbody></table></div>

Formula: \`=COUNTIF(A:A,"Yes")\` → **Expected Result: 3**

---

## Another Exercise — Employee Ratings

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Row</th><th>Rating</th><th>Counted (&gt;80)?</th></tr></thead><tbody><tr><td>B2</td><td>95</td><td>✓</td></tr><tr><td>B3</td><td>88</td><td>✓</td></tr><tr><td>B4</td><td>72</td><td>—</td></tr><tr><td>B5</td><td>65</td><td>—</td></tr><tr><td>B6</td><td>91</td><td>✓</td></tr></tbody></table></div>

Formula: \`=COUNTIF(B:B,">80")\` → **Answer: 3**

---

## Common COUNTIF Mistakes

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Mistake</th><th>Wrong</th><th>Correct</th></tr></thead><tbody><tr><td>Missing Quotes around operator</td><td>=COUNTIF(B:B,&gt;80)</td><td>=COUNTIF(B:B,&quot;&gt;80&quot;)</td></tr><tr><td>Wrong Range</td><td>Selecting wrong column</td><td>Verify range before running</td></tr></tbody></table></div>

---

## Interview Question — COUNT vs COUNTIF

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Function</th><th>Purpose</th><th>Example</th></tr></thead><tbody><tr><td>COUNT</td><td>Counts numeric values only</td><td>=COUNT(B:B)</td></tr><tr><td>COUNTIF</td><td>Counts cells matching a condition</td><td>=COUNTIF(B:B,&quot;&gt;50&quot;)</td></tr></tbody></table></div>

---

## Mini Challenge — Employee Status

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Row</th><th>Status</th><th>Counted?</th></tr></thead><tbody><tr><td>A2</td><td>Completed</td><td>✓</td></tr><tr><td>A3</td><td>Completed</td><td>✓</td></tr><tr><td>A4</td><td>Pending</td><td>—</td></tr><tr><td>A5</td><td>Completed</td><td>✓</td></tr><tr><td>A6</td><td>Cancelled</td><td>—</td></tr></tbody></table></div>

Formula: \`=COUNTIF(A2:A6,"Completed")\` → **Answer: 3**

---

# Part 5 — SUMIF Function

COUNTIF tells you **HOW MANY**. SUMIF tells you **HOW MUCH**.

Instead of counting records, SUMIF adds values that satisfy a condition.

## SUMIF Syntax

\`=SUMIF(range, criteria, sum_range)\`

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Argument</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>range</td><td>Cells where Excel checks the condition</td><td>A2:A6</td></tr><tr><td>criteria</td><td>The condition to match</td><td>&quot;Laptop&quot;</td></tr><tr><td>sum_range</td><td>Cells Excel actually adds up</td><td>B2:B6</td></tr></tbody></table></div>

---

## Example — Laptop Sales

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Product</th><th>Sales</th></tr></thead><tbody><tr><td>Laptop</td><td>50000</td></tr><tr><td>Mouse</td><td>1200</td></tr><tr><td>Laptop</td><td>42000</td></tr><tr><td>Keyboard</td><td>3000</td></tr><tr><td>Laptop</td><td>38000</td></tr></tbody></table></div>

Formula: \`=SUMIF(A2:A6,"Laptop",B2:B6)\`

**Result: 130000** (50000 + 42000 + 38000)

---

## Example 2 — Department Salary

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Department</th><th>Salary</th></tr></thead><tbody><tr><td>Sales</td><td>50000</td></tr><tr><td>HR</td><td>42000</td></tr><tr><td>Sales</td><td>60000</td></tr><tr><td>IT</td><td>45000</td></tr><tr><td>Sales</td><td>70000</td></tr></tbody></table></div>

Formula: \`=SUMIF(A2:A6,"Sales",B2:B6)\` → **Result: 180000**

---

## Numeric Conditions — Sales Above ₹5000

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Sales</th></tr></thead><tbody><tr><td>4000</td></tr><tr><td>8000</td></tr><tr><td>6000</td></tr><tr><td>1500</td></tr><tr><td>9000</td></tr></tbody></table></div>

Formula: \`=SUMIF(B2:B6,">5000")\` → **Result: 23000** (8000 + 6000 + 9000)

---

## Real Business Applications

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Scenario</th><th>SUMIF Formula</th></tr></thead><tbody><tr><td>Total Sales by Department</td><td>=SUMIF(Dept,&quot;Sales&quot;,Sales)</td></tr><tr><td>Total Revenue by Region</td><td>=SUMIF(Region,&quot;North&quot;,Revenue)</td></tr><tr><td>Total Orders above ₹5000</td><td>=SUMIF(Amount,&quot;&gt;5000&quot;,Amount)</td></tr><tr><td>Total HR Salary</td><td>=SUMIF(Dept,&quot;HR&quot;,Salary)</td></tr><tr><td>Total Profit for Product A</td><td>=SUMIF(Product,&quot;A&quot;,Profit)</td></tr><tr><td>Total Marketing Expenses</td><td>=SUMIF(Dept,&quot;Marketing&quot;,Expense)</td></tr></tbody></table></div>

---

## Business Example — Employee Salary by Department

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Employee</th><th>Department</th><th>Salary</th></tr></thead><tbody><tr><td>John</td><td>Sales</td><td>50000</td></tr><tr><td>Sarah</td><td>HR</td><td>42000</td></tr><tr><td>Mike</td><td>Sales</td><td>70000</td></tr><tr><td>David</td><td>IT</td><td>60000</td></tr></tbody></table></div>

Formula: \`=SUMIF(B2:B5,"Sales",C2:C5)\` → **Output: 120000**

---

# SUMIF vs COUNTIF

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Function</th><th>Purpose</th><th>Returns</th></tr></thead><tbody><tr><td>COUNTIF</td><td>Counts records matching condition</td><td>Number of rows</td></tr><tr><td>SUMIF</td><td>Adds values matching condition</td><td>Sum of values</td></tr></tbody></table></div>

**Example:**

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Orders</th><th>Sales (₹)</th></tr></thead><tbody><tr><td>Completed</td><td>200</td></tr><tr><td>Completed</td><td>300</td></tr><tr><td>Pending</td><td>150</td></tr><tr><td>Completed</td><td>500</td></tr></tbody></table></div>

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Function</th><th>Formula</th><th>Result</th></tr></thead><tbody><tr><td>COUNTIF</td><td>=COUNTIF(A:A,&quot;Completed&quot;)</td><td>3</td></tr><tr><td>SUMIF</td><td>=SUMIF(A:A,&quot;Completed&quot;,B:B)</td><td>1000</td></tr></tbody></table></div>

---

# Hands-on Exercise — Sales Report

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Category</th><th>Revenue</th></tr></thead><tbody><tr><td>Laptop</td><td>80000</td></tr><tr><td>Laptop</td><td>50000</td></tr><tr><td>Mouse</td><td>2500</td></tr><tr><td>Laptop</td><td>30000</td></tr><tr><td>Keyboard</td><td>3500</td></tr></tbody></table></div>

**Question:** Find total Laptop Revenue.

Formula: \`=SUMIF(A2:A6,"Laptop",B2:B6)\` → **Expected Answer: 160000**

---

# Formula Best Practices

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Practice</th><th>Wrong</th><th>Correct</th></tr></thead><tbody><tr><td>Use cell references</td><td>=100+250+500</td><td>=A2+A3+A4</td></tr><tr><td>Use descriptive headers</td><td>Column1, Column2</td><td>Sales, Profit, Commission</td></tr><tr><td>Lock constants</td><td>=B2*5%</td><td>=B2*$G$1</td></tr><tr><td>Keep formulas simple</td><td>Nest 10 IFs</td><td>Break into helper columns</td></tr><tr><td>Verify after copy</td><td>Assume it works</td><td>Check first/middle/last row</td></tr></tbody></table></div>

---

# Common Formula Errors

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Error</th><th>Cause</th><th>Solution</th></tr></thead><tbody><tr><td>#DIV/0!</td><td>Dividing by zero</td><td>=IF(B2=0,&quot;&quot;,A2/B2)</td></tr><tr><td>#NAME?</td><td>Misspelled function name</td><td>=SUM not =SM</td></tr><tr><td>#VALUE!</td><td>Calculating text as number</td><td>Check data types</td></tr><tr><td>#####</td><td>Column too narrow</td><td>Widen the column</td></tr><tr><td>#REF!</td><td>Referenced cell was deleted</td><td>Fix range references</td></tr></tbody></table></div>

---

## Formula Auditing

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Step</th><th>Action</th></tr></thead><tbody><tr><td>1</td><td>Check the first row result manually</td></tr><tr><td>2</td><td>Check a middle row</td></tr><tr><td>3</td><td>Check the last row</td></tr><tr><td>4</td><td>Spot-check random records</td></tr><tr><td>5</td><td>Compare against manual calculations</td></tr></tbody></table></div>

---

# Keyboard Shortcuts

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Shortcut</th><th>Action</th></tr></thead><tbody><tr><td>F2</td><td>Edit Formula</td></tr><tr><td>Ctrl+C</td><td>Copy</td></tr><tr><td>Ctrl+V</td><td>Paste</td></tr><tr><td>Ctrl+D</td><td>Fill Down</td></tr><tr><td>Ctrl+R</td><td>Fill Right</td></tr><tr><td>Ctrl+Arrow</td><td>Jump to Data Edge</td></tr><tr><td>Ctrl+Shift+Arrow</td><td>Select Entire Data</td></tr><tr><td>Ctrl+\`</td><td>Show Formulas</td></tr><tr><td>F4</td><td>Toggle Absolute References</td></tr></tbody></table></div>

---

# Interview Questions

## Q1 — Formula vs Function

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Type</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>Formula</td><td>Any calculation beginning with &quot;=&quot;</td><td>=A1+B1</td></tr><tr><td>Function</td><td>A predefined formula built into Excel</td><td>=SUM(), =IF(), =COUNTIF()</td></tr></tbody></table></div>

Every Function is a Formula, but not every Formula is a Function.

---

## Q2 — Relative vs Absolute References

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Type</th><th>Behavior</th><th>When to Use</th></tr></thead><tbody><tr><td>Relative (A1)</td><td>Changes when copied</td><td>Row-by-row calculations</td></tr><tr><td>Absolute ($A$1)</td><td>Never changes</td><td>Constants like GST, Tax Rate</td></tr></tbody></table></div>

---

## Q3 — When to use COUNTIF?

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Scenario</th></tr></thead><tbody><tr><td>Passed Students</td></tr><tr><td>Completed Orders</td></tr><tr><td>Premium Customers</td></tr><tr><td>Pending Tickets</td></tr></tbody></table></div>

---

## Q4 — When to use SUMIF?

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Scenario</th></tr></thead><tbody><tr><td>Total Sales</td></tr><tr><td>Total Revenue</td></tr><tr><td>Total Profit</td></tr><tr><td>Total Salary</td></tr><tr><td>Total Expenses</td></tr></tbody></table></div>

---

## Q5 — Why is Excel important for Data Analysts?

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Excel Use Case</th></tr></thead><tbody><tr><td>Cleaning data quickly</td></tr><tr><td>Exploring datasets</td></tr><tr><td>Quick reporting</td></tr><tr><td>Dashboard preparation</td></tr><tr><td>Business calculations</td></tr><tr><td>Ad-hoc analysis before SQL or Python</td></tr></tbody></table></div>

---

# Practice Problems

## Problem 1 — Employee Data

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Employee</th><th>Department</th><th>Salary</th></tr></thead><tbody><tr><td>John</td><td>Sales</td><td>45000</td></tr><tr><td>Sarah</td><td>Sales</td><td>60000</td></tr><tr><td>Mike</td><td>HR</td><td>40000</td></tr><tr><td>David</td><td>Sales</td><td>70000</td></tr></tbody></table></div>

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Question</th><th>Formula</th></tr></thead><tbody><tr><td>Count Sales employees</td><td>=COUNTIF(B:B,&quot;Sales&quot;)</td></tr><tr><td>Find total Sales salary</td><td>=SUMIF(B:B,&quot;Sales&quot;,C:C)</td></tr><tr><td>Count employees earning above ₹50000</td><td>=COUNTIF(C:C,&quot;&gt;50000&quot;)</td></tr></tbody></table></div>

---

## Problem 2 — Student Marks

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Marks</th></tr></thead><tbody><tr><td>95</td></tr><tr><td>78</td></tr><tr><td>84</td></tr><tr><td>61</td></tr><tr><td>90</td></tr></tbody></table></div>

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Question</th><th>Formula</th></tr></thead><tbody><tr><td>Classify PASS or FAIL</td><td>=IF(A2&gt;=60,&quot;PASS&quot;,&quot;FAIL&quot;)</td></tr><tr><td>Count students above 80</td><td>=COUNTIF(A:A,&quot;&gt;80&quot;)</td></tr><tr><td>Total marks above 80</td><td>=SUMIF(A:A,&quot;&gt;80&quot;,A:A)</td></tr></tbody></table></div>

---

## Problem 3 — Monthly Revenue

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Month</th><th>Revenue</th></tr></thead><tbody><tr><td>Jan</td><td>12000</td></tr><tr><td>Feb</td><td>15000</td></tr><tr><td>Mar</td><td>9000</td></tr><tr><td>Apr</td><td>18000</td></tr><tr><td>May</td><td>22000</td></tr></tbody></table></div>

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Question</th><th>Formula</th></tr></thead><tbody><tr><td>Count months above ₹15000</td><td>=COUNTIF(B:B,&quot;&gt;15000&quot;)</td></tr><tr><td>Total revenue above ₹10000</td><td>=SUMIF(B:B,&quot;&gt;10000&quot;,B:B)</td></tr><tr><td>Assign Bonus using IF</td><td>=IF(B2&gt;15000,&quot;Bonus&quot;,&quot;No Bonus&quot;)</td></tr></tbody></table></div>

---

# Monday Cheat Sheet

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Function</th><th>Syntax</th><th>Purpose</th></tr></thead><tbody><tr><td>IF</td><td>=IF(condition, true, false)</td><td>Logical decision</td></tr><tr><td>COUNTIF</td><td>=COUNTIF(range, criteria)</td><td>Count matching records</td></tr><tr><td>SUMIF</td><td>=SUMIF(range, criteria, sum_range)</td><td>Sum matching values</td></tr></tbody></table></div>

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Reference Type</th><th>Symbol</th><th>Example</th></tr></thead><tbody><tr><td>Relative</td><td>None</td><td>A1</td></tr><tr><td>Absolute</td><td>$</td><td>$A$1</td></tr><tr><td>Wildcard (any)</td><td>*</td><td>&quot;New*&quot;</td></tr><tr><td>Wildcard (one char)</td><td>?</td><td>&quot;Jo?n&quot;</td></tr></tbody></table></div>

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Operator</th><th>Meaning</th></tr></thead><tbody><tr><td>&gt;</td><td>Greater Than</td></tr><tr><td>&lt;</td><td>Less Than</td></tr><tr><td>&gt;=</td><td>Greater Than or Equal To</td></tr><tr><td>&lt;=</td><td>Less Than or Equal To</td></tr><tr><td>=</td><td>Equal To</td></tr><tr><td>&lt;&gt;</td><td>Not Equal To</td></tr></tbody></table></div>

---

# Monday Summary

Today you learned:

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Topic</th><th>✓</th></tr></thead><tbody><tr><td>Excel Formula Basics</td><td>✓</td></tr><tr><td>Formula Structure</td><td>✓</td></tr><tr><td>Relative References</td><td>✓</td></tr><tr><td>Absolute References</td><td>✓</td></tr><tr><td>IF Function</td><td>✓</td></tr><tr><td>Comparison Operators</td><td>✓</td></tr><tr><td>Nested IF</td><td>✓</td></tr><tr><td>COUNTIF</td><td>✓</td></tr><tr><td>COUNTIF Wildcards</td><td>✓</td></tr><tr><td>SUMIF</td><td>✓</td></tr><tr><td>Formula Errors</td><td>✓</td></tr><tr><td>Formula Auditing</td><td>✓</td></tr><tr><td>Business Examples</td><td>✓</td></tr><tr><td>Interview Questions</td><td>✓</td></tr><tr><td>Practice Problems</td><td>✓</td></tr><tr><td>Keyboard Shortcuts</td><td>✓</td></tr></tbody></table></div>

These concepts form the foundation of every Excel report. Nearly every business workbook uses IF, COUNTIF, and SUMIF. Mastering these functions will make building dashboards, reports, and automation much easier.

---

🎉 Monday Complete!

Tomorrow's Topics:

• VLOOKUP
• Report Building
• Multi-table Lookups
• Cross-sheet References
• Building Professional Excel Reports

`

  }

};
