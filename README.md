# Learning GitHub Actions
## Building automated CI / CD workflows with GitHub's DevOps service

#### This Repo has a few React and API projects in the code folder, which are used for understanding and learning Github Workflows.
### The key concepts here are commented within the workflow files themselves.
#### Hope you learn something new here and if you are new to GitHub Actions then hope is that it gives you a glimpse of what's instore for you when you get to this.

Dir Structure:

```
.
├── .github
│   └── workflows
│       ├── 01-first-workflow.yml
│       ├── 02-workflow-react.yml
│       ├── 03-caching-dependencies.yml
│       ├── 03-collecting-artifacts.yml
│       ├── 03-events-deep-dive.yml
│       ├── 03-issues.yml
│       ├── 03-workflow-react.yml
│       ├── 04-env-vars.yml
│       ├── 05-execution-flow.yml
│       ├── 06-conditional-exec-flow.yml
│       ├── 06-continue-on-error.yml
│       ├── 07-matrix-reloaded.yml
│       ├── 07-matrix.yml
│       ├── 07-reusable.yml
│       ├── 07-use-workflow.yml
│       ├── 08-docker-gha.yml
│       ├── 08-service-containers.yml
│       └── 08-service-runner-comm.yml
├── .gitignore
├── README.md
└── code
    ├── 01_Basics
    │   └── 01_First_Workflow
    │       └── README.md
    ├── 02_Starting_Project
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public
    │   │   └── vite.svg
    │   ├── src
    │   │   ├── .DS_Store
    │   │   ├── App.jsx
    │   │   ├── assets
    │   │   │   └── images
    │   │   │       └── logo.png
    │   │   ├── components
    │   │   │   ├── HelpArea.css
    │   │   │   ├── HelpArea.jsx
    │   │   │   ├── HelpBox.css
    │   │   │   ├── HelpBox.jsx
    │   │   │   ├── MainContent.jsx
    │   │   │   └── MainContent.test.jsx
    │   │   ├── index.css
    │   │   ├── main.jsx
    │   │   └── test
    │   │       └── setup.js
    │   └── vite.config.js
    ├── 03-practice-project
    │   ├── .eslintrc.cjs
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public
    │   │   └── vite.svg
    │   ├── src
    │   │   ├── App.jsx
    │   │   ├── assets
    │   │   │   ├── .DS_Store
    │   │   │   └── images
    │   │   │       └── logo.png
    │   │   ├── components
    │   │   │   ├── HelpArea.css
    │   │   │   ├── HelpArea.jsx
    │   │   │   ├── HelpBox.css
    │   │   │   ├── HelpBox.jsx
    │   │   │   ├── MainContent.jsx
    │   │   │   └── MainContent.test.jsx
    │   │   ├── index.css
    │   │   ├── main.jsx
    │   │   └── test
    │   │       └── setup.js
    │   └── vite.config.js
    ├── 04-Env-Secrets-Demo
    │   ├── app.js
    │   ├── data
    │   │   └── database.js
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── playwright.config.js
    │   ├── routes
    │   │   └── events.js
    │   └── tests
    │       └── events-api.spec.js
    └── 05-docker-gha-demo
        ├── Dockerfile
        ├── app.js
        ├── data
        │   └── database.js
        ├── package-lock.json
        ├── package.json
        ├── playwright.config.js
        ├── routes
        │   └── events.js
        └── tests
            └── events-api.spec.js
```
