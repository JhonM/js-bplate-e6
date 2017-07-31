// @flow

export default class Person {
  firstName: string;
  lastName: string;
  project: string;

  constructor (firstName: string, lastName: string, project: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.project = project;
  }

  personalInfo (): string {
    /* eslint-disable no-console, max-len */
    return `My name is ${this.firstName} ${this.lastName} and I currently working on ${this.project}.`;
  }
}
