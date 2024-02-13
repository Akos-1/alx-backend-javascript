export default function updateStudentGradeByCity(students, city, newGrades) {
  return getListstudents
    .filter(student => student.location === city);
    .map(student) => {
      const grade = newGrad.find((grade) => grade.studentId === student.id);
      return { ...student, grade: (grade && grade.grade) || 'N/A'  };
    });
}
