// Experience data (replace with your real data or fetch from JSON)
const experiences = [
  {
    role: 'Senior Data Consultant',
    company: 'Sonova Group',
    location: 'Berlin, Germany',
    years: 'April 2023 – Present',
    logo: 'assets/icons/CompanyLogos/Sonova.png',
    description: [
      'Led Data Innovation & BI Revamp: Overhauled BI architecture by introducing modern tools and processes, significantly improving data quality, governance, and reporting efficiency and conducting change management workshops in Berlin, Dortmund, Rotterdam, Belgium, Warsaw, Milan and Paris.',
      'Power BI & Dashboard Development Global Rollout: Designed and maintained KPI dashboards in Power BI to track key business metrics, driving a 2.1% QoQ sales increase and optimizing marketing spend across 11 countries ensuring the seamless integration with SAP Analytics Cloud. Gamification of dashboards led to 60% boost in engagement with a target audience of 1800.',
      'Board Reporting KPIs: Personally liaised with the CEO & Marketing VP of Sonova for efficiently developing a reporting suite for the board meetings.',
      "Risk Management: Developed a strategy with the R&D team using Porter's 5 forces technique to navigate the threat of Apple’s hearing aid test feature with the new airpod launch in 2024, in turn we were able to tap in to search ads and increase the 1st sales appointments in US, CA, EU regions.",
      'Team Leadership: Managed a cross-functional Kaizen team of 14 members, leading data-driven initiatives across 6 countries, resulting in a 60% increase in resource productivity. Created priority settings using Eisenhower matrix to achieve goals in a short period.',
      'Sales Process Optimization: Identified inefficiencies in sales processes and built Power BI dashboards for daily management, streamlining operations and increasing resource utilization and implementing the correct OKRs. Extensively used waste reduction techniques.',
      'Automation & Data Pipelines: Automated data collection processes, reducing FTE time by 75% and improving the speed and accuracy of reporting of Operational dashboards.',
      'Predictive Analytics & Forecasting for In Store Performance Boost: Developed and deployed regression models using Scikit-learn and XGBoost to optimize labor costs by forecasting staffing needs based on historical sales data and foot traffic.',
      'Cross-Department Collaboration: Worked closely with Marketing and Sales teams to create custom data solutions and improve the customer journey and optimize the marketing budget by creating a custom actionable model.',
      'Marketing: Campaign performance reporting and Marketing ROI assessments.'
    ]
  },
  {
    role: 'Customer Growth and Retention Lead',
    company: 'felmo GmbH',
    location: 'Berlin, Germany',
    years: 'April 2022 – March 2023',
    logo: 'assets/icons/CompanyLogos/felmo.png',
    description: [
      'BI & KPI Reporting: Created and maintained key performance dashboards for marketing, sales, and product teams to track customer growth and retention metrics, driving business insights.',
      'Cross-Functional Data Solutions: Collaborated with product, CRM, and marketing teams to develop RFM models and optimize customer segmentation, leading to an 11% increase in revenue.',
      'Geospatial & IoT Data Analysis: Utilized Geopandas and ArcGIS to optimize delivery routes and improve mobile veterinarian utilization rates and rider optimization, enhancing operational efficiency.',
      'A/B Testing & Experimentation: Conducted A/B testing on new revenue experiments, increasing revenue by 11% MoM and significantly impacting investor interest during funding rounds.',
      'Sustainability Reporting: Spearheaded the development of a Sustainability Dashboard for eCommerce, aligning with corporate sustainability goals.'
    ]
  },
  {
    role: 'Data Science Associate',
    company: 'JP Morgan & Chase',
    location: 'Mumbai, India',
    years: 'June 2019 – March 2022',
    logo: 'assets/icons/CompanyLogos/jpmorgan.png',
    description: [
      'Advanced Data Analytics: Performed data analysis using Adobe Analytics, Tableau, and SQL, measuring marketing model performance and customer behaviors to optimize acquisition strategies.',
      'Customer Segmentation & RFM Modeling: Led customer segmentation projects using RFM analysis, resulting in a 8% MoM increase in new retirement account acquisitions in Wealth Management.',
      'Root Cause Analysis: Performed A3PS, Pareto, 5 Whys, Value Stream Mapping and SWOT analysis and developed an RACI matrix to solve the portfolio customer acquisition bottlenecks.',
      'Team Management: Created the Skill-Will matrix to hone the strengths and nurture the weaknesses, created SMART goals and Moscow matrix for team efficiency.',
      'A/B Testing & Optimization: Developed A/B and multi-armed bandit models to optimize marketing and customer retention strategies, reducing drop-off rates by 7%.',
      'Predictive Analytics: Built models using Scikit-learn to forecast customer behavior and engagement, improving client interactions and marketing ROI.',
      'Business KPI Reporting: Created and maintained business KPIs for customer acquisition, retention, and campaign performance, driving business decisions based on actionable insights.',
      'Anomaly & Fraud Detection: Created models to detect unusual transactions in payments and flags to follow protection guidelines promptly.',
      'NPS, Customer Advocacy & Churn: Created models and a holistic churn funnel view to find detractors and take proactive steps. Ex: Dirty profit (dues, penalties) reduction analytics.',
      'Waste Management: Created self service suite analytics in FAQs and learning videos to increase mobile and ATM interactions leading to 23% reduction in time at the bank and customer care.'
    ]
  },
  {
    role: 'Data Analytics Lead',
    company: 'Accenture Ltd',
    location: 'Mumbai, India',
    years: 'May 2017 – May 2019',
    logo: 'assets/icons/CompanyLogos/accenture.png',
    description: [
      'Tableau Dashboard Lead: Led the design and optimization of Tableau reports for reinsurance managers, reducing load time by 35% and improving the accuracy of business KPIs.',
      'Managed a team of analysts and provided training on Tableau and data analysis techniques, enabling stakeholders to make data-driven decisions.'
    ]
  },
  {
    role: 'Senior Data Analyst',
    company: 'Mastek Ltd',
    location: 'Mumbai, India',
    years: 'January 2015 – May 2017',
    logo: 'assets/icons/CompanyLogos/Mastek.png',
    description: [
      'Database & ETL Development: Designed and implemented databases, ETL processes, and Tableau reports for Capita Social Services, supporting monitoring of student-related activities across UK.'
    ]
  },
  {
    role: 'Data Analyst',
    company: 'TCS Ltd',
    location: 'Mumbai, India',
    years: 'September 2011 – January 2015',
    logo: 'assets/icons/CompanyLogos/tcs.png',
    description: [
      'Report Development & Automation: Applied domain knowledge to develop SQL Server-based reports for Procurement & Sourcing teams, automating key reporting processes using SSRS.'
    ]
  }
];

function renderExperience() {
  const grid = document.getElementById('experience-grid');
  grid.innerHTML = '';
  experiences.forEach((exp, idx) => {
    const card = document.createElement('div');
    card.className = 'exp-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${exp.role} at ${exp.company}`);
    card.addEventListener('click', () => showExpModal(exp));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') showExpModal(exp);
    });

    const logo = document.createElement('img');
    logo.className = 'exp-logo';
    logo.src = exp.logo;
    logo.alt = exp.company + ' logo';
    card.appendChild(logo);

    const role = document.createElement('div');
    role.className = 'exp-role';
    role.textContent = exp.role;
    card.appendChild(role);

    const company = document.createElement('div');
    company.className = 'exp-company';
    company.textContent = exp.company;
    card.appendChild(company);

    const meta = document.createElement('div');
    meta.className = 'exp-meta';
    meta.textContent = `${exp.location} | ${exp.years}`;
    card.appendChild(meta);

    // Add prompt span for accessibility and visual cue
    const prompt = document.createElement('span');
    prompt.className = 'exp-prompt';
    prompt.textContent = 'Click for more details';
    card.appendChild(prompt);

    grid.appendChild(card);
  });
}

function showExpModal(exp) {
  const modal = document.getElementById('exp-modal');
  const details = document.getElementById('exp-modal-details');
  details.innerHTML = `
    <h2>${exp.role}</h2>
    <h3>${exp.company} <span style='font-size:1rem;font-weight:400;'>| ${exp.location}</span></h3>
    <p style='color:#228be6; font-weight:500;'>${exp.years}</p>
    <ul>${(exp.description||[]).map(d => `<li>${d}</li>`).join('')}</ul>
  `;
  modal.style.display = 'flex';
  setTimeout(() => modal.focus(), 10);
}
function hideExpModal() {
  document.getElementById('exp-modal').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
  renderExperience();
  const modal = document.getElementById('exp-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) hideExpModal();
    });
    document.querySelector('.exp-modal-close').addEventListener('click', hideExpModal);
    document.querySelector('.exp-modal-close').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') hideExpModal();
    });
  }
});
