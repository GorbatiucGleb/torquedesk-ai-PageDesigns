import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrations | TorqueDesk AI',
};

export default function IntegrationsPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<style>
        /* Hero Section */
        .hero-integrations {
            background: linear-gradient(135deg, #081020 0%, #0F1C38 100%);
            padding: 6rem 2rem;
            text-align: center;
            
        }

        .hero-integrations h1 {
            font-size: 3rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 1rem;
            letter-spacing: -0.5px;
        }

        .hero-integrations p {
            font-size: 1.2rem;
            color: #B0BCCC;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }

        /* How Integrations Work Section */
        .how-works-section {
            background: var(--navy);
            padding: 4rem 2rem;
            border-bottom: 1px solid var(--subtle);
        }

        .how-works-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .how-works-title {
            text-align: center;
            margin-bottom: 3rem;
        }

        .how-works-title h2 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.8rem;
        }

        .how-works-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }

        .step-card {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 2.5rem;
            text-align: center;
            position: relative;
            transition: all 0.3s;
        }

        .step-card:hover {
            border-color: var(--accent);
            transform: translateY(-4px);
        }

        .step-number {
            width: 50px;
            height: 50px;
            background: var(--accent);
            color: var(--white);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0 auto 1.5rem;
        }

        .step-card h3 {
            color: var(--white);
            font-size: 1.1rem;
            margin-bottom: 0.8rem;
            font-weight: 600;
        }

        .step-card p {
            color: var(--light-gray);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        /* Featured Integrations Section */
        .featured-section {
            padding: 5rem 2rem;
            background: linear-gradient(135deg, rgba(45, 156, 219, 0.05), rgba(59,130,196, 0.03));
        }

        .featured-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .featured-title {
            text-align: center;
            margin-bottom: 3rem;
        }

        .featured-title h2 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 0.8rem;
        }

        .featured-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .featured-card {
            background: var(--card);
            border: 2px solid var(--accent);
            border-radius: 12px;
            padding: 2.5rem;
            position: relative;
            overflow: visible;
            transition: all 0.3s;
        }

        .featured-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 50px rgba(45, 156, 219, 0.2);
        }

        .featured-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--accent), var(--secondary));
            opacity: 1;
        }

        .featured-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.8rem;
            color: var(--white);
            margin-bottom: 1.5rem;
        }

        .featured-card h3 {
            color: var(--white);
            font-size: 1.3rem;
            margin-bottom: 0.8rem;
            font-weight: 600;
        }

        .featured-card p {
            color: var(--light-gray);
            font-size: 0.95rem;
            line-height: 1.7;
            margin-bottom: 1.5rem;
        }

        .featured-features {
            list-style: none;
            margin-bottom: 2rem;
        }

        .featured-features li {
            color: var(--light-gray);
            font-size: 0.9rem;
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .featured-features li::before {
            content: '';
            width: 4px;
            height: 4px;
            background: var(--secondary);
            border-radius: 50%;
            flex-shrink: 0;
        }

        .featured-btn {
            display: inline-block;
            padding: 0.8rem 1.6rem;
            background: var(--accent);
            color: var(--white);
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            transition: all 0.3s;
            font-size: 0.95rem;
        }

        .featured-btn:hover {
            background: var(--accent-hover);
            transform: translateY(-2px);
        }

        /* Integration Categories Section */
        .categories-section {
            padding: 5rem 2rem;
            background: var(--navy);
        }

        .categories-container {
            max-width: 1300px;
            margin: 0 auto;
        }

        .categories-title {
            text-align: center;
            margin-bottom: 3rem;
        }

        .categories-title h2 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 0.8rem;
        }

        .category-section {
            margin-bottom: 4rem;
        }

        .category-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid var(--subtle);
        }

        .category-icon {
            width: 40px;
            height: 40px;
            background: rgba(45, 156, 219, 0.2);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent);
            font-weight: 700;
            font-size: 1.2rem;
        }

        .category-header h3 {
            color: var(--white);
            font-size: 1.3rem;
            font-weight: 600;
            margin: 0;
        }

        .integration-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
        }

        .integration-card {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 2rem;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            cursor: pointer;
        }

        .integration-card:hover {
            border-color: var(--accent);
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(45, 156, 219, 0.1);
        }

        .integration-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 800;
    margin: 0 auto 10px;
    color: #fff;
    letter-spacing: -0.5px;
}

        .integration-card h4 {
            font-size: 1.1rem;
            color: #fff;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .integration-tag {
            display: inline-block;
            padding: 0.4rem 0.8rem;
            background: rgba(45, 156, 219, 0.15);
            color: var(--secondary);
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 1rem;
            width: fit-content;
        }

        .integration-desc {
            color: #8A94A6;
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 1.5rem;
            flex-grow: 1;
        }

        .integration-connect {
            color: var(--accent);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
        }

        .integration-connect:hover {
            color: var(--secondary);
            gap: 0.8rem;
        }

        .integration-connect::after {
            content: "→";
        }

        /* How It Works Info */
        .integration-info-section {
            padding: 4rem 2rem;
            background: linear-gradient(135deg, var(--hero), var(--dark-blue));
            border-top: 1px solid var(--subtle);
            border-bottom: 1px solid var(--subtle);
        }

        .integration-info-container {
            max-width: 900px;
            margin: 0 auto;
        }

        .integration-info-title {
            text-align: center;
            margin-bottom: 2rem;
        }

        .integration-info-title h2 {
            font-size: 1.8rem;
            color: var(--white);
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .integration-info-content {
            background: rgba(12, 20, 38, 0.6);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 2rem;
            backdrop-filter: blur(10px);
        }

        .integration-info-content p {
            color: var(--light-gray);
            font-size: 1rem;
            line-height: 1.8;
            margin-bottom: 1rem;
        }

        /* API Section */
        .api-section {
            background: var(--navy);
            padding: 4rem 2rem;
            border-top: 1px solid var(--subtle);
            border-bottom: 1px solid var(--subtle);
        }

        .api-content {
            max-width: 900px;
            margin: 0 auto;
        }

        .api-section h2 {
            font-size: 2rem;
            color: #fff;
            margin-bottom: 1.5rem;
            font-weight: 700;
            text-align: center;
        }

        .api-description {
            color: #B0BCCC;
            font-size: 1rem;
            line-height: 1.8;
            margin-bottom: 2rem;
            text-align: center;
        }

        .api-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .api-feature {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
        }

        .api-feature-icon {
            width: 40px;
            height: 40px;
            background: var(--accent);
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: 700;
            flex-shrink: 0;
            font-size: 1.2rem;
        }

        .api-feature h4 {
            color: #fff;
            font-size: 0.95rem;
            font-weight: 600;
            margin-bottom: 0.3rem;
        }

        .api-feature p {
            color: #8A94A6;
            font-size: 0.85rem;
            line-height: 1.5;
        }

        .api-link {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: var(--accent);
            color: #fff;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            transition: all 0.3s ease;
            margin: 0 auto;
            display: block;
            width: fit-content;
        }

        .api-link:hover {
            background: var(--secondary);
            color: var(--navy);
        }

        /* Request Integration Section */
        .request-section {
            padding: 4rem 2rem;
            max-width: 900px;
            margin: 0 auto;
            background: var(--navy);
        }

        .request-section h2 {
            font-size: 2rem;
            color: #fff;
            margin-bottom: 2rem;
            font-weight: 700;
            text-align: center;
        }

        .request-form {
            display: grid;
            gap: 1.5rem;
        }

        .form-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        .form-group label {
            color: #fff;
            font-weight: 500;
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 6px;
            padding: 0.75rem 1rem;
            color: #fff;
            font-family: inherit;
            font-size: 0.95rem;
            transition: all 0.3s ease;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: #666;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--accent);
            box-shadow: 0 0 0 3px rgba(45, 156, 219, 0.1);
        }

        .form-group textarea {
            grid-column: 1 / -1;
            min-height: 120px;
            resize: vertical;
        }

        .submit-btn {
            grid-column: 1 / -1;
            padding: 1rem 2rem;
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            color: #fff;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(45, 156, 219, 0.3);
        }

        /* CTA Section */
        .cta-section {
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            padding: 3rem 2rem;
            text-align: center;
            margin-top: 4rem;
            
        }

        .cta-section h2 {
            color: var(--navy);
            font-size: 2rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .cta-section p {
            color: var(--navy);
            font-size: 1.05rem;
            margin-bottom: 2rem;
            opacity: 0.95;
        }

        .cta-btn {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: var(--navy);
            color: var(--accent);
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            transition: all 0.3s ease;
            font-size: 1rem;
        }

        .cta-btn:hover {
            background: var(--deep);
            color: var(--secondary);
        }

        @media (max-width: 768px) {
            .hero-integrations h1 {
                font-size: 2rem;
            }

            .integration-grid {
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 1.5rem;
            }

            .featured-grid {
                grid-template-columns: 1fr;
            }

            .how-works-steps {
                grid-template-columns: 1fr;
            }

            .cta-section h2 {
                font-size: 1.5rem;
            }

            .categories-title h2,
            .featured-title h2,
            .how-works-title h2 {
                font-size: 1.6rem;
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

/* ============== API DOCUMENTATION STYLES ============== */
.api-hero {
    background: linear-gradient(135deg, var(--hero) 0%, var(--dark-blue) 100%);
    padding: 80px 20px;
    text-align: center;
}

.api-hero h1 {
    font-size: 3.5rem;
    color: #fff;
    margin: 0 0 15px 0;
    font-weight: 700;
}

.api-hero p {
    font-size: 1.2rem;
    color: var(--light-gray);
    max-width: 700px;
    margin: 0 auto;
}

.api-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px;
}

.quickstart-section {
    margin-bottom: 100px;
}

.section-title {
    font-size: 2.2rem;
    color: #fff;
    margin: 0 0 40px 0;
}

.quickstart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
}

.quickstart-step {
    background: var(--card);
    border: 1px solid var(--subtle);
    border-radius: 12px;
    padding: 35px;
    transition: all 0.3s ease;
}

.quickstart-step:hover {
    border-color: var(--accent);
    background: linear-gradient(135deg, var(--dark-blue) 0%, var(--card) 100%);
}

.quickstart-step .step-number {
    display: inline-flex;
    width: 40px;
    height: 40px;
    background: var(--accent);
    color: #fff;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 20px;
}

.quickstart-step h3 {
    font-size: 1.3rem;
    color: #fff;
    margin: 0 0 15px 0;
}

.quickstart-step p {
    color: var(--gray);
    font-size: 0.95rem;
    margin-bottom: 20px;
    line-height: 1.6;
}

.code-block {
    background: var(--deep);
    border: 1px solid var(--subtle);
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    overflow-x: auto;
    font-family: Consolas, Monaco, 'Courier New', monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--light-gray);
}

.code-block code {
    display: block;
}

.code-keyword {
    color: var(--accent);
    font-weight: 600;
}

.code-string {
    color: var(--secondary);
}

.code-comment {
    color: var(--gray);
}

.code-property {
    color: var(--accent);
}

.endpoints-section {
    margin-bottom: 100px;
}

.endpoints-header {
    margin-bottom: 40px;
}

.endpoints-header p {
    color: var(--light-gray);
    font-size: 1rem;
    line-height: 1.6;
    margin: 0 0 30px 0;
}

.endpoints-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--card);
    border: 1px solid var(--subtle);
    border-radius: 12px;
    overflow: visible;
}

.endpoints-table thead {
    background: var(--dark-blue);
}

.endpoints-table th {
    padding: 20px;
    text-align: left;
    color: #fff;
    font-weight: 600;
    border-bottom: 2px solid var(--subtle);
}

.endpoints-table td {
    padding: 18px 20px;
    border-bottom: 1px solid var(--subtle);
    color: var(--light-gray);
}

.endpoints-table tbody tr:hover {
    background: var(--dark-blue);
}

.endpoints-table tbody tr:last-child td {
    border-bottom: none;
}

.method-badge {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.method-get {
    background: rgba(59,130,196, 0.15);
    color: var(--secondary);
    border: 1px solid var(--secondary);
}

.method-post {
    background: rgba(45, 156, 219, 0.15);
    color: var(--accent);
    border: 1px solid var(--accent);
}

.endpoint-path {
    font-family: Consolas, Monaco, 'Courier New', monospace;
    color: #fff;
    font-weight: 500;
}

.api-sections {
    margin-bottom: 100px;
}

.api-section-group {
    background: var(--card);
    border: 1px solid var(--subtle);
    border-radius: 12px;
    padding: 40px;
    margin-bottom: 30px;
}

.api-section-group h3 {
    font-size: 1.3rem;
    color: #fff;
    margin: 0 0 15px 0;
}

.api-section-group p {
    color: var(--gray);
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0 0 20px 0;
}

.api-endpoints-list {
    display: grid;
    gap: 15px;
}

.api-endpoint-item {
    background: var(--navy);
    border-left: 3px solid var(--accent);
    padding: 15px 20px;
    border-radius: 4px;
}

.api-endpoint-item strong {
    color: #fff;
    font-family: Consolas, Monaco, 'Courier New', monospace;
}

.api-endpoint-item p {
    color: var(--gray);
    font-size: 0.9rem;
    margin: 5px 0 0 0;
}

.status-indicator {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    background: rgba(59,130,196, 0.1);
    border: 1px solid var(--secondary);
    border-radius: 6px;
    color: var(--secondary);
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 30px;
}

.status-dot {
    width: 8px;
    height: 8px;
    background: var(--secondary);
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.sdks-section {
    margin-bottom: 100px;
}

.sdks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 25px;
}

.sdk-card {
    background: var(--card);
    border: 1px solid var(--subtle);
    border-radius: 12px;
    padding: 30px;
    text-align: center;
    transition: all 0.3s ease;
}

.sdk-card:hover {
    border-color: var(--secondary);
    background: linear-gradient(135deg, var(--dark-blue) 0%, var(--card) 100%);
    transform: translateY(-5px);
}

.sdk-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sdk-card h3 {
    font-size: 1.2rem;
    color: #fff;
    margin: 0 0 10px 0;
}

.sdk-card p {
    color: var(--gray);
    font-size: 0.9rem;
    margin: 0 0 20px 0;
    line-height: 1.5;
}

.sdk-link {
    display: inline-block;
    color: var(--secondary);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.sdk-link:hover {
    color: var(--accent);
}

.rate-limits-info {
    background: var(--card);
    border: 1px solid var(--subtle);
    border-radius: 12px;
    padding: 40px;
    margin-bottom: 100px;
}

.rate-limits-info h3 {
    font-size: 1.3rem;
    color: #fff;
    margin: 0 0 20px 0;
}

.rate-limits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.rate-limit-item {
    background: var(--navy);
    border: 1px solid var(--subtle);
    padding: 20px;
    border-radius: 8px;
}

.rate-limit-item strong {
    color: var(--secondary);
    display: block;
    margin-bottom: 8px;
}

.rate-limit-item p {
    color: var(--gray);
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.6;
}

.webhooks-section {
    background: linear-gradient(135deg, var(--dark-blue) 0%, var(--subtle) 100%);
    border: 1px solid var(--subtle);
    border-radius: 12px;
    padding: 50px 40px;
    margin-bottom: 100px;
}

.webhooks-section h2 {
    font-size: 2rem;
    color: #fff;
    margin: 0 0 15px 0;
}

.webhooks-section > p {
    color: var(--light-gray);
    margin-bottom: 30px;
    line-height: 1.6;
}

.webhooks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.webhook-event {
    background: var(--card);
    padding: 20px;
    border-radius: 8px;
    border: 1px solid var(--subtle);
    transition: all 0.3s ease;
}

.webhook-event:hover {
    border-color: var(--secondary);
}

.webhook-event-name {
    font-family: Consolas, Monaco, 'Courier New', monospace;
    color: var(--secondary);
    font-weight: 600;
    font-size: 0.95rem;
    margin: 0;
}

.webhook-event-desc {
    color: var(--gray);
    font-size: 0.85rem;
    margin: 8px 0 0 0;
}

@media (max-width: 768px) {
    .api-hero h1 {
        font-size: 2.5rem;
    }

    .quickstart-grid {
        grid-template-columns: 1fr;
    }

    .code-block {
        font-size: 0.85rem;
        padding: 15px;
    }

    .endpoints-table {
        font-size: 0.9rem;
    }

    .endpoints-table th,
    .endpoints-table td {
        padding: 12px;
    }

    .webhooks-section {
        padding: 40px 20px;
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
<div class="hero-integrations">
        <h1>50+ Integrations That Work Seamlessly</h1>
        <p>Connect TorqueDesk AI with the tools you already use. Build a unified workflow that keeps your shop running at peak efficiency.</p>
    </div>

    <!-- HOW INTEGRATIONS WORK -->
    <section class="how-works-section">
        <div class="how-works-container">
            <div class="how-works-title">
                <h2>How Integrations Work</h2>
            </div>
            <div class="how-works-steps">
                <div class="step-card">
                    <div class="step-number">1</div>
                    <h3>Connect</h3>
                    <p>Select the tool you want to integrate and authenticate with your credentials. It takes just minutes to establish a secure connection.</p>
                </div>
                <div class="step-card">
                    <div class="step-number">2</div>
                    <h3>Sync</h3>
                    <p>Your data automatically synchronizes in real-time between TorqueDesk AI and your connected applications. No manual updates needed.</p>
                </div>
                <div class="step-card">
                    <div class="step-number">3</div>
                    <h3>Automate</h3>
                    <p>Eliminate manual workflows and let your systems work together automatically. Save hours every week with intelligent automation.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- FEATURED INTEGRATIONS -->
    <section class="featured-section">
        <div class="featured-container">
            <div class="featured-title">
                <h2>Featured Integrations</h2>
                <p>Our most popular connections that transform how shops operate</p>
            </div>
            <div class="featured-grid">
                <div class="featured-card">
                    <div class="featured-icon">QB</div>
                    <h3>QuickBooks</h3>
                    <p>Sync all your financial data, invoices, and payments with QuickBooks Online or Desktop. Keep your accounting perfectly aligned with your operations.</p>
                    <ul class="featured-features">
                        <li>Real-time invoice sync</li>
                        <li>Automatic payment recording</li>
                        <li>Financial reporting</li>
                        <li>Expense tracking</li>
                    </ul>
                    <a href="#" class="featured-btn">Learn More</a>
                </div>

                <div class="featured-card">
                    <div class="featured-icon">PT</div>
                    <h3>PartsTech</h3>
                    <p>Direct access to real-time parts inventory, pricing, and availability. Manage your parts ordering and stock levels without leaving TDAI.</p>
                    <ul class="featured-features">
                        <li>Live inventory sync</li>
                        <li>Pricing updates</li>
                        <li>Order management</li>
                        <li>Stock alerts</li>
                    </ul>
                    <a href="#" class="featured-btn">Learn More</a>
                </div>

                <div class="featured-card">
                    <div class="featured-icon">ST</div>
                    <h3>Stripe</h3>
                    <p>Accept payments directly through your invoices. Process credit cards, digital wallets, and bank transfers with industry-leading security.</p>
                    <ul class="featured-features">
                        <li>Direct payment processing</li>
                        <li>Multiple payment methods</li>
                        <li>Secure transactions</li>
                        <li>Automated reconciliation</li>
                    </ul>
                    <a href="#" class="featured-btn">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <!-- ALL INTEGRATIONS BY CATEGORY -->
    <section class="categories-section">
        <div class="categories-container">
            <div class="categories-title">
                <h2>Browse All Integrations</h2>
                <p>Explore our complete library organized by category</p>
            </div>

            <!-- ACCOUNTING -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#2CA01C">$</div>
                    <h3>Accounting</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#2CA01C">QB</div>
                        <h4>QuickBooks</h4>
                        <span class="integration-tag">Accounting</span>
                        <p class="integration-desc">Sync invoices, payments, and financial reports directly with QuickBooks Online or Desktop.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#13B5EA">XE</div>
                        <h4>Xero</h4>
                        <span class="integration-tag">Accounting</span>
                        <p class="integration-desc">Real-time sync of invoices, expenses, and financial data with cloud-based accounting platform.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#00B300">FB</div>
                        <h4>FreshBooks</h4>
                        <span class="integration-tag">Accounting</span>
                        <p class="integration-desc">Automated invoice creation and expense tracking with seamless FreshBooks integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#1C4587">WV</div>
                        <h4>Wave</h4>
                        <span class="integration-tag">Accounting</span>
                        <p class="integration-desc">Free accounting sync for invoices, receipts, and financial reports in real-time.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- PAYMENTS -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#635BFF">PAY</div>
                    <h3>Payments</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#635BFF">ST</div>
                        <h4>Stripe</h4>
                        <span class="integration-tag">Payments</span>
                        <p class="integration-desc">Accept cards, digital wallets, and bank transfers with Stripe's robust payment processing.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#006AFF">SQ</div>
                        <h4>Square</h4>
                        <span class="integration-tag">Payments</span>
                        <p class="integration-desc">Seamless point-of-sale payments and transaction management through Square integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#003087">PP</div>
                        <h4>PayPal</h4>
                        <span class="integration-tag">Payments</span>
                        <p class="integration-desc">Global payment solutions with PayPal's trusted platform for secure transactions.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#4A4AF4">AF</div>
                        <h4>Affirm</h4>
                        <span class="integration-tag">Payments</span>
                        <p class="integration-desc">Offer flexible financing options to customers with Affirm's buy-now-pay-later solution.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- PARTS SUPPLIERS -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#FF6B00">CFG</div>
                    <h3>Parts Suppliers</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FF6B00">PT</div>
                        <h4>PartsTech</h4>
                        <span class="integration-tag">Parts</span>
                        <p class="integration-desc">Real-time parts inventory and pricing with direct integration to major parts suppliers.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#C62828">WP</div>
                        <h4>WorldPac</h4>
                        <span class="integration-tag">Parts</span>
                        <p class="integration-desc">Access WorldPac's extensive parts catalog and pricing directly in your TDAI dashboard.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#1565C0">NX</div>
                        <h4>Nexpart</h4>
                        <span class="integration-tag">Parts</span>
                        <p class="integration-desc">Unified parts management platform with automatic inventory synchronization.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#D32F2F">AZ</div>
                        <h4>AutoZone Pro</h4>
                        <span class="integration-tag">Parts</span>
                        <p class="integration-desc">Professional parts ordering with real-time stock and pricing from AutoZone Pro network.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#0E7C3A">OR</div>
                        <h4>O'Reilly</h4>
                        <span class="integration-tag">Parts</span>
                        <p class="integration-desc">Complete access to O'Reilly's inventory, pricing, and online ordering system.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- VEHICLE DATA -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#E31837">AUTO</div>
                    <h3>Vehicle Data</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#E31837">CF</div>
                        <h4>CARFAX</h4>
                        <span class="integration-tag">Vehicle Data</span>
                        <p class="integration-desc">Access vehicle history reports and service records directly within TDAI.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FF8F00">AC</div>
                        <h4>AutoCheck</h4>
                        <span class="integration-tag">Vehicle Data</span>
                        <p class="integration-desc">Real-time access to vehicle information and service history data.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#2196F3">AD</div>
                        <h4>AllData</h4>
                        <span class="integration-tag">Vehicle Data</span>
                        <p class="integration-desc">OEM service information and diagnostic data for all vehicle makes and models.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#424242">MT</div>
                        <h4>Mitchell</h4>
                        <span class="integration-tag">Vehicle Data</span>
                        <p class="integration-desc">Comprehensive repair information, estimates, and technical data integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- COMMUNICATION -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#F22F46">Chat</div>
                    <h3>Communication</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#F22F46">TW</div>
                        <h4>Twilio</h4>
                        <span class="integration-tag">Communication</span>
                        <p class="integration-desc">Send automated SMS and voice messages to customers for appointments and updates.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FFE01B;color:#333">MC</div>
                        <h4>Mailchimp</h4>
                        <span class="integration-tag">Communication</span>
                        <p class="integration-desc">Email marketing campaigns with automated customer segmentation and messaging.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#3498DB">CC</div>
                        <h4>Constant Contact</h4>
                        <span class="integration-tag">Communication</span>
                        <p class="integration-desc">Create and manage email campaigns with integrated customer lists and analytics.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#1A82E2">SG</div>
                        <h4>SendGrid</h4>
                        <span class="integration-tag">Communication</span>
                        <p class="integration-desc">Reliable email delivery for transactional and marketing messages at scale.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- CALENDAR -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#4285F4">CAL</div>
                    <h3>Calendar & Scheduling</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#4285F4">GC</div>
                        <h4>Google Calendar</h4>
                        <span class="integration-tag">Calendar</span>
                        <p class="integration-desc">Sync appointments and scheduling directly with Google Calendar for unified calendar management.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#0078D4">OC</div>
                        <h4>Outlook</h4>
                        <span class="integration-tag">Calendar</span>
                        <p class="integration-desc">Two-way sync with Outlook Calendar for seamless scheduling and appointment management.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FF3B30">AC</div>
                        <h4>Apple Calendar</h4>
                        <span class="integration-tag">Calendar</span>
                        <p class="integration-desc">iOS Calendar sync for managing appointments on Apple devices.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- STORAGE -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#0F9D58">CLOUD</div>
                    <h3>Cloud Storage</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#0F9D58">GD</div>
                        <h4>Google Drive</h4>
                        <span class="integration-tag">Storage</span>
                        <p class="integration-desc">Store and organize all your shop documents, photos, and files in Google Drive.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#0061FF">DB</div>
                        <h4>Dropbox</h4>
                        <span class="integration-tag">Storage</span>
                        <p class="integration-desc">Seamless file syncing and backup with Dropbox integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#0061D5">BX</div>
                        <h4>Box</h4>
                        <span class="integration-tag">Storage</span>
                        <p class="integration-desc">Enterprise file management and collaboration with Box integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- CRM -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#00A1E0">CRM</div>
                    <h3>CRM & Customer Management</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#00A1E0">SF</div>
                        <h4>Salesforce</h4>
                        <span class="integration-tag">CRM</span>
                        <p class="integration-desc">Full Salesforce integration for advanced customer relationship management.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FF7A59">HS</div>
                        <h4>HubSpot</h4>
                        <span class="integration-tag">CRM</span>
                        <p class="integration-desc">Unified customer data and sales pipeline management with HubSpot.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#E42527">ZH</div>
                        <h4>Zoho</h4>
                        <span class="integration-tag">CRM</span>
                        <p class="integration-desc">Complete Zoho CRM suite for customer management and sales automation.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- MARKETING -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#4285F4">API</div>
                    <h3>Marketing & Advertising</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#4285F4">GA</div>
                        <h4>Google Ads</h4>
                        <span class="integration-tag">Marketing</span>
                        <p class="integration-desc">Track and manage Google Ads campaigns with integrated analytics and reporting.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#1877F2">FA</div>
                        <h4>Facebook Ads</h4>
                        <span class="integration-tag">Marketing</span>
                        <p class="integration-desc">Manage Facebook advertising with conversion tracking and audience targeting integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FF1A1A">YP</div>
                        <h4>Yelp</h4>
                        <span class="integration-tag">Marketing</span>
                        <p class="integration-desc">Manage your Yelp business profile and reviews directly from TDAI.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#4285F4">GB</div>
                        <h4>Google Business Profile</h4>
                        <span class="integration-tag">Marketing</span>
                        <p class="integration-desc">Sync reviews, posts, and business information with Google Business Profile.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- FLEET MANAGEMENT -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#1B5E20">AUTO</div>
                    <h3>Fleet Management</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#1B5E20">FL</div>
                        <h4>Fleetio</h4>
                        <span class="integration-tag">Fleet</span>
                        <p class="integration-desc">Complete fleet management integration for maintenance tracking and vehicle management.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FF6F00">GP</div>
                        <h4>GPS Trackit</h4>
                        <span class="integration-tag">Fleet</span>
                        <p class="integration-desc">Real-time vehicle tracking and fleet analytics integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#00B0FF">GT</div>
                        <h4>Geotab</h4>
                        <span class="integration-tag">Fleet</span>
                        <p class="integration-desc">Advanced telematics and vehicle diagnostic data integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </section>

    <!-- FEATURED INTEGRATIONS -->
    <section class="featured-section">
        <div class="featured-container">
            <div class="featured-title">
                <h2>Featured Integrations</h2>
                <p>Our most popular connections that transform how shops operate</p>
            </div>
            <div class="featured-grid">
                <div class="featured-card">
                    <div class="featured-icon">QB</div>
                    <h3>QuickBooks</h3>
                    <p>Sync all your financial data, invoices, and payments with QuickBooks Online or Desktop. Keep your accounting perfectly aligned with your operations.</p>
                    <ul class="featured-features">
                        <li>Real-time invoice sync</li>
                        <li>Automatic payment recording</li>
                        <li>Financial reporting</li>
                        <li>Expense tracking</li>
                    </ul>
                    <a href="#" class="featured-btn">Learn More</a>
                </div>

                <div class="featured-card">
                    <div class="featured-icon">PT</div>
                    <h3>PartsTech</h3>
                    <p>Direct access to real-time parts inventory, pricing, and availability. Manage your parts ordering and stock levels without leaving TDAI.</p>
                    <ul class="featured-features">
                        <li>Live inventory sync</li>
                        <li>Pricing updates</li>
                        <li>Order management</li>
                        <li>Stock alerts</li>
                    </ul>
                    <a href="#" class="featured-btn">Learn More</a>
                </div>

                <div class="featured-card">
                    <div class="featured-icon">ST</div>
                    <h3>Stripe</h3>
                    <p>Accept payments directly through your invoices. Process credit cards, digital wallets, and bank transfers with industry-leading security.</p>
                    <ul class="featured-features">
                        <li>Direct payment processing</li>
                        <li>Multiple payment methods</li>
                        <li>Secure transactions</li>
                        <li>Automated reconciliation</li>
                    </ul>
                    <a href="#" class="featured-btn">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <!-- ALL INTEGRATIONS BY CATEGORY -->
    <section class="categories-section">
        <div class="categories-container">
            <div class="categories-title">
                <h2>Browse All Integrations</h2>
                <p>Explore our complete library organized by category</p>
            </div>

            <!-- ACCOUNTING -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#2CA01C">$</div>
                    <h3>Accounting</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#2CA01C">QB</div>
                        <h4>QuickBooks</h4>
                        <span class="integration-tag">Accounting</span>
                        <p class="integration-desc">Sync invoices, payments, and financial reports directly with QuickBooks Online or Desktop.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#13B5EA">XE</div>
                        <h4>Xero</h4>
                        <span class="integration-tag">Accounting</span>
                        <p class="integration-desc">Real-time sync of invoices, expenses, and financial data with cloud-based accounting platform.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#00B300">FB</div>
                        <h4>FreshBooks</h4>
                        <span class="integration-tag">Accounting</span>
                        <p class="integration-desc">Automated invoice creation and expense tracking with seamless FreshBooks integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#1C4587">WV</div>
                        <h4>Wave</h4>
                        <span class="integration-tag">Accounting</span>
                        <p class="integration-desc">Free accounting sync for invoices, receipts, and financial reports in real-time.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- PAYMENTS -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#635BFF">PAY</div>
                    <h3>Payments</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#635BFF">ST</div>
                        <h4>Stripe</h4>
                        <span class="integration-tag">Payments</span>
                        <p class="integration-desc">Accept cards, digital wallets, and bank transfers with Stripe's robust payment processing.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#006AFF">SQ</div>
                        <h4>Square</h4>
                        <span class="integration-tag">Payments</span>
                        <p class="integration-desc">Seamless point-of-sale payments and transaction management through Square integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#003087">PP</div>
                        <h4>PayPal</h4>
                        <span class="integration-tag">Payments</span>
                        <p class="integration-desc">Global payment solutions with PayPal's trusted platform for secure transactions.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#4A4AF4">AF</div>
                        <h4>Affirm</h4>
                        <span class="integration-tag">Payments</span>
                        <p class="integration-desc">Offer flexible financing options to customers with Affirm's buy-now-pay-later solution.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- PARTS SUPPLIERS -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#FF6B00">CFG</div>
                    <h3>Parts Suppliers</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FF6B00">PT</div>
                        <h4>PartsTech</h4>
                        <span class="integration-tag">Parts</span>
                        <p class="integration-desc">Real-time parts inventory and pricing with direct integration to major parts suppliers.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#C62828">WP</div>
                        <h4>WorldPac</h4>
                        <span class="integration-tag">Parts</span>
                        <p class="integration-desc">Access WorldPac's extensive parts catalog and pricing directly in your TDAI dashboard.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#1565C0">NX</div>
                        <h4>Nexpart</h4>
                        <span class="integration-tag">Parts</span>
                        <p class="integration-desc">Unified parts management platform with automatic inventory synchronization.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#D32F2F">AZ</div>
                        <h4>AutoZone Pro</h4>
                        <span class="integration-tag">Parts</span>
                        <p class="integration-desc">Professional parts ordering with real-time stock and pricing from AutoZone Pro network.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#0E7C3A">OR</div>
                        <h4>O'Reilly</h4>
                        <span class="integration-tag">Parts</span>
                        <p class="integration-desc">Complete access to O'Reilly's inventory, pricing, and online ordering system.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- VEHICLE DATA -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#E31837">AUTO</div>
                    <h3>Vehicle Data</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#E31837">CF</div>
                        <h4>CARFAX</h4>
                        <span class="integration-tag">Vehicle Data</span>
                        <p class="integration-desc">Access vehicle history reports and service records directly within TDAI.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FF8F00">AC</div>
                        <h4>AutoCheck</h4>
                        <span class="integration-tag">Vehicle Data</span>
                        <p class="integration-desc">Real-time access to vehicle information and service history data.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#2196F3">AD</div>
                        <h4>AllData</h4>
                        <span class="integration-tag">Vehicle Data</span>
                        <p class="integration-desc">OEM service information and diagnostic data for all vehicle makes and models.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#424242">MT</div>
                        <h4>Mitchell</h4>
                        <span class="integration-tag">Vehicle Data</span>
                        <p class="integration-desc">Comprehensive repair information, estimates, and technical data integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- COMMUNICATION -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#F22F46">Chat</div>
                    <h3>Communication</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#F22F46">TW</div>
                        <h4>Twilio</h4>
                        <span class="integration-tag">Communication</span>
                        <p class="integration-desc">Send automated SMS and voice messages to customers for appointments and updates.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FFE01B;color:#333">MC</div>
                        <h4>Mailchimp</h4>
                        <span class="integration-tag">Communication</span>
                        <p class="integration-desc">Email marketing campaigns with automated customer segmentation and messaging.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#3498DB">CC</div>
                        <h4>Constant Contact</h4>
                        <span class="integration-tag">Communication</span>
                        <p class="integration-desc">Create and manage email campaigns with integrated customer lists and analytics.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#1A82E2">SG</div>
                        <h4>SendGrid</h4>
                        <span class="integration-tag">Communication</span>
                        <p class="integration-desc">Reliable email delivery for transactional and marketing messages at scale.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- CALENDAR -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#4285F4">CAL</div>
                    <h3>Calendar & Scheduling</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#4285F4">GC</div>
                        <h4>Google Calendar</h4>
                        <span class="integration-tag">Calendar</span>
                        <p class="integration-desc">Sync appointments and scheduling directly with Google Calendar for unified calendar management.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#0078D4">OC</div>
                        <h4>Outlook</h4>
                        <span class="integration-tag">Calendar</span>
                        <p class="integration-desc">Two-way sync with Outlook Calendar for seamless scheduling and appointment management.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FF3B30">AC</div>
                        <h4>Apple Calendar</h4>
                        <span class="integration-tag">Calendar</span>
                        <p class="integration-desc">iOS Calendar sync for managing appointments on Apple devices.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- STORAGE -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#0F9D58">CLOUD</div>
                    <h3>Cloud Storage</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#0F9D58">GD</div>
                        <h4>Google Drive</h4>
                        <span class="integration-tag">Storage</span>
                        <p class="integration-desc">Store and organize all your shop documents, photos, and files in Google Drive.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#0061FF">DB</div>
                        <h4>Dropbox</h4>
                        <span class="integration-tag">Storage</span>
                        <p class="integration-desc">Seamless file syncing and backup with Dropbox integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#0061D5">BX</div>
                        <h4>Box</h4>
                        <span class="integration-tag">Storage</span>
                        <p class="integration-desc">Enterprise file management and collaboration with Box integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- CRM -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#00A1E0">CRM</div>
                    <h3>CRM & Customer Management</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#00A1E0">SF</div>
                        <h4>Salesforce</h4>
                        <span class="integration-tag">CRM</span>
                        <p class="integration-desc">Full Salesforce integration for advanced customer relationship management.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FF7A59">HS</div>
                        <h4>HubSpot</h4>
                        <span class="integration-tag">CRM</span>
                        <p class="integration-desc">Unified customer data and sales pipeline management with HubSpot.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#E42527">ZH</div>
                        <h4>Zoho</h4>
                        <span class="integration-tag">CRM</span>
                        <p class="integration-desc">Complete Zoho CRM suite for customer management and sales automation.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- MARKETING -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#4285F4">SDK</div>
                    <h3>Marketing & Advertising</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#4285F4">GA</div>
                        <h4>Google Ads</h4>
                        <span class="integration-tag">Marketing</span>
                        <p class="integration-desc">Track and manage Google Ads campaigns with integrated analytics and reporting.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#1877F2">FA</div>
                        <h4>Facebook Ads</h4>
                        <span class="integration-tag">Marketing</span>
                        <p class="integration-desc">Manage Facebook advertising with conversion tracking and audience targeting integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FF1A1A">YP</div>
                        <h4>Yelp</h4>
                        <span class="integration-tag">Marketing</span>
                        <p class="integration-desc">Manage your Yelp business profile and reviews directly from TDAI.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#4285F4">GB</div>
                        <h4>Google Business Profile</h4>
                        <span class="integration-tag">Marketing</span>
                        <p class="integration-desc">Sync reviews, posts, and business information with Google Business Profile.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>

            <!-- FLEET MANAGEMENT -->
            <div class="category-section">
                <div class="category-header">
                    <div class="category-icon" style="background:#1B5E20">AUTO</div>
                    <h3>Fleet Management</h3>
                </div>
                <div class="integration-grid">
                    <div class="integration-card">
                        <div class="integration-icon" style="background:#1B5E20">FL</div>
                        <h4>Fleetio</h4>
                        <span class="integration-tag">Fleet</span>
                        <p class="integration-desc">Complete fleet management integration for maintenance tracking and vehicle management.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#FF6F00">GP</div>
                        <h4>GPS Trackit</h4>
                        <span class="integration-tag">Fleet</span>
                        <p class="integration-desc">Real-time vehicle tracking and fleet analytics integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>

                    <div class="integration-card">
                        <div class="integration-icon" style="background:#00B0FF">GT</div>
                        <h4>Geotab</h4>
                        <span class="integration-tag">Fleet</span>
                        <p class="integration-desc">Advanced telematics and vehicle diagnostic data integration.</p>
                        <a href="#" class="integration-connect">Connect</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

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
                    <div class="sdk-icon">JS</div>
                    <h3>JavaScript/Node.js</h3>
                    <p>Full-featured SDK with TypeScript support for Node.js and browser apps.</p>
                    <a href="#" class="sdk-link">View on npm →</a>
                </div>

                <div class="sdk-card">
                    <div class="sdk-icon">PY</div>
                    <h3>Python</h3>
                    <p>Complete Python client library for backend and data processing workflows.</p>
                    <a href="#" class="sdk-link">View on PyPI →</a>
                </div>

                <div class="sdk-card">
                    <div class="sdk-icon">DB</div>
                    <h3>PHP</h3>
                    <p>PHP SDK for Laravel, WordPress, and legacy system integrations.</p>
                    <a href="#" class="sdk-link">View on Packagist →</a>
                </div>

                <div class="sdk-card">
                    <div class="sdk-icon">RB</div>
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
<div class="next-page-cta">
      <div class="next-page-inner">
        <div class="next-page-label">Continue Exploring</div>
        <h2 class="next-page-title">Next: <span>Demo</span></h2>
        <p class="next-page-desc">See TorqueDesk AI in action</p>
        <a href="/demo" class="next-page-btn">
          <span class="btn-text">Explore Demo</span>
          <span class="btn-arrow">&rarr;</span>
        </a>
        <div class="page-dots"><a href="/" class="page-dot"></a><a href="/features" class="page-dot"></a><a href="/solutions" class="page-dot"></a><a href="/pricing" class="page-dot"></a><a href="/integrations" class="page-dot active"></a><a href="/demo" class="page-dot"></a><a href="/customers" class="page-dot"></a><a href="/resources" class="page-dot"></a><a href="/about" class="page-dot"></a><a href="/contact" class="page-dot"></a></div>
        <div class="page-counter-text">Page 5 of 10</div>
      </div>
    </div>` }} />
  );
}
