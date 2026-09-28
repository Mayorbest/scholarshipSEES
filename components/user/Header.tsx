import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top green announcement banner replicating the main site */}
      <div className="w-full bg-sees-green py-2 text-center">
        <p className="text-white text-xs font-semibold tracking-wider uppercase">
          SEES Scholarship Portal
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
         {/* Logo and Department Name */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 relative flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
               {/* Using standard img tag so it doesn't crash if the file is missing */}
               <img src="/sees-logo.png" alt="SEES Logo" className="w-full h-full object-cover" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-sm font-bold text-gray-900 leading-tight">
                Society of Electrical, Electronic, and <br/> Computer Engineering Students
              </h1>
              <p className="text-xs text-gray-500 font-medium">University of Lagos</p>
            </div>
          </div>
          
          {/* Centered Navigation (Adapted for Scholarships) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-900 font-medium border-b-2 border-sees-green pb-1">
              Home
            </Link>
            <Link href="/saved" className="text-gray-600 font-medium hover:text-sees-green transition-colors">
              Saved Scholarships
            </Link>
            <Link href="/resources" className="text-gray-600 font-medium hover:text-sees-green transition-colors">
              Resources
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="px-5 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              Log in
            </Link>
            <Link 
              href="/admin/dashboard" 
              className="px-5 py-2 text-sm font-medium text-white bg-sees-green rounded-full hover:bg-[#003A29] transition-colors"
            >
              Admin
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}