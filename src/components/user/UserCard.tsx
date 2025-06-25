'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Image from 'next/image';
import { userType } from '@/types/userType';

async function getAllUser() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}users`);
  if (!res.ok) throw new Error('Failed to fetch users');
  const data = await res.json();
  return data.users as userType[];
}

export default function UserCard() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUser,
  });

  if (isLoading) return <p>Loading users....</p>;
  if (error) return <p>Error loading users!</p>;

return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {users?.map((user, index) => (
        <div
          key={user.id}
          className="group relative bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/90"
          style={{
            animationDelay: `${index * 100}ms`,
            animation: 'fadeInUp 0.6s ease-out forwards'
          }}
        >
          {/* Gradient border glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
          
          <div className="flex flex-col items-center">
            {/* Avatar with modern styling */}
            <div className="relative w-28 h-28 mb-6">
              <Image
                src={user.image || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'}
                alt={user.username}
                width={112}
                height={112}
                className="object-cover w-full h-full rounded-full ring-4 ring-white/60 group-hover:ring-blue-200/80 transition-all duration-300 shadow-lg"
              />
              {/* Online status indicator */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-3 border-white shadow-lg">
                <div className="w-2 h-2 bg-green-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
              </div>
            </div>

            {/* User info with modern typography */}
            <h2 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
              {user.username}
            </h2>
            <p className="text-slate-600 text-sm mb-4 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {user.email}
            </p>

            {/* Modern social links */}
            <div className="flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <a
                href="#"
                target="_blank"
                className="p-2.5 bg-slate-100/80 hover:bg-blue-100 rounded-xl transition-all duration-200 hover:scale-110 transform shadow-sm hover:shadow-md"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-slate-600 hover:text-blue-500 transition-colors"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
                </svg>
              </a>
              <a
                href="https://github.com/yel-59"
                target="_blank"
                className="p-2.5 bg-slate-100/80 hover:bg-slate-800 rounded-xl transition-all duration-200 hover:scale-110 transform shadow-sm hover:shadow-md group/github"
              >
                <span className="sr-only">Github</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-slate-600 group-hover/github:text-white transition-colors"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Keyframes for animation */}
    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  </div>
);
}
