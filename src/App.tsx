import React, { useState } from 'react';
import { UserCircle, Target, Mail } from 'lucide-react';
import ProspectForm from './components/ProspectForm';
import ICPForm from './components/ICPForm';
import EmailGenerator from './components/EmailGenerator';
import type { Prospect, ICP } from './types';

function App() {
  const [prospect, setProspect] = useState<Prospect>({
    name: '',
    linkedinUrl: '',
    title: '',
    company: '',
    email: '',
    workExperience: '',
    socialLinks: [],
    companyInfo: '',
    notes: ''
  });

  const [icp, setICP] = useState<ICP>({
    industryFocus: '',
    painPoints: [],
    businessSize: '',
    budget: '',
    decisionMaker: ''
  });

  const [activeTab, setActiveTab] = useState<'prospect' | 'icp' | 'email'>('prospect');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Mail className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Cold Outreach Pro</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center mb-8">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab('prospect')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'prospect'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <UserCircle className="w-5 h-5 inline-block mr-1" />
              Prospect
            </button>
            <button
              onClick={() => setActiveTab('icp')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'icp'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Target className="w-5 h-5 inline-block mr-1" />
              ICP
            </button>
            <button
              onClick={() => setActiveTab('email')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'email'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Mail className="w-5 h-5 inline-block mr-1" />
              Email
            </button>
          </nav>
        </div>

        {activeTab === 'prospect' && (
          <ProspectForm prospect={prospect} onUpdate={setProspect} />
        )}
        
        {activeTab === 'icp' && (
          <ICPForm icp={icp} onUpdate={setICP} />
        )}
        
        {activeTab === 'email' && (
          <EmailGenerator prospect={prospect} icp={icp} />
        )}
      </div>
    </div>
  );
}

export default App;