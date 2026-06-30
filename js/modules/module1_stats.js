// Module 1: Statistics & Probability
window.HQModules = window.HQModules || {};

window.HQModules.stats = {
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
  playgroundType: "stats",
  
  schedule: {
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

  flashcards: [
    { front: "A/B Testing", back: "A statistical method of comparing two versions of a webpage or product against each other to determine which one performs better. It relies on hypothesis testing.", category: "Statistics" },
    { front: "p-value", back: "The probability of obtaining test results at least as extreme as the observed results, assuming that the null hypothesis is true. A p-value < 0.05 is the typical threshold for statistical significance.", category: "Statistics" },
    { front: "Type I Error (Alpha)", back: "A false positive error: rejecting a true null hypothesis (e.g., claiming a modification has an effect when it actually does not).", category: "Statistics" }
  ],

  quiz: [
    { question: "If a statistical test returns a p-value of 0.012, how should you interpret the result? (Alpha = 0.05)", options: ["The null hypothesis is likely true", "Reject the null hypothesis; results are statistically significant", "Do not reject the null hypothesis", "A Type I error is guaranteed"], answer: 1, explanation: "Since the p-value (0.012) is less than the standard significance level Alpha (0.05), we reject the null hypothesis, finding the results statistically significant." },
    { question: "What is a Type II error?", options: ["Failing to reject a false null hypothesis", "Rejecting a true null hypothesis", "Incorrectly calculating the mean", "A calculation issue with standard deviation"], answer: 0, explanation: "A Type II error (Beta) occurs when we fail to reject a false null hypothesis. In plain terms, it is a 'false negative' where an effect exists but we fail to detect it." },
    { question: "In a normal distribution, approximately what percentage of data falls within one standard deviation of the mean?", options: ["50%", "95%", "68%", "99.7%"], answer: 2, explanation: "According to the empirical rule (68-95-99.7 rule) for a normal distribution, approximately 68% of the values fall within ±1 standard deviation of the mean." },
    { question: "Which test is best suited to determine if the average conversion rates of two isolated landing pages are significantly different?", options: ["Chi-Squared Goodness of Fit", "Two-sample Z-test or t-test", "Pearson Correlation", "Linear Regression"], answer: 1, explanation: "To compare the averages of two independent groups (conversion rates of Group A vs. Group B), we use a two-sample hypothesis test, such as a t-test or Z-test." },
    { question: "What is the primary benefit of increasing sample sizes in A/B tests?", options: ["It decreases the p-value automatically", "It reduces statistical power", "It reduces the margin of error and increases statistical power", "It guarantees positive test results"], answer: 2, explanation: "Larger sample sizes reduce variance and standard errors, which narrows the margin of error and increases statistical power (the probability of detecting a real effect)." }
  ],

  lessons: {
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
  },

  // Interactive Sandbox Calculator Logic
  initSandbox: function() {
    document.getElementById("ab-calc-btn").addEventListener("click", this.handleABSandboxRun.bind(this));
    this.resetABPlayground();
  },

  resetABPlayground: function() {
    document.getElementById("ab-visitors-a").value = 1000;
    document.getElementById("ab-conv-a").value = 50;
    document.getElementById("ab-visitors-b").value = 1000;
    document.getElementById("ab-conv-b").value = 75;
    document.getElementById("ab-results-box").style.display = "none";
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
    
    // Z-Test for Two Independent Proportions
    const pPooled = (convA + convB) / (visitorsA + visitorsB);
    const seDifference = Math.sqrt(pPooled * (1 - pPooled) * ((1 / visitorsA) + (1 / visitorsB)));
    const zScore = seDifference !== 0 ? (rateB - rateA) / seDifference : 0;
    
    // Compute approximate p-value from standard normal distribution (Z)
    const pValue = 2 * (1 - this.normalCDF(Math.abs(zScore)));
    
    // Update Results UI
    document.getElementById("ab-rate-a").innerText = `${(rateA * 100).toFixed(2)}%`;
    document.getElementById("ab-rate-b").innerText = `${(rateB * 100).toFixed(2)}%`;
    document.getElementById("ab-p-val").innerText = pValue.toFixed(4);
    
    const conclusionBox = document.getElementById("ab-conclusion-text");
    if (pValue < 0.05) {
      conclusionBox.className = "ab-conclusion";
      conclusionBox.innerHTML = `<strong>Result: Statistically Significant! (p = ${pValue.toFixed(4)})</strong><br>Reject the Null Hypothesis. There is a real difference between Campaign A and B.`;
    } else {
      conclusionBox.className = "ab-conclusion insignificant";
      conclusionBox.innerHTML = `<strong>Result: Not Statistically Significant (p = ${pValue.toFixed(4)})</strong><br>Fail to reject the Null Hypothesis. The observed conversion difference is likely due to random variance.`;
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
