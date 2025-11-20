import React, { useState } from "react";

const Welcome = ({ title, subtitle }) => (
  <div className="p-6 bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg">
    <h1 className="text-3xl font-bold dark:text-white">{title}</h1>
    <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
  </div>
);

const Quote = () =>
  <p className="mt-4 italic text-black dark:text-black">
    “Stay curious — learning never stops.”
  </p>;

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="space-y-6">
      <Welcome title="Student Dashboard" subtitle="Manage your data smartly" />

      <div className="flex items-center gap-4">

        <Quote />
      </div>
    </div>
  );
}
