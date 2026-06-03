import React, { useState, useEffect } from 'react';
import { Layers, Database, Share2, Terminal, Code, Cpu, Smartphone, LayoutGrid, Heart, Search, Eye, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import LightCanvas from '../components/LightCanvas';

const Figma = ({ size = 24, className }) => (
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
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    <path d="M5 18.5A3.5 3.5 0 0 1 8.5 15H12v3.5A3.5 3.5 0 1 1 5 18.5z" />
  </svg>
);

function ShowcaseSlideshow({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4s Auto-play
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="showcase-slideshow-container">
      <div 
        className="slideshow-track" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="slide-item">
            <img src={img} alt={`${title} slide ${idx + 1}`} className="panel-showcase-img" />
          </div>
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <button className="slideshow-arrow arrow-left" onClick={handlePrev} aria-label="Previous slide">
            <ChevronLeft size={20} />
          </button>
          <button className="slideshow-arrow arrow-right" onClick={handleNext} aria-label="Next slide">
            <ChevronRight size={20} />
          </button>
          <div className="slideshow-dots">
            {images.map((_, idx) => (
              <button 
                key={idx} 
                className={`slideshow-dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Services({ activeTab, setActiveTab, setCurrentPage }) {

  const tabContent = {
    'ui-ux': {
      title: 'UI/UX Design & Product Strategy',
      subtitle: 'Design that speaks. Interfaces that convert.',
      images: [
        '/assets/portfolio-uiux.png',
        '/assets/portfolio-uiux-tablet.jpg',
        '/assets/portfolio-dashboard.png'
      ],
      desc: 'We place user behavior at the center of our creative process. Our designs do not just look stunning—they feel intuitive, simplify complex flows, and support your business goals.',
      items: [
        {
          icon: <Search className="service-icon" />,
          title: 'UX Research & Analysis',
          bullets: ['User persona mapping and journey audits', 'Competitor benchmarking and heatmapping', 'Usability testing & feedback analysis']
        },
        {
          icon: <Eye className="service-icon" />,
          title: 'Interactive Wireframes',
          bullets: ['Low and high-fidelity prototype flows', 'Architecture and hierarchy layouts', 'Quick validation loops prior to visual styling']
        },
        {
          icon: <Figma className="service-icon" />,
          title: 'Product Design Systems',
          bullets: ['Consistent component libraries in Figma', 'Design token alignment for developer handover', 'Design-to-code guidelines']
        },
        {
          icon: <Smartphone className="service-icon" />,
          title: 'Mobile App Design',
          bullets: ['iOS and Android native visual layouts', 'Gesture navigation mapping', 'Adaptive styling across screen shapes']
        },
        {
          icon: <LayoutGrid className="service-icon" />,
          title: 'Dashboard & Platform UI',
          bullets: ['Complex data charts visual mapping', 'Table layouts, filtering systems, and details panels', 'Enterprise SaaS interfaces custom layouts']
        }
      ]
    },
    'app-dev': {
      title: 'Full-Stack Software Development',
      subtitle: 'Performant architectures. Clean code.',
      images: [
        '/assets/portfolio-devops.png',
        '/assets/portfolio-uiux-code.jpg'
      ],
      desc: 'We engineer secure, scalable, and responsive applications tailored to your business. Our developers work side-by-side with our designers to ensure pixel-perfect fidelity.',
      items: [
        {
          icon: <Code className="service-icon" />,
          title: 'Web Applications',
          bullets: ['Interactive frontends in React & Vite', 'SEO-friendly, ultra-fast styling structures', 'Admin consoles and reporting panels']
        },
        {
          icon: <Smartphone className="service-icon" />,
          title: 'Mobile Applications',
          bullets: ['Cross-platform apps using Flutter & React Native', 'Offline caching and native hardware integrations', 'App Store & Play Store publication management']
        },
        {
          icon: <Cpu className="service-icon" />,
          title: 'SaaS Platforms',
          bullets: ['Multi-tenant databases and secure access management', 'Stripe & PayPal billing and subscription engines', 'Scalable cloud setups (AWS/Vercel)']
        },
        {
          icon: <Terminal className="service-icon" />,
          title: 'Custom Software Systems',
          bullets: ['High-throughput databases (PostgreSQL/Redis)', 'Secure user accounts and session systems', 'Background task queues and worker nodes']
        }
      ]
    },
    'integrations': {
      title: 'Integrations & Workflow Automation',
      subtitle: 'Connect systems. Eliminate manual labor.',
      images: [
        '/assets/portfolio-erp.png',
        '/assets/portfolio-chain.png',
        '/assets/portfolio-automation.png'
      ],
      desc: 'We bind isolated software programs into a cohesive neural network. By automating data pipelines and setting up centralized database engines, we save your team hundreds of manual hours.',
      items: [
        {
          icon: <Database className="service-icon" />,
          title: 'ERPNext Setup & Customization',
          bullets: ['Deploy and configure ERPNext modules', 'Custom DocTypes, custom print formats, and client scripts', 'Inventory, sales, procurement, and billing systems']
        },
        {
          icon: <Cpu className="service-icon" />,
          title: 'n8n Workflow Automation',
          bullets: ['Visual automated pipelines for data flow', 'Webhook triggers, conditional nodes, and data parsing', 'Error handling and automated slack/email notifications']
        },
        {
          icon: <Share2 className="service-icon" />,
          title: 'Custom API Integrations',
          bullets: ['Build secure REST and GraphQL API endpoints', 'Third-party integrations (CRM, payment, shipping)', 'Webhooks and real-time database synchronization']
        },
        {
          icon: <Layers className="service-icon" />,
          title: 'Mautic Marketing Systems',
          bullets: ['Self-hosted marketing automation server configs', 'Email campaigns, segment synchronization, and lead scoring', 'Website visitor tracking and forms integration']
        }
      ]
    }
  };

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="services-page">
      {/* Intro Header */}
      <section className="services-hero-section section-dark">
        <div className="container">
          <span className="section-subtitle">Our Capabilities</span>
          <h1 className="services-hero-title">Core Offerings & Expertise</h1>
          <p className="services-hero-desc">
            We specialize in translating digital concepts into highly functional solutions. Explore our core services.
          </p>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="services-tabs-section section-light">
        <LightCanvas />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tabs-nav">
            <button 
              onClick={() => setActiveTab('ui-ux')} 
              className={`tab-btn ${activeTab === 'ui-ux' ? 'active' : ''}`}
            >
              <Figma size={18} />
              <span>UI/UX Design</span>
            </button>
            <button 
              onClick={() => setActiveTab('app-dev')} 
              className={`tab-btn ${activeTab === 'app-dev' ? 'active' : ''}`}
            >
              <Code size={18} />
              <span>App Development</span>
            </button>
            <button 
              onClick={() => setActiveTab('integrations')} 
              className={`tab-btn ${activeTab === 'integrations' ? 'active' : ''}`}
            >
              <Cpu size={18} />
              <span>Integrations & Automation</span>
            </button>
          </div>

          {/* Active Tab Panel */}
          <div className="tab-panel animate-float">
            <div className="grid-2 panel-intro-grid">
              <div className="panel-intro-text">
                <span className="panel-subtitle">{tabContent[activeTab].subtitle}</span>
                <h2>{tabContent[activeTab].title}</h2>
                <p className="panel-desc">{tabContent[activeTab].desc}</p>
              </div>
              <div className="panel-intro-image-container">
                <ShowcaseSlideshow images={tabContent[activeTab].images} title={tabContent[activeTab].title} />
              </div>
            </div>

            <div className="grid-2 services-detail-grid">
              {tabContent[activeTab].items.map((item, index) => (
                <div key={index} className="glass-card-light service-detail-card">
                  <div className="detail-card-header">
                    <div className="detail-icon-wrap">{item.icon}</div>
                    <h3>{item.title}</h3>
                  </div>
                  <ul className="bullet-list">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="bullet-check" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="services-cta-banner">
            <h3>Need a tailor-made combination of these services?</h3>
            <p>We routinely build apps that incorporate frontend interfaces (React), mobile dashboards (Flutter), and automated backend ERP connections (ERPNext/n8n).</p>
            <button onClick={() => handleNavClick('contact')} className="btn btn-primary">
              Discuss Your Strategy
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .services-hero-section {
          padding: 8rem 0 4rem 0;
          background: linear-gradient(180deg, #050a10 0%, var(--bg-dark-primary) 100%);
          text-align: center;
        }

        .services-hero-title {
          font-size: 3.5rem;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .services-hero-desc {
          font-size: 1.2rem;
          color: var(--text-dark-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Tabs Nav */
        .tabs-nav {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 4rem;
          margin-top: -2rem;
          position: relative;
          z-index: 10;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: 50px;
          font-family: var(--font-headings);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-light-secondary);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          transition: all var(--transition-normal);
        }

        .tab-btn:hover {
          color: var(--text-light-primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
        }

        .tab-btn.active {
          background: var(--bg-dark-secondary);
          border-color: var(--bg-dark-secondary);
          color: #ffffff;
          box-shadow: 0 10px 25px rgba(0, 141, 218, 0.15);
        }

        .tab-btn.active svg {
          color: var(--accent-cyan);
        }

        /* Tab Panel Styling */
        .tab-panel {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: 24px;
          padding: 4rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.02);
          margin-bottom: 5rem;
          animation: fadeIn 0.4s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .panel-intro-grid {
          align-items: center;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .panel-intro-image-container {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
          border: 1px solid var(--border-light);
        }

        /* Showcase Slideshow Styles */
        .showcase-slideshow-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          aspect-ratio: 16 / 10;
        }

        .slideshow-track {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .slide-item {
          min-width: 100%;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #060c14;
        }

        .panel-showcase-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: opacity 0.3s ease;
        }

        .slideshow-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(7, 14, 23, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          z-index: 10;
          cursor: pointer;
        }

        .slideshow-arrow:hover {
          background: rgba(7, 14, 23, 0.9);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          transform: translateY(-50%) scale(1.05);
        }

        .arrow-left {
          left: 1rem;
        }

        .arrow-right {
          right: 1rem;
        }

        .slideshow-dots {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }

        .slideshow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          transition: all var(--transition-fast);
          cursor: pointer;
          border: none;
          padding: 0;
        }

        .slideshow-dot.active {
          background: var(--accent-cyan);
          width: 22px;
          border-radius: 4px;
        }

        .panel-subtitle {
          font-family: var(--font-headings);
          font-size: 0.95rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-blue);
          margin-bottom: 0.5rem;
          display: block;
        }

        .panel-intro h2 {
          font-size: 2.5rem;
          color: var(--text-light-primary);
          margin-bottom: 1.25rem;
        }

        .panel-desc {
          font-size: 1.15rem;
          color: var(--text-light-secondary);
          line-height: 1.6;
        }

        .services-detail-grid {
          gap: 2.5rem;
        }

        .service-detail-card {
          padding: 2.5rem;
        }

        .detail-card-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .detail-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: rgba(0, 141, 218, 0.05);
          border: 1px solid rgba(0, 141, 218, 0.1);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-icon {
          width: 22px;
          height: 22px;
        }

        .service-detail-card h3 {
          font-size: 1.35rem;
          color: var(--text-light-primary);
          margin: 0;
        }

        .bullet-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--text-light-secondary);
          font-size: 0.95rem;
        }

        .bullet-check {
          color: var(--accent-blue);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        /* Services CTA Banner */
        .services-cta-banner {
          background: linear-gradient(135deg, var(--bg-dark-secondary) 0%, var(--bg-dark-primary) 100%);
          border-radius: 20px;
          padding: 4rem;
          text-align: center;
          color: #ffffff;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .services-cta-banner h3 {
          font-size: 1.85rem;
          margin-bottom: 1rem;
        }

        .services-cta-banner p {
          color: var(--text-dark-secondary);
          max-width: 650px;
          margin: 0 auto 2.5rem auto;
          font-size: 1.05rem;
        }

        @media (max-width: 992px) {
          .tab-panel {
            padding: 2.5rem;
          }
          .services-hero-title {
            font-size: 2.75rem;
          }
        }

        @media (max-width: 768px) {
          .panel-intro-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem;
          }
          .tabs-nav {
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;
          }
          .tab-btn {
            width: 100%;
            justify-content: center;
          }
          .panel-intro h2 {
            font-size: 2rem;
          }
          .services-cta-banner {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
