Step1: Install package.json
npm init -y

Step2: Install webpack dependencies
npm install --save-dev webpack webpack-cli webpack-dev-server

Step3: Install react dependencies
npm install react react-dom

Step4: Install babel dependencies
npm install--save-dev babel-loader @babel/preset-env @
babel/core @babel/plugin-transform-runtime @babel/preset-react @babel/runtime

Step5: Install babel.config.json
touch babel.config.json

Step6: Install webpack.config.js
touch webpack.config.js

Step7: Create npm commands in package.json
"start": "webpack --watch",
"dev": "webpack"

Step8: Create file directory

- public
  -- index.html
- src
  -- index.js
  -- app.js

Step9: script tag inside index.html

Step10: Install Tailwind.css

go to tailwindcss docs

Step11: install .gitignore
