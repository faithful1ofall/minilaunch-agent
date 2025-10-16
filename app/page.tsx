"use client";

import ChatInterface from "@/components/ChatInterface";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">MiniLaunch Agent</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">AI-Powered NFT Launch Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium">
              Powered by ADK-TS
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <ChatInterface />
      </main>
    </div>
  );
}
