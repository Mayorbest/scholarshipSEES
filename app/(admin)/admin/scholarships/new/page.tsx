"use client";

import { useState } from 'react';
import { Save, Send } from 'lucide-react';

export default function NewScholarshipPage() {
  // We'll use a simple state to hold our form data for now
  const [formData, setFormData] = useState({
    title: '',
    provider: '',
    amount: '',
    deadline: '',
    applicationLink: '',
    levels: 'Undergraduate',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving to database...", formData);
    // Next step: We will connect this to Firebase!
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Post a New Scholarship</h1>
        <p className="text-gray-600 mt-2">Fill in the details below to publish a new opportunity to the student feed.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Scholarship Title</label>
            <input 
              type="text" 
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sees-green focus:border-sees-green outline-none"
              placeholder="e.g. NNPC/Total National Merit"
              onChange={e => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Provider/Organization</label>
            <input 
              type="text" 
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sees-green focus:border-sees-green outline-none"
              placeholder="e.g. TotalEnergies"
              onChange={e => setFormData({...formData, provider: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Amount / Reward</label>
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sees-green focus:border-sees-green outline-none"
              placeholder="e.g. ₦150,000 or Full Tuition"
              onChange={e => setFormData({...formData, amount: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Deadline</label>
            <input 
              type="date" 
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sees-green focus:border-sees-green outline-none"
              onChange={e => setFormData({...formData, deadline: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Application Link</label>
          <input 
            type="url" 
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sees-green focus:border-sees-green outline-none"
            placeholder="https://..."
            onChange={e => setFormData({...formData, applicationLink: e.target.value})}
          />
        </div>

        <div className="pt-6 border-t border-gray-100 flex justify-end gap-4">
          <button type="button" className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save as Draft
          </button>
          <button type="submit" className="px-6 py-2.5 text-sm font-medium text-white bg-sees-green rounded-lg hover:bg-[#003A29] flex items-center gap-2 transition-colors">
            <Send className="w-4 h-4" />
            Publish to Feed
          </button>
        </div>
      </form>
    </div>
  );
}