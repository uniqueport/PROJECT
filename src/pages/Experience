import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-8 flex flex-col items-center">
      <motion.img
        src="https://images.unsplash.com/photo-1554774853-b414d2a2fc46"
        alt="Experience"
        className="rounded-2xl shadow-lg w-full max-w-3xl cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={() => setExpanded(!expanded)}
      />

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="mt-6 bg-white p-6 rounded-xl shadow-lg w-full max-w-3xl"
          >
            <h2 className="text-2xl font-bold mb-4">Tata Consultancy Services (TCS) – BFSI Domain</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Delivered 98% SLA/ESL/MSL compliance by ensuring accurate and timely client reporting.</li>
              <li>Extracted and transformed raw CSV data from FTP (FileZilla) using SQL scripts.</li>
              <li>Designed Excel dashboards and Power BI reports for senior management.</li>
              <li>Authored SOPs, mentored new joiners, and conducted knowledge-sharing sessions.</li>
              <li>Collaborated with global stakeholders using SharePoint & Salesforce workflows.</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
