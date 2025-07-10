'use client';
import { useState } from 'react'
import DashboardSection from '../components/DashboardSection'
import ChatSection from '../components/ChatSection'

export default function Home() {
  const [selectedView, setSelectedView] = useState('dashboard')

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4">
        <h1 className="text-2xl font-bold text-blue-800">Finora</h1>
        <p className="text-sm text-gray-600">Your Personal Financial Assistant</p>
      </nav>
      
      <div className="container mx-auto p-4 flex gap-4">
        <div className="w-64 bg-white rounded-lg shadow p-4">
          <button
            onClick={() => setSelectedView('dashboard')}
            className={`w-full p-2 mb-2 rounded text-gray-800 ${selectedView === 'dashboard' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setSelectedView('chat')}
            className={`w-full p-2 rounded text-gray-800 ${selectedView === 'chat' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
          >
            Chat Advisor
          </button>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow p-4">
          {selectedView === 'dashboard' ? <DashboardSection /> : <ChatSection />}
        </div>
      </div>
    </main>
  )
}
