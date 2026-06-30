// Module 9: Business Analytics
window.HQModules = window.HQModules || {};

window.HQModules.business = {
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
  playgroundType: "none",

  flashcards: [
    { front: "Customer Lifetime Value (CLV)", back: "The total revenue or profit a business can expect to earn from a single customer throughout the entire duration of their business relationship.", category: "Business Analytics" }
  ],

  quiz: [
    { question: "How is Customer Lifetime Value (CLV) calculated?", options: ["Monthly Active Users * Churn", "Average Purchase Value * Purchase Frequency * Customer Lifespan", "Total Profit / Marketing cost", "ARR + MRR + CAC"], answer: 1, explanation: "CLV is calculated by multiplying the average value of a purchase by the number of times a customer buys per year, multiplied by the average lifespan of a customer relationship." },
    { question: "What is Customer Churn Rate?", options: ["The percentage of customers gained per month", "The speed of server database updates", "The percentage of existing customers who stop doing business with a company in a given time frame", "The cost of acquiring a new customer"], answer: 2, explanation: "Churn rate is the rate at which customers cancel subscriptions or stop purchasing in a given period. Formula: (Customers lost / Customers at start of period) * 100." },
    { question: "What does RFM stand for in customer segmentation?", options: ["Revenue, Frequency, Marketing", "Recency, Frequency, Monetary value", "Retention, Funnels, Management", "Read, Filter, Merge"], answer: 1, explanation: "RFM stands for Recency (how recently did they buy?), Frequency (how often do they buy?), and Monetary value (how much do they spend?). It is a standard segmentation method." },
    { question: "What represents a Net Promoter Score (NPS) Promoter category?", options: ["Customers rating 7 or 8", "Customers rating 9 or 10", "Customers rating 0 to 6", "Customers purchasing daily"], answer: 1, explanation: "NPS categorizes ratings: Promoters are 9-10 (highly satisfied), Passives are 7-8, and Detractors are 0-6. NPS = % Promoters - % Detractors." },
    { question: "What is the primary objective of Funnel Analysis?", options: ["Sorting data tables quickly", "Measuring user dropout rates across sequential stages of a customer journey (e.g., Signup -> Add to Cart -> Purchase)", "Creating visual circle charts", "Calculating compound interest rates"], answer: 1, explanation: "Funnel analysis tracks the customer journey across consecutive steps, highlighting critical dropout points where customers abandon the funnel, pointing to optimization areas." }
  ]
};
