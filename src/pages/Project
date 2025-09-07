import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-8 flex flex-col items-center">
      {/* Thumbnail */}
      <motion.img
        src="https://images.unsplash.com/photo-1581090700227-4c4e6f0a85d3"
        alt="Projects"
        className="rounded-2xl shadow-lg w-full max-w-3xl cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={() => setExpanded(!expanded)}
      />

      {/* Expanded Details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="mt-6 bg-white p-6 rounded-xl shadow-lg w-full max-w-3xl"
          >
            <h2 className="text-2xl font-bold mb-4">Process Improvements & Key Projects</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Employee Activity Tracker Automation:</strong>  
                Designed an Excel macro-based tracker to log and monitor employee tasks throughout the day.  
                ✅ 50% reduction in manual effort, improved visibility, and accurate calculation of extra working hours.
              </li>
              <li>
                <strong>File Converter Macro Tool:</strong>  
                Built an Excel VBA automation tool for bulk file conversion across multiple formats with a single click.  
                ✅ Saved 25+ hours per month by eliminating manual file processing.
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
