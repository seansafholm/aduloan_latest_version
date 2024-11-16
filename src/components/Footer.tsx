import React from 'react';
import { formatDate } from '../utils/dateFormatter';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  pmmsDate: Date;
}

export const Footer: React.FC<FooterProps> = ({ pmmsDate }) => {
  return (
    <footer className="mt-12 text-center text-sm text-gray-600 max-w-3xl mx-auto">
      <p className="mb-4">
        Disclaimer: The ADU Calculator is for informational purposes only and should not be considered financial advice. Actual interest rates and APR may be higher and are subject to change without notice. * Interest rates provided as of {formatDate(pmmsDate)} by <a href="https://www.freddiemac.com/pmms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Freddie Mac Primary Mortgage Market Survey®</a>. This is not a commitment to lend, and not all borrowers will qualify. Please consult with a mortgage professional to obtain personalized loan information.
      </p>
      <div className="flex items-center justify-center mb-4">
        <img 
          src="https://apps.hud.gov/images/fheo75.bmp"
          alt="Equal Housing Opportunity"
          className="h-10 mr-3"
        />
        <span>Equal Housing Opportunity. Xpert Home Lending, Inc. is a real estate broker licensed by the California department of Real Estate DRE# 02166758, NMLS# 217919. 1100 Satellite Blvd NW Suwanee, GA 30024. Sean Safholm DRE#01270334 NMLS# 121627.</span>
      </div>
      <p>
        <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> | <Link to="/terms-of-use" className="text-blue-600 hover:underline">Terms of Use</Link>
      </p>
    </footer>
  );
};