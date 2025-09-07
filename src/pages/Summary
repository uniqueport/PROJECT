import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Summary() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-8 flex flex-col items-center">
      <motion.img
        src="https://images.unsplash.com/photo-1581090700227-4c4e6f0a85d3"
        alt="Professional Summary"
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
            <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
            <p className="text-gray-700 mb-2">
              Detail-oriented Analyst with 3 years of experience in the BFSI domain, specializing in process excellence, workflow automation, and business reporting. 
            </p>
            <p className="text-gray-700 mb-2">
              Proficient in Advanced Excel, Power BI, SQL, and automation tools, with proven success in enhancing SLA/ESL compliance, streamlining operations, and enabling data-driven decision-making.
            </p>
            <p className="text-gray-700 mb-2">
              Experienced in knowledge management, stakeholder collaboration, and global reporting delivery. Recognized for driving process improvements, mentoring new joiners, and ensuring audit readiness.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
