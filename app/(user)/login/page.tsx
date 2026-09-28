"use client";

import { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Attempting to log in with:", email);
    // Next Step: We will wire this up to Firebase Authentication
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to access the SEES Scholarship Portal
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sees-green focus:border-sees-green outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="admin@seesunilag.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sees-green focus:border-sees-green outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-sees-green focus:ring-sees-green border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 font-medium">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link href="#" className="font-semibold text-sees-green hover:text-[#003A29]">
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-lg text-sm font-bold text-white bg-sees-green hover:bg-[#003A29] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sees-green transition-colors shadow-md"
          >
            Sign in <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Not an admin?{' '}
          <Link href="/" className="font-semibold text-sees-green hover:text-[#003A29]">
            Return to student feed
          </Link>
        </div>

      </div>
    </div>
  );
}