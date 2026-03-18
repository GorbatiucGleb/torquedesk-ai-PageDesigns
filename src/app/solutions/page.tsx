import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | TorqueDesk AI',
};

export default function SolutionsPage() {
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
.vulnerabilit
    <!-- Industry Solutions Section -->
    <section class="industry-solutions-section">
<!-- Hero Section -->
    <section class="solutions-hero">
        <div class="solutions-hero-content">
            <h1>One Platform. Every Shop Type.</h1>
            <p>TorqueDesk AI adapts to your industry. Whether you're managing a single bay or a multi-location fleet, our AI-powered solutions fit your workflow perfectly.</p>
        </div>
    </section>

    <!-- Solutions Grid -->
    <section class="solutions-grid">
        <!-- Auto Repair Shops -->
        <div class="solution-card">
            <div class="solution-icon">FIX</div>
            <h3>Auto Repair Shops</h3>
            <span class="solution-badge">Core Use Case</span>
            <div class="industry-stat"><strong>Market Size: $80B+</strong> General automotive repair industry</div>
            <p>Perfect for 1-10 bay shops managing general automotive repair. Our comprehensive platform streamlines diagnostics, scheduling, invoicing, and customer management. TorqueDesk AI's AI diagnostics engine recommends services based on vehicle history and maintenance patterns, while intelligent scheduling optimizes technician time and bay utilization. Automated estimates and invoicing reduce paperwork, and integrated CRM features keep customer satisfaction high through service reminders and history tracking.</p>
            <ul class="solution-features">
                <li>AI-powered diagnostic recommendations with service suggestions</li>
                <li>Smart scheduling with real-time capacity planning</li>
                <li>Unified CRM with complete customer history and preferences</li>
                <li>Automated estimates, invoicing, and payment processing</li>
                <li>Mobile technician app for on-the-job documentation</li>
                <li>Integrated parts inventory management with pricing</li>
            </ul>
            <a href="/customers">See Case Study</a>
        </div>

        <!-- Tire Shops -->
        <div class="solution-card">
            <div class="solution-icon">AR</div>
            <h3>Tire Shops</h3>
            <span class="solution-badge">Specialized Tools</span>
            <div class="industry-stat"><strong>Market Size: $50B+</strong> Tire retail and services</div>
            <p>Specialized tire management tools built specifically for tire retailers and service centers. Manage complex tire inventory by size, brand, tread rating, and seasonal availability with granular control. Our tire-matching algorithms recommend optimal replacements based on vehicle specifications and customer budget. Run seasonal promotions, track tire rotation schedules, and manage seasonal transitions between summer and winter tires. Integration with major tire manufacturer databases ensures accurate specifications and pricing.</p>
            <ul class="solution-features">
                <li>Advanced tire inventory by size, brand, load rating, and speed rating</li>
                <li>AI-powered tire matching algorithms for customer vehicles</li>
                <li>Seasonal promotion management and inventory rotation</li>
                <li>Integration with tire databases for specifications and recalls</li>
                <li>Tire rotation tracking and service interval reminders</li>
                <li>Multi-brand inventory management and reconciliation</li>
            </ul>
            <a href="/customers">See Case Study</a>
        </div>

        <!-- Fleet Management -->
        <div class="solution-card">
            <div class="solution-icon">AUTO</div>
            <h3>Fleet Management</h3>
            <span class="solution-badge">Scale 10-10K Vehicles</span>
            <div class="industry-stat"><strong>Market Size: $35B+</strong> Commercial fleet management</div>
            <p>Manage 10 to 10,000 vehicles with centralized tracking and unified dashboard. Automated preventive maintenance scheduling reduces unexpected breakdowns and extends vehicle lifespan. Real-time GPS tracking and maintenance alerts keep your entire fleet optimized and compliant. Comprehensive reporting shows maintenance costs, fuel efficiency, downtime, and ROI. Driver management features track safety records and maintenance compliance across all operators.</p>
            <ul class="solution-features">
                <li>Multi-vehicle tracking dashboard with real-time status updates</li>
                <li>Preventive maintenance automation with compliance tracking</li>
                <li>Advanced fleet analytics and predictive maintenance reporting</li>
                <li>Driver management with safety records and certifications</li>
                <li>Service history tracking across all vehicles and locations</li>
                <li>Cost analysis by vehicle, fleet, and maintenance type</li>
            </ul>
            <a href="/customers">See Case Study</a>
        </div>

        <!-- Multi-Location -->
        <div class="solution-card">
            <div class="solution-icon">ENT</div>
            <h3>Multi-Location</h3>
            <span class="solution-badge">Enterprise Control</span>
            <div class="industry-stat"><strong>Enterprise Scale</strong> 5-100+ locations</div>
            <p>One unified view across all your shops with complete operational control. Centralized dashboards compare performance metrics across locations, identify top performers, and spot improvement opportunities. Transfer staff across locations efficiently, manage inventory distribution, and consolidate financial reporting. Enterprise-level analytics show location-by-location profitability, technician productivity, customer acquisition costs, and seasonal trends. Real-time visibility into every location's operations enables quick decision-making.</p>
            <ul class="solution-features">
                <li>Enterprise dashboard with unified reporting across all locations</li>
                <li>Location-by-location performance comparison and benchmarking</li>
                <li>Cross-location staff management and resource allocation</li>
                <li>Consolidated financial reporting and profit & loss analysis</li>
                <li>Centralized inventory distribution and optimization</li>
                <li>Multi-location compliance and policy enforcement</li>
            </ul>
            <a href="/customers">See Case Study</a>
        </div>

        <!-- Truck & Diesel -->
        <div class="solution-card">
            <div class="solution-icon">TRUCK</div>
            <h3>Truck & Diesel</h3>
            <span class="solution-badge">Heavy-Duty Focus</span>
            <div class="industry-stat"><strong>Market Size: $25B+</strong> Heavy-duty truck services</div>
            <p>Built for heavy-duty service operations with specialized workflows for diesel engines and commercial trucks. DOT compliance tracking ensures all vehicles meet federal safety and maintenance requirements. Extended bay scheduling accommodates longer repair times for complex diesel work. Specialized parts inventory management handles the unique requirements of diesel engines and commercial systems. Heavy-duty diagnostics support advanced systems like exhaust aftertreatment, emissions control, and telematics integration.</p>
            <ul class="solution-features">
                <li>DOT compliance management with inspection tracking and certification</li>
                <li>Extended bay scheduling for complex heavy-duty repairs</li>
                <li>Specialized diesel parts inventory and vendor integration</li>
                <li>Heavy-duty diagnostics for emissions, engines, and systems</li>
                <li>Brake and safety system compliance documentation</li>
                <li>Commercial licensing and certification tracking</li>
            </ul>
            <a href="/customers">See Case Study</a>
        </div>

        <!-- Marine & Powersports -->
        <div class="solution-card">
            <div class="solution-icon">TS</div>
            <h3>Marine & Powersports</h3>
            <span class="solution-badge">Beyond Automotive</span>
            <div class="industry-stat"><strong>Specialty Market</strong> Boats, ATVs, Motorcycles</div>
            <p>Specialized solutions for boat, motorcycle, ATV, and personal watercraft service. Seasonal scheduling workflows handle the unique patterns of marine and powersports industries where services concentrate during specific seasons. Specialized diagnostics for marine engines, fuel systems, and electrical components differ significantly from automotive work. Storage management tracks winterization, de-winterization, and long-term storage for seasonal vehicles. Parts management handles specialty components from marine and powersports manufacturers.</p>
            <ul class="solution-features">
                <li>Seasonal scheduling workflows for summer and winter activities</li>
                <li>Specialized marine engine and powersports diagnostics</li>
                <li>Storage & winterization tracking with automated reminders</li>
                <li>Powersports-specific parts management and sourcing</li>
                <li>Custom service packages for seasonal maintenance</li>
                <li>Warranty integration for marine and powersports manufacturers</li>
            </ul>
            <a href="/customers">See Case Study</a>
        </div>
    </section>

    <!-- Industry Stats Section -->
    <section class="industry-stats-section">
        <h2>Industry Market Overview</h2>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">$80B+</div>
                <div class="stat-label">Auto Repair Industry Size</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">$50B+</div>
                <div class="stat-label">Tire Retail & Services</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">$35B+</div>
                <div class="stat-label">Fleet Management Market</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">$25B+</div>
                <div class="stat-label">Heavy-Duty Truck Services</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">5M+</div>
                <div class="stat-label">Independent Service Providers</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">45%</div>
                <div class="stat-label">Average Shops Under-utilize Technology</div>
            </div>
        </div>
    </section>

    <!-- Success Metrics by Industry Section -->
    <section class="metrics-section">
        <h2>Success Metrics by Industry</h2>
        <div class="metrics-grid">
            <div class="metrics-card">
                <h3>Auto Repair Shops</h3>
                <div class="metric-row">
                    <div class="metric-name">Faster Diagnostics</div>
                    <div class="metric-result">40% Average</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Increased Bookings</div>
                    <div class="metric-result">25% Growth</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Customer Retention</div>
                    <div class="metric-result">35% Improvement</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Operational Efficiency</div>
                    <div class="metric-result">30% Increase</div>
                </div>
            </div>
            <div class="metrics-card">
                <h3>Tire Shops</h3>
                <div class="metric-row">
                    <div class="metric-name">Inventory Efficiency</div>
                    <div class="metric-result">45% Better</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Sales Per Transaction</div>
                    <div class="metric-result">20% Higher</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Promotion ROI</div>
                    <div class="metric-result">50% Increase</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Seasonal Planning</div>
                    <div class="metric-result">60% Easier</div>
                </div>
            </div>
            <div class="metrics-card">
                <h3>Fleet Management</h3>
                <div class="metric-row">
                    <div class="metric-name">Maintenance Costs</div>
                    <div class="metric-result">$180K Savings</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Vehicle Downtime</div>
                    <div class="metric-result">60% Reduction</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Compliance Score</div>
                    <div class="metric-result">99% Average</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Fleet Utilization</div>
                    <div class="metric-result">35% Increase</div>
                </div>
            </div>
            <div class="metrics-card">
                <h3>Multi-Location</h3>
                <div class="metric-row">
                    <div class="metric-name">Decision Time</div>
                    <div class="metric-result">70% Faster</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Staff Productivity</div>
                    <div class="metric-result">28% Higher</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Admin Overhead</div>
                    <div class="metric-result">50% Reduced</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Profit Margin</div>
                    <div class="metric-result">8-12% Increase</div>
                </div>
            </div>
            <div class="metrics-card">
                <h3>Truck & Diesel</h3>
                <div class="metric-row">
                    <div class="metric-name">DOT Compliance</div>
                    <div class="metric-result">100% Automated</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Repair Efficiency</div>
                    <div class="metric-result">35% Faster</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Parts Inventory</div>
                    <div class="metric-result">40% Less Waste</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Revenue Per Job</div>
                    <div class="metric-result">$450 Average</div>
                </div>
            </div>
            <div class="metrics-card">
                <h3>Marine & Powersports</h3>
                <div class="metric-row">
                    <div class="metric-name">Seasonal Planning</div>
                    <div class="metric-result">100% Visibility</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Service Revenue</div>
                    <div class="metric-result">$75K+ Per Season</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Customer Upsells</div>
                    <div class="metric-result">30% More</div>
                </div>
                <div class="metric-row">
                    <div class="metric-name">Repeat Business</div>
                    <div class="metric-result">55% Rate</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Custom Workflows Section -->
    <section class="workflows-section">
        <div class="workflows-container">
            <h2>Custom Workflows</h2>
            <p>TDAI adapts to your industry's specific needs. Our flexible system accommodates unique processes, terminology, and requirements for every type of automotive business.</p>
            <div class="workflows-grid">
                <div class="workflow-item">
                    <div class="workflow-icon">CFG</div>
                    <h3>Flexible Service Templates</h3>
                    <p>Create industry-specific service packages and workflows that match your unique processes and customer expectations.</p>
                </div>
                <div class="workflow-item">
                    <div class="workflow-icon">RPT</div>
                    <h3>Custom Reporting</h3>
                    <p>Build reports tailored to your industry metrics. Track KPIs that matter most to your business model and goals.</p>
                </div>
                <div class="workflow-item">
                    <div class="workflow-icon">SYNC</div>
                    <h3>Multi-Status Workflows</h3>
                    <p>Define custom job statuses, approval workflows, and escalation rules specific to your operational requirements.</p>
                </div>
                <div class="workflow-item">
                    <div class="workflow-icon">CRM</div>
                    <h3>Industry-Specific Roles</h3>
                    <p>Configure custom user roles and permissions aligned with your organizational structure and responsibilities.</p>
                </div>
                <div class="workflow-item">
                    <div class="workflow-icon">LINK</div>
                    <h3>Industry Integrations</h3>
                    <p>Connect with industry-specific tools, suppliers, and platforms your business already uses daily.</p>
                </div>
                <div class="workflow-item">
                    <div class="workflow-icon">MOB</div>
                    <h3>Mobile Customization</h3>
                    <p>Tailor mobile workflows for technicians, managers, or customer-facing teams in your industry.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Industry Compliance Section -->
    <section class="compliance-section">
        <h2>Industry Compliance Standards</h2>
        <div class="compliance-grid">
            <div class="compliance-card">
                <div class="compliance-icon">LIST</div>
                <h3>Fleet & Trucking</h3>
                <ul class="compliance-items">
                    <li>DOT safety compliance and inspections</li>
                    <li>FMCSA regulations and record-keeping</li>
                    <li>Hours of service tracking</li>
                    <li>Preventive maintenance schedules</li>
                    <li>Driver licensing verification</li>
                </ul>
            </div>
            <div class="compliance-card">
                <div class="compliance-icon">C</div>
                <h3>Environmental</h3>
                <ul class="compliance-items">
                    <li>EPA emissions compliance</li>
                    <li>Hazmat waste disposal tracking</li>
                    <li>Fluid recycling documentation</li>
                    <li>Environmental audit trails</li>
                    <li>Green service certifications</li>
                </ul>
            </div>
            <div class="compliance-card">
                <div class="compliance-icon">[!]</div>
                <h3>Workplace Safety</h3>
                <ul class="compliance-items">
                    <li>OSHA safety requirements</li>
                    <li>Incident reporting and tracking</li>
                    <li>Safety training documentation</li>
                    <li>Equipment maintenance logs</li>
                    <li>Worker certification management</li>
                </ul>
            </div>
            <div class="compliance-card">
                <div class="compliance-icon">C</div>
                <h3>Consumer Protection</h3>
                <ul class="compliance-items">
                    <li>Warranty documentation</li>
                    <li>Transparent pricing and estimates</li>
                    <li>Consumer rights notifications</li>
                    <li>Dispute resolution tracking</li>
                    <li>Service quality guarantees</li>
                </ul>
            </div>
            <div class="compliance-card">
                <div class="compliance-icon">SEC</div>
                <h3>Data Security</h3>
                <ul class="compliance-items">
                    <li>PCI-DSS payment compliance</li>
                    <li>GDPR data privacy standards</li>
                    <li>SOC 2 Type II certification</li>
                    <li>Data encryption and backups</li>
                    <li>Audit logs and compliance reports</li>
                </ul>
            </div>
            <div class="compliance-card">
                <div class="compliance-icon">EDU</div>
                <h3>Industry Standards</h3>
                <ul class="compliance-items">
                    <li>ASE certification tracking</li>
                    <li>Industry-specific certifications</li>
                    <li>Continuing education requirements</li>
                    <li>Licensing and renewal dates</li>
                    <li>Professional standards enforcement</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Shared Features Section -->
    <section class="shared-features-section">
        <h2>Every Solution Includes</h2>
        <div class="shared-features-grid">
            <div class="feature-item">
                <div class="feature-icon">CFG</div>
                <p>AI Diagnostics</p>
            </div>
            <div class="feature-item">
                <div class="feature-icon">CAL</div>
                <p>Smart Scheduling</p>
            </div>
            <div class="feature-item">
                <div class="feature-icon">$</div>
                <p>Invoicing</p>
            </div>
            <div class="feature-item">
                <div class="feature-icon">CRM</div>
                <p>CRM</p>
            </div>
            <div class="feature-item">
                <div class="feature-icon">INV</div>
                <p>Inventory</p>
            </div>
            <div class="feature-item">
                <div class="feature-icon">RPT</div>
                <p>Analytics</p>
            </div>
            <div class="feature-item">
                <div class="feature-icon">MOB</div>
                <p>Mobile App</p>
            </div>
            <div class="feature-item">
                <div class="feature-icon">LINK</div>
                <p>Integrations</p>
            </div>
        </div>
    </section>

    <!-- Success Stories Preview -->
    <section class="success-preview-section">
        <h2>Success Stories Across Industries</h2>
        <div class="success-stories-grid">
            <div class="success-card">
                <h4>Auto Repair</h4>
                <h3>Downtown Auto Repair</h3>
                <p>Family-owned shop transformed their operations with AI diagnostics and automated scheduling, reducing customer wait times and increasing service recommendations through intelligent upselling.</p>
                <div class="success-metric">
                    <div>
                        <div class="metric-value">40%</div>
                        <div class="metric-label">faster diagnostics</div>
                    </div>
                </div>
                <div class="success-metric">
                    <div>
                        <div class="metric-value">25%</div>
                        <div class="metric-label">more bookings</div>
                    </div>
                </div>
            </div>
            <div class="success-card">
                <h4>Fleet Management</h4>
                <h3>CrossCountry Logistics</h3>
                <p>Centralized fleet management across 45 locations reduced maintenance costs significantly through preventive maintenance automation and real-time compliance tracking across their entire vehicle fleet.</p>
                <div class="success-metric">
                    <div>
                        <div class="metric-value">$180K</div>
                        <div class="metric-label">annual savings</div>
                    </div>
                </div>
                <div class="success-metric">
                    <div>
                        <div class="metric-value">60%</div>
                        <div class="metric-label">less downtime</div>
                    </div>
                </div>
            </div>
            <div class="success-card">
                <h4>Multi-Location</h4>
                <h3>Premier Auto Group</h3>
                <p>Multi-shop network unified operations and doubled diagnostic accuracy with TorqueDesk AI, enabling data-driven decision making and consistent service quality across all 15 locations.</p>
                <div class="success-metric">
                    <div>
                        <div class="metric-value">15</div>
                        <div class="metric-label">locations connected</div>
                    </div>
                </div>
                <div class="success-metric">
                    <div>
                        <div class="metric-value">95%</div>
                        <div class="metric-label">on-time completion</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="solutions-cta">
        <h2>Not Sure Which Solution Fits?</h2>
        <p>Let our team guide you through the right solution for your shop. Schedule a personalized demo or contact us for expert recommendations tailored to your specific industry and business model.</p>
        <div class="cta-buttons">
            <a href="/contact" class="cta-btn-primary">Schedule Demo</a>
            <a href="/contact" class="cta-btn-secondary">Get Consultation</a>
        </div>
    </section>
    </section>

    <!-- Section Divider -->
    <div class="section-divider"></div>



        <a href="/pricing" class="next-page-link">
            Next: Pricing →
        </a>
<div class="next-page-cta">
      <div class="next-page-inner">
        <div class="next-page-label">Continue Exploring</div>
        <h2 class="next-page-title">Next: <span>Pricing</span></h2>
        <p class="next-page-desc">View our pricing plans</p>
        <a href="/pricing" class="next-page-btn">
          <span class="btn-text">Explore Pricing</span>
          <span class="btn-arrow">&rarr;</span>
        </a>
        <div class="page-dots"><a href="/" class="page-dot"></a><a href="/features" class="page-dot"></a><a href="/solutions" class="page-dot active"></a><a href="/pricing" class="page-dot"></a><a href="/integrations" class="page-dot"></a><a href="/demo" class="page-dot"></a><a href="/customers" class="page-dot"></a><a href="/resources" class="page-dot"></a><a href="/about" class="page-dot"></a><a href="/contact" class="page-dot"></a></div>
        <div class="page-counter-text">Page 3 of 10</div>
      </div>
    </div>` }} />
  );
}
