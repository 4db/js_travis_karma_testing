[![Build Status](https://travis-ci.org/4db/js_travis_karma_testing.svg?branch=master)](https://travis-ci.org/4db/js_travis_karma_testing)

# JS Testing with Travis CLI, Jasmine, and Karma.js

### Cmd to run tests on Local

```bash
karma start my.conf.js --single-run
```
### Manual install

- Create a new project & install Karma.js

```bash
npm init

npm install karma --save-dev
```

- Init Karma.js configuration

```bash
karma init my.conf.js
```
Match cofig with "my.conf.js" from this repo

- Create tests folder and project folder(dist), add test files and update my.conf.js
- Create ".travis.yml" and sync repo in Travis
