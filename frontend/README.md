This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.


#### VSCode configuration
Add the following workspace settings for `Eslint` && `Prettier` via settings or create a file `{PROJECT_ROOT_FOLDER}/.vscode/settings.json`

```
{
  "files.associations": {
    "*.jsx": "javascriptreact"
  },
  "eslint.workingDirectories": [
    "./"
  ],
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

`npm run lint` - will run the linting and tell you what is wrong
`npm run format` - will format all the code based on your prettier and linting configuration
`npm run isready` - a script that is very useful to run before committing and pushing code to git

#### Storybook

[Storybook](https://storybook.js.org/) is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.

Storybook runs outside of the main app so users can develop UI components in isolation without worrying about app specific dependencies and requirements.

`npm run storybook` - start storybook


#### Testing
Frontend includes [JEST](https://jestjs.io/docs/en/getting-started) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

`npm run test` - run tests


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
