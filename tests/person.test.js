/* global describe, it, before */

import chai from 'chai';
import { Person } from '../lib/library.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my Person library', () => {
  before(() => {
    lib = new Person('Jhon', 'Majoor', 'JS Boilerplate');
  });
  describe('when I need person info', () => {
    it('should return the personal info', () => {
      expect(lib.personalInfo).to.be.equal('My name is Jhon Majoor and I currently working on JS Boilerplate');
    });
  });
});
