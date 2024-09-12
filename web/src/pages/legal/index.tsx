import React from 'react';
import { Link } from 'react-router-dom';

const LegalPrivacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/legal" className="text-blue-600 hover:underline mb-4 block">&larr; Back to Legal Documents</Link>
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p><strong>Last updated:</strong> May 15, 2024</p>
      {/* Rest of the Privacy Policy content */}
    </div>
  );
};

export default LegalPrivacy;
