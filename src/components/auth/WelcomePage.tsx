import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, LogIn } from 'lucide-react';

export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Restaurant Finder</h1>
          <p className="mt-2 text-gray-600">Find and book the best restaurants in your area</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/register')}
            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            New User? Register
          </button>

          <button
            onClick={() => navigate('/login')}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <LogIn className="w-5 h-5 mr-2" />
            Existing User? Login
          </button>
        </div>
      </div>
    </div>
  );
}