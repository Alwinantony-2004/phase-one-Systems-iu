import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [servicesTab, setServicesTab] = useState('ui-ux');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services activeTab={servicesTab} setActiveTab={setServicesTab} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'portfolio':
        return <Portfolio />;
      case 'technologies':
        return <Technologies />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} setServicesTab={setServicesTab} />
      
      <main className="main-content">
        <div key={currentPage} className="page-transition-wrap">
          {renderPage()}
        </div>
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      <style>{`
        .app-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .main-content {
          flex-grow: 1;
          padding-bottom: 6rem; /* Keep space between page content and the footer, never let them touch */
        }
      `}</style>
    </div>
  );
}

export default App;
