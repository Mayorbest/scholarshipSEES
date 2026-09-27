// types/index.ts

export type AcademicLevel = 'High School' | 'Undergraduate' | 'Masters' | 'PhD' | 'All';
export type ScholarshipStatus = 'Draft' | 'Published' | 'Archived';

export interface EligibilityCriteria {
  levels: AcademicLevel[];
  locations: string[]; // e.g., ['Global', 'Nigeria', 'Africa']
  courses?: string[]; // e.g., ['Engineering', 'Computer Science']
  minimumCGPA?: number; 
  otherRequirements?: string[];
}

export interface Scholarship {
  id: string; // The database document ID
  title: string;
  provider: string;
  description: string;
  amount: string; // e.g., "Full Tuition", "$5,000", "₦500,000"
  applicationLink: string;
  deadline: Date; 
  eligibility: EligibilityCriteria;
  status: ScholarshipStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  id: string; // Matches the authentication UID
  email: string;
  role: 'admin' | 'user';
  savedScholarships: string[]; // Array of Scholarship IDs the user bookmarked
  // Optional: User preferences for the algorithm to suggest scholarships
  preferences?: {
    level: AcademicLevel;
    course: string;
  };
}

// For the admin's live news feed dashboard
export interface OpportunityAlert {
  id: string;
  title: string;
  source: string; // e.g., "Google Alerts", "Scholarship API"
  url: string;
  publishedAt: Date;
  isReviewed: boolean; // True if admin already turned it into a post or dismissed it
}