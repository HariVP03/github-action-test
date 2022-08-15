const core = require('@actions/core');
const github = require('@actions/github');

try {
  const apps = core.getInput('input').split('\n').at(-1);
  core.setOutput('apps', apps);
} catch (error) {
  core.setFailed(error.message);
}
