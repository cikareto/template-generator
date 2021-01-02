const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const mkdirp = require("mkdirp");
const path = require("path");

const prompts = require("./fixtures/prompts");

module.exports = class extends Generator {
  initializing() {
    this.props = {};
  }

  prompting() {
    this.log(
      yosay(`Welcome to the sensational ${chalk.cyan("cikareto")} generator!`)
    );

    const appName = path.basename(process.cwd());
    return this.prompt(prompts(appName)).then((props) => {
      this.props = props;
    });
  }

  default() {
    if (path.basename(this.destinationPath()) !== this.props.name) {
      this.log(
        `Your project must be inside a folder named ${chalk.bold.cyan(
          `'${this.props.name}'`
        )}\nI'll automatically create this folder.\n`
      );
      mkdirp(this.props.name);
      this.destinationRoot(this.destinationPath(this.props.name));

      this.spawnCommandSync("git", ["init"]);
    }
  }

  writing() {
    this.fs.copy(
      this.templatePath(this.props.framework),
      this.destinationPath(".")
    );

    // copy hiding files
    this.fs.copy(
      this.templatePath(`${this.props.framework}/.*`),
      this.destinationPath(".")
    );
  }

  install() {
    this.installDependencies({ bower: false });
  }
};
