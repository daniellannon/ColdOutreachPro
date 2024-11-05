import React from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import type { ICP } from '../types';

interface ICPFormProps {
  icp: ICP;
  onUpdate: (icp: ICP) => void;
}

export default function ICPForm({ icp, onUpdate }: ICPFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onUpdate({ ...icp, [name]: value });
  };

  const addPainPoint = () => {
    onUpdate({ ...icp, painPoints: [...icp.painPoints, ''] });
  };

  const removePainPoint = (index: number) => {
    const newPainPoints = icp.painPoints.filter((_, i) => i !== index);
    onUpdate({ ...icp, painPoints: newPainPoints });
  };

  const updatePainPoint = (index: number, value: string) => {
    const newPainPoints = [...icp.painPoints];
    newPainPoints[index] = value;
    onUpdate({ ...icp, painPoints: newPainPoints });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Ideal Customer Profile</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Industry Focus</label>
          <input
            type="text"
            name="industryFocus"
            value={icp.industryFocus}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">Pain Points</label>
            <button
              type="button"
              onClick={addPainPoint}
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
            >
              <PlusCircle className="w-4 h-4 mr-1" />
              Add Pain Point
            </button>
          </div>
          
          {icp.painPoints.map((point, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={point}
                onChange={(e) => updatePainPoint(index, e.target.value)}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => removePainPoint(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Business Size</label>
          <select
            name="businessSize"
            value={icp.businessSize}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select size</option>
            <option value="startup">Startup (1-10)</option>
            <option value="small">Small (11-50)</option>
            <option value="medium">Medium (51-200)</option>
            <option value="large">Large (201-1000)</option>
            <option value="enterprise">Enterprise (1000+)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Budget Range</label>
          <input
            type="text"
            name="budget"
            value={icp.budget}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., $10k-50k annually"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Decision Maker Profile</label>
          <textarea
            name="decisionMaker"
            value={icp.decisionMaker}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Describe the typical decision maker (role, responsibilities, pain points)"
          />
        </div>
      </div>
    </div>
  );
}