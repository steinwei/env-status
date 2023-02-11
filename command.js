const child_process = require('childprocess')
const GIT_FLOW = require('./constants').default

class Command {
  constructor() {}

  _exec(cmd, ...args) {
    return child_process.exec(cmd, args)
  }

  getLastCommit() {
    this._exec('git', 'log')
  }

  getCurrentBranch() {
    this._exec('git', 'branch')
  }

  fetch() {
    this._exec('git', 'fetch')
  }

  getGitFlow(env) {
    return GIT_FLOW[env] || 'feat'
  }
}

// 1. get last commit, get current branch
// 2. check current branch is correct or not
// 3. if false, stop push code, and git error message to warn developer
// 4. if true, push code

export default Command
