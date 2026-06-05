import React from 'react';
import { Mail, ArrowUp, CheckCircle } from 'lucide-react';

const Linkedin = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo.png" alt="I ≠ U Logo" className="footer-logo" />
            <p className="footer-desc">
              We design premium digital interfaces, develop robust cross-platform applications, and orchestrate complex workflow integrations to simplify your business operations.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/125074039/admin/page-posts/published/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tejaswini@iu-systems.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavClick('home')}>Home</button></li>
              <li><button onClick={() => handleNavClick('services')}>Services</button></li>
              <li><button onClick={() => handleNavClick('about')}>About Us</button></li>
              <li><button onClick={() => handleNavClick('technologies')}>Technologies</button></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavClick('services')}>UI/UX Design</button></li>
              <li><button onClick={() => handleNavClick('services')}>App Development</button></li>
              <li><button onClick={() => handleNavClick('services')}>Integrations & Automation</button></li>
              <li><button onClick={() => handleNavClick('services')}>ERPNext & n8n</button></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-label">Email:</span>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tejaswini@iu-systems.com" target="_blank" rel="noopener noreferrer" className="contact-value">tejaswini@iu-systems.com</a>
              </li>
              <li>
                <span className="contact-label">LinkedIn:</span>
                <a href="https://www.linkedin.com/company/125074039/admin/page-posts/published/" target="_blank" rel="noopener noreferrer" className="contact-value">linkedin.com/company/125074039</a>
              </li>
              <li>
                <span className="contact-label">Location:</span>
                <span className="contact-value text-muted">Remote-First, Global Reach</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} I ≠ U App Solutions & Systems. All rights reserved.
          </p>
          <button 
            className="back-to-top" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--bg-dark-primary);
          border-top: 1px solid var(--border-dark);
          padding: 6rem 0 3rem 0;
          position: relative;
          z-index: 10;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 5rem;
        }

        .footer-logo {
          height: 48px;
          margin-bottom: 1.5rem;
          object-fit: contain;
        }

        .footer-desc {
          color: var(--text-dark-secondary);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          max-width: 320px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-dark-secondary);
          border: 1px solid var(--border-dark);
          color: var(--text-dark-secondary);
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          color: #ffffff;
          background: var(--accent-blue);
          border-color: var(--accent-blue);
          transform: translateY(-2px);
        }

        .footer-title {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: #ffffff;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          height: 2px;
          background-color: var(--accent-blue);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links button {
          color: var(--text-dark-secondary);
          font-family: var(--font-body);
          font-size: 0.95rem;
          text-align: left;
          padding: 0;
          transition: var(--transition-fast);
        }

        .footer-links button:hover {
          color: #ffffff;
          padding-left: 5px;
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-label {
          display: block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-dark-muted);
          margin-bottom: 0.2rem;
        }

        .contact-value {
          color: var(--text-dark-secondary);
          font-size: 0.95rem;
          transition: var(--transition-fast);
        }

        .contact-value:hover {
          color: var(--accent-cyan);
        }

        .contact-value.text-muted {
          color: var(--text-dark-secondary);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border-dark);
          color: var(--text-dark-muted);
          font-size: 0.9rem;
        }

        .back-to-top {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-dark-secondary);
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .back-to-top:hover {
          color: #ffffff;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
