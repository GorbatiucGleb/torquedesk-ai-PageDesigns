import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | TorqueDesk AI',
};

export default function HomePage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<style>
    :root {
      --navy: #081020;
      --deep: #040812;
      --dark-blue: #0F1C38;
      --accent: #2D9CDB;
      --secondary: #3B82C4;
      --card: #0C1528;
      --hero: #0A1225;
      --glass: rgba(12, 20, 38, 0.85);
      --subtle: #142238;
      --gray: #8A94A6;
      --light-gray: #B0BCCC;
      --red: #E63946;
      --success: #2D9CDB;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: var(--navy);
      color: var(--light-gray);
      overflow-x: hidden;
    }

    /* ============== ANIMATIONS ============== */
    @keyframes pulse-ring {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.8; }
    }
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(45,156,219,0.3); }
      50% { box-shadow: 0 0 40px rgba(45,156,219,0.6); }
    }
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }

    

    

    /* ============== HERO SECTION ============== */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--hero) 0%, var(--deep) 100%);
      position: relative;
      overflow: visible;
      padding: 60px 40px;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:
        radial-gradient(circle at 20% 50%, rgba(45, 156, 219, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(59,130,196, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }

    .hero-content {
      max-width: 1400px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    .hero-text h1 {
      font-size: 4rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 20px;
      color: var(--light-gray);
    }

    .hero-text h1 .gradient {
      background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-text p {
      font-size: 1.3rem;
      color: var(--gray);
      line-height: 1.6;
      margin-bottom: 40px;
      max-width: 500px;
    }

    .hero-buttons {
      display: flex;
      gap: 20px;
      margin-bottom: 50px;
      flex-wrap: wrap;
    }

    .btn {
      padding: 14px 32px;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    .btn-primary {
      background: var(--accent);
      color: white;
    }

    .btn-primary:hover {
      background: #2585c5;
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(45, 156, 219, 0.4);
    }

    .btn-secondary {
      background: transparent;
      color: var(--accent);
      border: 2px solid var(--accent);
    }

    .btn-secondary:hover {
      background: rgba(45, 156, 219, 0.1);
      transform: translateY(-2px);
    }

    .trust-badges {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-top: 40px;
    }

    .badge {
      background: rgba(45, 156, 219, 0.1);
      border: 1px solid rgba(45, 156, 219, 0.3);
      padding: 12px 16px;
      border-radius: 6px;
      font-size: 0.9rem;
      color: var(--gray);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .badge::before {
      content: '\\2713';
      color: var(--secondary);
      font-weight: bold;
      font-size: 1.1rem;
    }

    /* Hero Avatar/Ring */
    .hero-visual {
      position: relative;
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .avatar-ring {
      position: relative;
      width: 300px;
      height: 300px;
    }

    .ring {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid var(--accent);
      border-radius: 50%;
      animation: pulse-ring 3s ease-in-out infinite;
    }

    .ring:nth-child(2) {
      width: 85%;
      height: 85%;
      top: 7.5%;
      left: 7.5%;
      border-color: rgba(45, 156, 219, 0.6);
      
    }

    .ring:nth-child(3) {
      width: 70%;
      height: 70%;
      top: 15%;
      left: 15%;
      border-color: rgba(45, 156, 219, 0.3);
      
    }

    .avatar-center {
      position: absolute;
      width: 180px;
      height: 180px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 80px;
      color: white;
      animation: float-up 4s ease-in-out infinite;
    }

    .avatar-caption {
      position: absolute;
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.9rem;
      color: var(--gray);
      white-space: nowrap;
    }

    /* ============== SOCIAL PROOF ============== */
    .social-proof {
      background: var(--dark-blue);
      padding: 60px 40px;
      text-align: center;
      border-bottom: 1px solid rgba(45, 156, 219, 0.1);
    }

    .proof-header {
      font-size: 1.3rem;
      color: var(--light-gray);
      margin-bottom: 40px;
      font-weight: 500;
    }

    .proof-header .number {
      background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
      font-size: 1.5rem;
    }

    .logos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 30px;
      max-width: 900px;
      margin: 0 auto;
    }

    .logo-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      opacity: 0.7;
      transition: opacity 0.3s ease;
    }

    .logo-item:hover {
      opacity: 1;
    }

    .logo-placeholder {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--gray);
      letter-spacing: 1px;
    }

    /* ============== SECTION COMMON STYLES ============== */
    section {
      padding: 100px 40px;
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;
    }

    .section-header {
      text-align: center;
      margin-bottom: 80px;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: var(--light-gray);
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: var(--gray);
      max-width: 600px;
      margin: 0 auto;
    }

    /* ============== FEATURES SECTION ============== */
    .features-section {
      background: var(--navy);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-bottom: 40px;
    }

    .feature-card {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.05) 0%, rgba(59,130,196, 0.03) 100%);
      border: 1px solid rgba(45, 156, 219, 0.15);
      border-radius: 12px;
      padding: 40px;
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      border-color: var(--accent);
      box-shadow: 0 20px 50px rgba(45, 156, 219, 0.15);
      transform: translateY(-5px);
    }

    .feature-icon {
      font-size: 2rem;
      margin-bottom: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      font-weight: 700;
      background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .feature-title {
      font-size: 1.3rem;
      margin-bottom: 15px;
      color: var(--light-gray);
    }

    .feature-desc {
      color: var(--gray);
      line-height: 1.6;
      margin-bottom: 20px;
      font-size: 0.95rem;
    }

    .feature-link {
      color: var(--secondary);
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    .feature-link:hover {
      color: var(--accent);
      transform: translateX(5px);
    }

    /* ============== HOW IT WORKS ============== */
    .how-it-works {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.05) 0%, rgba(59,130,196, 0.03) 100%);
    }

    .steps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 40px;
    }

    .step {
      position: relative;
      padding-left: 60px;
    }

    .step-number {
      position: absolute;
      left: 0;
      top: 0;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.5rem;
      color: white;
    }

    .step-title {
      font-size: 1.2rem;
      margin-bottom: 12px;
      color: var(--light-gray);
      font-weight: 600;
    }

    .step-desc {
      color: var(--gray);
      line-height: 1.6;
      font-size: 0.95rem;
    }

    /* ============== DASHBOARD SECTION ============== */
    .dashboard-section {
      background: var(--navy);
    }

    .dashboard-visual {
      width: 100%;
      height: 500px;
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.1) 0%, rgba(59,130,196, 0.05) 100%);
      border: 1px solid rgba(45, 156, 219, 0.2);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--gray);
      font-size: 1.1rem;
      margin-top: 60px;
    }

    /* ============== BEFORE/AFTER SECTION ============== */
    .before-after-section {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.05) 0%, rgba(59,130,196, 0.03) 100%);
    }

    .comparison-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin-top: 60px;
    }

    .comparison-side {
      border-radius: 12px;
      padding: 50px;
      min-height: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .comparison-side.without {
      background: linear-gradient(135deg, rgba(230, 57, 70, 0.08) 0%, rgba(230, 57, 70, 0.03) 100%);
      border: 1px solid rgba(230, 57, 70, 0.2);
    }

    .comparison-side.with {
      background: linear-gradient(135deg, rgba(59,130,196, 0.08) 0%, rgba(59,130,196, 0.03) 100%);
      border: 1px solid rgba(59,130,196, 0.2);
    }

    .comparison-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 30px;
    }

    .comparison-side.without .comparison-title {
      color: #ff6b6b;
    }

    .comparison-side.with .comparison-title {
      color: var(--secondary);
    }

    .comparison-list {
      list-style: none;
    }

    .comparison-list li {
      margin-bottom: 20px;
      padding-left: 30px;
      position: relative;
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--light-gray);
    }

    .comparison-side.without li {
      color: #b0b0b0;
    }

    .comparison-list li::before {
      position: absolute;
      left: 0;
      top: 2px;
      font-size: 1.2rem;
    }

    .comparison-side.without li::before {
      content: '\\2717';
      color: var(--red);
    }

    .comparison-side.with li::before {
      content: '\\2713';
      color: var(--secondary);
    }

    /* ============== ROI CALCULATOR SECTION ============== */
    .roi-calculator-section {
      background: var(--navy);
    }

    .calculator-container {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.08) 0%, rgba(59,130,196, 0.04) 100%);
      border: 1px solid rgba(45, 156, 219, 0.2);
      border-radius: 12px;
      padding: 60px;
      margin-top: 60px;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
    }

    .calculator-inputs {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-bottom: 50px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
    }

    .input-group label {
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 10px;
      color: var(--light-gray);
    }

    .input-group input {
      padding: 12px 16px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(45, 156, 219, 0.2);
      border-radius: 6px;
      color: var(--light-gray);
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .input-group input:focus {
      outline: none;
      border-color: var(--accent);
      background: rgba(45, 156, 219, 0.05);
      box-shadow: 0 0 10px rgba(45, 156, 219, 0.1);
    }

    .calculator-results {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      padding-top: 50px;
      border-top: 1px solid rgba(45, 156, 219, 0.2);
    }

    .result-item {
      text-align: center;
    }

    .result-label {
      font-size: 0.9rem;
      color: var(--gray);
      margin-bottom: 10px;
    }

    .result-value {
      font-size: 2.2rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ============== VIDEO DEMO SECTION ============== */
    .video-demo-section {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.05) 0%, rgba(59,130,196, 0.03) 100%);
      padding: 100px 40px !important;
    }

    .video-container {
      position: relative;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      padding-bottom: 56.25%;
      height: 0;
      overflow: visible;
      border-radius: 12px;
    }

    .video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(10, 14, 26, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.3s ease;
      border-radius: 12px;
    }

    .video-overlay:hover {
      background: linear-gradient(135deg, rgba(10, 14, 26, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%);
    }

    .video-play-button {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      animation: pulse-ring 2s ease-in-out infinite;
    }

    .video-play-button::after {
      content: '>';
      color: white;
      font-size: 32px;
      margin-left: 4px;
    }

    .video-text {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      text-align: center;
      width: 90%;
    }

    /* ============== COMPETITOR MIGRATION SECTION ============== */
    .migration-section {
      background: var(--navy);
    }

    .migration-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 60px;
    }

    .migration-card {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.05) 0%, rgba(59,130,196, 0.03) 100%);
      border: 1px solid rgba(45, 156, 219, 0.15);
      border-radius: 12px;
      padding: 40px;
      transition: all 0.3s ease;
    }

    .migration-card:hover {
      border-color: var(--secondary);
      box-shadow: 0 20px 50px rgba(59,130,196, 0.15);
      transform: translateY(-5px);
    }

    .migration-card-title {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: var(--secondary);
    }

    .migration-benefit {
      margin-bottom: 15px;
      padding-left: 25px;
      position: relative;
      font-size: 0.95rem;
      color: var(--gray);
      line-height: 1.5;
    }

    .migration-benefit::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--accent);
      font-weight: bold;
    }

    .migration-link {
      display: inline-block;
      margin-top: 20px;
      color: var(--accent);
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .migration-link:hover {
      color: var(--secondary);
      transform: translateX(5px);
    }

    /* ============== AWARDS & RECOGNITION BAR ============== */
    .awards-section {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.08) 0%, rgba(59,130,196, 0.04) 100%);
      padding: 50px 40px !important;
      border-top: 1px solid rgba(45, 156, 219, 0.2);
      border-bottom: 1px solid rgba(45, 156, 219, 0.2);
    }

    .awards-container {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 40px;
      align-items: center;
      text-align: center;
    }

    .award-badge {
      padding: 20px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(45, 156, 219, 0.15);
      transition: all 0.3s ease;
    }

    .award-badge:hover {
      border-color: var(--accent);
      background: rgba(45, 156, 219, 0.08);
    }

    .award-title {
      font-weight: 700;
      color: var(--light-gray);
      font-size: 0.95rem;
      margin-bottom: 5px;
    }

    .award-subtitle {
      color: var(--gray);
      font-size: 0.85rem;
    }

    /* ============== LIVE ACTIVITY FEED ============== */
    .activity-feed-section {
      background: var(--navy);
    }

    .feed-container {
      max-width: 700px;
      margin: 60px auto 0;
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.08) 0%, rgba(59,130,196, 0.04) 100%);
      border: 1px solid rgba(45, 156, 219, 0.2);
      border-radius: 12px;
      overflow: visible;
    }

    .feed-header {
      padding: 20px;
      border-bottom: 1px solid rgba(45, 156, 219, 0.15);
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(59,130,196, 0.1);
    }

    .feed-indicator {
      width: 8px;
      height: 8px;
      background: var(--secondary);
      border-radius: 50%;
      animation: pulse-ring 2s ease-in-out infinite;
    }

    .feed-header-text {
      font-weight: 600;
      color: var(--light-gray);
    }

    .feed-items {
      max-height: 400px;
      overflow-y: auto;
    }

    .feed-item {
      padding: 20px;
      border-bottom: 1px solid rgba(45, 156, 219, 0.1);
      transition: background 0.3s ease;
      
    }

    .feed-item:hover {
      background: rgba(45, 156, 219, 0.05);
    }

    .feed-item:last-child {
      border-bottom: none;
    }

    .feed-message {
      color: var(--light-gray);
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    .feed-time {
      font-size: 0.8rem;
      color: var(--gray);
    }

    /* ============== TECHNOLOGY STACK ============== */
    .tech-stack-section {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.05) 0%, rgba(59,130,196, 0.03) 100%);
    }

    .tech-badges {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 60px;
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
    }

    .tech-badge {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.1) 0%, rgba(59,130,196, 0.05) 100%);
      border: 1px solid rgba(45, 156, 219, 0.2);
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      transition: all 0.3s ease;
    }

    .tech-badge:hover {
      border-color: var(--accent);
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.15) 0%, rgba(59,130,196, 0.08) 100%);
      transform: translateY(-3px);
    }

    .tech-name {
      font-weight: 700;
      color: var(--light-gray);
      font-size: 1.1rem;
    }

    .tech-version {
      color: var(--gray);
      font-size: 0.85rem;
      margin-top: 5px;
    }

    /* ============== COMPARISON SECTION ============== */
    .comparison-section {
      background: var(--navy);
    }

    .comparison-table {
      width: 100%;
      margin-top: 60px;
      border-collapse: collapse;
    }

    .comparison-table th,
    .comparison-table td {
      padding: 20px;
      text-align: left;
      border-bottom: 1px solid rgba(45, 156, 219, 0.1);
    }

    .comparison-table th {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.1) 0%, rgba(59,130,196, 0.05) 100%);
      font-weight: 700;
      color: var(--light-gray);
    }

    .comparison-table td {
      color: var(--gray);
    }

    .comparison-table tr:hover td {
      background: rgba(45, 156, 219, 0.05);
    }

    .check-mark {
      color: var(--secondary);
      font-weight: bold;
      font-size: 1.2rem;
    }

    .cross-mark {
      color: var(--red);
      font-weight: bold;
      font-size: 1.2rem;
    }

    /* ============== TESTIMONIALS ============== */
    .testimonials-section {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.05) 0%, rgba(59,130,196, 0.03) 100%);
    }

    .testimonials-rating {
      text-align: center;
      margin-bottom: 60px;
      padding-bottom: 60px;
      border-bottom: 1px solid rgba(45, 156, 219, 0.2);
    }

    .rating-display {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
    }

    .rating-stars {
      font-size: 1.2rem;
      color: #FFB81C;
    }

    .rating-text {
      color: var(--gray);
      font-size: 0.95rem;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 30px;
    }

    .testimonial-card {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.08) 0%, rgba(59,130,196, 0.04) 100%);
      border: 1px solid rgba(45, 156, 219, 0.15);
      border-radius: 12px;
      padding: 40px;
      transition: all 0.3s ease;
    }

    .testimonial-card:hover {
      border-color: var(--accent);
      box-shadow: 0 20px 50px rgba(45, 156, 219, 0.15);
      transform: translateY(-5px);
    }

    .stars {
      display: flex;
      gap: 4px;
      margin-bottom: 20px;
    }

    .star {
      color: #FFB81C;
      font-size: 1.1rem;
    }

    .testimonial-text {
      color: var(--light-gray);
      line-height: 1.7;
      margin-bottom: 25px;
      font-size: 0.95rem;
      font-style: italic;
    }

    .testimonial-author {
      font-weight: 700;
      color: var(--light-gray);
      margin-bottom: 5px;
    }

    .testimonial-role {
      color: var(--gray);
      font-size: 0.85rem;
      margin-bottom: 15px;
    }

    .testimonial-metric {
      display: inline-block;
      background: rgba(45, 156, 219, 0.1);
      border: 1px solid rgba(45, 156, 219, 0.2);
      color: var(--accent);
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    /* ============== STATS SECTION ============== */
    .stats-section {
      background: var(--navy);
      padding: 80px 40px !important;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .stat-item {
      text-align: center;
      padding: 30px;
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.05) 0%, rgba(59,130,196, 0.03) 100%);
      border: 1px solid rgba(45, 156, 219, 0.1);
      border-radius: 12px;
      transition: all 0.3s ease;
    }

    .stat-item:hover {
      border-color: var(--accent);
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.1) 0%, rgba(59,130,196, 0.05) 100%);
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 10px;
    }

    .stat-label-text {
      color: var(--gray);
      font-size: 0.95rem;
    }

    /* ============== INTEGRATIONS SECTION ============== */
    .integrations-section {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.05) 0%, rgba(59,130,196, 0.03) 100%);
    }

    .integrations-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 25px;
      margin-top: 60px;
      margin-bottom: 50px;
    }

    .integration-item {
      background: var(--card);
      border: 1px solid rgba(45, 156, 219, 0.15);
      border-radius: 10px;
      padding: 30px;
      text-align: center;
      transition: all 0.3s ease;
    }

    .integration-item:hover {
      border-color: var(--accent);
      box-shadow: 0 10px 30px rgba(45, 156, 219, 0.2);
      transform: translateY(-5px);
    }

    .integration-icon {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      font-weight: 800;
      margin: 0 auto 12px;
      color: #fff;
      letter-spacing: -0.5px;
    }

    .integration-name {
      color: var(--light-gray);
      font-size: 0.9rem;
      font-weight: 600;
    }

    .integrations-cta {
      text-align: center;
      margin-top: 40px;
    }

    .integrations-cta a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .integrations-cta a:hover {
      color: var(--secondary);
      transform: translateX(5px);
    }

    /* ============== NEWSLETTER SECTION ============== */
    .newsletter-section {
      background: var(--navy);
      padding: 80px 40px !important;
    }

    .newsletter-container {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
    }

    .newsletter-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 15px;
      color: var(--light-gray);
    }

    .newsletter-subtitle {
      color: var(--gray);
      margin-bottom: 30px;
      font-size: 1rem;
    }

    .newsletter-form {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    .newsletter-form input {
      flex: 1;
      padding: 14px 18px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(45, 156, 219, 0.2);
      border-radius: 8px;
      color: var(--light-gray);
      font-size: 0.95rem;
      transition: all 0.3s ease;
    }

    .newsletter-form input:focus {
      outline: none;
      border-color: var(--accent);
      background: rgba(45, 156, 219, 0.05);
    }

    .newsletter-form button {
      padding: 14px 32px;
      background: var(--accent);
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .newsletter-form button:hover {
      background: #2585c5;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(45, 156, 219, 0.3);
    }

    .newsletter-privacy {
      color: var(--gray);
      font-size: 0.8rem;
    }

    /* ============== CTA BANNER ============== */
    .cta-banner {
      background: linear-gradient(135deg, rgba(45, 156, 219, 0.15) 0%, rgba(59,130,196, 0.08) 100%);
      border: 2px solid rgba(45, 156, 219, 0.3);
      border-radius: 16px;
      padding: 80px 60px !important;
      text-align: center;
      margin-top: 80px;
      position: relative;
      overflow: visible;
    }

    .cta-banner::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle at 20% 50%, rgba(45, 156, 219, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }

    .cta-content {
      position: relative;
      z-index: 2;
    }

    .cta-title {
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: var(--light-gray);
    }

    .cta-subtitle {
      font-size: 1.1rem;
      color: var(--gray);
      margin-bottom: 40px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.7;
    }

    .cta-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* ============== FOOTER ============== */
    footer {
      background: var(--deep);
      border-top: 1px solid rgba(45, 156, 219, 0.1);
      padding: 80px 40px 40px;
    }

    .f-container {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr repeat(4, 1fr);
      gap: 60px;
      margin-bottom: 60px;
    }

    .brand h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
      background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .brand p {
      color: var(--gray);
      font-size: 0.9rem;
      line-height: 1.6;
    }

    .col h4 {
      color: var(--light-gray);
      font-size: 0.95rem;
      margin-bottom: 20px;
      font-weight: 600;
    }

    .col a {
      display: block;
      color: var(--gray);
      text-decoration: none;
      margin-bottom: 12px;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }

    .col a:hover {
      color: var(--accent);
      transform: translateX(3px);
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--gray);
      font-size: 0.85rem;
      flex-wrap: wrap;
      gap: 20px;
    }

    /* ============== RESPONSIVE ============== */
    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .hero-text h1 {
        font-size: 2.8rem;
      }

      .hero-visual {
        height: 350px;
      }

      .avatar-ring {
        width: 220px;
        height: 220px;
      }

      .section-title {
        font-size: 2rem;
      }

      .comparison-container {
        grid-template-columns: 1fr;
      }

      .f-container {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
      }
    }

    @media (max-width: 768px) {
      section {
        padding: 60px 20px;
      }

      .hero {
        padding: 40px 20px;
        min-height: 80vh;
      }

      .hero-text h1 {
        font-size: 2rem;
      }

      .hero-text p {
        font-size: 1rem;
      }

      .hero-buttons {
        flex-direction: column;
      }

      .btn {
        width: 100%;
        justify-content: center;
      }

      .section-header {
        margin-bottom: 50px;
      }

      .section-title {
        font-size: 1.6rem;
      }

      .section-subtitle {
        font-size: 1rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }

      .testimonials-grid {
        grid-template-columns: 1fr;
      }

      .calculator-container {
        padding: 30px;
      }

      .calculator-inputs {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .awards-container {
        grid-template-columns: 1fr;
      }

      .stats-grid {
        grid-template-columns: 1fr 1fr;
      }

      .cta-banner {
        padding: 50px 30px !important;
      }

      .cta-title {
        font-size: 1.6rem;
      }

      .cta-subtitle {
        font-size: 0.95rem;
      }

      .cta-buttons {
        flex-direction: column;
      }

      .f-container {
        grid-template-columns: 1fr;
      }

      .newsletter-form {
        flex-direction: column;
      }

      .tech-badges {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .hero-text h1 {
        font-size: 1.6rem;
      }

      .trust-badges {
        grid-template-columns: 1fr;
      }

      .section-title {
        font-size: 1.4rem;
      }

      .feature-card {
        padding: 25px;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .stat-number {
        font-size: 2rem;
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
<!-- HERO SECTION -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1>The <span class="gradient">AI-Powered</span> Shop Management Platform</h1>
        <p>Automate diagnostics, optimize scheduling, streamline invoicing, and master inventory. Built by mechanics, for mechanics. Transform your shop today.</p>

        <div class="hero-buttons">
          <a href="/pricing" class="btn btn-primary">Start Free Trial →</a>
          <a href="#video-demo" class="btn btn-secondary">Watch Demo</a>
        </div>

        <div class="trust-badges">
          <div class="badge">SOC 2 Certified</div>
          <div class="badge">99.9% Uptime</div>
          <div class="badge">No Credit Card</div>
          <div class="badge">GDPR Compliant</div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="avatar-ring">
          <div class="ring"></div>
          <div class="ring"></div>
          <div class="ring"></div>
          <div class="avatar-center" style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#2D9CDB,#3B82C4);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px;">TD</div>
          <div class="avatar-caption">D-ID Powered • Guides Users</div>
        </div>
      </div>
    </div>
  </section>

  <!-- SOCIAL PROOF BAR -->
  <section class="social-proof">
    <div class="proof-header">Trusted by <span class="number">500+</span> shops and growing</div>
    <div class="logos-grid">
      <div class="logo-item"><span class="logo-placeholder">MIDAS</span></div>
      <div class="logo-item"><span class="logo-placeholder">JIFFY LUBE</span></div>
      <div class="logo-item"><span class="logo-placeholder">PEP BOYS</span></div>
      <div class="logo-item"><span class="logo-placeholder">CHRISTIAN BROS</span></div>
      <div class="logo-item"><span class="logo-placeholder">MEINEKE</span></div>
    </div>
  </section>

  <!-- FEATURES SECTION -->
  <section class="features-section">
    <div class="section-header">
      <h2 class="section-title">Core Features</h2>
      <p class="section-subtitle">Everything you need to run a modern, profitable auto shop</p>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">AI</div>
        <h3 class="feature-title">AI Diagnostics</h3>
        <p class="feature-desc">Intelligent diagnostic recommendations that learn from your shop's repair history. Reduce diagnostic time by 40%.</p>
        <a href="/features" class="feature-link">Learn more →</a>
      </div>

      <div class="feature-card">
        <div class="feature-icon">CAL</div>
        <h3 class="feature-title">Smart Scheduling</h3>
        <p class="feature-desc">AI predicts job duration and auto-schedules appointments. Eliminate double-bookings and maximize bay utilization.</p>
        <a href="/features" class="feature-link">Learn more →</a>
      </div>

      <div class="feature-card">
        <div class="feature-icon">$</div>
        <h3 class="feature-title">Invoicing & Estimates</h3>
        <p class="feature-desc">Auto-generate accurate estimates and invoices. Integrated payment processing with Stripe and Square.</p>
        <a href="/features" class="feature-link">Learn more →</a>
      </div>

      <div class="feature-card">
        <div class="feature-icon">INV</div>
        <h3 class="feature-title">Inventory Management</h3>
        <p class="feature-desc">Real-time parts tracking with predictive reordering. Never run out of critical parts again.</p>
        <a href="/features" class="feature-link">Learn more →</a>
      </div>

      <div class="feature-card">
        <div class="feature-icon">CRM</div>
        <h3 class="feature-title">Customer CRM</h3>
        <p class="feature-desc">360° customer view. Service history, preferences, and automated follow-ups. Build lifetime relationships.</p>
        <a href="/features" class="feature-link">Learn more →</a>
      </div>

      <div class="feature-card">
        <div class="feature-icon">RPT</div>
        <h3 class="feature-title">Reports & Analytics</h3>
        <p class="feature-desc">Real-time dashboards with actionable insights. Track revenue, profitability, and staff performance.</p>
        <a href="/features" class="feature-link">Learn more →</a>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="how-it-works">
    <div class="section-header">
      <h2 class="section-title">How It Works</h2>
      <p class="section-subtitle">Simple setup, transformative results in days</p>
    </div>

    <div class="steps-grid">
      <div class="step">
        <div class="step-number">1</div>
        <h3 class="step-title">Quick Setup</h3>
        <p class="step-desc">Connect your payment processors and existing tools. We handle the integration seamlessly.</p>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <h3 class="step-title">Import History</h3>
        <p class="step-desc">Load your customer, job, and inventory data. Our AI learns from your past patterns immediately.</p>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <h3 class="step-title">Go Live</h3>
        <p class="step-desc">Start using AI-powered features. Your team becomes more productive from day one.</p>
      </div>
    </div>
  </section>

  <!-- DASHBOARD SECTION -->
  <section class="dashboard-section">
    <div class="section-header">
      <h2 class="section-title">Intelligent Dashboard</h2>
      <p class="section-subtitle">See everything that matters in real time, from any device</p>
    </div>

    <div class="dashboard-visual">
      [Interactive Dashboard Mockup — Real-time analytics, job tracking, revenue visualization]
    </div>
  </section>

  <!-- BEFORE/AFTER SECTION -->
  <section class="before-after-section">
    <div class="section-header">
      <h2 class="section-title">The Manual vs. The Modern</h2>
      <p class="section-subtitle">See the transformation that awaits your shop</p>
    </div>

    <div class="comparison-container">
      <div class="comparison-side without">
        <h3 class="comparison-title">Without TDAI</h3>
        <ul class="comparison-list">
          <li>Juggling phone calls, emails, and sticky notes</li>
          <li>Paper forms scattered across the shop floor</li>
          <li>Manual scheduling causing double-bookings</li>
          <li>Hours lost to invoicing and follow-ups</li>
          <li>Inventory surprises and rush orders</li>
          <li>Limited visibility into shop performance</li>
          <li>Customer data scattered across spreadsheets</li>
          <li>Revenue leaks due to underpriced services</li>
        </ul>
      </div>

      <div class="comparison-side with">
        <h3 class="comparison-title">With TDAI</h3>
        <ul class="comparison-list">
          <li>All communications centralized in one platform</li>
          <li>Digital workflows eliminate paper waste</li>
          <li>AI auto-schedules with zero conflicts</li>
          <li>Invoices generated automatically</li>
          <li>Predictive reordering prevents stockouts</li>
          <li>Real-time analytics at your fingertips</li>
          <li>360° customer view and automated touchpoints</li>
          <li>AI-optimized pricing increases margins 15-30%</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- ROI CALCULATOR SECTION -->
  <section class="roi-calculator-section">
    <div class="section-header">
      <h2 class="section-title">See Your Savings</h2>
      <p class="section-subtitle">Estimate your potential monthly ROI based on your shop's size</p>
    </div>

    <div class="calculator-container">
      <div class="calculator-inputs">
        <div class="input-group">
          <label for="bays">Number of Bays</label>
          <input type="number" id="bays" value="4" min="1" max="50">
        </div>
        <div class="input-group">
          <label for="jobs">Average Jobs/Day</label>
          <input type="number" id="jobs" value="12" min="1" max="50">
        </div>
        <div class="input-group">
          <label for="revenue">Current Monthly Revenue</label>
          <input type="text" id="revenue" value="$45,000" placeholder="e.g., $45,000">
        </div>
      </div>

      <div class="calculator-results">
        <div class="result-item">
          <div class="result-label">Projected Monthly Savings</div>
          <div class="result-value">$2,850</div>
        </div>
        <div class="result-item">
          <div class="result-label">Hours Saved Per Week</div>
          <div class="result-value">22</div>
        </div>
        <div class="result-item">
          <div class="result-label">Potential Revenue Increase</div>
          <div class="result-value">+18%</div>
        </div>
      </div>
    </div>
  </section>

  <!-- VIDEO DEMO SECTION -->
  <section class="video-demo-section" id="video-demo">
    <div class="section-header">
      <h2 class="section-title">See TDAI in Action</h2>
      <p class="section-subtitle">Watch how our platform transforms shop operations</p>
    </div>

    <div class="video-container">
      <div class="video-overlay">
        <div class="video-play-button"></div>
        <div class="video-text">See TDAI in Action — 2 Minute Overview</div>
      </div>
    </div>
  </section>

  <!-- MIGRATION FROM COMPETITORS -->
  <section class="migration-section">
    <div class="section-header">
      <h2 class="section-title">Why Shop Owners Switch</h2>
      <p class="section-subtitle">See what you gain when you migrate from competitor platforms</p>
    </div>

    <div class="migration-grid">
      <div class="migration-card">
        <h3 class="migration-card-title">From Shopmonkey</h3>
        <div class="migration-benefit">Save $200/month on per-technician fees</div>
        <div class="migration-benefit">Advanced AI diagnostics included free</div>
        <div class="migration-benefit">Better mobile experience for your team</div>
        <div class="migration-benefit">Faster customer support (under 30 minutes)</div>
        <a href="/demo" class="migration-link">View migration guide →</a>
      </div>

      <div class="migration-card">
        <h3 class="migration-card-title">From Tekmetric</h3>
        <div class="migration-benefit">Unlimited users at no additional cost</div>
        <div class="migration-benefit">More affordable for multi-location shops</div>
        <div class="migration-benefit">Superior inventory management</div>
        <div class="migration-benefit">Deeper integrations with payment processors</div>
        <a href="/demo" class="migration-link">View migration guide →</a>
      </div>

      <div class="migration-card">
        <h3 class="migration-card-title">From AutoLeap</h3>
        <div class="migration-benefit">More granular analytics and reporting</div>
        <div class="migration-benefit">Dedicated account support included</div>
        <div class="migration-benefit">AI predictions for profitability</div>
        <div class="migration-benefit">Faster onboarding with zero downtime</div>
        <a href="/demo" class="migration-link">View migration guide →</a>
      </div>
    </div>
  </section>

  <!-- AWARDS & RECOGNITION -->
  <section class="awards-section">
    <div class="awards-container">
      <div class="award-badge">
        <div class="award-title">G2 Top Rated</div>
        <div class="award-subtitle">2026</div>
      </div>
      <div class="award-badge">
        <div class="award-title">Capterra Best Value</div>
        <div class="award-subtitle">Auto Management</div>
      </div>
      <div class="award-badge">
        <div class="award-title">Software Advice</div>
        <div class="award-subtitle">Front Runners</div>
      </div>
      <div class="award-badge">
        <div class="award-title">4.9 / 5 Rating</div>
        <div class="award-subtitle">500+ Customer Reviews</div>
      </div>
    </div>
  </section>

  <!-- LIVE ACTIVITY FEED -->
  <section class="activity-feed-section">
    <div class="section-header">
      <h2 class="section-title">Real-Time Activity Feed</h2>
      <p class="section-subtitle">See what's happening across the TDAI network right now</p>
    </div>

    <div class="feed-container">
      <div class="feed-header">
        <div class="feed-indicator"></div>
        <div class="feed-header-text">Live Activity</div>
      </div>
      <div class="feed-items">
        <div class="feed-item">
          <div class="feed-message">Mike's Auto Shop — Just completed 15th AI diagnosis</div>
          <div class="feed-time">30 minutes ago</div>
        </div>
        <div class="feed-item">
          <div class="feed-message">Sarah's Tire & Auto — Switched from Shopmonkey</div>
          <div class="feed-time">18 minutes ago</div>
        </div>
        <div class="feed-item">
          <div class="feed-message">Downtown Fleet Service — Saved 24 hours this week</div>
          <div class="feed-time">30 minutes ago</div>
        </div>
        <div class="feed-item">
          <div class="feed-message">Peterson's Garage — Revenue up 22% in Q1</div>
          <div class="feed-time">1 hour ago</div>
        </div>
        <div class="feed-item">
          <div class="feed-message">Elite Auto Repair — Multi-location synced successfully</div>
          <div class="feed-time">1 hour ago</div>
        </div>
        <div class="feed-item">
          <div class="feed-message">Crystal Clear Detailing — New customer CRM features enabled</div>
          <div class="feed-time">2 hours ago</div>
        </div>
      </div>
    </div>
  </section>

  <!-- TECHNOLOGY STACK -->
  <section class="tech-stack-section">
    <div class="section-header">
      <h2 class="section-title">Built on Modern Technology</h2>
      <p class="section-subtitle">Enterprise-grade architecture for reliability, speed, and innovation</p>
    </div>

    <div class="tech-badges">
      <div class="tech-badge">
        <div class="tech-name">Next.js</div>
        <div class="tech-version">Version 16</div>
      </div>
      <div class="tech-badge">
        <div class="tech-name">React</div>
        <div class="tech-version">Version 19</div>
      </div>
      <div class="tech-badge">
        <div class="tech-name">TypeScript</div>
        <div class="tech-version">Version 5</div>
      </div>
      <div class="tech-badge">
        <div class="tech-name">D-ID SDK</div>
        <div class="tech-version">AI Video</div>
      </div>
      <div class="tech-badge">
        <div class="tech-name">Enterprise Cloud</div>
        <div class="tech-version">AWS Powered</div>
      </div>
      <div class="tech-badge">
        <div class="tech-name">PostgreSQL</div>
        <div class="tech-version">Latest</div>
      </div>
    </div>
  </section>

  <!-- COMPARISON TABLE -->
  <section class="comparison-section">
    <div class="section-header">
      <h2 class="section-title">How We Compare</h2>
      <p class="section-subtitle">See why leading shops choose TDAI over competitors</p>
    </div>

    <table class="comparison-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>TDAI</th>
          <th>Shopmonkey</th>
          <th>Tekmetric</th>
          <th>AutoLeap</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AI Diagnostics</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="cross-mark"><span class="cross">No</span></span></td>
          <td><span class="cross-mark"><span class="cross">No</span></span></td>
          <td>Limited</td>
        </tr>
        <tr>
          <td>Unlimited Users</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td>Extra Cost</td>
          <td>Extra Cost</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>Mobile App</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>Inventory Prediction</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td>Manual</td>
          <td>Manual</td>
          <td>Limited</td>
        </tr>
        <tr>
          <td>Support Response Time</td>
          <td>&lt;30 min</td>
          <td>&lt;1 hour</td>
          <td>&lt;1 hour</td>
          <td>24 hours</td>
        </tr>
        <tr>
          <td>Multi-Location Support</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td>Limited</td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
          <td><span class="check-mark"><span class="check">Yes</span></span></td>
        </tr>
        <tr>
          <td>Pricing Model</td>
          <td>Per-Shop Flat Rate</td>
          <td>Per-Tech + Per-Feature</td>
          <td>Per-Tech</td>
          <td>Per-Tech</td>
        </tr>
        <tr>
          <td>Free Trial</td>
          <td>Yes, No CC</td>
          <td>14 days</td>
          <td>14 days</td>
          <td>7 days</td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- TESTIMONIALS -->
  <section class="testimonials-section">
    <div class="testimonials-rating">
      <div class="rating-display">
        <span class="rating-stars">* * * * *</span>
        <span class="rating-text">4.9 out of 5 from 500+ verified shop owner reviews</span>
      </div>
    </div>

    <div class="section-header">
      <h2 class="section-title">Loved by Shop Owners</h2>
      <p class="section-subtitle">See how TorqueDesk AI is transforming auto shops nationwide</p>
    </div>

    <div class="testimonials-grid">
      <div class="testimonial-card">
        <div class="stars">
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
        </div>
        <p class="testimonial-text">"TorqueDesk AI cut our scheduling time in half. We're booking 30% more jobs with the same team. This isn't just software—it's a game changer."</p>
        <div class="testimonial-author">Mike Henderson</div>
        <div class="testimonial-role">Owner, Henderson Auto Repair (4 locations)</div>
        <span class="testimonial-metric">Saved 15 hours/week</span>
      </div>

      <div class="testimonial-card">
        <div class="stars">
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
        </div>
        <p class="testimonial-text">"Our revenue jumped 30% in the first quarter. The AI diagnostics are eerily accurate, and customers love the digital estimates. We've never seen anything like it."</p>
        <div class="testimonial-author">Sarah Chen</div>
        <div class="testimonial-role">General Manager, Chen's Tire & Auto</div>
        <span class="testimonial-metric">Revenue +30%</span>
      </div>

      <div class="testimonial-card">
        <div class="stars">
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
        </div>
        <p class="testimonial-text">"Managing 4 locations used to be a nightmare. Now I can see everything at a glance, predict inventory needs, and spot opportunities. It's like having a CFO on staff."</p>
        <div class="testimonial-author">James Rodriguez</div>
        <div class="testimonial-role">Owner, Multi-Shop Fleet Management</div>
        <span class="testimonial-metric">4 locations managed easily</span>
      </div>

      <div class="testimonial-card">
        <div class="stars">
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
        </div>
        <p class="testimonial-text">"The mobile app means I can run my shop from anywhere. Real-time notifications, instant invoicing, and AI-powered customer follow-ups. My business runs like clockwork now."</p>
        <div class="testimonial-author">Lisa Palmer</div>
        <div class="testimonial-role">Owner, Palmer's Quick Lube Express</div>
        <span class="testimonial-metric">Efficiency +45%</span>
      </div>

      <div class="testimonial-card">
        <div class="stars">
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
        </div>
        <p class="testimonial-text">"Their support team is incredible. Every feature we asked for was either built-in or on their roadmap. We feel like partners, not just customers. Best decision we made."</p>
        <div class="testimonial-author">David Martinez</div>
        <div class="testimonial-role">Operations Manager, Southwest Auto Group</div>
        <span class="testimonial-metric">Rated support 5/5</span>
      </div>

      <div class="testimonial-card">
        <div class="stars">
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
          <span class="star">*</span>
        </div>
        <p class="testimonial-text">"We migrated from Tekmetric in a single afternoon. Zero downtime, all data transferred perfectly, and we started seeing improvements immediately. Highly recommended."</p>
        <div class="testimonial-author">Emma Johnson</div>
        <div class="testimonial-role">Owner, Coastal Auto Service Center</div>
        <span class="testimonial-metric">Migration time: 4 hours</span>
      </div>
    </div>
  </section>

  <!-- STATS BAR -->
  <section class="stats-section">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">500+</div>
        <div class="stat-label-text">Active Shops</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">99.9%</div>
        <div class="stat-label-text">Uptime SLA</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">4.9*</div>
        <div class="stat-label-text">Customer Rating</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">50K+</div>
        <div class="stat-label-text">Jobs Daily</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">&lt;30min</div>
        <div class="stat-label-text">Response Time</div>
      </div>
    </div>
  </section>

  <!-- INTEGRATIONS -->
  <section class="integrations-section">
    <div class="section-header">
      <h2 class="section-title">Works With Tools You Already Use</h2>
      <p class="section-subtitle">50+ integrations with the platforms your shop depends on</p>
    </div>

    <div class="integrations-grid">
      <div class="integration-item">
        <div class="integration-icon" style="background:#2CA01C">QB</div>
        <div class="integration-name">QuickBooks</div>
      </div>
      <div class="integration-item">
        <div class="integration-icon" style="background:#635BFF">$</div>
        <div class="integration-name">Stripe</div>
      </div>
      <div class="integration-item">
        <div class="integration-icon" style="background:#FF6B00">PT</div>
        <div class="integration-name">PartsTech</div>
      </div>
      <div class="integration-item">
        <div class="integration-icon" style="background:#E31837">CF</div>
        <div class="integration-name">CARFAX</div>
      </div>
      <div class="integration-item">
        <div class="integration-icon" style="background:#4285F4">CAL</div>
        <div class="integration-name">Google Calendar</div>
      </div>
      <div class="integration-item">
        <div class="integration-icon" style="background:#F22F46">MOB</div>
        <div class="integration-name">Twilio SMS</div>
      </div>
      <div class="integration-item">
        <div class="integration-icon" style="background:#006AFF">SQ</div>
        <div class="integration-name">Square</div>
      </div>
      <div class="integration-item">
        <div class="integration-icon" style="background:#611F69">Chat</div>
        <div class="integration-name">Slack</div>
      </div>
    </div>

    <div class="integrations-cta">
      <a href="/integrations">View all 50+ integrations →</a>
    </div>
  </section>

  <!-- NEWSLETTER SIGNUP -->
  <section class="newsletter-section">
    <div class="newsletter-container">
      <h2 class="newsletter-title">Get Weekly Shop Insights</h2>
      <p class="newsletter-subtitle">Tips, trends, and insider strategies delivered to your inbox</p>

      <form class="newsletter-form" onsubmit="return false;">
        <input type="email" placeholder="your@email.com" required>
        <button type="submit">Subscribe</button>
      </form>

      <div class="newsletter-privacy">We respect your privacy. Unsubscribe at any time.</div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <section class="cta-banner">
    <div class="cta-content">
      <h2 class="cta-title">Ready to Transform Your Shop?</h2>
      <p class="cta-subtitle">Join hundreds of shop owners who've already increased efficiency, revenue, and customer satisfaction with TorqueDesk AI. Start your free trial today—no credit card required.</p>

      <div class="cta-buttons">
        <a href="/pricing" class="btn btn-primary">Start Free Trial →</a>
        <a href="/contact" class="btn btn-secondary">Talk to a Specialist</a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  
<!-- NEXT PAGE NAVIGATION -->
<div class="next-page-cta">
      <div class="next-page-inner">
        <div class="next-page-label">Continue Exploring</div>
        <h2 class="next-page-title">Next: <span>Features</span></h2>
        <p class="next-page-desc">Discover our AI-powered features</p>
        <a href="/features" class="next-page-btn">
          <span class="btn-text">Explore Features</span>
          <span class="btn-arrow">&rarr;</span>
        </a>
        <div class="page-dots"><a href="/" class="page-dot active"></a><a href="/features" class="page-dot"></a><a href="/solutions" class="page-dot"></a><a href="/pricing" class="page-dot"></a><a href="/integrations" class="page-dot"></a><a href="/demo" class="page-dot"></a><a href="/customers" class="page-dot"></a><a href="/resources" class="page-dot"></a><a href="/about" class="page-dot"></a><a href="/contact" class="page-dot"></a></div>
        <div class="page-counter-text">Page 1 of 10</div>
      </div>
    </div>` }} />
  );
}
