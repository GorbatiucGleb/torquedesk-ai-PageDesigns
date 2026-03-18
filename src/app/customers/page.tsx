import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers | TorqueDesk AI',
};

export default function CustomersPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<style>
        /* Case Studies Page Styles */
        .hero-section {
            background: linear-gradient(135deg, var(--hero) 0%, var(--dark-blue) 100%);
            padding: 120px 20px;
            text-align: center;
            border-bottom: 1px solid var(--subtle);
        }

        .hero-section h1 {
            font-size: 3rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 16px;
            
        }

        .hero-section p {
            font-size: 1.25rem;
            color: var(--gray);
            max-width: 600px;
            margin: 0 auto;
            
        }

        /* Stats Bar */
        .stats-bar {
            background: var(--card);
            padding: 60px 20px;
            border-top: 1px solid var(--subtle);
            border-bottom: 1px solid var(--subtle);
        }

        .stats-bar h3 {
            text-align: center;
            color: var(--gray);
            font-size: 0.95rem;
            font-weight: 500;
            margin-bottom: 40px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .stats-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            text-align: center;
        }

        .stat-item h3 {
            font-size: 2.5rem;
            color: var(--secondary);
            font-weight: 700;
            margin-bottom: 8px;
        }

        .stat-item p {
            color: var(--gray);
            font-size: 0.95rem;
        }

        /* Featured Case Study */
        .featured-section {
            background: var(--navy);
            padding: 80px 20px;
        }

        .featured-container {
            max-width: 1000px;
            margin: 0 auto;
        }

        .featured-header {
            text-align: center;
            margin-bottom: 40px;
        }

        .featured-header h2 {
            font-size: 2rem;
            color: #ffffff;
            margin-bottom: 8px;
        }

        .featured-card {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 40px;
            
        }

        .featured-top {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 30px;
            padding-bottom: 30px;
            border-bottom: 1px solid var(--subtle);
        }

        @media (max-width: 768px) {
            .featured-top {
                grid-template-columns: 1fr;
            }
        }

        .featured-details h3 {
            font-size: 1.5rem;
            color: #ffffff;
            margin-bottom: 8px;
        }

        .featured-location {
            color: var(--secondary);
            font-size: 0.9rem;
            margin-bottom: 20px;
        }

        .featured-meta {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .meta-item {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .meta-label {
            color: var(--secondary);
            font-weight: 600;
        }

        .comparison {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .comparison-item {
            padding: 15px;
            background: var(--navy);
            border-radius: 8px;
            border-left: 3px solid var(--accent);
        }

        .comparison-label {
            color: var(--gray);
            font-size: 0.85rem;
            margin-bottom: 8px;
        }

        .comparison-before {
            color: #ff6b6b;
            font-size: 0.95rem;
            margin-bottom: 4px;
        }

        .comparison-after {
            color: var(--secondary);
            font-size: 1.1rem;
            font-weight: 600;
        }

        .featured-quote {
            margin-top: 30px;
            padding: 20px;
            background: var(--navy);
            border-left: 4px solid var(--accent);
            border-radius: 8px;
        }

        .quote-text {
            color: #ffffff;
            font-style: italic;
            margin-bottom: 12px;
            line-height: 1.6;
        }

        .quote-author {
            color: var(--gray);
            font-size: 0.9rem;
        }

        .quote-rating {
            color: #ffc107;
            margin-top: 8px;
        }

        .featured-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;
        }

        .tag {
            display: inline-block;
            background: var(--subtle);
            color: var(--gray);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.85rem;
        }

        /* Filter */
        .filter-section {
            background: var(--card);
            padding: 40px 20px;
            border-top: 1px solid var(--subtle);
            border-bottom: 1px solid var(--subtle);
            margin: 0 0 40px 0;
        }

        .filter-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .filter-label {
            color: #ffffff;
            font-size: 0.95rem;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .filter-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .filter-btn {
            background: var(--navy);
            color: var(--gray);
            border: 1px solid var(--subtle);
            padding: 10px 18px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
            background: var(--accent);
            color: #ffffff;
            border-color: var(--accent);
        }

        /* Case Study Grid */
        .cases-section {
            background: var(--navy);
            padding: 80px 20px;
        }

        .cases-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .cases-header h2 {
            font-size: 2rem;
            color: #ffffff;
            margin-bottom: 12px;
        }

        .cases-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
        }

        .case-card {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 30px;
            transition: all 0.3s ease;
            
            display: flex;
            flex-direction: column;
        }

        .case-card:hover {
            border-color: var(--accent);
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(45, 156, 219, 0.15);
        }

        .case-badge {
            display: inline-block;
            background: var(--subtle);
            color: var(--secondary);
            padding: 4px 10px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 12px;
            width: fit-content;
        }

        .case-name {
            font-size: 1.2rem;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 4px;
        }

        .case-location {
            color: var(--secondary);
            font-size: 0.85rem;
            margin-bottom: 16px;
        }

        .case-challenge {
            font-size: 0.9rem;
            color: var(--gray);
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--subtle);
        }

        .case-challenge-label {
            font-size: 0.8rem;
            color: var(--gray);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 600;
            margin-bottom: 6px;
        }

        .case-metric {
            font-size: 1.8rem;
            color: var(--accent);
            font-weight: 700;
            margin-bottom: 4px;
        }

        .case-metric-label {
            font-size: 0.85rem;
            color: var(--gray);
            margin-bottom: 16px;
        }

        .case-solution {
            font-size: 0.9rem;
            color: var(--gray);
            line-height: 1.6;
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--subtle);
        }

        .case-solution-label {
            font-size: 0.8rem;
            color: var(--gray);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 600;
            margin-bottom: 6px;
        }

        .case-results {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--subtle);
        }

        .result-item {
            background: var(--navy);
            padding: 10px;
            border-radius: 6px;
            border-left: 3px solid var(--secondary);
        }

        .result-stat {
            font-size: 1.1rem;
            color: var(--secondary);
            font-weight: 600;
        }

        .result-label {
            font-size: 0.75rem;
            color: var(--gray);
            margin-top: 4px;
        }

        .case-quote {
            background: var(--navy);
            padding: 12px;
            border-left: 3px solid var(--accent);
            border-radius: 6px;
            margin-bottom: 16px;
        }

        .case-quote-text {
            color: #ffffff;
            font-size: 0.85rem;
            font-style: italic;
            line-height: 1.5;
            margin-bottom: 8px;
        }

        .case-quote-author {
            color: var(--gray);
            font-size: 0.8rem;
        }

        .case-link {
            color: var(--secondary);
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: gap 0.3s ease;
            margin-top: auto;
        }

        .case-link:hover {
            gap: 10px;
        }

        .case-link::after {
            content: "→";
        }

        /* CTA Section */
        .cta-section {
            background: linear-gradient(135deg, var(--dark-blue) 0%, var(--hero) 100%);
            padding: 80px 20px;
            text-align: center;
        }

        .cta-container {
            max-width: 700px;
            margin: 0 auto;
        }

        .cta-section h2 {
            font-size: 2rem;
            color: #ffffff;
            margin-bottom: 16px;
            
        }

        .cta-section p {
            color: var(--gray);
            margin-bottom: 30px;
            
        }

        .btn-cta {
            display: inline-block;
            background: var(--accent);
            color: #ffffff;
            padding: 14px 40px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            
        }

        .btn-cta:hover {
            background: var(--secondary);
            transform: translateY(-2px);
        }

        @media (max-width: 768px) {
            .hero-section h1 {
                font-size: 2rem;
            }

            .featured-top {
                grid-template-columns: 1fr;
            }

            .comparison {
                grid-template-columns: 1fr;
            }

            .cases-grid {
                grid-template-columns: 1fr;
            }

            .case-results {
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

/* ============== BLOG & INDUSTRY INSIGHTS STYLES ============== */
        .blog-hero {
            background: linear-gradient(135deg, var(--hero) 0%, var(--dark-blue) 100%);
            padding: 80px 20px;
            text-align: center;
        }

        .blog-hero h1 {
            font-size: 3.5rem;
            color: #fff;
            margin: 0 0 15px 0;
            font-weight: 700;
        }

        .blog-hero p {
            font-size: 1.2rem;
            color: var(--light-gray);
            max-width: 600px;
            margin: 0 auto;
        }

        .category-tabs {
            background: var(--navy);
            padding: 40px 20px;
            border-bottom: 1px solid var(--subtle);
        }

        .tabs-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            gap: 30px;
            overflow-x: auto;
            padding-bottom: 10px;
        }

        .tab-btn {
            background: none;
            border: none;
            color: var(--gray);
            font-size: 1rem;
            cursor: pointer;
            padding: 10px 0;
            border-bottom: 2px solid transparent;
            transition: all 0.3s ease;
            white-space: nowrap;
            font-weight: 500;
        }

        .tab-btn:hover {
            color: var(--secondary);
        }

        .tab-btn.active {
            color: var(--secondary);
            border-bottom-color: var(--secondary);
        }

        .blog-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px;
        }

        .featured-article {
            background: linear-gradient(135deg, var(--card) 0%, var(--dark-blue) 100%);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 40px;
            margin-bottom: 60px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
        }

        .featured-article-content h2 {
            font-size: 2.2rem;
            color: #fff;
            margin: 0 0 20px 0;
            line-height: 1.3;
        }

        .featured-article-meta {
            display: flex;
            gap: 15px;
            align-items: center;
            margin-bottom: 20px;
            font-size: 0.95rem;
            color: var(--gray);
        }

        .category-tag {
            display: inline-block;
            background: var(--subtle);
            color: var(--secondary);
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .featured-article p {
            color: var(--light-gray);
            line-height: 1.6;
            margin-bottom: 25px;
            font-size: 1.05rem;
        }

        .featured-article-btn {
            display: inline-block;
            background: var(--accent);
            color: #fff;
            padding: 12px 32px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid var(--accent);
        }

        .featured-article-btn:hover {
            background: transparent;
            color: var(--accent);
        }

        .featured-article-image {
            background: linear-gradient(135deg, rgba(45, 156, 219, 0.1) 0%, rgba(59,130,196, 0.1) 100%);
            height: 300px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray);
            font-size: 0.95rem;
        }

        .articles-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-bottom: 80px;
        }

        .article-card {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 0;
            overflow: visible;
            transition: all 0.3s ease;
        }

        .article-card:hover {
            border-color: var(--accent);
            transform: translateY(-8px);
        }

        .article-card-image {
            background: linear-gradient(135deg, rgba(45, 156, 219, 0.15) 0%, rgba(59,130,196, 0.15) 100%);
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray);
            font-size: 0.85rem;
        }

        .article-card-content {
            padding: 25px;
        }

        .article-card h3 {
            font-size: 1.15rem;
            color: #fff;
            margin: 15px 0;
            line-height: 1.4;
        }

        .article-card-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.85rem;
            color: var(--gray);
            margin-bottom: 15px;
        }

        .article-card-excerpt {
            color: var(--light-gray);
            line-height: 1.6;
            margin-bottom: 20px;
            font-size: 0.9rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: visible;
        }

        .article-card-link {
            color: var(--secondary);
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .article-card-link:hover {
            gap: 12px;
        }

        .sidebar-container {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 40px;
            margin-bottom: 80px;
        }

        .popular-posts-sidebar {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 30px;
            height: fit-content;
        }

        .popular-posts-sidebar h3 {
            font-size: 1.2rem;
            color: #fff;
            margin: 0 0 25px 0;
        }

        .popular-posts-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .popular-post-item {
            padding-bottom: 20px;
            border-bottom: 1px solid var(--subtle);
        }

        .popular-post-item:last-child {
            padding-bottom: 0;
            border-bottom: none;
        }

        .popular-post-item a {
            color: var(--light-gray);
            text-decoration: none;
            font-size: 0.95rem;
            line-height: 1.5;
            transition: color 0.3s ease;
        }

        .popular-post-item a:hover {
            color: var(--secondary);
        }

        .popular-post-number {
            display: inline-block;
            background: var(--accent);
            color: #fff;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            text-align: center;
            line-height: 24px;
            font-size: 0.8rem;
            font-weight: 700;
            margin-right: 10px;
        }

        .newsletter-section {
            background: linear-gradient(135deg, var(--dark-blue) 0%, var(--subtle) 100%);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 50px 40px;
            text-align: center;
            margin: 80px 0;
        }

        .newsletter-section h2 {
            font-size: 2rem;
            color: #fff;
            margin: 0 0 15px 0;
        }

        .newsletter-section p {
            color: var(--light-gray);
            font-size: 1.05rem;
            margin-bottom: 30px;
        }

        .newsletter-form {
            display: flex;
            gap: 10px;
            max-width: 500px;
            margin: 0 auto;
        }

        .newsletter-form input {
            flex: 1;
            padding: 14px 18px;
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 6px;
            color: #fff;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }

        .newsletter-form input::placeholder {
            color: var(--gray);
        }

        .newsletter-form input:focus {
            outline: none;
            border-color: var(--accent);
        }

        .newsletter-form button {
            padding: 14px 32px;
            background: var(--secondary);
            color: var(--deep);
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .newsletter-form button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(59,130,196, 0.3);
        }

        @media (max-width: 1024px) {
            .articles-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .sidebar-container {
                grid-template-columns: 1fr;
            }

            .featured-article {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .blog-hero h1 {
                font-size: 2.5rem;
            }

            .articles-grid {
                grid-template-columns: 1fr;
            }

            .featured-article {
                grid-template-columns: 1fr;
                padding: 30px;
            }

            .featured-article-image {
                height: 200px;
            }

            .tabs-container {
                gap: 15px;
            }

            .newsletter-form {
                flex-direction: column;
            }

            .newsletter-form button {
                width: 100%;
            }
        }

/* ============== PARTNER PROGRAM STYLES ============== */
        .types-section {
            background: var(--navy);
            padding: 80px 20px;
        }

        .types-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .types-header h2 {
            font-size: 2rem;
            color: #ffffff;
            margin-bottom: 12px;
        }

        .types-header p {
            color: var(--gray);
            font-size: 1.05rem;
        }

        .types-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .type-card {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 40px 30px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .type-card:hover {
            border-color: var(--accent);
            transform: translateY(-8px);
        }

        .type-icon {
            font-size: 3rem;
            margin-bottom: 20px;
        }

        .type-name {
            font-size: 1.3rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 12px;
        }

        .type-description {
            color: var(--light-gray);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .benefits-section {
            background: var(--card);
            padding: 100px 20px;
        }

        .benefits-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .benefits-header h2 {
            font-size: 2rem;
            color: #ffffff;
            margin-bottom: 12px;
        }

        .benefits-header p {
            color: var(--gray);
            font-size: 1.05rem;
        }

        .benefits-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
        }

        .benefit-item {
            background: var(--navy);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 40px 30px;
            text-align: center;
        }

        .benefit-icon {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--secondary);
            margin-bottom: 20px;
        }

        .benefit-title {
            font-size: 1.2rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 12px;
        }

        .benefit-description {
            color: var(--light-gray);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .tiers-section {
            background: var(--navy);
            padding: 80px 20px;
        }

        .tiers-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .tiers-header h2 {
            font-size: 2rem;
            color: #ffffff;
            margin-bottom: 12px;
        }

        .tiers-header p {
            color: var(--gray);
            font-size: 1.05rem;
        }

        .tiers-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }

        .tier-card {
            background: var(--card);
            border: 2px solid var(--subtle);
            border-radius: 12px;
            padding: 40px 30px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .tier-card:hover {
            border-color: var(--secondary);
            box-shadow: 0 8px 30px rgba(59,130,196, 0.15);
        }

        .tier-name {
            font-size: 1.5rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 12px;
        }

        .tier-requirement {
            color: var(--secondary);
            font-size: 0.9rem;
            margin-bottom: 25px;
            font-weight: 600;
        }

        .tier-benefits {
            text-align: left;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .tier-benefits li {
            color: var(--light-gray);
            font-size: 0.95rem;
            padding: 8px 0;
            padding-left: 24px;
            position: relative;
        }

        .tier-benefits li::before {
            content: '\\2713';
            position: absolute;
            left: 0;
            color: var(--secondary);
            font-weight: 700;
        }

        .testimonials-section {
            background: var(--card);
            padding: 80px 20px;
        }

        .testimonials-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .testimonials-header h2 {
            font-size: 2rem;
            color: #ffffff;
            margin-bottom: 12px;
        }

        .testimonials-header p {
            color: var(--gray);
            font-size: 1.05rem;
        }

        .testimonials-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .testimonial-card {
            background: var(--navy);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 40px;
            transition: all 0.3s ease;
        }

        .testimonial-card:hover {
            border-color: var(--accent);
            box-shadow: 0 8px 30px rgba(45, 156, 219, 0.15);
        }

        .testimonial-quote {
            color: var(--light-gray);
            font-size: 1.05rem;
            line-height: 1.8;
            margin-bottom: 25px;
            font-style: italic;
        }

        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .testimonial-avatar {
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: 700;
            font-size: 0.9rem;
        }

        .testimonial-info h4 {
            font-size: 1rem;
            color: #ffffff;
            margin: 0;
            font-weight: 700;
        }

        .testimonial-info p {
            font-size: 0.85rem;
            color: var(--gray);
            margin: 4px 0 0 0;
        }

        .process-section {
            background: var(--navy);
            padding: 80px 20px;
        }

        .process-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .process-header h2 {
            font-size: 2rem;
            color: #ffffff;
            margin-bottom: 12px;
        }

        .process-header p {
            color: var(--gray);
            font-size: 1.05rem;
        }

        .process-steps {
            max-width: 1000px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
        }

        .process-step {
            text-align: center;
        }

        .step-number {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 1.8rem;
            font-weight: 700;
            margin: 0 auto 20px;
        }

        .step-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 12px;
        }

        .step-description {
            color: var(--light-gray);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .revenue-section {
            background: var(--card);
            padding: 80px 20px;
        }

        .revenue-container {
            max-width: 1000px;
            margin: 0 auto;
        }

        .revenue-section h2 {
            font-size: 2rem;
            color: #ffffff;
            text-align: center;
            margin-bottom: 40px;
        }

        .revenue-highlight {
            background: var(--navy);
            border: 2px solid var(--subtle);
            border-radius: 12px;
            padding: 40px;
            text-align: center;
            margin-bottom: 40px;
        }

        .revenue-highlight h3 {
            font-size: 1.8rem;
            color: var(--secondary);
            margin: 0 0 12px 0;
            font-weight: 700;
        }

        .revenue-highlight p {
            color: var(--light-gray);
            font-size: 1rem;
            margin: 0;
        }

        .revenue-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .revenue-detail {
            background: var(--navy);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 30px;
            text-align: center;
        }

        .revenue-detail h4 {
            font-size: 1.1rem;
            color: #ffffff;
            margin: 0 0 12px 0;
            font-weight: 700;
        }

        .revenue-detail p {
            color: var(--light-gray);
            font-size: 0.9rem;
            line-height: 1.6;
            margin: 0;
        }

        .stats-section {
            background: var(--navy);
            padding: 80px 20px;
            text-align: center;
        }

        .stats-container {
            max-width: 1000px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
        }

        .stat-item h3 {
            font-size: 2.5rem;
            color: var(--secondary);
            margin: 0 0 8px 0;
            font-weight: 700;
        }

        .stat-item p {
            color: var(--gray);
            font-size: 0.95rem;
            margin: 0;
        }

        .partners-section {
            background: var(--card);
            padding: 80px 20px;
        }

        .partners-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .partners-header h2 {
            font-size: 2rem;
            color: #ffffff;
            margin-bottom: 12px;
        }

        .partners-header p {
            color: var(--gray);
            font-size: 1.05rem;
        }

        .partners-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
        }

        .partner-logo {
            background: var(--navy);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 40px 20px;
            text-align: center;
            color: var(--light-gray);
            font-weight: 600;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .partner-logo:hover {
            border-color: var(--accent);
            transform: translateY(-4px);
            color: var(--accent);
        }

        .cta-section {
            background: var(--navy);
            padding: 80px 20px;
        }

        .cta-container {
            max-width: 700px;
            margin: 0 auto;
        }

        .cta-header {
            text-align: center;
            margin-bottom: 40px;
        }

        .cta-header h2 {
            font-size: 2rem;
            color: #ffffff;
            margin: 0 0 12px 0;
        }

        .cta-header p {
            color: var(--light-gray);
            font-size: 1rem;
            margin: 0;
        }

        .partner-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        .form-group label {
            color: #ffffff;
            font-size: 0.95rem;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
            padding: 12px 16px;
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 6px;
            color: #fff;
            font-family: inherit;
            font-size: 0.95rem;
            transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
            outline: none;
            border-color: var(--accent);
        }

        .form-group textarea {
            min-height: 120px;
            resize: vertical;
        }

        .form-submit {
            padding: 14px 32px;
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            color: #fff;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 10px;
        }

        .form-submit:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(45, 156, 219, 0.3);
        }

        @media (max-width: 768px) {
            .articles-grid {
                grid-template-columns: 1fr;
            }

            .types-grid {
                grid-template-columns: 1fr;
            }

            .benefits-grid {
                grid-template-columns: 1fr;
            }

            .tiers-grid {
                grid-template-columns: 1fr;
            }

            .testimonials-grid {
                grid-template-columns: 1fr;
            }

            .process-steps {
                grid-template-columns: 1fr;
            }

            .revenue-details {
                grid-template-columns: 1fr;
            }

            .partners-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }


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
<section class="hero-section">
        <h1>Real Shops. Real Results.</h1>
        <p>See how TorqueDesk AI transforms auto repair businesses with smarter management and higher profits.</p>
    </section>

    <section class="stats-bar">
        <h3>Average Results Across All Customers</h3>
        <div class="stats-container">
            <div class="stat-item">
                <h3>32%</h3>
                <p>Revenue Increase</p>
            </div>
            <div class="stat-item">
                <h3>15 hrs/week</h3>
                <p>Time Saved Per Manager</p>
            </div>
            <div class="stat-item">
                <h3>3x</h3>
                <p>More Reviews Generated</p>
            </div>
            <div class="stat-item">
                <h3>45%</h3>
                <p>More Repeat Customers</p>
            </div>
        </div>
    </section>

    <section class="featured-section">
        <div class="featured-container">
            <div class="featured-header">
                <h2>Featured Case Study</h2>
            </div>
            <div class="featured-card">
                <div class="featured-top">
                    <div class="featured-details">
                        <h3>Smith's Auto Repair</h3>
                        <div class="featured-location">Dallas, TX • 5-Bay Shop • General Auto Repair</div>
                        <div class="featured-meta">
                            <div class="meta-item"><span class="meta-label">Type:</span> Independent Shop</div>
                            <div class="meta-item"><span class="meta-label">Size:</span> 8 Technicians</div>
                            <div class="meta-item"><span class="meta-label">Focus:</span> General Maintenance & Repair</div>
                        </div>
                        <div style="color: var(--gray); line-height: 1.6; margin-bottom: 20px;">
                            <strong style="color: #ffffff;">Challenge:</strong> Smith's Auto Repair was losing customers due to long scheduling wait times and poor communication. The shop had 15% no-show rates, and managers spent 20+ hours per week on manual scheduling and appointment reminders. Customer satisfaction had declined to 4.1 stars as clients complained about unclear turnaround times and lack of updates.
                        </div>
                        <div style="color: var(--gray); line-height: 1.6;">
                            <strong style="color: #ffffff;">Solution:</strong> TDAI automated appointment scheduling with AI-powered SMS reminders, reducing no-shows instantly. The system enabled real-time job status updates to customers, and predictive scheduling suggested optimal time slots based on technician availability and job type. Integrated CRM auto-flagged repeat customers for priority service.
                        </div>
                    </div>
                    <div class="comparison">
                        <div class="comparison-item">
                            <div class="comparison-label">Monthly Revenue</div>
                            <div class="comparison-before">Before: $45K</div>
                            <div class="comparison-after">After: $67K</div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-label">Customer Satisfaction</div>
                            <div class="comparison-before">Before: 4.1*</div>
                            <div class="comparison-after">After: 4.9*</div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-label">No-Show Rate</div>
                            <div class="comparison-before">Before: 15%</div>
                            <div class="comparison-after">After: 2%</div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-label">Manager Time Saved</div>
                            <div class="comparison-before">Before: 20 hrs/week</div>
                            <div class="comparison-after">After: 4 hrs/week</div>
                        </div>
                    </div>
                </div>
                <div class="featured-quote">
                    <div class="quote-text">
                        "TorqueDesk AI gave us back 15 hours every week. Our customers are happier, our team is less stressed, and we're making $22K more each month. This was the best decision we made for our shop in years."
                    </div>
                    <div class="quote-author">
                        — Robert Smith, Owner, Smith's Auto Repair
                    </div>
                    <div class="quote-rating">*****</div>
                </div>
                <div class="featured-tags">
                    <span class="tag">5-Bay Shop</span>
                    <span class="tag">49% Revenue Growth</span>
                    <span class="tag">AI Scheduling</span>
                    <span class="tag">CRM Automation</span>
                </div>
            </div>
        </div>
    </section>

    <div class="filter-section">
        <div class="filter-container">
            <div class="filter-label">Filter by Shop Type</div>
            <div class="filter-buttons">
                <button class="filter-btn active" data-filter="all">All Shops</button>
                <button class="filter-btn" data-filter="auto-repair">General Auto Repair</button>
                <button class="filter-btn" data-filter="tire">Tire Shop</button>
                <button class="filter-btn" data-filter="fleet">Fleet Management</button>
                <button class="filter-btn" data-filter="multi-location">Multi-Location</button>
                <button class="filter-btn" data-filter="truck">Truck & Diesel</button>
                <button class="filter-btn" data-filter="powersports">Marine & Powersports</button>
            </div>
        </div>
    </div>

    <section class="cases-section">
        <div class="cases-header">
            <h2>Success Stories Across All Shop Types</h2>
        </div>
        <div class="cases-grid">
            <!-- Case 1: Tire Shop -->
            <div class="case-card" data-type="tire">
                <div class="case-badge">TIRE SHOP</div>
                <div class="case-name">Portland Tire & Auto</div>
                <div class="case-location">Portland, OR • 3-Bay Facility</div>
                <div class="case-challenge-label">Challenge</div>
                <div class="case-challenge">Seasonal demand fluctuations made it hard to forecast inventory. Lost high-margin upsell opportunities because technicians weren't aware of customer maintenance history.</div>
                <div class="case-metric">+38% Revenue</div>
                <div class="case-metric-label">12-Month Growth</div>
                <div class="case-solution-label">Solution</div>
                <div class="case-solution">TDAI's AI recommendations showed technicians which tires, batteries, and alignment services fit each customer. Smart inventory management adjusted stock levels based on seasonal patterns and historical data.</div>
                <div class="case-results">
                    <div class="result-item">
                        <div class="result-stat">38%</div>
                        <div class="result-label">Revenue Growth</div>
                    </div>
                    <div class="result-item">
                        <div class="result-stat">52%</div>
                        <div class="result-label">Upsell Rate</div>
                    </div>
                </div>
                <div class="case-quote">
                    <div class="case-quote-text">"The AI recommendations are incredible. We now suggest the right service at the right time. Our average ticket went from $180 to $280 in just 8 months."</div>
                    <div class="case-quote-author">— Maria Gonzalez, Manager</div>
                </div>
                <a href="/contact" class="case-link">Request ROI Details</a>
            </div>

            <!-- Case 2: Fleet Management -->
            <div class="case-card" data-type="fleet">
                <div class="case-badge">FLEET MANAGEMENT</div>
                <div class="case-name">Rivera Fleet Services</div>
                <div class="case-location">Miami, FL • 4 Locations</div>
                <div class="case-challenge-label">Challenge</div>
                <div class="case-challenge">Managing maintenance schedules across 4 service centers was chaotic. Lack of centralized visibility meant duplicate paperwork, inconsistent pricing, and technicians wasting time searching for vehicle history.</div>
                <div class="case-metric">4 Locations Unified</div>
                <div class="case-metric-label">Single Dashboard</div>
                <div class="case-solution-label">Solution</div>
                <div class="case-solution">TDAI provided a unified platform where all locations logged jobs in real-time. Centralized inventory prevented duplicate purchases. Automated preventive maintenance scheduling reduced unplanned breakdowns by 65%.</div>
                <div class="case-results">
                    <div class="result-item">
                        <div class="result-stat">65%</div>
                        <div class="result-label">Fewer Breakdowns</div>
                    </div>
                    <div class="result-item">
                        <div class="result-stat">28%</div>
                        <div class="result-label">Downtime Reduction</div>
                    </div>
                </div>
                <div class="case-quote">
                    <div class="case-quote-text">"Four shops running on one system saved us $45K in duplicate inventory and thousands more by preventing emergency repairs. The efficiency gains were immediate."</div>
                    <div class="case-quote-author">— Carlos Rivera, Owner</div>
                </div>
                <a href="/contact" class="case-link">Request ROI Details</a>
            </div>

            <!-- Case 3: Multi-Location General Repair -->
            <div class="case-card" data-type="multi-location">
                <div class="case-badge">MULTI-LOCATION</div>
                <div class="case-name">Kim's Quality Auto Group</div>
                <div class="case-location">Seattle, WA • 2 Shops</div>
                <div class="case-challenge-label">Challenge</div>
                <div class="case-challenge">Customer data was scattered across two shops. One-time visitors rarely returned because follow-up was inconsistent. Marketing efforts weren't personalized, and repeat customer rates were low at 32%.</div>
                <div class="case-metric">2x Repeat Customers</div>
                <div class="case-metric-label">64% Retention Rate</div>
                <div class="case-solution-label">Solution</div>
                <div class="case-solution">TDAI's unified CRM tracked every customer interaction across both locations. Automated follow-up emails and SMS messages reminded customers when maintenance was due. Loyalty rewards programs encouraged repeat visits, and service reminders were personalized by vehicle type.</div>
                <div class="case-results">
                    <div class="result-item">
                        <div class="result-stat">64%</div>
                        <div class="result-label">Repeat Rate</div>
                    </div>
                    <div class="result-item">
                        <div class="result-stat">127%</div>
                        <div class="result-label">CLV Growth</div>
                    </div>
                </div>
                <div class="case-quote">
                    <div class="case-quote-text">"Doubling our repeat customer rate means predictable revenue and less time on customer acquisition. The system is pure magic for CRM at scale."</div>
                    <div class="case-quote-author">— Kim Chan, Owner</div>
                </div>
                <a href="/contact" class="case-link">Request ROI Details</a>
            </div>

            <!-- Case 4: Truck & Diesel Specialist -->
            <div class="case-card" data-type="truck">
                <div class="case-badge">TRUCK & DIESEL</div>
                <div class="case-name">Walker Automotive Group</div>
                <div class="case-location">Austin, TX • 10-Bay Heavy Equipment</div>
                <div class="case-challenge-label">Challenge</div>
                <div class="case-challenge">Complex diesel work requires detailed diagnostics and long repair windows. Work orders were incomplete, technicians duplicated tests, and customers didn't understand why jobs took so long. Quote-to-close conversion was only 58%.</div>
                <div class="case-metric">500% ROI in 6 Months</div>
                <div class="case-metric-label">Quick Payback</div>
                <div class="case-solution-label">Solution</div>
                <div class="case-solution">TDAI's AI diagnostics engine helped technicians identify issues faster and create detailed, transparent quotes. Integration with parts suppliers automated ordering for common diesel components. Real-time job tracking showed customers exactly what technicians were working on.</div>
                <div class="case-results">
                    <div class="result-item">
                        <div class="result-stat">78%</div>
                        <div class="result-label">Quote Conversion</div>
                    </div>
                    <div class="result-item">
                        <div class="result-stat">31%</div>
                        <div class="result-label">Labor Hour Savings</div>
                    </div>
                </div>
                <div class="case-quote">
                    <div class="case-quote-text">"Heavy diesel work is complex, but TDAI made our technicians 20% more efficient and our quotes way more transparent. Customers are actually impressed by our professionalism."</div>
                    <div class="case-quote-author">— James Walker, Owner</div>
                </div>
                <a href="/contact" class="case-link">Request ROI Details</a>
            </div>

            <!-- Case 5: Auto Repair Small -->
            <div class="case-card" data-type="auto-repair">
                <div class="case-badge">AUTO REPAIR</div>
                <div class="case-name">Bennett's Honest Garage</div>
                <div class="case-location">Denver, CO • 2-Bay Shop</div>
                <div class="case-challenge-label">Challenge</div>
                <div class="case-challenge">As a small owner-operator shop, Bennett spent 25 hours per week on admin tasks—invoicing, scheduling, accounting. Limited time to actually grow the business meant the shop was plateauing at $35K monthly revenue.</div>
                <div class="case-metric">+26% Revenue</div>
                <div class="case-metric-label">First Year</div>
                <div class="case-solution-label">Solution</div>
                <div class="case-solution">TDAI automated routine tasks: invoicing, appointment reminders, customer follow-ups, and report generation. The owner reclaimed 12 hours per week to focus on customer relationships and strategic growth. Mobile app let him run the shop from anywhere.</div>
                <div class="case-results">
                    <div class="result-item">
                        <div class="result-stat">12 hrs/week</div>
                        <div class="result-label">Admin Time Back</div>
                    </div>
                    <div class="result-item">
                        <div class="result-stat">$9,100</div>
                        <div class="result-label">Monthly Increase</div>
                    </div>
                </div>
                <div class="case-quote">
                    <div class="case-quote-text">"I'm not drowning in paperwork anymore. TDAI runs the shop operations while I focus on the customers and growing. Best $299/month I spend."</div>
                    <div class="case-quote-author">— Tom Bennett, Owner</div>
                </div>
                <a href="/contact" class="case-link">Request ROI Details</a>
            </div>

            <!-- Case 6: Marine & Powersports -->
            <div class="case-card" data-type="powersports">
                <div class="case-badge">MARINE & POWERSPORTS</div>
                <div class="case-name">Apex Marine & Powersports</div>
                <div class="case-location">Tampa, FL • 5-Bay Service Center</div>
                <div class="case-challenge-label">Challenge</div>
                <div class="case-challenge">Seasonal repair cycles (boats and PWC traffic surge in summer) created feast-or-famine scheduling. Complex, specialized diagnostics on marine engines required archival of service records for warranty compliance and customer history tracking.</div>
                <div class="case-metric">43% Seasonal Utilization</div>
                <div class="case-metric-label">Year-Round Optimization</div>
                <div class="case-solution-label">Solution</div>
                <div class="case-solution">TDAI's predictive analytics forecasted seasonal demand patterns and recommended cross-training. Service history auto-documented for warranty claims. SMS appointment reminders reduced seasonal no-shows from 22% to 4%, keeping bays full even during slower months.</div>
                <div class="case-results">
                    <div class="result-item">
                        <div class="result-stat">22%</div>
                        <div class="result-label">No-Show Reduction</div>
                    </div>
                    <div class="result-item">
                        <div class="result-stat">$28K</div>
                        <div class="result-label">Off-Season Revenue Add</div>
                    </div>
                </div>
                <div class="case-quote">
                    <div class="case-quote-text">"Marine services are specialized and seasonal. TDAI helped us smooth revenue across the year and handle complex warranties effortlessly. Our repeat rate jumped 40%."</div>
                    <div class="case-quote-author">— Devon Price, Manager</div>
                </div>
                <a href="/contact" class="case-link">Request ROI Details</a>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="cta-container">
            <h2>Ready to Write Your Success Story?</h2>
            <p>Join hundreds of auto shops already using TorqueDesk AI to drive growth and efficiency. Your industry-specific ROI awaits.</p>
            <a href="/contact" class="btn-cta">Download Full ROI Report</a>
        </div>
    </section>


<!-- SECTION DIVIDER -->
<div class="fancy-divider"></div>

<!-- BLOG & INDUSTRY INSIGHTS SECTION -->
    <section class="blog-hero">
        <h1>TDAI Blog — Insights for Modern Shop Owners</h1>
        <p>Industry news, tips, and TorqueDesk AI updates to keep your shop ahead of the curve.</p>
    </section>

    <section class="category-tabs">
        <div class="tabs-container">
            <button class="tab-btn active">All</button>
            <button class="tab-btn">Product Updates</button>
            <button class="tab-btn">Industry Insights</button>
            <button class="tab-btn">Tips & Tricks</button>
            <button class="tab-btn">Case Studies</button>
            <button class="tab-btn">Company News</button>
        </div>
    </section>

    <div class="blog-container">
        <article class="featured-article">
            <div class="featured-article-content">
                <span class="category-tag">Industry Insights</span>
                <h2>The Future of AI in Auto Repair: 2026 Trends</h2>
                <div class="featured-article-meta">
                    <span>March 8, 2026</span>
                    <span>8 min read</span>
                </div>
                <p>Discover the emerging technologies and practices shaping the auto repair industry this year. From predictive maintenance to AI-powered diagnostics, learn how forward-thinking shops are staying competitive.</p>
                <a href="#" class="featured-article-btn">Read Article</a>
            </div>
            <div class="featured-article-image">Featured Article Image</div>
        </article>

        <div class="sidebar-container">
            <div class="articles-grid">
                <article class="article-card">
                    <div class="article-card-image">Image</div>
                    <div class="article-card-content">
                        <span class="category-tag">Tips & Tricks</span>
                        <h3>5 Ways AI Diagnostics Save Your Shop Money</h3>
                        <div class="article-card-meta">
                            <span>Feb 28, 2026</span>
                            <span>6 min</span>
                        </div>
                        <p class="article-card-excerpt">Learn how AI diagnostic tools reduce diagnostic time and improve accuracy, cutting down on unnecessary repairs and labor costs.</p>
                        <a href="#" class="article-card-link">Read more →</a>
                    </div>
                </article>

                <article class="article-card">
                    <div class="article-card-image">Image</div>
                    <div class="article-card-content">
                        <span class="category-tag">Product Updates</span>
                        <h3>TDAI Launches Predictive Inventory Feature</h3>
                        <div class="article-card-meta">
                            <span>Feb 15, 2026</span>
                            <span>4 min</span>
                        </div>
                        <p class="article-card-excerpt">Introducing our new predictive inventory system that anticipates parts demand based on seasonal trends and historical data.</p>
                        <a href="#" class="article-card-link">Read more →</a>
                    </div>
                </article>

                <article class="article-card">
                    <div class="article-card-image">Image</div>
                    <div class="article-card-content">
                        <span class="category-tag">Case Studies</span>
                        <h3>How Smith's Auto Doubled Revenue with TDAI</h3>
                        <div class="article-card-meta">
                            <span>Feb 1, 2026</span>
                            <span>7 min</span>
                        </div>
                        <p class="article-card-excerpt">See how a family-owned auto repair shop in Denver increased efficiency by 45% and doubled their annual revenue in just 18 months.</p>
                        <a href="#" class="article-card-link">Read more →</a>
                    </div>
                </article>

                <article class="article-card">
                    <div class="article-card-image">Image</div>
                    <div class="article-card-content">
                        <span class="category-tag">Tips & Tricks</span>
                        <h3>Digital Inspections: The Complete Guide</h3>
                        <div class="article-card-meta">
                            <span>Jan 20, 2026</span>
                            <span>9 min</span>
                        </div>
                        <p class="article-card-excerpt">Master the digital inspection workflow and learn best practices for capturing, organizing, and sharing vehicle inspection data with customers.</p>
                        <a href="#" class="article-card-link">Read more →</a>
                    </div>
                </article>

                <article class="article-card">
                    <div class="article-card-image">Image</div>
                    <div class="article-card-content">
                        <span class="category-tag">Product Updates</span>
                        <h3>TDAI Now Integrates with PartsTech</h3>
                        <div class="article-card-meta">
                            <span>Jan 10, 2026</span>
                            <span>5 min</span>
                        </div>
                        <p class="article-card-excerpt">Seamlessly order parts directly from PartsTech's extensive inventory without leaving the TDAI platform. Faster ordering, better pricing.</p>
                        <a href="#" class="article-card-link">Read more →</a>
                    </div>
                </article>

                <article class="article-card">
                    <div class="article-card-image">Image</div>
                    <div class="article-card-content">
                        <span class="category-tag">Industry Insights</span>
                        <h3>Why Auto Shops Need CRM in 2026</h3>
                        <div class="article-card-meta">
                            <span>Jan 5, 2026</span>
                            <span>6 min</span>
                        </div>
                        <p class="article-card-excerpt">Customer relationship management is no longer optional. Explore why modern CRM systems are essential for retention and growth in competitive markets.</p>
                        <a href="#" class="article-card-link">Read more →</a>
                    </div>
                </article>

                <article class="article-card">
                    <div class="article-card-image">Image</div>
                    <div class="article-card-content">
                        <span class="category-tag">Company News</span>
                        <h3>TDAI Named Leader in Auto Shop Software</h3>
                        <div class="article-card-meta">
                            <span>Dec 28, 2025</span>
                            <span>4 min</span>
                        </div>
                        <p class="article-card-excerpt">TorqueDesk AI recognized by industry analysts for innovation, customer satisfaction, and transformative impact on auto repair operations nationwide.</p>
                        <a href="#" class="article-card-link">Read more →</a>
                    </div>
                </article>

                <article class="article-card">
                    <div class="article-card-image">Image</div>
                    <div class="article-card-content">
                        <span class="category-tag">Tips & Tricks</span>
                        <h3>Maximizing Your Technician Scheduling</h3>
                        <div class="article-card-meta">
                            <span>Dec 15, 2025</span>
                            <span>6 min</span>
                        </div>
                        <p class="article-card-excerpt">Discover strategies to optimize tech assignments, reduce downtime, and improve shop productivity through intelligent resource allocation and scheduling.</p>
                        <a href="#" class="article-card-link">Read more →</a>
                    </div>
                </article>

                <article class="article-card">
                    <div class="article-card-image">Image</div>
                    <div class="article-card-content">
                        <span class="category-tag">Case Studies</span>
                        <h3>Multi-Location Success: ConnectCare Automotive</h3>
                        <div class="article-card-meta">
                            <span>Dec 1, 2025</span>
                            <span>8 min</span>
                        </div>
                        <p class="article-card-excerpt">Learn how a regional chain with 12 locations unified operations, improved communication, and scaled profitably with TDAI's enterprise features.</p>
                        <a href="#" class="article-card-link">Read more →</a>
                    </div>
                </article>
            </div>

            <aside class="popular-posts-sidebar">
                <h3>Popular Posts</h3>
                <div class="popular-posts-list">
                    <div class="popular-post-item">
                        <a href="#"><span class="popular-post-number">1</span>The Future of AI in Auto Repair</a>
                    </div>
                    <div class="popular-post-item">
                        <a href="#"><span class="popular-post-number">2</span>How Smith's Auto Doubled Revenue</a>
                    </div>
                    <div class="popular-post-item">
                        <a href="#"><span class="popular-post-number">3</span>Digital Inspections Guide</a>
                    </div>
                    <div class="popular-post-item">
                        <a href="#"><span class="popular-post-number">4</span>Why Auto Shops Need CRM</a>
                    </div>
                    <div class="popular-post-item">
                        <a href="#"><span class="popular-post-number">5</span>Maximizing Technician Scheduling</a>
                    </div>
                </div>
            </aside>
        </div>

        <section class="newsletter-section">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest tips, updates, and industry insights delivered weekly to your inbox.</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Enter your email" required>
                <button type="submit">Subscribe</button>
            </form>
        </section>
    </div>

<!-- SECTION DIVIDER -->
<div class="fancy-divider"></div>
<div class="next-page-cta">
      <div class="next-page-inner">
        <div class="next-page-label">Continue Exploring</div>
        <h2 class="next-page-title">Next: <span>Resources</span></h2>
        <p class="next-page-desc">Explore our resources</p>
        <a href="/resources" class="next-page-btn">
          <span class="btn-text">Explore Resources</span>
          <span class="btn-arrow">&rarr;</span>
        </a>
        <div class="page-dots"><a href="/" class="page-dot"></a><a href="/features" class="page-dot"></a><a href="/solutions" class="page-dot"></a><a href="/pricing" class="page-dot"></a><a href="/integrations" class="page-dot"></a><a href="/demo" class="page-dot"></a><a href="/customers" class="page-dot active"></a><a href="/resources" class="page-dot"></a><a href="/about" class="page-dot"></a><a href="/contact" class="page-dot"></a></div>
        <div class="page-counter-text">Page 7 of 10</div>
      </div>
    </div>` }} />
  );
}
