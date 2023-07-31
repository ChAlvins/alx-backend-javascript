export default function getListStudentIds(studentsArray) {
  if (Array.isArray(studentsArray) === false) {
    return [];
  }
  return studentsArray.map((studentItem) => studentItem.id);
}
