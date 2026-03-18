import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo | TorqueDesk AI',
};

export default function DemoPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<style>
        /* Hero Section */
        .hero-demo {
            background: linear-gradient(135deg, #081020 0%, #0F1C38 100%);
            padding: 6rem 2rem;
            text-align: center;
            
        }

        .hero-demo h1 {
            font-size: 3rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 1rem;
            letter-spacing: -0.5px;
        }

        .hero-demo p {
            font-size: 1.2rem;
            color: #B0BCCC;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }

        .hero-subtext {
            font-size: 0.95rem;
            color: #2D9CDB;
            margin-top: 1.5rem;
            font-weight: 600;
        }

        /* Feature Selector */
        .feature-selector {
            padding: 3rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
            
        }

        .feature-selector h2 {
            font-size: 1.5rem;
            color: #fff;
            text-align: center;
            margin-bottom: 2.5rem;
            font-weight: 600;
        }

        .feature-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1.5rem;
        }

        .feature-card {
            background: #0C1528;
            border: 2px solid #142238;
            border-radius: 12px;
            padding: 2rem 1.5rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .feature-card:hover {
            border-color: #2D9CDB;
            transform: translateY(-4px);
        }

        .feature-card.active {
            background: linear-gradient(135deg, #2D9CDB 0%, #3B82C4 100%);
            border-color: #3B82C4;
            color: #081020;
        }

        .feature-icon {
            font-size: 2rem;
            margin-bottom: 0.75rem;
        }

        .feature-card h3 {
            font-size: 0.95rem;
            color: #fff;
            font-weight: 600;
            margin: 0;
        }

        .feature-card.active h3 {
            color: #081020;
        }

        /* Dashboard Preview */
        .dashboard-preview {
            padding: 3rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
            
        }

        .dashboard-preview h2 {
            font-size: 1.5rem;
            color: #fff;
            margin-bottom: 2rem;
            text-align: center;
            font-weight: 600;
        }

        .demo-sandbox {
            background: #0C1528;
            border: 1px solid #142238;
            border-radius: 12px;
            min-height: 700px;
            overflow: visible;
            display: grid;
            grid-template-columns: 220px 1fr;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            position: relative;
        }

        .demo-badge {
            position: absolute;
            top: 20px;
            right: 20px;
            background: #FF6B6B;
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            z-index: 10;
        }

        /* Sidebar */
        .demo-sidebar {
            background: #0A1225;
            border-right: 1px solid #142238;
            padding: 1.5rem 1rem;
        }

        .demo-sidebar h4 {
            font-size: 0.75rem;
            text-transform: uppercase;
            color: #8A94A6;
            margin-bottom: 1rem;
            letter-spacing: 1px;
            font-weight: 600;
        }

        .sidebar-nav {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .sidebar-item {
            padding: 0.6rem 0.8rem;
            color: #B0BCCC;
            font-size: 0.85rem;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
            border-left: 3px solid transparent;
        }

        .sidebar-item:hover {
            background: #142238;
            color: #fff;
        }

        .sidebar-item.active {
            background: rgba(45, 156, 219, 0.1);
            border-left-color: #2D9CDB;
            color: #2D9CDB;
        }

        /* Main Content Area */
        .demo-main {
            display: flex;
            flex-direction: column;
        }

        .demo-header {
            background: #0A1225;
            border-bottom: 1px solid #142238;
            padding: 1.25rem 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .demo-search {
            background: #0C1528;
            border: 1px solid #142238;
            border-radius: 6px;
            padding: 0.6rem 1rem;
            color: #8A94A6;
            font-size: 0.9rem;
            flex: 1;
            max-width: 250px;
        }

        .demo-header-right {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        .demo-icon-btn {
            width: 36px;
            height: 36px;
            background: #142238;
            border: none;
            border-radius: 6px;
            color: #B0BCCC;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            font-size: 1rem;
        }

        .demo-icon-btn:hover {
            background: #2D9CDB;
            color: #fff;
        }

        .demo-avatar {
            width: 36px;
            height: 36px;
            background: linear-gradient(135deg, #2D9CDB 0%, #3B82C4 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: 700;
            font-size: 0.85rem;
        }

        /* Content Area */
        .demo-content {
            padding: 2.5rem;
            flex: 1;
            overflow-y: auto;
        }

        .content-title {
            color: #fff;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 2rem;
        }

        .content-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .demo-card {
            background: #142238;
            border: 1px solid #0F1C38;
            border-radius: 8px;
            padding: 1.5rem;
        }

        .demo-card h3 {
            color: #B0BCCC;
            font-size: 0.85rem;
            margin-bottom: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .demo-stat {
            color: #2D9CDB;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .demo-stat-label {
            color: #8A94A6;
            font-size: 0.8rem;
        }

        .demo-bar {
            width: 100%;
            height: 6px;
            background: #0F1C38;
            border-radius: 3px;
            overflow: visible;
            margin-top: 1rem;
        }

        .demo-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, #2D9CDB 0%, #3B82C4 100%);
            border-radius: 3px;
            animation: growBar 1s ease-out;
        }

        @keyframes growBar {
            from { width: 0 !important; }
        }

        /* Activity Feed */
        .activity-feed {
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid #0F1C38;
        }

        .activity-title {
            color: #B0BCCC;
            font-size: 0.85rem;
            margin-bottom: 1rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .activity-item {
            display: flex;
            gap: 1rem;
            padding: 0.75rem 0;
            border-bottom: 1px solid #0F1C38;
        }

        .activity-item:last-child {
            border-bottom: none;
        }

        .activity-dot {
            width: 8px;
            height: 8px;
            background: #2D9CDB;
            border-radius: 50%;
            margin-top: 0.4rem;
            flex-shrink: 0;
        }

        .activity-text {
            color: #8A94A6;
            font-size: 0.85rem;
            line-height: 1.4;
        }

        .activity-text strong {
            color: #fff;
        }

        /* Try Features Section */
        .try-features {
            padding: 4rem 2rem;
            background: var(--navy);
            
        }

        .try-features-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .try-features h2 {
            font-size: 1.5rem;
            color: #fff;
            margin-bottom: 3rem;
            text-align: center;
            font-weight: 600;
        }

        .feature-demos {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
            gap: 2rem;
        }

        .feature-demo {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 2rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .feature-demo:hover {
            border-color: var(--accent);
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(45, 156, 219, 0.15);
        }

        .feature-demo h3 {
            font-size: 1.1rem;
            color: #fff;
            margin-bottom: 1rem;
            font-weight: 600;
        }

        .feature-demo p {
            color: var(--gray);
            font-size: 0.9rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }

        .demo-mockup {
            background: var(--navy);
            border: 1px solid var(--subtle);
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 1rem;
            min-height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            color: var(--gray);
            text-align: center;
        }

        .feature-demo-btn {
            display: inline-block;
            color: var(--secondary);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
        }

        .feature-demo-btn:hover {
            color: var(--accent);
        }

        /* Video Section */
        .video-section {
            padding: 4rem 2rem;
            background: linear-gradient(135deg, #0A1225 0%, #0C1528 100%);
            
        }

        .video-content {
            max-width: 1000px;
            margin: 0 auto;
            text-align: center;
        }

        .video-section h2 {
            font-size: 1.5rem;
            color: #fff;
            margin-bottom: 2rem;
            font-weight: 600;
        }

        .video-container {
            background: #081020;
            border: 1px solid #142238;
            border-radius: 12px;
            aspect-ratio: 16 / 9;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
            position: relative;
            overflow: visible;
        }

        .play-button {
            width: 80px;
            height: 80px;
            background: var(--accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 2rem;
            color: #081020;
        }

        .play-button:hover {
            background: var(--secondary);
            transform: scale(1.1);
        }

        .video-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        .video-info-item h4 {
            color: #fff;
            font-size: 1rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .video-info-item p {
            color: var(--gray);
            font-size: 0.9rem;
            line-height: 1.6;
        }

        /* Demo Form */
        .demo-form-section {
            padding: 4rem 2rem;
            background: var(--navy);
            
        }

        .demo-form-content {
            max-width: 500px;
            margin: 0 auto;
        }

        .demo-form-section h2 {
            font-size: 1.5rem;
            color: #fff;
            margin-bottom: 0.5rem;
            font-weight: 600;
            text-align: center;
        }

        .demo-form-section p {
            color: var(--gray);
            text-align: center;
            margin-bottom: 2rem;
            font-size: 0.95rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            color: #fff;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group select {
            width: 100%;
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 8px;
            padding: 0.75rem 1rem;
            color: #fff;
            font-size: 0.95rem;
            font-family: inherit;
            transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: var(--accent);
            box-shadow: 0 0 0 3px rgba(45, 156, 219, 0.1);
        }

        .form-group input::placeholder {
            color: #8A94A6;
        }

        .form-submit {
            width: 100%;
            background: var(--accent);
            color: #fff;
            padding: 1rem;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .form-submit:hover {
            background: var(--secondary);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(45, 156, 219, 0.3);
        }

        /* Comparison Section */
        .comparison-section {
            padding: 4rem 2rem;
            background: linear-gradient(135deg, #0A1225 0%, #0C1528 100%);
            
        }

        .comparison-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .comparison-section h2 {
            font-size: 1.5rem;
            color: #fff;
            margin-bottom: 3rem;
            text-align: center;
            font-weight: 600;
        }

        .comparison-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        .comparison-item-demo {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 2rem;
        }

        .comparison-item-demo.tdai {
            border-color: var(--accent);
            background: linear-gradient(135deg, rgba(45, 156, 219, 0.05) 0%, rgba(59,130,196, 0.05) 100%);
        }

        .comparison-badge {
            display: inline-block;
            background: var(--accent);
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 1rem;
        }

        .comparison-item-demo h3 {
            font-size: 1.2rem;
            color: #fff;
            margin-bottom: 1.5rem;
            font-weight: 600;
        }

        .comparison-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .comparison-list-item {
            color: var(--gray);
            font-size: 0.95rem;
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
        }

        .comparison-list-item.included {
            color: #fff;
        }

        .comparison-check {
            color: var(--secondary);
            font-weight: 700;
            margin-top: 2px;
            font-size: 1.1rem;
        }

        .comparison-list-item.excluded {
            opacity: 0.5;
        }

        .comparison-x {
            color: #ff6b6b;
            font-weight: 700;
            margin-top: 2px;
            font-size: 1.1rem;
        }

        /* How It Works */
        .how-it-works {
            padding: 4rem 2rem;
            background: var(--navy);
            
        }

        .how-it-works-content {
            max-width: 1000px;
            margin: 0 auto;
        }

        .how-it-works h2 {
            font-size: 1.5rem;
            color: #fff;
            margin-bottom: 3rem;
            text-align: center;
            font-weight: 600;
        }

        .steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .step {
            text-align: center;
        }

        .step-number {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #2D9CDB 0%, #3B82C4 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #081020;
            font-weight: 700;
            font-size: 1.5rem;
            margin: 0 auto 1.5rem;
        }

        .step h3 {
            color: #fff;
            font-size: 1.1rem;
            margin-bottom: 0.75rem;
            font-weight: 600;
        }

        .step p {
            color: #8A94A6;
            line-height: 1.6;
            font-size: 0.95rem;
        }

        /* CTA Section */
        .cta-section-demo {
            background: linear-gradient(135deg, #2D9CDB 0%, #3B82C4 100%);
            padding: 3rem 2rem;
            text-align: center;
            
        }

        .cta-section-demo h2 {
            color: #081020;
            font-size: 2rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .cta-section-demo p {
            color: #081020;
            font-size: 1.05rem;
            margin-bottom: 2rem;
            opacity: 0.95;
        }

        .cta-btn-demo {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: #081020;
            color: #2D9CDB;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            transition: all 0.3s ease;
            font-size: 1rem;
        }

        .cta-btn-demo:hover {
            background: #040812;
            color: #3B82C4;
        }

        @media (max-width: 768px) {
            .hero-demo h1 {
                font-size: 2rem;
            }

            .demo-sandbox {
                grid-template-columns: 1fr;
                min-height: 400px;
            }

            .demo-sidebar {
                display: none;
            }

            .feature-cards {
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            }

            .how-it-works h2,
            .cta-section-demo h2 {
                font-size: 1.5rem;
            }

            .comparison-grid {
                grid-template-columns: 1fr;
            }

            .video-info {
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

/* ============== MOBILE APP SECTION STYLES ============== */
/* Hero Section */
.hero-mobile {
    background: linear-gradient(135deg, #081020 0%, #0F1C38 100%);
    padding: 6rem 2rem;
    text-align: center;

}

.hero-mobile h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
    letter-spacing: -0.5px;
}

.hero-mobile p {
    font-size: 1.2rem;
    color: #B0BCCC;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Phone Mockup Section */
.phone-section {
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #0A1225 0%, #0C1528 100%);

}

.phone-container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
}

/* Phone Frame */
.phone-mockup {
    width: 300px;
    height: 600px;
    background: #000;
    border: 12px solid #1B1B1B;
    border-radius: 40px;
    padding: 8px;
    position: relative;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    overflow: visible;
}

.phone-mockup::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 25px;
    background: #000;
    border-radius: 0 0 20px 20px;
    z-index: 20;
}

.phone-screen {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0C1528 0%, #0A1225 100%);
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    padding: 40px 20px 20px;
    box-sizing: border-box;
    overflow: visible;
}

.phone-status-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-size: 0.75rem;
    color: #B0BCCC;
}

.phone-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.phone-header {
    background: linear-gradient(135deg, #2D9CDB 0%, #3B82C4 100%);
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 15px;
    color: #081020;
}

.phone-header h2 {
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0 0 5px 0;
}

.phone-header p {
    font-size: 0.7rem;
    margin: 0;
    opacity: 0.9;
}

.phone-card {
    background: #142238;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 10px;
    border: 1px solid #0F1C38;
}

.phone-card-title {
    font-size: 0.75rem;
    color: #B0BCCC;
    margin-bottom: 5px;
}

.phone-card-value {
    font-size: 1rem;
    font-weight: 700;
    color: #2D9CDB;
}

.phone-bottom {
    display: flex;
    gap: 8px;
    margin-top: auto;
}

.phone-btn {
    flex: 1;
    background: #2D9CDB;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 8px;
    font-size: 0.7rem;
    font-weight: 600;
    cursor: pointer;
}

/* Phone Info */
.phone-info {
    flex: 1;
    min-width: 0;
}

.phone-info h2 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 1.5rem;
    font-weight: 700;
}

.info-highlight {
    background: rgba(45, 156, 219, 0.1);
    border-left: 4px solid #2D9CDB;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
}

.info-highlight h3 {
    color: #2D9CDB;
    font-size: 0.95rem;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
}

.info-highlight p {
    color: #B0BCCC;
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
}

/* Mobile Modes Section */
.mobile-modes-section {
    padding: 4rem 2rem;
    background: linear-gradient(135deg, var(--dark-blue) 0%, var(--navy) 100%);
}

.mobile-modes-content {
    max-width: 1200px;
    margin: 0 auto;
}

.mobile-modes-section h2 {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 700;

}

.modes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.mode-card {
    background: var(--card);
    border: 1px solid var(--subtle);
    border-radius: 12px;
    padding: 35px;

    opacity: 1;
}

.mode-card:hover {
    border-color: var(--accent);
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(45, 156, 219, 0.15);
}

.mode-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--accent), var(--secondary));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin-bottom: 15px;
}

.mode-card h3 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-weight: 600;
}

.mode-card p {
    color: var(--gray);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 15px;
}

.mode-features {
    list-style: none;
    padding: 0;
    margin: 0;
}

.mode-features li {
    color: var(--light-gray);
    font-size: 0.9rem;
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
}

.mode-features li::before {
    content: '\\2713';
    position: absolute;
    left: 0;
    color: var(--secondary);
    font-weight: bold;
}

/* Mobile Features */
.mobile-features {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;

}

.mobile-features h2 {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 700;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-box {
    background: #0C1528;
    border: 1px solid #142238;
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;

    opacity: 1;
}

.feature-box:hover {
    border-color: #2D9CDB;
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(45, 156, 219, 0.1);
}

.feature-icon-large {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #2D9CDB 0%, #3B82C4 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
}

.feature-box h3 {
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
}

.feature-box p {
    color: #8A94A6;
    font-size: 0.95rem;
    line-height: 1.6;
}

/* Offline Mode Section */
.offline-section {
    background: linear-gradient(135deg, #0F1C38 0%, #081020 100%);
    padding: 4rem 2rem;
    border-top: 1px solid var(--subtle);
    border-bottom: 1px solid var(--subtle);
}

.offline-container {
    max-width: 1000px;
    margin: 0 auto;

}

.offline-section h2 {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 700;
}

.offline-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.offline-icon-box {
    text-align: center;
}

.offline-large-icon {
    font-size: 80px;
    margin-bottom: 1rem;
}

.offline-features {
    list-style: none;
    padding: 0;
    margin: 0;
}

.offline-features li {
    color: var(--light-gray);
    font-size: 1rem;
    margin-bottom: 15px;
    padding-left: 30px;
    position: relative;
    line-height: 1.5;
}

.offline-features li::before {
    content: '\\2713';
    position: absolute;
    left: 0;
    color: var(--secondary);
    font-weight: bold;
    font-size: 1.2rem;
}

/* App Store Buttons */
.app-buttons {
    padding: 3rem 2rem;
    text-align: center;

}

.app-buttons h2 {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 2rem;
    font-weight: 600;
}

.buttons-group {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.app-btn {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
    background: #0C1528;
    border: 2px solid #142238;
    border-radius: 8px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.app-btn:hover {
    border-color: #2D9CDB;
    background: #0F1C38;
}

.app-icon {
    font-size: 1.5rem;
}

.app-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.app-label {
    font-size: 0.75rem;
    color: #8A94A6;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.app-name {
    font-size: 1rem;
    font-weight: 700;
}

.app-buttons > p {
    color: #8A94A6;
    font-size: 0.9rem;
    margin: 0;
}

/* Screenshots Section */
.screenshots-section {
    padding: 4rem 2rem;
    background: linear-gradient(135deg, var(--dark-blue) 0%, var(--navy) 100%);
}

.screenshots-container {
    max-width: 1200px;
    margin: 0 auto;
}

.screenshots-section h2 {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 700;

}

.screenshots-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
}

.screenshot-mockup {
    background: var(--card);
    border: 1px solid var(--subtle);
    border-radius: 20px;
    overflow: visible;

    opacity: 1;
}

.screenshot-content {
    aspect-ratio: 9/16;
    background: linear-gradient(135deg, #0F1C38 0%, #081020 100%);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.screenshot-header {
    background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
    border-radius: 8px;
    padding: 12px;
    color: #081020;
    text-align: center;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 15px;
}

.screenshot-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.screenshot-item {
    background: rgba(45, 156, 219, 0.1);
    border-radius: 8px;
    padding: 12px;
    border-left: 3px solid var(--secondary);
}

.screenshot-item-title {
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 4px;
}

.screenshot-item-value {
    color: var(--secondary);
    font-size: 0.95rem;
    font-weight: 700;
}

.screenshot-label {
    text-align: center;
    color: var(--gray);
    font-size: 0.8rem;
    margin-top: 15px;
    font-weight: 500;
}

/* CTA Section - Mobile */
.cta-section-mobile {
    background: linear-gradient(135deg, #2D9CDB 0%, #3B82C4 100%);
    padding: 3rem 2rem;
    text-align: center;

}

.cta-section-mobile h2 {
    color: #081020;
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.cta-section-mobile p {
    color: #081020;
    font-size: 1.05rem;
    margin-bottom: 2rem;
    opacity: 0.95;
}

.cta-btn-mobile {
    display: inline-block;
    padding: 1rem 2.5rem;
    background: #081020;
    color: #2D9CDB;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.cta-btn-mobile:hover {
    background: #040812;
    color: #3B82C4;
}

/* ============== MIGRATION PAGE SECTION STYLES ============== */
/* Migration Hero */
.migration-hero {
    background: linear-gradient(135deg, var(--hero) 0%, var(--dark-blue) 100%);
    padding: 100px 20px;
    text-align: center;
    position: relative;
    overflow: visible;
}

.migration-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(59,130,196, 0.1) 0%, transparent 70%);
    border-radius: 50%;
}

.migration-hero::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(45, 156, 219, 0.05) 0%, transparent 70%);
    border-radius: 50%;
}

.migration-hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;

}

.migration-hero h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #fff;
    letter-spacing: -1px;
}

.migration-hero p {
    font-size: 1.2rem;
    color: var(--gray);
    margin-bottom: 10px;
    line-height: 1.6;
}

.migration-guarantee {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 40px;
    flex-wrap: wrap;
}

.migration-guarantee-badge {
    background: rgba(59,130,196, 0.15);
    border: 1px solid rgba(59,130,196, 0.3);
    padding: 12px 18px;
    border-radius: 20px;
    display: inline-block;
    font-weight: 600;
    color: var(--secondary);
}

/* Migration Sources Section */
.migration-sources-section {
    padding: 80px 40px;
    max-width: 1200px;
    margin: 0 auto;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;

}

.section-header h2 {
    font-size: 2.2rem;
    color: #fff;
    margin-bottom: 15px;
    font-weight: 700;
}

.section-header p {
    color: var(--gray);
    font-size: 1.05rem;
}

.sources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.source-card {
    background: var(--card);
    border: 2px solid var(--subtle);
    border-radius: 12px;
    padding: 30px 25px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;

    opacity: 1;
}

.source-card:hover {
    border-color: var(--accent);
    background: rgba(45, 156, 219, 0.1);
    transform: translateY(-5px);
}

.source-card h3 {
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: 20px;
    font-weight: 600;
}

.source-benefits {
    list-style: none;
    padding: 0;
}

.source-benefits li {
    color: var(--light-gray);
    font-size: 0.85rem;
    margin-bottom: 12px;
    padding-left: 20px;
    position: relative;
    line-height: 1.4;
    text-align: left;
}

.source-benefits li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--secondary);
    font-weight: bold;
}

/* Migration Timeline Section */
.timeline-section {
    background: linear-gradient(135deg, var(--dark-blue) 0%, var(--navy) 100%);
    padding: 80px 40px;
}

.timeline-container {
    max-width: 1000px;
    margin: 0 auto;
}

.timeline-section h2 {
    font-size: 2.2rem;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;

}

.timeline-section > p {
    text-align: center;
    color: var(--gray);
    margin-bottom: 60px;
    font-size: 1rem;
}

.timeline-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    position: relative;
    margin-top: 50px;
}

.timeline-step {
    background: var(--card);
    border: 1px solid var(--subtle);
    border-radius: 12px;
    padding: 35px 25px;
    text-align: center;
    position: relative;

    opacity: 1;
}

.step-day {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--accent), var(--secondary));
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 auto 20px;
}

.timeline-step h3 {
    font-size: 1.1rem;
    color: #fff;
    margin-bottom: 15px;
    font-weight: 600;
}

.timeline-step p {
    color: var(--gray);
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
}

@media (min-width: 769px) {
    .timeline-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .timeline-step:not(:last-child)::after {
        content: '→';
        position: absolute;
        right: -38px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        color: var(--accent);
        font-weight: bold;
    }
}

/* What We Don't Migrate Section */
.transparency-section {
    padding: 80px 40px;
    max-width: 1000px;
    margin: 0 auto;
}

.transparency-section h2 {
    font-size: 2.2rem;
    margin-bottom: 60px;
    color: #fff;
    text-align: center;

}

.transparency-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.transparency-card {
    background: var(--card);
    border: 1px solid var(--subtle);
    border-radius: 12px;
    padding: 30px;

    opacity: 1;
}

.transparency-icon {
    width: 50px;
    height: 50px;
    background: rgba(45, 156, 219, 0.15);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-bottom: 15px;
}

.transparency-card h3 {
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: 15px;
    font-weight: 600;
}

.transparency-card p {
    color: var(--gray);
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
}

/* Case Study Section */
.case-study-section {
    padding: 80px 40px;
    max-width: 1000px;
    margin: 0 auto;
}

.case-study-section h2 {
    font-size: 2.2rem;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;

}

.case-study-section > p {
    text-align: center;
    color: var(--gray);
    margin-bottom: 50px;
    font-size: 1rem;
}

.case-study-card {
    background: var(--card);
    border: 1px solid var(--subtle);
    border-radius: 12px;
    padding: 50px;

}

.case-study-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
}

.case-study-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--accent), var(--secondary));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    flex-shrink: 0;
}

.case-study-info h3 {
    color: #fff;
    font-size: 1.3rem;
    margin: 0 0 5px 0;
    font-weight: 600;
}

.case-study-info p {
    color: var(--gray);
    margin: 0;
    font-size: 0.95rem;
}

.case-study-content {
    margin-bottom: 30px;
}

.case-study-content p {
    color: var(--light-gray);
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 15px;
}

.case-study-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding-top: 30px;
    border-top: 1px solid var(--subtle);
}

.case-metric {
    text-align: center;
}

.case-metric-value {
    color: var(--secondary);
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 5px;
}

.case-metric-label {
    color: var(--gray);
    font-size: 0.9rem;
}

/* What Gets Migrated Section */
.migration-checklist-section {
    padding: 80px 40px;
    max-width: 900px;
    margin: 0 auto;
}

.checklist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;
}

.checklist-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: var(--card);
    border-left: 3px solid var(--secondary);
    border-radius: 8px;

    opacity: 1;
}

.checklist-icon {
    font-size: 24px;
    flex-shrink: 0;
}

.checklist-item p {
    color: var(--light-gray);
    font-size: 0.95rem;
    margin: 0;
}

/* Stats Section */
.migration-stats {
    background: linear-gradient(135deg, var(--dark-blue) 0%, var(--navy) 100%);
    padding: 60px 40px;
    margin: 80px 0;
    border-radius: 15px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

.stat-item {

    opacity: 1;
}

.stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--accent), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 10px;
}

.stat-label {
    color: var(--gray);
    font-size: 0.95rem;
    font-weight: 500;
}

/* Migration Comparison Section */
.migration-comparison-section {
    padding: 80px 40px;
    max-width: 1200px;
    margin: 0 auto;
}

.migration-comparison-section .comparison-table {
    background: var(--card);
    border: 1px solid var(--subtle);
    border-radius: 12px;
    overflow: hidden;
    margin-top: 40px;
}

.migration-comparison-section .comparison-table table {
    width: 100%;
    border-collapse: collapse;
}

.migration-comparison-section .comparison-table th {
    background: var(--subtle);
    color: #fff;
    padding: 20px;
    text-align: left;
    font-weight: 600;
    font-size: 0.95rem;
    border-bottom: 2px solid var(--dark-blue);
}

.migration-comparison-section .comparison-table td {
    padding: 18px 20px;
    border-bottom: 1px solid var(--subtle);
    font-size: 0.9rem;
    color: var(--light-gray);
}

.migration-comparison-section .comparison-table tr:last-child td {
    border-bottom: none;
}

.migration-comparison-section .comparison-table .feature-name {
    color: #fff;
    font-weight: 600;
}

.migration-comparison-section .comparison-table .tdai-advantage {
    color: var(--secondary);
}

.migration-comparison-section .tdai-check {
    color: var(--secondary);
    font-weight: bold;
}

.migration-comparison-section .competitor-cross {
    color: var(--gray);
}

/* FAQ Section */
.faq-section {
    padding: 80px 40px;
    background: linear-gradient(135deg, var(--dark-blue) 0%, var(--navy) 100%);
}

.faq-container {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    background: var(--card);
    border: 1px solid var(--subtle);
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: visible;

    opacity: 1;
}

.faq-question {
    padding: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    transition: all 0.3s ease;
}

.faq-question:hover {
    background: rgba(45, 156, 219, 0.1);
}

.faq-question h3 {
    color: #fff;
    font-size: 1rem;
    margin: 0;
    font-weight: 600;
}

.faq-toggle {
    color: var(--accent);
    font-size: 1.5rem;
    transition: transform 0.3s ease;
}

.faq-item.active .faq-toggle {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: visible;
    transition: max-height 0.3s ease;
    padding: 0 20px;
    color: var(--gray);
    font-size: 0.9rem;
    line-height: 1.6;
}

.faq-item.active .faq-answer {
    max-height: 500px;
    padding: 0 20px 20px 20px;
}

/* Migration CTA Form */
.migration-cta-section {
    padding: 80px 40px;
    max-width: 600px;
    margin: 0 auto;
}

.migration-form {
    background: var(--card);
    border: 1px solid var(--subtle);
    border-radius: 12px;
    padding: 50px;

}

.migration-form h2 {
    font-size: 1.8rem;
    color: #fff;
    margin-bottom: 10px;
    font-weight: 700;
}

.migration-form .intro {
    color: var(--gray);
    margin-bottom: 35px;
    font-size: 0.95rem;
}

.migration-form .form-group {
    margin-bottom: 20px;
}

.migration-form .form-group label {
    display: block;
    color: #fff;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 0.9rem;
}

.migration-form .form-group input,
.migration-form .form-group select {
    width: 100%;
    padding: 12px 15px;
    background: var(--subtle);
    border: 1px solid var(--subtle);
    border-radius: 6px;
    color: #fff;
    font-size: 0.9rem;
    font-family: inherit;
    transition: all 0.3s ease;
}

.migration-form .form-group input::placeholder {
    color: var(--gray);
}

.migration-form .form-group input:focus,
.migration-form .form-group select:focus {
    outline: none;
    border-color: var(--accent);
    background: rgba(45, 156, 219, 0.05);
}

.migration-form .form-group select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238A94A6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 20px;
    padding-right: 40px;
}

.form-submit {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, var(--accent), var(--secondary));
    color: #fff;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
}

.form-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(45, 156, 219, 0.3);
}

.guarantee-section {
    background: rgba(59,130,196, 0.1);
    border: 1px solid rgba(59,130,196, 0.3);
    border-radius: 8px;
    padding: 20px;
    margin-top: 30px;
    text-align: center;
}

.guarantee-section h4 {
    color: var(--secondary);
    font-size: 0.9rem;
    margin: 0 0 8px 0;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.guarantee-section p {
    color: var(--light-gray);
    font-size: 0.85rem;
    margin: 0;
    line-height: 1.4;
}

/* Mobile and Tablet Responsive */
@media (max-width: 1024px) {
    .phone-container {
        flex-direction: column;
        gap: 2rem;
    }

    .phone-info {
        text-align: center;
    }

    .phone-info h2 {
        font-size: 1.5rem;
    }

    .offline-content {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .hero-mobile h1 {
        font-size: 2rem;
    }

    .phone-mockup {
        width: 250px;
        height: 500px;
    }

    .buttons-group {
        gap: 1rem;
    }

    .app-btn {
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
    }

    .cta-section-mobile h2 {
        font-size: 1.5rem;
    }

    .mobile-features h2 {
        font-size: 1.5rem;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .migration-hero h1 {
        font-size: 2.2rem;
    }

    .migration-guarantee {
        flex-direction: column;
        gap: 15px;
    }

    .sources-grid {
        grid-template-columns: 1fr;
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }

    .migration-comparison-section .comparison-table {
        font-size: 0.85rem;
    }

    .migration-comparison-section .comparison-table th,
    .migration-comparison-section .comparison-table td {
        padding: 12px;
    }

    .migration-form {
        padding: 30px;
    }

    .case-study-metrics {
        grid-template-columns: 1fr;
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
<!-- Hero Section -->
    <div class="hero-demo">
        <h1>Experience TDAI — No Signup Required</h1>
        <p>Click around our fully interactive dashboard. See exactly how TorqueDesk AI works before committing to anything.</p>
        <div class="hero-subtext">Try the features. Explore the interface. Test drive the future of auto shop management.</div>
    </div>

    <!-- Feature Selector -->
    <div class="feature-selector">
        <h2>Choose a Feature to Explore</h2>
        <div class="feature-cards">
            <div class="feature-card active" data-feature="dashboard">
                <div class="feature-icon">RPT</div>
                <h3>Dashboard</h3>
            </div>
            <div class="feature-card" data-feature="diagnostics">
                <div class="feature-icon">FIX</div>
                <h3>AI Diagnostics</h3>
            </div>
            <div class="feature-card" data-feature="scheduling">
                <div class="feature-icon">CAL</div>
                <h3>Smart Scheduling</h3>
            </div>
            <div class="feature-card" data-feature="invoicing">
                <div class="feature-icon">DOC</div>
                <h3>Invoicing</h3>
            </div>
            <div class="feature-card" data-feature="crm">
                <div class="feature-icon">CRM</div>
                <h3>CRM</h3>
            </div>
            <div class="feature-card" data-feature="inventory">
                <div class="feature-icon">INV</div>
                <h3>Inventory</h3>
            </div>
        </div>
    </div>

    <!-- Dashboard Preview -->
    <div class="dashboard-preview">
        <h2 data-title="dashboard">Dashboard Overview</h2>
        <div class="demo-sandbox">
            <div class="demo-badge">DEMO MODE</div>

            <!-- Sidebar -->
            <div class="demo-sidebar">
                <h4>Menu</h4>
                <div class="sidebar-nav">
                    <div class="sidebar-item active" data-menu="dashboard">Dashboard</div>
                    <div class="sidebar-item" data-menu="jobs">Work Orders</div>
                    <div class="sidebar-item" data-menu="scheduling">Scheduling</div>
                    <div class="sidebar-item" data-menu="customers">Customers</div>
                    <div class="sidebar-item" data-menu="invoices">Invoices</div>
                    <div class="sidebar-item" data-menu="inventory">Inventory</div>
                    <div class="sidebar-item" data-menu="reports">Reports</div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="demo-main">
                <div class="demo-header">
                    <input type="text" class="demo-search" placeholder="Search work orders, customers...">
                    <div class="demo-header-right">
                        <button class="demo-icon-btn">ALRT</button>
                        <button class="demo-icon-btn">CFG</button>
                        <div class="demo-avatar">JD</div>
                    </div>
                </div>

                <div class="demo-content">
                    <div class="content-title" data-title="dashboard">Dashboard</div>

                    <div class="content-grid">
                        <div class="demo-card">
                            <h3>Today's Revenue</h3>
                            <div class="demo-stat">$8,450</div>
                            <div class="demo-stat-label">On pace for $36K/week</div>
                            <div class="demo-bar">
                                <div class="demo-bar-fill" style="width: 84%"></div>
                            </div>
                        </div>

                        <div class="demo-card">
                            <h3>Active Jobs</h3>
                            <div class="demo-stat">12</div>
                            <div class="demo-stat-label">3 ready for pickup</div>
                            <div class="demo-bar">
                                <div class="demo-bar-fill" style="width: 75%"></div>
                            </div>
                        </div>

                        <div class="demo-card">
                            <h3>Pending Estimates</h3>
                            <div class="demo-stat">5</div>
                            <div class="demo-stat-label">Awaiting customer approval</div>
                            <div class="demo-bar">
                                <div class="demo-bar-fill" style="width: 35%"></div>
                            </div>
                        </div>

                        <div class="demo-card">
                            <h3>Bay Utilization</h3>
                            <div class="demo-stat">87%</div>
                            <div class="demo-stat-label">7 of 8 bays in use</div>
                            <div class="demo-bar">
                                <div class="demo-bar-fill" style="width: 87%"></div>
                            </div>
                        </div>

                        <div class="demo-card">
                            <h3>Customer Rating</h3>
                            <div class="demo-stat">4.8*</div>
                            <div class="demo-stat-label">From 128 recent reviews</div>
                            <div class="demo-bar">
                                <div class="demo-bar-fill" style="width: 96%"></div>
                            </div>
                        </div>

                        <div class="demo-card">
                            <h3>Team Efficiency</h3>
                            <div class="demo-stat">94%</div>
                            <div class="demo-stat-label">Jobs completed on time</div>
                            <div class="demo-bar">
                                <div class="demo-bar-fill" style="width: 94%"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Activity Feed -->
                    <div class="activity-feed">
                        <div class="activity-title">Recent Activity</div>
                        <div class="activity-item">
                            <div class="activity-dot"></div>
                            <div class="activity-text"><strong>Work Order #2847</strong> completed by Mike S. (Brake service, 2.5 hrs)</div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-dot"></div>
                            <div class="activity-text"><strong>Customer payment</strong> received from Sarah M. ($620.00 for oil change + inspection)</div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-dot"></div>
                            <div class="activity-text"><strong>Estimate #1204</strong> approved by James H. (Transmission flush, $1,200)</div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-dot"></div>
                            <div class="activity-text"><strong>Inventory alert:</strong> Oil filter stock down to 8 units (auto-reorder queued)</div>
                        </div>
                        <div class="activity-item">
                            <div class="activity-dot"></div>
                            <div class="activity-text"><strong>SMS reminder sent</strong> to 14 customers about upcoming service appointments</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Try Features Section -->
    <div class="try-features">
        <div class="try-features-content">
            <h2>Try These Interactive Features</h2>
            <div class="feature-demos">
                <!-- AI Diagnostics Demo -->
                <div class="feature-demo">
                    <h3>AI Diagnostics Engine</h3>
                    <p>Input a vehicle symptom and watch the AI suggest probable causes and solutions in real time.</p>
                    <div class="demo-mockup">
                        <div style="width: 100%;">
                            <div style="background: var(--navy); padding: 0.75rem; border-radius: 4px; margin-bottom: 0.5rem; color: var(--gray); text-align: left; font-size: 0.8rem;">Vehicle: 2018 Honda CR-V</div>
                            <div style="background: var(--navy); padding: 0.75rem; border-radius: 4px; color: var(--gray); text-align: left; font-size: 0.8rem;">Symptom: Check engine light, rough idle</div>
                            <div style="background: rgba(45, 156, 219, 0.2); padding: 0.75rem; border-radius: 4px; margin-top: 0.5rem; color: #2D9CDB; text-align: left; font-size: 0.8rem; font-weight: 600;">AI Diagnosis: 73% likely faulty O2 sensor, 15% spark plug issue, 12% fuel injector</div>
                        </div>
                    </div>
                    <a href="#" class="feature-demo-btn">Try Diagnostics Demo →</a>
                </div>

                <!-- Scheduling Demo -->
                <div class="feature-demo">
                    <h3>Smart Scheduling</h3>
                    <p>See how TDAI finds the perfect appointment slots and sends automated reminders.</p>
                    <div class="demo-mockup">
                        <div style="width: 100%; text-align: left;">
                            <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.25rem;">
                                <div style="background: #2D9CDB; padding: 0.4rem; border-radius: 2px; font-size: 0.7rem; color: #081020; font-weight: 600;">Mon</div>
                                <div style="background: #2D9CDB; padding: 0.4rem; border-radius: 2px; font-size: 0.7rem; color: #081020; font-weight: 600;">Tue</div>
                                <div style="background: #2D9CDB; padding: 0.4rem; border-radius: 2px; font-size: 0.7rem; color: #081020; font-weight: 600;">Wed</div>
                                <div style="background: #3B82C4; padding: 0.4rem; border-radius: 2px; font-size: 0.7rem; color: #081020; font-weight: 600;">Thu</div>
                                <div style="background: #3B82C4; padding: 0.4rem; border-radius: 2px; font-size: 0.7rem; color: #081020; font-weight: 600;">Fri</div>
                                <div style="background: var(--navy); padding: 0.4rem; border-radius: 2px; font-size: 0.7rem; color: var(--gray);">Sat</div>
                                <div style="background: var(--navy); padding: 0.4rem; border-radius: 2px; font-size: 0.7rem; color: var(--gray);">Sun</div>
                            </div>
                            <div style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--gray);">8 appointments scheduled, 2 slots available</div>
                        </div>
                    </div>
                    <a href="#" class="feature-demo-btn">Try Scheduling Demo →</a>
                </div>

                <!-- Invoice Demo -->
                <div class="feature-demo">
                    <h3>Invoice Generator</h3>
                    <p>Create professional invoices with automatic line items, tax calculation, and payment links.</p>
                    <div class="demo-mockup">
                        <div style="width: 100%; text-align: left; font-size: 0.75rem;">
                            <div style="background: var(--navy); padding: 0.5rem; border-radius: 4px; margin-bottom: 0.25rem;">
                                <div style="color: var(--gray);">Oil Change + Filter</div>
                                <div style="color: #2D9CDB; font-weight: 600;">$85.00</div>
                            </div>
                            <div style="background: var(--navy); padding: 0.5rem; border-radius: 4px; margin-bottom: 0.25rem;">
                                <div style="color: var(--gray);">Labor (2 hrs @ $75/hr)</div>
                                <div style="color: #2D9CDB; font-weight: 600;">$150.00</div>
                            </div>
                            <div style="background: rgba(45, 156, 219, 0.2); padding: 0.5rem; border-radius: 4px; border-top: 1px solid #2D9CDB;">
                                <div style="color: var(--gray);">Total (incl. tax)</div>
                                <div style="color: #3B82C4; font-weight: 600;">$255.00</div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="feature-demo-btn">Try Invoice Demo →</a>
                </div>

                <!-- CRM Demo -->
                <div class="feature-demo">
                    <h3>Customer Relationship Manager</h3>
                    <p>View complete customer profiles with service history, preferences, and automated follow-ups.</p>
                    <div class="demo-mockup">
                        <div style="width: 100%; text-align: left;">
                            <div style="background: var(--navy); padding: 0.5rem; border-radius: 4px; margin-bottom: 0.25rem;">
                                <div style="color: #fff; font-weight: 600; font-size: 0.8rem;">Sarah Mitchell</div>
                                <div style="color: var(--gray); font-size: 0.7rem;">Repeat customer • 6 visits</div>
                            </div>
                            <div style="background: var(--navy); padding: 0.5rem; border-radius: 4px; font-size: 0.7rem; color: var(--gray);">
                                Last visit: 3 weeks ago (Oil change)<br>Next due: 6 weeks (Inspection)
                            </div>
                            <div style="background: rgba(59,130,196, 0.2); padding: 0.5rem; border-radius: 4px; margin-top: 0.25rem; font-size: 0.7rem; color: #3B82C4; font-weight: 600;">
                                Auto-reminder scheduled
                            </div>
                        </div>
                    </div>
                    <a href="#" class="feature-demo-btn">Try CRM Demo →</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Video Section -->
    <div class="video-section">
        <div class="video-content">
            <h2>Watch the Complete Walkthrough</h2>
            <div class="video-container">
                <div class="play-button">></div>
            </div>
            <div class="video-info">
                <div class="video-info-item">
                    <h4>3-Minute Walkthrough</h4>
                    <p>See how TDAI works from setup to first job scheduled. Covers the dashboard, key features, and mobile access.</p>
                </div>
                <div class="video-info-item">
                    <h4>Real Data, Real Results</h4>
                    <p>Watch an actual shop using TDAI in production. Learn how technicians use the platform to save time and increase revenue.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Demo Form Section -->
    <div class="demo-form-section">
        <div class="demo-form-content">
            <h2>Book a Live Personalized Demo</h2>
            <p>See TDAI customized for your shop type and current workflow</p>
            <form id="demoForm" onsubmit="handleFormSubmit(event)">
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="John Smith" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="john@shop.com" required>
                </div>
                <div class="form-group">
                    <label for="shopName">Shop Name</label>
                    <input type="text" id="shopName" name="shopName" placeholder="Smith's Auto Repair" required>
                </div>
                <div class="form-group">
                    <label for="bays">Number of Service Bays</label>
                    <select id="bays" name="bays" required>
                        <option value="">Select...</option>
                        <option value="1-2">1-2 Bays</option>
                        <option value="3-4">3-4 Bays</option>
                        <option value="5-8">5-8 Bays</option>
                        <option value="9-15">9-15 Bays</option>
                        <option value="15+">15+ Bays</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="time">Preferred Demo Time</label>
                    <select id="time" name="time" required>
                        <option value="">Select...</option>
                        <option value="morning">Morning (9-12 AM)</option>
                        <option value="afternoon">Afternoon (1-5 PM)</option>
                        <option value="evening">Evening (after 5 PM)</option>
                        <option value="flexible">Flexible</option>
                    </select>
                </div>
                <button type="submit" class="form-submit">Schedule Your Demo</button>
            </form>
        </div>
    </div>

    <!-- Comparison Section -->
    <div class="comparison-section">
        <div class="comparison-content">
            <h2>Why Our Demo is Different</h2>
            <div class="comparison-grid">
                <div class="comparison-item-demo tdai">
                    <div class="comparison-badge">TDAI</div>
                    <h3>TorqueDesk AI</h3>
                    <div class="comparison-list">
                        <div class="comparison-list-item included">
                            <span class="comparison-check"><span class="check">Yes</span></span>
                            <span>Fully interactive dashboard</span>
                        </div>
                        <div class="comparison-list-item included">
                            <span class="comparison-check"><span class="check">Yes</span></span>
                            <span>Test all core features</span>
                        </div>
                        <div class="comparison-list-item included">
                            <span class="comparison-check"><span class="check">Yes</span></span>
                            <span>No signup or credit card</span>
                        </div>
                        <div class="comparison-list-item included">
                            <span class="comparison-check"><span class="check">Yes</span></span>
                            <span>Book a live walkthrough</span>
                        </div>
                        <div class="comparison-list-item included">
                            <span class="comparison-check"><span class="check">Yes</span></span>
                            <span>Industry-specific examples</span>
                        </div>
                        <div class="comparison-list-item included">
                            <span class="comparison-check"><span class="check">Yes</span></span>
                            <span>ROI calculator included</span>
                        </div>
                    </div>
                </div>

                <div class="comparison-item-demo">
                    <div class="comparison-badge" style="background: var(--gray);">COMPETITORS</div>
                    <h3>Other Shop Platforms</h3>
                    <div class="comparison-list">
                        <div class="comparison-list-item excluded">
                            <span class="comparison-x"><span class="cross">No</span></span>
                            <span>Static screenshots only</span>
                        </div>
                        <div class="comparison-list-item excluded">
                            <span class="comparison-x"><span class="cross">No</span></span>
                            <span>Limited feature previews</span>
                        </div>
                        <div class="comparison-list-item included">
                            <span class="comparison-check"><span class="check">Yes</span></span>
                            <span>Requires signup</span>
                        </div>
                        <div class="comparison-list-item excluded">
                            <span class="comparison-x"><span class="cross">No</span></span>
                            <span>Generic demos for everyone</span>
                        </div>
                        <div class="comparison-list-item excluded">
                            <span class="comparison-x"><span class="cross">No</span></span>
                            <span>No interactive testing</span>
                        </div>
                        <div class="comparison-list-item excluded">
                            <span class="comparison-x"><span class="cross">No</span></span>
                            <span>No ROI projection</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- How It Works -->
    <div class="how-it-works">
        <div class="how-it-works-content">
            <h2>Three Steps to Experience TDAI</h2>
            <div class="steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <h3>Explore the Dashboard</h3>
                    <p>Click through the interactive demo above. Try different features, view real-world data, and get a feel for how TDAI works in daily operations.</p>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <h3>Watch the Video</h3>
                    <p>See TDAI in action with real shops. Learn how specific features solve common pain points like scheduling, customer follow-up, and reporting.</p>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <h3>Book Your Live Demo</h3>
                    <p>Schedule a personalized walkthrough with our team. We'll show you how TDAI fits your shop's unique workflow and answer all your questions.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- CTA Section -->
    <div class="cta-section-demo">
        <h2>Ready to Transform Your Shop?</h2>
        <p>Start your 14-day free trial today. Full access to all features. No credit card required.</p>
        <a href="/pricing" class="cta-btn-demo">Start Your Free Trial</a>
    </div>

    <!-- ============== SECTION DIVIDER ============== -->
    <div style="padding: 4rem 2rem; background: linear-gradient(135deg, rgba(45, 156, 219, 0.03) 0%, rgba(59,130,196, 0.02) 100%); border-top: 1px solid rgba(45, 156, 219, 0.1); border-bottom: 1px solid rgba(45, 156, 219, 0.1);">
        <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
            <h2 style="color: #fff; font-size: 2.5rem; margin: 0 0 1rem 0; font-weight: 700;">Mobile App</h2>
            <p style="color: #B0BCCC; font-size: 1.05rem; margin: 0; line-height: 1.6;">Manage Your Shop From Anywhere</p>
        </div>
    </div>

    <!-- MOBILE APP SECTION -->
    <div class="hero-mobile">
        <h1>Manage Your Shop From Anywhere</h1>
        <p>Full mobile app for iOS and Android. Run your auto shop from the palm of your hand with real-time access to all your business data.</p>
    </div>

    <div class="phone-section">
        <div class="phone-container">
            <div class="phone-mockup">
                <div class="phone-screen">
                    <div class="phone-status-bar">
                        <span>9:41</span>
                        <span>   </span>
                        <span>5G</span>
                    </div>

                    <div class="phone-content">
                        <div class="phone-header">
                            <h2>Dashboard</h2>
                            <p>8 active jobs today</p>
                        </div>

                        <div class="phone-card">
                            <div class="phone-card-title">Revenue Today</div>
                            <div class="phone-card-value">$2,840</div>
                        </div>

                        <div class="phone-card">
                            <div class="phone-card-title">Pending Invoices</div>
                            <div class="phone-card-value">3</div>
                        </div>

                        <div class="phone-card">
                            <div class="phone-card-title">Customer Rating</div>
                            <div class="phone-card-value">4.8</div>
                        </div>

                        <div class="phone-bottom">
                            <button class="phone-btn">Jobs</button>
                            <button class="phone-btn">Invoices</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="phone-info">
                <h2>Powerful in Your Pocket</h2>

                <div class="info-highlight">
                    <h3>Always Connected</h3>
                    <p>Manage your shop on the job. Send invoices, update work orders, and check customer history from anywhere in real-time. Never miss a business update.</p>
                </div>

                <div class="info-highlight">
                    <h3>Offline Capable</h3>
                    <p>Internet goes down? No problem. Continue working offline and sync automatically when you're back online. Your data is always safe.</p>
                </div>

                <div class="info-highlight">
                    <h3>Push Notifications</h3>
                    <p>Get instant alerts for new appointments, job completions, customer messages, and payment confirmations right on your phone.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Mobile Modes Section -->
    <section class="mobile-modes-section">
        <div class="mobile-modes-content">
            <h2>Three Powerful Mobile Modes</h2>
            <div class="modes-grid">
                <div class="mode-card">
                    <div class="mode-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="17" r="3"/><path d="M10.3 14.7L21 4"/><path d="M18 7l3-3"/><path d="M15 10l-3 3"/></svg></div>
                    <h3>Technician Mode</h3>
                    <p>Designed for technicians on the job. Access work orders, manage task progress, capture inspection photos, and update job status in real-time. Clock in/out, track time spent per task, and access parts lists.</p>
                    <ul class="mode-features">
                        <li>Digital work order management</li>
                        <li>Real-time job status updates</li>
                        <li>Photo capture and documentation</li>
                        <li>Time tracking per job/task</li>
                    </ul>
                </div>

                <div class="mode-card">
                    <div class="mode-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg></div>
                    <h3>Manager Mode</h3>
                    <p>Full business intelligence in your hands. Monitor shop performance, technician productivity, and financial metrics in real-time. Approve jobs, manage customer communications, and make decisions on the go.</p>
                    <ul class="mode-features">
                        <li>Real-time analytics dashboard</li>
                        <li>Technician productivity tracking</li>
                        <li>Customer communication hub</li>
                        <li>Revenue and cost monitoring</li>
                    </ul>
                </div>

                <div class="mode-card">
                    <div class="mode-icon">CRM</div>
                    <h3>Customer-Facing Mode</h3>
                    <p>Keep customers informed and engaged. Send job updates, share inspection photos, provide quotes, and accept payments through the customer portal. Build trust with real-time transparency.</p>
                    <ul class="mode-features">
                        <li>Job status sharing with customers</li>
                        <li>Photo inspection sharing</li>
                        <li>Quick quote generation</li>
                        <li>Mobile payment acceptance</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <div class="mobile-features">
        <h2>Comprehensive Mobile Features</h2>
        <div class="features-grid">
            <div class="feature-box">
                <div class="feature-icon-large"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                <h3>Clock In/Out</h3>
                <p>Technicians clock in and out directly from their phones with GPS location verification. Track time spent on each job and generate timesheets automatically.</p>
            </div>

            <div class="feature-box">
                <div class="feature-icon-large">CAM</div>
                <h3>Digital Inspections</h3>
                <p>Capture photos and annotate during inspections. Create detailed inspection reports with before/after photos, measurements, and handwritten notes directly on the phone.</p>
            </div>

            <div class="feature-box">
                <div class="feature-icon-large">RPT</div>
                <h3>Real-Time Dashboard</h3>
                <p>Monitor your shop's performance with live data on jobs, revenue, and customer satisfaction from any location. See which technicians are online and active.</p>
            </div>

            <div class="feature-box">
                <div class="feature-icon-large">LIST</div>
                <h3>Work Order Management</h3>
                <p>Create, edit, and complete work orders on mobile. Assign tasks to technicians, update status in real-time, and notify customers of progress automatically.</p>
            </div>

            <div class="feature-box">
                <div class="feature-icon-large">PAY</div>
                <h3>Payment Processing</h3>
                <p>Accept credit cards, mobile wallets, and digital payments right from your phone. Generate invoices instantly and email or text them to customers immediately.</p>
            </div>

            <div class="feature-box">
                <div class="feature-icon-large">ALRT</div>
                <h3>Push Notifications</h3>
                <p>Stay informed with instant alerts for new jobs, customer updates, payment confirmations, and task reminders. Customize notification preferences by user role.</p>
            </div>

            <div class="feature-box">
                <div class="feature-icon-large">SRC</div>
                <h3>Barcode Scanning</h3>
                <p>Quickly scan vehicle barcodes, part barcodes, and customer barcodes. Auto-populate details and reduce manual data entry errors on the job.</p>
            </div>

            <div class="feature-box">
                <div class="feature-icon-large"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg></div>
                <h3>Voice-to-Text Notes</h3>
                <p>Dictate notes and observations hands-free. Convert speech to text automatically and add notes to work orders without typing while wearing gloves.</p>
            </div>

            <div class="feature-box">
                <div class="feature-icon-large">MOB</div>
                <h3>Customer Messaging</h3>
                <p>Communicate with customers directly through SMS and in-app messaging. Send job updates, photos, and payment links without leaving the app.</p>
            </div>
        </div>
    </div>

    <!-- Offline Mode Section -->
    <section class="offline-section">
        <div class="offline-container">
            <h2>Works Offline</h2>
            <div class="offline-content">
                <div class="offline-icon-box">
                    <div class="offline-large-icon">SYNC</div>
                </div>
                <ul class="offline-features">
                    <li>Continue working even without internet connection</li>
                    <li>Access cached customer data and work orders offline</li>
                    <li>Create and update jobs without connectivity</li>
                    <li>Automatic sync when you go back online</li>
                    <li>No data loss or conflicts with offline mode</li>
                    <li>Battery-efficient background sync process</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- App Store Buttons -->
    <div class="app-buttons">
        <h2>Download TorqueDesk AI Mobile</h2>
        <div class="buttons-group">
            <a href="#" class="app-btn">
                <span class="app-icon">iOS</span>
                <div class="app-text">
                    <span class="app-label">Download on</span>
                    <span class="app-name">App Store</span>
                </div>
            </a>
            <a href="#" class="app-btn">
                <span class="app-icon">></span>
                <div class="app-text">
                    <span class="app-label">Get it on</span>
                    <span class="app-name">Google Play</span>
                </div>
            </a>
        </div>
        <p>Available for iOS 14+ and Android 8+</p>
    </div>

    <!-- Screenshots Section -->
    <section class="screenshots-section">
        <div class="screenshots-container">
            <h2>Mobile App Screens</h2>
            <div class="screenshots-grid">
                <div class="screenshot-mockup">
                    <div class="screenshot-content">
                        <div class="screenshot-header">Dashboard View</div>
                        <div class="screenshot-body">
                            <div class="screenshot-item">
                                <div class="screenshot-item-title">Active Jobs</div>
                                <div class="screenshot-item-value">8</div>
                            </div>
                            <div class="screenshot-item">
                                <div class="screenshot-item-title">Revenue Today</div>
                                <div class="screenshot-item-value">$2,840</div>
                            </div>
                            <div class="screenshot-item">
                                <div class="screenshot-item-title">Avg Rating</div>
                                <div class="screenshot-item-value">4.8/5.0</div>
                            </div>
                        </div>
                        <div class="screenshot-label">Manager Dashboard</div>
                    </div>
                </div>

                <div class="screenshot-mockup">
                    <div class="screenshot-content">
                        <div class="screenshot-header">Work Orders</div>
                        <div class="screenshot-body">
                            <div class="screenshot-item">
                                <div class="screenshot-item-title">Current Job</div>
                                <div class="screenshot-item-value">Oil Change</div>
                            </div>
                            <div class="screenshot-item">
                                <div class="screenshot-item-title">Time Elapsed</div>
                                <div class="screenshot-item-value">45 min</div>
                            </div>
                            <div class="screenshot-item">
                                <div class="screenshot-item-title">Customer</div>
                                <div class="screenshot-item-value">John D.</div>
                            </div>
                        </div>
                        <div class="screenshot-label">Technician View</div>
                    </div>
                </div>

                <div class="screenshot-mockup">
                    <div class="screenshot-content">
                        <div class="screenshot-header">Customer Updates</div>
                        <div class="screenshot-body">
                            <div class="screenshot-item">
                                <div class="screenshot-item-title">Job Status</div>
                                <div class="screenshot-item-value">In Progress</div>
                            </div>
                            <div class="screenshot-item">
                                <div class="screenshot-item-title">Est. Time</div>
                                <div class="screenshot-item-value">1 hour</div>
                            </div>
                            <div class="screenshot-item">
                                <div class="screenshot-item-title">Invoice</div>
                                <div class="screenshot-item-value">Ready</div>
                            </div>
                        </div>
                        <div class="screenshot-label">Customer Portal</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mobile Comparison Section -->
    <div class="comparison-section">
        <div class="comparison-content">
            <h2>Mobile vs Desktop</h2>
            <div class="comparison-table">
                <div class="comparison-col">
                    <h3>Feature</h3>
                    <div class="comparison-items">
                        <div class="comparison-item">
                            <span class="comparison-text">Work Order Management</span>
                        </div>
                        <div class="comparison-item">
                            <span class="comparison-text">Customer Database</span>
                        </div>
                        <div class="comparison-item">
                            <span class="comparison-text">Quick Invoicing</span>
                        </div>
                        <div class="comparison-item">
                            <span class="comparison-text">Real-Time Chat</span>
                        </div>
                        <div class="comparison-item">
                            <span class="comparison-text">Photos & Inspections</span>
                        </div>
                        <div class="comparison-item">
                            <span class="comparison-text">Payment Processing</span>
                        </div>
                        <div class="comparison-item">
                            <span class="comparison-text">Offline Mode</span>
                        </div>
                        <div class="comparison-item">
                            <span class="comparison-text">Advanced Analytics</span>
                        </div>
                    </div>
                </div>

                <div class="comparison-col">
                    <h3>Mobile App</h3>
                    <div class="comparison-items">
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                        <div class="comparison-item unavailable">
                            <div class="comparison-check">—</div>
                        </div>
                    </div>
                </div>

                <div class="comparison-col">
                    <h3>Desktop App</h3>
                    <div class="comparison-items">
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                        <div class="comparison-item unavailable">
                            <div class="comparison-check">—</div>
                        </div>
                        <div class="comparison-item">
                            <div class="comparison-check"><span class="check">Yes</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="cta-section-mobile">
        <h2>Download the Free App Today</h2>
        <p>Available on iOS and Android. Works perfectly with your TorqueDesk AI account.</p>
        <a href="#" class="cta-btn-mobile">Download Now</a>
    </div>

    <!-- ============== SECTION DIVIDER ============== -->
    <div style="padding: 4rem 2rem; background: linear-gradient(135deg, rgba(45, 156, 219, 0.03) 0%, rgba(59,130,196, 0.02) 100%); border-top: 1px solid rgba(45, 156, 219, 0.1); border-bottom: 1px solid rgba(45, 156, 219, 0.1);">
        <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
            <h2 style="color: #fff; font-size: 2.5rem; margin: 0 0 1rem 0; font-weight: 700;">Switch to TDAI</h2>
            <p style="color: #B0BCCC; font-size: 1.05rem; margin: 0; line-height: 1.6;">Easy Migration — Zero Downtime</p>
        </div>
    </div>

    <!-- MIGRATION SECTION -->
    <!-- Hero Section -->
    <section class="migration-hero">
        <div class="migration-hero-content">
            <h1>Switch to TDAI in Minutes, Not Days</h1>
            <p>One-click migration from any competitor platform. Seamless data transfer with zero downtime.</p>
            <div class="migration-guarantee">
                <span class="migration-guarantee-badge">Zero Data Loss</span>
                <span class="migration-guarantee-badge">Full Support</span>
                <span class="migration-guarantee-badge">Free Migration</span>
            </div>
        </div>
    </section>

    <!-- Migration Sources Section -->
    <section class="migration-sources-section">
        <div class="section-header">
            <h2>Switching From Your Current Platform?</h2>
            <p>We support direct migration from leading platforms. See what you'll gain.</p>
        </div>
        <div class="sources-grid">
            <div class="source-card">
                <h3>Shopmonkey</h3>
                <ul class="source-benefits">
                    <li>AI diagnostics & recommendations</li>
                    <li>Advanced scheduling algorithms</li>
                    <li>Better reporting & analytics</li>
                </ul>
            </div>
            <div class="source-card">
                <h3>Tekmetric</h3>
                <ul class="source-benefits">
                    <li>Superior customer management</li>
                    <li>Mobile app included</li>
                    <li>24/7 AI support assistant</li>
                </ul>
            </div>
            <div class="source-card">
                <h3>AutoLeap</h3>
                <ul class="source-benefits">
                    <li>Built-in CRM features</li>
                    <li>Multi-location support</li>
                    <li>Advanced integrations</li>
                </ul>
            </div>
            <div class="source-card">
                <h3>Mitchell</h3>
                <ul class="source-benefits">
                    <li>Modern, intuitive interface</li>
                    <li>Better pricing model</li>
                    <li>Faster import/export tools</li>
                </ul>
            </div>
            <div class="source-card">
                <h3>CSV / Custom</h3>
                <ul class="source-benefits">
                    <li>Custom field mapping</li>
                    <li>Multi-format support</li>
                    <li>Expert validation team</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Migration Timeline Section -->
    <section class="timeline-section">
        <div class="timeline-container">
            <div class="section-header">
                <h2>Migration Timeline</h2>
                <p>A simple, 3-day process with expert support at every step.</p>
            </div>
            <div class="timeline-grid">
                <div class="timeline-step">
                    <div class="step-day">Day 1</div>
                    <h3>Export</h3>
                    <p>Export your complete data from your current platform. We provide detailed guides for each system to ensure nothing is missed.</p>
                </div>
                <div class="timeline-step">
                    <div class="step-day">Day 2</div>
                    <h3>Map & Validate</h3>
                    <p>Our AI automatically maps your fields to TorqueDesk AI format. Our team validates everything and checks for data quality issues.</p>
                </div>
                <div class="timeline-step">
                    <div class="step-day">Day 3</div>
                    <h3>Import & Train</h3>
                    <p>One-click import of your data with zero manual work required. Our team provides full training on your new system.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- What We Don't Migrate Section -->
    <section class="transparency-section">
        <h2>What We Don't Migrate - Full Transparency</h2>
        <div class="transparency-grid">
            <div class="transparency-card">
                <div class="transparency-icon">LINK</div>
                <h3>Custom Integrations</h3>
                <p>Custom integrations specific to your old platform need to be reconfigured with TDAI. We help you set up new integrations with your existing tools like QuickBooks, Shopify, or custom APIs.</p>
            </div>
            <div class="transparency-card">
                <div class="transparency-icon">CFG</div>
                <h3>Custom Workflows</h3>
                <p>Highly customized workflows in your old system may need adjustment for TDAI's platform. Our team helps rebuild these workflows to work seamlessly with our system.</p>
            </div>
        </div>
    </section>

    <!-- Case Study Section -->
    <section class="case-study-section">
        <h2>Migration Success Story</h2>
        <p>See how Mike's Auto completed their 5-year migration in just 8 minutes.</p>
        <div class="case-study-card">
            <div class="case-study-header">
                <div class="case-study-icon">SHOP</div>
                <div class="case-study-info">
                    <h3>Mike's Auto Repair</h3>
                    <p>Family-owned shop with 12 employees and 5 years of historical data</p>
                </div>
            </div>
            <div class="case-study-content">
                <p>Mike's Auto had been using their previous system for five years, accumulating thousands of customer records, service histories, invoices, and notes. The thought of migrating seemed daunting and risky.</p>
                <p>Using TDAI's AI-powered migration tools, they exported their entire database, and our system automatically validated and mapped 99.2% of their data perfectly. The entire import process completed in just 8 minutes with zero manual intervention. Within an hour, Mike's team was fully trained and operational.</p>
                <p>The transparency and control throughout the migration process gave them complete confidence. Data integrity checks verified every record matched their original system perfectly.</p>
            </div>
            <div class="case-study-metrics">
                <div class="case-metric">
                    <div class="case-metric-value">8 min</div>
                    <div class="case-metric-label">Migration Time</div>
                </div>
                <div class="case-metric">
                    <div class="case-metric-value">18K+</div>
                    <div class="case-metric-label">Records Migrated</div>
                </div>
                <div class="case-metric">
                    <div class="case-metric-value">99.2%</div>
                    <div class="case-metric-label">Auto-Mapped</div>
                </div>
                <div class="case-metric">
                    <div class="case-metric-value">$0</div>
                    <div class="case-metric-label">Migration Cost</div>
                </div>
            </div>
        </div>
    </section>

    <!-- What Gets Migrated Section -->
    <section class="migration-checklist-section">
        <div class="section-header">
            <h2>What Gets Migrated</h2>
            <p>Complete data transfer with full integrity verification.</p>
        </div>
        <div class="checklist-grid">
            <div class="checklist-item">
                <div class="checklist-icon">CRM</div>
                <p>Customer Records</p>
            </div>
            <div class="checklist-item">
                <div class="checklist-icon">AUTO</div>
                <p>Vehicle History</p>
            </div>
            <div class="checklist-item">
                <div class="checklist-icon">LIST</div>
                <p>Work Orders</p>
            </div>
            <div class="checklist-item">
                <div class="checklist-icon">$</div>
                <p>Invoices & Payments</p>
            </div>
            <div class="checklist-item">
                <div class="checklist-icon">NOTE</div>
                <p>Estimates</p>
            </div>
            <div class="checklist-item">
                <div class="checklist-icon">INV</div>
                <p>Inventory Data</p>
            </div>
            <div class="checklist-item">
                <div class="checklist-icon">CAL</div>
                <p>Appointment History</p>
            </div>
            <div class="checklist-item">
                <div class="checklist-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                <p>Notes & Attachments</p>
            </div>
            <div class="checklist-item">
                <div class="checklist-icon">CFG</div>
                <p>Custom Fields</p>
            </div>
        </div>
    </section>

    <!-- Migration Stats -->
    <section class="migration-stats">
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">2,000+</div>
                <div class="stat-label">Successful Migrations</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">8 min</div>
                <div class="stat-label">Average Migration Time</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">100%</div>
                <div class="stat-label">Data Integrity Guarantee</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">Free</div>
                <div class="stat-label">Migration Support</div>
            </div>
        </div>
    </section>

    <!-- Comparison Section -->
    <section class="migration-comparison-section">
        <div class="section-header">
            <h2>See How TDAI Compares</h2>
            <p>Why your shop will be better on TorqueDesk AI</p>
        </div>
        <div class="comparison-table">
            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Your Current Platform</th>
                        <th>TorqueDesk AI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="feature-name">AI Diagnostics</td>
                        <td class="competitor-cross">Limited</td>
                        <td class="tdai-advantage tdai-check"><span class="check">Yes</span> Advanced</td>
                    </tr>
                    <tr>
                        <td class="feature-name">Smart Scheduling</td>
                        <td class="competitor-cross">Manual</td>
                        <td class="tdai-advantage tdai-check"><span class="check">Yes</span> AI-Powered</td>
                    </tr>
                    <tr>
                        <td class="feature-name">Mobile App</td>
                        <td class="competitor-cross">Extra Cost</td>
                        <td class="tdai-advantage tdai-check"><span class="check">Yes</span> Included</td>
                    </tr>
                    <tr>
                        <td class="feature-name">CRM Features</td>
                        <td class="competitor-cross">Basic</td>
                        <td class="tdai-advantage tdai-check"><span class="check">Yes</span> Full-Featured</td>
                    </tr>
                    <tr>
                        <td class="feature-name">Multi-Location</td>
                        <td class="competitor-cross">Extra Fee</td>
                        <td class="tdai-advantage tdai-check"><span class="check">Yes</span> Unlimited</td>
                    </tr>
                    <tr>
                        <td class="feature-name">Analytics & Reports</td>
                        <td class="competitor-cross">Limited</td>
                        <td class="tdai-advantage tdai-check"><span class="check">Yes</span> Comprehensive</td>
                    </tr>
                    <tr>
                        <td class="feature-name">API Access</td>
                        <td class="competitor-cross">Restricted</td>
                        <td class="tdai-advantage tdai-check"><span class="check">Yes</span> Full Access</td>
                    </tr>
                    <tr>
                        <td class="feature-name">24/7 Support</td>
                        <td class="competitor-cross">Business Hours</td>
                        <td class="tdai-advantage tdai-check"><span class="check">Yes</span> Always Available</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="faq-container">
            <div class="section-header">
                <h2>Migration Questions?</h2>
                <p>Everything you need to know about switching to TDAI</p>
            </div>
            <div class="faq-item active">
                <div class="faq-question">
                    <h3>Is my data safe during migration?</h3>
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                    Absolutely. We use bank-grade encryption for all data transfers. Your data remains secure throughout the entire migration process. We maintain backups and perform full integrity checks to ensure zero data loss. Our migration process is SOC 2 Type II compliant and follows industry best practices for data protection.
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    <h3>How long does migration actually take?</h3>
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                    Most migrations complete in under 10 minutes. The actual import process is fully automated. The setup and validation may take longer depending on the complexity of your data, but we handle most of the heavy lifting. Our team can manage the entire process for you if needed, which typically takes 2-3 hours end-to-end.
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    <h3>Will your team help us with the migration?</h3>
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                    Yes, we provide full white-glove migration support at no extra cost. Our dedicated migration team will guide you through each step, validate your data, and ensure everything is perfect before import. We're here to make the transition as smooth as possible for your shop, including full staff training.
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    <h3>Do you charge for migration?</h3>
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                    Migration is completely free. No hidden fees, no setup charges. We believe switching to TDAI should be risk-free. We cover all migration costs as part of your onboarding, whether you're bringing 100 customers or 100,000 records.
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    <h3>What if there's an issue during migration?</h3>
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                    Our Migration Guarantee backs you. If anything goes wrong during the migration process, we'll fix it free of charge. We validate all data before import and perform comprehensive integrity checks. If any discrepancies are found, our team resolves them immediately at no cost to you.
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    <h3>Can I keep using my old system while migrating?</h3>
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                    Yes, absolutely. We recommend keeping your old system running during the migration process. You can continue normal operations while we handle the data transfer in the background. Once everything is verified and working perfectly on TDAI, you can switch over completely.
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    <h3>Do you migrate custom fields and settings?</h3>
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                    Custom fields are migrated automatically. Custom workflows may need slight adjustments to work with TDAI's system. Our team will help you rebuild any complex workflows that exist in your current system to work seamlessly with TDAI's platform.
                </div>
            </div>
        </div>
    </section>

    <!-- Migration CTA Form -->
    <section class="migration-cta-section">
        <div class="migration-form">
            <h2>Start Your Free Migration</h2>
            <p class="intro">Enter your details below and our team will contact you within 24 hours with a personalized migration plan.</p>
            <form>
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name-2" placeholder="John Smith" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email-2" placeholder="john@yourshop.com" required>
                </div>
                <div class="form-group">
                    <label for="platform">Current Platform</label>
                    <select id="platform" required>
                        <option value="">Select your platform...</option>
                        <option value="shopmonkey">Shopmonkey</option>
                        <option value="tekmetric">Tekmetric</option>
                        <option value="autoleap">AutoLeap</option>
                        <option value="mitchell">Mitchell</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" class="form-submit">Begin Migration</button>
                <div class="guarantee-section">
                    <h4>Migration Guarantee</h4>
                    <p>If anything goes wrong, we'll fix it free. Complete data safety guaranteed.</p>
                </div>
            </form>
        </div>
    </section>


<!-- NEXT PAGE NAVIGATION -->
<div class="next-page-cta">
      <div class="next-page-inner">
        <div class="next-page-label">Continue Exploring</div>
        <h2 class="next-page-title">Next: <span>Customers</span></h2>
        <p class="next-page-desc">Read customer success stories</p>
        <a href="/customers" class="next-page-btn">
          <span class="btn-text">Explore Customers</span>
          <span class="btn-arrow">&rarr;</span>
        </a>
        <div class="page-dots"><a href="/" class="page-dot"></a><a href="/features" class="page-dot"></a><a href="/solutions" class="page-dot"></a><a href="/pricing" class="page-dot"></a><a href="/integrations" class="page-dot"></a><a href="/demo" class="page-dot active"></a><a href="/customers" class="page-dot"></a><a href="/resources" class="page-dot"></a><a href="/about" class="page-dot"></a><a href="/contact" class="page-dot"></a></div>
        <div class="page-counter-text">Page 6 of 10</div>
      </div>
    </div>` }} />
  );
}
