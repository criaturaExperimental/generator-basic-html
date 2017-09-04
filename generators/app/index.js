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
    }, {
      type: 'confirm',
      name: 'normalize',
      message: 'Would you like to use normalize?'
    }]).then((answers) => {
      this.title = answers.title;
      this.author = answers.author;
      this.normalize = answers.normalize;
    });
  }

  writing() {
    // Object passed to template
    let template_info = {
      title: this.title,
      author: this.author,
      normalize: false
    }
    // Object builder
    if(this.normalize) {
      template_info.normalize = `<link href="css/_normalize.css" rel="stylesheet">`
    }
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      template_info
    );
    this.fs.copy(
      this.templatePath('style.css'),
      this.destinationPath('css/style.css')
    );
    if(this.normalize) {
      this.fs.copy(
        this.templatePath('normalize.css'),
        this.destinationPath('css/_normalize.css')
      );
    }
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