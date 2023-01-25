export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component', {
    description: 'Generates a Vue component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name, e.g. NatureBanner',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.vue',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.ts',
        templateFile: 'templates/component.test.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/component.index.hbs',
      },
    ],
  });
  plop.setGenerator('layout', {
    description: 'Generates a VueRouter layout component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'Layout name, e.g. Main (will automatically append Layout to name)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/layouts/{{pascalCase name}}Layout.vue',
        templateFile: 'templates/layout.hbs',
      },
      {
        type: 'append',
        path: 'src/router/routes.ts',
        pattern: 'FOR_PLOP: LayoutImports',
        templateFile: 'templates/layout.import.hbs',
      },
    ],
  });
  plop.setGenerator('page', {
    description: 'Generates a new Page component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'Page name, e.g. Home (will automatically append Page to name)',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Path for that pages Route, e.g. /home',
      },
      // {
      //   type: 'list',
      //   name: 'layout',
      //   choices: ['Main'],
      //   message: 'Layout to be used for that Route.',
      // },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}Page/{{pascalCase name}}Page.vue',
        templateFile: 'templates/page.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}Page/{{pascalCase name}}Page.test.ts',
        templateFile: 'templates/page.test.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}Page/index.ts',
        templateFile: 'templates/page.index.hbs',
      },
      {
        type: 'append',
        path: 'src/router/routes.ts',
        pattern: 'FOR_PLOP: PageImports',
        templateFile: 'templates/page.import.hbs',
      },
      {
        type: 'append',
        path: 'src/router/routes.ts',
        pattern: 'FOR_PLOP: Pages',
        templateFile: 'templates/route.hbs',
      },
    ],
  });
}
