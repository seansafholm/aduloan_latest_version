import React from 'react';
import { MortgageCalculator } from './components/MortgageCalculator';
import { usePMMSRate } from './hooks/usePMMSRate';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  const { rate, date } = usePMMSRate();

  return (
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-8">
              <MortgageCalculator />
              <Footer pmmsDate={date} />
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;