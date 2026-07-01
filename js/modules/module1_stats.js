// Module 1: Statistics & Probability — Full Course Content
window.HQModules = window.HQModules || {};

window.HQModules.stats = {
  id: 1,
  name: "Statistics & Probability",
  weeks: "Week 1",
  category: "fundamentals",
  why: "Numbers without statistics are just noise. Statistics teaches analysts HOW to trust their findings. Without it, you might see a 5% sales increase and call it a trend — when it's just random variation. We teach this first so every later analysis is built on solid ground.",
  keySkills: ["Mean / Median / Mode", "Normal Distribution", "Hypothesis Testing", "A/B Testing", "Correlation", "p-values"],
  topics: [
    "Mean, Median, Mode — Central Tendency for any dataset",
    "Variance & Standard Deviation — Measuring spread in real units",
    "68-95-99.7 Rule — Anomaly detection with the bell curve",
    "Probability Basics — P(A), P(A AND B), P(A OR B), Conditional",
    "Normal Distribution & Z-Scores — Standardizing data",
    "Correlation vs. Covariance — Direction vs. Strength of relationship",
    "Correlation Heatmaps — Reading and building with Python",
    "Hypothesis Testing — Null vs. Alternative hypotheses",
    "p-value & Significance Level (Alpha) — Deciding what is 'real'",
    "Type I & Type II Errors — False positives and false negatives",
    "Confidence Intervals — Range estimation with certainty levels",
    "A/B Testing Design — Control groups, power, and sample size"
  ],
  project: "Run a real A/B test on sample marketing data — decide which campaign won and explain why using statistical significance. Calculate summary statistics on a sales dataset using Python and build a correlation heatmap.",
  playgroundType: "stats",

  schedule: {
    week: 1,
    title: "Statistics & Probability",
    topics: [
      { id: "w1-mon", day: "Mon", topic: "Statistics: Mean, Median, Mode, Variance, Standard Deviation", module: 1 },
      { id: "w1-tue", day: "Tue", topic: "Statistics: Probability & Normal Distribution", module: 1 },
      { id: "w1-wed", day: "Wed", topic: "Statistics: Correlation & Covariance", module: 1 },
      { id: "w1-thu", day: "Thu", topic: "Statistics: Hypothesis Testing & p-value", module: 1 },
      { id: "w1-fri", day: "Fri", topic: "Statistics: Confidence Intervals, A/B Testing + Mini Quiz", module: 1 }
    ]
  },

  flashcards: [
    { front: "Mean (Average)", back: "Sum of all values divided by the count. Represents the 'typical' value. Sensitive to outliers — use Median instead for skewed data.", category: "Statistics" },
    { front: "Median", back: "The middle value of a sorted dataset. 50% of data is above and 50% below. Immune to outliers — always use for skewed data like salaries or house prices.", category: "Statistics" },
    { front: "Standard Deviation (SD)", back: "The square root of Variance. Measures how spread out data is in the ORIGINAL units. Use the 68-95-99.7 rule: 68% of data is within ±1 SD of the mean.", category: "Statistics" },
    { front: "p-value", back: "The probability of getting results at least as extreme as observed, assuming the null hypothesis is true. p < 0.05 means statistically significant — reject H0.", category: "Statistics" },
    { front: "A/B Testing", back: "A controlled experiment comparing two versions (A=control, B=treatment). Uses hypothesis testing to determine if the difference is real or due to chance.", category: "Statistics" },
    { front: "Type I Error (False Positive)", back: "Rejecting a true null hypothesis. Claiming an effect exists when it does not. Probability = Alpha (α). Example: Shipping a redesign that made no real difference.", category: "Statistics" },
    { front: "Type II Error (False Negative)", back: "Failing to reject a false null hypothesis. Missing a real effect. Probability = Beta (β). Example: Abandoning a drug that actually works.", category: "Statistics" },
    { front: "Correlation (Pearson's r)", back: "Standardized measure of how two variables move together. Always between -1 and +1. r=+0.85 = strong positive, r=-0.85 = strong negative. NEVER proves causation.", category: "Statistics" },
    { front: "Z-Score", back: "Formula: z = (value - mean) / SD. Tells you how many standard deviations a value is from the mean. |z| > 3 = outlier worth investigating.", category: "Statistics" },
    { front: "Confidence Interval (CI)", back: "A range of values that likely contains the true population parameter. A 95% CI means 95% of such intervals will contain the true value if the experiment were repeated.", category: "Statistics" }
  ],

  quiz: [
    { question: "Your sales data has a Mean of Rs 199,143 but a Median of Rs 50,000. Which metric should you report as 'typical daily sales'?", options: ["Mean — it accounts for all days equally", "Median — it is not pulled by the Rs 1.2M flash sale outlier", "Mode — most common is always best for KPIs", "Variance — spread tells the real story"], answer: 1, explanation: "When data is heavily skewed by an outlier (a Rs 1.2M flash sale), the Median is far more representative of a typical day (Rs 50,000). The Mean is inflated to Rs 199,143 — nearly 4x a normal day." },
    { question: "If a statistical test returns a p-value of 0.012 (Alpha = 0.05), how should you interpret this?", options: ["Fail to reject H0 — the result is not significant", "Reject H0 — the result IS statistically significant", "Type II error occurred", "The null hypothesis is proven true"], answer: 1, explanation: "p-value (0.012) < Alpha (0.05), so we reject the Null Hypothesis. The result is statistically significant — the observed effect is unlikely to be due to chance." },
    { question: "What is a Type II Error?", options: ["Rejecting a true null hypothesis (false positive)", "Failing to reject a false null hypothesis (false negative)", "Incorrectly calculating the mean", "Setting Alpha too low"], answer: 1, explanation: "A Type II Error (Beta) is a false negative — failing to detect a real effect. Example: Abandoning a new drug that actually lowers blood pressure because your test didn't detect the effect." },
    { question: "In a normal distribution, approximately what percentage of data falls within ONE standard deviation of the mean?", options: ["50%", "95%", "68%", "99.7%"], answer: 2, explanation: "The 68-95-99.7 empirical rule: ±1 SD = 68%, ±2 SD = 95%, ±3 SD = 99.7%. So 68% of data is within 1 standard deviation of the mean." },
    { question: "Ice cream sales and drowning deaths have correlation r = +0.90. Does eating ice cream cause drowning?", options: ["Yes — r = 0.90 proves a strong causal link", "No — the confounding variable is summer heat, which causes both independently", "Maybe — we need more data to be sure", "No — because r must be +1.0 to prove causation"], answer: 1, explanation: "Correlation NEVER proves causation. The hidden confounding variable is summer heat: hot weather causes both ice cream sales AND more people swimming (and drowning). Correlation only shows co-movement, not cause and effect." }
  ],

  lessons: {
    "w1-mon": `### Monday: Descriptive Statistics — Understanding Your Data

**Every Data Analyst's Foundation: Learn to describe ANY dataset in numbers.**

---

## 1. MEAN (Average) — The Center

**What is it?** Sum of all values divided by the count. The 'typical' value in your dataset.

**Example — Customer Salaries:** 20K, 25K, 22K, 30K, 28K
Mean = (20+25+22+30+28) ÷ 5 = **25K**

**When to Use:**
- Data is roughly symmetric (no extreme outliers)
- Creating KPI dashboards for 'typical' values

**When NOT to Use:**
- When extreme outliers exist — one millionaire will skew everything!

**Real Business Use Cases:** Average Order Value (AOV), Average Session Duration, Mean Revenue per Day

---

## 2. MEDIAN (Middle Value) — The Immune Metric

**What is it?** Sort values in order, pick the middle one. 50% of data is above, 50% below.

**Example — House Prices (Rs):**
Sorted: 50L, 60L, **75L**, 80L, 250L → **Median = 75L**
Mean = 103L (pulled up by the Rs 250L outlier!)

**Why It Matters:**

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Dataset</th><th>Mean</th><th>Median</th><th>Better?</th></tr></thead><tbody><tr><td>Normal: 30K, 32K, 35K, 38K, 40K</td><td>35K</td><td>35K</td><td>Either</td></tr><tr><td>With outlier: 30K, 32K, 35K, 38K, 5000K</td><td>809K</td><td>35K ✓</td><td>**MEDIAN**</td></tr><tr><td>Skewed house prices</td><td>High</td><td>Better ✓</td><td>**MEDIAN**</td></tr></tbody></table></div>

---

## 3. MODE (Most Frequent) — The Popular Kid

**What is it?** The value that appears MOST often. Works with ANY data type — numbers, categories, text.

**Example — Which City?** Delhi: 40 times, Mumbai: 30 times → MODE = **Delhi**

**Real Business Use Cases:** Most ordered product, most used payment method, top traffic source

---

## 4. VARIANCE — How Spread Out Is Your Data?

**Why This Matters: Same Mean ≠ Same Data**

Two classes, both with Mean = 70:
- **Class A (Low Variance):** 68, 69, 70, 71, 72 → Predictable ✓
- **Class B (High Variance):** 40, 55, 70, 85, 100 → Unpredictable ⚠️

**Formula:** Variance = Average of (each value − mean)²

**Problem:** Variance is in SQUARED units (e.g., rupees²) — very hard to interpret! → Use SD instead.

---

## 5. STANDARD DEVIATION (SD) — Spread in Real Units

**What is it?** SD = √Variance. Brings the number BACK to original units.

**Example:** Mean salary = Rs 50,000 | Variance = 900,000,000 rupees² | **SD = Rs 30,000** ✓

**The Magic Rule: 68-95-99.7**
- **±1 SD** → 68% of data
- **±2 SD** → 95% of data
- **±3 SD** → 99.7% of data

**Use Cases:** Anomaly detection (flag transactions >3 SD as potential fraud), Quality control, Performance thresholds

---

## Decision Guide: Which Metric?

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Situation</th><th>Use This</th><th>Why?</th></tr></thead><tbody><tr><td>Symmetric data, no outliers</td><td>**MEAN**</td><td>Represents the center perfectly</td></tr><tr><td>Skewed data / extreme outliers</td><td>**MEDIAN**</td><td>Not pulled by outliers</td></tr><tr><td>Categorical data (cities, colors)</td><td>**MODE**</td><td>Only metric for non-numeric data</td></tr><tr><td>Comparing spread across groups</td><td>**SD**</td><td>Same units, intuitive interpretation</td></tr><tr><td>Anomaly detection / thresholds</td><td>**Mean + 3×SD**</td><td>Flags values too far away</td></tr></tbody></table></div>

---

## ⚠️ Common Analyst Mistakes

- ❌ Using MEAN with extreme outliers → ✓ Use MEDIAN
- ❌ Reporting only MEAN without SD → ✓ Always say 'Mean $100 ± $15'
- ❌ Ignoring the 68-95-99.7 rule → ✓ Use it to detect anomalies (>3 SD)

---

## Practice Problems

**Q1:** Daily visitors: 1,000 | 1,200 | 950 | 1,100 | 1,050 | 50,000 (viral day)
Would you report MEAN or MEDIAN? Why?

**Q2:** Your product has Mean rating = 4.2 stars, SD = 0.3 stars. What does this tell you about consistency?

**Q3:** Fraud detector: Mean transaction = Rs 5,000, SD = Rs 1,000.
At what amount would you flag as suspicious (>3 SD)?
*Answer: Rs 5,000 + (3 × Rs 1,000) = **Rs 8,000***

---

**📌 Monday Complete! Tomorrow: Probability & Normal Distribution**`,

    "w1-tue": `### Tuesday: Probability & Normal Distribution

**Today's Big Questions:** How likely is something to happen? What shape does most real-world data follow?

---

## 1. PROBABILITY — How Likely Is Something?

**Definition:** Probability is a number between 0 (impossible) and 1 (certain) telling you how likely an event is to happen.

**The Formula:** P(Event) = Favorable outcomes ÷ Total possible outcomes

**Basic Examples:**
- Coin flip: P(Heads) = 1/2 = **0.5 = 50%**
- Rolling a die: P(getting 4) = 1/6 = **16.67%**
- P(even number on die) = 3/6 = **50%**

---

## Real Data Analyst Examples

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Scenario</th><th>What it means</th></tr></thead><tbody><tr><td>Churn model says P = 0.15</td><td>15% chance customer will leave</td></tr><tr><td>Fraud detector says P = 0.92</td><td>92% likely to be fraud — flag it!</td></tr><tr><td>A/B test: P(click) = 0.35</td><td>35% of people who see this email will click</td></tr></tbody></table></div>

---

## The Three Rules of Probability

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Rule</th><th>Formula</th><th>Example</th></tr></thead><tbody><tr><td>P(A AND B)</td><td>P(A) × P(B)</td><td>Coin=Heads AND die=6 → 0.5 × 0.167</td></tr><tr><td>P(A OR B)</td><td>P(A) + P(B)</td><td>Die shows 1 OR 2 → 0.167 + 0.167</td></tr><tr><td>P(A given B)</td><td>Conditional</td><td>P(rain today given it rained yesterday)</td></tr></tbody></table></div>

**⚠️ Common Mistakes:**
- "Tails is more likely after 5 heads in a row" → FALSE. Each flip is independent (50/50 always).
- Confusing probability with guarantee → 70% likely ≠ certain. It still might not happen!

---

## Python Code — Simulating Probability

\`\`\`python
import random

# Simulate flipping a coin 100 times
coin_flips = [random.choice(['Heads', 'Tails']) for _ in range(100)]
heads_count = coin_flips.count('Heads')
probability_heads = heads_count / 100
print(f"Out of 100 flips, got {heads_count} heads")
print(f"Probability = {probability_heads}")  # Should be close to 0.5!

# Rolling a die 100 times
die_rolls = [random.randint(1, 6) for _ in range(100)]
sixes = die_rolls.count(6)
print(f"Probability of rolling a 6: {sixes / 100}")  # Should be ~0.1667
\`\`\`

---

## 2. NORMAL DISTRIBUTION — The Bell Curve

**Definition:** A pattern that appears CONSTANTLY in nature and real-world data. Shaped like a bell — most values cluster in the middle, fewer at the extremes.

**Where You See It Everywhere:**
- Heights of people → Most are ~5'6", very few are 4'8" or 6'4"
- Test scores → Most score near average, few get 0% or 100%
- Customer spending → Most spend near average, few spend 10x

**Key Properties:**
- ✓ Symmetric — looks the same on both sides
- ✓ Mean = Median = Mode (the middle is all three)
- ✓ Defined by two numbers: Mean (center) and SD (spread)

---

## The Most Important Rule: 68-95-99.7

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Distance from Mean</th><th>% of Data</th><th>In Plain English</th></tr></thead><tbody><tr><td>Within ±1 SD</td><td>**68%**</td><td>More than 2 out of 3 values</td></tr><tr><td>Within ±2 SD</td><td>**95%**</td><td>Roughly 19 out of 20 values</td></tr><tr><td>Within ±3 SD</td><td>**99.7%**</td><td>Almost everything — only 0.3% outside</td></tr></tbody></table></div>

**Real Example — Daily Sales:** Mean = Rs 50,000, SD = Rs 5,000
- 68% of days: Rs 45,000 → Rs 55,000
- 95% of days: Rs 40,000 → Rs 60,000
- 99.7% of days: Rs 35,000 → Rs 65,000
- A day with Rs 20,000? **ALERT! Something is very wrong!** (4 SD below mean)

---

## Z-Score: Standardizing Data

**Formula:** z = (value − mean) / SD

**Example:** Sales mean = Rs 50,000, SD = Rs 5,000. A day with Rs 55,000:
z = (55,000 − 50,000) / 5,000 = **1.0** → Exactly 1 SD above mean — totally normal.

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Z-Score</th><th>Interpretation</th></tr></thead><tbody><tr><td>z = 0</td><td>Exactly average</td></tr><tr><td>z = ±1</td><td>Normal variation</td></tr><tr><td>z = ±2</td><td>Uncommon</td></tr><tr><td>z = ±3</td><td>Very rare!</td></tr><tr><td>z &gt; 3</td><td>**Outlier! Investigate!**</td></tr></tbody></table></div>

---

## Python Code — Z-Scores & Normal Distribution

\`\`\`python
import numpy as np
from scipy.stats import norm

data = [45000, 48000, 50000, 52000, 55000, 60000, 35000]
mean = np.mean(data)
sd = np.std(data)

# Calculate z-scores
z_scores = [(x - mean) / sd for x in data]
print(f"Z-scores: {z_scores}")

# Probability of a value <= 55000
prob = norm.cdf(55000, loc=mean, scale=sd)
print(f"Prob(X <= 55000): {prob}")

# Value at the 95th percentile
value_95th = norm.ppf(0.95, loc=mean, scale=sd)
print(f"95th percentile value: {value_95th}")
\`\`\`

---

## Checking if Your Data is Normal (3 Methods)

1. **Visual Inspection** — Plot a histogram. Does it look like a bell?
2. **Check Mean ≈ Median** — If far apart, data is skewed.
3. **Shapiro-Wilk Test:**

\`\`\`python
from scipy.stats import shapiro
data = [45000, 48000, 50000, 52000, 55000, 60000, 35000, 49000]
statistic, p_value = shapiro(data)
if p_value > 0.05:
    print("Data looks NORMAL! (p-value > 0.05)")
else:
    print("Data might NOT be normal (p-value < 0.05)")
\`\`\`

---

## Practice Problems

**Problem 1:** Customer orders: Mean = Rs 1,000, SD = Rs 100. An order for Rs 1,300 — how many SDs is this? Is it unusual?
*Answer: z = (1300-1000)/100 = 3.0 → Yes, extremely unusual!*

**Problem 2:** Test scores: Mean = 70, SD = 10. What % of students scored between 60 and 80?
*Answer: 60 to 80 = Mean ± 1 SD → 68%*

**Problem 3:** Daily revenue: Mean = Rs 100,000, SD = Rs 10,000. A day with Rs 70,000 — z-score?
*Answer: z = (70,000 - 100,000) / 10,000 = -3.0 → Very unusual, investigate!*

---

**📌 Tuesday Complete! Tomorrow: Correlation & Covariance**`,

    "w1-wed": `### Wednesday: Correlation & Covariance

**Today's Big Question:** When one thing changes, does another thing change too — and HOW STRONGLY?

---

## Why This Matters

Correlation is one of the most important concepts in data science. Every machine learning model, every feature selection step, and every business analysis starts here. Netflix uses correlations to decide which shows to recommend — variables with zero correlation to what you watch get dropped.

---

## PART 1: Covariance — Do They Move Together?

**Definition:** Covariance measures if two variables move in the same direction or opposite directions. It tells you **direction only** — not strength.

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Scenario</th><th>Covariance</th><th>Real Example</th></tr></thead><tbody><tr><td>**Positive** — both go up together</td><td>&gt; 0</td><td>Temperature ↑ → Ice cream sales ↑</td></tr><tr><td>**Negative** — one up, other down</td><td>&lt; 0</td><td>Temperature ↓ → Umbrella sales ↑</td></tr><tr><td>**Zero** — no pattern</td><td>≈ 0</td><td>Age vs. shoe size (independent)</td></tr></tbody></table></div>

**A dancing analogy:** Covariance tells you if they're moving in sync or not (direction). Correlation tells you *how well-rehearsed* the dance is (strength).

---

## Real Business Examples of Covariance

**Example 1 — Marketing Spend vs. Revenue (Positive):**

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Month</th><th>Ad Spend</th><th>Revenue</th></tr></thead><tbody><tr><td>Month 1</td><td>Rs 10K</td><td>Rs 100K</td></tr><tr><td>Month 2</td><td>Rs 15K</td><td>Rs 120K</td></tr><tr><td>Month 3</td><td>Rs 20K</td><td>Rs 140K</td></tr></tbody></table></div>

Both increase together → Positive covariance

**Example 2 — Price vs. Units Sold (Negative):**

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Week</th><th>Price</th><th>Units Sold</th></tr></thead><tbody><tr><td>Week 1</td><td>Rs 100</td><td>500</td></tr><tr><td>Week 2</td><td>Rs 150</td><td>300</td></tr><tr><td>Week 3</td><td>Rs 200</td><td>100</td></tr></tbody></table></div>

Price up, demand down → Negative covariance (classic demand curve!)

---

## Python: Calculate Covariance

\`\`\`python
import numpy as np
import pandas as pd

marketing_spend = [10, 15, 20, 12, 18]  # Rs thousands
revenue = [100, 120, 140, 110, 130]

covariance = np.cov(marketing_spend, revenue)[0, 1]
print(f"Covariance: {covariance}")  # Output: 38.5 (positive → good sign!)

# Using pandas (easier!)
df = pd.DataFrame({'spend': marketing_spend, 'revenue': revenue})
cov_matrix = df.cov()
print(cov_matrix)
\`\`\`

**⚠️ The Big Problem with Covariance:** Its size depends entirely on your units. Covariance of 5,000 vs 5 — you CANNOT compare. This is why we use Correlation.

---

## PART 2: Correlation — How Strong Is the Relationship?

**Definition:** Correlation standardizes covariance to a fixed scale: **−1 to +1**. Now you can compare relationships across any two variables.

**The Correlation Scale (Memorize This!):**

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>r value</th><th>Strength</th><th>Direction</th></tr></thead><tbody><tr><td>+0.9 to +1.0</td><td>Perfect / Very Strong</td><td>Positive</td></tr><tr><td>+0.7 to +0.9</td><td>**Strong**</td><td>Positive</td></tr><tr><td>+0.5 to +0.7</td><td>Moderate</td><td>Positive</td></tr><tr><td>+0.3 to +0.5</td><td>Weak</td><td>Positive</td></tr><tr><td>0 to +0.3</td><td>Very Weak / None</td><td>—</td></tr><tr><td>−0.3 to −0.5</td><td>Weak</td><td>Negative</td></tr><tr><td>−0.5 to −0.7</td><td>Moderate</td><td>Negative</td></tr><tr><td>−0.7 to −0.9</td><td>**Strong**</td><td>Negative</td></tr><tr><td>−1.0</td><td>Perfect</td><td>Negative</td></tr></tbody></table></div>

**⚠️ Key Insight:** r = −0.85 is STRONGER than r = +0.40! Strength = distance from zero, not positive or negative.

---

## Real-World Correlation Examples

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Two Variables</th><th>Likely r</th><th>Why?</th></tr></thead><tbody><tr><td>Study Hours vs. Exam Score</td><td>+0.85</td><td>Strong positive</td></tr><tr><td>Exercise Hours vs. Body Weight</td><td>−0.75</td><td>Strong negative</td></tr><tr><td>Temperature vs. Ice Cream Sales</td><td>+0.85</td><td>Strong positive</td></tr><tr><td>Temperature vs. Hot Drink Sales</td><td>−0.80</td><td>Strong negative</td></tr><tr><td>Shoe Size vs. Intelligence</td><td>+0.05</td><td>Nearly zero — unrelated!</td></tr></tbody></table></div>

---

## Python: Correlation & Heatmap

\`\`\`python
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

marketing = [10, 15, 20, 12, 18]
revenue = [100, 120, 140, 110, 130]

correlation = np.corrcoef(marketing, revenue)[0, 1]
print(f"Correlation: {correlation:.2f}")  # Output: 0.99 — very strong!

df = pd.DataFrame({
    'marketing': marketing,
    'revenue': revenue,
    'ad_clicks': [50, 75, 95, 60, 85]
})
correlation_matrix = df.corr()
print(correlation_matrix)

# Visualize as a heatmap
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0)
plt.title('Correlation Heatmap')
plt.show()
\`\`\`

---

## THE GOLDEN RULE: Correlation ≠ Causation

**This is the #1 mistake people make in data analytics!**

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Example</th><th>r</th><th>Hidden Cause</th></tr></thead><tbody><tr><td>Ice Cream Sales vs. Drowning Deaths</td><td>+0.90</td><td>Summer heat causes both</td></tr><tr><td>Firefighters vs. Fire Damage</td><td>+0.92</td><td>Bigger fires need more firefighters AND cause more damage</td></tr><tr><td>Shoe Size vs. Reading Ability (kids)</td><td>+0.85</td><td>Age — older kids have bigger feet AND read better</td></tr></tbody></table></div>

Correlation can only tell you if two things move together. It CANNOT tell you WHY or whether one causes the other.

---

## Correlation in Data Analytics Jobs

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Task</th><th>How You Use Correlation</th></tr></thead><tbody><tr><td>Feature Selection for ML</td><td>Keep high-corr features with target, drop near-zero ones</td></tr><tr><td>Exploratory Data Analysis</td><td>Build correlation heatmaps first</td></tr><tr><td>Business Reporting</td><td>&quot;Revenue correlates 0.72 with marketing spend&quot;</td></tr><tr><td>Detecting Multicollinearity</td><td>Remove redundant features that are too similar</td></tr><tr><td>Risk Assessment</td><td>Check if investments move together (diversification)</td></tr></tbody></table></div>

---

## Pearson vs. Spearman

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Type</th><th>When to Use</th><th>Example</th></tr></thead><tbody><tr><td>**Pearson (r)**</td><td>Continuous, roughly normal data</td><td>Height vs. Weight</td></tr><tr><td>**Spearman (ρ)**</td><td>Ordinal data or skewed distributions</td><td>Movie ranking vs. IMDb rating</td></tr></tbody></table></div>

\`\`\`python
# Pearson (default)
corr_pearson = df['x'].corr(df['y'])

# Spearman
corr_spearman = df['x'].corr(df['y'], method='spearman')
\`\`\`

---

## Practice Problems

**Problem 1:** You calculate r = +0.78 between hours slept and test score. Is this a strong relationship?
*Answer: Yes — r = 0.78 is in the +0.7 to +0.9 band (Strong). But this doesn't prove sleep CAUSES better scores!*

**Problem 2:** 5 features for an ML model. Correlations with target: +0.15, +0.72, +0.08, −0.65, +0.92. Which should you drop?
*Answer: Drop +0.08 (and consider +0.15) — near-zero correlation = negligible predictive value.*

---

**📌 Wednesday Complete! Tomorrow: Hypothesis Testing & p-values**`,

    "w1-thu": `### Thursday: Hypothesis Testing & p-values

**Today's Big Question:** When you see a difference in your data — a new button that converts better, a drug that seems to work — how do you know if it's REAL or just luck?

---

## Why This Matters

Hypothesis testing is the formal toolkit data analysts use to **separate signal from noise.** Without it, every observed difference looks meaningful, and you'd ship every "improvement" your data shows — even the ones that are pure chance.

**Real example:** An e-commerce team changes their "Buy Now" button from blue to green. Over a week, green gets 2% higher conversion. Is green really better, or did it just have a good week? Hypothesis testing gives a precise, repeatable answer.

---

## A Courtroom Analogy

Think of a criminal trial:
- **Default assumption:** Innocent until proven guilty → this is the **Null Hypothesis**
- **The prosecution must present overwhelming evidence** → this is your test result
- **If evidence is overwhelming:** Jury rejects "innocent" and convicts → you **Reject H0**
- **If evidence is weak:** The jury does NOT prove innocence — they simply fail to convict → you **Fail to Reject H0**

⚠️ Failing to reject the null is NOT the same as proving it true!

---

## PART 1: Null vs. Alternative Hypothesis

**Null Hypothesis (H0):** The "nothing special is happening" claim. No effect, no difference, no relationship.

**Alternative Hypothesis (H1):** What you're trying to prove — there IS an effect or difference.

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Scenario</th><th>Null Hypothesis (H0)</th><th>Alternative Hypothesis (H1)</th></tr></thead><tbody><tr><td>New button color</td><td>Conversion is the same for blue and green</td><td>Conversion is DIFFERENT between colors</td></tr><tr><td>New drug trial</td><td>Drug has no effect on blood pressure</td><td>Drug CHANGES blood pressure</td></tr><tr><td>Coin fairness</td><td>Coin is fair (50% heads)</td><td>Coin is NOT fair</td></tr><tr><td>Salary by department</td><td>Salary is the same across departments</td><td>Salary DIFFERS across departments</td></tr></tbody></table></div>

**Key rule:** H0 always states equality or no effect. Write it before you look at the data!

---

## PART 2: p-values — What Are We Measuring?

**Definition:** The p-value is the probability of seeing data at least as extreme as what you observed, **assuming the null hypothesis is true.**

**What p-value is NOT:**
- ❌ NOT the probability that H0 is true
- ❌ NOT the probability your result is due to chance

**Plain-English Translation:** A small p-value says "if nothing interesting were really happening, it would be very unusual to see data like this." That unusualness is what makes us suspicious.

---

## The Decision Rule

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>P-Value</th><th>Interpretation</th><th>Decision (α = 0.05)</th></tr></thead><tbody><tr><td>p &lt; 0.01</td><td>Very strong evidence against H0</td><td>**Reject H0** — highly significant</td></tr><tr><td>p &lt; 0.05</td><td>Strong evidence against H0</td><td>**Reject H0** — statistically significant</td></tr><tr><td>0.05 ≤ p &lt; 0.10</td><td>Weak / borderline evidence</td><td>Fail to reject H0</td></tr><tr><td>p ≥ 0.10</td><td>Little to no evidence</td><td>Fail to reject H0</td></tr></tbody></table></div>

---

## Significance Level (Alpha — α)

Alpha is the threshold you choose **before** running the test. The most common choice is **α = 0.05**.

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Alpha</th><th>When to Use</th></tr></thead><tbody><tr><td>α = 0.01</td><td>When false positives are costly — medical treatments, safety systems</td></tr><tr><td>α = 0.05</td><td>Standard industry/academic default</td></tr><tr><td>α = 0.10</td><td>Early-stage exploratory analysis</td></tr></tbody></table></div>

**⚠️ Critical Rule:** You MUST set alpha BEFORE seeing the data. If you adjust alpha after seeing the p-value, you've biased your experiment!

---

## PART 3: Type I & Type II Errors

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th></th><th>H0 Is Actually TRUE</th><th>H0 Is Actually FALSE</th></tr></thead><tbody><tr><td>**You Reject H0**</td><td>**Type I Error (α)** — False Positive</td><td>✓ Correct decision</td></tr><tr><td>**You Fail to Reject H0**</td><td>✓ Correct decision</td><td>**Type II Error (β)** — False Negative</td></tr></tbody></table></div>

**Real-World Framing:**
- **Type I Error (False Positive):** Spam filter marks an important email as spam. Shipping a redesign that made no real difference.
- **Type II Error (False Negative):** Spam filter lets real spam through. Abandoning a genuinely better drug design.
- **Statistical Power (1 − β):** Probability of CORRECTLY detecting a real effect. Aim for 80%+.

**The Tradeoff:** Lowering α (being stricter) reduces Type I errors but increases Type II errors. You can't eliminate both simultaneously without increasing sample size.

---

## Python: Running a t-test

\`\`\`python
from scipy import stats
import numpy as np

# Group A: old button | Group B: new green button (conversions per 100 visitors)
group_A = [5.2, 4.8, 5.0, 5.5, 4.9, 5.1, 5.3, 4.7]
group_B = [6.1, 5.9, 6.3, 5.8, 6.2, 6.5, 5.7, 6.0]

t_stat, p_value = stats.ttest_ind(group_A, group_B)
print(f"T-statistic: {t_stat:.4f}")
print(f"P-value: {p_value:.4f}")

alpha = 0.05
if p_value < alpha:
    print(f"Result: SIGNIFICANT (p={p_value:.4f} < α={alpha})")
    print("Reject H0. The green button is genuinely different.")
else:
    print(f"Result: NOT significant (p={p_value:.4f} >= α={alpha})")
    print("Fail to reject H0. Difference may be due to chance.")
\`\`\`

---

## Practice Problems

**Problem 1:** "I got 7 heads out of 10 coin flips. Is this coin rigged?" Set up H0 and H1.
*Answer: H0 = Coin is fair (P(heads) = 0.5). H1 = Coin is NOT fair. Then run a binomial test.*

**Problem 2:** A p-value of 0.032 at α = 0.05. What do you conclude?
*Answer: p = 0.032 < 0.05 = Reject H0. Statistically significant. But check if the EFFECT SIZE is practically meaningful!*

**Problem 3:** You run a drug trial and get p = 0.08. The drug might work, but... fail to reject or reject?
*Answer: At α = 0.05, fail to reject H0. However, this might be a Type II Error (missing a real effect). Consider larger sample size.*

---

**📌 Thursday Complete! Tomorrow: Confidence Intervals & A/B Testing**`,

    "w1-fri": `### Friday: Confidence Intervals & A/B Testing

**Putting everything together — from theory to real business experiments.**

---

## Why This Matters

You've learned the tools. Now let's see how they combine in the most important analytical process in industry: **A/B Testing.** Every product team, growth team, and marketing team uses this weekly.

---

## PART 1: Confidence Intervals (CI)

**Definition:** A range of values that likely contains the true population parameter.

**A 95% Confidence Interval** means: "If we repeated this experiment 100 times, 95 of the resulting intervals would contain the true value."

**Example:** You survey 200 customers. Average satisfaction = 4.2 stars.
95% CI = **[4.0, 4.4]**
→ You're 95% confident the true average satisfaction is between 4.0 and 4.4.

**Formula:** CI = Mean ± (Z* × Standard Error)
- For 95% CI: Z* = 1.96
- Standard Error (SE) = SD / √n

**Python Example:**

\`\`\`python
import numpy as np
from scipy import stats

data = [4.1, 4.3, 4.0, 4.5, 4.2, 4.4, 4.1, 4.3, 4.2, 4.0]
n = len(data)
mean = np.mean(data)
se = stats.sem(data)  # Standard Error

# 95% Confidence Interval
confidence_interval = stats.t.interval(0.95, df=n-1, loc=mean, scale=se)
print(f"Mean: {mean:.2f}")
print(f"95% CI: [{confidence_interval[0]:.2f}, {confidence_interval[1]:.2f}]")
\`\`\`

**When CIs Don't Overlap → Statistically Significant!**
- Button A: CI = [4.8%, 5.2%]
- Button B: CI = [6.1%, 6.9%]
- These don't overlap → B is genuinely better with statistical confidence.

---

## PART 2: A/B Testing Design

**What is A/B Testing?** A controlled experiment comparing two versions to determine which performs better.

- **Control Group (A):** Current version — the baseline
- **Treatment Group (B):** New version you're testing
- **Randomization:** Users must be randomly assigned to avoid selection bias!

**Complete A/B Test Workflow:**

1. **Define the metric:** Click rate, conversion rate, revenue per user
2. **Set Alpha (α = 0.05) and Power (80%+) BEFORE the test**
3. **Calculate sample size** (minimum needed per group)
4. **Run the experiment** — don't stop early!
5. **Analyze results** with hypothesis testing
6. **Make a decision** based on p-value vs. alpha

---

## Sample Size Calculation

You MUST calculate minimum sample size before running an A/B test. Running too early = unreliable results!

**Rule of Thumb Formula:**
n = (Z_alpha + Z_beta)² × (p1(1-p1) + p2(1-p2)) / (p1 - p2)²

\`\`\`python
from scipy import stats
import math

# Current conversion rate = 5%, Expected new = 7%, alpha=0.05, power=80%
p1 = 0.05  # Current rate
p2 = 0.07  # Expected new rate
alpha = 0.05
power = 0.80

z_alpha = stats.norm.ppf(1 - alpha/2)  # 1.96
z_beta = stats.norm.ppf(power)          # 0.84

n = (z_alpha + z_beta)**2 * (p1*(1-p1) + p2*(1-p2)) / (p1 - p2)**2
print(f"Minimum sample size per group: {math.ceil(n)}")
# Result: ~1,187 users per group
\`\`\`

---

## PART 3: Type I & II Errors in A/B Testing Context

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Error</th><th>What Happens</th><th>Business Consequence</th></tr></thead><tbody><tr><td>**Type I (False Positive, α)**</td><td>Declare winner when there's no real difference</td><td>Ship a pointless redesign, waste engineer time</td></tr><tr><td>**Type II (False Negative, β)**</td><td>Miss a genuine improvement</td><td>Leave money on the table; competitor ships it first</td></tr></tbody></table></div>

**Statistical Power (1 − β):** How likely are you to detect a real effect if one exists? Industry standard = **80%** minimum.

---

## Complete Python A/B Test Example

\`\`\`python
from scipy import stats
import numpy as np

# A/B Test Results
visitors_A, conversions_A = 1000, 50   # 5% conversion rate
visitors_B, conversions_B = 1000, 75   # 7.5% conversion rate

rate_A = conversions_A / visitors_A
rate_B = conversions_B / visitors_B
lift = ((rate_B - rate_A) / rate_A) * 100

# Z-test for two proportions
from statsmodels.stats.proportion import proportions_ztest
count = [conversions_A, conversions_B]
nobs = [visitors_A, visitors_B]
z_stat, p_value = proportions_ztest(count, nobs)

print(f"Rate A: {rate_A:.1%} | Rate B: {rate_B:.1%}")
print(f"Lift: +{lift:.1f}%")
print(f"Z-statistic: {z_stat:.4f}")
print(f"P-value: {p_value:.4f}")

if p_value < 0.05:
    print("✅ WINNER: Version B is statistically significantly better!")
    print(f"   Confidence: {(1 - p_value) * 100:.1f}%")
else:
    print("❌ NO WINNER: Cannot conclude B is better. Run longer or redesign test.")
\`\`\`

---

## Common A/B Testing Mistakes

- ❌ **Stopping the test early** (when you see a positive result) → Wait for minimum sample size!
- ❌ **Running multiple tests simultaneously** without p-value correction → Use Bonferroni correction
- ❌ **Not randomizing users properly** → Selection bias will corrupt your results
- ❌ **Testing too many variants** → Each variant dilutes your sample

---

## Week 1 Summary — Everything You Now Know

<div class="table-wrapper"><table class="lesson-table"><thead><tr><th>Concept</th><th>What It Does</th><th>When to Use</th></tr></thead><tbody><tr><td>Mean / Median / Mode</td><td>Describe center of data</td><td>Start of any analysis</td></tr><tr><td>Variance / SD</td><td>Describe spread of data</td><td>Always alongside mean</td></tr><tr><td>68-95-99.7 Rule</td><td>Detect anomalies</td><td>Fraud, quality control</td></tr><tr><td>Probability</td><td>Quantify uncertainty</td><td>Models, predictions</td></tr><tr><td>Normal Distribution</td><td>Pattern for real-world data</td><td>Before statistical tests</td></tr><tr><td>Z-Score</td><td>Standardize data</td><td>Anomaly scoring, comparison</td></tr><tr><td>Correlation</td><td>Relationship strength</td><td>Feature selection, EDA</td></tr><tr><td>Hypothesis Testing</td><td>Separate signal from noise</td><td>Experiments, business decisions</td></tr><tr><td>p-value</td><td>Measure of evidence against H0</td><td>Every test you'll ever run</td></tr><tr><td>Type I / II Errors</td><td>Know your risks</td><td>Experiment design</td></tr><tr><td>Confidence Intervals</td><td>Range with certainty</td><td>Reporting any estimate</td></tr><tr><td>A/B Testing</td><td>Controlled comparison</td><td>Product, marketing, growth</td></tr></tbody></table></div>

---

**🎉 Week 1 Complete! Next Week: Excel & Data Manipulation**`
  },

  // Interactive Sandbox Calculator Logic
  initSandbox: function() {
    const btn = document.getElementById("ab-calc-btn");
    if (btn) {
      btn.addEventListener("click", this.handleABSandboxRun.bind(this));
      this.resetABPlayground();
    }
  },

  resetABPlayground: function() {
    const fields = ["ab-visitors-a", "ab-conv-a", "ab-visitors-b", "ab-conv-b"];
    const defaults = [1000, 50, 1000, 75];
    fields.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) el.value = defaults[i];
    });
    const resultBox = document.getElementById("ab-results-box");
    if (resultBox) resultBox.style.display = "none";
  },

  handleABSandboxRun: function() {
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
    const lift = ((rateB - rateA) / rateA) * 100;

    // Z-Test for Two Independent Proportions
    const pPooled = (convA + convB) / (visitorsA + visitorsB);
    const seDifference = Math.sqrt(pPooled * (1 - pPooled) * ((1 / visitorsA) + (1 / visitorsB)));
    const zScore = seDifference !== 0 ? (rateB - rateA) / seDifference : 0;
    const pValue = 2 * (1 - this.normalCDF(Math.abs(zScore)));

    // Update Results UI
    document.getElementById("ab-rate-a").innerText = `${(rateA * 100).toFixed(2)}%`;
    document.getElementById("ab-rate-b").innerText = `${(rateB * 100).toFixed(2)}%`;
    document.getElementById("ab-p-val").innerText = pValue.toFixed(4);

    const liftEl = document.getElementById("ab-lift");
    if (liftEl) liftEl.innerText = `${lift >= 0 ? "+" : ""}${lift.toFixed(1)}%`;

    const conclusionBox = document.getElementById("ab-conclusion-text");
    if (pValue < 0.05) {
      conclusionBox.className = "ab-conclusion";
      conclusionBox.innerHTML = `<strong>✅ Result: Statistically Significant! (p = ${pValue.toFixed(4)})</strong><br>Reject the Null Hypothesis. There is a real difference between Campaign A and B. B wins with ${((1 - pValue) * 100).toFixed(1)}% confidence.`;
    } else {
      conclusionBox.className = "ab-conclusion insignificant";
      conclusionBox.innerHTML = `<strong>❌ Result: Not Statistically Significant (p = ${pValue.toFixed(4)})</strong><br>Fail to reject the Null Hypothesis. The observed ${lift.toFixed(1)}% difference is likely due to random variance — do not ship B yet!`;
    }

    document.getElementById("ab-results-box").style.display = "block";
  },

  normalCDF: function(z) {
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
};
