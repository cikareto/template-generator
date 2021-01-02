module.exports = (appName) => {
  return [
    { 
      type: "input", 
      name: "name", 
      message: "project name", 
      default: appName, // Default to current folder name
    },
    {
      type: 'input',
      name: 'version',
      message: 'Version',
      default: '1.0.0'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description'
    },
    {
      type: 'list',
      name: 'framework',
      massage: 'Project\'s framework',
      choices: ['create-react-app']
    }
  ];
};
