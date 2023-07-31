export default function getStudentsByLocation(studentsArray, city) {
  const studentsArrayObj = studentsArray.filter((arrLoc) => arrLoc.location === city);
  return studentsArrayObj;
}
