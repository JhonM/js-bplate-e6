class Person {
  constructor (first_name, last_name, project) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.project = project;
  }

  personalInfo () {
    console.log(`My name is ${first_name} ${last_name} and I currently working on ${project}`);
  }
}

export default Person;
