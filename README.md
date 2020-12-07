# COMP.SE.200-2020-252906-431447

[![Coverage Status](https://coveralls.io/repos/github/mikitane/COMP.SE.200-2020-252906-431447/badge.svg?branch=master)](https://coveralls.io/github/mikitane/COMP.SE.200-2020-252906-431447?branch=master)

[![Build Status](https://travis-ci.com/mikitane/COMP.SE.200-2020-252906-431447.svg?branch=master)](https://travis-ci.com/mikitane/COMP.SE.200-2020-252906-431447)

## Running tests locally
You need git, node and npm installed on your machine. Run the tests by following these steps:
1. Clone the project

   `git clone https://github.com/mikitane/COMP.SE.200-2020-252906-431447.git`

2. Install dependencies

   `npm install`

3. Run tests

   `npm run test`

## Local test reports
When running tests locally with `npm run test` the test reports will be generated to following locations:
* `/coverage` - Coverage reports
* `/mochawesome-report` - Mochawesome reports


## Test reports from Travis CI
When pushing new commits, a Travis CI pipeline is started. The pipeline pushes reports to Coveralls and Amazon S3.

Those reports are available here:

### Coveralls (Coverage reports)
https://coveralls.io/github/mikitane/COMP.SE.200-2020-252906-431447?branch=master

### AWS S3 (Coverage + Mochawesome reports)

#### Coverage
https://software-testing-reports.s3.amazonaws.com//<branch>/<latest>or<commit-id>/mochawesome-report/mochawesome.html

E.g. https://software-testing-reports.s3.amazonaws.com/master/latest/mochawesome-report/mochawesome.html

#### Mochawesome
https://software-testing-reports.s3.amazonaws.com/<branch>/<latest>or<commit-id>/coverage/<name-of-the-file-tested>.html

E.g. https://software-testing-reports.s3.amazonaws.com/master/latest/coverage/at.js.html
