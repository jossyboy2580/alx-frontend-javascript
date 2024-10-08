export default function getStudentIdsSum(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return 0;
  }
  return studentsArray.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
