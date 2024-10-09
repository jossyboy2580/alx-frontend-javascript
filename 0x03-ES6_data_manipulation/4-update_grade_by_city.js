export default function upgradeStudentGradeByCity(studentArray, city, newGrades) {
  return studentArray.map((studentObject) => newGrades.filter((student) => {
    if (studentObject.id === student.id) {
      return student.grade;
    }

    return 'N/A';
  }));
}
