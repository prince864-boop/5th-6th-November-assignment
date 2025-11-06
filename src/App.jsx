import React from "react";
import AssignmentCard from "./components/AssignmentCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <AssignmentCard
        title="Today's Assignment"
        description="Only answer the MCQs given in this document, plus the stretch task discussed above."
        questions={[
          "1. Why do we use React?",
          "Ans= React is used for building user interfaces (UIs) for web and native applications by creating reusable components",
          "2. What is Vite? And how is it better than the traditional create-react-app command for creating React applications?",
          "Ans= Vite is a next-generation frontend build tool that significantly enhances the development experience for modern web projects, including React applications.",
          "1. Faster Startup:",
          "Vite uses native ES modules and loads only what's needed, while CRA bundles the whole app before running.",

          "2. Powered by ESBuild:",
          "Uses a super-fast Go-based bundler for pre-bundling dependencies.",

          "3. Simple Configuration:",
          "Easier setup with flexible, modern defaults compared to CRA’s heavier setup."
        ]}
      />
    </div>
  );
}

export default App;
