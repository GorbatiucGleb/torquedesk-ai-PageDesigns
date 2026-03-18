import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | TorqueDesk AI',
};

export default function ContactPage() {
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

        .hero-contact {
            background: linear-gradient(135deg, var(--hero) 0%, var(--dark-blue) 100%);
            padding: 120px 20px 60px;
            text-align: center;
            border-bottom: 1px solid var(--subtle);
            margin-top: 64px;
        }

        .hero-contact h1 {
            font-size: clamp(2.5rem, 8vw, 4rem);
            color: #fff;
            margin-bottom: 20px;
            font-weight: 700;
        }

        .hero-contact p {
            font-size: 1.2rem;
            color: var(--light-gray);
            max-width: 600px;
            margin: 0 auto;
        }

        .contact-methods {
            padding: 80px 20px;
            background: var(--navy);
            border-bottom: 1px solid var(--subtle);
        }

        .methods-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            margin-bottom: 60px;
        }

        .method-card {
            background: var(--card);
            padding: 40px;
            border-radius: 8px;
            border-left: 4px solid var(--accent);
            text-align: center;
        }

        .method-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            margin: 0 auto 20px;
            color: #fff;
        }

        .method-card h3 {
            color: var(--secondary);
            font-size: 1.4rem;
            margin-bottom: 15px;
        }

        .method-card p {
            color: var(--light-gray);
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .method-link {
            color: var(--accent);
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .method-link:hover {
            color: var(--secondary);
        }

        .contact-grid {
            max-width: 1200px;
            margin: 0 auto;
            padding: 80px 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
        }

        .contact-form-section {
            opacity: 1;
            
        }

        .contact-form-section h2 {
            font-size: 1.8rem;
            color: #fff;
            margin-bottom: 30px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            color: var(--light-gray);
            font-size: 0.95rem;
            margin-bottom: 8px;
            font-weight: 500;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 12px 16px;
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 6px;
            color: #fff;
            font-size: 1rem;
            font-family: inherit;
            transition: all 0.3s ease;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: var(--gray);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--accent);
            box-shadow: 0 0 0 3px rgba(45, 156, 219, 0.15);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .send-btn {
            width: 100%;
            padding: 14px 24px;
            background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
            color: #fff;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .send-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 35px rgba(45, 156, 219, 0.3);
        }

        .contact-details {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid var(--subtle);
        }

        .contact-detail-item {
            margin-bottom: 25px;
        }

        .contact-detail-label {
            color: var(--gray);
            font-size: 0.95rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .contact-detail-value {
            color: #fff;
            font-size: 1rem;
            font-weight: 600;
            margin-top: 6px;
        }

        .response-time {
            color: var(--secondary);
            font-size: 0.9rem;
            margin-top: 8px;
        }

        .info-section {
            opacity: 1;
            
        }

        .info-section h2 {
            font-size: 1.8rem;
            color: #fff;
            margin-bottom: 30px;
        }

        .info-box {
            background: var(--card);
            padding: 30px;
            border-radius: 8px;
            border: 1px solid var(--subtle);
            margin-bottom: 30px;
        }

        .info-box h3 {
            color: var(--secondary);
            font-size: 1.2rem;
            margin-bottom: 15px;
        }

        .info-box p {
            color: var(--light-gray);
            font-size: 0.95rem;
            line-height: 1.7;
        }

        .live-chat {
            background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            position: relative;
        }

        .live-chat h3 {
            color: #fff;
            font-size: 1.2rem;
            margin-bottom: 10px;
        }

        .live-chat p {
            color: rgba(255, 255, 255, 0.95);
            font-size: 0.9rem;
            margin-bottom: 20px;
        }

        .chat-btn {
            display: inline-block;
            padding: 12px 32px;
            background: #fff;
            color: var(--accent);
            border: none;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .chat-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .location-section {
            padding: 80px 20px;
            background: var(--deep);
            border-top: 1px solid var(--subtle);
        }

        .location-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .location-header h2 {
            font-size: clamp(2rem, 6vw, 3rem);
            color: #fff;
            margin-bottom: 10px;
        }

        .location-card {
            max-width: 600px;
            margin: 0 auto;
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 8px;
            padding: 50px 40px;
            text-align: center;
            opacity: 1;
            
        }

        .location-address {
            color: var(--light-gray);
            font-size: 1.05rem;
            line-height: 1.8;
            margin-bottom: 20px;
        }

        .location-phone {
            color: var(--secondary);
            font-weight: 600;
            font-size: 1rem;
        }

        .business-hours {
            padding: 80px 20px;
            background: var(--navy);
            border-top: 1px solid var(--subtle);
        }

        .hours-container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        .hours-container h2 {
            font-size: clamp(2rem, 6vw, 3rem);
            color: #fff;
            margin-bottom: 50px;
        }

        .hours-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .hours-card {
            background: var(--card);
            padding: 30px;
            border-radius: 8px;
            border: 1px solid var(--subtle);
            opacity: 1;
            
        }

        .hours-card h3 {
            color: var(--secondary);
            font-size: 1.2rem;
            margin-bottom: 20px;
        }

        .hours-card p {
            color: var(--light-gray);
            font-size: 0.95rem;
            line-height: 1.8;
            margin-bottom: 15px;
        }

        .response-guarantee {
            background: rgba(59,130,196, 0.1);
            border: 1px solid var(--secondary);
            padding: 20px;
            border-radius: 6px;
            margin-top: 15px;
        }

        .response-guarantee p {
            color: var(--secondary);
            font-weight: 600;
            font-size: 0.9rem;
            margin: 0;
        }

        .faq-section {
            padding: 80px 20px;
            background: var(--deep);
            border-top: 1px solid var(--subtle);
        }

        .faq-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .faq-header h2 {
            font-size: clamp(2rem, 6vw, 3rem);
            color: #fff;
            margin-bottom: 10px;
        }

        .faq-container {
            max-width: 900px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }

        .faq-item {
            background: var(--card);
            padding: 30px;
            border-radius: 8px;
            border: 1px solid var(--subtle);
            opacity: 1;
            
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .faq-item:hover {
            border-color: var(--accent);
            background: var(--hero);
        }

        .faq-question {
            color: #fff;
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .faq-icon {
            color: var(--secondary);
            font-weight: bold;
        }

        .faq-answer {
            color: var(--light-gray);
            font-size: 0.9rem;
            line-height: 1.6;
            display: none;
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid var(--subtle);
        }

        .faq-answer.visible {
            display: block;
        }

        /* ============== HELP CENTER STYLES (MERGED FROM help.html) ============== */
        .help-center-section {
            padding: 60px 20px;
        }

        .quick-links-section {
            margin-bottom: 100px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        .quick-links-section h2 {
            font-size: 2.2rem;
            color: #fff;
            margin: 0 0 40px 0;
            text-align: center;
        }

        .quick-links-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
        }

        .quick-link-card {
            background: var(--card);
            border: 2px solid var(--subtle);
            border-radius: 12px;
            padding: 35px 30px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            animation-fill-mode: both;
        }

        .quick-link-card:hover {
            border-color: var(--accent);
            background: linear-gradient(135deg, var(--dark-blue) 0%, var(--card) 100%);
            transform: translateY(-8px);
        }

        .quick-link-icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .quick-link-card h3 {
            font-size: 1.2rem;
            color: #fff;
            margin: 0 0 10px 0;
        }

        .quick-link-card p {
            color: var(--gray);
            font-size: 0.9rem;
            margin: 0;
            line-height: 1.5;
        }

        .quick-link-count {
            color: var(--secondary);
            font-size: 0.85rem;
            margin-top: 15px;
            font-weight: 600;
        }

        .quick-link-browse {
            display: inline-block;
            color: var(--secondary);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            margin-top: 15px;
            transition: all 0.3s ease;
        }

        .quick-link-browse:hover {
            color: var(--accent);
        }

        .popular-articles-section {
            margin-bottom: 100px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        .popular-articles-section h2 {
            font-size: 2.2rem;
            color: #fff;
            margin: 0 0 40px 0;
        }

        .articles-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .article-item {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 8px;
            padding: 25px;
            transition: all 0.3s ease;
            animation-fill-mode: both;
        }

        .article-item:hover {
            border-color: var(--accent);
            background: linear-gradient(135deg, var(--dark-blue) 0%, var(--card) 100%);
        }

        .article-item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 12px;
        }

        .article-item h3 {
            font-size: 1.15rem;
            color: #fff;
            margin: 0;
            flex: 1;
        }

        .article-item a {
            color: #fff;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .article-item a:hover {
            color: var(--secondary);
        }

        .article-item-category {
            display: inline-block;
            background: var(--subtle);
            color: var(--secondary);
            padding: 4px 10px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.4px;
            white-space: nowrap;
            flex-shrink: 0;
        }

        .article-item-desc {
            color: var(--light-gray);
            font-size: 0.95rem;
            line-height: 1.5;
            margin: 0;
        }

        .videos-section {
            margin-bottom: 100px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        .videos-section h2 {
            font-size: 2.2rem;
            color: #fff;
            margin: 0 0 40px 0;
        }

        .videos-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .video-card {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            overflow: visible;
            transition: all 0.3s ease;
            animation-fill-mode: both;
        }

        .video-card:hover {
            border-color: var(--accent);
            transform: translateY(-5px);
        }

        .video-placeholder {
            background: var(--subtle);
            aspect-ratio: 16 / 9;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: var(--gray);
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .video-card:hover .video-placeholder {
            background: var(--dark-blue);
        }

        .play-button {
            width: 60px;
            height: 60px;
            background: var(--accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            transition: all 0.3s ease;
        }

        .video-card:hover .play-button {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(45, 156, 219, 0.4);
        }

        .video-card-content {
            padding: 25px;
        }

        .video-card h3 {
            font-size: 1.15rem;
            color: #fff;
            margin: 0 0 8px 0;
        }

        .video-card p {
            color: var(--gray);
            font-size: 0.9rem;
            margin: 0;
            line-height: 1.5;
        }

        .contact-support-section {
            background: linear-gradient(135deg, var(--dark-blue) 0%, var(--subtle) 100%);
            border: 1px solid var(--subtle);
            border-radius: 12px;
            padding: 60px 40px;
            text-align: center;
            margin-bottom: 80px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        .contact-support-section h2 {
            font-size: 2rem;
            color: #fff;
            margin: 0 0 40px 0;
        }

        .support-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }

        .support-option {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 8px;
            padding: 30px;
            transition: all 0.3s ease;
        }

        .support-option:hover {
            border-color: var(--secondary);
            background: linear-gradient(135deg, var(--dark-blue) 0%, var(--card) 100%);
        }

        .support-option-icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .support-option h3 {
            font-size: 1.2rem;
            color: #fff;
            margin: 0 0 10px 0;
        }

        .support-option p {
            color: var(--light-gray);
            font-size: 0.95rem;
            margin: 0 0 15px 0;
            line-height: 1.6;
        }

        .support-option-contact {
            color: var(--secondary);
            font-weight: 600;
            font-size: 0.95rem;
        }

        .support-hours {
            background: var(--card);
            border: 1px solid var(--subtle);
            border-radius: 8px;
            padding: 20px;
            margin-top: 30px;
            color: var(--gray);
            font-size: 0.9rem;
            line-height: 1.6;
        }

        .academy-section {
            background: var(--card);
            border: 2px solid var(--secondary);
            border-radius: 12px;
            padding: 40px;
            text-align: center;
            margin-top: 30px;
        }

        .academy-section h2 {
            font-size: 1.8rem;
            color: #fff;
            margin: 0 0 15px 0;
        }

        .academy-section p {
            color: var(--light-gray);
            font-size: 1rem;
            margin: 0 0 25px 0;
            line-height: 1.6;
        }

        .academy-btn {
            display: inline-block;
            background: var(--secondary);
            color: var(--deep);
            padding: 12px 32px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid var(--secondary);
        }

        .academy-btn:hover {
            background: transparent;
            color: var(--secondary);
        }

        @media (max-width: 768px) {
            .contact-grid {
                grid-template-columns: 1fr;
                gap: 60px;
                padding: 60px 20px;
            }

            .form-row {
                grid-template-columns: 1fr;
            }

            .hero-contact {
                padding: 80px 20px 40px;
            }

            .contact-methods,
            .business-hours,
            .faq-section {
                padding: 60px 20px;
            }

            .article-item-header {
                flex-direction: column;
            }

            .article-item-category {
                align-self: flex-start;
            }

            .contact-support-section {
                padding: 40px 20px;
            }

            .support-options {
                grid-template-columns: 1fr;
            }

            .quick-links-grid {
                grid-template-columns: 1fr;
            }

            .quick-links-section h2,
            .popular-articles-section h2,
            .videos-section h2 {
                font-size: 1.8rem;
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
<div class="hero-contact">
        <h1>Let's Talk</h1>
        <p>We're here to help your shop succeed. Reach out anytime with questions, demos, or partnership opportunities.</p>
    </div>

    <section class="contact-methods">
        <div class="methods-container">
            <div class="method-card">
                <div class="method-icon">BIZ</div>
                <h3>Sales & Demos</h3>
                <p>Interested in TorqueDesk AI? Get a personalized demo and pricing tailored to your shop's needs.</p>
                <a href="#contact-form" class="method-link">Request Demo</a>
            </div>
            <div class="method-card">
                <div class="method-icon">TOOLS</div>
                <h3>Support</h3>
                <p>Already using TDAI? Our support team is here to help with implementation, training, and troubleshooting.</p>
                <a href="mailto:support@torquedeskai.com" class="method-link">support@torquedeskai.com</a>
            </div>
            <div class="method-card">
                <div class="method-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div>
                <h3>Partnerships</h3>
                <p>Looking to integrate with TDAI or become a reseller? Let's explore how we can work together.</p>
                <a href="mailto:partners@torquedeskai.com" class="method-link">partners@torquedeskai.com</a>
            </div>
        </div>
    </section>

    <div class="contact-grid">
        <div class="contact-form-section">
            <h2 id="contact-form">Send us a Message</h2>
            <form id="contactForm">
                <div class="form-row">
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Smith" required>
                    </div>
                    <div class="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="john@myshop.com" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Company / Shop Name</label>
                        <input type="text" placeholder="Smith's Auto Repair" required>
                    </div>
                    <div class="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="(555) 123-4567">
                    </div>
                </div>
                <div class="form-group">
                    <label>Shop Size</label>
                    <select required>
                        <option value="">Select your shop size...</option>
                        <option>1-2 Bays</option>
                        <option>3-5 Bays</option>
                        <option>6-10 Bays</option>
                        <option>10+ Bays</option>
                        <option>Multi-Location</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Subject</label>
                    <select required>
                        <option value="">Select subject...</option>
                        <option>Sales - Request Demo</option>
                        <option>Sales - Pricing Question</option>
                        <option>Support - Technical Issue</option>
                        <option>Support - Training Request</option>
                        <option>Partnership - Integration</option>
                        <option>Partnership - Reseller</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea placeholder="Tell us about your shop and what you're looking for..." required></textarea>
                </div>
                <div class="form-group">
                    <label>Preferred Contact Method</label>
                    <select required>
                        <option value="">Select method...</option>
                        <option>Email</option>
                        <option>Phone</option>
                        <option>Either</option>
                    </select>
                </div>
                <button type="submit" class="send-btn">Send Message</button>
            </form>

            <div class="contact-details">
                <div class="contact-detail-item">
                    <div class="contact-detail-label">Direct Email</div>
                    <div class="contact-detail-value">hello@torquedeskai.com</div>
                </div>
                <div class="contact-detail-item">
                    <div class="contact-detail-label">Phone</div>
                    <div class="contact-detail-value">(415) 555-0100</div>
                </div>
                <div class="contact-detail-item">
                    <div class="contact-detail-label">Response Guarantee</div>
                    <div class="response-time">We respond within 2 hours during business hours</div>
                </div>
            </div>
        </div>

        <div class="info-section">
            <h2>Quick Info</h2>

            <div class="info-box">
                <h3>Office Location</h3>
                <p><strong>TorqueDesk AI Headquarters</strong><br>
                123 Innovation Drive<br>
                San Francisco, CA 94105<br>
                United States</p>
            </div>

            <div class="info-box">
                <h3>Business Hours</h3>
                <p><strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM ET<br>
                <strong>Saturday:</strong> 9:00 AM - 5:00 PM ET<br>
                <strong>Sunday:</strong> Closed</p>
            </div>

            <div class="live-chat">
                <h3>Live Chat Support</h3>
                <p>Have a quick question? Start a live chat with our support team.</p>
                <button class="chat-btn" onclick="alert('Live chat feature would launch here');">Open Chat</button>
            </div>
        </div>
    </div>

    <section class="location-section">
        <div class="location-header">
            <h2>Our Office</h2>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">Where we build TorqueDesk AI</p>
        </div>
        <div class="location-card">
            <h3 style="color: var(--secondary); font-size: 1.5rem; margin-bottom: 20px;">San Francisco Headquarters</h3>
            <div class="location-address">
                123 Innovation Drive<br>
                San Francisco, CA 94105<br>
                United States
            </div>
            <div class="location-phone">(415) 555-0100</div>
        </div>
    </section>

    <section class="business-hours">
        <div class="hours-container">
            <h2>We're Here for You</h2>
            <div class="hours-grid">
                <div class="hours-card">
                    <h3>Business Hours</h3>
                    <p><strong>Mon-Fri:</strong> 8:00 AM - 8:00 PM ET</p>
                    <p><strong>Saturday:</strong> 9:00 AM - 5:00 PM ET</p>
                    <p><strong>Sunday:</strong> Closed</p>
                    <div class="response-guarantee">
                        <p>Standard response time: Within 2 hours</p>
                    </div>
                </div>
                <div class="hours-card">
                    <h3>24/7 Support</h3>
                    <p>Can't reach us during business hours? Submit a request anytime and we'll get back to you as soon as possible.</p>
                    <p>Premium customers receive priority support with 1-hour response guarantee.</p>
                    <div class="response-guarantee">
                        <p>Emergency support: Available 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="faq-section">
        <div class="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">Quick answers to common questions</p>
        </div>
        <div class="faq-container">
            <div class="faq-item" onclick="toggleFAQ(this)">
                <div class="faq-question">
                    <span class="faq-icon">+</span>
                    How do I get a demo?
                </div>
                <div class="faq-answer">
                    Click "Request Demo" above or email sales@torquedeskai.com. Our team will schedule a personalized demo tailored to your shop's needs, usually within 24 hours.
                </div>
            </div>

            <div class="faq-item" onclick="toggleFAQ(this)">
                <div class="faq-question">
                    <span class="faq-icon">+</span>
                    What's your pricing?
                </div>
                <div class="faq-answer">
                    Pricing varies based on shop size and features. We offer flexible plans starting at $99/month. Visit our pricing page or request a quote to see what's right for your shop.
                </div>
            </div>

            <div class="faq-item" onclick="toggleFAQ(this)">
                <div class="faq-question">
                    <span class="faq-icon">+</span>
                    How long does implementation take?
                </div>
                <div class="faq-answer">
                    Most shops are up and running in 1-2 weeks. We handle data migration, setup, and team training. Our onboarding team will guide you through every step.
                </div>
            </div>

            <div class="faq-item" onclick="toggleFAQ(this)">
                <div class="faq-question">
                    <span class="faq-icon">+</span>
                    Can I integrate with my existing tools?
                </div>
                <div class="faq-answer">
                    Yes! TorqueDesk AI integrates with popular platforms like Shopmonkey, Tekmetric, AutoLeap, and Mitchell. Contact our integrations team at partners@torquedeskai.com for more info.
                </div>
            </div>
        </div>
    </section>

    <!-- VISUAL DIVIDER -->
    <div style="height: 80px; background: linear-gradient(180deg, var(--deep) 0%, var(--navy) 100%); border-top: 1px solid var(--subtle); border-bottom: 1px solid var(--subtle); display: flex; align-items: center; justify-content: center;">
        <div style="width: 60px; height: 3px; background: linear-gradient(90deg, #2D9CDB, #3B82C4); border-radius: 3px;"></div>
    </div>

    <!-- HELP CENTER SECTION -->
    <section class="help-center-section">
        <section class="quick-links-section">
            <h2>Browse Help Categories</h2>
            <div class="quick-links-grid">
                <div class="quick-link-card">
                    <div class="quick-link-icon">GO</div>
                    <h3>Getting Started</h3>
                    <p>Initial setup and first steps with TorqueDesk AI</p>
                    <div class="quick-link-count">12 articles</div>
                    <a href="#" class="quick-link-browse">Browse →</a>
                </div>

                <div class="quick-link-card">
                    <div class="quick-link-icon">PAY</div>
                    <h3>Account & Billing</h3>
                    <p>Payment, invoicing, and account management</p>
                    <div class="quick-link-count">8 articles</div>
                    <a href="#" class="quick-link-browse">Browse →</a>
                </div>

                <div class="quick-link-card">
                    <div class="quick-link-icon">CFG</div>
                    <h3>Features & Tools</h3>
                    <p>Using platform features and advanced tools</p>
                    <div class="quick-link-count">35 articles</div>
                    <a href="#" class="quick-link-browse">Browse →</a>
                </div>

                <div class="quick-link-card">
                    <div class="quick-link-icon">LINK</div>
                    <h3>Integrations</h3>
                    <p>Connecting external tools and third-party services</p>
                    <div class="quick-link-count">18 articles</div>
                    <a href="#" class="quick-link-browse">Browse →</a>
                </div>

                <div class="quick-link-card">
                    <div class="quick-link-icon">MOB</div>
                    <h3>Mobile App</h3>
                    <p>Using TDAI on mobile devices and tablets</p>
                    <div class="quick-link-count">10 articles</div>
                    <a href="#" class="quick-link-browse">Browse →</a>
                </div>

                <div class="quick-link-card">
                    <div class="quick-link-icon">FIX</div>
                    <h3>Troubleshooting</h3>
                    <p>Common issues and solutions</p>
                    <div class="quick-link-count">22 articles</div>
                    <a href="#" class="quick-link-browse">Browse →</a>
                </div>
            </div>
        </section>

        <section class="popular-articles-section">
            <h2>Popular Articles</h2>
            <div class="articles-list">
                <div class="article-item">
                    <div class="article-item-header">
                        <h3><a href="#">How to Set Up Your First Shop</a></h3>
                        <span class="article-item-category">Getting Started</span>
                    </div>
                    <p class="article-item-desc">Step-by-step guide to configuring your shop settings, user profiles, and initial preferences in TorqueDesk AI.</p>
                </div>

                <div class="article-item">
                    <div class="article-item-header">
                        <h3><a href="#">Connecting OBD-II for AI Diagnostics</a></h3>
                        <span class="article-item-category">Features & Tools</span>
                    </div>
                    <p class="article-item-desc">Learn how to connect OBD-II scanners and enable real-time vehicle diagnostics powered by our AI engine.</p>
                </div>

                <div class="article-item">
                    <div class="article-item-header">
                        <h3><a href="#">Creating Your First Invoice</a></h3>
                        <span class="article-item-category">Features & Tools</span>
                    </div>
                    <p class="article-item-desc">Create, customize, and send professional invoices to customers. Learn about templates and payment options.</p>
                </div>

                <div class="article-item">
                    <div class="article-item-header">
                        <h3><a href="#">Importing Data from Shopmonkey/Tekmetric</a></h3>
                        <span class="article-item-category">Getting Started</span>
                    </div>
                    <p class="article-item-desc">Migrate your existing data from competitor platforms with our guided import tools and data mapping utilities.</p>
                </div>

                <div class="article-item">
                    <div class="article-item-header">
                        <h3><a href="#">Setting Up Smart Scheduling</a></h3>
                        <span class="article-item-category">Features & Tools</span>
                    </div>
                    <p class="article-item-desc">Configure appointment scheduling, automated reminders, and resource allocation for optimal shop efficiency.</p>
                </div>

                <div class="article-item">
                    <div class="article-item-header">
                        <h3><a href="#">Managing Inventory Reorder Points</a></h3>
                        <span class="article-item-category">Features & Tools</span>
                    </div>
                    <p class="article-item-desc">Set up automatic alerts and reorder thresholds to maintain optimal inventory levels and prevent stockouts.</p>
                </div>

                <div class="article-item">
                    <div class="article-item-header">
                        <h3><a href="#">Configuring SMS Notifications</a></h3>
                        <span class="article-item-category">Features & Tools</span>
                    </div>
                    <p class="article-item-desc">Enable SMS reminders for appointments, work order updates, and customer notifications through TorqueDesk AI.</p>
                </div>

                <div class="article-item">
                    <div class="article-item-header">
                        <h3><a href="#">Exporting Reports & Data</a></h3>
                        <span class="article-item-category">Features & Tools</span>
                    </div>
                    <p class="article-item-desc">Export business reports, analytics, and data in multiple formats for analysis and record-keeping purposes.</p>
                </div>
            </div>
        </section>

        <section class="videos-section">
            <h2>Video Tutorials</h2>
            <div class="videos-grid">
                <div class="video-card">
                    <div class="video-placeholder">
                        <div class="play-button">></div>
                    </div>
                    <div class="video-card-content">
                        <h3>Getting Started Guide</h3>
                        <p>Learn the basics and get your shop up and running on TDAI in under 10 minutes.</p>
                    </div>
                </div>

                <div class="video-card">
                    <div class="video-placeholder">
                        <div class="play-button">></div>
                    </div>
                    <div class="video-card-content">
                        <h3>AI Diagnostics Tutorial</h3>
                        <p>Discover how to use our AI diagnostic tools to improve accuracy and reduce costs.</p>
                    </div>
                </div>

                <div class="video-card">
                    <div class="video-placeholder">
                        <div class="play-button">></div>
                    </div>
                    <div class="video-card-content">
                        <h3>Scheduling & Appointments</h3>
                        <p>Master the scheduling system and optimize your shop's appointment flow.</p>
                    </div>
                </div>

                <div class="video-card">
                    <div class="video-placeholder">
                        <div class="play-button">></div>
                    </div>
                    <div class="video-card-content">
                        <h3>Reports & Analytics</h3>
                        <p>Create custom reports and track key metrics to improve business performance.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact-support-section">
            <h2>Still Need Help?</h2>
            <div class="support-options">
                <div class="support-option">
                    <div class="support-option-icon">Email</div>
                    <h3>Email Support</h3>
                    <p>Send us a detailed message and we'll respond within 2 hours during business hours.</p>
                    <div class="support-option-contact">support@torquedeskai.com</div>
                </div>

                <div class="support-option">
                    <div class="support-option-icon">TEL</div>
                    <h3>Phone Support</h3>
                    <p>Speak with our support team directly for urgent issues and complex questions.</p>
                    <div class="support-option-contact">1-888-TDAI-HELP</div>
                </div>

                <div class="support-option">
                    <div class="support-option-icon">Chat</div>
                    <h3>Live Chat</h3>
                    <p>Get instant answers from our support team. Available during business hours.</p>
                    <div class="support-option-contact">Chat Now</div>
                </div>
            </div>

            <div class="support-hours">
                Support Hours: Monday-Friday, 8:00 AM - 6:00 PM PT | Avg Response Time: 45 minutes | Emergency Line: Available 24/7 for critical issues
            </div>

            <div class="academy-section">
                <h2>TDAI Academy</h2>
                <p>Free comprehensive training including certification programs, advanced courses, and hands-on workshops for all users.</p>
                <a href="#" class="academy-btn">Explore Academy</a>
            </div>
        </section>
    </section>


<!-- NEXT PAGE NAVIGATION -->
<div class="next-page-cta">
      <div class="next-page-inner">
        <div class="next-page-label">Continue Exploring</div>
        <h2 class="next-page-title">Next: <span>Home</span></h2>
        <p class="next-page-desc">Return to homepage</p>
        <a href="/" class="next-page-btn">
          <span class="btn-text">Explore Home</span>
          <span class="btn-arrow">&rarr;</span>
        </a>
        <div class="page-dots"><a href="/" class="page-dot"></a><a href="/features" class="page-dot"></a><a href="/solutions" class="page-dot"></a><a href="/pricing" class="page-dot"></a><a href="/integrations" class="page-dot"></a><a href="/demo" class="page-dot"></a><a href="/customers" class="page-dot"></a><a href="/resources" class="page-dot"></a><a href="/about" class="page-dot"></a><a href="/contact" class="page-dot active"></a></div>
        <div class="page-counter-text">Page 10 of 10</div>
      </div>
    </div>` }} />
  );
}
