import React, { useState } from 'react';
import { Send, Copy } from 'lucide-react';
import type { Prospect, ICP, EmailTemplate } from '../types';

interface EmailGeneratorProps {
  prospect: Prospect;
  icp: ICP;
}

export default function EmailGenerator({ prospect, icp }: EmailGeneratorProps) {
  const [emailTemplate, setEmailTemplate] = useState<EmailTemplate>({
    subject: '',
    body: ''
  });

  const generateEmail = () => {
    // In a real application, this would use an AI service or template engine
    const subject = `Helping ${prospect.company} with ${icp.painPoints[0]}`;
    const body = `Hi ${prospect.name},

I noticed your work at ${prospect.company} as ${prospect.title} and was particularly impressed by your experience in ${prospect.workExperience}.

Based on my research of ${prospect.company}, I noticed that you might be experiencing challenges with ${icp.painPoints.join(', ')}. 

I've helped similar ${icp.businessSize} companies in the ${icp.industryFocus} industry overcome these challenges by [Your Solution].

Would you be open to a brief conversation about how we could help ${prospect.company}?

Best regards,
[Your name]`;

    setEmailTemplate({ subject, body });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Email Generator</h2>
      
      <button
        onClick={generateEmail}
        className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Send className="w-4 h-4 mr-2" />
        Generate Personalized Email
      </button>

      {emailTemplate.subject && (
        <div className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                value={emailTemplate.subject}
                readOnly
                className="flex-1 rounded-md border-gray-300 bg-gray-50"
              />
              <button
                onClick={() => copyToClipboard(emailTemplate.subject)}
                className="ml-2 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Email Body</label>
            <div className="mt-1">
              <textarea
                value={emailTemplate.body}
                readOnly
                rows={10}
                className="block w-full rounded-md border-gray-300 bg-gray-50"
              />
              <button
                onClick={() => copyToClipboard(emailTemplate.body)}
                className="absolute top-0 right-0 mt-6 mr-2 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}