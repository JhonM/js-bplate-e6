const TestPerson = class Person {
  constructor(first_name, last_name, project) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.project = project
  }

  personalInfo() {
    console.log(`My name is ${this.first_name} ${this.last_name} and I currently working on ${this.project}`);
  }
}

export function jhonTest() {return 'Jhon'};
