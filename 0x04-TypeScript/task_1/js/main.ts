interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

class TeacherClass implements Teacher {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    public fullTimeEmployee: boolean,
    public location: string,
    public yearsOfExperience?: number,
    public contract?: boolean,
    // Allow other dynamic properties
    ...rest: any[]
  ) {
    // Assign dynamic properties
    rest.forEach(property => {
      this[property.key] = property.value;
    });
  }
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstLetter}. ${fullLastName}`;
};

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface Student {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements Student {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

