# CONTRIBUTING

Thanks for being willing to contribute!

**Working on your first Pull Request?** Take a look at this \*free\* series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Prerequisites

| Prerequisite                  | Version |
| ----------------------------- | ------- |
| [Node.js](https://nodejs.org) | `~^8`   |
| npm (comes with Node)         | `~^5`   |
| [git](https://git-scm.com/)   | `~^2^`  |

> _The latest releases are recommended_.

To check the versions of the above prerequisites or the correct installation of
them, run the following:

```bash
node -v
npm -v
git --version
```

If your versions are lower than the recommended, please consider upgrading them
to the latest versions.

### Fork anml repo

1. Go to the top level anml repository: <https://github.com/anml/anml>
2. Click the "Fork" Button in the upper right hand corner of the interface
   ([More Details Here](https://help.github.com/articles/fork-a-repo/))
3. After the repository has been forked, you will be taken to your copy of the
   anml repo at `yourUsername/anml`

#### Cloning Your Fork

1. Open a Terminal / Command Line / Bash Shell in your projects directory
   (_i.e.: `/yourprojectdirectory/`_)
2. Clone your fork of anml

```shell
$ git clone https://github.com/yourUsername/anml.git
```

##### (make sure to replace `yourUsername` with your GitHub Username)

This will download the entire anml repo to your projects directory.

#### Setup Your Upstream

1. Change directory to the new anml directory (`cd anml`)
2. Add a remote to the official anml repo:

```shell
$ git remote add upstream https://github.com/cdrainxv/anml.git
```

Congratulations, you now have a local copy of the anml repo!

#### Maintaining Your Fork

Now that you have a copy of your fork, there is work you will need to do to keep
it current.

##### **Rebasing from Upstream**

Do this prior to every time you create a branch for a PR:

1. Make sure you are on the `master` branch

```shell
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
```

If your aren't on `master`, resolve outstanding files / commits and checkout the
`master` branch

```shell
$ git checkout master
```

2. Do a pull with rebase against `upstream`

```shell
$ git pull --rebase upstream master
```

This will pull down all of the changes to the official master branch, without
making an additional commit in your local repo.

3. (_Optional_) Force push your updated master branch to your GitHub fork

```shell
$ git push origin master --force
```

This will overwrite the master branch of your fork.

### Create A Branch

Before you start working, you will need to create a separate branch specific to
the issue / feature you're working on. You will push your work to this branch.

#### Naming Your Branch

Name the branch something like `fix/xxx` or `feat/xxx` where `xxx` is a short
description of the changes or feature you are attempting to add. For example
`fix/email-login` would be a branch where you fix something specific to email
login.

#### Adding Your Branch

To create a branch on your local machine (and switch to this branch):

```shell
$ git checkout -b [name_of_your_new_branch]
```

And to push to GitHub:

```shell
$ git push origin [name_of_your_new_branch]
```

##### If you need more help with branching, take a look at _[this](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)_.

### Setup Linting

You should have
[ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html),
and it will highlight anything that doesn't conform to
[anml's JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121)
(you can find a summary of those rules
[here](https://github.com/cdrainx/anml/blob/master/.eslintrc.json)).

> Please do not ignore any linting errors, as they are meant to **help** you and
> to ensure a clean and simple code base.

### Setup anml

Once you have anml cloned, before you start the application, you first need to
install all of the dependencies:

```bash
# Install NPM dependencies
npm install
```

Then run `npm run validate` to as a precaution to ensure everything was setup
properly.

## Help needed

Please checkout the [open issues](https://github.com/cdrainxv/anml/issues) and
feel free to open issues and/or new features that the project might need. As of
now the project is pretty much bare bones, but I'm open to expanding it cover
more use cases.

Also, please watch the repo and respond to questions/bug reports/feature
requests! Thanks!

### Run The Test Suite

When you're ready to share your code, run the test suite:

```shell
$ npm run validate
```

And ensure all tests pass.

### Squash Your Commits

When you make a pull request, all of your changes need to be in one commit.

If you have made more than one commit, then you will need to _squash_ your
commits.

To do this, see
[Squashing Your Commits](http://forum.freecodecamp.org/t/how-to-squash-multiple-commits-into-one-with-git/13231).

### Commit Message

When you commit your changes, please use conventional commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

For help writing your commit message, execute `npm run commit` from the command
line and the [commitlint](https://www.npmjs.com/package/@commitlint/prompt-cli)
CLI tool will assist you in creating a
[conventional](https://conventionalcommits.org/) commit message.

### Creating A Pull Request

#### What is a Pull Request?

A pull request (PR) is a method of submitting proposed changes to the anml Repo
(or any Repo, for that matter). You will make changes to copies of the files
which make up anml in a personal fork, then apply to have them accepted by anml.

#### Important: ALWAYS EDIT ON A BRANCH

Take away only one thing from this document: Never, **EVER** make edits to the
`master` branch. ALWAYS make a new branch BEFORE you edit files. This is
critical, because if your PR is not accepted, your copy of staging will be
forever sullied and the only way to fix it is to delete your fork and re-fork.

##### Editing via your Local Fork

1. Perform the maintenance step of rebasing `master`.
2. Ensure you are on the `master` branch using `git status`:

```bash
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
```

1. If you are not on master or your working directory is not clean, resolve any
   outstanding files/commits and checkout staging `git checkout master`

2. Create a branch off of `master` with git: `git checkout -B branch/name-here`
   **Note:** Branch naming is important. Use a name like
   `fix/short-fix-description` or `feat/short-feature-description`.

3. Edit your file(s) locally with the editor of your choice

4. Check your `git status` to see unstaged files.

5. Add your edited files: `git add path/to/filename.ext` You can also do: `git
   add .` to add all unstaged files. Take care, though, because you can
   accidentally add files you don't want added. Review your `git status` first.

6. Commit your edits (follow any one of the below methods):

   a. Using the inbuilt script (_recommended_):

   * We have a
     [tool](https://marionebl.github.io/commitlint/#/guides-local-setup?id=test)
     that helps you to make standard commit messages. Simply execute `npm run
     commit` after you have added the necessary files as mentioned in the step
     earlier.

   b. Using commitlint CLI:

   * If you are already using [commitlint](http://commitizen.github.io/cz-cli/),
     simply doing a `git cz` works as expected too!

7. Squash your commits, if there are more than one.

8. If you would want to add/remove changes to previous commit simply add the
   files as in Step 5 earlier, and use `git commit --amend` or `git commit
   --amend --no-edit` (for keeping the same commit message).

9. Push your commits to your GitHub Fork: `git push -u origin branch/name-here`

10. Go to [Common Steps](#common-steps)

### Common Steps

1. Once the edits have been committed, you will be prompted to create a pull
   request on your fork's GitHub Page.

2. By default, all pull requests should be against the anml main repo, `master`
   branch.

3. Submit a
   [pull request](http://forum.freecodecamp.org/t/how-to-contribute-via-a-pull-request/19368)
   from your branch to anml's `master` branch.

4. The title (also called the subject) of your PR should be descriptive of your
   changes and succinctly indicates what is being fixed.

   * **Do not add the issue number in the PR title or commit message.**

   * Examples: `Add Test Cases to Bonfire Drop It` `Correct typo in Waypoint
     Size Your Images`

5. In the body of your PR include a more detailed summary of the changes you
   made and why.

   * If the PR is meant to fix an existing bug/issue then, at the end of your
     PR's description, append the keyword `closes` and #xxxx (where xxxx is the
     issue number). Example: `closes #1337`. This tells GitHub to close the
     existing issue, if the PR is merged.

6. Indicate if you have tested on a local copy of the site or not.

### How We Review and Merge Pull Requests

1. If an Issue Moderator QA's a pull request and confirms that the new code does
   what it is supposed without seeming to introduce any new bugs, they will
   comment "LGTM" which means "Looks good to me."

2. Another Issue Moderator will QA the same pull request. Once they have also
   confirmed that the new code does what it is supposed to without seeming to
   introduce any new bugs, they will merge the pull request.

### How We Close Stale Issues

We will close any issues or pull requests that have been inactive for more than
15 days, except those that match the following criteria:

* bugs that are confirmed
* pull requests that are waiting on other pull requests to be merged
* features that are a part of a GitHub project

### Next Steps

#### If your PR is accepted

Once your PR is accepted, you may delete the branch you created to submit it.
This keeps your working fork clean.

You can do this with a press of a button on the GitHub PR interface. You can
delete the local copy of the branch with: `git branch -D branch/to-delete-name`

#### If your PR is rejected

Don't despair! You should receive solid feedback from the Issue Moderators as to
why it was rejected and what changes are needed.

Many Pull Requests, especially first Pull Requests, require correction or
updating. If you have used the GitHub interface to create your PR, you will need
to close your PR, create a new branch, and re-submit.

If you have a local copy of the repo, you can make the requested changes and
amend your commit with: `git commit --amend` This will update your existing
commit. When you push it to your fork you will need to do a force push to
overwrite your old commit: `git push --force`

Be sure to post in the PR conversation that you have made the requested changes.

* [Writing great git commit messages](http://forum.freecodecamp.org/t/writing-good-git-commit-messages/13210)
