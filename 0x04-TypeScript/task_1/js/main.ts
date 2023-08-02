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

interface StudentClassInterface {
  firstName: string,
  lastName: string
}

interface StudentClassConstructorInterface {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass('mike', 'pepe');
console.log(student.displayName());
console.log(student.workOnHomework());
