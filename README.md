# Jenkins Node.js CI Project

A simple Node.js project prepared for a Jenkins CI pipeline demonstration.

## Local commands

Install dependencies:
```bash
npm ci
```

Run tests:
```bash
npm test
```

Build/check:
```bash
npm run build
```

Run application:
```bash
npm start
```

## Jenkins

The included `Jenkinsfile` automatically:

1. Clones the GitHub repository
2. Installs npm dependencies
3. Runs automated tests
4. Checks the Node.js application
5. Runs the application
6. Reports SUCCESS or FAILURE

## Jenkins requirement

Configure a NodeJS tool in:

**Manage Jenkins → Tools → NodeJS installations**
Jenkins automatic CI test

Use the name:

`NodeJS`

The Jenkinsfile expects this exact tool name.
