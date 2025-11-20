import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import studentData from "../data/students";

export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = studentData.find((s) => s.id === parseInt(id));

  if (!student) return <p>Student not found</p>;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <img src={student.image} className="w-32 h-32 rounded-full mb-4" />
      <h2 className="text-2xl font-bold dark:text-white">
        {student.firstName} {student.lastName}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{student.email}</p>
      <p className="text-gray-600 dark:text-gray-300 mt-2">City: {student.address.city}</p>

      <button
        onClick={() => navigate("/students")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Back
      </button>
    </div>
  );
}
