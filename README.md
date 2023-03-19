# (Application Name)

#### (Brief Description of Application)

#### By (Sierra Rhodes)

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

## Setup/Installation Requirements

* _Set up basic project structure: Add index.html file, make src a directory and add index.js and project.js to the directory, go back to the root directory and make a css directory and add styles.css to it_
* _Add .gitignore file to root directory and add node_modules/
.DS_Store // only include this if you are on a Mac
dist/ to the file. Make your first commit: git add .gitignore
$ git commit -m "add .gitignore file to project"
$ git push origin main_
* _Install node if not done already. To check input node -v into command line_
* _Open the command line then navigate to the root directory and input npm init -y_
* _inside the command line run this command: npm install webpack@4.46.0 --save-dev --save-exact_
* _Install webpack-cli: npm install webpack-cli@3.3.12 --save-dev_
* _Inside the package.json add "scripts": {
    "build": "webpack"
  },_
* _Inside the command line run: npm run build. You should receive a warning in configuration._
* _Inside the package.json add  "scripts": {
    "build": "webpack --mode=development"
  }, add the update_
* _Inside the command line run: npm run build_
* _Look inside distt/main.js. The bundled JavaScript should look different._
* _To configure webpack add webpack.config.js to your root directory._
* _Add this code to webpack.config.js: file const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};_
* _Install css loader: npm install style-loader@1.3.0 css-loader@3.6.0 --save-dev_
* _Add updated code to webpack.config.js: const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};_
* _Move the css/styles.css to the src directory and add import './css/styles.css'; to the top of the src/index.js file_
* _Move index.html file from the dist folder back into src folder_
* _Install npm install html-webpack-plugin@4.5.2 --save-dev_
* _Update webpack.config.js with new code:const path = require('path');
// There's a new line below this one!
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // The plugins key below this line is also new!
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}; _
* _run: npm run build. It should add index.html to the dist folder_
* _To install CleanWebpackPlugin run: npm install clean-webpack-plugin@3.0.0 --save-dev _
* _Add updated code to webpack.config.js: const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // new line

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(), // new line
    new HtmlWebpackPlugin({
      title: 'Shape Tracker',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}; _
* _To addd source map add this code to webpack.config.js: module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',  // new line _
* _To installl webpack development server run: npm install webpack-dev-server@3.11.3 --save-dev --save-exact_
* _Add updated code to webpack.config.js: module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {                 // new line
    contentBase: './dist'      // new line
  },                           // new line _
* _Add new code to package.json:   "scripts": {
    "build": "webpack --mode=development",
    "start": "webpack-dev-server --open --mode=development"
  },_
* _If you run npm run start to start the development server. If cloning down project npm run build needs to ran first then npm run start_
* _Add updated code so npm start can do both things:  "scripts": {
    "build": "webpack --mode=development",
    "start": "npm run build && webpack-dev-server --open --mode=development"
  },_
* _Insttall ESLint: npm install eslint@8.18.0 --save-dev and npm install eslint-webpack-plugin@2.7.0 --save-dev_
* _Update webpack.config.js: const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');   // new line!

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'eval-source-map',
  devServer: {               
    contentBase: './dist'    
  },
  plugins: [
    new ESLintPlugin(), // new line!
    new CleanWebpackPlugin(),
    ...
  ]
  ...
}   _
* _Create a new file in root directory called. .eslintrc and add code: {
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "extends": "eslint:recommended",
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "rules": {
    "semi": 1,
    "indent": ["warn", 2],
    "no-console": "warn"
  }
} _
* _Add updated code to package.json:   "scripts": {
    "build": "webpack --mode=development",
    "start": "npm run build && webpack-dev-server --open --mode=development",
    "lint": "eslint src/*.js"
  }, _
* _run: npm run lint to test_
* _Add updated code to .eslintrc: "rules": {
  "semi": 1,
  "indent": ["warn", 2],
  "no-debugger": "warn" // new line
}_
* _Install Bootstrap: npm install bootstrap@5.2.3_
* _Add import 'bootstrap'; to src/index.js_
* _src/index.js should look like: import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';_
* _Install Jest: npm install jest@24.9.0 --save-dev _
* _Add updated code to package.json: "scripts": {
  "build": "webpack --mode=development",
  "start": "npm run build && webpack-dev-server --open --mode=development",
  "lint": "eslint src/*.js",
  "test": "jest --coverage" 
}_
* _Add new directory to root directory called __tests___
* _Add project.test.js to __tests___
* _run: npm run test. It should come back as Test suite failed to run._
* _Install Babel: npm install @babel/core@7.18.6 --save-dev _
* _run: npm install @babel/plugin-transform-modules-commonjs@7.18.6 --save-dev _
* _Add new file to root directory and name it .babelrc_
* _Add new code to .bablerc: {
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  }
} _
* __
* __





## Known Bugs

* _Any known issues_
* _should go here_

## License
