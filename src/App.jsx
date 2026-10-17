
import { useState } from "react";
import StudentDisplay from "./pages/StudentDisplay";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav Patel", email: "aarav@gmail.com", city: "Ahmedabad" },
    { id: 2, name: "Diya Shah", email: "diya@gmail.com", city: "Mehsana" },
    { id: 3, name: "Krish Mehta", email: "krish@gmail.com", city: "Surat" },
    { id: 4, name: "Anaya Desai", email: "anaya@gmail.com", city: "Vadodara" },
    { id: 5, name: "Rohan Patel", email: "rohan@gmail.com", city: "Rajkot" },
    { id: 6, name: "Isha Joshi", email: "isha@gmail.com", city: "Gandhinagar" },
  ]);

  function deleteStudent(id) {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-3">
          Student Management
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Total Students: {students.length}
        </p>

        {students.length === 0 ? (
          <p className="text-center text-gray-600 text-xl">
            No students available.
          </p>
        ) : (
          <StudentDisplay
            students={students}
            deleteStudent={deleteStudent}
          />
        )}
      </div>
    </div>
  );
}

export default App;
