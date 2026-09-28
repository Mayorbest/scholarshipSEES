"use client";

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import ScholarshipCard from '@/components/user/scholarshipCard';
import { Scholarship } from '@/types';

// Mock data to test the UI before we connect Firebase
const DUMMY_SCHOLARSHIPS: Scholarship[] = [
  {
    id: '1',
    title: 'Global Tech Innovators Scholarship',
    provider: 'Google',
    description: 'Supporting the next generation of tech leaders.',
    amount: '$10,000',
    applicationLink: '#',
    deadline: new Date('2026-12-01'),
    eligibility: { levels: ['Undergraduate', 'Masters'], locations: ['Global'] },
    status: 'Published',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'African Engineering Excellence Award',
    provider: 'Engineering Society',
    description: 'For outstanding engineering students in Africa.',
    amount: '₦500,000',
    applicationLink: '#',
    deadline: new Date('2026-10-15'),
    eligibility: { levels: ['Undergraduate'], locations: ['Nigeria', 'Africa'] },
    status: 'Published',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function DiscoveryFeed() {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('All');

  // Filtering Logic
  const filteredScholarships = DUMMY_SCHOLARSHIPS.filter((scholarship) => {
    // 1. Search Match: Check if title or provider contains the search term
    const matchesSearch = 
      scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase());

    // 2. Level Match: Check if the selected level is in the scholarship's eligibility array
    const matchesLevel = 
      levelFilter === 'All' || 
      scholarship.eligibility.levels.includes(levelFilter as any);

    return matchesSearch && matchesLevel;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          Find Your Next Scholarship
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Filter by your academic level, location, or search directly to discover opportunities tailored for you.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10 p-4 bg-gray-50 rounded-xl border border-gray-100">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name or provider..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="relative w-full sm:w-64">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white transition-all"
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
          >
            <option value="All">All Levels</option>
            <option value="High School">High School</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
      </div>

      {/* Results Grid */}
      {filteredScholarships.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-gray-500 text-lg">No scholarships found matching your criteria.</p>
          <button 
            onClick={() => { setSearchTerm(''); setLevelFilter('All'); }}
            className="mt-4 text-blue-600 font-medium hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </main>
  );
}