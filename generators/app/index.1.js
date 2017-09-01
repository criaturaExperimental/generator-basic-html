// alternative file to showcase some examples in prompt

var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  paths() {
    this.sourceRoot();
    // returns './templates'

    this.templatePath('index.js');
    // returns './templates/index.js'
  }

  initializing() {
    this.log('Welcome to my JUNGLE');
  }

  // some prompts examples
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'title',
      message: 'Your web title',
      default: 'Home' // Default to current folder name
    }, {
      type: 'confirm',
      name: 'cool',
      message: 'Would you like to enable the Cool feature?',
      store: true
    }, {
      type: 'list',
      name: 'author',
      message: 'Select your authoring',
      choices: [
        'Anonymous',
        'cool',
        'Lucas deGomez'
      ]
    }, {
      type: 'checkbox',
      name: 'files',
      message: 'Initialize this?',
      choices: [
        'JavaScript',
        'Css'
      ]
    }]).then((answers) => {
      this.log('app name', answers.title);
      this.title = answers.title
      this.log('cool feature', answers.cool);
      this.author = answers.author;
      this.log('files?', answers.files);
      this.options = answers.files;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      {
        title: this.title,
        author: this.author
      }
    );
  }

  method1() {
    this.log('method 1 just ran');
  }

  end() {
    this.log('Goodbye my friend');
    this.fs.delete(
      // cleans up Yeoman rc
      this.destinationPath('.yo-rc.json')
    )
  }
};