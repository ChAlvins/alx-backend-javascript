interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number;
}
export default Directors;

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher = (firstName: string, lastName: string):string => `${firstName.charAt(0)}. ${lastName}`;
