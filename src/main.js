const core = require('@actions/core');
const github = require('@actions/github');

const issueNumber = core.getInput('issue_number', { required: true });
const comment = core.getInput('comment', { required: true });
const token = core.getInput('token', { required: true });

const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

const octokit = new github.GitHub(token);

// TODO: Add the ability to comment on PRs
octokit.issues
  .createComment({
    owner,
    repo,
    issue_number: issueNumber,
    body: comment,
  })
  .then(
    ({ status }) => {
      if (status < 200 || status >= 300) {
        core.setFailed(`Received a ${status} status from API.`);
      }
    },
    (e) => core.setFailed(e.message)
  );
