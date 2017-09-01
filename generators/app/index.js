var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  paths() {
    this.sourceRoot();
    // returns './templates'

    this.templatePath('index.js');
    // returns './templates/index.js'
  }

  initializing() {
    this.log('Welcome to my JUNGLE!');
  }

  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'title',
      message: 'Your web title',
      default: 'Home'
    }, {
      type: 'input',
      name: 'author',
      message: 'Author',
      default: 'Lucas deGomez'
    }]).then((answers) => {
      this.title = answers.title
      this.author = answers.author;
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
    this.fs.copy(
      this.templatePath('style.css'),
      this.destinationPath('css/style.css')
    );
    this.fs.copy(
      this.templatePath('normalize.css'),
      this.destinationPath('css/_normalize.css')
    );
    this.fs.copy(
      this.templatePath('script.js'),
      this.destinationPath('js/script.js')
    );
  }

  end() {
    this.log('Live long and prosper,.. HAPPY CODING!');
    this.fs.delete(
      // cleans up Yeoman rc footprint
      this.destinationPath('.yo-rc.json')
    )
  }
};