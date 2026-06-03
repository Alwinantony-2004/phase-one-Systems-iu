import React, { useState } from 'react';
import { Eye, ExternalLink, X, Tag } from 'lucide-react';
import LightCanvas from '../components/LightCanvas';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'visual-design-console',
      title: 'Sleek UI/UX Design System',
      category: 'ui-ux',
      categoryLabel: 'UI/UX Design / Research',
      image: '/assets/portfolio-uiux.png',
      tags: ['Figma', 'UX Research', 'Interactive Wireframes', 'Product Design'],
      shortDesc: 'A premium UI/UX design workflow focusing on user behaviors, wireframe modeling, and scalable components library.',
      problem: 'The client had a legacy desktop-centric portal that confused users, leading to support requests and onboarding drop-offs.',
      solution: 'We conducted qualitative research and developed an entire components library in Figma. The screens use high-contrast glassmorphism and clear visual grids.',
      outcome: 'A streamlined design that reduced support tickets by 60% and served as a unified style guide for their engineering team.'
    },
    {
      id: 'tablet-media-collections',
      title: 'Tablet Media Collections Interface',
      category: 'ui-ux',
      categoryLabel: 'UI/UX Design / Mobile',
      image: '/assets/portfolio-uiux-tablet.jpg',
      tags: ['Tablet Design', 'UI/UX Design', 'Collections Grid', 'Figma'],
      shortDesc: 'A touch-optimized grid layout for media collections, featuring rich card states, notifications, and vibrant category tabs.',
      problem: 'The client needed a responsive, touch-friendly interface for browsing diverse collections of artwork and digital photography on tablet devices.',
      solution: 'We engineered a dynamic card grid with clear typography, high contrast, and smooth swipe gestures optimized for larger touch viewports.',
      outcome: 'An elegant digital catalog that increased browsing times by 40% and resulted in a 25% increase in user-saved collections.'
    },
    {
      id: 'erpnext-customization',
      title: 'Enterprise ERPNext Modules',
      category: 'integrations',
      categoryLabel: 'ERPNext / Custom Software',
      image: '/assets/portfolio-erp.png',
      tags: ['ERPNext', 'Database', 'Python Scripting', 'Integrations'],
      shortDesc: 'Customized ERPNext deployment tracking sales, inventory purchases, warehouse levels, and accounting ledgers in real-time.',
      problem: 'The client was using disparate software solutions that did not communicate, causing inventory delays and accounting mismatches.',
      solution: 'We customized DocTypes, custom print formats, and built hooks to automatically sync inventory adjustments with sales channels in a unified ERPNext setup.',
      outcome: 'Inventory tracking accuracy reached 99.8%, order fulfillments became 35% faster, and accounting reconciliation was automated.'
    },
    {
      id: 'devops-fullstack',
      title: 'DevOps & Scalable Cloud Apps',
      category: 'web-apps',
      categoryLabel: 'Web Applications / DevOps',
      image: '/assets/portfolio-devops.png',
      tags: ['React', 'Vite', 'DevOps', 'CI/CD Pipelines', 'Cloud Setup'],
      shortDesc: 'A high-performance full-stack web application structure with automated release, container testing, and serverless hosting.',
      problem: 'The engineering team was deploy-blocking and had inconsistent staging-to-production deployment cycles.',
      solution: 'We designed a CI/CD automated pipeline linking GitHub with dev/staging environments, establishing auto-testing scripts, and bundling the app via Vite.',
      outcome: 'Deployment cycles went from bi-weekly to daily, automated build check failures were caught instantly, and server uptime improved to 99.99%.'
    },
    {
      id: 'custom-validation-ide',
      title: 'Custom Validation Engine & IDE',
      category: 'web-apps',
      categoryLabel: 'Software Engineering / Quality',
      image: '/assets/portfolio-uiux-code.jpg',
      tags: ['IDE Setup', 'Software Engineering', 'Validation Logic', 'C#'],
      shortDesc: 'Clean code architecture and validation systems developed to secure core corporate databases and business logic.',
      problem: 'Legacy systems suffered from loose input validation, causing database drift and unexpected logic bugs in client record processing.',
      solution: 'We implemented strict field validator classes and automated regex testing suites, organizing them inside a clean repo structure in Visual Studio.',
      outcome: 'System security vulnerabilities dropped to zero, and code quality coverage reached 92%, resulting in easier maintenance.'
    },
    {
      id: 'secure-connectivity',
      title: 'n8n & Mautic Automation',
      category: 'integrations',
      categoryLabel: 'APIs / Workflow Automation',
      image: '/assets/portfolio-chain.png',
      tags: ['n8n', 'APIs', 'Mautic', 'Workflow Automation', 'Webhooks'],
      shortDesc: 'Automating complex backend pipelines connecting customer registration platforms, database engines, and automated marketing email loops.',
      problem: 'Manual entry of customer signups into CRM and email marketing engines led to data loss and slow customer engagement times.',
      solution: 'We deployed n8n nodes that trigger automatically on webhooks, routing customer records through security layers and synchronizing segments in Mautic.',
      outcome: 'Engagement delays were reduced from hours to under 2 seconds, and conversion rates improved by 22% due to instant follow-up triggers.'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      {/* Intro Header */}
      <section className="portfolio-hero-section section-dark">
        <div className="container">
          <span className="section-subtitle">Our Work</span>
          <h1 className="portfolio-hero-title">Case Studies & Concepts</h1>
          <p className="portfolio-hero-desc">
            Explore our visual showcase. We design high-fidelity interfaces and build robust systems to streamline businesses.
          </p>
        </div>
      </section>

      {/* Portfolio Grid & Filter */}
      <section className="portfolio-grid-section section section-light">
        <LightCanvas />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Filters */}
          <div className="portfolio-filters">
            {['all', 'ui-ux', 'web-apps', 'integrations'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
              >
                {cat === 'all' ? 'All Work' : 
                 cat === 'ui-ux' ? 'UI/UX Design' : 
                 cat === 'web-apps' ? 'App Development' : 
                 'Integrations & Automation'}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid-3 portfolio-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="glass-card-light portfolio-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="portfolio-img-wrap">
                  <img src={project.image} alt={project.title} className="portfolio-img" />
                  <div className="portfolio-overlay">
                    <span className="overlay-btn"><Eye size={20} /> View Case Study</span>
                  </div>
                </div>
                
                <div className="portfolio-info">
                  <span className="portfolio-cat">{project.categoryLabel}</span>
                  <h3>{project.title}</h3>
                  <p>{project.shortDesc}</p>
                  
                  <div className="portfolio-tags">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="portfolio-tag">
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && <span className="portfolio-tag-more">+{project.tags.length - 3}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-card animate-float" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <X size={24} />
            </button>
            
            <div className="modal-body">
              <div className="modal-image-col">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
              </div>
              
              <div className="modal-content-col">
                <span className="modal-cat">{selectedProject.categoryLabel}</span>
                <h2>{selectedProject.title}</h2>
                
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="modal-tag">
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="modal-short-desc">{selectedProject.shortDesc}</p>

                <div className="modal-section-block">
                  <h4>The Problem</h4>
                  <p>{selectedProject.problem}</p>
                </div>

                <div className="modal-section-block">
                  <h4>Our Solution</h4>
                  <p>{selectedProject.solution}</p>
                </div>

                <div className="modal-section-block">
                  <h4>The Outcome</h4>
                  <p className="outcome-text">{selectedProject.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .portfolio-hero-section {
          padding: 8rem 0 4rem 0;
          background: linear-gradient(180deg, #050a10 0%, var(--bg-dark-primary) 100%);
          text-align: center;
        }

        .portfolio-hero-title {
          font-size: clamp(2.25rem, 6vw, 3.5rem);
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .portfolio-hero-desc {
          font-size: 1.2rem;
          color: var(--text-dark-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Filters */
        .portfolio-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          margin-top: 0;
          position: relative;
          z-index: 10;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.8rem 1.75rem;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: 50px;
          font-family: var(--font-headings);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-light-secondary);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          transition: all var(--transition-normal);
        }

        .filter-btn:hover {
          color: var(--text-light-primary);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: var(--bg-dark-secondary);
          border-color: var(--bg-dark-secondary);
          color: #ffffff;
          box-shadow: 0 10px 25px rgba(0, 141, 218, 0.15);
        }

        /* Portfolio Grid */
        .portfolio-grid {
          margin-bottom: 4rem;
        }

        .portfolio-card {
          padding: 0;
          overflow: hidden;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .portfolio-img-wrap {
          position: relative;
          width: 100%;
          padding-top: 60%; /* 5:3 Aspect ratio */
          background-color: var(--bg-dark-primary);
          overflow: hidden;
          border-bottom: 1px solid var(--border-light);
        }

        .portfolio-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .portfolio-card:hover .portfolio-img {
          transform: scale(1.05);
        }

        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(12, 24, 37, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-normal);
        }

        .portfolio-card:hover .portfolio-overlay {
          opacity: 1;
        }

        .overlay-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--accent-blue);
          color: #ffffff;
          border-radius: 50px;
          font-family: var(--font-headings);
          font-weight: 600;
          font-size: 0.95rem;
          box-shadow: 0 4px 15px rgba(0, 141, 218, 0.3);
        }

        .portfolio-info {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .portfolio-cat {
          font-family: var(--font-headings);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          display: block;
        }

        .portfolio-info h3 {
          font-size: 1.35rem;
          color: var(--text-light-primary);
          margin-bottom: 0.75rem;
        }

        .portfolio-info p {
          color: var(--text-light-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .portfolio-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          align-items: center;
        }

        .portfolio-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.35rem 0.75rem;
          background: var(--bg-light-secondary);
          border: 1px solid var(--border-light);
          border-radius: 4px;
          font-size: 0.75rem;
          color: var(--text-light-secondary);
          font-weight: 500;
        }

        .portfolio-tag svg {
          color: var(--accent-blue);
        }

        .portfolio-tag-more {
          font-size: 0.75rem;
          color: var(--text-light-muted);
          font-weight: 600;
          padding-left: 0.25rem;
        }

        /* Modal Details */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(5, 10, 16, 0.8);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .modal-card {
          background: var(--bg-dark-secondary);
          width: 100%;
          max-width: 1000px;
          max-height: 90vh;
          border-radius: 24px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
          overflow-y: auto;
          position: relative;
          border: 1px solid var(--border-dark);
          color: var(--text-dark-primary);
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-dark-tertiary);
          border: 1px solid var(--border-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dark-secondary);
          z-index: 10;
          transition: all var(--transition-fast);
        }

        .modal-close:hover {
          background: var(--accent-blue);
          color: #ffffff;
          transform: rotate(90deg);
        }

        .modal-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 100%;
        }

        .modal-image-col {
          background: var(--bg-dark-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          min-height: 400px;
        }

        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background-color: var(--bg-dark-primary);
        }

        .modal-content-col {
          padding: 4rem 3rem;
          overflow-y: auto;
        }

        .modal-cat {
          font-family: var(--font-headings);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
          display: block;
        }

        .modal-content-col h2 {
          font-size: 2.25rem;
          color: #ffffff;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .modal-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 0.85rem;
          background: var(--bg-dark-tertiary);
          border: 1px solid var(--border-dark);
          border-radius: 4px;
          font-size: 0.8rem;
          color: var(--text-dark-secondary);
        }

        .modal-tag svg {
          color: var(--accent-blue);
        }

        .modal-short-desc {
          font-size: 1.1rem;
          color: var(--text-dark-secondary);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          border-left: 3px solid var(--accent-blue);
          padding-left: 1rem;
        }

        .modal-section-block {
          margin-bottom: 2rem;
        }

        .modal-section-block h4 {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .modal-section-block p {
          color: var(--text-dark-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        .outcome-text {
          font-weight: 500;
          color: #ffffff !important;
        }

        @media (max-width: 992px) {
          .modal-body {
            grid-template-columns: 1fr;
            height: auto; /* Let layout flow naturally to prevent height squishing/overlapping */
          }
          .modal-content-col {
            padding: 3rem 2rem;
            overflow-y: visible; /* Prevent scrollbar overlaps inside the column */
          }
        }

        @media (max-width: 768px) {
          .portfolio-filters {
            margin-top: 0; /* Remove negative margin to prevent hero description overlap */
            margin-bottom: 2.5rem;
            gap: 0.75rem;
          }
          .modal-close {
            position: fixed;
            top: 1rem;
            right: 1rem;
            background: var(--bg-dark-tertiary);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            border-color: rgba(255, 255, 255, 0.2);
            z-index: 2001; /* Above modal card */
          }
        }

        @media (max-width: 576px) {
          .portfolio-info {
            padding: 1.5rem;
          }
          .modal-content-col {
            padding: 2rem 1.25rem;
          }
          .modal-content-col h2 {
            font-size: 1.75rem;
          }
          .modal-backdrop {
            padding: 1rem;
          }
          .modal-card {
            border-radius: 16px;
          }
        }
      `}</style>
    </div>
  );
}
