import * as core from '@actions/core';
import * as github from '@actions/github';

const issue = core.getInput('issue', { required: true });
const comment = core.getInput('comment', { required: true });
const token = core.getInput('token', { required: true });

const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

const octokit = new github.GitHub(token);

octokit.issues
  .createComment({
    owner,
    repo,
    issue_number: issue,
    body: comment,
  })
  .then(
    ({ status }) => {
      if (status < 200 || status >= 300) {
        core.setFailed(`Received a status ${status} from API.`);
      }
    },
    (e) => core.setFailed(e.message)
  );
