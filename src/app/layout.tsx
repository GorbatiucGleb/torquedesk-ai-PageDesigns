import type { Metadata } from 'next';
import Script from 'next/script';
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
        <div className="tdai-loader" id="initialLoader">
          <div className="loader-logo">TORQUEDESK AI</div>
          <div className="loader-bar-track">
            <div className="loader-bar-fill"></div>
          </div>
        </div>
        <div className="tdai-transition" id="pageTransition">
          <div className="transition-spinner"></div>
        </div>
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999}} dangerouslySetInnerHTML={{ __html: `<nav>
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
      <a href="/solutions">Solutions</a>
      <a href="/about">Security</a>
      <a href="/about">Careers</a>
    </div>
    <div class="col">
      <h4>Resources</h4>
      <a href="/customers">Case Studies</a>
      <a href="/customers">Blog</a>
      <a href="/resources">Partners</a>
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
        <Script id="tdai-loader-script" strategy="afterInteractive">{`
          setTimeout(function() {
            var loader = document.getElementById('initialLoader');
            if (loader) loader.classList.add('fade-out');
            setTimeout(function() {
              if (loader) loader.style.display = 'none';
            }, 600);
          }, 1800);

          document.addEventListener('click', function(e) {
            var link = e.target.closest('a[href]');
            if (!link) return;
            var href = link.getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
            e.preventDefault();
            var transition = document.getElementById('pageTransition');
            if (transition) transition.classList.add('show');
            setTimeout(function() {
              window.location.href = href;
            }, 400);
          });
        `}</Script>
      </body>
    </html>
  );
}
