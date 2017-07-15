class Person {
  constructor (firstName, lastName, project) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.project = project;
  }

  personalInfo () {
    /* eslint-disable no-console, max-len */
    console.log(`My name is ${this.firstName} ${this.lastName} and I currently working on ${this.project}`);
  }
}

export default Person;
