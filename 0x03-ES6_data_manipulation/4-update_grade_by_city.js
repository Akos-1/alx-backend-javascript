export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  const studentsInCity = students.filter((student) => student.location === city);

  // Update grades for students in the specified city
  studentsInCity.forEach((student) => {
    const grade = newGrades.find((grade) => grade.id === student.id);
    if (grade) {
      student.grade = grade.grade;
    }
  });

  return studentsInCity;
}
