import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | TorqueDesk AI',
};

export default function PricingPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<style>
/* ═══════════════════════════════════════════════════════════════
   PRICING PAGE SPECIFIC STYLES
   ═══════════════════════════════════════════════════════════════ */

/* HERO SECTION */
.pricing-hero {
  padding: 9rem 2rem 4rem;
  text-align: center;
  background: linear-gradient(135deg, var(--deep), var(--hero));
  position: relative;
  overflow: visible;
}

.pricing-hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 80%;
  height: 200%;
  background: radial-gradient(circle, rgba(45, 156, 219, 0.05) 0%, transparent 60%);
  pointer-events: none;
}

.pricing-hero h1 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.pricing-hero .subtitle {
  color: var(--light-gray);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  font-size: 1.05rem;
  position: relative;
  z-index: 1;
}

.pricing-hero .breadcrumb {
  margin-bottom: 2rem;
  font-size: 0.85rem;
  color: var(--gray);
  position: relative;
  z-index: 1;
}

.pricing-hero .breadcrumb a {
  color: var(--gray);
  transition: color 0.2s;
}

.pricing-hero .breadcrumb a:hover {
  color: var(--accent);
}

.pricing-hero .breadcrumb span {
  margin: 0 0.5rem;
  color: var(--gray);
}

/* TOGGLE PRICING */
.pricing-toggle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
}

.pricing-toggle {
  display: inline-flex;
  background: var(--card);
  border: 1px solid var(--subtle);
  border-radius: 30px;
  padding: 6px;
  gap: 6px;
}

.pricing-toggle button {
  padding: 0.6rem 1.8rem;
  border-radius: 26px;
  border: none;
  background: transparent;
  color: var(--gray);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
}

.pricing-toggle button:hover {
  color: var(--accent);
}

.pricing-toggle button.active {
  background: var(--accent);
  color: var(--white);
}

.pricing-toggle .discount-badge {
  display: inline-block;
  background: rgba(59,130,196, 0.15);
  color: var(--secondary);
  padding: 0.35rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: 0.5rem;
  white-space: nowrap;
}

/* PRICING CARDS SECTION */
.pricing-section {
  padding: 2rem 2rem 4rem;
  background: var(--navy);
}

.pricing-grid {
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: start;
}

.price-card {
  background: var(--card);
  border: 1px solid var(--subtle);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  position: relative;
  transition: all 0.3s;
  overflow: visible;
  display: flex;
  flex-direction: column;
}

.price-card:hover {
  transform: translateY(-6px);
  border-color: rgba(45, 156, 219, 0.4);
}

.price-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--secondary));
  opacity: 1;
  transition: opacity 0.3s;
}

.price-card:hover::before {
  opacity: 1;
}

/* FEATURED CARD */
.price-card.featured {
  border: 2px solid var(--accent);
  box-shadow: 0 20px 60px rgba(45, 156, 219, 0.2);
  transform: scale(1.04);
  position: relative;
}

.price-card.featured:hover {
  transform: scale(1.04) translateY(-6px);
  box-shadow: 0 25px 80px rgba(45, 156, 219, 0.25);
}

.price-card.featured::before {
  opacity: 1;
}

.price-card .badge {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent);
  color: var(--white);
  padding: 0.4rem 1.4rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;
  z-index: 2;
}

.price-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
  color: var(--white);
}

.price-card .price {
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 0.3rem;
  letter-spacing: -1px;
}

.price-card .price-period {
  font-size: 0.9rem;
  color: var(--gray);
  font-weight: 400;
  display: block;
}

.price-card .price-annual {
  font-size: 0.95rem;
  color: var(--gray);
  margin-bottom: 1.5rem;
  display: block;
}

.price-card .desc {
  font-size: 0.9rem;
  color: var(--gray);
  margin-bottom: 2rem;
  line-height: 1.5;
}

.price-card ul {
  list-style: none;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.price-card ul li {
  padding: 0.6rem 0;
  font-size: 0.9rem;
  color: var(--light-gray);
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  line-height: 1.4;
}

.price-card ul li::before {
  content: '';
  width: 18px;
  height: 18px;
  border-radius: 3px;
  background: rgba(59,130,196, 0.2);
  border: 1px solid var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
  position: relative;
}

.price-card ul li::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 8px;
  border-right: 2px solid var(--secondary);
  border-bottom: 2px solid var(--secondary);
  transform: rotate(-45deg);
  left: 5px;
  top: 50%;
  margin-top: -4px;
}

.price-card ul li.highlight {
  color: var(--accent);
  font-weight: 600;
  margin: 0.8rem 0;
}

.price-card ul li.highlight::before {
  background: rgba(45, 156, 219, 0.2);
  border-color: var(--accent);
}

.price-card ul li.highlight::after {
  border-right-color: var(--accent);
  border-bottom-color: var(--accent);
}

.price-card .card-btn {
  display: block;
  width: 100%;
  padding: 0.9rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  margin-top: auto;
}

.price-card .card-btn.primary {
  background: var(--accent);
  color: var(--white);
}

.price-card .card-btn.primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(45, 156, 219, 0.3);
}

.price-card .card-btn.outline {
  background: transparent;
  color: var(--accent);
  border: 1.5px solid var(--subtle);
}

.price-card .card-btn.outline:hover {
  border-color: var(--accent);
  background: rgba(45, 156, 219, 0.05);
}

/* MONEY-BACK GUARANTEE SECTION */
.guarantee-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(59,130,196, 0.05), rgba(45, 156, 219, 0.05));
  border-top: 1px solid var(--subtle);
  border-bottom: 1px solid var(--subtle);
}

.guarantee-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.guarantee-card {
  background: var(--card);
  border: 1px solid var(--subtle);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: visible;
  transition: all 0.3s;
}

.guarantee-card:hover {
  border-color: var(--secondary);
  transform: translateY(-4px);
}

.guarantee-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--secondary);
  opacity: 1;
  transition: opacity 0.3s;
}

.guarantee-card:hover::before {
  opacity: 1;
}

.guarantee-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.guarantee-card h3 {
  font-size: 1.2rem;
  color: var(--white);
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.guarantee-card p {
  color: var(--light-gray);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* WHAT'S INCLUDED SECTION */
.included-section {
  padding: 5rem 2rem;
  background: var(--navy);
}

.included-container {
  max-width: 1200px;
  margin: 0 auto;
}

.included-title {
  text-align: center;
  margin-bottom: 3rem;
}

.included-title h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.included-title p {
  color: var(--gray);
  font-size: 1rem;
}

.included-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.included-item {
  background: var(--card);
  border: 1px solid var(--subtle);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  transition: all 0.3s;
}

.included-item:hover {
  border-color: var(--accent);
  background: rgba(45, 156, 219, 0.05);
}

.included-item-icon {
  width: 40px;
  height: 40px;
  background: rgba(45, 156, 219, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary);
  font-weight: 700;
  flex-shrink: 0;
  font-size: 1.2rem;
}

.included-item h3 {
  color: var(--white);
  font-size: 1rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
}

.included-item p {
  color: var(--light-gray);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

/* ROI CALCULATOR SECTION */
.roi-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, var(--hero), var(--dark-blue));
  position: relative;
  overflow: visible;
}

.roi-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(45, 156, 219, 0.05), transparent 70%);
  pointer-events: none;
}

.roi-container {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.roi-title {
  text-align: center;
  margin-bottom: 3rem;
}

.roi-title h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.roi-title p {
  color: var(--gray);
  font-size: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.roi-calculator {
  background: rgba(12, 20, 38, 0.6);
  border: 1px solid var(--subtle);
  border-radius: 14px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  margin-bottom: 3rem;
}

.calc-inputs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.calc-input {
  display: flex;
  flex-direction: column;
}

.calc-input label {
  color: var(--light-gray);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.calc-input input {
  background: var(--card);
  border: 1px solid var(--subtle);
  border-radius: 8px;
  padding: 0.8rem;
  color: var(--accent);
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s;
}

.calc-input input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(45, 156, 219, 0.1);
}

.roi-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--subtle);
}

.roi-result {
  text-align: center;
}

.roi-result .value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.roi-result .label {
  color: var(--light-gray);
  font-size: 0.9rem;
}

.roi-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.roi-stat {
  background: rgba(12, 20, 38, 0.6);
  border: 1px solid var(--subtle);
  border-radius: 14px;
  padding: 2.5rem 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
}

.roi-stat .value {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--secondary);
  margin-bottom: 0.8rem;
}

.roi-stat .label {
  color: var(--light-gray);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
}

/* REAL RESULTS SECTION */
.results-section {
  padding: 5rem 2rem;
  background: var(--navy);
}

.results-container {
  max-width: 1200px;
  margin: 0 auto;
}

.results-title {
  text-align: center;
  margin-bottom: 3rem;
}

.results-title h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.result-metric {
  background: var(--card);
  border: 1px solid var(--subtle);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s;
  position: relative;
  overflow: visible;
}

.result-metric:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}

.result-metric::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--secondary));
  opacity: 1;
  transition: opacity 0.3s;
}

.result-metric:hover::before {
  opacity: 1;
}

.result-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 0.8rem;
}

.result-label {
  color: var(--light-gray);
  font-size: 1rem;
  line-height: 1.6;
}

/* FEATURE COMPARISON TABLE */
.comparison-section {
  padding: 5rem 2rem;
  background: var(--navy);
}

.comparison-section .section-title h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
}

.comparison-container {
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;
}

.feature-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;
}

.feature-table thead {
  background: var(--dark-blue);
}

.feature-table thead th {
  padding: 1.2rem 1rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--white);
  border-bottom: 2px solid var(--subtle);
}

.feature-table thead th:first-child {
  text-align: left;
  background: var(--card);
}

.feature-table tbody td {
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  border-bottom: 1px solid var(--subtle);
}

.feature-table tbody td:first-child {
  text-align: left;
  background: var(--card);
  color: var(--light-gray);
  font-weight: 500;
}

.feature-table tbody tr:nth-child(odd) td:not(:first-child) {
  background: var(--hero);
}

.feature-table tbody tr:nth-child(even) td:not(:first-child) {
  background: var(--card);
}

.check-mark {
  color: var(--secondary);
  font-weight: 700;
  font-size: 1.1rem;
}

.feature-label {
  color: var(--light-gray);
  font-size: 0.9rem;
}

/* ENTERPRISE FEATURES SECTION */
.enterprise-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, var(--hero), var(--deep));
  position: relative;
  overflow: visible;
}

.enterprise-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(59,130,196, 0.03), transparent 70%);
  pointer-events: none;
}

.enterprise-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.enterprise-title {
  text-align: center;
  margin-bottom: 3rem;
}

.enterprise-title h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.enterprise-title p {
  color: var(--gray);
  font-size: 1rem;
}

.enterprise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.enterprise-feature {
  background: rgba(12, 20, 38, 0.6);
  border: 1px solid var(--subtle);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s;
}

.enterprise-feature:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}

.enterprise-feature h3 {
  color: var(--white);
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.enterprise-feature p {
  color: var(--light-gray);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* COMPETITOR COMPARISON */
.competitor-section {
  padding: 5rem 2rem;
  background: var(--navy);
  position: relative;
  overflow: visible;
}

.competitor-section::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(59,130,196, 0.03), transparent 70%);
  pointer-events: none;
}

.competitor-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.competitor-title {
  text-align: center;
  margin-bottom: 3rem;
}

.competitor-title h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.competitor-title p {
  color: var(--gray);
  font-size: 1rem;
}

.competitor-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;
}

.competitor-table thead th {
  padding: 1.2rem 1rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--white);
  background: var(--dark-blue);
  border-bottom: 2px solid var(--subtle);
}

.competitor-table thead th:first-child {
  text-align: left;
  background: var(--card);
}

.competitor-table thead th.tdai-col {
  background: linear-gradient(135deg, var(--accent), var(--secondary));
  color: var(--white);
}

.competitor-table tbody td {
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  border-bottom: 1px solid var(--subtle);
}

.competitor-table tbody td:first-child {
  text-align: left;
  background: var(--card);
  color: var(--light-gray);
  font-weight: 500;
}

.competitor-table tbody tr:nth-child(odd) td:not(:first-child) {
  background: var(--hero);
}

.competitor-table tbody tr:nth-child(even) td:not(:first-child) {
  background: var(--card);
}

.competitor-table tbody tr td.tdai-col {
  background: rgba(45, 156, 219, 0.1);
}

/* FAQ SECTION */
.faq-section {
  padding: 5rem 2rem;
  background: var(--navy);
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-title {
  text-align: center;
  margin-bottom: 3rem;
}

.faq-title h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.faq-item {
  background: var(--card);
  border: 1px solid var(--subtle);
  border-radius: 10px;
  margin-bottom: 1rem;
  overflow: visible;
  transition: all 0.3s;
}

.faq-item:hover {
  border-color: rgba(45, 156, 219, 0.3);
}

.faq-item summary {
  padding: 1.3rem 1.8rem;
  font-weight: 600;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  color: var(--white);
  transition: all 0.3s;
  user-select: none;
}

.faq-item summary:hover {
  color: var(--accent);
}

.faq-item summary::after {
  content: '+';
  font-size: 1.5rem;
  color: var(--accent);
  font-weight: 300;
  transition: all 0.3s;
  min-width: 24px;
  text-align: right;
}

.faq-item[open] summary::after {
  content: '−';
  transform: rotate(0deg);
}

.faq-item .answer {
  padding: 0 1.8rem 1.3rem;
  color: var(--light-gray);
  font-size: 0.9rem;
  line-height: 1.8;
  
}

/* CTA BANNER */
.cta-banner {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, var(--hero), var(--dark-blue));
  text-align: center;
  position: relative;
  overflow: visible;
}

.cta-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(45, 156, 219, 0.08), transparent 70%);
  pointer-events: none;
}

.cta-banner h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.cta-banner p {
  color: var(--gray);
  margin-bottom: 2rem;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  font-size: 1rem;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .price-card.featured {
    grid-column: 1 / -1;
    max-width: 500px;
    margin: 0 auto;
  }

  .roi-stats {
    grid-template-columns: 1fr;
  }

  .calc-inputs {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .pricing-hero {
    padding: 7rem 1.5rem 3rem;
  }

  .pricing-hero h1 {
    font-size: 2rem;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .price-card.featured {
    transform: scale(1);
    max-width: 100%;
  }

  .price-card.featured:hover {
    transform: translateY(-6px);
  }

  .pricing-toggle-container {
    flex-direction: column;
    gap: 1rem;
  }

  .roi-stats {
    grid-template-columns: 1fr;
  }

  .feature-table,
  .competitor-table {
    font-size: 0.8rem;
  }

  .feature-table thead th,
  .competitor-table thead th {
    padding: 0.8rem 0.5rem;
  }

  .feature-table tbody td,
  .competitor-table tbody td {
    padding: 0.8rem 0.5rem;
  }

  .pricing-hero h1 {
    font-size: 1.8rem;
  }

  .pricing-hero .subtitle {
    font-size: 0.95rem;
  }

  .faq-item summary {
    padding: 1rem 1.2rem;
  }

  .faq-item .answer {
    padding: 0 1.2rem 1rem;
  }

  .cta-banner h2 {
    font-size: 1.6rem;
  }
}

@media (max-width: 600px) {
  .pricing-hero {
    padding: 6rem 1rem 2rem;
  }

  .pricing-hero h1 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  .pricing-hero .subtitle {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  .pricing-toggle button {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }

  .price-card {
    padding: 1.8rem 1.5rem;
  }

  .price-card h3 {
    font-size: 1.1rem;
  }

  .price-card .price {
    font-size: 2.5rem;
  }

  .roi-section,
  .faq-section,
  .comparison-section,
  .competitor-section,
  .guarantee-section,
  .included-section,
  .results-section,
  .enterprise-section {
    padding: 3rem 1rem;
  }

  .roi-title h2,
  .competitor-title h2,
  .faq-title h2,
  .included-title h2,
  .results-title h2,
  .enterprise-title h2 {
    font-size: 1.5rem;
  }

  .roi-stat .value {
    font-size: 2rem;
  }

  .faq-container {
    padding: 0 1rem;
  }

  .cta-banner {
    padding: 3rem 1rem;
  }

  .cta-banner h2 {
    font-size: 1.4rem;
  }

  .guarantee-container,
  .included-grid,
  .results-grid,
  .enterprise-grid {
    grid-template-columns: 1fr;
  }
}

/* ============== CREATIVE EXTRAS ============== */
/* Back to Top Button */
.back-to-top{position:fixed;bottom:30px;right:30px;width:48px;height:48px;background:var(--accent,#2D9CDB);color:#fff;border:none;border-radius:50%;font-size:1.4rem;cursor:pointer;opacity:0;visibility:hidden;transition:all .3s ease;z-index:999;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(45,156,219,0.3)}
.back-to-top.show{opacity:1;visibility:visible}
.back-to-top:hover{background:#1a8bc7;transform:translateY(-3px);box-shadow:0 8px 25px rgba(45,156,219,0.4)}
/* Cookie Banner */
.cookie-banner{position:fixed;bottom:0;left:0;right:0;background:var(--card,#0C1528);border-top:1px solid var(--subtle,#142238);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;gap:1.5rem;z-index:998;transform:translateY(100%);transition:transform .4s ease;flex-wrap:wrap}
.cookie-banner.show{transform:translateY(0)}
.cookie-banner p{color:var(--gray,#8A94A6);font-size:.85rem;flex:1;min-width:200px}
.cookie-banner p a{color:var(--accent,#2D9CDB)}
.cookie-btns{display:flex;gap:.75rem}
.cookie-btns button{padding:.5rem 1.2rem;border-radius:6px;font-size:.8rem;font-weight:600;cursor:pointer;border:none;transition:all .2s}
.cookie-accept{background:var(--accent,#2D9CDB);color:#fff}
.cookie-accept:hover{background:#1a8bc7}
.cookie-decline{background:var(--subtle,#142238);color:var(--light-gray,#B0BCCC);border:1px solid var(--subtle,#142238)}
.cookie-decline:hover{border-color:var(--accent,#2D9CDB)}


/* ============== LOADING SCREEN ============== */
.loader-screen{position:fixed;inset:0;z-index:99999;background:linear-gradient(135deg,#040812 0%,#081020 50%,#0A1225 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .6s ease,visibility .6s ease}
.loader-screen.hidden{opacity:0;visibility:hidden;pointer-events:none}
.loader-logo{font-size:1.6rem;font-weight:800;letter-spacing:3px;margin-bottom:40px;background:linear-gradient(135deg,#2D9CDB 0%,#3B82C4 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;opacity:0;animation:loaderFadeIn .8s ease .2s forwards}
.loader-ring-container{position:relative;width:120px;height:120px;margin-bottom:50px}
.loader-ring{position:absolute;inset:0;border-radius:50%;border:2px solid transparent;border-top-color:#2D9CDB;animation:loaderSpin 1.2s linear infinite}
.loader-ring:nth-child(2){inset:10px;border-top-color:rgba(45,156,219,0.6);animation-duration:1.6s;animation-direction:reverse}
.loader-ring:nth-child(3){inset:20px;border-top-color:#3B82C4;animation-duration:2s}
.loader-dot{position:absolute;width:12px;height:12px;background:linear-gradient(135deg,#2D9CDB,#3B82C4);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);animation:loaderPulse 1.5s ease-in-out infinite}
.loader-progress-track{width:200px;height:3px;background:rgba(45,156,219,0.15);border-radius:3px;overflow:hidden;margin-bottom:20px;opacity:0;animation:loaderFadeIn .5s ease .5s forwards}
.loader-progress-bar{height:100%;width:0;background:linear-gradient(90deg,#2D9CDB,#3B82C4);border-radius:3px;animation:loaderProgress 1.8s ease-in-out forwards}
.loader-text{font-size:.85rem;color:#8A94A6;letter-spacing:2px;text-transform:uppercase;opacity:0;animation:loaderFadeIn .5s ease .6s forwards}
.loader-text span{display:inline-block;animation:loaderDots 1.4s steps(4,end) infinite}
@keyframes loaderSpin{to{transform:rotate(360deg)}}
@keyframes loaderPulse{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:1}50%{transform:translate(-50%,-50%) scale(1.5);opacity:.5}}
@keyframes loaderProgress{0%{width:0}60%{width:70%}100%{width:100%}}
@keyframes loaderFadeIn{to{opacity:1}}
@keyframes loaderDots{0%{content:''}25%{content:'.'}50%{content:'..'}75%{content:'...'}}


/* ============== REDESIGNED PAGE NAVIGATION ============== */
.page-nav{padding:0;background:transparent;border:none}
.next-page-cta{position:relative;padding:5rem 2rem;background:linear-gradient(135deg,rgba(45,156,219,0.06) 0%,rgba(59,130,196,0.04) 50%,rgba(45,156,219,0.06) 100%);border-top:1px solid rgba(45,156,219,0.12);overflow:hidden}
.next-page-cta::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(45,156,219,0.4),rgba(59,130,196,0.4),transparent)}
.next-page-cta::after{content:'';position:absolute;bottom:-200px;right:-200px;width:500px;height:500px;background:radial-gradient(circle,rgba(45,156,219,0.08),transparent 70%);pointer-events:none}
.next-page-inner{max-width:900px;margin:0 auto;text-align:center;position:relative;z-index:1}
.next-page-label{font-size:.8rem;text-transform:uppercase;letter-spacing:3px;color:var(--gray,#8A94A6);margin-bottom:1rem;font-weight:600}
.next-page-title{font-size:2.4rem;font-weight:800;margin-bottom:.6rem;color:var(--white,#fff)}
.next-page-title span{background:linear-gradient(135deg,#2D9CDB,#3B82C4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.next-page-desc{color:var(--gray,#8A94A6);font-size:1rem;margin-bottom:2.5rem;max-width:500px;margin-left:auto;margin-right:auto}
.next-page-btn{display:inline-flex;align-items:center;gap:12px;padding:1.1rem 3rem;background:linear-gradient(135deg,#2D9CDB,#3B82C4);color:#fff;font-size:1.1rem;font-weight:700;border-radius:12px;text-decoration:none;transition:all .4s ease;box-shadow:0 4px 20px rgba(45,156,219,0.3);position:relative;overflow:hidden}
.next-page-btn::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,#3B82C4,#2D9CDB);opacity:0;transition:opacity .4s ease}
.next-page-btn:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(45,156,219,0.4);color:#fff}
.next-page-btn:hover::before{opacity:1}
.next-page-btn .btn-text{position:relative;z-index:1}
.next-page-btn .btn-arrow{position:relative;z-index:1;font-size:1.4rem;transition:transform .3s ease}
.next-page-btn:hover .btn-arrow{transform:translateX(6px)}
.page-dots{display:flex;justify-content:center;gap:8px;margin-top:2.5rem}
.page-dot{width:8px;height:8px;border-radius:50%;background:rgba(45,156,219,0.2);transition:all .3s ease;cursor:pointer;text-decoration:none;display:block}
.page-dot:hover{background:rgba(45,156,219,0.5);transform:scale(1.3)}
.page-dot.active{background:linear-gradient(135deg,#2D9CDB,#3B82C4);width:28px;border-radius:10px}
.page-counter-text{color:var(--gray,#8A94A6);font-size:.8rem;margin-top:1rem;letter-spacing:1px}
.prev-page-link{display:inline-block;margin-top:1.5rem;color:var(--gray,#8A94A6);font-size:.85rem;text-decoration:none;transition:color .3s}
.prev-page-link:hover{color:#2D9CDB}


/* ============== VISUAL ENHANCEMENTS ============== */
/* Animated gradient accent line */
.gradient-line{height:2px;background:linear-gradient(90deg,transparent,#2D9CDB,#3B82C4,#2D9CDB,transparent);background-size:200% 100%;animation:gradientSlide 4s linear infinite}
@keyframes gradientSlide{0%{background-position:200% 0}100%{background-position:-200% 0}}

/* Glowing card borders on hover */
.glow-card{position:relative;background:var(--card,#0C1528);border:1px solid var(--subtle,#142238);border-radius:14px;padding:2rem;transition:all .4s ease;overflow:hidden}
.glow-card::after{content:'';position:absolute;inset:-1px;border-radius:14px;background:linear-gradient(135deg,#2D9CDB,#3B82C4,#2D9CDB);opacity:0;transition:opacity .4s ease;z-index:-1;filter:blur(1px)}
.glow-card:hover::after{opacity:.6}
.glow-card:hover{border-color:transparent;box-shadow:0 0 30px rgba(45,156,219,0.15);transform:translateY(-4px)}

/* Decorative floating orbs */
.orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(60px);opacity:.15}
.orb-blue{background:#2D9CDB}
.orb-secondary{background:#3B82C4}

/* Section divider with gradient */
.section-divider{width:60px;height:3px;background:linear-gradient(90deg,#2D9CDB,#3B82C4);border-radius:3px;margin:0 auto 2rem}

/* Shimmer text effect for headings */
.shimmer-text{background:linear-gradient(90deg,var(--white,#fff) 0%,rgba(45,156,219,0.6) 50%,var(--white,#fff) 100%);background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmerText 5s linear infinite}
@keyframes shimmerText{0%{background-position:200% 0}100%{background-position:-200% 0}}

/* Animated stat counters glow */
.stat-glow{text-shadow:0 0 20px rgba(45,156,219,0.3)}

/* Fancy HR divider */
.fancy-divider{border:none;height:1px;background:linear-gradient(90deg,transparent,rgba(45,156,219,0.3),transparent);margin:3rem 0}


/* ============== VISUAL RICHNESS ============== */
/* Subtle grid pattern overlay on body */
body::before{content:'';position:fixed;inset:0;background-image:
  linear-gradient(rgba(45,156,219,0.03) 1px,transparent 1px),
  linear-gradient(90deg,rgba(45,156,219,0.03) 1px,transparent 1px);
  background-size:60px 60px;pointer-events:none;z-index:0}
body>*{position:relative;z-index:1}

/* Enhanced nav with subtle glow */
nav,nav.navbar,.navbar{background:rgba(8,14,28,0.92)!important;backdrop-filter:blur(24px)!important;-webkit-backdrop-filter:blur(24px)!important}

/* Animated gradient line under nav */
nav .top-accent,nav::after{background:linear-gradient(90deg,#2D9CDB,#3B82C4,#2D9CDB,#3B82C4);background-size:300% 100%;animation:navGradient 6s linear infinite}
@keyframes navGradient{0%{background-position:0% 0}100%{background-position:300% 0}}

/* Cards get subtle animated border glow on hover */
.feature-card:hover,.card:hover,.test-card:hover,.testimonial-card:hover{
  box-shadow:0 0 30px rgba(45,156,219,0.12),0 20px 60px rgba(0,0,0,0.3)!important;
  border-color:rgba(45,156,219,0.4)!important}

/* Section headings get gradient underlines */
.section-title::after,h2.section-title::after{
  content:'';display:block;width:60px;height:3px;
  background:linear-gradient(90deg,#2D9CDB,#3B82C4);
  border-radius:3px;margin:1rem auto 0}
.section-header .section-title::after{margin:1rem auto 0}

/* Subtle radial glow behind hero sections */
.hero::after,.page-hero::after{
  content:'';position:absolute;top:50%;left:50%;
  transform:translate(-50%,-50%);width:800px;height:800px;
  background:radial-gradient(circle,rgba(45,156,219,0.06),transparent 60%);
  pointer-events:none;z-index:0}

/* Enhanced buttons with subtle glow */
.btn-primary{box-shadow:0 4px 15px rgba(45,156,219,0.25)}
.btn-primary:hover{box-shadow:0 8px 30px rgba(45,156,219,0.4)!important}

/* Stats numbers get a subtle glow */
.stat-number,.stat-item .number{text-shadow:0 0 30px rgba(45,156,219,0.2)}

/* Footer gets a subtle gradient top */
footer::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,rgba(45,156,219,0.3),rgba(59,130,196,0.3),transparent)}

/* Badge/tag shimmer */
.tag,.badge,.tag-accent,.tag-secondary{transition:all .3s ease}
.tag:hover,.badge:hover{transform:scale(1.05)}

/* Smooth page transitions */
@keyframes pageIn{from{opacity:.92}to{opacity:1}}
body{animation:pageIn .4s ease}

/* Star ratings glow */
.star,.stars span{text-shadow:0 0 8px rgba(255,184,28,0.4)}

/* CTA section gets richer background */
.cta-banner::after{content:'';position:absolute;top:-100px;right:-100px;width:400px;height:400px;
  background:radial-gradient(circle,rgba(59,130,196,0.06),transparent 60%);pointer-events:none}

/* Pricing featured card glow */
.pricing-card.featured,.plan-card.featured{
  box-shadow:0 0 40px rgba(45,156,219,0.15);
  border-color:rgba(45,156,219,0.5)!important}

/* Smooth hover scale on integration items */
.integration-item:hover,.tech-badge:hover,.award-badge:hover{
  transform:translateY(-6px)!important;
  box-shadow:0 15px 40px rgba(45,156,219,0.15)!important}

/* Input focus glow enhancement */
input:focus,textarea:focus,select:focus{
  box-shadow:0 0 0 3px rgba(45,156,219,0.15),0 0 15px rgba(45,156,219,0.08)!important}

/* Cookie banner gets glass effect */
.cookie-banner{backdrop-filter:blur(16px)!important;-webkit-backdrop-filter:blur(16px)!important;
  background:rgba(16,25,46,0.95)!important}

/* Table header gets gradient */
table thead th,.styled-table thead th,.feature-table thead th,.comparison-table th{
  background:linear-gradient(135deg,rgba(45,156,219,0.12),rgba(59,130,196,0.06))!important}

/* Scrollbar styling */
::-webkit-scrollbar{width:8px}
::-webkit-scrollbar-track{background:rgba(6,10,20,0.8)}
::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#2D9CDB,#3B82C4);border-radius:4px}
::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg,#3B82C4,#2D9CDB)}


/* ============== PREMIUM OVERHAUL ============== */
/* Typography — Inter */
body{font-family:'Inter',system-ui,-apple-system,sans-serif!important;letter-spacing:-0.01em}
h1,h2,h3,h4,h5,h6{font-family:'Inter',system-ui,sans-serif!important;letter-spacing:-0.02em}
nav .logo{font-family:'Inter',system-ui,sans-serif!important}

/* Bright CTA accent — crisp white buttons with blue text for maximum pop */
.btn-primary{
  background:#fff!important;
  color:#081020!important;
  font-weight:700!important;
  box-shadow:0 4px 20px rgba(255,255,255,0.15)!important;
  border:none!important}
.btn-primary:hover{
  background:#E8F0FE!important;
  color:#081020!important;
  box-shadow:0 8px 35px rgba(255,255,255,0.15)!important;
  transform:translateY(-2px)!important}

/* Secondary buttons — outlined with white */
.btn-secondary{
  background:transparent!important;
  color:#fff!important;
  border:1.5px solid rgba(255,255,255,0.3)!important}
.btn-secondary:hover{
  border-color:#fff!important;
  background:rgba(255,255,255,0.05)!important;
  color:#fff!important}

/* Next Page button — gradient stands out */
.next-page-btn{
  background:linear-gradient(135deg,#2D9CDB,#1a6fb0)!important;
  box-shadow:0 4px 25px rgba(45,156,219,0.35)!important}
.next-page-btn:hover{
  box-shadow:0 12px 45px rgba(45,156,219,0.45)!important}
.next-page-btn::before{
  background:linear-gradient(135deg,#1a6fb0,#2D9CDB)!important}

/* Section background alternation for visual variety */
section:nth-of-type(odd){background:var(--navy)}
section:nth-of-type(even){background:linear-gradient(180deg,rgba(19,32,64,0.5),var(--navy))}

/* Hero sections get extra depth */
.hero,.page-hero{
  background:linear-gradient(160deg,#040812 0%,#081020 40%,#0F1C38 100%)!important;
  border-bottom:1px solid rgba(45,156,219,0.08)}

/* Stats bars — slightly elevated */
.stats,.stat-bar{
  background:linear-gradient(135deg,#0A1225,#0F1C38)!important;
  border-top:1px solid rgba(45,156,219,0.1);
  border-bottom:1px solid rgba(45,156,219,0.1)}

/* Card backgrounds — subtle elevation differences */
.feature-card,.card,.test-card,.testimonial-card{
  background:linear-gradient(160deg,#0C1528,#0A1225)!important;
  border:1px solid rgba(45,156,219,0.08)!important}
.feature-card:hover,.card:hover,.test-card:hover,.testimonial-card:hover{
  border-color:rgba(45,156,219,0.2)!important;
  background:linear-gradient(160deg,#0F1C38,#0C1528)!important}

/* CTA Banner — make it feel like a different world */
.cta-banner{
  background:linear-gradient(135deg,#0A1225,#0F1C38,#0A1225)!important;
  border-top:1px solid rgba(45,156,219,0.1);
  border-bottom:1px solid rgba(45,156,219,0.1)}

/* Footer — darker than everything */
footer{background:#030610!important;border-top:1px solid rgba(45,156,219,0.08)!important}

/* Headings — pure white for max contrast */
h1,h2{color:#fff!important}
h3{color:#E8EDF5!important}

/* Subtle text shadow on big headings for depth */
h1{text-shadow:0 2px 30px rgba(45,156,219,0.08)}

/* Tables — refined look */
table thead th,.styled-table thead th,.feature-table thead th{
  background:#0F1C38!important;
  border-bottom:2px solid rgba(45,156,219,0.15)!important}
table tbody td,.styled-table tbody td,.feature-table tbody td{
  border-bottom:1px solid rgba(19,32,64,0.8)!important}

/* Form inputs — cleaner */
input,textarea,select{
  background:#081020!important;
  border:1px solid rgba(45,156,219,0.12)!important}
input:focus,textarea:focus,select:focus{
  border-color:rgba(45,156,219,0.4)!important;
  box-shadow:0 0 0 3px rgba(45,156,219,0.1)!important}

/* Nav Start Free Trial button — extra bright */
nav .btn-primary{
  background:#fff!important;
  color:#081020!important;
  padding:0.5rem 1.2rem!important;
  font-size:0.82rem!important}
nav .btn-primary:hover{
  background:#E8F0FE!important;
  box-shadow:0 4px 20px rgba(255,255,255,0.2)!important}

/* Pricing featured card — elevated */
.pricing-card.featured,.plan-card.featured,.featured{
  border:1.5px solid rgba(45,156,219,0.3)!important;
  box-shadow:0 0 50px rgba(45,156,219,0.08)!important}

/* Cookie banner refined */
.cookie-accept{background:#fff!important;color:#081020!important;font-weight:700!important}
.cookie-accept:hover{background:#E8F0FE!important}

/* Smooth selection color */
::selection{background:rgba(45,156,219,0.3);color:#fff}


/* ============== LUXURY DESIGN UPGRADE ============== */
/* Inspired by Linear, Vercel, Perplexity — 2026 premium SaaS */

/* ── TYPOGRAPHY: Bigger, bolder, tighter ── */
h1{font-size:clamp(2.8rem,6vw,4.5rem)!important;font-weight:800!important;letter-spacing:-0.035em!important;line-height:1.08!important;color:#fff!important}
h2{font-size:clamp(2rem,4vw,3rem)!important;font-weight:700!important;letter-spacing:-0.03em!important;line-height:1.15!important;color:#fff!important}
h3{font-size:clamp(1.1rem,2vw,1.35rem)!important;font-weight:600!important;letter-spacing:-0.02em!important;line-height:1.3!important;color:#D4DCE8!important}
p,li,td,th{line-height:1.7!important}
.section-title p,.subtitle{font-size:1.05rem!important;color:#6B7D98!important;max-width:560px!important;margin-left:auto!important;margin-right:auto!important}

/* ── GENEROUS SPACING ── */
section,.section-padding{padding:7rem 2rem!important}
.page-hero,.hero{padding:10rem 2rem 6rem!important;min-height:auto!important}
.section-title{margin-bottom:4rem!important}
.container{max-width:1140px!important}

/* ── BACKGROUND: Gradient mesh for depth ── */
body{background:#060B1A!important}
body::before{background-image:
  radial-gradient(ellipse at 20% 0%,rgba(45,156,219,0.04) 0%,transparent 50%),
  radial-gradient(ellipse at 80% 100%,rgba(45,156,219,0.03) 0%,transparent 50%),
  linear-gradient(rgba(45,156,219,0.015) 1px,transparent 1px),
  linear-gradient(90deg,rgba(45,156,219,0.015) 1px,transparent 1px)!important;
  background-size:100% 100%,100% 100%,80px 80px,80px 80px!important}

/* ── NOISE TEXTURE for premium feel ── */
body::after{content:'';position:fixed;inset:0;opacity:0.015;pointer-events:none;z-index:0;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}

/* ── REFINED NAV: More glass, more blur ── */
nav{background:rgba(5,9,20,0.7)!important;backdrop-filter:blur(32px) saturate(150%)!important;-webkit-backdrop-filter:blur(32px) saturate(150%)!important;border-bottom:1px solid rgba(45,156,219,0.06)!important}
nav .top-accent{height:1px!important;background:linear-gradient(90deg,transparent,rgba(45,156,219,0.3),transparent)!important}
nav .logo{font-size:0.95rem!important;font-weight:700!important;letter-spacing:0.15em!important;color:#fff!important}
nav .links a{font-size:0.82rem!important;color:#6B7D98!important;font-weight:450!important}
nav .links a:hover,nav .links a.active{color:#fff!important}

/* ── CARDS: Refined, subtle, premium ── */
.feature-card,.card,.test-card,.testimonial-card,.method-card,.pricing-card,.plan-card{
  background:rgba(8,14,30,0.6)!important;
  border:1px solid rgba(255,255,255,0.025)!important;
  border-radius:16px!important;
  backdrop-filter:blur(10px)!important;
  -webkit-backdrop-filter:blur(10px)!important;
  padding:2.2rem!important;
  transition:all .35s cubic-bezier(0.4,0,0.2,1)!important}
.feature-card:hover,.card:hover,.test-card:hover,.testimonial-card:hover,.method-card:hover{
  border-color:rgba(45,156,219,0.12)!important;
  background:rgba(10,18,40,0.7)!important;
  box-shadow:0 20px 60px rgba(0,0,0,0.3),0 0 40px rgba(45,156,219,0.04)!important;
  transform:translateY(-4px)!important}

/* ── BUTTONS: Clean, confident ── */
.btn-primary,nav .btn-primary{
  background:#fff!important;color:#060B1A!important;font-weight:650!important;
  border-radius:10px!important;font-size:0.875rem!important;
  padding:0.7rem 1.6rem!important;letter-spacing:-0.01em!important;
  box-shadow:0 1px 3px rgba(0,0,0,0.2)!important;border:none!important}
.btn-primary:hover,nav .btn-primary:hover{
  background:#E4EAF2!important;color:#060B1A!important;
  box-shadow:0 8px 25px rgba(255,255,255,0.08)!important;
  transform:translateY(-1px)!important}
.btn-secondary{
  background:transparent!important;color:#B8C6D8!important;
  border:1px solid rgba(255,255,255,0.08)!important;
  border-radius:10px!important;font-weight:500!important}
.btn-secondary:hover{
  border-color:rgba(255,255,255,0.15)!important;
  background:rgba(255,255,255,0.025)!important;color:#fff!important}

/* ── HERO: Oversized, dramatic ── */
.hero,.page-hero{
  background:linear-gradient(180deg,#060B1A 0%,#070E22 50%,#091228 100%)!important;
  border-bottom:1px solid rgba(255,255,255,0.025)!important}
.hero::after,.page-hero::after{
  content:''!important;position:absolute!important;top:30%!important;left:50%!important;
  transform:translate(-50%,-50%)!important;width:1000px!important;height:600px!important;
  background:radial-gradient(ellipse,rgba(45,156,219,0.06),transparent 60%)!important;
  pointer-events:none!important}

/* ── SECTION TITLE: Refined underline ── */
.section-title::after{width:40px!important;height:2px!important;
  background:#2D9CDB!important;opacity:0.5!important;margin-top:1.5rem!important}

/* ── STATS: Premium feel ── */
.stat-number,.stat-item .number{
  font-size:clamp(2rem,4vw,3rem)!important;font-weight:800!important;
  letter-spacing:-0.03em!important;color:#fff!important}

/* ── TABLES: Cleaner ── */
table,table.styled-table,table.feature-table{border-radius:16px!important;overflow:hidden!important}
table thead th{background:rgba(8,14,30,0.8)!important;font-weight:600!important;
  font-size:0.82rem!important;letter-spacing:0.02em!important;text-transform:uppercase!important;
  color:#6B7D98!important;padding:1rem!important;border-bottom:1px solid rgba(255,255,255,0.025)!important}
table tbody td{background:rgba(5,9,20,0.4)!important;font-size:0.88rem!important;
  padding:0.9rem 1rem!important;border-bottom:1px solid rgba(255,255,255,0.025)!important;color:#B8C6D8!important}

/* ── CTA BANNER: Elevated ── */
.cta-banner{background:linear-gradient(135deg,#070E22,#0A1430,#070E22)!important;
  border-top:1px solid rgba(255,255,255,0.025)!important;
  border-bottom:1px solid rgba(255,255,255,0.025)!important;
  padding:6rem 2rem!important}
.cta-banner h2{font-size:clamp(2rem,4vw,2.8rem)!important}

/* ── FOOTER: Deep, minimal ── */
footer{background:#030610!important;border-top:1px solid rgba(255,255,255,0.025)!important;padding:4rem 2rem 2rem!important}
footer .brand h3{font-size:0.9rem!important;letter-spacing:0.15em!important;color:#B8C6D8!important}
footer .col h4{font-size:0.75rem!important;text-transform:uppercase!important;letter-spacing:0.1em!important;color:#4D5F78!important;font-weight:600!important}
footer .col a{font-size:0.82rem!important;color:#4D5F78!important}
footer .col a:hover{color:#B8C6D8!important}

/* ── NEXT PAGE: Cleaner ── */
.next-page-cta{background:transparent!important;border-top:1px solid rgba(255,255,255,0.025)!important;padding:5rem 2rem!important}
.next-page-label{font-size:0.7rem!important;letter-spacing:0.2em!important;color:#4D5F78!important}
.next-page-title{font-size:clamp(1.8rem,3vw,2.4rem)!important;font-weight:700!important;letter-spacing:-0.02em!important}
.next-page-title span{background:linear-gradient(135deg,#2D9CDB,#5A9FD4)!important;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;background-clip:text!important}
.next-page-desc{color:#4D5F78!important;font-size:0.95rem!important}
.next-page-btn{background:linear-gradient(135deg,#1a6fb0,#2D9CDB)!important;
  border-radius:12px!important;font-size:1rem!important;font-weight:650!important;
  padding:1rem 2.5rem!important;box-shadow:0 4px 20px rgba(45,156,219,0.2)!important}
.next-page-btn:hover{box-shadow:0 8px 35px rgba(45,156,219,0.3)!important}

/* ── FORMS: Refined ── */
input,textarea,select{
  background:rgba(5,9,20,0.6)!important;
  border:1px solid rgba(255,255,255,0.04)!important;
  border-radius:10px!important;
  font-size:0.9rem!important;color:#B8C6D8!important;
  padding:0.85rem 1.1rem!important}
input:focus,textarea:focus,select:focus{
  border-color:rgba(45,156,219,0.3)!important;
  box-shadow:0 0 0 4px rgba(45,156,219,0.06)!important}
label{font-size:0.8rem!important;color:#4D5F78!important;font-weight:500!important;text-transform:uppercase!important;letter-spacing:0.04em!important}

/* ── BADGES/TAGS: Muted ── */
.tag,.badge,.tag-accent{
  background:rgba(45,156,219,0.08)!important;
  border:1px solid rgba(45,156,219,0.12)!important;
  color:#5A9FD4!important;font-size:0.72rem!important;
  font-weight:600!important;letter-spacing:0.05em!important;text-transform:uppercase!important}

/* ── SCROLLBAR: Minimal ── */
::-webkit-scrollbar{width:6px!important}
::-webkit-scrollbar-track{background:#060B1A!important}
::-webkit-scrollbar-thumb{background:rgba(45,156,219,0.2)!important;border-radius:3px!important}
::-webkit-scrollbar-thumb:hover{background:rgba(45,156,219,0.35)!important}

/* ── LOADER: Refined ── */
.loader-screen{background:#060B1A!important}
.loader-logo{font-size:1rem!important;letter-spacing:0.2em!important}

/* ── SELECTION ── */
::selection{background:rgba(45,156,219,0.2)!important;color:#fff!important}

/* ── RESPONSIVE REFINEMENTS ── */
@media(max-width:768px){
  section,.section-padding{padding:4rem 1.5rem!important}
  .page-hero,.hero{padding:7rem 1.5rem 4rem!important}
}


/* ============== PAGE TRANSITION LOADER ============== */
.page-transition{position:fixed;inset:0;z-index:100000;background:#060B1A;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  opacity:0;visibility:hidden;transition:opacity .35s ease,visibility .35s ease;pointer-events:none}
.page-transition.active{opacity:1;visibility:visible;pointer-events:all}
.pt-logo{font-family:'Inter',system-ui,sans-serif;font-size:0.9rem;font-weight:700;
  letter-spacing:0.2em;color:#fff;margin-bottom:2.5rem;opacity:0;transform:translateY(8px);
  transition:opacity .4s ease .1s,transform .4s ease .1s}
.page-transition.active .pt-logo{opacity:1;transform:translateY(0)}
.pt-spinner{width:36px;height:36px;border-radius:50%;
  border:2px solid rgba(45,156,219,0.1);border-top:2px solid #2D9CDB;
  animation:ptSpin .8s linear infinite;opacity:0;transition:opacity .3s ease .2s}
.page-transition.active .pt-spinner{opacity:1}
@keyframes ptSpin{to{transform:rotate(360deg)}}

</style>
<!-- PRICING HERO -->
<section class="pricing-hero">
  <div class="breadcrumb">
    <a href="/">Home</a>
    <span>/</span>
    <span>Pricing</span>
  </div>
  <h1>Simple, <span style="color:var(--accent)">Transparent</span> Pricing</h1>
  <p class="subtitle">No hidden fees. No contracts. Cancel anytime. All plans include a 14-day free trial — no credit card required.</p>

  <div class="pricing-toggle-container">
    <div class="pricing-toggle">
      <button>Monthly</button>
      <button class="active">Annual <span class="discount-badge">Save 20%</span></button>
    </div>
  </div>
</section>

<!-- PRICING CARDS -->
<section class="pricing-section">
  <div class="pricing-grid">
    <!-- STARTER PLAN -->
    <div class="price-card">
      <h3>Starter</h3>
      <div class="price">
        <span>$159</span>
        <span class="price-period">/mo</span>
      </div>
      <span class="price-annual">Annual: $1,908/year (Save $240)</span>
      <p class="desc">For small shops getting started with AI</p>
      <ul>
        <li>AI Diagnostics (Basic)</li>
        <li>Smart Scheduling</li>
        <li>Basic Reports & Dashboard</li>
        <li>Email Support</li>
        <li>1 Location</li>
        <li>Up to 5 Users</li>
      </ul>
      <button class="card-btn outline">Start Free Trial</button>
    </div>

    <!-- PROFESSIONAL PLAN (FEATURED) -->
    <div class="price-card featured">
      <div class="badge">* MOST POPULAR</div>
      <h3>Professional</h3>
      <div class="price">
        <span style="color: var(--accent);">$319</span>
        <span class="price-period">/mo</span>
      </div>
      <span class="price-annual">Annual: $3,828/year (Save $960)</span>
      <p class="desc">For growing shops that need the full suite</p>
      <ul>
        <li class="highlight">Everything in Starter +</li>
        <li>Full AI Diagnostics Suite</li>
        <li>Invoicing & Estimates</li>
        <li>Inventory Management</li>
        <li>CRM & Customer Profiles</li>
        <li>Priority Support (24/7)</li>
        <li>3 Locations</li>
        <li>Unlimited Users</li>
      </ul>
      <button class="card-btn primary">Start Free Trial</button>
    </div>

    <!-- ENTERPRISE PLAN -->
    <div class="price-card">
      <h3>Enterprise</h3>
      <div class="price">Custom</div>
      <span class="price-annual">Contact for pricing</span>
      <p class="desc">For multi-location operations</p>
      <ul>
        <li class="highlight">Everything in Professional +</li>
        <li>API Access & Webhooks</li>
        <li>Custom Integrations</li>
        <li>Dedicated Account Manager</li>
        <li>White-Label Option</li>
        <li>Unlimited Locations</li>
        <li>SLA Guarantee (99.99%)</li>
        <li>On-Prem Available</li>
      </ul>
      <button class="card-btn outline">Contact Sales</button>
    </div>
  </div>
</section>

<!-- MONEY-BACK GUARANTEE SECTION -->
<section class="guarantee-section">
  <div class="guarantee-container">
    <div class="guarantee-card">
      <div class="guarantee-icon">30</div>
      <h3>30-Day Guarantee</h3>
      <p>If TorqueDesk AI isn't right for your shop, we'll refund your money in full. No questions asked, no hassle.</p>
    </div>
    <div class="guarantee-card">
      <div class="guarantee-icon"><span class="check">Yes</span></div>
      <h3>Free Migration</h3>
      <p>We'll migrate all your data from your existing system. Our team handles everything so you can focus on running your shop.</p>
    </div>
    <div class="guarantee-card">
      <div class="guarantee-icon">24/7</div>
      <h3>Always Available</h3>
      <p>Need help? Our support team is available 24/7 to answer questions, troubleshoot issues, and help you succeed with TDAI.</p>
    </div>
  </div>
</section>

<!-- WHAT'S INCLUDED IN EVERY PLAN -->
<section class="included-section">
  <div class="included-container">
    <div class="included-title">
      <h2>What's Included in <span style="color: var(--accent);">Every Plan</span></h2>
      <p>All these features are included with Starter, Professional, and Enterprise plans</p>
    </div>
    <div class="included-grid">
      <div class="included-item">
        <div class="included-item-icon">↗</div>
        <div>
          <h3>Free Migration</h3>
          <p>We handle the entire migration process so you can start using TDAI immediately without losing data.</p>
        </div>
      </div>
      <div class="included-item">
        <div class="included-item-icon">EDU</div>
        <div>
          <h3>Training Academy</h3>
          <p>Complete video training library, webinars, and documentation to help your team get the most from TDAI.</p>
        </div>
      </div>
      <div class="included-item">
        <div class="included-item-icon">MOB</div>
        <div>
          <h3>Mobile App</h3>
          <p>Full-featured iOS and Android apps to manage your shop from anywhere, anytime.</p>
        </div>
      </div>
      <div class="included-item">
        <div class="included-item-icon">EMAIL</div>
        <div>
          <h3>Email Support</h3>
          <p>Responsive email support with helpful documentation and best practices to solve your issues fast.</p>
        </div>
      </div>
      <div class="included-item">
        <div class="included-item-icon">Secure</div>
        <div>
          <h3>SSL Security</h3>
          <p>Industry-leading encryption, regular security audits, and compliance with all major data protection standards.</p>
        </div>
      </div>
      <div class="included-item">
        <div class="included-item-icon">AI</div>
        <div>
          <h3>99.9% Uptime</h3>
          <p>Enterprise-grade infrastructure with automatic failover, backups, and redundancy across multiple data centers.</p>
        </div>
      </div>
      <div class="included-item">
        <div class="included-item-icon">API</div>
        <div>
          <h3>API Access (Pro+)</h3>
          <p>Professional and Enterprise plans include REST API, webhooks, and SDK support for custom integrations.</p>
        </div>
      </div>
      <div class="included-item">
        <div class="included-item-icon">∞</div>
        <div>
          <h3>Unlimited Customers</h3>
          <p>Store unlimited customer records, invoices, and service history with no hidden fees or per-customer charges.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- INTERACTIVE ROI CALCULATOR -->
<section class="roi-section">
  <div class="roi-container">
    <div class="roi-title">
      <h2>See How Much You'll <span style="color: var(--secondary);">Save</span></h2>
      <p>Interactive calculator showing real numbers from shops like yours using TorqueDesk AI</p>
    </div>

    <div class="roi-calculator">
      <div class="calc-inputs">
        <div class="calc-input">
          <label for="bays">Service Bays</label>
          <input type="number" id="bays" value="5" min="1" max="50">
        </div>
        <div class="calc-input">
          <label for="jobs">Jobs/Day</label>
          <input type="number" id="jobs" value="12" min="1" max="100">
        </div>
        <div class="calc-input">
          <label for="revenue">Monthly Revenue</label>
          <input type="number" id="revenue" value="45000" min="1000" step="1000">
        </div>
      </div>

      <div class="roi-results">
        <div class="roi-result">
          <div class="value">$4,200</div>
          <div class="label">Monthly Savings</div>
        </div>
        <div class="roi-result">
          <div class="value">18 hrs</div>
          <div class="label">Saved Per Week</div>
        </div>
        <div class="roi-result">
          <div class="value">+32%</div>
          <div class="label">Revenue Increase</div>
        </div>
      </div>
    </div>

    <div class="roi-stats">
      <div class="roi-stat">
        <div class="value">15+</div>
        <div class="label">Hours saved per week on manual tasks</div>
      </div>
      <div class="roi-stat">
        <div class="value">30%</div>
        <div class="label">Average revenue increase in first 90 days</div>
      </div>
      <div class="roi-stat">
        <div class="value">2x</div>
        <div class="label">Faster customer turnaround time</div>
      </div>
    </div>
  </div>
</section>

<!-- REAL RESULTS FROM REAL SHOPS -->
<section class="results-section">
  <div class="results-container">
    <div class="results-title">
      <h2>Real Results From <span style="color: var(--secondary);">Real Shops</span></h2>
      <p>Trusted by hundreds of auto repair shops across North America</p>
    </div>
    <div class="results-grid">
      <div class="result-metric">
        <div class="result-number">$2.3M+</div>
        <div class="result-label">Revenue generated for customers</div>
      </div>
      <div class="result-metric">
        <div class="result-number">15,000+</div>
        <div class="result-label">Hours saved monthly</div>
      </div>
      <div class="result-metric">
        <div class="result-number">500+</div>
        <div class="result-label">Shops worldwide</div>
      </div>
      <div class="result-metric">
        <div class="result-number">4.9</div>
        <div class="result-label">Average rating from customers</div>
      </div>
    </div>
  </div>
</section>

<!-- FEATURE COMPARISON TABLE -->
<section class="comparison-section">
  <div class="section-title">
    <h2>Feature-by-Feature <span style="color: var(--accent);">Comparison</span></h2>
  </div>
  <div class="comparison-container">
    <table class="feature-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Starter</th>
          <th>Professional</th>
          <th>Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AI Diagnostics</td>
          <td><span class="feature-label">Basic</span></td>
          <td><span class="feature-label">Full</span></td>
          <td><span class="feature-label">Custom</span></td>
        </tr>
        <tr>
          <td>Smart Scheduling</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>Invoicing & Estimates</td>
          <td>—</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>Inventory Management</td>
          <td>—</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>CRM & Customer Profiles</td>
          <td>—</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>Real-Time Analytics</td>
          <td><span class="feature-label">Basic</span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>Integrations (50+)</td>
          <td><span class="feature-label">20+</span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>Mobile App</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>API Access</td>
          <td>—</td>
          <td>—</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>Custom Branding</td>
          <td>—</td>
          <td>—</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>Dedicated Support</td>
          <td>—</td>
          <td><span class="feature-label">24/7</span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>SLA Guarantee</td>
          <td>—</td>
          <td>—</td>
          <td><span class="feature-label">99.99%</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ENTERPRISE FEATURES SECTION -->
<section class="enterprise-section">
  <div class="enterprise-container">
    <div class="enterprise-title">
      <h2>Enterprise Features & <span style="color: var(--secondary);">Capabilities</span></h2>
      <p>Designed for multi-location operations and organizations with complex requirements</p>
    </div>
    <div class="enterprise-grid">
      <div class="enterprise-feature">
        <h3>White-Label Solution</h3>
        <p>Rebrand the entire platform with your company colors, logos, and custom domain. Perfect for agencies and resellers.</p>
      </div>
      <div class="enterprise-feature">
        <h3>On-Premise Option</h3>
        <p>Deploy TDAI on your own servers or private cloud for complete data sovereignty and compliance control.</p>
      </div>
      <div class="enterprise-feature">
        <h3>Custom SLA</h3>
        <p>Negotiate custom Service Level Agreements tailored to your operational needs with uptime guarantees up to 99.99%.</p>
      </div>
      <div class="enterprise-feature">
        <h3>Dedicated Success Manager</h3>
        <p>Get a dedicated account manager who understands your business, provides strategic guidance, and ensures your success.</p>
      </div>
      <div class="enterprise-feature">
        <h3>Priority API Access</h3>
        <p>Higher rate limits, priority support queue for API integration issues, and advanced webhook capabilities.</p>
      </div>
      <div class="enterprise-feature">
        <h3>Custom Integrations</h3>
        <p>Our team can build custom integrations with your existing systems and third-party applications.</p>
      </div>
    </div>
  </div>
</section>

<!-- COMPETITOR COMPARISON -->
<section class="competitor-section">
  <div class="competitor-container">
    <div class="competitor-title">
      <h2>How TDAI <span style="color: var(--secondary);">Stacks Up</span></h2>
      <p>Why TorqueDesk AI beats the competition</p>
    </div>
    <table class="competitor-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th class="tdai-col">TorqueDesk AI</th>
          <th>Shopmonkey</th>
          <th>Tekmetric</th>
          <th>AutoLeap</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AI Diagnostics</td>
          <td class="tdai-col"><span class="check-mark"><span class="check">Yes</span></span></td>
          <td>—</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>AI Scheduling</td>
          <td class="tdai-col"><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="feature-label">Basic</span></td>
          <td><span class="feature-label">Basic</span></td>
          <td><span class="feature-label">Basic</span></td>
        </tr>
        <tr>
          <td>Auto Invoicing</td>
          <td class="tdai-col"><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="feature-label">Manual</span></td>
          <td><span class="feature-label">Manual</span></td>
          <td><span class="feature-label">Manual</span></td>
        </tr>
        <tr>
          <td>Predictive Inventory</td>
          <td class="tdai-col"><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="feature-label">Basic</span></td>
          <td><span class="feature-label">Basic</span></td>
          <td><span class="feature-label">Basic</span></td>
        </tr>
        <tr>
          <td>Real-Time Analytics</td>
          <td class="tdai-col"><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="feature-label">Batch</span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>Free Trial (No Card)</td>
          <td class="tdai-col"><span class="check-mark"><span class="check">Yes</span></span></td>
          <td>—</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Interactive Demo</td>
          <td class="tdai-col"><span class="check-mark"><span class="check">Yes</span></span></td>
          <td>—</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>50+ Integrations</td>
          <td class="tdai-col"><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="feature-label">Limited</span></td>
          <td><span class="feature-label">Limited</span></td>
          <td><span class="feature-label">Limited</span></td>
        </tr>
        <tr>
          <td>Dark Mode UI</td>
          <td class="tdai-col"><span class="check-mark"><span class="check">Yes</span></span></td>
          <td>—</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Mobile App</td>
          <td class="tdai-col"><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- FAQ SECTION -->
<section class="faq-section">
  <div class="faq-container">
    <div class="faq-title">
      <h2>Frequently Asked <span style="color: var(--accent);">Questions</span></h2>
    </div>
    <details class="faq-item">
      <summary>Can I switch plans at any time?</summary>
      <div class="answer">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference. No penalties or lock-in periods.</div>
    </details>
    <details class="faq-item">
      <summary>Is the free trial really free?</summary>
      <div class="answer">Absolutely. Start your 14-day free trial with just an email address. No credit card required, no commitment. If you love it, choose a plan. If not, no hard feelings.</div>
    </details>
    <details class="faq-item">
      <summary>What happens to my data if I cancel?</summary>
      <div class="answer">Your data belongs to you. If you cancel, you can export everything (customers, invoices, reports) in standard formats. We retain your data for 30 days in case you change your mind.</div>
    </details>
    <details class="faq-item">
      <summary>Do you offer volume discounts for multiple locations?</summary>
      <div class="answer">Absolutely. Our Enterprise plan offers volume discounts and custom pricing for multi-location operations. Contact our sales team for a quote tailored to your needs.</div>
    </details>
    <details class="faq-item">
      <summary>What data migration services are included?</summary>
      <div class="answer">All plans include free professional data migration. Our team will transfer your customers, invoices, job history, and all other relevant data from your existing system with zero downtime. We handle the entire process.</div>
    </details>
    <details class="faq-item">
      <summary>What are the API rate limits?</summary>
      <div class="answer">Starter plans have 1,000 API calls/day. Professional plans include 10,000 calls/day. Enterprise plans have unlimited API access with custom rate limits negotiable based on your needs.</div>
    </details>
    <details class="faq-item">
      <summary>Is training included with every plan?</summary>
      <div class="answer">Yes! All plans include access to our complete Training Academy with video tutorials, webinars, and documentation. Professional and Enterprise customers also get dedicated onboarding sessions.</div>
    </details>
    <details class="faq-item">
      <summary>How does TDAI compare to competitors like Shopmonkey or Tekmetric?</summary>
      <div class="answer">TDAI is the only platform with AI-powered diagnostics, scheduling, and invoicing. We offer an interactive demo, free trials without credit cards, and 50+ integrations. See the comparison table above for a detailed breakdown.</div>
    </details>
  </div>
</section>

<!-- CTA BANNER -->
<section class="cta-banner">
  <h2>Start Your <span style="color: var(--secondary);">Free Trial</span> Today</h2>
  <p>Join 500+ auto shops already using AI to grow their business. 14 days free, no credit card required.</p>
  <a href="/pricing" class="btn btn-primary btn-large">Get Started Now →</a>
</section>

<!-- FOOTER -->

<!-- NEXT PAGE NAVIGATION -->
<div class="next-page-cta">
      <div class="next-page-inner">
        <div class="next-page-label">Continue Exploring</div>
        <h2 class="next-page-title">Next: <span>Integrations</span></h2>
        <p class="next-page-desc">Explore our integrations</p>
        <a href="/integrations" class="next-page-btn">
          <span class="btn-text">Explore Integrations</span>
          <span class="btn-arrow">&rarr;</span>
        </a>
        <div class="page-dots"><a href="/" class="page-dot"></a><a href="/features" class="page-dot"></a><a href="/solutions" class="page-dot"></a><a href="/pricing" class="page-dot active"></a><a href="/integrations" class="page-dot"></a><a href="/demo" class="page-dot"></a><a href="/customers" class="page-dot"></a><a href="/resources" class="page-dot"></a><a href="/about" class="page-dot"></a><a href="/contact" class="page-dot"></a></div>
        <div class="page-counter-text">Page 4 of 10</div>
      </div>
    </div>` }} />
  );
}
