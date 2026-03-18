import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features | TorqueDesk AI',
};

export default function FeaturesPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<style>
        /* ===== HERO SECTION ===== */
        .hero {
            background: linear-gradient(135deg, var(--hero) 0%, var(--dark-blue) 100%);
            padding: 80px 24px;
            text-align: center;
            border-bottom: 1px solid var(--subtle);
        }

        .hero-container {
            max-width: 900px;
            margin: 0 auto;
        }

        .breadcrumb {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            margin-bottom: 32px;
            font-size: 14px;
            color: var(--gray);
        }

        .breadcrumb a {
            color: var(--accent);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .breadcrumb a:hover {
            color: var(--secondary);
        }

        .breadcrumb span {
            color: var(--subtle);
        }

        .hero h1 {
            font-size: 48px !important;
            font-weight: 800 !important;
            color: var(--white) !important;
            margin-bottom: 16px !important;
            line-height: 1.2 !important;
        }

        .hero p {
            font-size: 18px;
            color: var(--light-gray);
            max-width: 700px;
            margin: 0 auto 32px;
            line-height: 1.6;
        }

        /* ===== FEATURE SECTION ===== */
        .features-grid {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 24px;
            overflow: visible !important;
        }

        .feature-section {
            display: block !important;
            max-width: 800px !important;
            margin: 0 auto 100px !important;
            padding: 0 !important;
            position: relative !important;
            clear: both !important;
            overflow: visible !important;
            direction: ltr !important;
        }

        .feature-section.reverse {
            display: block !important;
            direction: ltr !important;
        }

        .feature-section.reverse > * {
            direction: ltr !important;
        }

        .feature-content {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            overflow: visible !important;
            position: relative !important;
        }

        

        .feature-badge {
            display: inline-block;
            background: rgba(59,130,196, 0.15);
            border: 1px solid var(--secondary);
            color: var(--secondary);
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 20px;
        }

        .feature-icon {
            width: 56px;
            height: 56px;
            background: rgba(45, 156, 219, 0.12);
            border: 1px solid rgba(45, 156, 219, 0.25);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent);
            font-size: 18px;
            font-weight: 800;
            margin-bottom: 24px;
            letter-spacing: -0.5px;
        }

        .feature-content h2 {
            font-size: 32px !important;
            font-weight: 800 !important;
            color: var(--white) !important;
            margin-bottom: 16px !important;
            line-height: 1.2 !important;
        }

        .feature-intro {
            font-size: 16px;
            color: var(--light-gray);
            line-height: 1.7;
            margin-bottom: 40px;
        }

        /* ===== HOW IT WORKS ===== */
        .how-it-works {
            margin-bottom: 48px;
        }

        .how-it-works h3 {
            font-size: 18px;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 24px;
        }

        .steps-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
            margin-bottom: 32px !important;
        }

        .step {
            background: rgba(21, 32, 53, 0.4);
            border: 1px solid var(--subtle);
            padding: 20px;
            border-radius: 8px;
        }

        .step-number {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            color: var(--white);
            border-radius: 50%;
            font-weight: 700;
            font-size: 14px;
            margin-bottom: 12px;
        }

        .step h4 {
            font-size: 14px;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 8px;
        }

        .step p {
            font-size: 13px;
            color: var(--gray);
            line-height: 1.5;
            margin: 0;
        }

        /* ===== BENEFIT CARDS ===== */
        .benefits-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
            margin-bottom: 32px !important;
        }

        .benefit-card {
            background: rgba(21, 32, 53, 0.6);
            border: 1px solid var(--subtle);
            padding: 24px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .benefit-card:hover {
            background: rgba(21, 32, 53, 0.9);
            border-color: var(--accent);
            transform: translateY(-4px);
        }

        .benefit-stat {
            font-size: 20px;
            font-weight: 700;
            color: var(--secondary);
            margin-bottom: 8px;
        }

        .benefit-icon {
            width: 32px;
            height: 32px;
            background: rgba(59,130,196, 0.2);
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--secondary);
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 12px;
        }

        .benefit-card h4 {
            font-size: 14px;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 8px;
        }

        .benefit-card p {
            font-size: 13px;
            color: var(--gray);
            line-height: 1.5;
            margin: 0;
        }

        /* ===== COMPETITIVE EDGE CALLOUT ===== */
        .competitive-edge {
            background: rgba(59,130,196, 0.08);
            border-left: 3px solid var(--secondary);
            padding: 20px;
            border-radius: 4px;
            margin-bottom: 32px;
        }

        .competitive-edge p {
            font-size: 14px;
            color: var(--secondary);
            font-weight: 600;
            margin: 0;
        }

        .feature-btn {
            display: inline-block;
            background: var(--accent);
            color: var(--white);
            padding: 14px 32px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 1px solid var(--accent);
        }

        .feature-btn:hover {
            background: transparent;
            color: var(--accent);
            transform: translateX(4px);
        }

        /* ===== DEMO PREVIEW ===== */
        .demo-preview {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            background: var(--card);
            border: 2px solid rgba(45, 156, 219, 0.2);
            border-radius: 12px;
            padding: 28px;
            margin-top: 32px;
            position: relative !important;
            overflow: visible !important;
            box-shadow: 0 12px 40px rgba(45, 156, 219, 0.1);
            box-sizing: border-box !important;
        }

        .demo-preview::before {
            content: "LIVE PREVIEW";
            position: absolute;
            top: 12px;
            right: 16px;
            font-size: 10px;
            font-weight: 700;
            color: var(--secondary);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .demo-content {
            margin-top: 24px;
        }

        .demo-title {
            font-size: 13px;
            color: var(--gray);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }

        .demo-display {
            font-size: 24px;
            font-weight: 700;
            color: var(--secondary);
            font-family: 'Courier New', monospace;
        }

        .demo-subtext {
            font-size: 13px;
            color: var(--light-gray);
            margin-top: 12px;
        }

        /* ===== COMING SOON SECTION ===== */
        .coming-soon-section {
            max-width: 1200px;
            margin: 0 auto;
            padding: 80px 24px;
            border-top: 1px solid var(--subtle);
        }

        .coming-soon-section h2 {
            font-size: 40px;
            font-weight: 800;
            color: var(--white);
            text-align: center;
            margin-bottom: 60px;
        }

        .coming-soon-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 32px;
        }

        .coming-soon-card {
            background: rgba(21, 32, 53, 0.5);
            border: 1px solid var(--subtle);
            padding: 40px 32px;
            border-radius: 8px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .coming-soon-card:hover {
            border-color: var(--accent);
            background: rgba(21, 32, 53, 0.8);
            transform: translateY(-4px);
        }

        .coming-soon-badge {
            display: inline-block;
            background: rgba(245, 158, 11, 0.15);
            border: 1px solid #F59E0B;
            color: #F59E0B;
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 16px;
        }

        .coming-soon-card h3 {
            font-size: 22px;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 12px;
        }

        .coming-soon-card p {
            font-size: 14px;
            color: var(--gray);
            line-height: 1.6;
            margin: 0;
        }

        /* ===== COMPARISON TABLE ===== */
        .comparison-section {
            max-width: 1200px;
            margin: 0 auto;
            padding: 80px 24px;
            border-top: 1px solid var(--subtle);
        }

        .comparison-section h2 {
            font-size: 40px;
            font-weight: 800;
            color: var(--white);
            text-align: center;
            margin-bottom: 60px;
        }

        .comparison-table {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            overflow: visible;
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
        }

        .table-header {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
            gap: 0;
            background: linear-gradient(90deg, var(--dark-blue), var(--navy));
            border-bottom: 2px solid var(--accent);
        }

        .table-header-cell {
            padding: 24px;
            font-weight: 700;
            color: var(--white);
            font-size: 14px;
            text-align: center;
            border-right: 1px solid var(--subtle);
        }

        .table-header-cell:first-child {
            text-align: left;
        }

        .table-header-cell:last-child {
            border-right: none;
        }

        .table-row {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
            gap: 0;
            border-bottom: 1px solid var(--subtle);
            transition: background 0.3s ease;
        }

        .table-row:hover {
            background: rgba(45, 156, 219, 0.08);
        }

        .table-row:last-child {
            border-bottom: none;
        }

        .table-cell {
            padding: 20px 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            border-right: 1px solid var(--subtle);
        }

        .table-cell:first-child {
            justify-content: flex-start;
            font-weight: 600;
            color: var(--white);
        }

        .table-cell:last-child {
            border-right: none;
        }

        .check-mark {
            color: var(--secondary);
            font-weight: 800;
            font-size: 18px;
        }

        .cross-mark {
            color: var(--gray);
            font-weight: 800;
            font-size: 18px;
        }

        .warning-mark {
            color: #F59E0B;
            font-weight: 800;
            font-size: 18px;
        }

        /* ===== CTA BANNER ===== */
        .cta-banner {
            background: linear-gradient(135deg, var(--dark-blue) 0%, var(--navy) 100%);
            padding: 80px 24px;
            text-align: center;
            border-top: 1px solid var(--subtle);
            border-bottom: 1px solid var(--subtle);
        }

        .cta-container {
            max-width: 700px;
            margin: 0 auto;
        }

        .cta-banner h2 {
            font-size: 40px;
            font-weight: 800;
            color: var(--white);
            margin-bottom: 20px;
        }

        .cta-banner p {
            font-size: 18px;
            color: var(--light-gray);
            margin-bottom: 40px;
            line-height: 1.6;
        }

        .cta-buttons {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn {
            padding: 14px 32px;
            border-radius: 6px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            border: 1px solid transparent;
            cursor: pointer;
            font-size: 16px;
        }

        .btn-primary {
            background: var(--accent);
            color: var(--white);
        }

        .btn-primary:hover {
            background: transparent;
            border-color: var(--accent);
            color: var(--accent);
        }

        .btn-secondary {
            background: transparent;
            color: var(--accent);
            border-color: var(--accent);
        }

        .btn-secondary:hover {
            background: var(--accent);
            color: var(--white);
        }

        /* ===== ANIMATIONS ===== */

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 32px;
            }

            .hero p {
                font-size: 16px;
            }

            .feature-section,
            .feature-section.reverse {
                display: block !important;
                margin-bottom: 80px !important;
                direction: ltr !important;
            }

            .feature-section.reverse > * {
                direction: ltr !important;
            }

            .feature-content h2 {
                font-size: 28px;
            }

            .steps-grid {
                grid-template-columns: 1fr;
            }

            .benefits-grid {
                grid-template-columns: 1fr;
            }

            .coming-soon-grid {
                grid-template-columns: 1fr;
            }

            .comparison-table {
                overflow-x: auto;
            }

            .table-header,
            .table-row {
                grid-template-columns: 1fr;
                gap: 0;
            }

            .table-header-cell,
            .table-cell {
                border-right: none;
                border-bottom: 1px solid var(--subtle);
                padding: 16px;
            }

            .table-header-cell:last-child,
            .table-cell:last-child {
                border-bottom: 1px solid var(--subtle);
            }

            .table-header-cell {
                text-align: left;
            }

            .cta-banner h2 {
                font-size: 28px;
            }

            .cta-buttons {
                flex-direction: column;
            }

            .btn {
                width: 100%;
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
<!-- Hero Section -->
    <section class="hero">
        <div class="hero-container">
            <div class="breadcrumb">
                <a href="/">Home</a>
                <span>/</span>
                <span>Features</span>
            </div>
            <h1>Six Features That Beat Every Competitor</h1>
            <p>AI-powered capabilities that Shopmonkey, Tekmetric, and AutoLeap simply cannot match. See why leading auto shops are switching to TorqueDesk AI.</p>
        </div>
    </section>

    <!-- Features Grid -->
    <section class="features-grid">
        <!-- Feature 1: AI Diagnostics -->
        <div class="feature-section">
            <div class="feature-content">
                <div class="feature-badge">No Competitor Has AI Diagnostics</div>
                <div class="feature-icon">AI</div>
                <h2>AI Diagnostics Engine</h2>
                <p class="feature-intro">Revolutionary AI-powered vehicle diagnostics that automatically connect to your customers' vehicles, analyze all systems in real-time, and identify issues faster than any technician. Our machine learning engine learns from your shop's repair history to predict problems before customers experience failures.</p>

                <!-- How It Works -->
                <div class="how-it-works">
                    <h3>How It Works</h3>
                    <div class="steps-grid">
                        <div class="step">
                            <div class="step-number">1</div>
                            <h4>OBD-II Connection</h4>
                            <p>Automatically detect and connect to vehicle diagnostic ports using our proprietary wireless adapter technology</p>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <h4>Real-Time Analysis</h4>
                            <p>Scan all vehicle systems including engine, transmission, ABS, airbags, and emissions with millisecond precision</p>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <h4>AI Interpretation</h4>
                            <p>Machine learning models trained on 50 million diagnostic records analyze codes and recommend repairs with 95% accuracy</p>
                        </div>
                        <div class="step">
                            <div class="step-number">4</div>
                            <h4>Auto-Generate Reports</h4>
                            <p>Professional diagnostic reports create instantly and integrate with invoices, estimates, and customer communications</p>
                        </div>
                    </div>
                </div>

                <!-- Benefits -->
                <div class="benefits-grid">
                    <div class="benefit-card">
                        <div class="benefit-stat">40%</div>
                        <div class="benefit-icon">-</div>
                        <h4>Faster Diagnosis</h4>
                        <p>Reduce diagnostic time from 2 hours to 45 minutes with AI-powered analysis</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">95%</div>
                        <div class="benefit-icon">check</div>
                        <h4>Accuracy Rate</h4>
                        <p>Higher than manual diagnosis with zero human error on code interpretation</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">10,000+</div>
                        <div class="benefit-icon">check</div>
                        <h4>Vehicle Models Supported</h4>
                        <p>Every vehicle from 1996 forward, foreign and domestic, all manufacturers</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">Your Shop</div>
                        <div class="benefit-icon">learn</div>
                        <h4>Learns from History</h4>
                        <p>AI improves accuracy over time based on your specific shop's repair patterns</p>
                    </div>
                </div>

                <!-- Competitive Edge -->
                <div class="competitive-edge">
                    <p>No competitor offers AI-powered diagnostics. Shopmonkey and Tekmetric require manual technician input. Only TorqueDesk AI automates the entire diagnostic process.</p>
                </div>

                <a href="/pricing" class="feature-btn">Start Free Trial</a>
            </div>
            <div class="demo-preview">
                <div class="demo-content">
                    <div class="demo-title">Vehicle Systems Scan</div>
                    <div class="demo-display">Scanning...</div>
                    <div class="demo-subtext">3 issues detected • Severity: Medium</div>
                    <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--subtle);">
                        <div style="font-size: 12px; color: var(--gray); margin-bottom: 8px;">DETECTED ISSUES:</div>
                        <div style="font-size: 13px; color: var(--white); margin-bottom: 6px;">• Check Engine Light (P0420) • Severity: HIGH</div>
                        <div style="font-size: 13px; color: var(--white); margin-bottom: 6px;">• Tire Pressure Warning • Severity: MEDIUM</div>
                        <div style="font-size: 13px; color: var(--white); margin-bottom: 12px;">• Oil Change Due (Maintenance) • Severity: LOW</div>
                        <div style="padding-top: 12px; border-top: 1px solid var(--subtle);">
                            <div style="font-size: 11px; color: var(--secondary); font-weight: 600;">Recommended Actions:</div>
                            <div style="font-size: 12px; color: var(--gray); margin-top: 8px;">Repair catalyst converter • Est. 2.5 hrs • Parts: $340</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Feature 2: Smart Scheduling -->
        <div class="feature-section">
            <div class="feature-content">
                <div class="feature-badge">AI-Optimized vs AutoLeap's Manual Calendar</div>
                <div class="feature-icon">CAL</div>
                <h2>Smart Scheduling</h2>
                <p class="feature-intro">AI-driven appointment optimization that maximizes your bay utilization, reduces no-shows, and keeps your technicians busy every minute. Our neural network predicts job duration based on vehicle type, service history, and technician skill level, then intelligently schedules appointments to eliminate idle time.</p>

                <!-- How It Works -->
                <div class="how-it-works">
                    <h3>How It Works</h3>
                    <div class="steps-grid">
                        <div class="step">
                            <div class="step-number">1</div>
                            <h4>Predict Job Duration</h4>
                            <p>AI analyzes vehicle type, repair complexity, and your historical data to estimate exact job time for each appointment</p>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <h4>Fill Scheduling Gaps</h4>
                            <p>Automatically identifies open bay slots and recommends jobs from your pipeline that fit perfectly into those gaps</p>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <h4>Reduce No-Shows</h4>
                            <p>SMS reminders sent 24 hours and 2 hours before appointment reduce no-shows by 40% automatically</p>
                        </div>
                        <div class="step">
                            <div class="step-number">4</div>
                            <h4>Match Best Technician</h4>
                            <p>AI assigns jobs to the technician best equipped to handle that specific repair based on certifications and history</p>
                        </div>
                    </div>
                </div>

                <!-- Benefits -->
                <div class="benefits-grid">
                    <div class="benefit-card">
                        <div class="benefit-stat">60% → 95%</div>
                        <div class="benefit-icon">up</div>
                        <h4>Bay Utilization Growth</h4>
                        <p>Increase productive time in every bay from 6 hours to 7.6 hours per day</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">30%</div>
                        <div class="benefit-icon">plus</div>
                        <h4>More Jobs Per Week</h4>
                        <p>Shops report scheduling 3-4 additional jobs every week after first month</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">40%</div>
                        <div class="benefit-icon">check</div>
                        <h4>Fewer No-Shows</h4>
                        <p>Automated SMS reminders eliminate scheduling cancellations in real-time</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">100%</div>
                        <div class="benefit-icon">check</div>
                        <h4>Perfect Assignments</h4>
                        <p>Every job assigned to the right technician for optimal efficiency and quality</p>
                    </div>
                </div>

                <!-- Competitive Edge -->
                <div class="competitive-edge">
                    <p>AutoLeap offers manual calendars only. Tekmetric and Shopmonkey have basic scheduling without AI-powered duration prediction or gap-filling intelligence.</p>
                </div>

                <a href="/pricing" class="feature-btn">Start Free Trial</a>
            </div>
            <div class="demo-preview">
                <div class="demo-content">
                    <div class="demo-title">Today's Schedule Optimization</div>
                    <div class="demo-display">12 Appointments</div>
                    <div class="demo-subtext">Bay utilization: 94% • No no-shows predicted</div>
                    <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--subtle);">
                        <div style="font-size: 12px; color: var(--gray); margin-bottom: 12px;">BAY STATUS:</div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
                            <div style="background: rgba(59,130,196, 0.2); padding: 10px; border-radius: 6px; border-left: 3px solid var(--secondary);">
                                <div style="font-size: 11px; color: var(--gray); font-weight: 600;">Bay 1</div>
                                <div style="font-size: 12px; color: var(--secondary);">Occupied 9:00-10:30</div>
                            </div>
                            <div style="background: rgba(59,130,196, 0.2); padding: 10px; border-radius: 6px; border-left: 3px solid var(--secondary);">
                                <div style="font-size: 11px; color: var(--gray); font-weight: 600;">Bay 2</div>
                                <div style="font-size: 12px; color: var(--secondary);">Occupied 8:30-12:00</div>
                            </div>
                            <div style="background: rgba(59,130,196, 0.2); padding: 10px; border-radius: 6px; border-left: 3px solid var(--secondary);">
                                <div style="font-size: 11px; color: var(--gray); font-weight: 600;">Bay 3</div>
                                <div style="font-size: 12px; color: var(--secondary);">Occupied 9:15-11:45</div>
                            </div>
                            <div style="background: rgba(45, 156, 219, 0.1); padding: 10px; border-radius: 6px; border-left: 3px solid var(--accent);">
                                <div style="font-size: 11px; color: var(--gray); font-weight: 600;">Bay 4</div>
                                <div style="font-size: 12px; color: var(--accent);">Available 10:30-12:00</div>
                            </div>
                        </div>
                        <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--subtle);">
                            <div style="font-size: 11px; color: var(--secondary); font-weight: 600;">AI Suggestion:</div>
                            <div style="font-size: 12px; color: var(--gray); margin-top: 6px;">Schedule tire rotation (1.5 hrs) in Bay 4 at 10:30</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Feature 3: Invoicing & Estimates -->
        <div class="feature-section">
            <div class="feature-content">
                <div class="feature-badge">Auto-Generated vs Tekmetric's Manual Entry</div>
                <div class="feature-icon">$</div>
                <h2>Invoicing & Estimates</h2>
                <p class="feature-intro">One-click invoice generation with intelligent pricing recommendations based on real-time market data, competitive rates in your region, and vehicle history. Accept payments directly from customer phones, sync with QuickBooks automatically, and get paid 3x faster with digital invoicing and approval flows.</p>

                <!-- How It Works -->
                <div class="how-it-works">
                    <h3>How It Works</h3>
                    <div class="steps-grid">
                        <div class="step">
                            <div class="step-number">1</div>
                            <h4>One-Click Generation</h4>
                            <p>Create professional estimates from diagnostics in a single click with all labor, parts, and taxes calculated automatically</p>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <h4>Smart Pricing AI</h4>
                            <p>AI suggests optimal pricing based on market rates, your labor costs, and competitor pricing in your region</p>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <h4>Digital Approval</h4>
                            <p>Send estimates via SMS or email with clickable approval link, visible to customers on their mobile phones</p>
                        </div>
                        <div class="step">
                            <div class="step-number">4</div>
                            <h4>Instant Payment</h4>
                            <p>Customers approve and pay immediately via Stripe, Square, or their preferred digital payment method</p>
                        </div>
                    </div>
                </div>

                <!-- Benefits -->
                <div class="benefits-grid">
                    <div class="benefit-card">
                        <div class="benefit-stat">3x Faster</div>
                        <div class="benefit-icon">clock</div>
                        <h4>Payment Collection</h4>
                        <p>Get paid within 24 hours instead of 30-60 days with digital invoicing</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">22%</div>
                        <div class="benefit-icon">plus</div>
                        <h4>Higher Approval Rate</h4>
                        <p>Digital estimates get 22% more approvals than traditional paper quotes</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">9</div>
                        <div class="benefit-icon">connect</div>
                        <h4>Payment Integrations</h4>
                        <p>Accept Stripe, Square, ACH, PayPal, and integrate seamlessly with QuickBooks</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">Auto</div>
                        <div class="benefit-icon">send</div>
                        <h4>Follow-Up Reminders</h4>
                        <p>Automatically remind customers of overdue invoices after 10 days</p>
                    </div>
                </div>

                <!-- Competitive Edge -->
                <div class="competitive-edge">
                    <p>Tekmetric requires manual invoice creation. Shopmonkey lacks digital approval flow. Only TorqueDesk AI generates estimates from diagnostics with AI pricing recommendations.</p>
                </div>

                <a href="/pricing" class="feature-btn">Start Free Trial</a>
            </div>
            <div class="demo-preview">
                <div class="demo-content">
                    <div class="demo-title">Latest Estimate Generated</div>
                    <div class="demo-display">EST-4521</div>
                    <div class="demo-subtext">2024 Honda Civic • Total: $847.50 • Status: Approved</div>
                    <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--subtle);">
                        <div style="margin-bottom: 16px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <span style="font-size: 13px; color: var(--white);">Oil Change & Filter</span>
                                <span style="font-size: 13px; color: var(--gray);">$65.00</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <span style="font-size: 13px; color: var(--white);">Brake Pad Replacement (2 hrs labor)</span>
                                <span style="font-size: 13px; color: var(--gray);">$450.00</span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span style="font-size: 13px; color: var(--white);">Wheel Alignment</span>
                                <span style="font-size: 13px; color: var(--gray);">$115.00</span>
                            </div>
                        </div>
                        <div style="padding-top: 16px; border-top: 1px solid var(--subtle);">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                                <span style="font-size: 12px; color: var(--gray);">Subtotal:</span>
                                <span style="font-size: 12px; color: var(--white);">$630.00</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <span style="font-size: 12px; color: var(--gray);">Tax (8.25%):</span>
                                <span style="font-size: 12px; color: var(--white);">$51.98</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding-top: 8px; border-top: 1px solid var(--subtle);">
                                <span style="font-size: 13px; font-weight: 700; color: var(--secondary);">Total:</span>
                                <span style="font-size: 14px; font-weight: 700; color: var(--secondary);">$847.50</span>
                            </div>
                            <div style="margin-top: 12px;">
                                <div style="font-size: 11px; color: var(--secondary); font-weight: 600;">Customer approved 2 hours ago via SMS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Feature 4: Inventory Management -->
        <div class="feature-section">
            <div class="feature-content">
                <div class="feature-badge">Predictive Reorder vs Shopmonkey's Basic Tracking</div>
                <div class="feature-icon">INV</div>
                <h2>Inventory Management</h2>
                <p class="feature-intro">AI-driven demand forecasting that predicts exactly what parts you'll need, when you'll need them, and automatically triggers reorders before you run out. Access 225+ supplier integrations including PartsTech, WorldPac, and local distributors with real-time pricing and availability checks across all your shop locations.</p>

                <!-- How It Works -->
                <div class="how-it-works">
                    <h3>How It Works</h3>
                    <div class="steps-grid">
                        <div class="step">
                            <div class="step-number">1</div>
                            <h4>Predictive Forecasting</h4>
                            <p>AI analyzes your service history, seasonal patterns, and vehicle trends to predict future parts demand accurately</p>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <h4>Reorder Automation</h4>
                            <p>Set reorder thresholds and rules, and AI automatically creates purchase orders before stock runs out</p>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <h4>Price Comparison</h4>
                            <p>Compare pricing across 225+ suppliers instantly to find lowest costs without sacrificing quality</p>
                        </div>
                        <div class="step">
                            <div class="step-number">4</div>
                            <h4>Multi-Location Sync</h4>
                            <p>Track inventory across all shop locations and transfer stock automatically where needed most</p>
                        </div>
                    </div>
                </div>

                <!-- Benefits -->
                <div class="benefits-grid">
                    <div class="benefit-card">
                        <div class="benefit-stat">225+</div>
                        <div class="benefit-icon">link</div>
                        <h4>Supplier Integrations</h4>
                        <p>Connect to PartsTech, WorldPac, local distributors, and all major suppliers automatically</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">0</div>
                        <div class="benefit-icon">check</div>
                        <h4>Stockouts</h4>
                        <p>Never lose a job because you ran out of parts with AI-powered predictive reordering</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">18%</div>
                        <div class="benefit-icon">down</div>
                        <h4>Lower Costs</h4>
                        <p>Automatic price comparison across suppliers saves 18% on parts procurement annually</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">Real-Time</div>
                        <div class="benefit-icon">check</div>
                        <h4>Stock Visibility</h4>
                        <p>View inventory levels across all locations with live availability from each supplier</p>
                    </div>
                </div>

                <!-- Competitive Edge -->
                <div class="competitive-edge">
                    <p>Shopmonkey offers basic inventory tracking. Tekmetric has manual reordering. AutoLeap lacks supplier integrations. Only TorqueDesk AI predicts parts needs with AI forecasting.</p>
                </div>

                <a href="/pricing" class="feature-btn">Start Free Trial</a>
            </div>
            <div class="demo-preview">
                <div class="demo-content">
                    <div class="demo-title">Inventory Dashboard</div>
                    <div class="demo-display">847 Parts Tracked</div>
                    <div class="demo-subtext">All Locations • 3 reorder alerts active</div>
                    <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--subtle);">
                        <div style="margin-bottom: 14px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <span style="font-size: 12px; color: var(--white);">Brake Pads (Front)</span>
                                <span style="font-size: 12px; color: var(--secondary); font-weight: 600;">42 units</span>
                            </div>
                            <div style="height: 5px; background: rgba(45, 156, 219, 0.2); border-radius: 2px; overflow: visible;">
                                <div style="height: 100%; width: 84%; background: var(--secondary);"></div>
                            </div>
                        </div>
                        <div style="margin-bottom: 14px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <span style="font-size: 12px; color: var(--white);">Oil Filters</span>
                                <span style="font-size: 12px; color: #F59E0B; font-weight: 600;">8 units (ALERT)</span>
                            </div>
                            <div style="height: 5px; background: rgba(245, 158, 11, 0.2); border-radius: 2px; overflow: visible;">
                                <div style="height: 100%; width: 16%; background: #F59E0B;"></div>
                            </div>
                        </div>
                        <div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <span style="font-size: 12px; color: var(--white);">Transmission Fluid</span>
                                <span style="font-size: 12px; color: #EF4444; font-weight: 600;">2 units (REORDER)</span>
                            </div>
                            <div style="height: 5px; background: rgba(239, 68, 68, 0.2); border-radius: 2px; overflow: visible;">
                                <div style="height: 100%; width: 4%; background: #EF4444;"></div>
                            </div>
                        </div>
                        <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--subtle);">
                            <div style="font-size: 11px; color: var(--secondary); font-weight: 600;">Auto-reorder initiated for 2 items</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Feature 5: Customer CRM -->
        <div class="feature-section">
            <div class="feature-content">
                <div class="feature-badge">AI Insights vs Competitors' Basic Records</div>
                <div class="feature-icon">CRM</div>
                <h2>Customer CRM</h2>
                <p class="feature-intro">AI-powered customer intelligence that builds a complete 360-degree profile of every customer including service history, vehicle information, preferences, lifetime value, and payment patterns. Get automatic upsell recommendations, NPS tracking for customer satisfaction, and segmentation for targeted marketing campaigns that increase repeat business by 45%.</p>

                <!-- How It Works -->
                <div class="how-it-works">
                    <h3>How It Works</h3>
                    <div class="steps-grid">
                        <div class="step">
                            <div class="step-number">1</div>
                            <h4>Build Complete Profiles</h4>
                            <p>Automatically compile all service history, vehicle details, purchase patterns, and customer preferences</p>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <h4>Predict Next Services</h4>
                            <p>AI knows when customers need oil changes, tire rotations, inspections based on their vehicle and history</p>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <h4>Automated Follow-Ups</h4>
                            <p>Send service reminders 45 days before maintenance is due, plus birthday messages and review requests</p>
                        </div>
                        <div class="step">
                            <div class="step-number">4</div>
                            <h4>Smart Segmentation</h4>
                            <p>Automatically group customers by value, service needs, or demographics for targeted marketing campaigns</p>
                        </div>
                    </div>
                </div>

                <!-- Benefits -->
                <div class="benefits-grid">
                    <div class="benefit-card">
                        <div class="benefit-stat">45%</div>
                        <div class="benefit-icon">up</div>
                        <h4>Repeat Customers</h4>
                        <p>Increase customer lifetime value with proactive service reminders and personalization</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">360</div>
                        <div class="benefit-icon">eye</div>
                        <h4>Customer View</h4>
                        <p>Complete customer profile with all service history, vehicles, preferences, and payment data in one place</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">NPS</div>
                        <div class="benefit-icon">check</div>
                        <h4>Satisfaction Tracking</h4>
                        <p>Monitor customer satisfaction scores and identify at-risk customers before they switch shops</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">Auto</div>
                        <div class="benefit-icon">send</div>
                        <h4>Smart Campaigns</h4>
                        <p>AI recommends and schedules marketing campaigns to the right customers at the perfect time</p>
                    </div>
                </div>

                <!-- Competitive Edge -->
                <div class="competitive-edge">
                    <p>Competitors offer basic contact storage. Only TorqueDesk AI predicts customer service needs with machine learning and automatically sends personalized follow-ups.</p>
                </div>

                <a href="/pricing" class="feature-btn">Start Free Trial</a>
            </div>
            <div class="demo-preview">
                <div class="demo-content">
                    <div class="demo-title">Customer Database</div>
                    <div class="demo-display">2,340 Customers</div>
                    <div class="demo-subtext">47 follow-ups recommended today • 12 NPS alerts</div>
                    <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--subtle);">
                        <div style="margin-bottom: 12px; padding: 12px; background: rgba(59,130,196, 0.1); border-radius: 6px; border-left: 3px solid var(--secondary);">
                            <div style="font-size: 12px; color: var(--white); font-weight: 600; margin-bottom: 4px;">John Daniels</div>
                            <div style="font-size: 11px; color: var(--gray); margin-bottom: 6px;">2019 Toyota Camry • Last service: 45 days ago</div>
                            <div style="font-size: 11px; color: var(--secondary); font-weight: 600;">AI Recommend: Oil change, air filter replacement</div>
                        </div>
                        <div style="margin-bottom: 12px; padding: 12px; background: rgba(59,130,196, 0.1); border-radius: 6px; border-left: 3px solid var(--secondary);">
                            <div style="font-size: 12px; color: var(--white); font-weight: 600; margin-bottom: 4px;">Sarah Mitchell</div>
                            <div style="font-size: 11px; color: var(--gray); margin-bottom: 6px;">2021 Honda Civic • Last service: 62 days ago</div>
                            <div style="font-size: 11px; color: var(--secondary); font-weight: 600;">AI Recommend: Oil change, coolant flush, wheel alignment</div>
                        </div>
                        <div style="padding-top: 12px; border-top: 1px solid var(--subtle);">
                            <div style="font-size: 11px; color: var(--gray);">Due for service: 89 customers</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Feature 6: Reports & Analytics -->
        <div class="feature-section">
            <div class="feature-content">
                <div class="feature-badge">Real-Time AI Predictions vs Batch Reports</div>
                <div class="feature-icon">RPT</div>
                <h2>Reports & Analytics</h2>
                <p class="feature-intro">Live dashboards with 35+ pre-built reports including revenue analysis, labor productivity, parts profitability, and customer retention metrics. Create custom reports with our drag-and-drop builder, export in any format, and get AI-powered revenue forecasting that predicts next month's earnings with 92% accuracy to help you plan hiring and inventory.</p>

                <!-- How It Works -->
                <div class="how-it-works">
                    <h3>How It Works</h3>
                    <div class="steps-grid">
                        <div class="step">
                            <div class="step-number">1</div>
                            <h4>Real-Time Dashboards</h4>
                            <p>View live KPIs that update every minute showing revenue, jobs, technician productivity, and bay utilization</p>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <h4>Pre-Built Reports</h4>
                            <p>Access 35+ ready-made reports including P&L, tax analysis, department performance, and customer analytics</p>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <h4>AI Forecasting</h4>
                            <p>Machine learning predicts your next month's revenue, labor costs, and parts spending with 92% accuracy</p>
                        </div>
                        <div class="step">
                            <div class="step-number">4</div>
                            <h4>Custom Report Builder</h4>
                            <p>Drag-and-drop interface to create any report you need and export to PDF, Excel, CSV, or via API</p>
                        </div>
                    </div>
                </div>

                <!-- Benefits -->
                <div class="benefits-grid">
                    <div class="benefit-card">
                        <div class="benefit-stat">35+</div>
                        <div class="benefit-icon">file</div>
                        <h4>Pre-Built Reports</h4>
                        <p>Revenue, labor, parts, customer retention, employee performance, tax analysis, and more</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">92%</div>
                        <div class="benefit-icon">check</div>
                        <h4>Forecast Accuracy</h4>
                        <p>AI-powered predictions match actual results with 92% accuracy across all metrics</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">Real-Time</div>
                        <div class="benefit-icon">update</div>
                        <h4>Live Metrics</h4>
                        <p>All KPIs refresh every minute showing revenue, gross profit, labor utilization, and more</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-stat">Any Format</div>
                        <div class="benefit-icon">export</div>
                        <h4>Export Options</h4>
                        <p>Download as PDF, Excel, CSV or integrate via API with your accounting software</p>
                    </div>
                </div>

                <!-- Competitive Edge -->
                <div class="competitive-edge">
                    <p>Competitors offer basic reporting with batch updates. Only TorqueDesk AI provides real-time dashboards with AI-powered revenue forecasting and 35+ pre-built reports.</p>
                </div>

                <a href="/pricing" class="feature-btn">Start Free Trial</a>
            </div>
            <div class="demo-preview">
                <div class="demo-content">
                    <div class="demo-title">Current Month Performance</div>
                    <div class="demo-display">$127,450</div>
                    <div class="demo-subtext">Revenue (Current Month) • Updated 30 minutes ago</div>
                    <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--subtle);">
                        <div style="margin-bottom: 18px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="font-size: 12px; color: var(--gray);">AI Forecast (End of Month):</span>
                                <span style="font-size: 13px; font-weight: 700; color: var(--secondary);">+12%</span>
                            </div>
                            <div style="font-size: 13px; color: var(--white);">Projected Month End: $142,745</div>
                            <div style="font-size: 11px; color: var(--gray); margin-top: 4px;">Based on current pace and historical trends</div>
                        </div>
                        <div style="padding-top: 18px; border-top: 1px solid var(--subtle);">
                            <div style="margin-bottom: 12px;">
                                <div style="font-size: 12px; color: var(--gray); margin-bottom: 8px;">Key Metrics:</div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                                    <span style="font-size: 12px; color: var(--light-gray);">Billable Hours:</span>
                                    <span style="font-size: 12px; color: var(--secondary); font-weight: 600;">487 hrs</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                                    <span style="font-size: 12px; color: var(--light-gray);">Avg Labor Rate:</span>
                                    <span style="font-size: 12px; color: var(--secondary); font-weight: 600;">$89.50/hr</span>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="font-size: 12px; color: var(--light-gray);">Parts Sold:</span>
                                    <span style="font-size: 12px; color: var(--secondary); font-weight: 600;">$42,180</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Coming Soon Section -->
    <section class="coming-soon-section">
        <h2>Coming Soon: Future Features in Development</h2>
        <div class="coming-soon-grid">
            <div class="coming-soon-card">
                <div class="coming-soon-badge">Q3 2026</div>
                <h3>Digital Vehicle Inspections</h3>
                <p>AI-powered vehicle inspection reports with photo documentation, digital signatures, and automatic customer notification systems for inspection findings.</p>
            </div>
            <div class="coming-soon-card">
                <div class="coming-soon-badge">Q4 2026</div>
                <h3>AI-Powered Marketing Suite</h3>
                <p>Automated email and SMS campaigns, customer loyalty rewards, referral tracking, and social media posting all powered by customer behavior AI.</p>
            </div>
            <div class="coming-soon-card">
                <div class="coming-soon-badge">Q1 2027</div>
                <h3>Fleet Management Pro</h3>
                <p>Complete fleet management module with multi-vehicle tracking, predictive maintenance scheduling, and bulk job management for fleet customers.</p>
            </div>
            <div class="coming-soon-card">
                <div class="coming-soon-badge">Q2 2027</div>
                <h3>Voice Assistant</h3>
                <p>Hands-free shop management with voice commands to schedule appointments, look up customer info, and generate reports from anywhere in your shop.</p>
            </div>
        </div>
    </section>

    <!-- Comparison Table Section -->
    <section class="comparison-section">
        <h2>Feature Comparison: Why TDAI Wins</h2>
        <div class="comparison-table">
            <div class="table-header">
                <div class="table-header-cell">Feature</div>
                <div class="table-header-cell">TorqueDesk AI</div>
                <div class="table-header-cell">Shopmonkey</div>
                <div class="table-header-cell">Tekmetric</div>
                <div class="table-header-cell">AutoLeap</div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">AI Diagnostics Engine</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">AI Job Duration Prediction</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">Smart Scheduling (AI-Optimized)</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">One-Click Invoice Generation</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">Smart Pricing AI</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">Digital Estimate Approval</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">Predictive Inventory Reordering</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">225+ Supplier Integrations</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">Customer Need Prediction</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">NPS Customer Satisfaction Tracking</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">Revenue Forecasting (AI)</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">35+ Pre-Built Reports</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">Custom Report Builder</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="cross-mark"><span class="cross">No</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">Real-Time Dashboards</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">Multi-Location Support</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="warning-mark">~</span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">Mobile App (iOS/Android)</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">API & Third-Party Integrations</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">Stripe/Square Integration</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
            </div>

            <div class="table-row">
                <div class="table-cell" style="text-align: left;">QuickBooks Sync</div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
                <div class="table-cell"><span class="check-mark"><span class="check">Yes</span></span></div>
            </div>
        </div>
    </section>

    <!-- CTA Banner -->
    <section class="cta-banner">
        <div class="cta-container">
            <h2>Experience All Features — Start Free Trial</h2>
            <p>Get full access to AI Diagnostics, Smart Scheduling, and all six features for 14 days. No credit card required. See why 2,000+ auto shops trust TorqueDesk AI.</p>
            <div class="cta-buttons">
                <a href="/pricing" class="btn btn-primary">Start Free Trial</a>
                <a href="/contact" class="btn btn-secondary">Schedule Demo</a>
            </div>
        </div>
    </section>

    
<!-- NEXT PAGE NAVIGATION -->
<div class="next-page-cta">
      <div class="next-page-inner">
        <div class="next-page-label">Continue Exploring</div>
        <h2 class="next-page-title">Next: <span>Solutions</span></h2>
        <p class="next-page-desc">See industry-specific solutions</p>
        <a href="/solutions" class="next-page-btn">
          <span class="btn-text">Explore Solutions</span>
          <span class="btn-arrow">&rarr;</span>
        </a>
        <div class="page-dots"><a href="/" class="page-dot"></a><a href="/features" class="page-dot active"></a><a href="/solutions" class="page-dot"></a><a href="/pricing" class="page-dot"></a><a href="/integrations" class="page-dot"></a><a href="/demo" class="page-dot"></a><a href="/customers" class="page-dot"></a><a href="/resources" class="page-dot"></a><a href="/about" class="page-dot"></a><a href="/contact" class="page-dot"></a></div>
        <div class="page-counter-text">Page 2 of 10</div>
      </div>
    </div>` }} />
  );
}
