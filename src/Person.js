export default class Person {
  constructor (firstName, lastName, project) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.project = project;
  }

  get personalInfo () {
    /* eslint-disable no-console, max-len */
    return `My name is ${this.firstName} ${this.lastName} and I currently working on ${this.project}`;
  }
}
