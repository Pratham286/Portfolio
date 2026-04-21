import React, { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // const [count, setCount] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchCount = async () => {
  //     try {
  //       const res = await fetch(
  //         "https://pratham.goatcounter.com/counter/.json"
  //       );
  //       if (!res.ok) throw new Error("Failed to fetch count");
  //       const data = await res.json();
  //       setCount(data.count_unique || data.count);
  //     } catch (err) {
  //       setError(err.message);
  //       console.error("Failed to fetch visitor count:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchCount();
  // }, []);

  const renderCount = () => {
    if (loading) return "...";
    if (error) return "unavailable";
    return count?.toLocaleString();
  };

  return (
  <footer className="bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-700 transition-colors duration-300">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="text-center">
        <p className="text-gray-700 dark:text-gray-400 text-sm">
          © {currentYear}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
};

export default Footer;