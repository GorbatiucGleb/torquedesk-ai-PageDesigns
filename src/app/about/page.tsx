import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | TorqueDesk AI',
};

export default function AboutPage() {
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
            --subtle: #142238;
            --gray: #8A94A6;
            --light-gray: #B0BCCC;
        }

        .hero-about {
            background: linear-gradient(135deg, var(--hero) 0%, var(--dark-blue) 100%);
            padding: 120px 20px;
            text-align: center;
            border-bottom: 1px solid var(--subtle);
            margin-top: 64px;
        }

        .hero-about h1 {
            font-size: clamp(2.5rem, 8vw, 4rem);
            color: #fff;
            margin-bottom: 20px;
            font-weight: 700;
            letter-spacing: -1px;
        }

        .hero-about p {
            font-size: 1.25rem;
            color: var(--light-gray);
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }

        .founding-story {
            padding: 80px 20px;
            background: var(--navy);
        }

        .founding-container {
            max-width: 1000px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }

        .founding-text h2 {
            font-size: clamp(2rem, 6vw, 2.8rem);
            color: #fff;
            margin-bottom: 20px;
            font-weight: 700;
        }

        .founding-text p {
            color: var(--light-gray);
            font-size: 1.05rem;
            line-height: 1.8;
            margin-bottom: 20px;
        }

        .founding-story-highlight {
            color: var(--secondary);
            font-weight: 600;
        }

        .founding-visual {
            background: var(--card);
            border: 2px solid var(--accent);
            border-radius: 8px;
            padding: 60px 40px;
            text-align: center;
            min-height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 1;
            
        }

        .founding-visual::before {
            content: '';
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
            border-radius: 8px;
            margin-bottom: 30px;
        }

        .founding-visual h3 {
            color: #fff;
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .founding-visual p {
            color: var(--light-gray);
            font-size: 0.95rem;
        }

        .mission-vision-values {
            padding: 80px 20px;
            background: var(--deep);
            border-top: 1px solid var(--subtle);
        }

        .mvv-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
        }

        .mvv-card {
            background: var(--card);
            padding: 40px;
            border-radius: 8px;
            border-left: 4px solid var(--accent);
            opacity: 1;
            
        }

        .mvv-card h3 {
            color: var(--secondary);
            font-size: 1.5rem;
            margin-bottom: 15px;
        }

        .mvv-card p {
            color: var(--light-gray);
            line-height: 1.7;
            font-size: 1rem;
        }

        .stats-section {
            padding: 80px 20px;
            background: var(--navy);
            border-top: 1px solid var(--subtle);
            border-bottom: 1px solid var(--subtle);
        }

        .stats-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            text-align: center;
        }

        .stat-item {
            opacity: 1;
            
        }

        .stat-number {
            font-size: clamp(2rem, 6vw, 3.5rem);
            font-weight: 700;
            color: var(--secondary);
            margin-bottom: 10px;
        }

        .stat-label {
            color: var(--light-gray);
            font-size: 1.1rem;
        }

        .team-section {
            padding: 80px 20px;
            background: var(--deep);
            border-top: 1px solid var(--subtle);
        }

        .team-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .team-header h2 {
            font-size: clamp(2rem, 6vw, 3rem);
            color: #fff;
            margin-bottom: 15px;
        }

        .team-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 40px;
        }

        .team-member {
            text-align: center;
            opacity: 1;
            
        }

        .avatar {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            font-weight: 700;
            color: #fff;
            background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
        }

        .team-member h3 {
            color: #fff;
            font-size: 1.2rem;
            margin-bottom: 8px;
        }

        .team-member .title {
            color: var(--secondary);
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .team-member p {
            color: var(--gray);
            font-size: 0.9rem;
            line-height: 1.5;
        }

        .timeline-section {
            padding: 80px 20px;
            background: var(--navy);
            border-top: 1px solid var(--subtle);
        }

        .timeline-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .timeline-header h2 {
            font-size: clamp(2rem, 6vw, 3rem);
            color: #fff;
            margin-bottom: 10px;
        }

        .timeline {
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .timeline-item {
            flex: 1;
            min-width: 150px;
            text-align: center;
            position: relative;
            opacity: 1;
            
        }

        .timeline-year {
            font-size: 2rem;
            font-weight: 700;
            color: var(--secondary);
            margin-bottom: 10px;
        }

        .timeline-label {
            color: var(--light-gray);
            font-size: 0.95rem;
        }

        .timeline-event {
            color: var(--accent);
            font-size: 0.85rem;
            font-weight: 600;
            margin-top: 8px;
        }

        .timeline-connector {
            width: 30px;
            height: 2px;
            background: var(--subtle);
            margin: 0 -10px;
        }

        .culture-section {
            padding: 80px 20px;
            background: var(--deep);
            border-top: 1px solid var(--subtle);
        }

        .culture-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .culture-header h2 {
            font-size: clamp(2rem, 6vw, 3rem);
            color: #fff;
            margin-bottom: 10px;
        }

        .culture-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .culture-card {
            background: var(--card);
            padding: 40px;
            border-radius: 8px;
            border-top: 3px solid var(--accent);
            text-align: center;
            opacity: 1;
            
        }

        .culture-card h3 {
            color: var(--secondary);
            font-size: 1.3rem;
            margin-bottom: 15px;
        }

        .culture-card p {
            color: var(--light-gray);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .office-section {
            padding: 80px 20px;
            background: var(--navy);
            border-top: 1px solid var(--subtle);
        }

        .office-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .office-header h2 {
            font-size: clamp(2rem, 6vw, 3rem);
            color: #fff;
            margin-bottom: 10px;
        }

        .office-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
        }

        .office-card {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 8px;
            overflow: visible;
            opacity: 1;
            
        }

        .office-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: #fff;
        }

        .office-info {
            padding: 30px;
        }

        .office-info h3 {
            color: #fff;
            font-size: 1.2rem;
            margin-bottom: 10px;
        }

        .office-info p {
            color: var(--light-gray);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .awards-section {
            padding: 80px 20px;
            background: var(--deep);
            border-top: 1px solid var(--subtle);
        }

        .awards-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .awards-header h2 {
            font-size: clamp(2rem, 6vw, 3rem);
            color: #fff;
            margin-bottom: 10px;
        }

        .awards-container {
            max-width: 800px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .award-badge {
            background: var(--card);
            padding: 40px;
            border-radius: 8px;
            border: 1px solid var(--subtle);
            text-align: center;
            opacity: 1;
            
        }

        .award-badge h3 {
            color: var(--secondary);
            font-size: 1.2rem;
            margin-bottom: 10px;
        }

        .award-badge p {
            color: var(--light-gray);
            font-size: 0.9rem;
        }

        .investors-section {
            padding: 80px 20px;
            background: var(--navy);
            border-top: 1px solid var(--subtle);
            border-bottom: 1px solid var(--subtle);
        }

        .investors-container {
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
        }

        .investors-container h2 {
            font-size: clamp(2rem, 6vw, 3rem);
            color: #fff;
            margin-bottom: 20px;
        }

        .investors-info {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 8px;
            padding: 60px 40px;
            margin-bottom: 40px;
        }

        .investors-info h3 {
            color: var(--secondary);
            font-size: 1.8rem;
            margin-bottom: 15px;
        }

        .investors-info p {
            color: var(--light-gray);
            font-size: 1.05rem;
            margin-bottom: 10px;
        }

        .investors-list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;
            margin-top: 30px;
        }

        .investor-name {
            color: var(--accent);
            font-weight: 600;
        }

        .cta-section {
            padding: 80px 20px;
            background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
            text-align: center;
        }

        .cta-content {
            max-width: 600px;
            margin: 0 auto;
        }

        .cta-content h2 {
            font-size: clamp(2rem, 6vw, 3rem);
            color: #fff;
            margin-bottom: 20px;
        }

        .cta-content p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.95);
            margin-bottom: 30px;
        }

        .btn-white {
            display: inline-block;
            padding: 14px 40px;
            background: #fff;
            color: var(--accent);
            text-decoration: none;
            border-radius: 4px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }

        .btn-white:hover {
            background: rgba(255, 255, 255, 0.95);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
            .hero-about {
                padding: 80px 20px;
            }

            .founding-container {
                grid-template-columns: 1fr;
            }

            .mvv-container,
            .stats-container,
            .team-container,
            .culture-grid,
            .office-grid,
            .awards-container {
                gap: 30px;
            }

            .timeline {
                flex-direction: column;
                gap: 40px;
            }

            .timeline-connector {
                display: none;
            }

            .mission-vision-values,
            .team-section,
            .timeline-section,
            .culture-section,
            .office-section,
            .awards-section,
            .investors-section {
                padding: 60px 20px;
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

        /* Merged Content Sections */
        .section-divider {
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent), transparent);
            margin: 80px 0;
            opacity: 0.6;
        }

        .industry-solutions-section,
        .security-trust-section,
        .careers-section {
            background: var(--navy);
            padding: 80px 20px;
        }

                .solutions-hero {
                    padding: 100px 20px;
                .solutions-hero::before {
                    position: absolute;
                    top: -50%;
                    right: -10%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(45, 156, 219, 0.1) 0%, transparent 70%);
                .solutions-hero::after {
                    bottom: -30%;
                    left: -5%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(59,130,196, 0.05) 0%, transparent 70%);
                .solutions-hero-content {
                    z-index: 2;
                .solutions-hero h1 {
                    font-size: 3.5rem;
                .solutions-hero p {
                    margin-bottom: 0;
                .solutions-grid {
                    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
                    padding: 80px 40px;
                    max-width: 1400px;
                .solution-card {
                    border-radius: 12px;
                .solution-card::before {
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, var(--accent), var(--secondary));
                    transition: opacity 0.3s ease;
                .solution-card:hover {
                    border-color: var(--accent);
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(45, 156, 219, 0.15);
                .solution-card:hover::before {
                .solution-icon {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, var(--accent), var(--secondary));
                    border-radius: 10px;
                    font-size: 28px;
                    margin-bottom: 25px;
                .solution-card h3 {
                .solution-badge {
                    background: rgba(45, 156, 219, 0.15);
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                .industry-stat {
                    background: rgba(59,130,196, 0.08);
                    border-left: 3px solid var(--secondary);
                    padding: 12px 15px;
                    border-radius: 6px;
                .industry-stat strong {
                    display: block;
                    margin-bottom: 3px;
                .solution-card p {
                    flex-grow: 1;
                .solution-features {
                    list-style: none;
                    padding: 0;
                    margin: 25px 0;
                .solution-features li {
                    margin-bottom: 12px;
                    padding-left: 25px;
                .solution-features li::before {
                    content: '\\2713';
                    font-weight: bold;
                .solution-card a {
                    display: inline-flex;
                    margin-top: 15px;
                    align-self: flex-start;
                .solution-card a::after {
                    content: '→';
                    margin-left: 8px;
                    transition: transform 0.3s ease;
                .solution-card a:hover::after {
                    transform: translateX(4px);
                .industry-stats-section {
                    background: linear-gradient(135deg, var(--dark-blue) 0%, var(--navy) 100%);
                .industry-stats-section h2 {
                    font-size: 2.2rem;
                .stats-grid {
                .stat-card {
                .stat-value {
                    font-weight: 500;
                .metrics-section {
                .metrics-section h2 {
                .metrics-grid {
                .metrics-card {
                .metrics-card h3 {
                .metric-row {
                    padding-bottom: 15px;
                .metric-row:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                .metric-name {
                .metric-result {
                .workflows-section {
                .workflows-container {
                .workflows-section h2 {
                .workflows-section > p {
                    margin-left: auto;
                    margin-right: auto;
                .workflows-grid {
                    gap: 25px;
                .workflow-item {
                .workflow-icon {
                    width: 50px;
                    height: 50px;
                    font-size: 24px;
                .workflow-item h3 {
                .workflow-item p {
                    margin: 0;
                .compliance-section {
                .compliance-section h2 {
                .compliance-grid {
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                .compliance-card {
                    padding: 35px;
                .compliance-icon {
                    width: 55px;
                    height: 55px;
                    background: rgba(59,130,196, 0.15);
                    font-size: 26px;
                .compliance-card h3 {
                .compliance-items {
                .compliance-items li {
                    padding-left: 20px;
                    line-height: 1.4;
                .compliance-items li::before {
                .shared-features-section {
                .shared-features-section h2 {
                .shared-features-grid {
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                .feature-item {
                .feature-icon {
                    width: 70px;
                    height: 70px;
                    font-size: 32px;
                .feature-item:hover .feature-icon {
                    background: rgba(45, 156, 219, 0.3);
                .feature-item p {
                .success-preview-section {
                .success-preview-section h2 {
                .success-stories-grid {
                    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
                .success-card {
                .success-card:hover {
                .success-card h4 {
                    letter-spacing: 1px;
                .success-card h3 {
                .success-card p {
                .success-metric {
                    gap: 15px;
                .metric-value {
                .metric-label {
                .solutions-cta {
                    padding: 70px 40px;
                    border-radius: 15px;
                    margin: 80px 40px;
                .solutions-cta h2 {
                    color: var(--navy);
                .solutions-cta p {
                    color: rgba(15, 23, 42, 0.8);
                    margin-bottom: 35px;
                .cta-buttons {
                .cta-buttons a {
                    padding: 12px 30px;
                .cta-btn-primary {
                    border: 2px solid var(--navy);
                .cta-btn-primary:hover {
                    background: transparent;
                .cta-btn-secondary {
                .cta-btn-secondary:hover {
                        grid-template-columns: repeat(2, 1fr);
                        margin: 60px 20px;
                        padding: 50px 25px;
                        width: 100%;
                .hero-section {
                .hero-section h1 {
                    color: #ffffff;
                    margin-bottom: 16px;
                .hero-section p {
                .certs-section {
                .certs-header {
                .certs-header h2 {
                .certs-header p {
                .certs-grid {
                .cert-card {
                .cert-card:hover {
                    transform: translateY(-4px);
                .cert-icon {
                .cert-name {
                .cert-description {
                .features-section {
                .features-header {
                .features-header h2 {
                .features-grid {
                .feature-item:hover {
                    border-color: var(--secondary);
                .feature-title {
                    gap: 10px;
                    width: 24px;
                    height: 24px;
                    background: var(--accent);
                .feature-description {
                .infra-section {
                .infra-container {
                .infra-header {
                .infra-header h2 {
                .infra-content {
                .infra-points {
                .infra-point {
                    padding-bottom: 20px;
                .infra-point h3 {
                .infra-point p {
                .cloud-logos {
                    padding-top: 30px;
                .logo-placeholder {
                    padding: 20px 30px;
                .data-section {
                .data-container {
                .data-header {
                .data-header h2 {
                .data-content {
                .data-block {
                .data-block h3 {
                .data-block ul {
                .data-block li {
                    padding-left: 24px;
                .data-block li::before {
                    content: '\\2713';
                .access-section {
                .access-container {
                .access-header {
                .access-header h2 {
                .access-grid {
                .access-item {
                .access-item:hover {
                    background: linear-gradient(135deg, var(--dark-blue) 0%, var(--card) 100%);
                .access-item h3 {
                    margin: 0 0 12px 0;
                .access-item p {
                .compliance-container {
                .compliance-container h2 {
                    margin-bottom: 24px;
                .compliance-list {
                .compliance-item {
                    padding: 20px;
                .compliance-item:hover {
                .timeline-container {
                    padding: 20px 0;
                .timeline::before {
                    left: 50%;
                    transform: translateX(-50%);
                    width: 2px;
                    height: 100%;
                        left: 20px;
                    .timeline-item {
                        margin-left: 60px;
                    .timeline-dot {
                        left: -39px;
                .timeline-content {
                    padding: 25px;
                .timeline-content h3 {
                    margin: 0 0 8px 0;
                .timeline-content p {
                .vulnerability-section {
                .vulnerability-container {
                .vulnerability-header {
                .vulnerability-header h2 {
                .vulnerability-header p {
                .vulnerability-content {
                .vulnerability-box {
                .vulnerability-box h3 {
                    margin: 0 0 15px 0;
    <!-- Security & Trust Section -->
    <section class="security-trust-section">
<section class="hero-section">
        <h1>Enterprise-Grade Security</h1>
        <p>Your data protection is our top priority. Learn how TorqueDesk AI keeps your business secure with industry-leading standards and continuous monitoring.</p>
    </section>

    <section class="certs-section">
        <div class="certs-header">
            <h2>Compliance Certifications</h2>
            <p>Trusted by regulated industries and enterprise customers worldwide.</p>
        </div>
        <div class="certs-grid">
            <div class="cert-card">
                <div class="cert-icon">S2</div>
                <div class="cert-name">SOC 2 Type II</div>
                <div class="cert-description">Independently audited for security, availability, processing integrity, confidentiality, and privacy controls. Annual certification maintained.</div>
            </div>

            <div class="cert-card">
                <div class="cert-icon">27</div>
                <div class="cert-name">ISO 27001</div>
                <div class="cert-description">Information security management system certified to international standards for comprehensive data protection and risk management.</div>
            </div>

            <div class="cert-card">
                <div class="cert-icon">EU</div>
                <div class="cert-name">GDPR Compliant</div>
                <div class="cert-description">Full compliance with General Data Protection Regulation requirements. Data processing agreements and privacy controls in place.</div>
            </div>

            <div class="cert-card">
                <div class="cert-icon">PC</div>
                <div class="cert-name">PCI DSS Level 1</div>
                <div class="cert-description">Highest level of PCI compliance for secure payment card data handling and quarterly security assessments.</div>
            </div>

            <div class="cert-card">
                <div class="cert-icon">HC</div>
                <div class="cert-name">HIPAA-Ready</div>
                <div class="cert-description">Healthcare compliance framework implemented. Business Associate Agreements available for medical practices.</div>
            </div>
        </div>
    </section>

    <section class="features-section">
        <div class="features-header">
            <h2>Security Features</h2>
        </div>
        <div class="features-grid">
            <div class="feature-item">
                <div class="feature-title">
                    <div class="feature-icon">E</div>
                    AES-256 Encryption
                </div>
                <div class="feature-description">All data encrypted at rest using AES-256 military-grade encryption. Your information remains protected at every layer.</div>
            </div>

            <div class="feature-item">
                <div class="feature-title">
                    <div class="feature-icon">T</div>
                    TLS 1.3 in Transit
                </div>
                <div class="feature-description">All data in transit protected with TLS 1.3 encryption. Regular certificate rotation and perfect forward secrecy enabled.</div>
            </div>

            <div class="feature-item">
                <div class="feature-title">
                    <div class="feature-icon">2F</div>
                    Multi-Factor Authentication
                </div>
                <div class="feature-description">SMS, authenticator apps, and hardware keys supported. Multiple verification layers prevent unauthorized access.</div>
            </div>

            <div class="feature-item">
                <div class="feature-title">
                    <div class="feature-icon">R</div>
                    Role-Based Access
                </div>
                <div class="feature-description">Granular permissions system ensures users only access data and features necessary for their specific role.</div>
            </div>

            <div class="feature-item">
                <div class="feature-title">
                    <div class="feature-icon">K</div>
                    Key Rotation
                </div>
                <div class="feature-description">Automatic cryptographic key rotation every 90 days. Legacy keys securely archived and never reused.</div>
            </div>

            <div class="feature-item">
                <div class="feature-title">
                    <div class="feature-icon">A</div>
                    Audit Logging
                </div>
                <div class="feature-description">Complete immutable activity logs with timestamps. Full compliance trail for regulatory audits and security investigations.</div>
            </div>
        </div>
    </section>

    <section class="infra-section">
        <div class="infra-container">
            <div class="infra-header">
                <h2>Cloud Infrastructure</h2>
            </div>
            <div class="infra-content">
                <div class="infra-points">
                    <div class="infra-point">
                        <h3>AWS Hosting</h3>
                        <p>Enterprise-grade AWS infrastructure with SOC 2 and ISO 27001 compliance certifications.</p>
                    </div>
                    <div class="infra-point">
                        <h3>Multi-Region Deployment</h3>
                        <p>Data centers across North America and Europe for optimal performance and regulatory compliance.</p>
                    </div>
                    <div class="infra-point">
                        <h3>99.99% Uptime SLA</h3>
                        <p>Guaranteed availability with 24/7 monitoring, automatic failover, and redundant systems.</p>
                    </div>
                    <div class="infra-point">
                        <h3>Auto-Scaling</h3>
                        <p>Infrastructure automatically scales to handle peak loads without service degradation.</p>
                    </div>
                    <div class="infra-point">
                        <h3>DDoS Protection</h3>
                        <p>Enterprise-grade DDoS mitigation protects against distributed attacks and ensures availability.</p>
                    </div>
                    <div class="infra-point">
                        <h3>Web Application Firewall</h3>
                        <p>Advanced WAF rules monitor and block malicious traffic patterns and injection attacks.</p>
                    </div>
                </div>
                <div class="cloud-logos">
                    <div class="logo-placeholder">Amazon Web Services</div>
                    <div class="logo-placeholder">AWS CloudFront CDN</div>
                </div>
            </div>
        </div>
    </section>

    <section class="data-section">
        <div class="data-container">
            <div class="data-header">
                <h2>Data Protection & Handling</h2>
            </div>
            <div class="data-content">
                <div class="data-block">
                    <h3>Backup & Recovery</h3>
                    <ul>
                        <li>Hourly automated backups across multiple regions</li>
                        <li>Point-in-time recovery up to 30 days</li>
                        <li>Zero data loss guarantees with RPO under 1 hour</li>
                        <li>Rapid recovery with RTO under 4 hours</li>
                        <li>Disaster recovery testing performed quarterly</li>
                    </ul>
                </div>
                <div class="data-block">
                    <h3>Data Residency</h3>
                    <ul>
                        <li>Data stored in customer-selected geographic region</li>
                        <li>GDPR-compliant data residency for EU customers</li>
                        <li>Sovereign data options for government agencies</li>
                        <li>No cross-border data transfers without consent</li>
                        <li>Data localization compliance management</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="access-section">
        <div class="access-container">
            <div class="access-header">
                <h2>Access Control & Management</h2>
            </div>
            <div class="access-grid">
                <div class="access-item">
                    <h3>SSO & SAML</h3>
                    <p>Enterprise single sign-on with SAML 2.0 support. Seamless integration with corporate identity providers.</p>
                </div>

                <div class="access-item">
                    <h3>Role-Based Access Control</h3>
                    <p>Granular permissions management. Define custom roles and restrict access by department or responsibility.</p>
                </div>

                <div class="access-item">
                    <h3>Two-Factor Authentication</h3>
                    <p>SMS, authenticator apps, and hardware security keys. Enforce MFA for all users or specific roles.</p>
                </div>

                <div class="access-item">
                    <h3>Session Management</h3>
                    <p>Automatic session timeout policies. Real-time session monitoring and remote logout capabilities.</p>
                </div>

                <div class="access-item">
                    <h3>IP Allowlisting</h3>
                    <p>Restrict access by IP address. Perfect for office networks and VPN configurations.</p>
                </div>

                <div class="access-item">
                    <h3>Audit Logs</h3>
                    <p>Complete activity logs with user, action, timestamp, and IP address. 2-year retention standard.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="compliance-section">
        <div class="compliance-container">
            <h2>Security Compliance Practices</h2>
            <div class="compliance-list">
                <div class="compliance-item">Regular Penetration Testing</div>
                <div class="compliance-item">Annual Security Audits</div>
                <div class="compliance-item">Quarterly Vulnerability Scanning</div>
                <div class="compliance-item">Bug Bounty Program Active</div>
                <div class="compliance-item">Security Response Team 24/7</div>
                <div class="compliance-item">Incident Response Plan</div>
                <div class="compliance-item">Regular Security Training</div>
                <div class="compliance-item">Compliance Certifications Current</div>
            </div>
        </div>
    </section>

    <section class="timeline-section">
        <div class="timeline-container">
            <div class="timeline-header">
                <h2>Security Program Timeline</h2>
            </div>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Quarterly Security Audits</h3>
                        <p>Comprehensive internal and external security assessments. Code reviews, infrastructure audits, and access control validation.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Annual Certifications</h3>
                        <p>SOC 2 Type II, ISO 27001, and other compliance certifications maintained. Third-party audited and verified annually.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Continuous Vulnerability Management</h3>
                        <p>Ongoing monitoring with automated scanning. Vulnerability patching within 24 hours of discovery for critical issues.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="vulnerability-section">
        <div class="vulnerability-container">
            <div class="vulnerability-header">
                <h2>Security & Vulnerability Reporting</h2>
                <p>We take security seriously and appreciate responsible disclosure. If you discover a vulnerability, please report it to our security team.</p>
            </div>
            <div class="vulnerability-content">
                <div class="vulnerability-box">
                    <h3>Report a Vulnerability</h3>
                    <p>Found a security issue? Email our security team with details of the vulnerability and reproduction steps.</p>
                    <p>
                        <a href="mailto:security@torquedeskai.com" class="vulnerability-contact">security@torquedeskai.com</a>
                    </p>
                    <p style="font-size: 0.85rem; color: var(--gray); margin-top: 15px;">Expected response time: 24 hours. We follow responsible disclosure practices and will provide timely updates on remediation.</p>
                </div>

                <div class="vulnerability-box">
                    <h3>Security Acknowledgments</h3>
                    <p>We maintain a public bug bounty program through HackerOne. Participate and help us maintain the highest security standards.</p>
                    <p>
                        <a href="#" class="vulnerability-contact">View Bug Bounty Program →</a>
                    </p>
                    <p style="font-size: 0.85rem; color: var(--gray); margin-top: 15px;">Rewards available for valid, unreported vulnerabilities. Security researchers recognized in our Hall of Fame.</p>
                </div>
            </div>
        </div>
    </section>

    <section style="background: linear-gradient(135deg, var(--dark-blue) 0%, var(--hero) 100%); padding: 80px 20px; text-align: center;">
        <div style="max-width: 700px; margin: 0 auto; ">
            <h2 style="font-size: 2rem; color: #fff; margin: 0 0 20px 0;">Trust Center</h2>
            <p style="color: var(--gray); margin: 0 0 30px 0; line-height: 1.6;">Access our comprehensive security documentation, compliance reports, and audit records through our Trust Center portal.</p>
            <a href="#" class="trust-center-btn">Download SOC 2 Report</a>
        </div>
    </section>
    </section>

    <!-- Section Divider -->
    <div class="section-divider"></div>

    <!-- Careers Section -->
    <section class="careers-section">
<div class="hero-careers">
        <h1>Build the Future of Auto Shop Technology</h1>
        <p>Join a team that's revolutionizing the automotive industry with AI. We're looking for talented people who are passionate about solving real problems.</p>
    </div>

    <section class="why-tdai">
        <div class="why-header">
            <h2>Why Work at TorqueDesk AI?</h2>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">More than just a job—a mission that matters</p>
        </div>
        <div class="why-container">
            <div class="why-text">
                <p>We're not building software in a vacuum. Our team works directly with shop owners, technicians, and managers to solve problems they face every day. Your work has immediate impact on real businesses.</p>
                <p>We offer competitive salaries, equity for every team member, and benefits that actually matter: remote-first flexibility, unlimited PTO, comprehensive health coverage, and annual learning budgets so you keep growing.</p>
            </div>
            <div class="why-highlights">
                <div class="highlight-item">
                    <h3>Remote-First</h3>
                    <p>Work from anywhere. Great talent exists everywhere.</p>
                </div>
                <div class="highlight-item">
                    <h3>Competitive Salary</h3>
                    <p>Top-of-market pay commensurate with experience.</p>
                </div>
                <div class="highlight-item">
                    <h3>Equity</h3>
                    <p>Stock options for everyone. You own part of the company.</p>
                </div>
                <div class="highlight-item">
                    <h3>Unlimited PTO</h3>
                    <p>We trust you to manage your time and recharge.</p>
                </div>
                <div class="highlight-item">
                    <h3>Health & Wellness</h3>
                    <p>Medical, dental, vision, mental health, and more.</p>
                </div>
                <div class="highlight-item">
                    <h3>Learning Budget</h3>
                    <p>Annual stipend for courses, conferences, and growth.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="benefits-section">
        <div class="benefits-header">
            <h2>Comprehensive Benefits</h2>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">We invest in our team's success and wellbeing</p>
        </div>
        <div class="benefits-container">
            <div class="benefit-card">
                <div class="benefit-icon">$</div>
                <h3>Competitive Salary</h3>
                <p>Top-of-market compensation based on experience and role. Transparent salary bands and annual reviews.</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">UP</div>
                <h3>Equity Package</h3>
                <p>Stock options for all employees. Become a stakeholder in our success and growth.</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">+</div>
                <h3>Health Insurance</h3>
                <p>Medical, dental, and vision coverage. Company covers 90% of premiums for employees and families.</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">AI</div>
                <h3>Mental Health</h3>
                <p>Subsidized mental health support, therapy, and wellness programs. We care about your wellbeing.</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">EDU</div>
                <h3>Learning Budget</h3>
                <p>$2,000 annual learning budget for courses, conferences, certifications, and professional development.</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">+</div>
                <h3>Remote-First</h3>
                <p>Work from home, coffee shop, or office. We trust you to be productive wherever you are.</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">TGT</div>
                <h3>Unlimited PTO</h3>
                <p>We trust you to manage your time. Take vacation, personal days, or mental health days as needed.</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">‍‍‍</div>
                <h3>Family Support</h3>
                <p>Parental leave, childcare support, and flexible schedules for parents.</p>
            </div>
        </div>
    </section>

    <section class="positions-section">
        <div class="positions-header">
            <h2>Open Positions</h2>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">Join our growing team and help reshape automotive technology</p>
        </div>

        <div class="positions-list">
            <div class="job-card" onclick="toggleJobDescription(this)">
                <div class="job-header">
                    <div class="job-title">
                        <h3>Senior Full-Stack Engineer</h3>
                        <div class="job-meta">
                            <span class="job-tag">Engineering</span>
                            <span class="job-tag">Remote</span>
                            <span class="job-tag">Full-Time</span>
                        </div>
                    </div>
                </div>
                <div class="job-description">
                    <p>We're looking for an experienced full-stack engineer to help us build and scale the TorqueDesk AI platform. You'll work across our React frontend, Node.js backend, and PostgreSQL database. You'll own features from conception through production, collaborating with product and design teams. Experience with AI/ML integrations is a plus. 5+ years of experience required.</p>
                </div>
                <div class="job-footer">
                    <div class="job-type">Remote — Full-Time</div>
                    <button class="apply-btn" onclick="event.stopPropagation(); handleApply('Senior Full-Stack Engineer')">Apply Now</button>
                </div>
            </div>

            <div class="job-card" onclick="toggleJobDescription(this)">
                <div class="job-header">
                    <div class="job-title">
                        <h3>AI/ML Engineer</h3>
                        <div class="job-meta">
                            <span class="job-tag">AI Team</span>
                            <span class="job-tag">Remote</span>
                            <span class="job-tag">Full-Time</span>
                        </div>
                    </div>
                </div>
                <div class="job-description">
                    <p>Help us build the next generation of AI models for automotive diagnostics and shop management. You'll research, prototype, and deploy ML models using Python, PyTorch, and TensorFlow. You'll work on computer vision and NLP problems with real-world impact. Experience with large language models is valuable. We'd love to see your published research or open-source projects.</p>
                </div>
                <div class="job-footer">
                    <div class="job-type">Remote — Full-Time</div>
                    <button class="apply-btn" onclick="event.stopPropagation(); handleApply('AI/ML Engineer')">Apply Now</button>
                </div>
            </div>

            <div class="job-card" onclick="toggleJobDescription(this)">
                <div class="job-header">
                    <div class="job-title">
                        <h3>Product Designer</h3>
                        <div class="job-meta">
                            <span class="job-tag">Design</span>
                            <span class="job-tag">Remote</span>
                            <span class="job-tag">Full-Time</span>
                        </div>
                    </div>
                </div>
                <div class="job-description">
                    <p>Design beautiful, intuitive interfaces for our B2B SaaS platform. You'll work with our product and engineering teams to create delightful experiences for auto shop owners and technicians—many of whom aren't tech-savvy. Figma proficiency and B2B SaaS experience preferred. 3+ years of design experience required.</p>
                </div>
                <div class="job-footer">
                    <div class="job-type">Remote — Full-Time</div>
                    <button class="apply-btn" onclick="event.stopPropagation(); handleApply('Product Designer')">Apply Now</button>
                </div>
            </div>

            <div class="job-card" onclick="toggleJobDescription(this)">
                <div class="job-header">
                    <div class="job-title">
                        <h3>Account Executive</h3>
                        <div class="job-meta">
                            <span class="job-tag">Sales</span>
                            <span class="job-tag">SF/Remote</span>
                            <span class="job-tag">Full-Time</span>
                        </div>
                    </div>
                </div>
                <div class="job-description">
                    <p>Drive sales growth in our West Coast market. You'll lead prospects through the entire sales cycle and build lasting relationships with shop owners. Your territory will be high-growth with lots of opportunity. SaaS sales experience and automotive industry knowledge are strong plus factors. 3+ years of sales experience required.</p>
                </div>
                <div class="job-footer">
                    <div class="job-type">SF/Remote — Full-Time</div>
                    <button class="apply-btn" onclick="event.stopPropagation(); handleApply('Account Executive')">Apply Now</button>
                </div>
            </div>

            <div class="job-card" onclick="toggleJobDescription(this)">
                <div class="job-header">
                    <div class="job-title">
                        <h3>Customer Success Manager</h3>
                        <div class="job-meta">
                            <span class="job-tag">Support</span>
                            <span class="job-tag">Remote</span>
                            <span class="job-tag">Full-Time</span>
                        </div>
                    </div>
                </div>
                <div class="job-description">
                    <p>Ensure our customers get maximum value from TorqueDesk AI. You'll manage onboarding, provide training, and support account growth. You'll be the customer's advocate internally and their trusted advisor externally. SaaS customer success experience and strong communication skills are essential. 2+ years of CS experience required.</p>
                </div>
                <div class="job-footer">
                    <div class="job-type">Remote — Full-Time</div>
                    <button class="apply-btn" onclick="event.stopPropagation(); handleApply('Customer Success Manager')">Apply Now</button>
                </div>
            </div>

            <div class="job-card" onclick="toggleJobDescription(this)">
                <div class="job-header">
                    <div class="job-title">
                        <h3>Marketing Manager</h3>
                        <div class="job-meta">
                            <span class="job-tag">Marketing</span>
                            <span class="job-tag">Remote</span>
                            <span class="job-tag">Full-Time</span>
                        </div>
                    </div>
                </div>
                <div class="job-description">
                    <p>Lead our go-to-market strategy and build brand awareness in the auto shop vertical. You'll manage campaigns, content, events, and partnerships. You'll work closely with sales and product to understand customer needs and messaging. Marketing experience in SaaS or automotive is valuable. 4+ years of marketing experience required.</p>
                </div>
                <div class="job-footer">
                    <div class="job-type">Remote — Full-Time</div>
                    <button class="apply-btn" onclick="event.stopPropagation(); handleApply('Marketing Manager')">Apply Now</button>
                </div>
            </div>

            <div class="job-card" onclick="toggleJobDescription(this)">
                <div class="job-header">
                    <div class="job-title">
                        <h3>DevOps Engineer</h3>
                        <div class="job-meta">
                            <span class="job-tag">Engineering</span>
                            <span class="job-tag">Remote</span>
                            <span class="job-tag">Full-Time</span>
                        </div>
                    </div>
                </div>
                <div class="job-description">
                    <p>Build and maintain our cloud infrastructure on AWS. You'll work on CI/CD pipelines, containerization, monitoring, and security. You'll ensure our platform stays reliable, secure, and performant at scale. Experience with Docker, Kubernetes, and Infrastructure-as-Code tools is expected. 4+ years of DevOps experience required.</p>
                </div>
                <div class="job-footer">
                    <div class="job-type">Remote — Full-Time</div>
                    <button class="apply-btn" onclick="event.stopPropagation(); handleApply('DevOps Engineer')">Apply Now</button>
                </div>
            </div>

            <div class="job-card" onclick="toggleJobDescription(this)">
                <div class="job-header">
                    <div class="job-title">
                        <h3>Technical Writer</h3>
                        <div class="job-meta">
                            <span class="job-tag">Product</span>
                            <span class="job-tag">Remote</span>
                            <span class="job-tag">Contract</span>
                        </div>
                    </div>
                </div>
                <div class="job-description">
                    <p>Create clear, helpful documentation and guides for TDAI. You'll work with engineering to explain complex technical concepts in simple language. You'll build out help content, API docs, and user guides. Experience writing technical documentation and familiarity with tools like Markdown and Git is preferred.</p>
                </div>
                <div class="job-footer">
                    <div class="job-type">Remote — Contract</div>
                    <button class="apply-btn" onclick="event.stopPropagation(); handleApply('Technical Writer')">Apply Now</button>
                </div>
            </div>
        </div>
    </section>

    <section class="daylife-section">
        <div class="daylife-header">
            <h2>A Day in the Life at TDAI</h2>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">What working here actually looks like</p>
        </div>
        <div class="daylife-grid">
            <div class="daylife-item">
                <div class="daylife-time">Morning (9-11 AM)</div>
                <h3>Async Standups & Focused Work</h3>
                <p>Start with async standups so the global team stays in sync. Dive into focused work on your projects. No back-to-back meetings—we protect deep work time.</p>
            </div>
            <div class="daylife-item">
                <div class="daylife-time">Midday (11 AM-1 PM)</div>
                <h3>Collaboration & Sync-Ups</h3>
                <p>Team syncs, design critiques, or customer calls. We collaborate in real-time when it matters. Lunch break in between with your team or solo time.</p>
            </div>
            <div class="daylife-item">
                <div class="daylife-time">Afternoon (1-5 PM)</div>
                <h3>More Focus Time & Learning</h3>
                <p>Heads-down work on features, bug fixes, or projects. Friday afternoons are for learning, experimenting, or professional development. We encourage you to grow.</p>
            </div>
        </div>
    </section>

    <section class="culture-section">
        <div class="culture-header">
            <h2>Our Values</h2>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">The principles that guide us</p>
        </div>

        <div class="culture-container">
            <div class="culture-item">
                <div class="culture-value">Ownership</div>
                <p>We trust our team members to own their work. You're not just executing tasks—you're building features, solving problems, and shaping the future of the company.</p>
            </div>
            <div class="culture-item">
                <div class="culture-value">Impact</div>
                <p>Every line of code, every design decision, every conversation makes a difference. We measure success by the value we deliver to real shops and their teams.</p>
            </div>
            <div class="culture-item">
                <div class="culture-value">Collaboration</div>
                <p>We believe the best ideas come from diverse perspectives. We actively listen, respectfully challenge, and work together toward shared goals.</p>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="cta-content">
            <h2>Don't See Your Role?</h2>
            <p>We're always looking for talented people. Send us your resume and tell us what you're excited to build.</p>
            <a href="contact.html" class="btn-white">Get in Touch</a>
        </div>
    </section>
    </section>


y-box p {
                .vulnerability-contact {
                    transition: color 0.3s ease;
                .vulnerability-contact:hover {
                .trust-center-btn {
                    padding: 12px 32px;
                .trust-center-btn:hover {
                        font-size: 2rem;
                        gap: 20px;
                .hero-careers {
                    padding: 120px 20px 80px;
                .hero-careers h1 {
                .hero-careers p {
                    max-width: 700px;
                .why-tdai {
                .why-header {
                .why-header h2 {
                .why-container {
                .why-text {
                .why-text p {
                .why-text p:last-child {
                .why-highlights {
                .highlight-item {
                .highlight-item h3 {
                .highlight-item p {
                .benefits-section {
                .benefits-header {
                .benefits-header h2 {
                .benefits-container {
                .benefit-card {
                    padding: 40px 30px;
                .benefit-icon {
                .benefit-card h3 {
                .benefit-card p {
                .positions-section {
                .positions-header {
                .positions-header h2 {
                .positions-list {
                .job-card {
                .job-card:hover {
                    background: var(--hero);
                    transform: translateX(10px);
                .job-header {
                    align-items: start;
                .job-title {
                .job-title h3 {
                .job-meta {
                .job-tag {
                    padding: 6px 12px;
                .job-description {
                .job-description.visible {
                .job-footer {
                .job-type {
                .job-apply-btn {
                .apply-btn {
                    padding: 10px 24px;
                .apply-btn:hover {
                    background: var(--secondary);
                .daylife-section {
                .daylife-header {
                .daylife-header h2 {
                .daylife-grid {
                .daylife-item {
                .daylife-time {
                .daylife-item h3 {
                .daylife-item p {
                .culture-container {
                .culture-item {
                .culture-value {
                    font-size: 1.4rem;
                .culture-item p {
                        padding: 80px 20px 60px;
                        align-items: flex-start;
                        text-align: center;
                    .benefits-section,
                    .positions-section,
                    .daylife-section,
                    .culture-section {
    
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
<div class="hero-about">
        <h1>Built by Shop People, Powered by AI</h1>
        <p>Founded in a garage. Mission: bring AI to every auto shop around the world.</p>
    </div>

    <section class="founding-story">
        <div class="founding-container">
            <div class="founding-text">
                <h2>Born from a Real Auto Shop</h2>
                <p>Our founder Alex Mitchell spent 15 years running a 5-bay auto repair shop in San Francisco. He saw the inefficiency firsthand: complex spreadsheets, lost paperwork, customer miscommunications, and countless hours wasted on manual diagnostics.</p>
                <p>In 2023, Alex realized that <span class="founding-story-highlight">AI could transform how shops operate</span>. Rather than build software in isolation, he partnered with shop owners, technicians, and managers to understand their real challenges. The result: TorqueDesk AI—built by people who've actually worked in the trenches.</p>
                <p>Today, we remain obsessed with solving real problems for real shops. Every feature, every update, every decision is guided by conversations with our customers and their teams.</p>
            </div>
            <div class="founding-visual">
                <h3>Garage to Global</h3>
                <p>From one shop's problem to thousands of shops' solutions</p>
            </div>
        </div>
    </section>

    <section class="mission-vision-values">
        <div class="mvv-container">
            <div class="mvv-card">
                <h3>Our Mission</h3>
                <p>Make AI accessible to every auto shop, regardless of size or budget. We believe technology should empower, not intimidate. Our goal is to eliminate the friction that keeps shop owners up at night and give technicians more time for what they do best—fixing cars and building customer relationships.</p>
            </div>
            <div class="mvv-card">
                <h3>Our Vision</h3>
                <p>Become the #1 AI platform for automotive management globally. A platform trusted by tens of thousands of shops, generating billions in productivity gains across the industry. We imagine a future where every shop has access to enterprise-grade tools and intelligence, regardless of their size.</p>
            </div>
            <div class="mvv-card">
                <h3>Our Values</h3>
                <p>Innovation drives us forward. Transparency builds trust. Customer obsession guides every decision we make. We operate with integrity, move with speed, and believe that technology should serve people—not replace them. We're in this together.</p>
            </div>
        </div>
    </section>

    <section class="stats-section">
        <div class="stats-container">
            <div class="stat-item">
                <div class="stat-number">500+</div>
                <div class="stat-label">Active Shops</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">Team Members</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">$12M+</div>
                <div class="stat-label">Capital Raised</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">4</div>
                <div class="stat-label">Countries</div>
            </div>
        </div>
    </section>

    <section class="team-section">
        <div class="team-header">
            <h2>Leadership Team</h2>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">Experienced auto industry veterans and AI specialists</p>
        </div>
        <div class="team-container">
            <div class="team-member">
                <div class="avatar">AM</div>
                <h3>Alex Mitchell</h3>
                <div class="title">CEO & Founder</div>
                <p>15-year auto shop owner. Built TorqueDesk from real shop floor needs.</p>
            </div>
            <div class="team-member">
                <div class="avatar">SK</div>
                <h3>Sarah Kim</h3>
                <div class="title">CTO</div>
                <p>Former ML engineer at Tesla. Leading our technical vision and architecture.</p>
            </div>
            <div class="team-member">
                <div class="avatar">RP</div>
                <h3>Robert Parker</h3>
                <div class="title">VP Engineering</div>
                <p>Built products at Shopify and Stripe. Scaling our engineering team globally.</p>
            </div>
            <div class="team-member">
                <div class="avatar">JR</div>
                <h3>James Rivera</h3>
                <div class="title">Head of AI</div>
                <p>PhD in Computer Vision. Pioneering AI diagnostics for automotive repair.</p>
            </div>
            <div class="team-member">
                <div class="avatar">ML</div>
                <h3>Maria Lopez</h3>
                <div class="title">Head of Design</div>
                <p>Design lead at Figma. Creating intuitive experiences for non-technical users.</p>
            </div>
            <div class="team-member">
                <div class="avatar">DC</div>
                <h3>David Chen</h3>
                <div class="title">VP Sales</div>
                <p>Enterprise sales veteran. Building trusted partnerships with shop networks.</p>
            </div>
            <div class="team-member">
                <div class="avatar">ER</div>
                <h3>Emma Rodriguez</h3>
                <div class="title">VP Marketing</div>
                <p>Growth marketing expert. Connecting with the auto shop community.</p>
            </div>
            <div class="team-member">
                <div class="avatar">MC</div>
                <h3>Marcus Chen</h3>
                <div class="title">Head of Customer Success</div>
                <p>Former shop manager. Ensuring every customer achieves their goals with TDAI.</p>
            </div>
        </div>
    </section>

    <section class="timeline-section">
        <div class="timeline-header">
            <h2>Our Journey</h2>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">From concept to industry leader</p>
        </div>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-year">2023</div>
                <div class="timeline-label">Founded</div>
                <div class="timeline-event">TDAI launches with core platform</div>
            </div>
            <div class="timeline-connector"></div>
            <div class="timeline-item">
                <div class="timeline-year">2024</div>
                <div class="timeline-label">First 100 Shops</div>
                <div class="timeline-event">Reached product-market fit</div>
            </div>
            <div class="timeline-connector"></div>
            <div class="timeline-item">
                <div class="timeline-year">2025</div>
                <div class="timeline-label">AI Diagnostics Launch</div>
                <div class="timeline-event">Revolutionary diagnostic tool released</div>
            </div>
            <div class="timeline-connector"></div>
            <div class="timeline-item">
                <div class="timeline-year">2026</div>
                <div class="timeline-label">500+ Active Shops</div>
                <div class="timeline-event">Expanding across North America</div>
            </div>
        </div>
    </section>

    <section class="culture-section">
        <div class="culture-header">
            <h2>What It's Like to Work at TDAI</h2>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">Our values define everything we do</p>
        </div>
        <div class="culture-grid">
            <div class="culture-card">
                <h3>Innovation</h3>
                <p>We're not afraid to challenge the status quo. Every team member is encouraged to propose ideas, experiment, and push boundaries. You'll work with cutting-edge AI technology solving real-world problems.</p>
            </div>
            <div class="culture-card">
                <h3>Customer-First</h3>
                <p>Every decision flows through one filter: will this help our customers? We listen obsessively to shop owners, technicians, and managers. Their success is our success. Full transparency, honest feedback, always.</p>
            </div>
            <div class="culture-card">
                <h3>Transparency</h3>
                <p>No hidden agendas. We share wins and challenges openly. Our customers know what's coming. Our team understands our goals and metrics. This openness builds trust and helps us move faster together.</p>
            </div>
            <div class="culture-card">
                <h3>Speed</h3>
                <p>We move fast without breaking things. Shipping quickly lets us learn from customers. We iterate, improve, and compound our progress. Speed enables us to stay ahead in a fast-moving industry.</p>
            </div>
        </div>
    </section>

    <section class="office-section">
        <div class="office-header">
            <h2>Our Offices</h2>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">Where the magic happens</p>
        </div>
        <div class="office-grid">
            <div class="office-card">
                <div class="office-image" style="background:linear-gradient(135deg,#0F1C38,#081020);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:200px;border-radius:12px;border:1px solid rgba(45,156,219,0.1);">
        <div style="font-size:2rem;font-weight:800;color:rgba(45,156,219,0.3);letter-spacing:0.1em;">HQ</div>
        <div style="font-size:0.8rem;color:#4D5F78;margin-top:8px;">San Francisco, CA</div>
    </div>
                <div class="office-info">
                    <h3>San Francisco, CA</h3>
                    <p>Headquarters. Where it all started. Home to our executive team, product, and design.</p>
                </div>
            </div>
            <div class="office-card">
                <div class="office-image" style="background:linear-gradient(135deg,#0A1528,#081020);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:200px;border-radius:12px;border:1px solid rgba(45,156,219,0.1);">
        <div style="font-size:2rem;font-weight:800;color:rgba(45,156,219,0.3);letter-spacing:0.1em;">R&D</div>
        <div style="font-size:0.8rem;color:#4D5F78;margin-top:8px;">Research Lab</div>
    </div>
                <div class="office-info">
                    <h3>Austin, TX</h3>
                    <p>Engineering hub. Growing team of full-stack and DevOps engineers building our infrastructure.</p>
                </div>
            </div>
            <div class="office-card">
                <div class="office-image" style="background:linear-gradient(135deg,#0C1830,#081020);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:200px;border-radius:12px;border:1px solid rgba(45,156,219,0.1);">
        <div style="font-size:2rem;font-weight:800;color:rgba(45,156,219,0.3);letter-spacing:0.1em;">OPS</div>
        <div style="font-size:0.8rem;color:#4D5F78;margin-top:8px;">Operations Center</div>
    </div>
                <div class="office-info">
                    <h3>Remote</h3>
                    <p>Distributed globally. From customer success to marketing, great talent exists everywhere.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="awards-section">
        <div class="awards-header">
            <h2>Recognition</h2>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">Recognized by industry leaders</p>
        </div>
        <div class="awards-container">
            <div class="award-badge">
                <h3>G2 Top Rated</h3>
                <p>Consistently ranked as a top automotive management solution by verified customer reviews.</p>
            </div>
            <div class="award-badge">
                <h3>Capterra Best Value</h3>
                <p>Recognized for delivering exceptional value and ROI to auto shop businesses of all sizes.</p>
            </div>
            <div class="award-badge">
                <h3>Inc. 5000 Fastest Growing</h3>
                <p>Named among America's fastest-growing private companies in SaaS and technology.</p>
            </div>
        </div>
    </section>

    <section class="investors-section">
        <div class="investors-container">
            <h2>Backed by Leaders</h2>
            <p style="color: var(--gray); font-size: 1rem; margin-top: 10px; margin-bottom: 30px;">Our investors believe in the future of automotive technology</p>
            <div class="investors-info">
                <h3>$12M Series A</h3>
                <p>Led by Accel Partners with participation from notable angel investors and automotive industry leaders</p>
                <div class="investors-list">
                    <div><span class="investor-name">Accel Partners</span> (Lead)</div>
                    <div><span class="investor-name">GGV Capital</span> (Participant)</div>
                    <div><span class="investor-name">Automotive Industry Angels</span> (Strategic Investors)</div>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="cta-content">
            <h2>Want to Join Our Mission?</h2>
            <p>Be part of a team transforming the automotive industry with AI.</p>
            <a href="/about" class="btn-white">View Open Positions</a>
        </div>
    </section>

    
<!-- NEXT PAGE NAVIGATION -->
<div class="next-page-cta">
      <div class="next-page-inner">
        <div class="next-page-label">Continue Exploring</div>
        <h2 class="next-page-title">Next: <span>Contact</span></h2>
        <p class="next-page-desc">Get in touch with us</p>
        <a href="/contact" class="next-page-btn">
          <span class="btn-text">Explore Contact</span>
          <span class="btn-arrow">&rarr;</span>
        </a>
        <div class="page-dots"><a href="/" class="page-dot"></a><a href="/features" class="page-dot"></a><a href="/solutions" class="page-dot"></a><a href="/pricing" class="page-dot"></a><a href="/integrations" class="page-dot"></a><a href="/demo" class="page-dot"></a><a href="/customers" class="page-dot"></a><a href="/resources" class="page-dot"></a><a href="/about" class="page-dot active"></a><a href="/contact" class="page-dot"></a></div>
        <div class="page-counter-text">Page 9 of 10</div>
      </div>
    </div>` }} />
  );
}
