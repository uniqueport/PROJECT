import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-8 flex flex-col items-center">
      {/* Thumbnail */}
      <motion.img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        alt="Skills"
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
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Excel (Advanced):</strong> VLOOKUP, XLOOKUP, INDEX-MATCH, PivotTables, Power Query, Macros</li>
              <li><strong>Data Visualization:</strong> Power BI (DAX, KPIs, Dashboards, Visualizations), Excel Dashboards</li>
              <li><strong>Automation & Tools:</strong> Power Automate, SharePoint, Salesforce</li>
              <li><strong>Databases:</strong> SQL (Data Cleaning, Transformation)</li>
              <li><strong>Other Tools:</strong> FileZilla, Microsoft Word, PowerPoint, Outlook</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

