"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ChatInterface from "@/components/ChatInterface";
import LaunchStatus from "@/components/LaunchStatus";
import Header from "@/components/Header";

import type { LaunchStatus as LaunchStatusType } from "@/lib/utils/types";

export default function Home() {
  const [launchStatus, setLaunchStatus] = useState<LaunchStatusType | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            MiniLaunch Agent
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your AI-powered assistant for launching NFT collections. From metadata to marketplace - we handle it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Interface - Takes 2 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <ChatInterface onStatusUpdate={setLaunchStatus} />
          </motion.div>

          {/* Launch Status - Takes 1 column on large screens */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <LaunchStatus status={launchStatus} />
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <FeatureCard
            icon="🎨"
            title="Metadata Generation"
            description="AI-powered metadata creation following OpenSea standards"
          />
          <FeatureCard
            icon="⚡"
            title="Smart Contract Deployment"
            description="Deploy ERC-721/1155 contracts across multiple chains"
          />
          <FeatureCard
            icon="🚀"
            title="Marketplace Listing"
            description="Automatic listing on OpenSea, Rarible, and more"
          />
        </motion.div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
}
