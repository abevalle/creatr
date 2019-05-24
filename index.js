const Octokit = require('@octokit/rest');
const octokit = new Octokit({
    auth: user,
    userAgent: 'createrGit'
});