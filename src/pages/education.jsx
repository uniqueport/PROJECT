import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Education() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-8 flex flex-col items-center">
      <motion.img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
        alt="Education & Certifications"
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
            <h2 className="text-2xl font-bold mb-4">Education & Certifications</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Bachelor’s Degree in Business Administration</strong> – Bharathiar University</li>
              <li><strong>Post Graduate Diploma in Computer Application (PGDCA)</strong> – Browzone Infotech</li>
              <li><strong>Certifications:</strong> Advanced Excel, Power BI, Power Automate, Business Analyst (LinkedIn Learning), EY Audit Job Simulation</li>
              <li><strong>Achievements:</strong> On-the-Spot Excellence Award, reduced ramp-up time by 30% mentoring new joiners, client appreciations for global reporting accuracy.</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
