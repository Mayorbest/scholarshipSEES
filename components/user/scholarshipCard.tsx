import Link from 'next/link';
import { Calendar, MapPin, DollarSign, GraduationCap } from 'lucide-react';
import { Scholarship } from '@/types'; // Assuming you set up path aliases, or use '../../types'

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

export default function ScholarshipCard({ scholarship }: ScholarshipCardProps) {
  // Format the date for display
  const formattedDeadline = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(scholarship.deadline);

  return (
    <div className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
            {scholarship.status}
          </span>
          <span className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            {formattedDeadline}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-1">{scholarship.title}</h3>
        <p className="text-sm font-medium text-gray-600 mb-4">{scholarship.provider}</p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-700">
            <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
            {scholarship.amount}
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <GraduationCap className="w-4 h-4 mr-2 text-gray-400" />
            {scholarship.eligibility.levels.join(', ')}
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
            {scholarship.eligibility.locations.join(', ')}
          </div>
        </div>
      </div>

      <Link 
        href={`/scholarships/${scholarship.id}`}
        className="w-full block text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        View Details
      </Link>
    </div>
  );
}