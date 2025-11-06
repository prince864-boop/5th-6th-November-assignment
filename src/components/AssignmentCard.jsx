import React from "react";

function AssignmentCard({ title, description, questions }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
      <h1 className="text-2xl font-bold text-blue-700 mb-3">{title}</h1>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="space-y-2">
        {questions.map((q, index) => (
          <div
            key={index}
            className="p-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
          >
            <p className="text-gray-800">{q}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignmentCard;
