import Reveal from '../components/Reveal.jsx'
import Tabs from '../components/Tabs.jsx'

const services = [
  {
    label: 'Cost Accounting',
    content:
      'I provide comprehensive cost accounting services to help businesses understand and control their cost structures. This includes product costing, variance analysis, overhead allocation, and cost behavior studies. By identifying inefficiencies and cost drivers, I enable organizations to optimize pricing, improve margins, and enhance overall operational performance through data-driven cost control frameworks.',
  },
  {
    label: 'Financial Planning & Analysis',
    content:
      'My FP&A services focus on delivering strategic insights through budgeting, forecasting, and performance analysis. I develop financial models, dashboards, and KPI frameworks that support executive decision-making. By analyzing trends and scenario outcomes, I help businesses anticipate risks, allocate resources effectively, and achieve sustainable growth aligned with their strategic objectives.',
  },
  {
    label: 'Budgeting & Forecasting',
    content:
      'I assist organizations in creating accurate and flexible budgets and rolling forecasts tailored to their business needs. This includes scenario planning, sensitivity analysis, and cash flow projections. My approach ensures financial plans remain adaptive to changing market conditions while providing clarity and control over future financial performance.',
  },
  {
    label: 'Tax Consulting',
    content:
      'My tax consulting services cover compliance reviews, tax planning, and filing support to ensure regulatory accuracy and efficiency. I help streamline tax processes, minimize liabilities, and maintain compliance with applicable laws. By aligning tax strategies with business goals, I support long-term financial stability and risk mitigation.',
  },
  {
    label: 'Audit Support',
    content:
      'I provide end-to-end audit support, including pre-audit preparation, documentation, reconciliations, and liaison with auditors. My services help ensure a smooth audit process by addressing discrepancies, improving internal controls, and enhancing transparency. This reduces audit risks and strengthens financial credibility.',
  },
  {
    label: 'Business Advisory',
    content:
      'My business advisory services focus on profitability analysis, pricing strategies, cost optimization, and growth planning. I work closely with leadership teams to identify improvement opportunities and develop actionable financial roadmaps. By combining financial insights with strategic thinking, I help businesses drive efficiency, competitiveness, and long-term success.',
  },
]


export default function Services() {
  return (
    <section className="services">
      <Reveal>
        <div className="services-card">
          <h2>Services</h2>
          <Tabs items={services} />
        </div>
      </Reveal>
    </section>
  )
}
