import { Users, BookOpen, BellRing } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome back to the SEES Scholarship Admin Portal.</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-green-50 rounded-lg text-sees-green">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Active Scholarships</p>
            <h3 className="text-2xl font-bold text-gray-900">12</h3>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-blue-50 rounded-lg text-blue-600">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Students</p>
            <h3 className="text-2xl font-bold text-gray-900">450</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-orange-50 rounded-lg text-orange-600">
            <BellRing className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Pending Alerts</p>
            <h3 className="text-2xl font-bold text-gray-900">3</h3>
          </div>
        </div>
      </div>
    </div>
  );
}