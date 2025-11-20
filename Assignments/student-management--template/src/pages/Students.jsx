import React, { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
import studentData from "../data/students";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(studentData);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Students</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {students.map((s) => (
          <StudentCard key={s.id} student={s} />
        ))}
      </div>
    </div>
  );
}
