
function StudentDisplay({ students, deleteStudent }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {students.map((student, index) => (
        <div
          key={student.id}
          className={`p-6 rounded-2xl shadow-md border-2
          hover:shadow-xl transition
          ${
            index % 2 === 0
              ? "bg-indigo-50 border-indigo-200"
              : "bg-pink-50 border-pink-200"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-12 h-12 rounded-full flex items-center
              justify-center text-white text-xl font-bold
              ${
                index % 2 === 0
                  ? "bg-indigo-500"
                  : "bg-pink-500"
              }`}
            >
              {student.name.charAt(0)}
            </div>

            <div>
              <h2 className="font-bold text-lg text-gray-800">
                {student.name}
              </h2>
              <p className="text-sm text-gray-500">
                Student ID: {student.id}
              </p>
            </div>
          </div>

          <p className="text-gray-600 mb-2">
            📧 {student.email}
          </p>

          <p className="text-gray-600 mb-4">
            🏙️ {student.city}
          </p>

          <button
            onClick={() => deleteStudent(student.id)}
            className="w-full bg-red-500 text-white py-2 rounded-lg
            font-semibold hover:bg-red-600 transition"
          >
            Delete Student
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentDisplay;
