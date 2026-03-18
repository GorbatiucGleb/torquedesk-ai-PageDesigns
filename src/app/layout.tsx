import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TorqueDesk AI | AI-Powered Auto Shop Management',
  description: 'The most advanced AI-powered auto shop management platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999}} dangerouslySetInnerHTML={{ __html: `<style>
@keyframes navPulse {
  0%, 100% { box-shadow: 0 0 4px rgba(45,156,219,0.3), 0 0 8px rgba(45,156,219,0.1); }
  50% { box-shadow: 0 0 8px rgba(45,156,219,0.6), 0 0 16px rgba(45,156,219,0.3); }
}
nav .links a:not(.btn) {
  padding: 6px 14px !important;
  border-radius: 8px !important;
  border: 1px solid rgba(45,156,219,0.25) !important;
  animation: navPulse 2.5s ease-in-out infinite !important;
  color: #B8C6D8 !important;
  transition: all 0.3s ease !important;
}
nav .links a:not(.btn):hover {
  border-color: rgba(45,156,219,0.6) !important;
  color: #fff !important;
  box-shadow: 0 0 12px rgba(45,156,219,0.7), 0 0 24px rgba(45,156,219,0.4) !important;
  animation: none !important;
}
nav .links a.active:not(.btn) {
  border-color: rgba(45,156,219,0.5) !important;
  color: #fff !important;
  background: rgba(45,156,219,0.1) !important;
}
</style>
<nav>
  <div class="top-accent"></div>
  <div class="inner">
    <a href="/" class="logo">TORQUEDESK AI</a>
    <div class="links">
      <a href="/" class="active">Home</a>
      <a href="/features">Features</a>
      <a href="/solutions">Solutions</a>
      <a href="/pricing">Pricing</a>
      <a href="/integrations">Integrations</a>
      <a href="/demo">Demo</a>
      <a href="/customers">Customers</a>
      <a href="/resources">Resources</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/contact" class="btn btn-primary">Start Free Trial</a>
    </div>
  </div>
</nav>` }} />
        <div id="page-loader" dangerouslySetInnerHTML={{ __html: `<style>
#page-loader .loader-screen {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: linear-gradient(135deg, #040812 0%, #081020 50%, #0A1225 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}
#page-loader .loader-screen.fade-out {
  opacity: 0;
  visibility: hidden;
}
#page-loader .loader-logo {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #fff;
  margin-bottom: 2rem;
  font-family: 'Inter', sans-serif;
}
#page-loader .loader-bar-track {
  width: 200px;
  height: 2px;
  background: rgba(45,156,219,0.15);
  border-radius: 2px;
  overflow: hidden;
}
#page-loader .loader-bar-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #2D9CDB, #3B82C4);
  border-radius: 2px;
  animation: loaderFill 1.5s ease-in-out forwards;
}
@keyframes loaderFill {
  0% { width: 0%; }
  60% { width: 70%; }
  100% { width: 100%; }
}
#page-transition {
  position: fixed;
  inset: 0;
  z-index: 99998;
  background: linear-gradient(135deg, #040812 0%, #081020 50%, #0A1225 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
#page-transition.show {
  opacity: 1;
  visibility: visible;
}
#page-transition .transition-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid rgba(45,156,219,0.2);
  border-top-color: #2D9CDB;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
<div class="loader-screen" id="initialLoader">
  <div class="loader-logo">TORQUEDESK AI</div>
  <div class="loader-bar-track">
    <div class="loader-bar-fill"></div>
  </div>
</div>
<div id="page-transition">
  <div class="transition-spinner"></div>
</div>
<script>
  // Initial loader - hide after animation
  setTimeout(function() {
    var loader = document.getElementById('initialLoader');
    if (loader) loader.classList.add('fade-out');
    setTimeout(function() {
      if (loader) loader.style.display = 'none';
    }, 600);
  }, 1800);

  // Page transition on link clicks
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
    if (link.classList.contains('btn-primary') && href === '/contact') {
      // Allow Start Free Trial to work normally with transition
    }
    e.preventDefault();
    var transition = document.getElementById('page-transition');
    if (transition) transition.classList.add('show');
    setTimeout(function() {
      window.location.href = href;
    }, 400);
  });
</script>` }} />
        <main>{children}</main>
        <div dangerouslySetInnerHTML={{ __html: `<footer>
  <div class="f-container">
    <div class="brand">
      <h3>TORQUEDESK AI</h3>
      <p>AI-Powered Auto Shop Management.<br>Built in San Francisco.</p>
    </div>
    <div class="col">
      <h4>Product</h4>
      <a href="/features">Features</a>
      <a href="/pricing">Pricing</a>
      <a href="/integrations">Integrations & API</a>
      <a href="/demo">Demo & Mobile App</a>
    </div>
    <div class="col">
      <h4>Company</h4>
      <a href="/about">About Us</a>
      <a href="/about">Solutions</a>
      <a href="/about">Security</a>
      <a href="/about">Careers</a>
    </div>
    <div class="col">
      <h4>Resources</h4>
      <a href="/customers">Case Studies</a>
      <a href="/customers">Blog</a>
      <a href="/customers">Partners</a>
      <a href="/contact">Help Center</a>
    </div>
    <div class="col">
      <h4>Get Started</h4>
      <a href="/contact">Contact Us</a>
      <a href="/demo">Request Demo</a>
      <a href="/demo">Switch to TDAI</a>
      <a href="/pricing">Plans & Pricing</a>
    </div>
  </div>
  <div class="bottom">
    <span>&copy; 2026 TorqueDesk AI &mdash; All rights reserved</span>
    <span>Privacy &nbsp;|&nbsp; Terms &nbsp;|&nbsp; Status</span>
  </div>
</footer>` }} />
      </body>
    </html>
  );
}
