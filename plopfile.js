const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your component name?',
  },
  {
    type: 'input',
    name: 'path',
    message: 'Where should it be generated? (/src/{{YOUR_PATH}})',
    default: 'components',
  },
];

const actions = [
  {
    type: 'add',
    path: 'src/components/{{pascalCase name}}.tsx',
    templateFile: 'plop-templates/Component.tsx.hbs',
  },
  {
    type: 'add',
    path: 'src/hooks/{{camelCase name}}.tsx',
  },
];

module.exports = (plop) => {
  plop.setGenerator('components', {
    description: 'Generate Components',
    actions: [actions[0]], // array of actions
    prompts, // array of inquirer prompts
  });
  plop.setGenerator('hooks', {
    description: 'Generate Hooks',
    actions: [actions[1]], // array of actions
    prompts, // array of inquirer prompts
  });
};
