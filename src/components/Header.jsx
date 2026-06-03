import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage, setServicesTab }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { 
      id: 'services', 
      label: 'Services',
      dropdownItems: [
        { label: 'UI/UX Design', tabId: 'ui-ux' },
        { label: 'App Development', tabId: 'app-dev' },
        { label: 'Integrations & Automation', tabId: 'integrations' }
      ]
    },
    { 
      id: 'about', 
      label: 'About Us',
      dropdownItems: [
        { label: 'Who We Are', scrollId: 'why-us' },
        { label: 'Our Mission', scrollId: 'why-us' }
      ]
    },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMobileOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubClick = (pageId, tabId) => {
    setCurrentPage(pageId);
    if (setServicesTab && tabId) {
      setServicesTab(tabId);
    }
    setIsMobileOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutSubClick = (pageId, scrollId) => {
    setCurrentPage(pageId);
    setIsMobileOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (scrollId) {
      setTimeout(() => {
        const element = document.getElementById(scrollId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-area" onClick={() => handleNavClick('home')}>
          <img src="/assets/logo.png" alt="I ≠ U Logo" className="logo-img" />
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li 
                key={item.id}
                className="nav-item-li"
                onMouseEnter={() => item.dropdownItems && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                >
                  {item.label}
                  {item.dropdownItems && (
                    <svg 
                      className={`dropdown-chevron ${activeDropdown === item.id ? 'rotated' : ''}`}
                      width="10" 
                      height="6" 
                      viewBox="0 0 10 6" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>

                {item.dropdownItems && activeDropdown === item.id && (
                  <div className="dropdown-panel">
                    <ul className="dropdown-sublist">
                      {item.dropdownItems.map((sub, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => {
                              if (item.id === 'services') {
                                handleSubClick('services', sub.tabId);
                              } else {
                                handleAboutSubClick('about', sub.scrollId);
                              }
                            }}
                            className="dropdown-sublink"
                          >
                            {sub.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button 
            onClick={() => handleNavClick('contact')} 
            className="btn btn-primary btn-header-cta"
          >
            Get in Touch
          </button>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${isMobileOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="mobile-nav-item">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="mobile-nav-item" style={{ marginTop: '2rem' }}>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Get in Touch
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: all var(--transition-normal);
          border-bottom: 1px solid transparent;
        }

        .site-header.scrolled {
          height: 80px;
          background: rgba(7, 14, 23, 0.9);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-dark);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 100% !important;
          padding: 0 4rem;
        }

        @media (max-width: 1200px) {
          .header-container {
            padding: 0 2rem;
          }
        }

        @media (max-width: 1024px) {
          .header-container {
            padding: 0 1.5rem;
          }
        }

        .logo-area {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .logo-img {
          height: 52px;
          object-fit: contain;
          transition: var(--transition-normal);
        }
        
        .site-header.scrolled .logo-img {
          height: 48px;
        }

        .desktop-nav {
          display: block;
        }

        .nav-list {
          display: flex;
          gap: 1.25rem; /* Adjusted gap to fit medium screens */
        }

        .nav-link {
          font-family: var(--font-headings);
          font-size: 1.05rem; /* Slightly smaller for mature design and better fit */
          font-weight: 500;
          color: var(--text-dark-secondary);
          padding: 0.4rem 1rem; /* Compact capsule padding */
          border-radius: 30px; /* Pill layout */
          transition: all var(--transition-fast);
          letter-spacing: 0.04em;
          display: inline-flex;
          align-items: center;
          border: 1px solid transparent;
        }

        .nav-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05); /* Hover capsule fill */
        }

        .nav-link.active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1); /* Selected capsule fill */
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .nav-item-li {
          position: relative;
          display: flex;
          align-items: center;
          height: var(--header-height);
        }

        .dropdown-chevron {
          margin-left: 0.5rem;
          transition: transform var(--transition-fast);
          opacity: 0.6;
          vertical-align: middle;
          display: inline-block;
        }

        .nav-item-li:hover .dropdown-chevron,
        .dropdown-chevron.rotated {
          transform: rotate(180deg);
          opacity: 1;
        }

        .dropdown-panel {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: rgba(12, 24, 37, 0.97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-dark);
          border-radius: 12px;
          min-width: 260px;
          padding: 1.25rem 0;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          opacity: 0;
          animation: slideDropdown 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideDropdown {
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .dropdown-sublist {
          display: flex;
          flex-direction: column;
        }

        .dropdown-sublink {
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.75rem 1.75rem;
          color: var(--text-dark-secondary);
          font-family: var(--font-body);
          font-size: 1.05rem; /* Increased size of dropdown sublinks */
          font-weight: 400;
          transition: all var(--transition-fast);
        }

        .dropdown-sublink:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.03);
          padding-left: 2rem;
        }

        /* Removed line effect in favor of solid capsule selection */

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .btn-header-cta {
          padding: 0.75rem 1.85rem;
          font-size: 1.05rem; /* Balanced CTA size with options */
        }

        .mobile-toggle {
          display: none;
          color: #ffffff;
        }

        /* Mobile Menu */
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--bg-dark-primary);
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: calc(var(--header-height) + 3rem) 2rem 2rem 2rem;
          overflow-y: auto;
          transform: translateY(-100%);
          transition: transform var(--transition-normal);
        }

        .mobile-nav-overlay.open {
          transform: translateY(0);
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.25rem;
          width: 100%;
          max-width: 320px;
        }

        .mobile-nav-link {
          font-family: var(--font-headings);
          font-size: 1.65rem;
          font-weight: 600;
          color: var(--text-dark-secondary);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--accent-cyan);
        }

        @media (max-width: 1024px) {
          .desktop-nav, .btn-header-cta {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
