const multiplyValue = (value: number, multiplier: number = 2): number => {
  if (multiplier === 0) {
    return 0;
  } else {
    return value * multiplier;
  }
};

type Value = string | number | boolean;
type ValueResult = string | number;
const processInput = (value: Value): ValueResult => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value === true ? "Active" : "Inactive";
  }
};

const formatCoordinate = (
  data: readonly [latitude: number, longitude: number, locationName: string],
): string => {
  const [latitude, longitude, locationName] = data;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];
  return result.concat(...arrays);
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (Course: Course[], minStudents: number): Course[] => {
  const result: Course[] = [];
  for (const course of Course) {
    if (course.students >= minStudents && course.isPublished === true) {
      result.push(course);
    }
  }
  return result;
};

const pluckValues = <T , K extends keyof T>(items: T[],key: K):T[K][]=>{
  const result :T[K][] =[];
  for (const i of items){
    result.push(i[key])
  }
  return result;
}

class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  const validatePromise = new Promise<string>((resolve, reject): void => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }
    setTimeout((): void => {
      resolve("Access Granted");
    }, 1000);
  });
  return validatePromise;
};
