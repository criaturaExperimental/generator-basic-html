var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  initializing() {
    this.log('Welcome to my JUNGLE');
  }
  
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: 'WTFruck' // Default to current folder name
    }, {
      type: 'confirm',
      name: 'cool',
      message: 'Would you like to enable the Cool feature?',
      store: true
    }]).then((answers) => {
      this.log('app name', answers.name);
      this.log('cool feature', answers.cool);
    });
  }

  method1() {
    this.log('method 1 just ran');
  }

  end() {
    this.log('Goodbye my friend');
  }
};