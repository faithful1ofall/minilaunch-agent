"use client";

import { motion } from "framer-motion";
import type { LaunchStatus as LaunchStatusType } from "@/lib/utils/types";

interface LaunchStatusProps {
  status: LaunchStatusType | null;
}

export default function LaunchStatus({ status }: LaunchStatusProps) {
  const stages = [
    { id: "metadata", label: "Metadata", icon: "📝" },
    { id: "deployment", label: "Deployment", icon: "⚡" },
    { id: "listing", label: "Listing", icon: "🚀" },
    { id: "complete", label: "Complete", icon: "✅" },
  ];

  const currentStageIndex = status
    ? stages.findIndex((s) => s.id === status.stage)
    : -1;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 p-4 md:p-6 h-auto md:h-[600px] flex flex-col">
      <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Launch Progress</h3>

      {!status ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🚀</div>
            <p className="text-gray-500 dark:text-gray-400">
              Start a conversation to begin your NFT launch
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {status.currentStep}
              </span>
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {status.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${status.progress}%` }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
              />
            </div>
          </div>

          {/* Stages */}
          <div className="space-y-4 flex-1">
            {stages.map((stage, index) => {
              const isActive = index === currentStageIndex;
              const isComplete = index < currentStageIndex;

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center space-x-4 p-4 rounded-xl border-2 transition-all ${
                    isActive
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                      : isComplete
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : "border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700/50"
                  }`}
                >
                  <div
                    className={`text-3xl ${
                      isActive ? "animate-pulse" : ""
                    }`}
                  >
                    {isComplete ? "✅" : stage.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {stage.label}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {isComplete
                        ? "Completed"
                        : isActive
                        ? "In Progress"
                        : "Pending"}
                    </p>
                  </div>
                  {isActive && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Details */}
          {status.metadata && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-gray-50 dark:bg-slate-700 rounded-xl"
            >
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                Collection Details
              </h4>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-300">
                <p>
                  <span className="font-medium">Name:</span> {status.metadata.name}
                </p>
                {status.deployment && (
                  <p>
                    <span className="font-medium">Contract:</span>{" "}
                    {status.deployment.contractAddress.slice(0, 10)}...
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* Errors */}
          {status.errors && status.errors.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
            >
              <h4 className="font-semibold text-sm text-red-900 dark:text-red-300 mb-2">
                ⚠️ Issues
              </h4>
              <ul className="space-y-1 text-xs text-red-700 dark:text-red-400">
                {status.errors.map((error, i) => (
                  <li key={i}>• {error}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}
