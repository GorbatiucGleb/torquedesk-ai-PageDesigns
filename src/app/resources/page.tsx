import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | TorqueDesk AI',
};

export default function ResourcesPage() {
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
            font-size: 48px;
            font-weight: 800;
            color: var(--white);
            margin-bottom: 16px;
            line-height: 1.2;
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
            padding: 80px 24px;
        }

        .feature-section {
            display: block !important;
            max-width: 800px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            gap: 60px;
            align-items: flex-start;
            margin-bottom: 160px;
        }

        .feature-section.reverse {
            direction: ltr;
        }

        .feature-section.reverse > * {
            direction: ltr !important;
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
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 24px;
            box-shadow: 0 8px 24px rgba(45, 156, 219, 0.2);
        }

        .feature-content h2 {
            font-size: 36px;
            font-weight: 800;
            color: var(--white);
            margin-bottom: 16px;
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
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 32px;
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
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 32px;
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
            background: var(--card);
            border: 2px solid var(--accent);
            border-radius: 12px;
            padding: 32px;
            position: relative;
            overflow: visible;
            box-shadow: 0 16px 48px rgba(45, 156, 219, 0.15);
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
            overflow: hidden;
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
                grid-template-columns: 1fr;
                gap: 40px;
                margin-bottom: 100px;
                direction: ltr;
            }

            .feature-section.reverse > * {
                direction: ltr;
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
<!-- INTEGRATION API -->
    <section class="api-section">
        <div class="api-content">
            <h2>Build Custom Integrations with Our API</h2>
            <p class="api-description">Not seeing the integration you need? Our powerful REST API, webhooks, and comprehensive SDK documentation make it easy to build custom solutions that work exactly how you want them to.</p>

            <div class="api-features">
                <div class="api-feature">
                    <div class="api-feature-icon">API</div>
                    <div>
                        <h4>REST API</h4>
                        <p>Full-featured REST API with comprehensive documentation and SDKs for multiple languages.</p>
                    </div>
                </div>
                <div class="api-feature">
                    <div class="api-feature-icon">*</div>
                    <div>
                        <h4>Webhooks</h4>
                        <p>Real-time event notifications for job updates, invoicing, and scheduling changes.</p>
                    </div>
                </div>
                <div class="api-feature">
                    <div class="api-feature-icon">↔</div>
                    <div>
                        <h4>SDK Support</h4>
                        <p>Official SDKs for JavaScript, Python, and Go for faster development and integration.</p>
                    </div>
                </div>
            </div>

            <a href="/integrations" class="api-link">View API Documentation</a>
        </div>
    </section>

    <!-- REQUEST INTEGRATION -->
    <section class="request-section">
        <h2>Don't See What You Need?</h2>
        <form class="request-form">
            <div class="form-row">
                <div class="form-group">
                    <label for="req-name">Your Name</label>
                    <input type="text" id="req-name" name="name" placeholder="John Smith" required>
                </div>
                <div class="form-group">
                    <label for="req-email">Email</label>
                    <input type="email" id="req-email" name="email" placeholder="john@yourshop.com" required>
                </div>
            </div>
            <div class="form-group">
                <label for="req-tool">Integration You'd Like</label>
                <input type="text" id="req-tool" name="tool" placeholder="e.g., HubSpot, Zapier, Asana..." required>
            </div>
            <div class="form-group">
                <label for="req-notes">Tell Us More</label>
                <textarea id="req-notes" name="notes" placeholder="Why do you need this integration? How would it help your shop?"></textarea>
            </div>
            <button type="submit" class="submit-btn">Submit Request</button>
        </form>
    </section>

    <!-- CTA -->
    <div class="cta-section">
        <h2>Ready to Connect Your Tools?</h2>
        <p>Start your free trial and integrate TDAI with your existing workflow in minutes.</p>
        <a href="/pricing" class="cta-btn">Start Your Free Trial</a>
    </div>

    <!-- API DOCUMENTATION SECTION DIVIDER -->
    <div style="margin: 100px 0; padding: 40px 20px; text-align: center; border-top: 2px solid rgba(45, 156, 219, 0.2); border-bottom: 2px solid rgba(45, 156, 219, 0.2);">
        <h2 style="font-size: 2.5rem; color: #fff; margin: 0 0 10px 0; font-weight: 700;">API & Developer Documentation</h2>
        <p style="color: #B0BCCC; font-size: 1.05rem; max-width: 700px; margin: 0 auto;">Extend TorqueDesk AI with custom integrations, SDKs, webhooks, and powerful automations.</p>
    </div>

    <section class="api-hero">
        <h1>Build on TorqueDesk AI</h1>
        <p>REST API, Webhooks, and SDKs for developers. Extend TorqueDesk AI with custom integrations and powerful automations.</p>
    </section>

    <div class="api-container">
        <section class="quickstart-section">
            <h2 class="section-title">Quick Start Guide</h2>
            <div class="quickstart-grid">
                <div class="quickstart-step">
                    <div class="step-number">1</div>
                    <h3>Get API Key</h3>
                    <p>Sign up for a developer account and generate API credentials from your dashboard settings.</p>
                    <div class="code-block"><code><span class="code-keyword">TDAI_API_KEY</span> = <span class="code-string">"sk_live_1a2b3c4d5e6f7g8h9i0j"</span>
<span class="code-keyword">BASE_URL</span> = <span class="code-string">"https://api.torquedeskAI.com/v1"</span></code></div>
                </div>

                <div class="quickstart-step">
                    <div class="step-number">2</div>
                    <h3>Make First Call</h3>
                    <p>Authenticate with Bearer token and retrieve customer data from your shop.</p>
                    <div class="code-block"><code><span class="code-keyword">curl</span> -X <span class="code-keyword">GET</span> \\
  <span class="code-string">"https://api.torquedeskAI.com/v1/customers"</span> \\
  -H <span class="code-string">"Authorization: Bearer sk_live_..."</span> \\
  -H <span class="code-string">"Content-Type: application/json"</span></code></div>
                </div>

                <div class="quickstart-step">
                    <div class="step-number">3</div>
                    <h3>Build Integration</h3>
                    <p>Parse JSON responses and integrate real-time shop data into your application.</p>
                    <div class="code-block"><code><span class="code-comment">{</span>
  <span class="code-string">"success"</span>: <span class="code-keyword">true</span>,
  <span class="code-string">"data"</span>: [
    {
      <span class="code-string">"id"</span>: <span class="code-string">"cust_123"</span>,
      <span class="code-string">"name"</span>: <span class="code-string">"John Smith"</span>,
      <span class="code-string">"email"</span>: <span class="code-string">"john@example.com"</span>
    }
  ]
<span class="code-comment">}</span></code></div>
                </div>
            </div>
        </section>

        <section class="endpoints-section">
            <div class="endpoints-header">
                <h2 class="section-title">API Endpoints</h2>
                <p>Core endpoints for managing customers, vehicles, jobs, invoices, inventory, and more. All requests require Bearer token authentication.</p>
            </div>
            <table class="endpoints-table">
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Endpoint</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="method-badge method-get">GET</span></td>
                        <td><span class="endpoint-path">/v1/customers</span></td>
                        <td>List all customers with pagination, filtering, and search capabilities.</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-post">POST</span></td>
                        <td><span class="endpoint-path">/v1/customers</span></td>
                        <td>Create new customer with contact info and preferences.</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-get">GET</span></td>
                        <td><span class="endpoint-path">/v1/vehicles</span></td>
                        <td>Retrieve vehicle records with service history and diagnostics.</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-post">POST</span></td>
                        <td><span class="endpoint-path">/v1/jobs</span></td>
                        <td>Create work orders with services, scheduling, and resource allocation.</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-get">GET</span></td>
                        <td><span class="endpoint-path">/v1/invoices</span></td>
                        <td>Fetch invoices with totals, line items, and payment tracking.</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-post">POST</span></td>
                        <td><span class="endpoint-path">/v1/diagnostics</span></td>
                        <td>Run AI-powered diagnostic analysis on vehicle fault codes.</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-get">GET</span></td>
                        <td><span class="endpoint-path">/v1/inventory</span></td>
                        <td>List inventory items with stock levels and pricing.</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-post">POST</span></td>
                        <td><span class="endpoint-path">/v1/webhooks</span></td>
                        <td>Register webhooks for real-time event notifications.</td>
                    </tr>
                    <tr>
                        <td><span class="method-badge method-get">GET</span></td>
                        <td><span class="endpoint-path">/v1/reports</span></td>
                        <td>Generate business reports with analytics and KPIs.</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="api-sections">
            <h2 class="section-title">API Resource Categories</h2>
            <div class="api-section-group">
                <h3>Authentication</h3>
                <p>All API requests require a Bearer token in the Authorization header. Obtain your API key from the developer dashboard.</p>
                <div class="api-endpoints-list">
                    <div class="api-endpoint-item">
                        <strong>POST /v1/auth/token</strong>
                        <p>Exchange credentials for access token with optional scopes and expiration.</p>
                    </div>
                </div>
            </div>

            <div class="api-section-group">
                <h3>Customers</h3>
                <p>Manage customer profiles, contact information, and relationship data.</p>
                <div class="api-endpoints-list">
                    <div class="api-endpoint-item">
                        <strong>GET /v1/customers</strong>
                        <p>List customers with filtering by shop, status, and creation date.</p>
                    </div>
                    <div class="api-endpoint-item">
                        <strong>POST /v1/customers</strong>
                        <p>Create new customer records with detailed contact and billing info.</p>
                    </div>
                    <div class="api-endpoint-item">
                        <strong>GET /v1/customers/{id}</strong>
                        <p>Retrieve specific customer with full history and notes.</p>
                    </div>
                </div>
            </div>

            <div class="api-section-group">
                <h3>Vehicles</h3>
                <p>Access vehicle data, service history, and diagnostics information.</p>
                <div class="api-endpoints-list">
                    <div class="api-endpoint-item">
                        <strong>GET /v1/vehicles</strong>
                        <p>List vehicles with filtering and service history summaries.</p>
                    </div>
                    <div class="api-endpoint-item">
                        <strong>POST /v1/vehicles</strong>
                        <p>Register new vehicle with VIN, make, model, and owner info.</p>
                    </div>
                    <div class="api-endpoint-item">
                        <strong>GET /v1/vehicles/{id}/diagnostics</strong>
                        <p>Get latest diagnostic results and fault code analysis.</p>
                    </div>
                </div>
            </div>

            <div class="api-section-group">
                <h3>Jobs & Work Orders</h3>
                <p>Create and manage work orders with scheduling and status tracking.</p>
                <div class="api-endpoints-list">
                    <div class="api-endpoint-item">
                        <strong>POST /v1/jobs</strong>
                        <p>Create work order with services, labor time, and parts.</p>
                    </div>
                    <div class="api-endpoint-item">
                        <strong>GET /v1/jobs</strong>
                        <p>Retrieve jobs with filtering by status, date, and technician.</p>
                    </div>
                    <div class="api-endpoint-item">
                        <strong>PATCH /v1/jobs/{id}</strong>
                        <p>Update job status, notes, and resource assignments.</p>
                    </div>
                </div>
            </div>

            <div class="api-section-group">
                <h3>Invoices</h3>
                <p>Generate and manage customer invoices with payment tracking.</p>
                <div class="api-endpoints-list">
                    <div class="api-endpoint-item">
                        <strong>GET /v1/invoices</strong>
                        <p>List invoices with filtering by status and date range.</p>
                    </div>
                    <div class="api-endpoint-item">
                        <strong>POST /v1/invoices</strong>
                        <p>Create invoice from work order with payment terms.</p>
                    </div>
                    <div class="api-endpoint-item">
                        <strong>POST /v1/invoices/{id}/send</strong>
                        <p>Send invoice to customer via email or SMS.</p>
                    </div>
                </div>
            </div>

            <div class="api-section-group">
                <h3>Inventory</h3>
                <p>Track parts inventory with automatic reorder alerts.</p>
                <div class="api-endpoints-list">
                    <div class="api-endpoint-item">
                        <strong>GET /v1/inventory</strong>
                        <p>List inventory items with stock levels and pricing.</p>
                    </div>
                    <div class="api-endpoint-item">
                        <strong>PATCH /v1/inventory/{id}</strong>
                        <p>Update stock levels and reorder points.</p>
                    </div>
                </div>
            </div>

            <div class="api-section-group">
                <h3>Reports</h3>
                <p>Generate business intelligence and analytics reports.</p>
                <div class="api-endpoints-list">
                    <div class="api-endpoint-item">
                        <strong>GET /v1/reports/revenue</strong>
                        <p>Revenue analytics by period, service type, and technician.</p>
                    </div>
                    <div class="api-endpoint-item">
                        <strong>GET /v1/reports/efficiency</strong>
                        <p>Job completion rates and technician productivity metrics.</p>
                    </div>
                </div>
            </div>

            <div class="api-section-group">
                <h3>Webhooks</h3>
                <p>Subscribe to real-time events for workflow automation.</p>
                <div class="api-endpoints-list">
                    <div class="api-endpoint-item">
                        <strong>POST /v1/webhooks</strong>
                        <p>Register webhook endpoint for event notifications.</p>
                    </div>
                    <div class="api-endpoint-item">
                        <strong>GET /v1/webhooks</strong>
                        <p>List registered webhooks with event subscriptions.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="rate-limits-info">
            <h3>Rate Limits & Quotas</h3>
            <div class="rate-limits-grid">
                <div class="rate-limit-item">
                    <strong>Free Plan</strong>
                    <p>100 requests per minute. Perfect for development and testing.</p>
                </div>
                <div class="rate-limit-item">
                    <strong>Pro Plan</strong>
                    <p>1,000 requests per minute. For growing shops with daily operations.</p>
                </div>
                <div class="rate-limit-item">
                    <strong>Enterprise Plan</strong>
                    <p>10,000 requests per minute. Custom limits available upon request.</p>
                </div>
                <div class="rate-limit-item">
                    <strong>Burst Allowance</strong>
                    <p>Up to 2x your limit for 10 seconds. Handles traffic spikes smoothly.</p>
                </div>
            </div>
        </section>

        <section class="sdks-section">
            <h2 class="section-title">Official SDKs</h2>
            <div class="sdks-grid">
                <div class="sdk-card">
                    <div class="sdk-icon" style="background:#F7DF1E;color:#333">JS</div>
                    <h3>JavaScript/Node.js</h3>
                    <p>Full-featured SDK with TypeScript support for Node.js and browser apps.</p>
                    <a href="#" class="sdk-link">View on npm →</a>
                </div>

                <div class="sdk-card">
                    <div class="sdk-icon" style="background:#3776AB">PY</div>
                    <h3>Python</h3>
                    <p>Complete Python client library for backend and data processing workflows.</p>
                    <a href="#" class="sdk-link">View on PyPI →</a>
                </div>

                <div class="sdk-card">
                    <div class="sdk-icon" style="background:#8B5CF6">DB</div>
                    <h3>PHP</h3>
                    <p>PHP SDK for Laravel, WordPress, and legacy system integrations.</p>
                    <a href="#" class="sdk-link">View on Packagist →</a>
                </div>

                <div class="sdk-card">
                    <div class="sdk-icon" style="background:#CC342D">RB</div>
                    <h3>Ruby</h3>
                    <p>Ruby gem for Rails applications and Ruby-based services.</p>
                    <a href="#" class="sdk-link">View on RubyGems →</a>
                </div>
            </div>
        </section>

        <section class="webhooks-section">
            <h2>Real-Time Event Notifications</h2>
            <p>Subscribe to webhook events and get instant notifications when important actions occur in TorqueDesk AI. Use webhooks to trigger automations, sync data, and build reactive workflows.</p>
            <div class="webhooks-grid">
                <div class="webhook-event">
                    <p class="webhook-event-name">work_order.created</p>
                    <p class="webhook-event-desc">Triggered when a new work order is created.</p>
                </div>

                <div class="webhook-event">
                    <p class="webhook-event-name">work_order.completed</p>
                    <p class="webhook-event-desc">Fired when work order status changes to completed.</p>
                </div>

                <div class="webhook-event">
                    <p class="webhook-event-name">invoice.created</p>
                    <p class="webhook-event-desc">Triggered when an invoice is generated.</p>
                </div>

                <div class="webhook-event">
                    <p class="webhook-event-name">invoice.paid</p>
                    <p class="webhook-event-desc">Fired when an invoice is fully paid.</p>
                </div>

                <div class="webhook-event">
                    <p class="webhook-event-name">appointment.booked</p>
                    <p class="webhook-event-desc">Sent when a new appointment is scheduled.</p>
                </div>

                <div class="webhook-event">
                    <p class="webhook-event-name">customer.created</p>
                    <p class="webhook-event-desc">Triggered when a new customer is added.</p>
                </div>

                <div class="webhook-event">
                    <p class="webhook-event-name">diagnostic.completed</p>
                    <p class="webhook-event-desc">Fired when AI diagnostics finish processing.</p>
                </div>

                <div class="webhook-event">
                    <p class="webhook-event-name">inventory.low_stock</p>
                    <p class="webhook-event-desc">Triggered when inventory falls below threshold.</p>
                </div>
            </div>
        </section>

        <section style="margin-bottom: 100px; ">
            <div style="background: var(--card); border: 1px solid var(--subtle); border-radius: 12px; padding: 40px;">
                <h3 style="font-size: 1.3rem; color: #fff; margin: 0 0 20px 0;">API Status</h3>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                    <div class="status-indicator">
                        <div class="status-dot"></div>
                        All Systems Operational
                    </div>
                </div>
                <p style="color: var(--gray); font-size: 0.95rem; margin: 0; line-height: 1.6;">Last updated: March 13, 2026 at 2:45 PM PT. Real-time status monitoring and historical incident reports available at status.torquedeskAI.com</p>
            </div>
        </section>

        <section style="margin-bottom: 0; ">
            <div style="background: var(--card); border: 1px solid var(--subtle); border-radius: 12px; padding: 40px;">
                <h3 style="font-size: 1.3rem; color: #fff; margin: 0 0 20px 0;">Developer Community</h3>
                <p style="color: var(--gray); font-size: 0.95rem; margin: 0 0 25px 0; line-height: 1.6;">Join thousands of developers building on TorqueDesk AI. Share code, ask questions, and collaborate on integrations.</p>
                <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                    <a href="#" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: var(--navy); border: 1px solid var(--subtle); border-radius: 6px; color: var(--secondary); text-decoration: none; font-weight: 600; transition: all 0.3s ease;" onmouseover="this.style.borderColor='var(--accent)'; this.style.color='#fff';" onmouseout="this.style.borderColor='var(--subtle)'; this.style.color='var(--secondary)';">
                        Join Discord
                    </a>
                    <a href="#" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: var(--navy); border: 1px solid var(--subtle); border-radius: 6px; color: var(--secondary); text-decoration: none; font-weight: 600; transition: all 0.3s ease;" onmouseover="this.style.borderColor='var(--accent)'; this.style.color='#fff';" onmouseout="this.style.borderColor='var(--subtle)'; this.style.color='var(--secondary)';">
                        Join Slack
                    </a>
                    <a href="#" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: var(--navy); border: 1px solid var(--subtle); border-radius: 6px; color: var(--secondary); text-decoration: none; font-weight: 600; transition: all 0.3s ease;" onmouseover="this.style.borderColor='var(--accent)'; this.style.color='#fff';" onmouseout="this.style.borderColor='var(--subtle)'; this.style.color='var(--secondary)';">
                        Browse Docs
                    </a>
                </div>
            </div>
        </section>

        <section class="cta-section" style="margin-top: 100px;">
            <h2>Ready to Build?</h2>
            <p>Get your API key and start building powerful integrations today. Full documentation and code examples included.</p>
            <a href="#" class="cta-btn">Get Your API Key</a>
        </section>
    </div>


<!-- NEXT PAGE NAVIGATION -->


<!-- PARTNER PROGRAM SECTION -->
    <section class="types-section">
        <div class="types-header">
            <h2>Partnership Opportunities</h2>
            <p>Choose the partnership model that best fits your business</p>
        </div>
        <div class="types-grid">
            <div class="type-card">
                <div class="type-icon">$</div>
                <div class="type-name">Referral Partners</div>
                <div class="type-description">
                    Earn $500 per successful shop referral with minimal effort. Get a simple referral link and watch your commissions grow. No minimum commitment required. Perfect for consultants, accountants, and industry influencers.
                </div>
            </div>

            <div class="type-card">
                <div class="type-icon">LINK</div>
                <div class="type-name">Integration Partners</div>
                <div class="type-description">
                    Integrate your product with TDAI's API. Expand functionality, reach new customers, and build deeper integrations together. Full API documentation and dedicated support for your integration.
                </div>
            </div>

            <div class="type-card">
                <div class="type-icon">TAG</div>
                <div class="type-name">Reseller Partners</div>
                <div class="type-description">
                    White-label TDAI for your customers. Offer our platform as your own with your branding, billing, and support. Earn up to 25% recurring commission on all resold licenses.
                </div>
            </div>
        </div>
    </section>

    <section class="benefits-section">
        <div class="benefits-header">
            <h2>Partner Benefits</h2>
            <p>Comprehensive support and tools to help you succeed</p>
        </div>
        <div class="benefits-grid">
            <div class="benefit-item">
                <div class="benefit-icon">$</div>
                <div class="benefit-title">Revenue Share</div>
                <div class="benefit-description">
                    Earn recurring commissions from every referral or resold license. Scale your income with no additional effort. Commissions paid monthly.
                </div>
            </div>

            <div class="benefit-item">
                <div class="benefit-icon">M</div>
                <div class="benefit-title">Co-Marketing</div>
                <div class="benefit-description">
                    Access joint marketing resources, case studies, and promotional materials to accelerate growth together. Featured on our partners page.
                </div>
            </div>

            <div class="benefit-item">
                <div class="benefit-icon">TGT</div>
                <div class="benefit-title">Priority Support</div>
                <div class="benefit-description">
                    Dedicated partner support team to help you succeed with technical questions and customer onboarding. Direct Slack channel.
                </div>
            </div>

            <div class="benefit-item">
                <div class="benefit-icon">AI</div>
                <div class="benefit-title">Early Access</div>
                <div class="benefit-description">
                    Get first access to new features, beta programs, and product roadmap to stay ahead of competition. Shape the future with feedback.
                </div>
            </div>

            <div class="benefit-item">
                <div class="benefit-icon">P</div>
                <div class="benefit-title">Partner Portal</div>
                <div class="benefit-description">
                    Manage referrals, track commissions, access resources, and collaborate all from one dashboard. Real-time commission tracking.
                </div>
            </div>

            <div class="benefit-item">
                <div class="benefit-icon">C</div>
                <div class="benefit-title">Certification</div>
                <div class="benefit-description">
                    Become a certified TDAI partner. Gain credibility with customers and access exclusive partnership badge for your website.
                </div>
            </div>
        </div>
    </section>

    <section class="tiers-section">
        <div class="tiers-header">
            <h2>Partner Tiers</h2>
            <p>Advance your partnership as you grow with us</p>
        </div>
        <div class="tiers-grid">
            <div class="tier-card">
                <div class="tier-name">Silver</div>
                <div class="tier-requirement">1-5 Referrals</div>
                <ul class="tier-benefits">
                    <li>Base revenue share (15%)</li>
                    <li>Referral tracking dashboard</li>
                    <li>Email support</li>
                    <li>Monthly newsletter</li>
                    <li>Basic marketing materials</li>
                </ul>
            </div>

            <div class="tier-card">
                <div class="tier-name">Gold</div>
                <div class="tier-requirement">6-19 Referrals</div>
                <ul class="tier-benefits">
                    <li>Enhanced revenue share (20%)</li>
                    <li>All Silver benefits</li>
                    <li>Priority email support</li>
                    <li>Co-marketing opportunities</li>
                    <li>Dedicated partner contact</li>
                    <li>Quarterly partner check-ins</li>
                </ul>
            </div>

            <div class="tier-card">
                <div class="tier-name">Platinum</div>
                <div class="tier-requirement">20+ Referrals</div>
                <ul class="tier-benefits">
                    <li>Premium revenue share (25%)</li>
                    <li>All Gold benefits</li>
                    <li>Phone & chat support</li>
                    <li>Custom co-marketing</li>
                    <li>Product feature input</li>
                    <li>White-label options</li>
                    <li>Quarterly business reviews</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="testimonials-section">
        <div class="testimonials-header">
            <h2>Partner Success Stories</h2>
            <p>Hear from our top-performing partners</p>
        </div>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="testimonial-quote">"Becoming a TDAI partner has been fantastic for our consulting business. We've earned over $50,000 in commissions while helping our clients get better software."</div>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">SM</div>
                    <div class="testimonial-info">
                        <h4>Sarah Miller</h4>
                        <p>Auto Shop Consultant</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card">
                <div class="testimonial-quote">"The partner support team is incredibly responsive. They help me close deals and provide all the materials I need. This is recurring income on autopilot."</div>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">JC</div>
                    <div class="testimonial-info">
                        <h4>Jason Chen</h4>
                        <p>Technology Reseller</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card">
                <div class="testimonial-quote">"Our API integration with TDAI opened up entirely new revenue streams. The technical support and early access to features made development smooth."</div>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">RL</div>
                    <div class="testimonial-info">
                        <h4>Rachel Lopez</h4>
                        <p>SaaS Integration Partner</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="revenue-section">
        <div class="revenue-container">
            <h2>Revenue Sharing Details</h2>
            <div class="revenue-highlight">
                <h3>Earn up to 25% Recurring Commission</h3>
                <p>Get paid monthly on every customer you bring. The more you refer, the higher your commission rate.</p>
            </div>
            <div class="revenue-details">
                <div class="revenue-detail">
                    <h4>Monthly Payouts</h4>
                    <p>Earn commissions on a monthly basis. All commissions are paid automatically on the first of the month for the previous month's revenue.</p>
                </div>
                <div class="revenue-detail">
                    <h4>Lifetime Commissions</h4>
                    <p>Earn commissions for as long as your referral remains a customer. Build passive recurring income that grows with your referrals.</p>
                </div>
                <div class="revenue-detail">
                    <h4>No Caps or Limits</h4>
                    <p>There are no limits on how much you can earn. The more referrals you bring, the more you make. Scale with us.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="stats-section">
        <div class="stats-container">
            <div class="stat-item">
                <h3>$2M+</h3>
                <p>Paid to Partners</p>
            </div>
            <div class="stat-item">
                <h3>200+</h3>
                <p>Active Partners</p>
            </div>
            <div class="stat-item">
                <h3>25%</h3>
                <p>Max Commission Rate</p>
            </div>
        </div>
    </section>

    <section class="process-section">
        <div class="process-header">
            <h2>How It Works</h2>
            <p>Get started in just 3 simple steps</p>
        </div>
        <div class="process-steps">
            <div class="process-step">
                <div class="step-number">1</div>
                <div class="step-title">Apply</div>
                <div class="step-description">
                    Complete the partner application below telling us about your business and goals. We review applications within 24-48 hours.
                </div>
            </div>

            <div class="process-step">
                <div class="step-number">2</div>
                <div class="step-title">Get Approved</div>
                <div class="step-description">
                    Our partnerships team reviews your application and gets in touch within 48 hours with next steps and your referral link.
                </div>
            </div>

            <div class="process-step">
                <div class="step-number">3</div>
                <div class="step-title">Start Earning</div>
                <div class="step-description">
                    Begin sharing your referral link and earning commissions on every qualified referral. Track everything in your partner portal.
                </div>
            </div>
        </div>
    </section>

    <section class="partners-section">
        <div class="partners-header">
            <h2>Our Partner Network</h2>
            <p>Growing partnerships across the automotive industry</p>
        </div>
        <div class="partners-grid">
            <div class="partner-logo">Consulting Plus</div>
            <div class="partner-logo">Tech Solutions</div>
            <div class="partner-logo">Auto Partners</div>
            <div class="partner-logo">Digital Growth</div>
            <div class="partner-logo">Fleet Experts</div>
            <div class="partner-logo">Shop Systems</div>
            <div class="partner-logo">Industry Connect</div>
            <div class="partner-logo">Integration Labs</div>
        </div>
    </section>

    <section class="cta-section">
        <div class="cta-container">
            <div class="cta-header">
                <h2>Become a Partner Today</h2>
                <p>Fill out the form below and our partnerships team will be in touch within 48 hours.</p>
            </div>

            <form class="partner-form">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" required>
                </div>

                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" required>
                </div>

                <div class="form-group">
                    <label for="company">Company Name</label>
                    <input type="text" id="company" name="company" placeholder="Your company" required>
                </div>

                <div class="form-group">
                    <label for="type">Partnership Type</label>
                    <select id="type" name="type" required>
                        <option value="">Select a partnership type</option>
                        <option value="referral">Referral Partner</option>
                        <option value="integration">Integration Partner</option>
                        <option value="reseller">Reseller Partner</option>
                        <option value="unsure">Not sure yet</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="message">Tell Us About Your Business</label>
                    <textarea id="message" name="message" placeholder="Tell us a bit about your company and partnership goals..." required></textarea>
                </div>

                <button type="submit" class="form-submit">Apply Now</button>
            </form>
        </div>
    </section>


<!-- NEXT PAGE NAVIGATION -->


        <a href="/about" class="next-page-link">
            Next: About →
        </a>
<div class="next-page-cta">
      <div class="next-page-inner">
        <div class="next-page-label">Continue Exploring</div>
        <h2 class="next-page-title">Next: <span>About</span></h2>
        <p class="next-page-desc">Learn about our company</p>
        <a href="/about" class="next-page-btn">
          <span class="btn-text">Explore About</span>
          <span class="btn-arrow">&rarr;</span>
        </a>
        <div class="page-dots"><a href="/" class="page-dot"></a><a href="/features" class="page-dot"></a><a href="/solutions" class="page-dot"></a><a href="/pricing" class="page-dot"></a><a href="/integrations" class="page-dot"></a><a href="/demo" class="page-dot"></a><a href="/customers" class="page-dot"></a><a href="/resources" class="page-dot active"></a><a href="/about" class="page-dot"></a><a href="/contact" class="page-dot"></a></div>
        <div class="page-counter-text">Page 8 of 10</div>
      </div>
    </div>` }} />
  );
}
