export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  const studentsInCity = studentsArray.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const matchingGrade = newGrades.filter((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: matchingGrade.length ? matchingGrade[0].grade : 'N/A',
    };
  });
}
